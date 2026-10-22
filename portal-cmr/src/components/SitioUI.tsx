import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  Siren,
  PhoneCall,
  Navigation,
  MapPin,
  Phone,
  Mail,
  Camera,
  Construction,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CMR, emergencias } from '../data/institucion'

/** Cabecera de color para las páginas interiores del sitio */
export function PageHero({
  tono,
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  tono: 'azul' | 'verde' | 'rojo' | 'teal' | 'violeta'
  icon: LucideIcon
  eyebrow: string
  title: string
  subtitle: string
  children?: ReactNode
}) {
  return (
    <section className={`pg-hero pg-${tono}`}>
      <div className="pg-hero-deco" aria-hidden="true">
        <Icon size={340} strokeWidth={0.6} />
      </div>
      <div className="container pg-hero-in">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="pg-eyebrow">
            <Icon size={15} />
            {eyebrow}
          </span>
          <h1 className="pg-title">{title}</h1>
          <p className="pg-sub">{subtitle}</p>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  desc,
  center,
  claro,
}: {
  eyebrow: string
  title: string
  desc?: string
  center?: boolean
  /** Texto blanco, para secciones de fondo oscuro */
  claro?: boolean
}) {
  return (
    <div className={`sx-head${center ? ' center' : ''}${claro ? ' claro' : ''}`}>
      <span className="sx-eyebrow">{eyebrow}</span>
      <h2 className="sx-title">{title}</h2>
      {desc && <p className="sx-desc">{desc}</p>}
    </div>
  )
}

const telExt = (ext: string) => `${CMR.telefonoHref},${ext}`

/** Banda roja con el teléfono y las extensiones de emergencia */
export function BandaEmergencia({ onComoLlegar }: { onComoLlegar?: () => void }) {
  return (
    <section className="banda-urg">
      <div className="container banda-urg-in">
        <div className="banda-urg-icon">
          <Siren size={34} />
        </div>
        <div className="banda-urg-txt">
          <span className="banda-urg-kicker">Emergencias abiertas 24 horas, los 365 días</span>
          <a className="banda-urg-tel" href={CMR.telefonoHref}>
            {CMR.telefono}
          </a>
          <div className="banda-urg-ext">
            <span>
              Adultos{' '}
              {emergencias.adultos.map((e) => (
                <a key={e} href={telExt(e)}>
                  ext. {e}
                </a>
              ))}
            </span>
            <span>
              Pediátricas{' '}
              {emergencias.pediatricas.map((e) => (
                <a key={e} href={telExt(e)}>
                  ext. {e}
                </a>
              ))}
            </span>
          </div>
        </div>
        <div className="banda-urg-cta">
          <a className="btn btn-white-red" href={CMR.telefonoHref}>
            <PhoneCall size={18} />
            Llamar ahora
          </a>
          {onComoLlegar ? (
            <button className="btn btn-ghost-white" onClick={onComoLlegar}>
              <Navigation size={17} />
              Ver emergencias
            </button>
          ) : (
            <a className="btn btn-ghost-white" href={CMR.mapaUrl} target="_blank" rel="noopener noreferrer">
              <Navigation size={17} />
              Cómo llegar
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

/** Mapa de Google + datos de contacto */
export function BloqueUbicacion() {
  return (
    <div className="ubic">
      <div className="ubic-map">
        <iframe
          title={`Mapa de ubicación de ${CMR.nombre}`}
          src={CMR.mapaEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="ubic-card">
        <h3>{CMR.nombre}</h3>

        <div className="ubic-row">
          <span className="ubic-ic t-azul">
            <MapPin size={18} />
          </span>
          <div>
            <p className="ubic-label">Dirección</p>
            <p className="ubic-val">{CMR.direccion}</p>
            <p className="ubic-sub">
              {CMR.sector}, {CMR.ciudad}
            </p>
          </div>
        </div>

        <div className="ubic-row">
          <span className="ubic-ic t-lima">
            <Phone size={18} />
          </span>
          <div>
            <p className="ubic-label">Teléfono central</p>
            <a className="ubic-val" href={CMR.telefonoHref}>
              {CMR.telefono}
            </a>
          </div>
        </div>

        <div className="ubic-row">
          <span className="ubic-ic t-teal">
            <Mail size={18} />
          </span>
          <div>
            <p className="ubic-label">Correo</p>
            <a className="ubic-val" href={`mailto:${CMR.correo}`}>
              {CMR.correo}
            </a>
          </div>
        </div>

        <div className="ubic-row">
          <span className="ubic-ic t-rosa">
            <Camera size={18} />
          </span>
          <div>
            <p className="ubic-label">Instagram</p>
            <a className="ubic-val" href={CMR.instagram} target="_blank" rel="noopener noreferrer">
              {CMR.instagramUsuario}
            </a>
          </div>
        </div>

        <a className="btn btn-navy ubic-btn" href={CMR.mapaUrl} target="_blank" rel="noopener noreferrer">
          <Navigation size={17} />
          Abrir en Google Maps
        </a>
      </div>
    </div>
  )
}

/** Aviso en las vistas del portal: aún no está habilitado para pacientes */
export function AvisoFase2() {
  return (
    <div className="aviso-f2">
      <div className="container aviso-f2-in">
        <Construction size={18} />
        <p>
          <strong>Vista previa · Fase 2.</strong> El Portal del Paciente se habilitará al completar la
          integración con los sistemas clínicos del Centro. Los datos que ve aquí son de ejemplo.
        </p>
      </div>
    </div>
  )
}
