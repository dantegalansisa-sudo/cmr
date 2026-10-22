export type View =
  // Sitio público (fase 1)
  | 'landing'
  | 'nosotros'
  | 'servicios'
  | 'especialistas'
  | 'emergencias'
  | 'contacto'
  // Portal del paciente (fase 2, vista previa)
  | 'dashboard'
  | 'citas'
  | 'resultados'
  | 'historia'
  | 'facturacion'
  | 'mensajes'
  | 'solicitudes'
  | 'documentos'
  | 'prefacturacion'
  | 'configuracion'

export type Navegar = (v: View, query?: string) => void

export const RUTAS: Record<View, string> = {
  landing: '/',
  nosotros: '/nosotros',
  servicios: '/servicios',
  especialistas: '/especialistas',
  emergencias: '/emergencias',
  contacto: '/contacto',
  dashboard: '/portal',
  citas: '/portal/citas',
  resultados: '/portal/resultados',
  historia: '/portal/historia-clinica',
  facturacion: '/portal/facturacion',
  mensajes: '/portal/mensajes',
  solicitudes: '/portal/solicitudes',
  documentos: '/portal/documentos',
  prefacturacion: '/portal/prefacturacion',
  configuracion: '/portal/configuracion',
}

export const TITULOS: Partial<Record<View, string>> = {
  landing: 'Centro Médico Real · Hospital de alta especialidad en Santo Domingo',
  nosotros: 'Nosotros · Centro Médico Real',
  servicios: 'Servicios · Centro Médico Real',
  especialistas: 'Directorio Médico · Centro Médico Real',
  emergencias: 'Emergencias 24/7 · Centro Médico Real',
  contacto: 'Contacto · Centro Médico Real',
}

export const esPortal = (v: View) => RUTAS[v].startsWith('/portal')

/** Ruta desconocida → inicio */
export function vistaDe(path: string): View {
  const limpio = path.replace(/\/+$/, '') || '/'
  const hit = (Object.entries(RUTAS) as [View, string][]).find(([, r]) => r === limpio)
  return hit ? hit[0] : 'landing'
}
