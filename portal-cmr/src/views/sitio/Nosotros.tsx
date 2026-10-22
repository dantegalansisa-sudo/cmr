import {
  Building2,
  Target,
  Eye,
  Award,
  Scale,
  HeartHandshake,
  GraduationCap,
  HandHeart,
  Heart,
  UserCheck,
  Shuffle,
  UsersRound,
  Lock,
  Landmark,
  CalendarHeart,
  Mail,
  ArrowRight,
} from 'lucide-react'
import Rise from '../../components/Rise'
import { PageHero, SectionHead } from '../../components/SitioUI'
import {
  CMR,
  mision,
  vision,
  valores,
  cualidades,
  consejo,
  aniosDeServicio,
} from '../../data/institucion'
import { totalEspecialidades, totalMedicos } from '../../data/especialidades'
import type { Navegar } from '../../rutas'

const ICONS = {
  Award,
  Scale,
  HeartHandshake,
  GraduationCap,
  HandHeart,
  Heart,
  UserCheck,
  Shuffle,
  UsersRound,
  Lock,
} as const

const TONOS_VALORES = ['azul', 'lima', 'rosa', 'violeta'] as const
const TONOS_CUALIDADES = ['teal', 'rosa', 'azul', 'ambar', 'lima', 'violeta'] as const

export default function Nosotros({ onNavigate }: { onNavigate: Navegar }) {
  return (
    <>
      <PageHero
        tono="verde"
        icon={Building2}
        eyebrow="Quiénes somos"
        title={`${aniosDeServicio} años cuidando de usted`}
        subtitle={`Desde el ${CMR.fundacion}, ${CMR.nombre} ofrece servicios médicos generales y de especialidad dedicados a la prevención y curación de enfermedades.`}
      />

      {/* ── HISTORIA ─────────────────────────────────────── */}
      <section className="sx">
        <div className="container hist-split">
          <Rise>
            <div className="hist-photo">
              <img src="/images/edificio.jpg" alt={`Fachada de ${CMR.nombre}`} />
            </div>
          </Rise>

          <div>
            <SectionHead
              eyebrow="Nuestra historia"
              title="Un hospital dominicano fundado en 1998"
              desc={`La sociedad que dio origen a ${CMR.nombre} se creó el ${CMR.fundacion} con un propósito claro: ofrecer servicios médicos generales y las especialidades relacionadas con la prevención y curación de enfermedades.`}
            />

            <div className="hist-stats">
              <div className="hist-stat t-azul">
                <CalendarHeart size={20} />
                <strong>{CMR.anioFundacion}</strong>
                <span>Año de fundación</span>
              </div>
              <div className="hist-stat t-lima">
                <UsersRound size={20} />
                <strong>+{totalMedicos}</strong>
                <span>Médicos</span>
              </div>
              <div className="hist-stat t-rosa">
                <HeartHandshake size={20} />
                <strong>{totalEspecialidades}</strong>
                <span>Especialidades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISIÓN Y VISIÓN ──────────────────────────────── */}
      <section className="sx sx-navy">
        <div className="container mv-grid">
          <Rise>
            <div className="mv-card mv-mision">
              <span className="mv-ic">
                <Target size={26} />
              </span>
              <h2>Misión</h2>
              <p>{mision}</p>
            </div>
          </Rise>
          <Rise i={1}>
            <div className="mv-card mv-vision">
              <span className="mv-ic">
                <Eye size={26} />
              </span>
              <h2>Visión</h2>
              <p>{vision}</p>
            </div>
          </Rise>
        </div>
      </section>

      {/* ── VALORES ──────────────────────────────────────── */}
      <section className="sx sx-tinted">
        <div className="container">
          <SectionHead
            center
            eyebrow="Valores"
            title="Lo que guía cada atención"
            desc="Cuatro principios que orientan el trabajo de todo nuestro equipo."
          />
          <div className="val-grid">
            {valores.map((v, i) => {
              const Icon = ICONS[v.icon as keyof typeof ICONS]
              return (
                <Rise key={v.nombre} i={i}>
                  <div className={`val-card t-${TONOS_VALORES[i]}`}>
                    <span className="val-ic">
                      <Icon size={24} />
                    </span>
                    <h3>{v.nombre}</h3>
                    <p>{v.texto}</p>
                  </div>
                </Rise>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GOBIERNO ─────────────────────────────────────── */}
      <section className="sx">
        <div className="container gob-split">
          <div>
            <SectionHead eyebrow="Gobierno corporativo" title="Consejo de Administración" desc={consejo.texto} />
          </div>
          <Rise>
            <div className="gob-card">
              <span className="gob-ic">
                <Landmark size={24} />
              </span>
              <h3>Integración del Consejo</h3>
              <ul>
                {consejo.cargos.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="gob-nota">Elegidos por la Asamblea General para un período de 2 años.</p>
            </div>
          </Rise>
        </div>
      </section>

      {/* ── EQUIPO ───────────────────────────────────────── */}
      <section className="sx sx-lima">
        <div className="container">
          <SectionHead
            center
            eyebrow="Nuestro equipo"
            title="Las cualidades que buscamos en cada colaborador"
            desc="Detrás de cada consulta hay personas comprometidas con el paciente y con la institución."
          />
          <div className="cual-grid">
            {cualidades.map((c, i) => {
              const Icon = ICONS[c.icon as keyof typeof ICONS]
              return (
                <Rise key={c.nombre} i={i % 3}>
                  <div className={`cual-card t-${TONOS_CUALIDADES[i]}`}>
                    <span className="cual-ic">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3>{c.nombre}</h3>
                      <p>{c.texto}</p>
                    </div>
                  </div>
                </Rise>
              )
            })}
          </div>

          <div className="join">
            <div>
              <h3>¿Quiere formar parte de nuestro equipo?</h3>
              <p>Envíenos su currículum y el área en la que le gustaría trabajar.</p>
            </div>
            <div className="join-cta">
              <a className="btn btn-navy" href={`mailto:${CMR.correo}?subject=${encodeURIComponent('Solicitud de empleo')}`}>
                <Mail size={17} />
                Enviar currículum
              </a>
              <button className="btn btn-ghost" onClick={() => onNavigate('contacto')}>
                Contacto
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
