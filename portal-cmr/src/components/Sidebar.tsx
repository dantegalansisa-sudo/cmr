import {
  Home,
  Calendar,
  FlaskConical,
  FileText,
  Receipt,
  Mail,
  ClipboardList,
  File,
  FileCheck,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { patient } from '../data/mockData'
import type { View } from '../App'

type Props = {
  view: View
  onNavigate: (v: View) => void
}

type Item = { label: string; icon: LucideIcon; view: View; badge?: number }

const ITEMS: Item[] = [
  { label: 'Inicio', icon: Home, view: 'dashboard' },
  { label: 'Citas', icon: Calendar, view: 'citas' },
  { label: 'Resultados', icon: FlaskConical, view: 'resultados' },
  { label: 'Historia Clínica', icon: FileText, view: 'historia' },
  { label: 'Facturación', icon: Receipt, view: 'facturacion' },
  { label: 'Mensajes', icon: Mail, view: 'mensajes', badge: 3 },
  { label: 'Solicitudes', icon: ClipboardList, view: 'solicitudes', badge: 2 },
  { label: 'Documentos', icon: File, view: 'documentos' },
  { label: 'Prefacturación', icon: FileCheck, view: 'prefacturacion' },
  { label: 'Configuración', icon: Settings, view: 'configuracion' },
]

export default function Sidebar({ view, onNavigate }: Props) {
  const resultadosExpanded = view === 'resultados'

  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        {/* El paciente del demo no tiene foto: se usan sus iniciales */}
        <div className="sidebar-avatar">JC</div>
        <div>
          <h4>Hola, {resultadosExpanded ? patient.nombre : patient.saludoCorto}</h4>
          <p>{patient.bienvenida}</p>
        </div>
      </div>

      {ITEMS.map(({ label, icon: Icon, view: target, badge }) => {
        const isActive = view === target

        return (
          <div key={label}>
            <button
              className={`sidebar-item${isActive ? ' active' : ''}`}
              onClick={() => onNavigate(target)}
            >
              <Icon size={18} />
              <span>{label}</span>
              {badge && <em className="sidebar-badge">{badge}</em>}
              {target === 'resultados' && resultadosExpanded && <ChevronDown size={16} />}
            </button>

            {target === 'resultados' && resultadosExpanded && (
              <>
                <button className="sidebar-sub">
                  <i className="bullet" />
                  Laboratorio Clínico
                </button>
                <button className="sidebar-sub active">
                  <i className="bullet filled" />
                  Imágenes e Informes
                </button>
              </>
            )}
          </div>
        )
      })}

      <div className="sidebar-foot">
        <button className="sidebar-item" onClick={() => onNavigate('landing')}>
          <LogOut size={18} />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  )
}
