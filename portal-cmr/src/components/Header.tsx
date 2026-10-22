import { useState, useEffect } from 'react'
import { Siren, Phone, Camera, FlaskConical, UserRound, Menu, X, ArrowUpRight } from 'lucide-react'
import { CMR, emergencias } from '../data/institucion'
import { esPortal } from '../rutas'
import type { View, Navegar } from '../rutas'

type Props = {
  view: View
  onNavigate: Navegar
}

const NAV: { label: string; view: View }[] = [
  { label: 'Inicio', view: 'landing' },
  { label: 'Nosotros', view: 'nosotros' },
  { label: 'Servicios', view: 'servicios' },
  { label: 'Especialistas', view: 'especialistas' },
  { label: 'Emergencias', view: 'emergencias' },
  { label: 'Contacto', view: 'contacto' },
]

const rango = (ext: string[]) => `${ext[0]}–${ext[ext.length - 1]}`

export default function Header({ view, onNavigate }: Props) {
  const [abierto, setAbierto] = useState(false)

  // Cerrar el menú móvil al cambiar de página
  useEffect(() => setAbierto(false), [view])

  const ir = (v: View) => {
    setAbierto(false)
    onNavigate(v)
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbar-in">
          <button className="topbar-urg" onClick={() => ir('emergencias')}>
            <Siren size={15} />
            <strong>Emergencias 24/7</strong>
            <span className="topbar-ext">
              Adultos ext. {rango(emergencias.adultos)} · Pediátricas ext. {rango(emergencias.pediatricas)}
            </span>
          </button>

          <div className="topbar-links">
            <a href={CMR.telefonoHref}>
              <Phone size={14} />
              {CMR.telefono}
            </a>
            <a href={CMR.instagram} target="_blank" rel="noopener noreferrer">
              <Camera size={14} />
              <span className="topbar-hide-sm">{CMR.instagramUsuario}</span>
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <button onClick={() => ir('landing')} aria-label="Ir al inicio">
            <img className="logo-img" src="/images/logo.png" alt="CMR — Centro Médico Real" />
          </button>

          <nav className="header-nav" aria-label="Principal">
            {NAV.map((n) => (
              <button
                key={n.view}
                className={`nav-link${view === n.view ? ' active' : ''}`}
                onClick={() => ir(n.view)}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="btn btn-green"
              href={CMR.resultadosUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FlaskConical size={17} />
              Resultados en línea
            </a>
            <button
              className={`btn btn-navy${esPortal(view) ? ' is-on' : ''}`}
              onClick={() => ir('dashboard')}
            >
              <UserRound size={17} />
              Portal del Paciente
              <span className="fase-chip">Fase 2</span>
            </button>
          </div>

          <button
            className="menu-btn"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          >
            {abierto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {abierto && (
          <div className="mobile-menu">
            <div className="container">
              {NAV.map((n) => (
                <button
                  key={n.view}
                  className={`mobile-link${view === n.view ? ' active' : ''}`}
                  onClick={() => ir(n.view)}
                >
                  {n.label}
                </button>
              ))}

              <div className="mobile-actions">
                <a
                  className="btn btn-green"
                  href={CMR.resultadosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FlaskConical size={17} />
                  Resultados en línea
                  <ArrowUpRight size={15} />
                </a>
                <button className="btn btn-navy" onClick={() => ir('dashboard')}>
                  <UserRound size={17} />
                  Portal del Paciente
                  <span className="fase-chip">Fase 2</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
