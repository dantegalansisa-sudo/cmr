import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type Props = {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

/**
 * Contador que cuenta hacia arriba al entrar en viewport — Taste Skill.
 * Se usa únicamente en la fila de stats del hero.
 */
export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1400,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setDisplay(Math.round(eased * value))
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
