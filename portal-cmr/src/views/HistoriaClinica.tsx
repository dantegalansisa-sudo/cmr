import {
  FileText,
  Droplet,
  TriangleAlert,
  Activity,
  CalendarCheck,
  Stethoscope,
  Pill,
  Syringe,
  ShieldCheck,
  Download,
} from 'lucide-react'
import PortalPage from '../components/PortalPage'
import Rise from '../components/Rise'
import {
  perfilClinico,
  consultas,
  alergias,
  medicamentos,
  vacunas,
} from '../data/mockData'
import type { View } from '../App'

const KPI_ICONS = { Droplet, TriangleAlert, Activity, CalendarCheck } as const

type Props = { onNavigate: (v: View) => void }

export default function HistoriaClinica({ onNavigate }: Props) {
  const rail = (
    <>
      <Rise>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
            <TriangleAlert size={19} color="#F59E0B" />
            Alergias
          </h3>
          {alergias.map((a) => (
            <div className="list-row" key={a.nombre}>
              <div className="icon-tile amber">
                <TriangleAlert size={17} />
              </div>
              <div style={{ flex: 1 }}>
                <h5>{a.nombre}</h5>
                <p>Registrada desde {a.desde}</p>
              </div>
              <span className={`pill ${a.nivel === 'Severa' ? 'amber' : 'grey'}`}>
                {a.nivel}
              </span>
            </div>
          ))}
        </div>
      </Rise>

      <Rise i={1}>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
            <Pill size={19} color="#1E5EFF" />
            Medicamentos activos
          </h3>
          {medicamentos.map((m) => (
            <div className="list-row" key={m.nombre}>
              <div className="icon-tile">
                <Pill size={17} />
              </div>
              <div style={{ flex: 1 }}>
                <h5>{m.nombre}</h5>
                <p>{m.pauta}</p>
                <p>{m.medico}</p>
              </div>
            </div>
          ))}
        </div>
      </Rise>

      <Rise i={2}>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
            <Syringe size={19} color="#16A34A" />
            Vacunas
          </h3>
          {vacunas.map((v) => (
            <div className="list-row" key={v.nombre}>
              <div className="icon-tile green">
                <Syringe size={17} />
              </div>
              <div style={{ flex: 1 }}>
                <h5>{v.nombre}</h5>
                <p>Aplicada {v.fecha}</p>
              </div>
              <span className={`pill ${v.estado === 'Al día' ? 'green' : 'grey'}`}>
                {v.estado}
              </span>
            </div>
          ))}
        </div>
      </Rise>
    </>
  )

  return (
    <PortalPage
      view="historia"
      onNavigate={onNavigate}
      crumbs={['Historia Clínica', 'Resumen']}
      title="Mi Historia Clínica"
      subtitle="Todo tu historial médico en el Centro Médico Real, en un solo expediente."
      subtitleIcon={FileText}
      info={{
        title: 'Tu expediente es privado',
        text: 'Solo tú y los médicos que te atienden pueden verlo. Cada acceso queda registrado.',
        icon: ShieldCheck,
      }}
      rail={rail}
    >
      {/* Perfil clínico */}
      <div className="kpi-grid">
        {perfilClinico.map((k, i) => {
          const Icon = KPI_ICONS[k.icon as keyof typeof KPI_ICONS]
          return (
            <Rise key={k.label} i={i}>
              <div className={`mini-kpi ${k.tone}`}>
                <div className="mini-kpi-icon">
                  <Icon size={19} />
                </div>
                <div>
                  <p className="mini-kpi-label">{k.label}</p>
                  <p className="mini-kpi-value">{k.value}</p>
                </div>
              </div>
            </Rise>
          )
        })}
      </div>

      {/* Línea de tiempo de consultas */}
      <Rise>
        <div className="card card-pad">
          <div className="section-head">
            <h2 className="section-title" style={{ fontSize: 18 }}>
              <Stethoscope size={19} color="#1E5EFF" />
              Historial de consultas
            </h2>
            <button className="btn-outline">
              <Download size={15} />
              Descargar expediente
            </button>
          </div>

          <div className="timeline">
            {consultas.map((c) => (
              <div className="tl-item" key={c.id}>
                <div className="tl-marker" />
                <div className="tl-card">
                  <div className="tl-head">
                    <div>
                      <h4>{c.especialidad}</h4>
                      <p className="tl-medico">{c.medico}</p>
                    </div>
                    <span className="pill grey">{c.fecha}</span>
                  </div>
                  <dl className="tl-detail">
                    <dt>Motivo</dt>
                    <dd>{c.motivo}</dd>
                    <dt>Diagnóstico</dt>
                    <dd>{c.diagnostico}</dd>
                    <dt>Indicaciones</dt>
                    <dd>{c.indicaciones}</dd>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Rise>
    </PortalPage>
  )
}
