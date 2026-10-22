import { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { SectionHead, BandaEmergencia, BloqueUbicacion } from '../../components/SitioUI'
import HeroInicio from './inicio/HeroInicio'
import AccesosRapidos from './inicio/AccesosRapidos'
import EspecialidadesScroll from './inicio/EspecialidadesScroll'
import ServiciosPanel from './inicio/ServiciosPanel'
import NosotrosReveal from './inicio/NosotrosReveal'
import TickerUrgencias from './inicio/TickerUrgencias'
import type { Navegar } from '../../rutas'
import './inicio/inicio.css'

/**
 * Inicio: cada sección tiene su propia forma de moverse para que recorrer la
 * página sea una experiencia y no una lista de bloques estáticos.
 */
export default function Inicio({ onNavigate }: { onNavigate: Navegar }) {
  const { scrollYProgress, scrollY } = useScroll()
  const barra = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  const [subir, setSubir] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setSubir(y > window.innerHeight * 1.2))

  return (
    <div className="home">
      <motion.div className="home-progress" style={{ scaleX: barra }} aria-hidden="true" />

      <HeroInicio onNavigate={onNavigate} />
      <AccesosRapidos onNavigate={onNavigate} />
      <EspecialidadesScroll onNavigate={onNavigate} />
      <ServiciosPanel onNavigate={onNavigate} />
      <NosotrosReveal onNavigate={onNavigate} />

      <TickerUrgencias />
      <BandaEmergencia onComoLlegar={() => onNavigate('emergencias')} />

      <section className="sx sx-mint">
        <div className="container">
          <SectionHead
            center
            eyebrow="Ubicación"
            title="Visítenos en Mirador Norte"
            desc="Estamos en la Av. Rómulo Betancourt, en el corazón de Santo Domingo."
          />
          <motion.div
            className="ubic-reveal"
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <BloqueUbicacion />
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {subir && (
          <motion.button
            className="to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Volver arriba"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -3 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
