// ─────────────────────────────────────────────────────────────
// CMR · Centro Médico Real — datos de demostración
// Única fuente de datos. Nada de esto viene de un backend.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'CMR',
  fullName: 'Centro Médico Real',
  tagline: 'Salud con sentido humano.',
  phone: '809-123-4567',
  email: 'info@cmr.com.do',
}

export const navLinks = [
  'Inicio',
  'Servicios',
  'Especialidades',
  'Médicos',
  'Resultados',
  'Centro Médico',
  'Contacto',
]

export const heroStats = [
  { value: 15, suffix: '', prefix: '+', label: 'Especialidades', icon: 'HeartPulse' },
  { value: 50, suffix: '', prefix: '+', label: 'Médicos', icon: 'MapPin' },
  { value: 10, suffix: 'K', prefix: '+', label: 'Pacientes', icon: 'Users' },
  { value: 24, suffix: '/7', prefix: '', label: 'Atención en línea', icon: 'Clock' },
]

export const accesoRapido = [
  { title: 'Agendar Cita', sub: 'Reserva tu consulta', icon: 'CalendarDays' },
  { title: 'Resultados en Línea', sub: 'Laboratorio e imágenes', icon: 'FlaskConical' },
  { title: 'Historia Clínica', sub: 'Consulta tu información', icon: 'FileText' },
  { title: 'Prefacturación', sub: 'Ahorra tiempo en tu visita', icon: 'FileCheck' },
]

export const patient = {
  nombre: 'Juan Carlos',
  saludoCorto: 'Juan',
  bienvenida: 'Bienvenido a tu portal',
}

export const resumenSalud = [
  {
    key: 'cita',
    label: 'Próxima Cita',
    tone: 'blue' as const,
    icon: 'CalendarDays',
    lines: ['Cardiología', 'Dr. Carlos Méndez', '24 Mayo 2024 - 10:30 AM', 'Centro Médico Real'],
    cta: 'Ver Detalles',
  },
  {
    key: 'resultados',
    label: 'Resultados Pendientes',
    tone: 'green' as const,
    icon: 'FlaskConical',
    big: '2',
    sub: 'Estudios listos para ver',
    cta: 'Ver Resultados',
  },
  {
    key: 'balance',
    label: 'Balance Pendiente',
    tone: 'amber' as const,
    icon: 'Wallet',
    big: 'RD$2,450.00',
    sub: 'Último pago: 10 Abr 2024',
    cta: 'Pagar Ahora',
  },
  {
    key: 'mensajes',
    label: 'Mensajes No Leídos',
    tone: 'violet' as const,
    icon: 'Mail',
    big: '3',
    sub: 'Mensajes nuevos',
    cta: 'Ver Mensajes',
  },
]

export const serviciosDestacados = [
  { label: 'Consultas\nMédicas', icon: 'Stethoscope' },
  { label: 'Laboratorio\nClínico', icon: 'FlaskConical' },
  { label: 'Imágenes\nDiagnósticas', icon: 'ScanLine' },
  { label: 'Medicina\nPreventiva', icon: 'HeartPulse' },
  { label: 'Vacunación', icon: 'Syringe' },
  { label: 'Procedimientos', icon: 'BriefcaseMedical' },
]

export const integracionSistemas = [
  { label: 'ERP', sub: 'Administrativo', icon: 'Building2' },
  { label: 'CRM', sub: 'Pacientes', icon: 'Users' },
  { label: 'LIS', sub: 'Laboratorio', icon: 'FlaskConical' },
  { label: 'RIS / PACS', sub: 'Imágenes', icon: 'ScanLine' },
  { label: 'Facturación', sub: 'Electrónica', icon: 'Receipt' },
  { label: 'Inventario', sub: 'Médico', icon: 'Package' },
]

export const canalesAtencion = [
  { label: 'Chat en Línea', sub: 'Atención inmediata', icon: 'MessageCircle' },
  { label: 'WhatsApp', sub: '809-123-4567', icon: 'Phone' },
  { label: 'Llamada', sub: '809-123-4567', icon: 'PhoneCall' },
  { label: 'Correo', sub: 'info@cmr.com.do', icon: 'Mail' },
]

