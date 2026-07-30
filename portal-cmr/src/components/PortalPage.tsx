import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Sidebar from './Sidebar'
import type { View } from '../App'

type Props = {
  view: View
  onNavigate: (v: View) => void
  /** Migas de pan: el primer elemento se pinta en azul */
  crumbs: string[]
  title: string
  subtitle?: string
  subtitleIcon?: LucideIcon
  /** Tarjeta informativa arriba a la derecha */
  info?: { title: string; text: string; icon: LucideIcon }
  /** Rail lateral de 300px. Si se omite, el contenido ocupa todo el ancho */
  rail?: ReactNode
  children: ReactNode
}

/**
 * Envoltorio común de las vistas del portal: sidebar + cabecera + rail opcional.
 * Evita repetir la misma estructura en cada vista.
 */
export default function PortalPage({
  view,
  onNavigate,
  crumbs,
  title,
  subtitle,
  subtitleIcon: SubIcon,
  info,
  rail,
  children,
}: Props) {
  const InfoIcon = info?.icon

  return (
    <div className="portal">
      <div className="container">
        <div className="portal-grid no-rail">
          <Sidebar view={view} onNavigate={onNavigate} />

          <div className="prefac-content">
            <div className="view-head">
              <div>
                <div className="breadcrumb">
                  {crumbs.map((c, i) => (
                    <span key={c} style={{ display: 'contents' }}>
                      {i > 0 && <ChevronRight size={14} />}
                      <span className={i === 0 ? 'b0' : undefined}>{c}</span>
                    </span>
                  ))}
                </div>
                <h1 className="view-title">{title}</h1>
                {subtitle && (
                  <div className="view-sub">
                    {SubIcon && <SubIcon size={17} color="#1E5EFF" />}
                    {subtitle}
                  </div>
                )}
              </div>

              {info && InfoIcon && (
                <div className="info-card">
                  <div className="info-icon">
                    <InfoIcon size={17} />
                  </div>
                  <div>
                    <h5>{info.title}</h5>
                    <p>{info.text}</p>
                  </div>
                </div>
              )}
            </div>

            {rail ? (
              <div className="page-split">
                <div className="portal-main">{children}</div>
                <div className="portal-rail">{rail}</div>
              </div>
            ) : (
              <div className="portal-main">{children}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
