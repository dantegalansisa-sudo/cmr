import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Siren, FlaskConical, Stethoscope, Navigation, ArrowRight, ArrowUpRight } from 'lucide-react'
import { CMR } from '../../../data/institucion'
import { totalMedicos } from '../../../data/especialidades'
import type { Navegar } from '../../../rutas'

const contenedor: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

// Entran desde abajo con un leve giro y se asientan con un rebote
const tarjeta: Variants = {
  oculto: { opacity: 0, y: 60, rotate: -3, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 110, damping: 13 },
  },
}

const alPasar = { y: -8, transition: { type: 'spring' as const, stiffness: 300, damping: 18 } }

export default function AccesosRapidos({ onNavigate }: { onNavigate: Navegar }) {
  return (
    <section className="quick">
      <motion.div
        className="container quick-grid"
        variants={contenedor}
        initial="oculto"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.button variants={tarjeta} whileHover={alPasar} className="quick-card q-rojo" onClick={() => onNavigate('emergencias')}>
          <Siren size={26} />
          <strong>Emergencias</strong>
          <span>Adultos y pediátricas, 24 horas</span>
          <ArrowRight size={18} className="quick-arrow" />
        </motion.button>

        <motion.a
          variants={tarjeta}
          whileHover={alPasar}
          className="quick-card q-lima"
          href={CMR.resultadosUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FlaskConical size={26} />
          <strong>Resultados en línea</strong>
          <span>Consulte sus análisis desde casa</span>
          <ArrowUpRight size={18} className="quick-arrow" />
        </motion.a>

        <motion.button variants={tarjeta} whileHover={alPasar} className="quick-card q-azul" onClick={() => onNavigate('especialistas')}>
          <Stethoscope size={26} />
          <strong>Encuentre su médico</strong>
          <span>{totalMedicos} especialistas, con consultorio y teléfono</span>
          <ArrowRight size={18} className="quick-arrow" />
        </motion.button>

        <motion.a
          variants={tarjeta}
          whileHover={alPasar}
          className="quick-card q-teal"
          href={CMR.mapaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation size={26} />
          <strong>Cómo llegar</strong>
          <span>
            {CMR.direccion}, {CMR.sector}
          </span>
          <ArrowUpRight size={18} className="quick-arrow" />
        </motion.a>
      </motion.div>
    </section>
  )
}