export const chatQuickReplies = ['Agendar cita', 'Resultados', 'Información general']

export const chatMessage = {
  text: '¡Hola! Soy Laura, asistente virtual del Centro Médico Real. ¿En qué puedo ayudarte hoy?',
  time: '10:30 AM',
}

// ── Prefacturación ────────────────────────────────────────────

export const prefacturacionSteps = [
  { n: 1, title: 'Información Personal', sub: 'Tus datos básicos', icon: 'UserRound' },
  { n: 2, title: 'Seguros y Coberturas', sub: 'Información del seguro', icon: 'ShieldCheck' },
  { n: 3, title: 'Servicios a Realizar', sub: 'Procedimientos y exámenes', icon: 'Stethoscope' },
  { n: 4, title: 'Documentos y Consentimientos', sub: 'Firmas y autorizaciones', icon: 'FileText' },
  { n: 5, title: 'Revisión y Confirmación', sub: 'Verifica y envía', icon: 'CircleCheck' },
]

export const prefacturacionResumen = [
  { title: 'Información Personal', sub: 'Datos básicos del paciente', state: 'En progreso' },
  { title: 'Seguros y Coberturas', sub: 'Información del seguro médico', state: 'Pendiente' },
  { title: 'Servicios a Realizar', sub: 'Exámenes y procedimientos', state: 'Pendiente' },
  { title: 'Documentos y Consentimientos', sub: 'Firmas y autorizaciones', state: 'Pendiente' },
  { title: 'Revisión y Confirmación', sub: 'Verificación final', state: 'Pendiente' },
]

export const formValues = {
  nombres: 'Juan Carlos',
  apellidos: 'Méndez Rodríguez',
  tipoDocumento: 'Cédula de Identidad',
  numeroDocumento: '001-1234567-8',
  fechaNacimiento: '15/06/1990',
  genero: 'Masculino',
  telefono: '(809) 123-4567',
  correo: 'juan.mendez@email.com',
  direccion: 'Av. Winston Churchill #123, Santo Domingo, RD',
}

export const beneficios = [
  { title: 'Ahorra Tiempo', sub: 'Reduce tu tiempo de espera\nen el centro médico', icon: 'Zap', tone: 'green' },
  { title: 'Proceso Ágil', sub: 'Completa todo antes\nde tu visita', icon: 'Rocket', tone: 'blue' },
  { title: 'Información Segura', sub: 'Tus datos están protegidos\ncon encriptación avanzada', icon: 'ShieldCheck', tone: 'amber' },
  { title: 'Mejor Experiencia', sub: 'Atención más rápida y\npersonalizada', icon: 'Sparkles', tone: 'violet' },
]

// ── Resultados / Imágenes ─────────────────────────────────────

export type Estudio = {
  id: string
  nombre: string
  codigo: string
  centro: string
  fecha: string
  hora: string
  tipo: string
  medico: string
  especialidad: string
  estado: 'disponible' | 'edicion'
  thumb: 'torax-rx' | 'torax-tc' | 'rodilla' | 'ultrasonido' | 'mamografia' | 'cerebro'
}

