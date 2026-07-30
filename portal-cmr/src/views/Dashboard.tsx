import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  CalendarDays,
  FlaskConical,
  Wallet,
  Mail,
  ArrowRight,
  Stethoscope,
  ScanLine,
  HeartPulse,
  Syringe,
  BriefcaseMedical,
  Building2,
  Users,
  Receipt,
  Package,
  MessageCircle,
  Phone,
  PhoneCall,
  CircleCheck,
  MoreVertical,
  Send,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import {
  BRAND,
  resumenSalud,
  serviciosDestacados,
  integracionSistemas,
  canalesAtencion,
  chatQuickReplies,
  chatMessage,
} from '../data/mockData'
import type { View } from '../App'

const ICONS = {
  CalendarDays,
  FlaskConical,
  Wallet,
  Mail,
  Stethoscope,
  ScanLine,
  HeartPulse,
  Syringe,
  BriefcaseMedical,
  Building2,
  Users,
  Receipt,
  Package,
  MessageCircle,
  Phone,
  PhoneCall,
} as const

type IconName = keyof typeof ICONS

/** Fade-up sutil al entrar en viewport. Sin lifts dramáticos. */
function Rise({ children, i = 0 }: { children: ReactNode; i?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

type Props = { onNavigate: (v: View) => void }

export default function Dashboard({ onNavigate }: Props) {
  return (
    <div className="portal">
      <div className="container">
        <div className="portal-grid">
          <Sidebar view="dashboard" onNavigate={onNavigate} />

          {/* ── Columna principal ─────────────────────────── */}
          <div className="portal-main">
            {/* A. Tu Resumen de Salud */}
            <section>
              <div className="section-head">
                <h2 className="section-title">Tu Resumen de Salud</h2>
                <button className="link-blue">
                  Ver todo <ArrowRight size={14} />
                </button>
              </div>

              <div className="resumen-grid">
                {resumenSalud.map((card, i) => {
                  const Icon = ICONS[card.icon as IconName]
                  return (
                    <Rise key={card.key} i={i}>
                      <div className={`resumen-card ${card.tone}`} style={{ height: '100%' }}>
                        <div className="resumen-top">
                          <div className="resumen-tile">
                            <Icon size={20} />
                          </div>
                          <div className="resumen-label">{card.label}</div>
                        </div>

                        <div className="resumen-body">
                          {card.lines ? (
                            card.lines.map((line, li) => (
                              <div className={li === 0 ? 'l0' : 'l'} key={line}>
                                {line}
                              </div>
                            ))
                          ) : (
                            <>
                              <div
                                className={`resumen-big${
                                  card.key === 'balance' ? ' money' : ''
                                }`}
                              >
                                {card.big}
                              </div>
                              <div className="l">{card.sub}</div>
                            </>
                          )}
                        </div>

                        <button
                          className="resumen-btn"
                          onClick={() =>
                            card.key === 'resultados' ? onNavigate('resultados') : undefined
                          }
                        >
                          {card.cta}
                        </button>
                      </div>
                    </Rise>
                  )
                })}
              </div>
            </section>

            {/* B. Servicios Destacados */}
            <section>
              <div className="section-head">
                <h2 className="section-title">Servicios Destacados</h2>
              </div>

              <div className="servicios-grid">
                {serviciosDestacados.map((s, i) => {
                  const Icon = ICONS[s.icon as IconName]
                  return (
                    <Rise key={s.label} i={i}>
                      <div className="servicio-card" style={{ height: '100%' }}>
                        <div className="icon-tile">
                          <Icon size={18} />
                        </div>
                        <h4>{s.label}</h4>
                        <div className="servicio-more">
                          Ver más <ArrowRight size={13} />
                        </div>
                      </div>
                    </Rise>
                  )
                })}
              </div>
            </section>

            {/* C. Integración + Canales */}
            <div className="two-col">
              <Rise>
                <div className="card card-pad" style={{ height: '100%' }}>
                  <h3 className="block-title">Integración de Sistemas</h3>
                  <p className="block-p">
                    Conectamos todos nuestros sistemas para brindarte una experiencia ágil,
                    segura y completa.
                  </p>
                  <div className="tile-row">
                    {integracionSistemas.map((t) => {
                      const Icon = ICONS[t.icon as IconName]
                      return (
                        <div className="tile" key={t.label}>
                          <div className="tile-box">
                            <Icon size={19} />
                          </div>
                          <h5>{t.label}</h5>
                          <p>{t.sub}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Rise>

              <Rise i={1}>
                <div className="card card-pad" style={{ height: '100%' }}>
                  <h3 className="block-title">Canales de Atención</h3>
                  <p className="block-p">
                    Estamos disponibles para ti en cualquier momento.
                  </p>
                  <div className="tile-row four">
                    {canalesAtencion.map((t) => {
                      const Icon = ICONS[t.icon as IconName]
                      return (
                        <div className="tile" key={t.label}>
                          <div className="tile-box green">
                            <Icon size={19} />
                          </div>
                          <h5>{t.label}</h5>
                          <p>{t.sub}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Rise>
            </div>
          </div>

          {/* ── Rail derecho ──────────────────────────────── */}
          <div className="portal-rail">
            <Rise>
              <div className="center-card">
                <div className="center-card-head">
                  <h4>{BRAND.fullName}</h4>
                  <p>Cuidamos de ti y tu familia</p>
                </div>
                <div className="center-img">
                  <img src="/images/edificio.jpg" alt={`Fachada de ${BRAND.fullName}`} />
                </div>
                <div className="status-strip">
                  <CircleCheck size={20} color="#16A34A" />
                  <div style={{ flex: 1 }}>
                    <h5>Estado del Sistema</h5>
                    <p>Todos los sistemas operativos</p>
                  </div>
                  <ArrowRight size={16} color="#64748B" />
                </div>
              </div>
            </Rise>

            <Rise i={1}>
              <div className="chat-card">
                <div className="chat-head">
                  <div>
                    <h4>Chat en Línea</h4>
                    <div className="chat-online">
                      <i className="pulse-dot" />
                      En línea
                    </div>
                  </div>
                  <MoreVertical size={18} />
                </div>

                <div className="chat-body">
                  <div className="chat-msg">
                    <img className="chat-avatar" src="/images/avatar.jpg" alt="" />
                    <div>
                      <div className="chat-bubble">{chatMessage.text}</div>
                      <div className="chat-time">{chatMessage.time}</div>
                    </div>
                  </div>

                  <div className="chat-chips">
                    {chatQuickReplies.map((c) => (
                      <button className="chip" key={c}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="chat-input">
                  <input placeholder="Escribe tu mensaje..." readOnly />
                  <button className="send-btn" aria-label="Enviar">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </Rise>
          </div>
        </div>
      </div>
    </div>
  )
}
