"""Convierte el volcado SQL de tbMedicos en src/data/medicos.ts con datos normalizados.

Uso (desde portal-cmr/):
    python scripts/sql_a_ts.py "../nueva data/tbMedicos-cmr.sql" src/data/medicos.ts reporte.json

Si aparece una especialidad nueva, el script se detiene: agréguela a MAPA.
"""
import re, sys, json, unicodedata, io

SQL, OUT, REPORTE = sys.argv[1], sys.argv[2], sys.argv[3]

def clave(s):
    s = unicodedata.normalize('NFD', s.strip().lower())
    return ''.join(c for c in s if unicodedata.category(c) != 'Mn')

# especialidad cruda (sin acentos, minúsculas) -> (canónica, detalle opcional)
MAPA = {
    'pediatra': ('Pediatría', None),
    'peditra': ('Pediatría', None),
    'cirugia pediatrica': ('Cirugía Pediátrica', None),
    'nutricionista pediatrico': ('Nutrición Pediátrica', None),
    'ginecologia & obstetricia': ('Ginecología y Obstetricia', None),
    'ginecologia': ('Ginecología y Obstetricia', 'Ginecología'),
    'ginecologia & obstetricia & oncologia': ('Ginecología y Obstetricia', 'Ginecología, Obstetricia y Oncología'),
    'ginecologia & mastologa': ('Ginecología y Obstetricia', 'Ginecología y Mastología'),
    'ginecologia & endocrinologa': ('Ginecología y Obstetricia', 'Ginecología y Endocrinología'),
    'internista': ('Medicina Interna', None),
    'neumologia': ('Neumología', None),
    'neumologa': ('Neumología', None),
    'neumologia pediatrica': ('Neumología Pediátrica', None),
    'cardiologia': ('Cardiología', None),
    'cardiologia pediatrica': ('Cardiología Pediátrica', None),
    'neurocirugia': ('Neurocirugía', None),
    'neurologia': ('Neurología', None),
    'endocrinologia': ('Endocrinología', None),
    'endocrinologia pediatrica': ('Endocrinología Pediátrica', None),
    'diabetologa & nutricionista': ('Diabetología y Nutrición', None),
    'oftalmologia': ('Oftalmología', None),
    'ortopedia': ('Ortopedia y Traumatología', None),
    'ortopedia & traumatologo': ('Ortopedia y Traumatología', None),
    'hematologia / medicina interna': ('Hematología', 'Hematología y Medicina Interna'),
    'hematologia pediatrica': ('Hematología Pediátrica', None),
    'infectologia': ('Infectología', None),
    'gastroenterologia': ('Gastroenterología', None),
    'gastroenterologo': ('Gastroenterología', None),
    'gastroenterologia pediatrica': ('Gastroenterología Pediátrica', None),
    'cirugia oncologica': ('Cirugía Oncológica', None),
    'cirugia general': ('Cirugía General', None),
    'maxilo facial & odontologia': ('Odontología y Maxilofacial', 'Cirugía Maxilofacial y Odontología'),
    'odontologia': ('Odontología y Maxilofacial', 'Odontología'),
    'otorrinolaringologia': ('Otorrinolaringología', None),
    'urologia': ('Urología', None),
    'dermatologia': ('Dermatología', None),
    'nefrologia': ('Nefrología', None),
    'cirugia cardiovascular': ('Cirugía Cardiovascular', None),
    'cirugia plastica': ('Cirugía Plástica', None),
    'cirugia coloproctologo': ('Coloproctología', None),
    'reumatologa': ('Reumatología', None),
}

texto = io.open(SQL, encoding='utf-8').read()
bloque = texto.split('VALUES', 1)[1].split(';', 1)[0]

# cada fila: (id, 'a', 'b', ..., NULL|'x', 'g')
fila_re = re.compile(r"\((\d+),\s*(.*?)\)(?:,|$)", re.S)
campo_re = re.compile(r"'((?:[^'\\]|\\.)*)'|NULL")

medicos, avisos, departamentos = [], [], []