export const estudios: Estudio[] = [
  {
    id: '1',
    nombre: 'Radiografía de Tórax',
    codigo: 'EST-2024-000987',
    centro: 'Hospital Central',
    fecha: '15 Mayo 2024',
    hora: '09:30 AM',
    tipo: 'Radiografía',
    medico: 'Dr. Carlos Mendez',
    especialidad: 'Neumología',
    estado: 'edicion',
    thumb: 'torax-rx',
  },
  {
    id: '2',
    nombre: 'Tomografía de Tórax',
    codigo: 'EST-2024-000876',
    centro: 'Centro Médico Real',
    fecha: '10 Mayo 2024',
    hora: '02:15 PM',
    tipo: 'Tomografía',
    medico: 'Dra. Ana Rodríguez',
    especialidad: 'Neumología',
    estado: 'disponible',
    thumb: 'torax-tc',
  },
  {
    id: '3',
    nombre: 'Resonancia de Rodilla',
    codigo: 'EST-2024-000765',
    centro: 'Centro Médico Real',
    fecha: '28 Abril 2024',
    hora: '11:45 AM',
    tipo: 'Resonancia Magnética',
    medico: 'Dr. Luis Fernández',
    especialidad: 'Traumatología',
    estado: 'disponible',
    thumb: 'rodilla',
  },
  {
    id: '4',
    nombre: 'Ultrasonido Abdominal',
    codigo: 'EST-2024-000654',
    centro: 'Hospital Central',
    fecha: '12 Abril 2024',
    hora: '08:20 AM',
    tipo: 'Ultrasonido',
    medico: 'Dra. María Gómez',
    especialidad: 'Gastroenterología',
    estado: 'disponible',
    thumb: 'ultrasonido',
  },
  {
    id: '5',
    nombre: 'Mamografía Bilateral',
    codigo: 'EST-2024-000543',
    centro: 'Centro Médico Real',
    fecha: '05 Marzo 2024',
    hora: '10:10 AM',
    tipo: 'Mamografía',
    medico: 'Dra. Laura Sánchez',
    especialidad: 'Ginecología',
    estado: 'disponible',
    thumb: 'mamografia',
  },
  {
    id: '6',
    nombre: 'Tomografía Cerebral',
    codigo: 'EST-2023-000432',
    centro: 'Hospital Central',
    fecha: '20 Noviembre 2023',
    hora: '03:30 PM',
    tipo: 'Tomografía',
    medico: 'Dr. Pedro Ramírez',
    especialidad: 'Neurología',
    estado: 'disponible',
    thumb: 'cerebro',
  },
]

export const footerColumns = [
  {
    title: 'Seguridad y Confidencialidad',
    lines: ['Tus datos están protegidos con', 'tecnología de última generación.'],
    icon: 'ShieldCheck',
  },
  {
    title: 'Acceso 24/7',
    lines: ['Disponible desde cualquier dispositivo,', 'cuando lo necesites.'],
    icon: 'Clock',
  },
  {
    title: 'Experiencia Integrada',
    lines: ['Todos nuestros servicios conectados', 'para tu comodidad.'],
    icon: 'Share2',
  },
]

// ═════════════════════════════════════════════════════════════
// CITAS
// ═════════════════════════════════════════════════════════════

export type Cita = {
  id: string
  especialidad: string
  medico: string
  fecha: string
  hora: string
  lugar: string
  consultorio: string
  modalidad: 'Presencial' | 'Virtual'
  estado: 'confirmada' | 'pendiente' | 'completada' | 'cancelada'
  grupo: 'proximas' | 'pasadas' | 'canceladas'
}

export const citas: Cita[] = [
  {
    id: 'c1',
    especialidad: 'Cardiología',
    medico: 'Dr. Carlos Méndez',
    fecha: '24 Mayo 2024',
    hora: '10:30 AM',
    lugar: 'Centro Médico Real',
    consultorio: 'Consultorio 304 · Piso 3',
    modalidad: 'Presencial',
    estado: 'confirmada',
    grupo: 'proximas',
  },
  {
    id: 'c2',
    especialidad: 'Nutrición',
    medico: 'Lic. Patricia Ureña',
    fecha: '02 Junio 2024',
    hora: '09:00 AM',
    lugar: 'Teleconsulta',
    consultorio: 'Enlace por videollamada',
    modalidad: 'Virtual',
    estado: 'confirmada',
    grupo: 'proximas',
  },
  {
    id: 'c3',
    especialidad: 'Oftalmología',
    medico: 'Dra. Ana Rodríguez',
    fecha: '14 Junio 2024',
    hora: '03:15 PM',
    lugar: 'Centro Médico Real',
    consultorio: 'Consultorio 112 · Piso 1',
    modalidad: 'Presencial',
    estado: 'pendiente',
    grupo: 'proximas',
  },
  {
    id: 'c4',
    especialidad: 'Medicina General',
    medico: 'Dr. Ramón Peña',
    fecha: '18 Abril 2024',
    hora: '11:00 AM',
    lugar: 'Centro Médico Real',
    consultorio: 'Consultorio 201 · Piso 2',
    modalidad: 'Presencial',
    estado: 'completada',
    grupo: 'pasadas',
  },
  {
    id: 'c5',
    especialidad: 'Traumatología',
    medico: 'Dr. Luis Fernández',
    fecha: '28 Marzo 2024',
    hora: '02:00 PM',
    lugar: 'Centro Médico Real',
    consultorio: 'Consultorio 305 · Piso 3',
    modalidad: 'Presencial',
    estado: 'completada',
    grupo: 'pasadas',
  },
  {
    id: 'c6',
    especialidad: 'Dermatología',
    medico: 'Dra. Sofía Castillo',
    fecha: '05 Marzo 2024',
    hora: '08:30 AM',
    lugar: 'Centro Médico Real',
    consultorio: 'Consultorio 108 · Piso 1',
    modalidad: 'Presencial',
    estado: 'cancelada',
    grupo: 'canceladas',
  },
]

