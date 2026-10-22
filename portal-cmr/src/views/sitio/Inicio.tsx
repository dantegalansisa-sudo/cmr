import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  FlaskConical,
  Siren,
  Stethoscope,
  Navigation,
  ArrowRight,
  ArrowUpRight,
  CalendarHeart,
  Award,
  Scale,
  HeartHandshake,
  GraduationCap,
  Microscope,
  ScanLine,
  BedDouble,
  ShieldCheck,
} from 'lucide-react'
import RevealText from '../../components/RevealText'
import AnimatedCounter from '../../components/AnimatedCounter'
import Rise from '../../components/Rise'
import { SectionHead, BandaEmergencia, BloqueUbicacion } from '../../components/SitioUI'
import { CMR, emergencias, servicios, valores, aniosDeServicio } from '../../data/institucion'
import {
  especialidadesDestacadas,
  totalEspecialidades,
  totalMedicos,
} from '../../data/especialidades'
import type { Navegar } from '../../rutas'

const SERV_ICONS = { Siren, BedDouble, Microscope, ScanLine, FlaskConical, ShieldCheck } as const
const VAL_ICONS = { Award, Scale, HeartHandshake, GraduationCap } as const

const rango = (ext: string[]) => `${ext[0]}–${ext[ext.length - 1]}`

type Props = { onNavigate: Navegar }

