import { motion } from 'framer-motion'
import type { ElementType } from 'react'

type Props = {
  children: string
  tag?: ElementType
  className?: string
  delay?: number
}

/**
 * Revela el texto palabra por palabra desde abajo — Taste Skill.
 */
export default function RevealText({ children, tag = 'div', className, delay = 0 }: Props) {
  const Tag = motion(tag as ElementType)
  const words = children.split(' ')

  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span className="reveal-word" key={i}>
          <motion.span
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: {
                y: '0%',
                opacity: 1,
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