export const disponibilidad = [
  { dia: 'Lun 27', horas: ['08:00', '09:30', '11:00'] },
  { dia: 'Mar 28', horas: ['08:30', '10:00'] },
  { dia: 'Mié 29', horas: ['09:00', '02:00', '04:30'] },
]

// ═════════════════════════════════════════════════════════════
// HISTORIA CLÍNICA
// ═════════════════════════════════════════════════════════════

export const perfilClinico = [
  { label: 'Tipo de sangre', value: 'O+', icon: 'Droplet', tone: 'blue' },
  { label: 'Alergias activas', value: '2', icon: 'TriangleAlert', tone: 'amber' },
  { label: 'Condiciones', value: '1', icon: 'Activity', tone: 'violet' },
  { label: 'Última visita', value: '18 Abr 2024', icon: 'CalendarCheck', tone: 'green' },
]

export type Consulta = {
  id: string
  fecha: string
  especialidad: string
  medico: string
  motivo: string
  diagnostico: string
  indicaciones: string
}

export const consultas: Consulta[] = [
  {
    id: 'h1',
    fecha: '18 Abril 2024',
    especialidad: 'Medicina General',
    medico: 'Dr. Ramón Peña',
    motivo: 'Chequeo anual',
    diagnostico: 'Paciente en buen estado general. Presión arterial 118/76.',
    indicaciones:
      'Mantener actividad física 150 min/semana. Repetir perfil lipídico en 6 meses.',
  },
  {
    id: 'h2',
    fecha: '28 Marzo 2024',
    especialidad: 'Traumatología',
    medico: 'Dr. Luis Fernández',
    motivo: 'Dolor en rodilla derecha',
    diagnostico: 'Condromalacia rotuliana grado I. Sin lesión meniscal.',
    indicaciones: 'Fisioterapia 3 veces por semana durante 6 semanas. Evitar impacto.',
  },
  {
    id: 'h3',
    fecha: '12 Febrero 2024',
    especialidad: 'Cardiología',
    medico: 'Dr. Carlos Méndez',
    motivo: 'Seguimiento de hipertensión',
    diagnostico: 'Hipertensión arterial controlada con tratamiento actual.',
    indicaciones: 'Continuar Losartán 50mg. Reducir consumo de sodio. Control en 3 meses.',
  },
  {
    id: 'h4',
    fecha: '20 Noviembre 2023',
    especialidad: 'Neurología',
    medico: 'Dr. Pedro Ramírez',
    motivo: 'Cefaleas recurrentes',
    diagnostico: 'Cefalea tensional. Tomografía cerebral sin hallazgos patológicos.',
    indicaciones: 'Higiene del sueño. Analgésico según necesidad. Reevaluar en 2 meses.',
  },
]

export const alergias = [
  { nombre: 'Penicilina', nivel: 'Severa', desde: '2015' },
  { nombre: 'Polen', nivel: 'Leve', desde: '2019' },
]

export const medicamentos = [
  { nombre: 'Losartán 50mg', pauta: '1 tableta cada mañana', medico: 'Dr. Carlos Méndez' },
  { nombre: 'Vitamina D 2000UI', pauta: '1 cápsula diaria', medico: 'Dr. Ramón Peña' },
]

