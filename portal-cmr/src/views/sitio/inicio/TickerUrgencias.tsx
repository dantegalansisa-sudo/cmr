import { Fragment, useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { Siren } from 'lucide-react'
import { CMR, emergencias } from '../../../data/institucion'

const FRASES = [
  'Emergencias 24/7',
  `Adultos ext. ${emergencias.adultos.join(' · ')}`,
  `Pediátricas ext. ${emergencias.pediatricas.join(' · ')}`,
  CMR.telefono,
  'Abiertos los 365 días',
]

/** Envuelve v dentro de [min, max): la cinta se repite sin cortes */
const envolver = (min: number, max: number, v: number) => {
  const r = max - min
  return ((((v - min) % r) + r) % r) + min
}

/**
 * Cinta de emergencias que corre sola y se acelera (o da marcha atrás)
 * según la velocidad y dirección con que se hace scroll.
 */
export default function TickerUrgencias() {
  const quieto = useReducedMotion()
  const base = useMotionValue(0)
  const sentido = useRef(-1)

  const { scrollY } = useScroll()
  const velocidad = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const factor = useTransform(velocidad, [0, 1000], [0, 5], { clamp: false })
  // 4 copias idénticas: al avanzar un 25 % la pista vuelve a empezar sin que se note
  const x = useTransform(base, (v) => `${envolver(-25, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    if (quieto) return
    const f = factor.get()
    if (f < 0) sentido.current = 1
    else if (f > 0) sentido.current = -1
    // 1.1 % de la pista por segundo en reposo, más el empuje del scroll
    const paso = sentido.current * 1.1 * (delta / 1000) * (1 + Math.abs(f))
    base.set(base.get() + paso)
  })

  const grupo = (k: number) => (
    <div className="ticker-group" key={k}>
      {FRASES.map((f) => (
        <Fragment key={f}>
          <span>{f}</span>
          <Siren size={18} className="ticker-sep" />
        </Fragment>
      ))}
    </div>
  )

  return (
    <div className="ticker" aria-hidden="true">
      <motion.div className="ticker-track" style={{ x }}>
        {[0, 1, 2, 3].map(grupo)}
      </motion.div>
    </div>
  )
}
