import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { ArrowRight, MoveRight, Hand } from 'lucide-react'
import { SectionHead } from '../../../components/SitioUI'
import { especialidadesDestacadas, totalEspecialidades, totalMedicos } from '../../../data/especialidades'
import type { Especialidad } from '../../../data/especialidades'
import { useMedia, ESCRITORIO } from '../../../hooks/useMedia'
import type { Navegar } from '../../../rutas'

type Props = { onNavigate: Navegar }

function Tile({ e, onClick }: { e: Especialidad; onClick: () => void }) {
  return (
    <button className={`esp-tile t-${e.tono}`} onClick={onClick}>
      <span className="esp-tile-ic">
        <e.icon size={22} />
      </span>
      <strong>{e.nombre}</strong>
      <span className="esp-tile-n">
        {e.total} {e.total === 1 ? 'especialista' : 'especialistas'}
      </span>
    </button>
  )
}

function Pista({ onNavigate }: Props) {
  const ver = (nombre: string) => onNavigate('especialistas', `?especialidad=${encodeURIComponent(nombre)}`)
  return (
    <>
      {especialidadesDestacadas.map((e) => (
        <Tile key={e.nombre} e={e} onClick={() => ver(e.nombre)} />
      ))}
      <button className="esp-tile esp-tile-cta" onClick={() => onNavigate('especialistas')}>
        <span className="esp-tile-cta-n">{totalMedicos}</span>
        <strong>médicos en el directorio</strong>
        <span className="esp-tile-cta-go">
          Buscar mi especialista <ArrowRight size={16} />
        </span>
      </button>
    </>
  )
}

const Cabecera = ({ onNavigate }: Props) => (
  <div className="sx-row esp-head">
    <SectionHead
      eyebrow="Especialidades"
      title={`${totalEspecialidades} especialidades bajo un mismo techo`}
      desc="Elija una especialidad para ver a sus médicos, su consultorio y su teléfono."
    />
    <button className="btn btn-navy" onClick={() => onNavigate('especialistas')}>
      Ver directorio completo
      <ArrowRight size={16} />
    </button>
  </div>
)

/** Escritorio: la sección se ancla y el scroll vertical mueve la pista en horizontal */
function Anclada({ onNavigate }: Props) {
  const seccion = useRef<HTMLElement>(null)
  const ventana = useRef<HTMLDivElement>(null)
  const pista = useRef<HTMLDivElement>(null)
  const [recorrido, setRecorrido] = useState(0)

  useLayoutEffect(() => {
    const medir = () => {
      if (pista.current && ventana.current)
        setRecorrido(Math.max(0, pista.current.offsetWidth - ventana.current.clientWidth))
    }
    medir()
    const ro = new ResizeObserver(medir)
    if (pista.current) ro.observe(pista.current)
    if (ventana.current) ro.observe(ventana.current)
    return () => ro.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({ target: seccion, offset: ['start start', 'end end'] })
  const progreso = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.35 })
  const x = useTransform(progreso, [0, 1], [0, -recorrido])
  const pistaOp = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const contador = useTransform(scrollYProgress, (v) =>
    String(Math.min(totalEspecialidades, Math.max(1, Math.round(v * totalEspecialidades)))).padStart(2, '0'),
  )

  // El tramo vertical es un 60 % del horizontal: la pista avanza más rápido que el scroll
  // y la sección no alarga demasiado la página
  const tramo = Math.round(recorrido * 0.6)

  return (
    <section ref={seccion} className="esp-pin" style={{ height: `calc(100vh - 76px + ${tramo}px)` }}>
      <div className="esp-pin-sticky">
        <div className="container">
          <Cabecera onNavigate={onNavigate} />
        </div>

        <div className="esp-pin-view" ref={ventana}>
          <motion.div className="esp-track" ref={pista} style={{ x }}>
            <Pista onNavigate={onNavigate} />
          </motion.div>
        </div>

        <div className="container esp-pin-foot">
          <span className="esp-count">
            <motion.span>{contador}</motion.span> / {totalEspecialidades}
          </span>
          <div className="esp-bar">
            <motion.div className="esp-bar-fill" style={{ scaleX: progreso }} />
          </div>
          <motion.span className="esp-hint" style={{ opacity: pistaOp }}>
            Siga bajando para recorrerlas <MoveRight size={16} />
          </motion.span>
        </div>
      </div>
    </section>
  )
}

/** Móvil (o movimiento reducido): carrusel nativo que se desliza con el dedo */
function Deslizable({ onNavigate }: Props) {
  return (
    <section className="sx sx-tinted esp-nat">
      <div className="container">
        <Cabecera onNavigate={onNavigate} />
      </div>
      <div className="esp-nat-scroll">
        <div className="esp-track">
          <Pista onNavigate={onNavigate} />
        </div>
      </div>
      <div className="container">
        <p className="esp-hint">
          <Hand size={15} /> Deslice para ver las {totalEspecialidades}
        </p>
      </div>
    </section>
  )
}

export default function EspecialidadesScroll({ onNavigate }: Props) {
  const escritorio = useMedia(ESCRITORIO)
  const quieto = useReducedMotion()
  return escritorio && !quieto ? <Anclada onNavigate={onNavigate} /> : <Deslizable onNavigate={onNavigate} />
}