export const vacunas = [
  { nombre: 'Influenza', fecha: 'Oct 2023', estado: 'Al día' },
  { nombre: 'COVID-19 (refuerzo)', fecha: 'Ene 2023', estado: 'Al día' },
  { nombre: 'Tétanos', fecha: 'Mar 2018', estado: 'Vence 2028' },
]

// ═════════════════════════════════════════════════════════════
// FACTURACIÓN
// ═════════════════════════════════════════════════════════════

export const facturacionKpis = [
  {
    label: 'Balance pendiente',
    value: 'RD$2,450.00',
    sub: '1 factura por pagar',
    tone: 'amber',
    icon: 'Wallet',
  },
  {
    label: 'Pagado en 2024',
    value: 'RD$18,720.00',
    sub: '7 transacciones',
    tone: 'green',
    icon: 'CircleCheck',
  },
  {
    label: 'Cubierto por seguro',
    value: 'RD$41,300.00',
    sub: 'ARS Humano · 80%',
    tone: 'blue',
    icon: 'ShieldCheck',
  },
  {
    label: 'Próximo vencimiento',
    value: '30 Mayo 2024',
    sub: 'En 6 días',
    tone: 'violet',
    icon: 'CalendarClock',
  },
]

export type Factura = {
  id: string
  numero: string
  fecha: string
  concepto: string
  seguro: string
  monto: string
  estado: 'pendiente' | 'pagada' | 'procesando'
}

export const facturas: Factura[] = [
  {
    id: 'f1',
    numero: 'FAC-2024-004871',
    fecha: '18 Mayo 2024',
    concepto: 'Consulta Cardiología + Electrocardiograma',
    seguro: 'ARS Humano',
    monto: 'RD$2,450.00',
    estado: 'pendiente',
  },
  {
    id: 'f2',
    numero: 'FAC-2024-004612',
    fecha: '18 Abril 2024',
    concepto: 'Consulta Medicina General',
    seguro: 'ARS Humano',
    monto: 'RD$1,200.00',
    estado: 'pagada',
  },
  {
    id: 'f3',
    numero: 'FAC-2024-004388',
    fecha: '28 Marzo 2024',
    concepto: 'Resonancia Magnética de Rodilla',
    seguro: 'ARS Humano',
    monto: 'RD$8,900.00',
    estado: 'pagada',
  },
  {
    id: 'f4',
    numero: 'FAC-2024-004201',
    fecha: '10 Marzo 2024',
    concepto: 'Perfil lipídico + Hemograma',
    seguro: 'ARS Humano',
    monto: 'RD$1,850.00',
    estado: 'pagada',
  },
  {
    id: 'f5',
    numero: 'FAC-2024-004055',
    fecha: '05 Marzo 2024',
    concepto: 'Mamografía Bilateral',
    seguro: 'ARS Humano',
    monto: 'RD$3,400.00',
    estado: 'procesando',
  },
]

export const metodosPago = [
  { tipo: 'Visa', detalle: '•••• 4821', vence: '08/27', principal: true },
  { tipo: 'Mastercard', detalle: '•••• 1195', vence: '02/26', principal: false },
]

export const seguro = {
  aseguradora: 'ARS Humano',
  plan: 'Plan Nacional Full',
  afiliado: 'AF-8842019',
  cobertura: '80%',
  vigencia: '31 Dic 2024',
}

// ═════════════════════════════════════════════════════════════
// MENSAJES
// ═════════════════════════════════════════════════════════════

export type Conversacion = {
  id: string
  nombre: string
  rol: string
  iniciales: string
  ultimo: string
  hora: string
  sinLeer: number
}

export const conversaciones: Conversacion[] = [
  {
    id: 'm1',
    nombre: 'Dr. Carlos Méndez',
    rol: 'Cardiología',
    iniciales: 'CM',
    ultimo: 'Sus resultados del electrocardiograma están dentro de lo esperado.',
    hora: '10:24 AM',
    sinLeer: 2,
  },
  {
    id: 'm2',
    nombre: 'Laboratorio Clínico',
    rol: 'Departamento',
    iniciales: 'LC',
    ultimo: 'Su muestra fue procesada. El informe estará listo mañana.',
    hora: 'Ayer',
    sinLeer: 1,
  },
  {
    id: 'm3',
    nombre: 'Admisión y Citas',
    rol: 'Atención al paciente',
    iniciales: 'AC',
    ultimo: 'Confirmamos su cita del 24 de mayo a las 10:30 AM.',
    hora: '20 May',
    sinLeer: 0,
  },
  {
    id: 'm4',
    nombre: 'Dra. Ana Rodríguez',
    rol: 'Oftalmología',
    iniciales: 'AR',
    ultimo: 'Recuerde traer sus lentes actuales a la consulta.',
    hora: '16 May',
    sinLeer: 0,
  },
]

