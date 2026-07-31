import { useState } from 'react'
import type { FormEvent } from 'react'
import '../gate.css'
import {
  SquareCode,
  Monitor,
  FileText,
  CalendarCheck,
  UserRound,
  Blocks,
  ShieldCheck,
  CircleCheck,
  Loader,
  Circle,
  Lock,
  LockKeyhole,
  Eye,
  EyeOff,
  Headphones,
  TriangleAlert,
} from 'lucide-react'

/**
 * Puerta de acceso al entorno de desarrollo.
 *
 * AVISO: esto es una cortina, no seguridad real. La comprobación ocurre en el
 * navegador, así que el hash viaja en el bundle y alguien con conocimientos
 * puede saltárselo. Sirve para que quien abra el enlace vea que el proyecto
 * está en construcción; para restringir el acceso de verdad hay que usar la
 * protección de despliegue de Vercel (se resuelve en el servidor).
 */

const HASH = '873890384dce6929773c109c9a495dd9ab58beb954ee3e8e0284387fdea5d37c'
const KEY = 'linkxpace-acceso'

const AVANCE = [
  { label: 'Diseño General', estado: 'completado', icon: Monitor },
  { label: 'Contenido', estado: 'completado', icon: FileText },
  { label: 'Portal de Citas', estado: 'completado', icon: CalendarCheck },
  { label: 'Directorio Médico', estado: 'completado', icon: UserRound },
  { label: 'Integraciones', estado: 'proceso', icon: Blocks },
  { label: 'Pruebas', estado: 'pendiente', icon: ShieldCheck },
] as const

const ESTADO = {
  completado: { label: 'COMPLETADO', Icon: CircleCheck },
  proceso: { label: 'EN PROCESO', Icon: Loader },
  pendiente: { label: 'PENDIENTE', Icon: Circle },
} as const

const PIE = [
  { Icon: ShieldCheck, title: 'ENTORNO SEGURO', sub: 'Acceso restringido y monitoreado' },
  { Icon: Lock, title: 'INFORMACIÓN CONFIDENCIAL', sub: 'Este entorno es privado y confidencial' },
  { Icon: Headphones, title: 'SOPORTE TÉCNICO', sub: 'Soporte dedicado al proyecto' },
]

async function sha256(text: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export default function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [clave, setClave] = useState('')
  const [visible, setVisible] = useState(false)
  const [recordar, setRecordar] = useState(true)
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  const enviar = async (e: FormEvent) => {
    e.preventDefault()
    if (!clave || cargando) return

    setCargando(true)
    setError('')

    try {
      if (!crypto?.subtle) throw new Error('sin-crypto')
      const ok = (await sha256(clave)) === HASH

      if (!ok) {
        setError('Contraseña incorrecta. Verifica e intenta de nuevo.')
        setClave('')
        return
      }

      sessionStorage.setItem(KEY, '1')
      if (recordar) localStorage.setItem(KEY, '1')
      onUnlock()
    } catch {
      setError('No se pudo validar el acceso en este navegador.')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="gate">
      <div className="gate-bg" aria-hidden="true">
        <img src="/images/edificio.jpg" alt="" />
      </div>

      <div className="gate-body">
        <div className="gate-grid">
          {/* ── Columna del proyecto ─────────────────────── */}
          <div className="gate-left">
            <img className="gate-linkdicom" src="/images/linkdicom.png" alt="LINKDICOM" />

            <p className="gate-eyebrow">Proyecto</p>
            <h1 className="gate-title">
              LINKX<span>PACE</span> Connect
            </h1>
            <p className="gate-lead">
              Renovación Web e Integraciones de Servicios del
              <strong> Centro Médico Real</strong>
            </p>

            <div className="gate-note">
              <span className="gate-note-icon">
                <SquareCode size={22} />
              </span>
              <p>
                Este sitio web se encuentra en etapa de desarrollo. Para visualizar el
                desarrollo del mismo ingrese la contraseña de desarrollo.
              </p>
            </div>

            <div className="gate-progress-card">
              <div className="gate-progress-head">
                <h2>ESTADO DEL PROYECTO</h2>
                <span className="gate-pct">52%</span>
              </div>

              <div className="gate-bar">
                <div className="gate-bar-fill" style={{ width: '52%' }} />
              </div>

              <ul className="gate-tasks">
                {AVANCE.map((t) => {
                  const { label, Icon } = ESTADO[t.estado]
                  return (
                    <li key={t.label}>
                      <t.icon size={17} className="gate-task-icon" />
                      <span className="gate-task-label">{t.label}</span>
                      <span className={`gate-task-estado ${t.estado}`}>
                        <Icon size={15} />
                        {label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* ── Tarjeta de acceso ────────────────────────── */}
          <form className="gate-card" onSubmit={enviar}>
            <img className="gate-cmr" src="/images/logo.png" alt="Centro Médico Real" />
            <p className="gate-cmr-claim">Tu salud, nuestro compromiso</p>

            <div className="gate-divider" />

            <h2 className="gate-access">ACCESO EXCLUSIVO</h2>
            <p className="gate-env">ENTORNO DE DESARROLLO</p>

            <label className="gate-field" htmlFor="clave">
              <span className="gate-field-head">
                <LockKeyhole size={17} />
                Contraseña
              </span>
              <span className="gate-input">
                <input
                  id="clave"
                  type={visible ? 'text' : 'password'}
                  value={clave}
                  autoFocus
                  autoComplete="current-password"
                  placeholder="Ingrese su contraseña"
                  onChange={(e) => {
                    setClave(e.target.value)
                    if (error) setError('')
                  }}
                />
                <button
                  type="button"
                  className="gate-eye"
                  onClick={() => setVisible((v) => !v)}
                  aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {visible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>

            {error && (
              <p className="gate-error" role="alert">
                <TriangleAlert size={16} />
                {error}
              </p>
            )}

            <button
              type="button"
              className={`gate-check${recordar ? ' on' : ''}`}
              onClick={() => setRecordar((v) => !v)}
              role="checkbox"
              aria-checked={recordar}
            >
              <span className="gate-check-box">{recordar && <CircleCheck size={14} />}</span>
              Recordar mis credenciales
            </button>

            <button type="submit" className="gate-submit" disabled={cargando}>
              <Lock size={17} />
              {cargando ? 'VALIDANDO...' : 'INICIAR SESIÓN'}
            </button>

            <div className="gate-or">
              <span>o</span>
            </div>

            <p className="gate-help">
              ¿Necesitas acceso? Contacta al administrador del proyecto.
            </p>

            <div className="gate-by">
              <span>Desarrollado por</span>
              <img src="/images/linkdicom.png" alt="LINKDICOM" />
            </div>
          </form>
        </div>
      </div>

      <div className="gate-strip">
        <div className="container">
          {PIE.map(({ Icon, title, sub }) => (
            <div className="gate-strip-item" key={title}>
              <Icon size={22} />
              <div>
                <h4>{title}</h4>
                <p>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="gate-foot">
        © 2026 LINKDICOM, S.R.L. · Proyecto <strong>LINKXPACE Connect</strong>
      </footer>
    </div>
  )
}

/** Deja pasar si ya se validó antes en esta sesión o quedó recordado */
export function accesoConcedido() {
  try {
    return localStorage.getItem(KEY) === '1' || sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}
