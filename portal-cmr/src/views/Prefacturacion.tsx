import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  ChevronRight,
  ShieldCheck,
  Clock,
  UserRound,
  ChevronDown,
  Calendar,
  ArrowRight,
  CalendarCheck,
  Stethoscope,
  FileText,
  CircleCheck,
  LifeBuoy,
  MessageCircle,
  Phone,
  PhoneCall,
  Zap,
  Rocket,
  Sparkles,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import {
  prefacturacionSteps,
  prefacturacionResumen,
  formValues,
  beneficios,
} from '../data/mockData'
import { CMR } from '../data/institucion'
import type { View } from '../App'

const STEP_ICONS = {
  UserRound,
  ShieldCheck,
  Stethoscope,
  FileText,
  CircleCheck,
} as const

const BENEFIT_ICONS = { Zap, Rocket, ShieldCheck, Sparkles } as const

function Rise({ children, i = 0 }: { children: ReactNode; i?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

type Props = { onNavigate: (v: View) => void }

export default function Prefacturacion({ onNavigate }: Props) {
  const [toast, setToast] = useState(false)

  const showToast = () => {
    setToast(true)
    window.setTimeout(() => setToast(false), 1800)
  }

  return (
    <div className="portal">
      <div className="container">
        <div className="portal-grid no-rail">
          <Sidebar view="prefacturacion" onNavigate={onNavigate} />

          <div className="prefac-content">
            <div className="view-head">
              <div>
                <div className="breadcrumb">
                  <span className="b0">Prefacturación</span>
                  <ChevronRight size={14} />
                  <span>Nuevo Proceso</span>
                </div>
                <h1 className="view-title">Proceso de Prefacturación</h1>
                <div className="view-sub">
                  <ShieldCheck size={17} color="#1E5EFF" />
                  Completa la información requerida antes de tu visita para agilizar tu
                  atención
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Clock size={17} />
                </div>
                <div>
                  <h5>¿Por qué prefacturar?</h5>
                  <p>
                    Ahorra tiempo en tu visita, evita filas y asegura que tengamos toda tu
                    información.
                  </p>
                </div>
              </div>
            </div>

            {/* Stepper */}
            <Rise>
              <div className="card stepper">
                {prefacturacionSteps.map((step, i) => (
                  <div key={step.n} style={{ display: 'contents' }}>
                    <div className={`step${step.n === 1 ? ' active' : ''}`}>
                      <div className="step-circle">{step.n}</div>
                      <div>
                        <h5>{step.title}</h5>
                        <p>{step.sub}</p>
                      </div>
                    </div>
                    {i < prefacturacionSteps.length - 1 && <div className="step-line" />}
                  </div>
                ))}
              </div>
            </Rise>

            {/* Formulario + rail lateral */}
            <div className="prefac-split">
              <Rise i={1}>
                <div className="card card-pad">
                <div className="form-head">
                  <div className="form-head-icon">
                    <UserRound size={20} />
                  </div>
                  <div>
                    <h3>Información Personal</h3>
                    <p>Actualiza tus datos personales para continuar</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label>Nombres</label>
                    <div className="control">
                      <input defaultValue={formValues.nombres} />
                    </div>
                  </div>

                  <div className="field">
                    <label>Apellidos</label>
                    <div className="control">
                      <input defaultValue={formValues.apellidos} />
                    </div>
                  </div>

                  <div className="field">
                    <label>Tipo de Documento</label>
                    <div className="control">
                      <select defaultValue={formValues.tipoDocumento}>
                        <option>{formValues.tipoDocumento}</option>
                        <option>Pasaporte</option>
                      </select>
                      <span className="adorn">
                        <ChevronDown size={17} />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label>Número de Documento</label>
                    <div className="control">
                      <input defaultValue={formValues.numeroDocumento} />
                    </div>
                  </div>

                  <div className="field">
                    <label>Fecha de Nacimiento</label>
                    <div className="control">
                      <input defaultValue={formValues.fechaNacimiento} />
                      <span className="adorn">
                        <Calendar size={17} />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label>Género</label>
                    <div className="control">
                      <select defaultValue={formValues.genero}>
                        <option>{formValues.genero}</option>
                        <option>Femenino</option>
                      </select>
                      <span className="adorn">
                        <ChevronDown size={17} />
                      </span>
                    </div>
                  </div>

                  <div className="field with-flag">
                    <label>Teléfono Móvil</label>
                    <div className="control">
                      <span className="flag-prefix">
                        <svg className="flag-do" viewBox="0 0 20 14">
                          <rect width="20" height="14" fill="#CE1126" />
                          <rect width="9" height="6" fill="#002D62" />
                          <rect x="11" y="8" width="9" height="6" fill="#002D62" />
                          <rect x="9" width="2" height="14" fill="#fff" />
                          <rect y="6" width="20" height="2" fill="#fff" />
                        </svg>
                        <ChevronDown size={13} />
                      </span>
                      <input defaultValue={formValues.telefono} />
                    </div>
                  </div>

                  <div className="field">
                    <label>Correo Electrónico</label>
                    <div className="control">
                      <input defaultValue={formValues.correo} />
                    </div>
                  </div>

                  <div className="field full">
                    <label>Dirección</label>
                    <div className="control">
                      <input defaultValue={formValues.direccion} />
                    </div>
                  </div>
                </div>

                <div className="form-foot">
                  <div className="secure-strip">
                    <ShieldCheck size={20} />
                    <div>
                      <h5>Tu información está protegida</h5>
                      <p>
                        Utilizamos encriptación de nivel bancario para proteger tus datos
                        personales.
                      </p>
                    </div>
                  </div>

                  <button className="btn btn-navy" onClick={showToast}>
                    Guardar y Continuar
                    <ArrowRight size={16} />
                  </button>
                </div>
                </div>
              </Rise>

              {/* ── Rail derecho ────────────────────────────── */}
              <div className="portal-rail">
            <Rise>
              <div className="card card-pad">
                <h3 className="section-title" style={{ fontSize: 18, marginBottom: 14 }}>
                  <CalendarCheck size={19} color="#1E5EFF" />
                  Resumen de Prefacturación
                </h3>

                {prefacturacionResumen.map((row, i) => {
                  const Icon = STEP_ICONS[
                    prefacturacionSteps[i].icon as keyof typeof STEP_ICONS
                  ]
                  const isCurrent = row.state === 'En progreso'
                  return (
                    <div
                      className={`resumen-row${isCurrent ? ' current' : ''}`}
                      key={row.title}
                    >
                      <div className="r-icon">
                        <Icon size={16} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5>{row.title}</h5>
                        <p>{row.sub}</p>
                      </div>
                      <span className={`pill ${isCurrent ? 'blue' : 'grey'}`}>
                        {row.state}
                      </span>
                    </div>
                  )
                })}
              </div>
            </Rise>

            <Rise i={1}>
              <div className="card card-pad">
                <h3 className="section-title" style={{ fontSize: 18 }}>
                  <LifeBuoy size={19} color="#1E5EFF" />
                  ¿Necesitas ayuda?
                </h3>
                <p className="block-p">Nuestro equipo está disponible para asistirte</p>

                <div className="help-tiles">
                  <div className="help-tile">
                    <MessageCircle size={19} color="#16A34A" />
                    <h5>Chat en Línea</h5>
                    <p>Atención inmediata</p>
                  </div>
                  <div className="help-tile">
                    <Phone size={19} color="#16A34A" />
                    <h5>WhatsApp</h5>
                    <p>{CMR.telefono}</p>
                  </div>
                  <div className="help-tile">
                    <PhoneCall size={19} color="#1E5EFF" />
                    <h5>Llamada</h5>
                    <p>{CMR.telefono}</p>
                  </div>
                </div>
              </div>
            </Rise>
              </div>
            </div>

            {/* Franja de beneficios */}
            <Rise i={2}>
              <div className="card card-pad">
                <div className="benefit-strip">
                  {beneficios.map((b) => {
                    const Icon = BENEFIT_ICONS[b.icon as keyof typeof BENEFIT_ICONS]
                    return (
                      <div className="benefit" key={b.title}>
                        <div className={`benefit-icon ${b.tone}`}>
                          <Icon size={21} />
                        </div>
                        <div>
                          <h5>{b.title}</h5>
                          <p>{b.sub}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Rise>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            transition={{ duration: 0.3 }}
          >
            <CircleCheck size={17} color="#4ADE80" />
            Guardado
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