export const hilo = [
  {
    de: 'medico',
    texto: 'Buenos días Juan Carlos. Ya revisé su electrocardiograma del 18 de mayo.',
    hora: '10:18 AM',
  },
  {
    de: 'medico',
    texto:
      'Los resultados están dentro de lo esperado. El ritmo sinusal es normal y no hay signos de isquemia.',
    hora: '10:20 AM',
  },
  {
    de: 'paciente',
    texto: 'Excelente noticia doctor, muchas gracias. ¿Debo continuar con el Losartán?',
    hora: '10:22 AM',
  },
  {
    de: 'medico',
    texto:
      'Sí, mantenga la misma dosis. Nos vemos en la consulta del 24 para revisar la presión.',
    hora: '10:24 AM',
  },
]

// ═════════════════════════════════════════════════════════════
// SOLICITUDES
// ═════════════════════════════════════════════════════════════

export type Solicitud = {
  id: string
  tipo: string
  codigo: string
  fecha: string
  detalle: string
  estado: 'en_proceso' | 'aprobada' | 'pendiente'
  progreso: number
}

export const solicitudes: Solicitud[] = [
  {
    id: 's1',
    tipo: 'Autorización de procedimiento',
    codigo: 'SOL-2024-00812',
    fecha: '20 Mayo 2024',
    detalle: 'Resonancia magnética de columna lumbar',
    estado: 'en_proceso',
    progreso: 60,
  },
  {
    id: 's2',
    tipo: 'Certificado médico',
    codigo: 'SOL-2024-00798',
    fecha: '16 Mayo 2024',
    detalle: 'Certificado de aptitud física para gimnasio',
    estado: 'pendiente',
    progreso: 25,
  },
  {
    id: 's3',
    tipo: 'Copia de expediente',
    codigo: 'SOL-2024-00744',
    fecha: '02 Mayo 2024',
    detalle: 'Historial completo 2022–2024',
    estado: 'aprobada',
    progreso: 100,
  },
  {
    id: 's4',
    tipo: 'Referimiento a especialista',
    codigo: 'SOL-2024-00701',
    fecha: '18 Abril 2024',
    detalle: 'Referimiento a Endocrinología',
    estado: 'aprobada',
    progreso: 100,
  },
]

export const tiposSolicitud = [
  { label: 'Certificado médico', icon: 'FileCheck' },
  { label: 'Autorización', icon: 'ShieldCheck' },
  { label: 'Copia de expediente', icon: 'FolderOpen' },
  { label: 'Referimiento', icon: 'Share2' },
]

// ═════════════════════════════════════════════════════════════
// DOCUMENTOS
// ═════════════════════════════════════════════════════════════

export type Documento = {
  id: string
  nombre: string
  categoria: 'Informes' | 'Recetas' | 'Certificados' | 'Consentimientos'
  fecha: string
  peso: string
  emisor: string
}

