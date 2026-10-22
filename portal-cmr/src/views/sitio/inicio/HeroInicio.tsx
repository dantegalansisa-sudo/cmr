import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Search, FlaskConical, Siren, ArrowUpRight } from 'lucide-react'
import RevealText from '../../../components/RevealText'
import AnimatedCounter from '../../../components/AnimatedCounter'
import { CMR, emergencias, aniosDeServicio } from '../../../data/institucion'
import { totalEspecialidades, totalMedicos } from '../../../data/especialidades'
import type { Navegar } from '../../../rutas'

const rango = (ext: string[]) => `${ext[0]}–${ext[ext.length - 1]}`

const STATS = [
  { value: totalMedicos, prefix: '+', suffix: '', label: 'Médicos especialistas' },
  { value: totalEspecialidades, prefix: '', suffix: '', label: 'Especialidades' },
  { value: aniosDeServicio, prefix: '', suffix: '', label: 'Años de servicio' },
  { value: 24, prefix: '', suffix: '/7', label: 'Emergencias' },
]

export default function HeroInicio({ onNavigate }: { onNavigate: Navegar }) {
  const [q, setQ] = useState('')
  const ref = useRef<HTMLElement>(null)
  const quieto = !!useReducedMotion()

  // Al bajar: la foto se acerca y baja más lento (parallax) y el texto se despide
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const fotoY = useTransform(scrollYProgress, [0, 1], ['0%', quieto ? '0%' : '20%'])
  const fotoEscala = useTransform(scrollYProgress, [0, 1], [1.04, quieto ? 1.04 : 1.18])
  const textoY = useTransform(scrollYProgress, [0, 1], [0, quieto ? 0 : -110])
  const textoOp = useTransform(scrollYProgress, [0, 0.7], [1, quieto ? 1 : 0])

  const buscar = (e: FormEvent) => {
    e.preventDefault()
    onNavigate('especialistas', q.trim() ? `?q=${encodeURIComponent(q.trim())}` : '')
  }

  return (
    <section className="home-hero" ref={ref}>
      <div className="home-hero-photo" aria-hidden="true">
        <motion.img src="/images/edificio.jpg" alt="" style={{ y: fotoY, scale: fotoEscala }} />
      </div>
      <div className="home-hero-glow" aria-hidden="true" />
      <div className="home-hero-glow b" aria-hidden="true" />

      <motion.div className="container home-hero-in" style={{ y: textoY, opacity: textoOp }}>
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
            Hospital privado de alta especialidad. Servicios médicos, quirúrgicos y de apoyo al
            diagnóstico, con gran calidad y calidez para toda la familia.
          </motion.p>

          <motion.form
            className="home-search"
            onSubmit={buscar}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
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

        <motion.a
          className="home-urg-card"
          href={CMR.telefonoHref}
          initial={{ opacity: 0, x: 40, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 90, damping: 14 }}
        >
          <span className="home-urg-icon">
            <Siren size={22} />
          </span>
          <span>
            <span className="home-urg-k">Emergencias abiertas 24/7</span>
            <span className="home-urg-tel">{CMR.telefono}</span>
            <span className="home-urg-ext">
              Adultos ext. {rango(emergencias.adultos)} · Pediátricas ext. {rango(emergencias.pediatricas)}
            </span>
          </span>
        </motion.a>
      </motion.div>

      <div className="container">
        <motion.div
          className="home-stats"
          initial="oculto"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } } }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              className="home-stat"
              variants={{
                oculto: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <span className="home-stat-n">
                <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="home-stat-l">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
