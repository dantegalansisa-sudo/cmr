import {
  HeartPulse,
  Siren,
  BedDouble,
  Microscope,
  ScanLine,
  FlaskConical,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  PhoneCall,
  Stethoscope,
} from 'lucide-react'
import type { ReactNode } from 'react'
import Rise from '../../components/Rise'
import { PageHero, SectionHead, BandaEmergencia } from '../../components/SitioUI'
import { CMR, servicios } from '../../data/institucion'
import type { Servicio } from '../../data/institucion'
import { totalEspecialidades, totalMedicos } from '../../data/especialidades'
import type { Navegar } from '../../rutas'

const ICONS = { Siren, BedDouble, Microscope, ScanLine, FlaskConical, ShieldCheck } as const

function Accion({ s, onNavigate }: { s: Servicio; onNavigate: Navegar }) {
  let contenido: ReactNode
  switch (s.slug) {
    case 'emergencias':
      contenido = (
        <button className="btn btn-navy" onClick={() => onNavigate('emergencias')}>
          Ver extensiones de emergencia
          <ArrowRight size={16} />
        </button>
      )
      break
    case 'laboratorio':
    case 'resultados':
      contenido = (
        <a className="btn btn-navy" href={CMR.resultadosUrl} target="_blank" rel="noopener noreferrer">
          Resultados en línea
          <ArrowUpRight size={16} />
        </a>
      )
      break
    case 'ars':
      contenido = (
        <a className="btn btn-navy" href={CMR.telefonoHref}>
          <PhoneCall size={16} />
          Consultar mi cobertura
        </a>
      )
      break
    default:
      contenido = (
        <a className="btn btn-navy" href={CMR.telefonoHref}>
          <PhoneCall size={16} />
          Más información
        </a>
      )
  }
  return <div className="svc-cta">{contenido}</div>
}

export default function Servicios({ onNavigate }: { onNavigate: Navegar }) {
  return (
    <>
      <PageHero
        tono="teal"
        icon={HeartPulse}
        eyebrow="Servicios"
        title="Todo lo que necesita, en un mismo lugar"
        subtitle="Emergencias, cuidados intensivos, laboratorio, imágenes y resultados en línea, integrados con nuestro cuerpo de especialistas."
      />

      <section className="sx sx-tinted">
        <div className="container svc-list">
          {servicios.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS]
            return (
              <Rise key={s.slug} i={i % 2}>
                <article className={`svc-card t-${s.tono}`} id={s.slug}>
                  <span className="svc-ic">
                    <Icon size={30} />
                  </span>
                  <div className="svc-body">
                    <h2>{s.nombre}</h2>
                    <p className="svc-res">{s.resumen}</p>
                    <p>{s.detalle}</p>
                  </div>
                  <Accion s={s} onNavigate={onNavigate} />
                </article>
              </Rise>
            )
          })}
        </div>
      </section>

      <section className="sx sx-navy">
        <div className="container cta-esp">
          <SectionHead
            claro
            eyebrow="Consulta especializada"
            title={`${totalMedicos} médicos en ${totalEspecialidades} especialidades`}
            desc="Encuentre a su especialista, vea su consultorio y llame directamente para agendar."
          />
          <button className="btn btn-lima" onClick={() => onNavigate('especialistas')}>
            <Stethoscope size={17} />
            Ir al directorio médico
          </button>
        </div>
      </section>

      <BandaEmergencia onComoLlegar={() => onNavigate('emergencias')} />
    </>
  )
}
