import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Cursor personalizado — Taste Skill.
 * Sólo se monta en el Landing. Se desactiva solo en <768px.
 */
export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 })

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return

    document.body.classList.add('has-custom-cursor')
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [x, y])

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY }} />
    </>
  )
}