export const documentos: Documento[] = [
  {
    id: 'd1',
    nombre: 'Informe de Tomografía de Tórax',
    categoria: 'Informes',
    fecha: '10 Mayo 2024',
    peso: '1.8 MB',
    emisor: 'Dra. Ana Rodríguez',
  },
  {
    id: 'd2',
    nombre: 'Receta — Losartán 50mg',
    categoria: 'Recetas',
    fecha: '18 Abril 2024',
    peso: '240 KB',
    emisor: 'Dr. Carlos Méndez',
  },
  {
    id: 'd3',
    nombre: 'Certificado de aptitud física',
    categoria: 'Certificados',
    fecha: '02 Mayo 2024',
    peso: '310 KB',
    emisor: 'Dr. Ramón Peña',
  },
  {
    id: 'd4',
    nombre: 'Consentimiento informado — Resonancia',
    categoria: 'Consentimientos',
    fecha: '28 Marzo 2024',
    peso: '520 KB',
    emisor: 'Centro Médico Real',
  },
  {
    id: 'd5',
    nombre: 'Informe de Resonancia de Rodilla',
    categoria: 'Informes',
    fecha: '28 Marzo 2024',
    peso: '2.4 MB',
    emisor: 'Dr. Luis Fernández',
  },
  {
    id: 'd6',
    nombre: 'Receta — Vitamina D 2000UI',
    categoria: 'Recetas',
    fecha: '12 Febrero 2024',
    peso: '198 KB',
    emisor: 'Dr. Ramón Peña',
  },
  {
    id: 'd7',
    nombre: 'Resultados de laboratorio — Perfil lipídico',
    categoria: 'Informes',
    fecha: '10 Marzo 2024',
    peso: '640 KB',
    emisor: 'Laboratorio Clínico',
  },
  {
    id: 'd8',
    nombre: 'Consentimiento — Uso de datos clínicos',
    categoria: 'Consentimientos',
    fecha: '15 Enero 2024',
    peso: '180 KB',
    emisor: 'Centro Médico Real',
  },
]

export const categoriasDoc = [
  'Todos',
  'Informes',
  'Recetas',
  'Certificados',
  'Consentimientos',
]

// ═════════════════════════════════════════════════════════════
// CONFIGURACIÓN
// ═════════════════════════════════════════════════════════════

export const notificaciones = [
  { label: 'Recordatorios de citas', sub: 'Aviso 24 horas antes de cada cita', activo: true },
  {
    label: 'Resultados disponibles',
    sub: 'Cuando un estudio esté listo para ver',
    activo: true,
  },
  { label: 'Mensajes del equipo médico', sub: 'Respuestas de tus médicos', activo: true },
  {
    label: 'Facturación y pagos',
    sub: 'Vencimientos y confirmaciones de pago',
    activo: false,
  },
  { label: 'Novedades del centro', sub: 'Campañas, jornadas y promociones', activo: false },
]

export const sesiones = [
  { equipo: 'Chrome — Windows 11', lugar: 'Santo Domingo, RD', cuando: 'Ahora', actual: true },
  {
    equipo: 'Safari — iPhone 14',
    lugar: 'Santo Domingo, RD',
    cuando: 'Hace 2 días',
    actual: false,
  },
]

// ═════════════════════════════════════════════════════════════
// LANDING — secciones públicas
// ═════════════════════════════════════════════════════════════

export const serviciosLanding = [
  {
    titulo: 'Consulta Médica',
    desc: 'Atención con especialistas en más de 15 áreas, con agenda en línea y expediente digital.',
    icon: 'Stethoscope',
  },
  {
    titulo: 'Laboratorio Clínico',
    desc: 'Análisis de sangre, orina y pruebas especializadas con resultados en línea en 24 horas.',
    icon: 'FlaskConical',
  },
  {
    titulo: 'Imágenes Diagnósticas',
    desc: 'Radiografía, tomografía, resonancia, mamografía y ultrasonido con informe digital.',
    icon: 'ScanLine',
  },
  {
    titulo: 'Medicina Preventiva',
    desc: 'Chequeos anuales, evaluación de riesgo y programas de seguimiento personalizado.',
    icon: 'HeartPulse',
  },
  {
    titulo: 'Vacunación',
    desc: 'Esquema completo para niños y adultos, con carnet digital siempre disponible.',
    icon: 'Syringe',
  },
  {
    titulo: 'Procedimientos',
    desc: 'Cirugía ambulatoria y procedimientos menores en quirófanos equipados.',
    icon: 'BriefcaseMedical',
  },
  {
    titulo: 'Emergencias 24/7',
    desc: 'Sala de emergencias abierta todos los días del año con personal permanente.',
    icon: 'Ambulance',
  },
  {
    titulo: 'Telemedicina',
    desc: 'Consultas por videollamada con los mismos especialistas del centro.',
    icon: 'Video',
  },
]

