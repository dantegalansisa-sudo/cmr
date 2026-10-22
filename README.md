# CMR — Centro Médico Real · Sitio web y Portal del Paciente

Proyecto **LINKXPACE Connect** de LINKDICOM para Centro Médico Real.

Siguiendo lo acordado en la reunión LinkDicom–CMR, el proyecto va por fases:

| Fase | Alcance | Estado |
|---|---|---|
| **1 · Sitio institucional** | Páginas públicas con información real del centro | En desarrollo — es lo que se publica primero |
| **2 · Portal del Paciente** | Citas, resultados, historia clínica, facturación… | Vista previa con datos de ejemplo; depende de la integración con RIS/PACS, Millennium y facturación |

La migración del dominio `cmr.com.do` se hará solo cuando el centro apruebe esta versión.

## Acceso al entorno de desarrollo

El sitio está detrás de una pantalla de acceso con contraseña (`src/components/Gate.tsx`).

> ⚠️ **Esta pantalla no es seguridad real.** La validación ocurre en el navegador,
> así que el hash de la contraseña viaja en el bundle y alguien con conocimientos técnicos
> puede saltársela. Sirve para que quien abra el enlace vea que el proyecto está en
> construcción, no para proteger información sensible.
>
> Para restringir el acceso de verdad hay que activar **Deployment Protection** en Vercel
> (Settings → Deployment Protection), que se resuelve en el servidor antes de servir nada.

## Cómo ejecutarlo

```bash
cd portal-cmr
npm install
npm run dev
```

Abre http://localhost:5173. Cada `git push` a `main` despliega solo en Vercel.

## Fase 1 — Sitio institucional

Cada página tiene su propia URL, así que se puede compartir y funciona el botón atrás.

| Ruta | Contenido |
|---|---|
| `/` | Inicio: buscador de médicos, accesos rápidos, especialidades, servicios, emergencias y mapa |
| `/nosotros` | Historia (desde 1998), misión, visión, valores, Consejo de Administración y equipo |
| `/servicios` | Emergencias, UCI, Laboratorio, Imágenes, Resultados en línea y ARS |
| `/especialistas` | **Directorio de 112 médicos** con búsqueda y filtro por especialidad |
| `/emergencias` | Extensiones de adultos y pediátricas, signos de alarma y qué traer |
| `/contacto` | Formulario (abre el correo del usuario) y datos de contacto |

Los filtros del directorio quedan en la URL: `/especialistas?especialidad=Cardiología` se puede enviar por WhatsApp.

### De dónde salen los datos

| Archivo | Contenido | Fuente |
|---|---|---|
| `src/data/institucion.ts` | Dirección, teléfono, misión, visión, valores, emergencias, servicios | Informe de levantamiento (Tecnología CMR 2026) y `cmr.com.do` |
| `src/data/medicos.ts` | 112 médicos | **Generado** desde el volcado SQL de `tbMedicos` |
| `src/data/especialidades.ts` | Icono y color de cada especialidad, conteos | Calculado a partir de los médicos |

Para actualizar el directorio cuando el centro envíe la base corregida:

```bash
cd portal-cmr
python scripts/sql_a_ts.py "ruta/al/tbMedicos.sql" src/data/medicos.ts reporte.json
```

El script unifica acentos y nombres de especialidad, separa teléfonos múltiples, y avisa
en `reporte.json` de los registros con problemas. Si aparece una especialidad nueva, se
detiene para que se agregue a su tabla de equivalencias.

> Los documentos internos del cliente (actas, volcados SQL) van en `nueva data/`, que está
> en `.gitignore`: **nunca** se suben al repositorio.

## Fase 2 — Portal del Paciente (vista previa)

Accesible desde el botón **Portal del Paciente** (`/portal`). Todas sus vistas muestran un aviso
de que es una vista previa con datos de ejemplo (`src/data/mockData.ts`).

Citas · Resultados · Historia Clínica · Facturación · Mensajes · Solicitudes · Documentos ·
Prefacturación · Configuración.

## Stack

- React + TypeScript + Vite
- Framer Motion para las animaciones
- `lucide-react` para los iconos
- **CSS vanilla** — sin Tailwind: `src/index.css` (base y portal), `src/sitio.css` (sitio público), `src/gate.css` (acceso)
- Enrutado propio con la History API (`src/rutas.ts`); Vercel reescribe todas las rutas a `index.html`

## Estructura

```
portal-cmr/
  scripts/sql_a_ts.py       SQL de médicos → medicos.ts
  src/
    App.tsx                 rutas y cambio de vista
    rutas.ts                tabla de URLs y títulos de página
    data/                   institucion · medicos · especialidades · mockData (portal)
    components/             Header, Footer, SitioUI, Gate, Sidebar, PortalPage…
    views/sitio/            páginas públicas (fase 1)
    views/                  vistas del portal (fase 2)
  public/images/            logos, foto del edificio, avatar
```
