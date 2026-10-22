import { useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'
import {
  Siren,
  BedDouble,
  Microscope,
  ScanLine,
  FlaskConical,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  PhoneCall,
  ChevronDown,
} from 'lucide-react'
import { SectionHead } from '../../../components/SitioUI'
import { CMR, servicios } from '../../../data/institucion'
import type { Servicio } from '../../../data/institucion'
import { useMedia, ESCRITORIO } from '../../../hooks/useMedia'
import type { Navegar } from '../../../rutas'

const ICONS = { Siren, BedDouble, Microscope, ScanLine, FlaskConical, ShieldCheck } as const
const N = servicios.length
const icono = (s: Servicio) => ICONS[s.icon as keyof typeof ICONS]

type Props = { onNavigate: Navegar }

/** El botón de acción de cada servicio: a dónde lleva depende del servicio */
function Accion({ s, onNavigate }: { s: Servicio } & Props) {
  if (s.externo || s.slug === 'laboratorio')
    return (
      <a className="btn btn-white" href={CMR.resultadosUrl} target="_blank" rel="noopener noreferrer">
        Resultados en línea <ArrowUpRight size={16} />
      </a>
    )
  if (s.slug === 'emergencias')
    return (
      <button className="btn btn-white" onClick={() => onNavigate('emergencias')}>
        Ver extensiones <ArrowRight size={16} />
      </button>
    )
  if (s.slug === 'ars')
    return (
      <a className="btn btn-white" href={CMR.telefonoHref}>
        <PhoneCall size={16} /> Consultar cobertura
      </a>
    )
  return (
    <button className="btn btn-white" onClick={() => onNavigate('servicios')}>
      Más información <ArrowRight size={16} />
    </button>
  )
}

function Cabecera({ onNavigate, activo }: Props & { activo?: number }) {
  return (
    <div className="sx-row svc-head">
      <SectionHead
        claro
        eyebrow="Servicios"
        title="Atención completa, del diagnóstico al tratamiento"
        desc="Servicios clínicos y de apoyo diagnóstico integrados en un mismo centro."
      />
      {activo !== undefined ? (
        <div className="svc-counter" aria-hidden="true">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={activo}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {String(activo + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <em>/ {String(N).padStart(2, '0')}</em>
        </div>
      ) : (
        <button className="btn btn-lima" onClick={() => onNavigate('servicios')}>
          Todos los servicios <ArrowRight size={16} />
        </button>
      )}
    </div>
  )
}

/** Paneles horizontales: el activo se expande y los demás quedan como franjas */
function Paneles({ activo, elegir, onNavigate }: Props & { activo: number; elegir: (i: number) => void }) {
  return (
    <div className="svc-panels">
      {servicios.map((s, i) => {
        const Icon = icono(s)
        const abierto = i === activo
        return (
          <motion.div
            key={s.slug}
            className={`svc-panel t-${s.tono}${abierto ? ' on' : ''}`}
            animate={{ flexGrow: abierto ? 5 : 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 24 }}
          >
            <Icon className="svc-panel-deco" size={240} strokeWidth={0.7} aria-hidden="true" />
            <span className="svc-panel-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="svc-panel-ic">
              <Icon size={24} />
            </span>

            {!abierto && (
              <button className="svc-panel-hit" onClick={() => elegir(i)} aria-label={`Ver ${s.nombre}`}>
                <span className="svc-panel-vert">{s.nombre}</span>
              </button>
            )}

            <AnimatePresence>
              {abierto && (
                <motion.div
                  className="svc-panel-body"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.45 } }}
                  exit={{ opacity: 0, transition: { duration: 0.12 } }}
                >
                  <h3>{s.nombre}</h3>
                  <p className="svc-panel-res">{s.resumen}</p>
                  <p>{s.detalle}</p>
                  <Accion s={s} onNavigate={onNavigate} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

/** Escritorio: la sección se ancla y cada tramo de scroll abre el siguiente servicio */
function Anclado({ onNavigate }: Props) {
  const seccion = useRef<HTMLElement>(null)
  const [activo, setActivo] = useState(0)
  const { scrollYProgress } = useScroll({ target: seccion, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActivo(Math.min(N - 1, Math.max(0, Math.floor(v * N))))
  })

  // Al hacer clic en una franja, se desplaza la página hasta el tramo de ese servicio
  const elegir = (i: number) => {
    const el = seccion.current
    if (!el) return
    const inicio = el.getBoundingClientRect().top + window.scrollY
    const tramo = el.offsetHeight - window.innerHeight
    window.scrollTo({ top: inicio + ((i + 0.5) / N) * tramo, behavior: 'smooth' })
  }

  return (
    <section ref={seccion} className="svc-pin">
      <div className="svc-pin-sticky">
        <div className="container">
          <Cabecera onNavigate={onNavigate} activo={activo} />
          <Paneles activo={activo} elegir={elegir} onNavigate={onNavigate} />
          <div className="svc-dots">
            {servicios.map((s, i) => (
              <button
                key={s.slug}
                className={i === activo ? 'on' : undefined}
                onClick={() => elegir(i)}
                aria-label={s.nombre}
              />
            ))}
            <button className="svc-all" onClick={() => onNavigate('servicios')}>
              Todos los servicios <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Movimiento reducido en escritorio: mismos paneles, sin anclar, al pasar el mouse */
function Libre({ onNavigate }: Props) {
  const [activo, setActivo] = useState(0)
  return (
    <section className="sx sx-navy">
      <div className="container">
        <Cabecera onNavigate={onNavigate} />
        <Paneles activo={activo} elegir={setActivo} onNavigate={onNavigate} />
      </div>
    </section>
  )
}

/** Móvil: acordeón compacto, un servicio abierto a la vez */
function Acordeon({ onNavigate }: Props) {
  const [abierto, setAbierto] = useState<number | null>(0)
  return (
    <section className="sx sx-navy svc-acc">
      <div className="container">
        <Cabecera onNavigate={onNavigate} />
        <div className="svc-acc-list">
          {servicios.map((s, i) => {
            const Icon = icono(s)
            const on = abierto === i
            return (
              <div key={s.slug} className={`svc-acc-item t-${s.tono}${on ? ' on' : ''}`}>
                <button
                  className="svc-acc-head"
                  onClick={() => setAbierto(on ? null : i)}
                  aria-expanded={on}
                >
                  <span className="svc-acc-ic">
                    <Icon size={20} />
                  </span>
                  <span className="svc-acc-name">{s.nombre}</span>
                  <ChevronDown size={18} className="svc-acc-chev" />
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      className="svc-acc-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="svc-acc-in">
                        <p>{s.resumen}</p>
                        <Accion s={s} onNavigate={onNavigate} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function ServiciosPanel({ onNavigate }: Props) {
  const escritorio = useMedia(ESCRITORIO)
  const quieto = useReducedMotion()
  if (!escritorio) return <Acordeon onNavigate={onNavigate} />
  return quieto ? <Libre onNavigate={onNavigate} /> : <Anclado onNavigate={onNavigate} />
}
