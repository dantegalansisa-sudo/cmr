import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Fade-up sutil al entrar en viewport. Sin lifts dramáticos. */
export default function Rise({
  children,
  i = 0,
  className,
}: {
  children: ReactNode
  i?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