export const especialidades = [
  { nombre: 'Cardiología', medicos: 6, icon: 'HeartPulse' },
  { nombre: 'Pediatría', medicos: 8, icon: 'Baby' },
  { nombre: 'Ginecología', medicos: 5, icon: 'Flower2' },
  { nombre: 'Traumatología', medicos: 4, icon: 'Bone' },
  { nombre: 'Neurología', medicos: 3, icon: 'Brain' },
  { nombre: 'Dermatología', medicos: 4, icon: 'Sparkles' },
  { nombre: 'Oftalmología', medicos: 3, icon: 'Eye' },
  { nombre: 'Gastroenterología', medicos: 3, icon: 'Activity' },
  { nombre: 'Neumología', medicos: 2, icon: 'Wind' },
  { nombre: 'Endocrinología', medicos: 2, icon: 'Droplet' },
  { nombre: 'Urología', medicos: 3, icon: 'Stethoscope' },
  { nombre: 'Medicina General', medicos: 7, icon: 'UserRound' },
]

export const medicos = [
  {
    nombre: 'Dr. Carlos Méndez',
    iniciales: 'CM',
    especialidad: 'Cardiología',
    exp: '18 años de experiencia',
    rating: '4.9',
    disponible: 'Lun · Mié · Vie',
  },
  {
    nombre: 'Dra. Ana Rodríguez',
    iniciales: 'AR',
    especialidad: 'Neumología',
    exp: '12 años de experiencia',
    rating: '4.8',
    disponible: 'Mar · Jue',
  },
  {
    nombre: 'Dr. Luis Fernández',
    iniciales: 'LF',
    especialidad: 'Traumatología',
    exp: '15 años de experiencia',
    rating: '4.9',
    disponible: 'Lun · Jue · Sáb',
  },
  {
    nombre: 'Dra. María Gómez',
    iniciales: 'MG',
    especialidad: 'Gastroenterología',
    exp: '10 años de experiencia',
    rating: '4.7',
    disponible: 'Mié · Vie',
  },
  {
    nombre: 'Dra. Laura Sánchez',
    iniciales: 'LS',
    especialidad: 'Ginecología',
    exp: '14 años de experiencia',
    rating: '5.0',
    disponible: 'Lun · Mar · Jue',
  },
  {
    nombre: 'Dr. Pedro Ramírez',
    iniciales: 'PR',
    especialidad: 'Neurología',
    exp: '20 años de experiencia',
    rating: '4.8',
    disponible: 'Mar · Vie',
  },
]

export const centroFeatures = [
  {
    titulo: 'Tecnología de última generación',
    desc: 'Equipos de imagenología y laboratorio de alta resolución.',
    icon: 'Cpu',
  },
  {
    titulo: 'Expediente 100% digital',
    desc: 'Tu historia clínica disponible desde cualquier dispositivo.',
    icon: 'FileText',
  },
  {
    titulo: 'Convenios con las principales ARS',
    desc: 'Humano, Senasa, Universal, Mapfre y más.',
    icon: 'ShieldCheck',
  },
  {
    titulo: 'Estacionamiento y accesibilidad',
    desc: 'Parqueo techado y accesos adaptados en todo el edificio.',
    icon: 'Accessibility',
  },
]

export const horarios = [
  { dia: 'Lunes a Viernes', hora: '7:00 AM – 8:00 PM' },
  { dia: 'Sábados', hora: '8:00 AM – 4:00 PM' },
  { dia: 'Domingos', hora: '8:00 AM – 12:00 PM' },
  { dia: 'Emergencias', hora: 'Abierto 24/7' },
]

export const contactoInfo = [
  { label: 'Teléfono', value: '809-123-4567', sub: 'Lunes a sábado', icon: 'PhoneCall' },
  { label: 'WhatsApp', value: '809-123-4567', sub: 'Respuesta en minutos', icon: 'Phone' },
  { label: 'Correo', value: 'info@cmr.com.do', sub: 'Respondemos en 24h', icon: 'Mail' },
  {
    label: 'Dirección',
    value: 'Av. Winston Churchill #123',
    sub: 'Santo Domingo, RD',
    icon: 'MapPin',
  },
]
