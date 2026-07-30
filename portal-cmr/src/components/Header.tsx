import { UserRound, CalendarPlus, ArrowRight } from 'lucide-react'
import { navLinks } from '../data/mockData'
import type { View } from '../App'

type Props = {
  view: View
  onNavigate: (v: View) => void
  onScrollTo: (id: string) => void
}

/** Cada link del nav apunta a una vista o a una sección del landing */
const LINK_TARGET: Record<string, { view?: View; section?: string }> = {
  Inicio: { view: 'landing' },
  Servicios: { section: 'servicios' },
  Especialidades: { section: 'especialidades' },
  Médicos: { section: 'medicos' },
  Resultados: { view: 'resultados' },
  'Centro Médico': { section: 'centro' },
  Contacto: { section: 'contacto' },
}

export default function Header({ view, onNavigate, onScrollTo }: Props) {
  const activeLink = view === 'resultados' ? 'Resultados' : view === 'landing' ? 'Inicio' : ''

  return (
    <header className="site-header">
      <div className="container">
        <button onClick={() => onNavigate('landing')} aria-label="Ir al inicio">
          <img className="logo-img" src="/images/logo.png" alt="CMR — Centro Médico Real" />
        </button>

        <nav className="header-nav">
          {navLinks.map((link) => {
            const target = LINK_TARGET[link]
            return (
              <button
                key={link}
                className={`nav-link${link === activeLink ? ' active' : ''}`}
                onClick={() => {
                  if (target?.view) onNavigate(target.view)
                  else if (target?.section) onScrollTo(target.section)
                }}
              >
                {link}
              </button>
            )
          })}
        </nav>

        <div className="header-actions">
          <button className="btn btn-navy" onClick={() => onNavigate('dashboard')}>
            <UserRound size={17} />
            Portal del Paciente
          </button>
          <button className="btn btn-green">
            <CalendarPlus size={17} />
            Agendar Cita
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </header>
  )
}
