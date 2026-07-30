import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  HeartPulse,
  MapPin,
  Users,
  Clock,
  CalendarDays,
  FlaskConical,
  FileText,
  FileCheck,
  UserRound,
  CalendarPlus,
  ArrowRight,
  Diamond,
} from 'lucide-react'
import RevealText from '../components/RevealText'
import MagneticButton from '../components/MagneticButton'
import AnimatedCounter from '../components/AnimatedCounter'
import LandingSections from './LandingSections'
import { BRAND, heroStats, accesoRapido } from '../data/mockData'
import type { View } from '../App'

const STAT_ICONS = { HeartPulse, MapPin, Users, Clock } as const
const ACCESO_ICONS = { CalendarDays, FlaskConical, FileText, FileCheck } as const

type Props = { onNavigate: (v: View) => void }

export default function Landing({ onNavigate }: Props) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  // Scroll-zoom del hero — Taste Skill
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14])
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="container">
        <div className="hero-grid">
          {/* ── Columna izquierda ─────────────────────────── */}
          <div>
            <RevealText tag="h1">{BRAND.fullName}</RevealText>

            <motion.div
              className="hero-sub"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <i className="dot-green" />
              <span>Conectamos tu salud, simplificamos tu vida</span>
            </motion.div>

            <motion.p
              className="hero-p"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              {BRAND.name} es el ecosistema digital que integra todos los servicios de salud
              para ti en un solo lugar.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <MagneticButton className="btn btn-navy">
                <CalendarPlus size={18} />
                Agendar Cita
              </MagneticButton>
              <MagneticButton
                className="btn btn-ghost"
                onClick={() => onNavigate('dashboard')}
              >
                <UserRound size={18} color="#16A34A" />
                Portal del Paciente
              </MagneticButton>
            </motion.div>

            <div className="hero-stats">
              {heroStats.map((stat) => {
                const Icon = STAT_ICONS[stat.icon as keyof typeof STAT_ICONS]
                return (
                  <div className="stat" key={stat.label}>
                    <span className="stat-icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="stat-value">
                        <AnimatedCounter
                          value={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Columna derecha ───────────────────────────── */}
          <div className="hero-visual">
            <svg className="hero-arcs" viewBox="0 0 300 300" fill="none">
              <circle
                className="arc-spin"
                cx="150"
                cy="150"
                r="132"
                stroke="var(--blue)"
                strokeWidth="2"
                strokeDasharray="120 60"
                strokeLinecap="round"
                opacity="0.6"
              />
              <circle
                className="arc-spin-rev"
                cx="150"
                cy="150"
                r="114"
                stroke="var(--green)"
                strokeWidth="2"
                strokeDasharray="70 110"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>

            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeartPulse size={32} color="#1E5EFF" />
              <p>Tu salud conectada siempre</p>
            </motion.div>

            <motion.div
              className="hero-image-panel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src="/images/hero.jpg"
                alt="Profesional médico del Centro Médico Real"
                style={{ scale: imgScale, y: imgY }}
              />
            </motion.div>
          </div>

          {/* ── Tarjeta Acceso Rápido ─────────────────────── */}
          <motion.div
            className="acceso-card"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="acceso-title">
              <Diamond size={15} color="#1E5EFF" fill="#1E5EFF" />
              Acceso Rápido
            </div>

            {accesoRapido.map((item) => {
              const Icon = ACCESO_ICONS[item.icon as keyof typeof ACCESO_ICONS]
              return (
                <div className="acceso-row" key={item.title}>
                  <div className="icon-tile">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.sub}</p>
                  </div>
                </div>
              )
            })}

            <div className="acceso-link">
              Ver todas las opciones
              <ArrowRight size={14} />
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      <LandingSections />
    </>
  )
}
