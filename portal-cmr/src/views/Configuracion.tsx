import { useState } from 'react'
import {
  Settings,
  UserRound,
  Lock,
  Bell,
  Globe,
  Monitor,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  LogOut,
  KeyRound,
  Smartphone,
} from 'lucide-react'
import PortalPage from '../components/PortalPage'
import Rise from '../components/Rise'
import { formValues, notificaciones, sesiones } from '../data/mockData'
import type { View } from '../App'

/** Interruptor visual. No persiste nada — es una demo. */
function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      className={`toggle${on ? ' on' : ''}`}
      onClick={onToggle}
      role="switch"
      aria-checked={on}
    >
      <span className="toggle-knob" />
    </button>
  )
}

type Props = { onNavigate: (v: View) => void }

export default function Configuracion({ onNavigate }: Props) {
  const [notis, setNotis] = useState(notificaciones.map((n) => n.activo))
  const [dosFactores, setDosFactores] = useState(true)

  const toggleNoti = (i: number) =>
    setNotis((prev) => prev.map((v, idx) => (idx === i ? !v : v)))

  const rail = (
    <>
      <Rise>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
            <Monitor size={19} color="#1E5EFF" />
            Sesiones activas
          </h3>
          {sesiones.map((s) => (
            <div className="list-row" key={s.equipo}>
              <div className={`icon-tile${s.actual ? ' green' : ''}`}>
                {s.equipo.includes('iPhone') ? (
                  <Smartphone size={17} />
                ) : (
                  <Monitor size={17} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <h5>{s.equipo}</h5>
                <p>
                  {s.lugar} · {s.cuando}
                </p>
              </div>
              {s.actual ? (
                <span className="pill green">Actual</span>
              ) : (
                <button className="action-btn">Cerrar</button>
              )}
            </div>
          ))}
          <button className="btn-outline" style={{ width: '100%', marginTop: 12 }}>
            <LogOut size={15} />
            Cerrar todas las demás
          </button>
        </div>
      </Rise>

      <Rise i={1}>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 10 }}>
            <Globe size={19} color="#16A34A" />
            Preferencias
          </h3>
          <div className="field" style={{ marginBottom: 14 }}>
            <label>Idioma</label>
            <div className="control">
              <select defaultValue="Español">
                <option>Español</option>
                <option>English</option>
              </select>
              <span className="adorn">
                <ChevronDown size={17} />
              </span>
            </div>
          </div>
          <div className="field">
            <label>Zona horaria</label>
            <div className="control">
              <select defaultValue="(GMT-4) Santo Domingo">
                <option>(GMT-4) Santo Domingo</option>
                <option>(GMT-5) Nueva York</option>
              </select>
              <span className="adorn">
                <ChevronDown size={17} />
              </span>
            </div>
          </div>
        </div>
      </Rise>
    </>
  )

  return (
    <PortalPage
      view="configuracion"
      onNavigate={onNavigate}
      crumbs={['Configuración', 'Mi Cuenta']}
      title="Configuración"
      subtitle="Administra tus datos, tu seguridad y cómo quieres que te contactemos."
      subtitleIcon={Settings}
      info={{
        title: 'Tu cuenta está protegida',
        text: 'Tienes la verificación en dos pasos activada. Es la configuración recomendada.',
        icon: ShieldCheck,
      }}
      rail={rail}
    >
      {/* Datos personales */}
      <Rise>
        <div className="card card-pad">
          <div className="form-head">
            <div className="form-head-icon">
              <UserRound size={20} />
            </div>
            <div>
              <h3>Datos personales</h3>
              <p>Esta información aparece en tus documentos y facturas</p>
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
              <label>Correo Electrónico</label>
              <div className="control">
                <input defaultValue={formValues.correo} />
              </div>
            </div>
            <div className="field">
              <label>Teléfono Móvil</label>
              <div className="control">
                <input defaultValue={formValues.telefono} />
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
            <span className="cell-mute">Última actualización: 18 Abril 2024</span>
            <button className="btn btn-navy">Guardar cambios</button>
          </div>
        </div>
      </Rise>

      {/* Seguridad */}
      <Rise i={1}>
        <div className="card card-pad">
          <div className="form-head">
            <div className="form-head-icon">
              <Lock size={20} />
            </div>
            <div>
              <h3>Seguridad</h3>
              <p>Protege el acceso a tu información clínica</p>
            </div>
          </div>

          <button className="config-row link">
            <div className="icon-tile">
              <KeyRound size={17} />
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h5>Cambiar contraseña</h5>
              <p>Última vez: hace 3 meses</p>
            </div>
            <ChevronRight size={17} color="#64748B" />
          </button>

          <div className="config-row">
            <div className="icon-tile green">
              <ShieldCheck size={17} />
            </div>
            <div style={{ flex: 1 }}>
              <h5>Verificación en dos pasos</h5>
              <p>Código por SMS al (809) 123-4567</p>
            </div>
            <Toggle on={dosFactores} onToggle={() => setDosFactores((v) => !v)} />
          </div>
        </div>
      </Rise>

      {/* Notificaciones */}
      <Rise i={2}>
        <div className="card card-pad">
          <div className="form-head">
            <div className="form-head-icon">
              <Bell size={20} />
            </div>
            <div>
              <h3>Notificaciones</h3>
              <p>Elige sobre qué quieres que te avisemos</p>
            </div>
          </div>

          {notificaciones.map((n, i) => (
            <div className="config-row" key={n.label}>
              <div style={{ flex: 1 }}>
                <h5>{n.label}</h5>
                <p>{n.sub}</p>
              </div>
              <Toggle on={notis[i]} onToggle={() => toggleNoti(i)} />
            </div>
          ))}
        </div>
      </Rise>
    </PortalPage>
  )
}