for m in fila_re.finditer(bloque):
    id_ = int(m.group(1))
    campos = []
    for c in campo_re.finditer(m.group(2)):
        campos.append(None if c.group(0) == 'NULL' else c.group(1))
    nombre, apellido, esp, cons, horario, tel, img, _genero = campos

    nombre = re.sub(r'\s+', ' ', (nombre or '').strip())
    apellido = re.sub(r'\s+', ' ', (apellido or '').strip())

    k = clave(esp)
    if k == 'anestesiologia' and not apellido:
        departamentos.append({'nombre': 'Anestesiología', 'consultorio': cons.strip(), 'telefono': tel.strip()})
        avisos.append(f'ID {id_}: "Anestesiologia" está cargado como médico; es un departamento. Excluido del directorio.')
        continue

    if k not in MAPA:
        sys.exit(f'Especialidad sin mapear: {esp!r} (ID {id_})')
    canon, detalle = MAPA[k]
    if k == 'peditra':
        avisos.append(f'ID {id_}: especialidad escrita "Peditra" (corregida a Pediatría).')

    # teléfonos
    telefonos = []
    t = (tel or '').strip()
    if not t:
        avisos.append(f'ID {id_} ({nombre} {apellido}): sin teléfono registrado.')
    else:
        if re.search(r'\sEx$', t):
            avisos.append(f'ID {id_} ({nombre} {apellido}): teléfono con extensión incompleta "{t}".')
            t = re.sub(r'\s+Ex$', '', t)
        t = re.sub(r'\s+ext\.?\s*', ' ext. ', t, flags=re.I)
        telefonos = [p.strip() for p in t.split('/') if p.strip()]

    h = (horario or '').strip() or None
    foto = None if (img or '0.png') == '0.png' else img

    medicos.append({
        'id': id_,
        'nombre': f'{nombre} {apellido}'.strip(),
        'apellido': apellido,
        'especialidad': canon,
        **({'detalle': detalle} if detalle else {}),
        'consultorio': cons.strip(),
        'telefonos': telefonos,
        'horario': h,
        'foto': foto,
    })

medicos.sort(key=lambda d: (clave(d['apellido']), clave(d['nombre'])))
for d in medicos:
    del d['apellido']

con_horario = sum(1 for d in medicos if d['horario'])
con_foto = sum(1 for d in medicos if d['foto'])
esps = sorted({d['especialidad'] for d in medicos}, key=clave)

cab = '''// ─────────────────────────────────────────────────────────────
// Directorio médico de Centro Médico Real
// GENERADO con scripts/sql_a_ts.py desde el volcado SQL de tbMedicos.
// No editar a mano: corrija la base de datos y vuelva a generar.
//
// Normalizaciones aplicadas: acentos y nombres de especialidad unificados,
// espacios sobrantes, teléfonos con varias líneas separados, el registro
// "Anestesiologia" (un departamento) excluido.
// ─────────────────────────────────────────────────────────────

export type Medico = {
  id: number
  nombre: string
  especialidad: string
  /** Subespecialidad tal como la declara el médico, si difiere de la especialidad */
  detalle?: string
  consultorio: string
  telefonos: string[]
  horario: string | null
  /** Archivo de foto en el servidor actual de CMR (aún no disponible aquí) */
  foto: string | null
}

'''
cuerpo = 'export const medicos: Medico[] = ' + json.dumps(medicos, ensure_ascii=False, indent=2) + '\n'
io.open(OUT, 'w', encoding='utf-8', newline='\n').write(cab + cuerpo)

io.open(REPORTE, 'w', encoding='utf-8').write(json.dumps({
    'medicos': len(medicos), 'especialidades': len(esps), 'lista': esps,
    'con_horario': con_horario, 'con_foto': con_foto, 'departamentos': departamentos,
    'avisos': avisos,
}, ensure_ascii=False, indent=2))

print(f'{len(medicos)} medicos, {len(esps)} especialidades, {con_horario} con horario, {con_foto} con foto')
