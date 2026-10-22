import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { CalendarHeart, Award, Scale, HeartHandshake, GraduationCap, ArrowRight } from 'lucide-react'
import AnimatedCounter from '../../../components/AnimatedCounter'
import { CMR, valores, aniosDeServicio } from '../../../data/institucion'
import type { Navegar } from '../../../rutas'

const VAL_ICONS = { Award, Scale, HeartHandshake, GraduationCap } as const

const texto: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const linea: Variants = {
  oculto: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const chip: Variants = {
  oculto: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 16 } },
}

export default function NosotrosReveal({ onNavigate }: { onNavigate: Navegar }) {
  const foto = useRef<HTMLDivElement>(null)
  const quieto = !!useReducedMotion()

  // La foto se "destapa" desde el centro mientras sube por la pantalla
  const { scrollYProgress } = useScroll({ target: foto, offset: ['start end', 'center center'] })
  const recorte = useTransform(
    scrollYProgress,
    [0, 1],
    quieto
      ? ['inset(0% 0% 0% 0% round 24px)', 'inset(0% 0% 0% 0% round 24px)']
      : ['inset(22% 18% 22% 18% round 48px)', 'inset(0% 0% 0% 0% round 24px)'],
  )
  const zoom = useTransform(scrollYProgress, [0, 1], [quieto ? 1 : 1.35, 1])

  return (
    <section className="sx sx-lima">
      <div className="container about-split">
        <div className="about-photo-wrap" ref={foto}>
          <motion.div className="about-photo" style={{ clipPath: recorte }}>
            <motion.img src="/images/edificio.jpg" alt={`Fachada de ${CMR.nombre}`} style={{ scale: zoom }} />
          </motion.div>
          <motion.div
            className="about-badge"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 140, damping: 15 }}
          >
            <CalendarHeart size={22} />
            <span>
              <strong>
                <AnimatedCounter value={aniosDeServicio} /> años
              </strong>
              desde {CMR.fundacion}
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={texto}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span variants={linea} className="sx-eyebrow">
            Quiénes somos
          </motion.span>
          <motion.h2 variants={linea} className="sx-title">
            {aniosDeServicio} años al servicio de la salud dominicana
          </motion.h2>
          <motion.p variants={linea} className="sx-desc about-desc">
            Somos un hospital privado de alta especialidad que brinda servicios con gran calidad y
            calidez, y un centro formador de profesionales de excelencia para la salud del país.
          </motion.p>

          <motion.div className="valores-mini" variants={texto}>
            {valores.map((v) => {
              const Icon = VAL_ICONS[v.icon as keyof typeof VAL_ICONS]
              return (
                <motion.span key={v.nombre} variants={chip} className="valor-chip">
                  <Icon size={16} />
                  {v.nombre}
                </motion.span>
              )
            })}
          </motion.div>

          <motion.div variants={linea}>
            <button className="btn btn-navy" onClick={() => onNavigate('nosotros')}>
              Conozca nuestra historia
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
