import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  onClick?: () => void
  strength?: number
}

/**
 * Botón magnético — Taste Skill. Sólo se usa en el Landing.
 */
export default function MagneticButton({
  children,
  className,
  onClick,
  strength = 0.32,
}: Props) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 })

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
