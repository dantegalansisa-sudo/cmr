// ─────────────────────────────────────────────────────────────
// Datos institucionales de Centro Médico Real
// Fuente: "Informe de Levantamiento de Información del Sitio Web"
// (Tecnología CMR 2026) y el sitio actual cmr.com.do.
// Todo lo que diga PENDIENTE debe validarlo el centro antes de publicar.
// ─────────────────────────────────────────────────────────────

import type { Tono } from './especialidades'

export const CMR = {
  nombre: 'Centro Médico Real',
  sigla: 'CMR',
  lema: 'Salud con sentido humano',
  fundacion: '10 de octubre de 1998',
  anioFundacion: 1998,

  direccion: 'Av. Rómulo Betancourt No. 515',
  sector: 'Mirador Norte',
  ciudad: 'Santo Domingo',
  pais: 'República Dominicana',

  telefono: '809-537-3940',
  telefonoHref: 'tel:+18095373940',
  // El informe registra cmr@ y el sitio actual enlaza a info@: PENDIENTE confirmar cuál
  correo: 'cmr@cmr.com.do',

  resultadosUrl: 'https://labcmr.com/#/',
  instagram: 'https://www.instagram.com/centromedicoreal/',
  instagramUsuario: '@centromedicoreal',

  mapaEmbed:
    'https://maps.google.com/maps?q=Centro%20M%C3%A9dico%20Real%2C%20Av.%20R%C3%B3mulo%20Betancourt%20515%2C%20Santo%20Domingo&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapaUrl:
    'https://www.google.com/maps/search/?api=1&query=Centro+M%C3%A9dico+Real+Av.+R%C3%B3mulo+Betancourt+515+Santo+Domingo',
}

export const aniosDeServicio = new Date().getFullYear() - CMR.anioFundacion

export const emergencias = {
  adultos: ['102', '103', '104', '105'],
  pediatricas: ['123', '124'],
}

export const mision =
  'Ser un hospital privado que proporciona servicios de salud de alta especialidad con gran calidad y calidez, en las especialidades médicas, quirúrgicas y de apoyo al diagnóstico y tratamiento, por lo que tiene el reconocimiento de la sociedad dominicana. Ser un centro médico formador de recursos humanos de excelencia para la salud del país, que se preocupa por sus empleados capacitándolos y formando equipos como una necesidad de las actividades humanas.'

export const vision =
  'Establecernos como líder nacional en excelencia médica, mejorando la salud de la comunidad por medio de servicios para la salud que sean accesibles, compasivos y orientados a la familia. Ser generadores de modelos de atención en las especialidades médicas y en la enseñanza de la medicina.'

export const valores = [
  {
    nombre: 'Calidad',
    texto: 'En la atención brindada a los pacientes, tanto en los servicios médicos como administrativos.',
    icon: 'Award',
  },
  {
    nombre: 'Ética',
    texto: 'Apego a los códigos, normas y principios del actuar del equipo de salud.',
    icon: 'Scale',
  },
  {
    nombre: 'Compromiso',
    texto: 'Con el paciente que solicita nuestros servicios, brindándole nuestra confianza y apoyo.',
    icon: 'HeartHandshake',
  },
  {
    nombre: 'Profesionalismo',
    texto: 'Al aplicar los conocimientos adquiridos para apoyar los servicios que presta la institución.',
    icon: 'GraduationCap',
  },
]

export const cualidades = [
  {
    nombre: 'Servicio al paciente',
    texto: 'Identificar y responder a las necesidades de cada paciente.',
    icon: 'HandHeart',
  },
  { nombre: 'Empatía', texto: 'Sensibilidad ante la situación del paciente y su familia.', icon: 'Heart' },
  {
    nombre: 'Identificación con el Centro',
    texto: 'Orientar intereses y comportamientos hacia las prioridades de la institución.',
    icon: 'UserCheck',
  },
  {
    nombre: 'Flexibilidad',
    texto: 'Adaptarse a los cambios y a las distintas situaciones de cada función.',
    icon: 'Shuffle',
  },
  {
    nombre: 'Trabajo en equipo',
    texto: 'Colaboración entre áreas, priorizando los objetivos colectivos.',
    icon: 'UsersRound',
  },
  {
    nombre: 'Discreción',
    texto: 'Manejo responsable de la información de los pacientes y del Centro.',
    icon: 'Lock',
  },
]

export const consejo = {
  texto:
    'La máxima autoridad para la toma de decisiones es el Consejo de Administración, designado mediante Asamblea General. Sus miembros son elegidos por un período de 2 años y su objetivo es administrar y dirigir los bienes del Centro, siguiendo los reglamentos internos y las políticas establecidas.',
  cargos: ['Presidente', 'Vicepresidente', 'Tesorero', 'Secretario', 'Comisario de Cuentas', 'Tres Vocales'],
}

export type Servicio = {
  slug: string
  nombre: string
  resumen: string
  detalle: string
  icon: string
  tono: Tono
  /** Enlace externo, si el servicio vive en otro sistema */
  externo?: string
}

// Los 6 servicios que publica el sitio actual. Los textos descriptivos son
// genéricos a propósito: PENDIENTE que el centro detalle alcance y horarios.
export const servicios: Servicio[] = [
  {
    slug: 'emergencias',
    nombre: 'Emergencias',
    resumen: 'Atención de urgencias para adultos y niños, las 24 horas, todos los días.',
    detalle:
      'Contamos con áreas de emergencia separadas para adultos y para pacientes pediátricos, atendidas por personal médico de forma permanente.',
    icon: 'Siren',
    tono: 'rojo',
  },
  {
    slug: 'uci',
    nombre: 'Unidad de Cuidados Intensivos',
    resumen: 'Vigilancia y soporte continuo para pacientes en estado crítico.',
    detalle:
      'La UCI brinda monitoreo permanente y atención especializada a pacientes que requieren cuidados de alta complejidad.',
    icon: 'BedDouble',
    tono: 'violeta',
  },
  {
    slug: 'laboratorio',
    nombre: 'Laboratorio Clínico',
    resumen: 'Análisis clínicos con resultados disponibles en línea.',
    detalle:
      'Procesamos los análisis indicados por su médico y publicamos los resultados en la plataforma de Resultados en Línea para que pueda consultarlos sin volver al centro.',
    icon: 'Microscope',
    tono: 'teal',
  },
  {
    slug: 'imagenes',
    nombre: 'Imágenes Diagnósticas',
    resumen: 'Estudios de imagen con informe del especialista.',
    detalle:
      'Realizamos estudios de diagnóstico por imágenes, interpretados por nuestros especialistas e integrados al expediente del paciente.',
    icon: 'ScanLine',
    tono: 'azul',
  },
  {
    slug: 'resultados',
    nombre: 'Resultados en Línea',
    resumen: 'Consulte sus resultados de laboratorio desde cualquier dispositivo.',
    detalle:
      'Acceda a la plataforma de resultados con las credenciales que le entregan al momento de realizar su estudio.',
    icon: 'FlaskConical',
    tono: 'lima',
    externo: CMR.resultadosUrl,
  },
  {
    slug: 'ars',
    nombre: 'Seguros Médicos (ARS)',
    resumen: 'Trabajamos con aseguradoras de salud para facilitar su atención.',
    detalle:
      'Antes de su cita o estudio, confirme con su ARS y con nuestro departamento de admisión la cobertura de su plan.',
    icon: 'ShieldCheck',
    tono: 'ambar',
  },
]