export default function Inicio({ onNavigate }: Props) {
  const [q, setQ] = useState('')

  const buscar = (e: FormEvent) => {
    e.preventDefault()
    onNavigate('especialistas', q.trim() ? `?q=${encodeURIComponent(q.trim())}` : '')
  }

  const verEspecialidad = (nombre: string) =>
    onNavigate('especialistas', `?especialidad=${encodeURIComponent(nombre)}`)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero-photo" aria-hidden="true">
          <img src="/images/edificio.jpg" alt="" />
        </div>
        <div className="home-hero-glow" aria-hidden="true" />

        <div className="container home-hero-in">
          <div className="home-hero-copy">
            <motion.span
              className="home-pill"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <i className="dot-lima" />
              Desde {CMR.anioFundacion} · {CMR.sector}, {CMR.ciudad}
            </motion.span>

            <RevealText tag="h1" className="home-h1">
              {CMR.nombre}
            </RevealText>

            <motion.p
              className="home-lead"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hospital privado de alta especialidad. Servicios médicos, quirúrgicos y de apoyo
              al diagnóstico, con gran calidad y calidez para toda la familia.
            </motion.p>

            <motion.form
              className="home-search"
              onSubmit={buscar}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <Search size={20} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Busque un médico o especialidad…"
                aria-label="Buscar médico o especialidad"
              />
              <button type="submit" className="btn btn-lima">
                Buscar
              </button>
            </motion.form>

            <motion.div
              className="home-cta"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a className="btn btn-ghost-white" href={CMR.resultadosUrl} target="_blank" rel="noopener noreferrer">
                <FlaskConical size={17} />
                Resultados en línea
                <ArrowUpRight size={15} />
              </a>
              <button className="btn btn-ghost-white" onClick={() => onNavigate('emergencias')}>
                <Siren size={17} />
                Emergencias 24/7
              </button>
            </motion.div>
          </div>

          <motion.div
            className="home-urg-card"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="home-urg-icon">
              <Siren size={22} />
            </span>
            <div>
              <p className="home-urg-k">Emergencias abiertas 24/7</p>
              <a className="home-urg-tel" href={CMR.telefonoHref}>
                {CMR.telefono}
              </a>
              <p className="home-urg-ext">
                Adultos ext. {rango(emergencias.adultos)} · Pediátricas ext.{' '}
                {rango(emergencias.pediatricas)}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="container">
          <div className="home-stats">
            <div className="home-stat">
              <span className="home-stat-n">
                <AnimatedCounter value={totalMedicos} prefix="+" />
              </span>
              <span className="home-stat-l">Médicos especialistas</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-n">
                <AnimatedCounter value={totalEspecialidades} />
              </span>
              <span className="home-stat-l">Especialidades</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-n">
                <AnimatedCounter value={aniosDeServicio} />
              </span>
              <span className="home-stat-l">Años de servicio</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-n">
                <AnimatedCounter value={24} suffix="/7" />
              </span>
              <span className="home-stat-l">Emergencias</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESOS RÁPIDOS ──────────────────────────────── */}
      <section className="quick">
        <div className="container quick-grid">
          <Rise i={0}>
            <button className="quick-card q-rojo" onClick={() => onNavigate('emergencias')}>
              <Siren size={26} />
              <strong>Emergencias</strong>
              <span>Adultos y pediátricas, 24 horas</span>
              <ArrowRight size={18} className="quick-arrow" />
            </button>
          </Rise>
          <Rise i={1}>
            <a className="quick-card q-lima" href={CMR.resultadosUrl} target="_blank" rel="noopener noreferrer">
              <FlaskConical size={26} />
              <strong>Resultados en línea</strong>
              <span>Consulte sus análisis desde casa</span>
              <ArrowUpRight size={18} className="quick-arrow" />
            </a>
          </Rise>
          <Rise i={2}>
            <button className="quick-card q-azul" onClick={() => onNavigate('especialistas')}>
              <Stethoscope size={26} />
              <strong>Encuentre su médico</strong>
              <span>{totalMedicos} especialistas, con consultorio y teléfono</span>
              <ArrowRight size={18} className="quick-arrow" />
            </button>
          </Rise>
          <Rise i={3}>
            <a className="quick-card q-teal" href={CMR.mapaUrl} target="_blank" rel="noopener noreferrer">
              <Navigation size={26} />
              <strong>Cómo llegar</strong>
              <span>
                {CMR.direccion}, {CMR.sector}
              </span>
              <ArrowUpRight size={18} className="quick-arrow" />
            </a>
          </Rise>
        </div>
      </section>

      {/* ── ESPECIALIDADES ───────────────────────────────── */}
      <section className="sx sx-tinted">
        <div className="container">
          <div className="sx-row">
            <SectionHead
              eyebrow="Especialidades"
              title={`${totalEspecialidades} especialidades bajo un mismo techo`}
              desc="Desde pediatría hasta cirugía cardiovascular. Elija una especialidad para ver a sus médicos, su consultorio y su teléfono."
            />
            <button className="btn btn-navy" onClick={() => onNavigate('especialistas')}>
              Ver todas las especialidades
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="esp-grid">
            {especialidadesDestacadas.slice(0, 12).map((e, i) => (
              <Rise key={e.nombre} i={i % 6}>
                <button className={`esp-tile t-${e.tono}`} onClick={() => verEspecialidad(e.nombre)}>
                  <span className="esp-tile-ic">
                    <e.icon size={22} />
                  </span>
                  <strong>{e.nombre}</strong>
                  <span className="esp-tile-n">
                    {e.total} {e.total === 1 ? 'especialista' : 'especialistas'}
                  </span>
                </button>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ────────────────────────────────────── */}
      <section className="sx sx-navy">
        <div className="container">
          <div className="sx-row">
            <SectionHead
              claro
              eyebrow="Servicios"
              title="Atención completa, del diagnóstico al tratamiento"
              desc="Servicios clínicos y de apoyo diagnóstico integrados en un mismo centro."
            />
            <button className="btn btn-lima" onClick={() => onNavigate('servicios')}>
              Todos los servicios
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="serv-grid">
            {servicios.map((s, i) => {
              const Icon = SERV_ICONS[s.icon as keyof typeof SERV_ICONS]
              const contenido = (
                <>
                  <span className={`serv-ic t-${s.tono}`}>
                    <Icon size={22} />
                  </span>
                  <h3>{s.nombre}</h3>
                  <p>{s.resumen}</p>
                  <span className="serv-more">
                    {s.externo ? 'Ir a la plataforma' : 'Más información'}
                    {s.externo ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />}
                  </span>
                </>
              )
              return (
                <Rise key={s.slug} i={i % 3}>
                  {s.externo ? (
                    <a className="serv-card" href={s.externo} target="_blank" rel="noopener noreferrer">
                      {contenido}
                    </a>
                  ) : (
                    <button
                      className="serv-card"
                      onClick={() => onNavigate(s.slug === 'emergencias' ? 'emergencias' : 'servicios')}
                    >
                      {contenido}
                    </button>
                  )}
                </Rise>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── NOSOTROS ─────────────────────────────────────── */}
      <section className="sx sx-lima">
        <div className="container about-split">
          <Rise>
            <div className="about-photo">
              <img src="/images/edificio.jpg" alt={`Fachada de ${CMR.nombre}`} />
              <div className="about-badge">
                <CalendarHeart size={22} />
                <span>
                  <strong>{aniosDeServicio} años</strong>
                  desde {CMR.fundacion}
                </span>
              </div>
            </div>
          </Rise>

          <div>
            <SectionHead
              eyebrow="Quiénes somos"
              title={`${aniosDeServicio} años al servicio de la salud dominicana`}
              desc="Nuestra misión es ser un hospital privado de alta especialidad que brinda servicios con gran calidad y calidez, y un centro formador de profesionales de excelencia para la salud del país."
            />

            <div className="valores-mini">
              {valores.map((v) => {
                const Icon = VAL_ICONS[v.icon as keyof typeof VAL_ICONS]
                return (
                  <span key={v.nombre} className="valor-chip">
                    <Icon size={16} />
                    {v.nombre}
                  </span>
                )
              })}
            </div>

            <button className="btn btn-navy" onClick={() => onNavigate('nosotros')}>
              Conozca nuestra historia
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── EMERGENCIAS ──────────────────────────────────── */}
      <BandaEmergencia onComoLlegar={() => onNavigate('emergencias')} />

      {/* ── UBICACIÓN ────────────────────────────────────── */}
      <section className="sx sx-mint">
        <div className="container">
          <SectionHead
            center
            eyebrow="Ubicación"
            title="Visítenos en Mirador Norte"
            desc="Estamos en la Av. Rómulo Betancourt, en el corazón de Santo Domingo."
          />
          <BloqueUbicacion />
        </div>
      </section>
    </>
  )
}
