import {
  Stethoscope,
  FlaskConical,
  ScanLine,
  HeartPulse,
  Syringe,
  BriefcaseMedical,
  Ambulance,
  Video,
  Baby,
  Flower2,
  Bone,
  Brain,
  Sparkles,
  Eye,
  Activity,
  Wind,
  Droplet,
  UserRound,
  Cpu,
  FileText,
  ShieldCheck,
  Accessibility,
  Star,
  ArrowRight,
  ChevronDown,
  CalendarPlus,
  Clock,
  PhoneCall,
  Phone,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import Rise from '../components/Rise'
import {
  serviciosLanding,
  especialidades,
  medicos,
  centroFeatures,
  horarios,
  contactoInfo,
  BRAND,
} from '../data/mockData'

const ICONS = {
  Stethoscope,
  FlaskConical,
  ScanLine,
  HeartPulse,
  Syringe,
  BriefcaseMedical,
  Ambulance,
  Video,
  Baby,
  Flower2,
  Bone,
  Brain,
  Sparkles,
  Eye,
  Activity,
  Wind,
  Droplet,
  UserRound,
  Cpu,
  FileText,
  ShieldCheck,
  Accessibility,
  PhoneCall,
  Phone,
  Mail,
  MapPin,
} as const

type IconName = keyof typeof ICONS

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string
  title: string
  desc: string
}) {
  return (
    <div className="sec-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default function LandingSections() {
  return (
    <>
      {/* ── SERVICIOS ──────────────────────────────────────── */}
      <section id="servicios" className="sec">
        <div className="container">
          <SectionHead
            eyebrow="Servicios"
            title="Todo lo que necesitas, en un solo lugar"
            desc="Integramos consulta, diagnóstico y seguimiento para que no tengas que ir de un sitio a otro."
          />

          <div className="sec-grid four">
            {serviciosLanding.map((s, i) => {
              const Icon = ICONS[s.icon as IconName]
              return (
                <Rise key={s.titulo} i={i % 4}>
                  <div className="feature-card">
                    <div className="icon-tile lg">
                      <Icon size={22} />
                    </div>
                    <h3>{s.titulo}</h3>
                    <p>{s.desc}</p>
                    <span className="link-blue">
                      Ver más <ArrowRight size={13} />
                    </span>
                  </div>
                </Rise>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ─────────────────────────────────── */}
      <section id="especialidades" className="sec alt">
        <div className="container">
          <SectionHead
            eyebrow="Especialidades"
            title="Más de 15 especialidades médicas"
            desc="Un cuadro médico completo para acompañarte en cada etapa de tu salud."
          />

          <div className="sec-grid six">
            {especialidades.map((e, i) => {
              const Icon = ICONS[e.icon as IconName]
              return (
                <Rise key={e.nombre} i={i % 6}>
                  <div className="esp-card">
                    <div className="icon-tile">
                      <Icon size={19} />
                    </div>
                    <h4>{e.nombre}</h4>
                    <p>{e.medicos} especialistas</p>
                  </div>
                </Rise>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── MÉDICOS ────────────────────────────────────────── */}
      <section id="medicos" className="sec">
        <div className="container">
          <SectionHead
            eyebrow="Cuadro médico"
            title="Conoce a nuestros especialistas"
            desc="Profesionales certificados con años de experiencia y atención cercana."
          />

          <div className="sec-grid three">
            {medicos.map((m, i) => (
              <Rise key={m.nombre} i={i % 3}>
                <div className="medico-card">
                  <div className="medico-top">
                    <span className="avatar-initials lg">{m.iniciales}</span>
                    <div>
                      <h4>{m.nombre}</h4>
                      <p className="medico-esp">{m.especialidad}</p>
                      <span className="rating">
                        <Star size={13} fill="#F59E0B" color="#F59E0B" />
                        {m.rating}
                      </span>
                    </div>
                  </div>

                  <div className="medico-meta">
                    <span>
                      <BriefcaseMedical size={14} /> {m.exp}
                    </span>
                    <span>
                      <Clock size={14} /> {m.disponible}
                    </span>
                  </div>

                  <button className="btn btn-ghost" style={{ width: '100%' }}>
                    <CalendarPlus size={16} />
                    Agendar cita
                  </button>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENTRO MÉDICO ──────────────────────────────────── */}
      <section id="centro" className="sec alt">
        <div className="container">
          <div className="centro-split">
            <div>
              <SectionHead
                eyebrow="El centro"
                title={`Sobre ${BRAND.fullName}`}
                desc="Un centro médico pensado para que la atención sea rápida, clara y humana. Desde que reservas tu cita hasta que recibes tu informe, todo ocurre en un mismo sistema."
              />

              <div className="centro-features">
                {centroFeatures.map((f, i) => {
                  const Icon = ICONS[f.icon as IconName]
                  return (
                    <Rise key={f.titulo} i={i}>
                      <div className="list-row">
                        <div className="icon-tile green">
                          <Icon size={18} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h5>{f.titulo}</h5>
                          <p>{f.desc}</p>
                        </div>
                      </div>
                    </Rise>
                  )
                })}
              </div>
            </div>

            <Rise>
              <div className="centro-aside">
                <div className="centro-img">
                  <img src="/images/edificio.jpg" alt={`Fachada de ${BRAND.fullName}`} />
                </div>
                <div className="card card-pad">
                  <h3 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
                    <Clock size={19} color="#1E5EFF" />
                    Horarios de atención
                  </h3>
                  <dl className="data-list">
                    {horarios.map((h) => (
                      <div key={h.dia} style={{ display: 'contents' }}>
                        <dt>{h.dia}</dt>
                        <dd>{h.hora}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ───────────────────────────────────────── */}
      <section id="contacto" className="sec">
        <div className="container">
          <SectionHead
            eyebrow="Contacto"
            title="¿Hablamos?"
            desc="Escríbenos y te respondemos el mismo día. También puedes llamarnos o pasar por el centro."
          />

          <div className="contacto-split">
            <Rise>
              <div className="card card-pad">
                <div className="form-grid">
                  <div className="field">
                    <label>Nombre</label>
                    <div className="control">
                      <input placeholder="Tu nombre completo" readOnly />
                    </div>
                  </div>
                  <div className="field">
                    <label>Teléfono</label>
                    <div className="control">
                      <input placeholder="(809) 000-0000" readOnly />
                    </div>
                  </div>
                  <div className="field full">
                    <label>Correo electrónico</label>
                    <div className="control">
                      <input placeholder="tucorreo@email.com" readOnly />
                    </div>
                  </div>
                  <div className="field full">
                    <label>Motivo</label>
                    <div className="control">
                      <select defaultValue="Agendar una cita">
                        <option>Agendar una cita</option>
                        <option>Información de servicios</option>
                        <option>Facturación y seguros</option>
                        <option>Otro</option>
                      </select>
                      <span className="adorn">
                        <ChevronDown size={17} />
                      </span>
                    </div>
                  </div>
                  <div className="field full">
                    <label>Mensaje</label>
                    <div className="control">
                      <textarea placeholder="Cuéntanos en qué podemos ayudarte..." readOnly />
                    </div>
                  </div>
                </div>

                <div className="form-foot">
                  <span className="cell-mute">Te respondemos en menos de 24 horas.</span>
                  <button className="btn btn-green">
                    <Send size={16} />
                    Enviar mensaje
                  </button>
                </div>
              </div>
            </Rise>

            <div className="contacto-info">
              {contactoInfo.map((c, i) => {
                const Icon = ICONS[c.icon as IconName]
                return (
                  <Rise key={c.label} i={i}>
                    <div className="card card-pad contacto-card">
                      <div className="icon-tile">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="mini-kpi-label">{c.label}</p>
                        <p className="contacto-value">{c.value}</p>
                        <p className="cell-mute">{c.sub}</p>
                      </div>
                    </div>
                  </Rise>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
