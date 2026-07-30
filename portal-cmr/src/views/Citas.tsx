import { useState } from 'react'
import {
  CalendarDays,
  Clock,
  MapPin,
  Video,
  Building2,
  CalendarPlus,
  ArrowRight,
  ChevronDown,
  BellRing,
  CircleCheck,
  CircleAlert,
  CircleX,
} from 'lucide-react'
import PortalPage from '../components/PortalPage'
import Rise from '../components/Rise'
import { citas, disponibilidad } from '../data/mockData'
import type { Cita } from '../data/mockData'
import type { View } from '../App'

const TABS = [
  { key: 'proximas', label: 'Próximas' },
  { key: 'pasadas', label: 'Pasadas' },
  { key: 'canceladas', label: 'Canceladas' },
] as const

const ESTADO = {
  confirmada: { label: 'Confirmada', cls: 'ok', Icon: CircleCheck },
  pendiente: { label: 'Por confirmar', cls: 'warn', Icon: CircleAlert },
  completada: { label: 'Completada', cls: 'neutral', Icon: CircleCheck },
  cancelada: { label: 'Cancelada', cls: 'danger', Icon: CircleX },
} as const

function CitaCard({ cita }: { cita: Cita }) {
  const [dia, mes] = cita.fecha.split(' ')
  const { label, cls, Icon } = ESTADO[cita.estado]

  return (
    <div className={`cita-card${cita.estado === 'cancelada' ? ' muted' : ''}`}>
      <div className="cita-date">
        <span className="d">{dia}</span>
        <span className="m">{mes}</span>
      </div>

      <div className="cita-body">
        <h4>{cita.especialidad}</h4>
        <p className="cita-medico">{cita.medico}</p>
        <div className="cita-meta">
          <span>
            <Clock size={14} /> {cita.hora}
          </span>
          <span>
            {cita.modalidad === 'Virtual' ? <Video size={14} /> : <Building2 size={14} />}{' '}
            {cita.lugar}
          </span>
          <span>
            <MapPin size={14} /> {cita.consultorio}
          </span>
        </div>
      </div>

      <div className="cita-side">
        <span className={`status-pill ${cls}`}>
          <Icon size={13} />
          {label}
        </span>
        <div className="actions">
          <button className="action-btn">Ver detalles</button>
          {cita.grupo === 'proximas' && <button className="action-btn">Reagendar</button>}
        </div>
      </div>
    </div>
  )
}

type Props = { onNavigate: (v: View) => void }

export default function Citas({ onNavigate }: Props) {
  const [tab, setTab] = useState<(typeof TABS)[number]['key']>('proximas')
  const visibles = citas.filter((c) => c.grupo === tab)

  const rail = (
    <>
      <Rise>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 6 }}>
            <CalendarPlus size={19} color="#1E5EFF" />
            Agendar nueva cita
          </h3>
          <p className="block-p" style={{ marginBottom: 14 }}>
            Elige especialidad y te mostramos los horarios libres.
          </p>

          <div className="field">
            <label>Especialidad</label>
            <div className="control">
              <select defaultValue="Cardiología">
                <option>Cardiología</option>
                <option>Medicina General</option>
                <option>Dermatología</option>
              </select>
              <span className="adorn">
                <ChevronDown size={17} />
              </span>
            </div>
          </div>

          <div className="dispo">
            {disponibilidad.map((d) => (
              <div className="dispo-dia" key={d.dia}>
                <span className="dispo-label">{d.dia}</span>
                <div className="dispo-horas">
                  {d.horas.map((h) => (
                    <button className="hora-chip" key={h}>
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-navy" style={{ width: '100%', marginTop: 16 }}>
            Continuar
            <ArrowRight size={16} />
          </button>
        </div>
      </Rise>

      <Rise i={1}>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
            <BellRing size={19} color="#16A34A" />
            Recordatorios
          </h3>
          <div className="list-row">
            <div className="icon-tile">
              <BellRing size={17} />
            </div>
            <div style={{ flex: 1 }}>
              <h5>Cardiología</h5>
              <p>Mañana a las 10:30 AM · Consultorio 304</p>
            </div>
          </div>
          <div className="list-row">
            <div className="icon-tile">
              <Video size={17} />
            </div>
            <div style={{ flex: 1 }}>
              <h5>Teleconsulta de Nutrición</h5>
              <p>02 Junio · Recibirás el enlace por correo</p>
            </div>
          </div>
        </div>
      </Rise>
    </>
  )

  return (
    <PortalPage
      view="citas"
      onNavigate={onNavigate}
      crumbs={['Citas', 'Mis Citas']}
      title="Mis Citas Médicas"
      subtitle="Consulta, reagenda o cancela tus citas desde un solo lugar."
      subtitleIcon={CalendarDays}
      info={{
        title: 'Llega 15 minutos antes',
        text: 'Así completamos tu registro sin retrasar la consulta. Trae tu cédula y carnet del seguro.',
        icon: Clock,
      }}
      rail={rail}
    >
      <Rise>
        <div className="card card-pad">
          <div className="segmented">
            {TABS.map((t) => {
              const n = citas.filter((c) => c.grupo === t.key).length
              return (
                <button
                  key={t.key}
                  className={`seg${tab === t.key ? ' active' : ''}`}
                  onClick={() => setTab(t.key)}
                >
                  {t.label} ({n})
                </button>
              )
            })}
          </div>
        </div>
      </Rise>

      <div className="cita-list">
        {visibles.map((c, i) => (
          <Rise key={c.id} i={i}>
            <CitaCard cita={c} />
          </Rise>
        ))}
      </div>
    </PortalPage>
  )
}
