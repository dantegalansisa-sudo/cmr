import {
  ClipboardList,
  FileCheck,
  ShieldCheck,
  FolderOpen,
  Share2,
  Plus,
  CircleCheck,
  CircleAlert,
  Loader,
  ArrowRight,
  Info,
} from 'lucide-react'
import PortalPage from '../components/PortalPage'
import Rise from '../components/Rise'
import { solicitudes, tiposSolicitud } from '../data/mockData'
import type { View } from '../App'

const TIPO_ICONS = { FileCheck, ShieldCheck, FolderOpen, Share2 } as const

const ESTADO_SOL = {
  en_proceso: { label: 'En proceso', cls: 'neutral', Icon: Loader },
  pendiente: { label: 'Pendiente', cls: 'warn', Icon: CircleAlert },
  aprobada: { label: 'Aprobada', cls: 'ok', Icon: CircleCheck },
} as const

type Props = { onNavigate: (v: View) => void }

export default function Solicitudes({ onNavigate }: Props) {
  const rail = (
    <>
      <Rise>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 6 }}>
            <Plus size={19} color="#1E5EFF" />
            Nueva solicitud
          </h3>
          <p className="block-p" style={{ marginBottom: 14 }}>
            Elige el tipo de trámite que necesitas.
          </p>

          {tiposSolicitud.map((t) => {
            const Icon = TIPO_ICONS[t.icon as keyof typeof TIPO_ICONS]
            return (
              <button className="list-row link" key={t.label}>
                <div className="icon-tile">
                  <Icon size={17} />
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h5>{t.label}</h5>
                </div>
                <ArrowRight size={15} color="#64748B" />
              </button>
            )
          })}
        </div>
      </Rise>

      <Rise i={1}>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 10 }}>
            <Info size={19} color="#16A34A" />
            Tiempos de respuesta
          </h3>
          <dl className="data-list">
            <dt>Certificado médico</dt>
            <dd>24 – 48 horas</dd>
            <dt>Autorización de ARS</dt>
            <dd>3 – 5 días hábiles</dd>
            <dt>Copia de expediente</dt>
            <dd>5 días hábiles</dd>
            <dt>Referimiento</dt>
            <dd>24 horas</dd>
          </dl>
        </div>
      </Rise>
    </>
  )

  return (
    <PortalPage
      view="solicitudes"
      onNavigate={onNavigate}
      crumbs={['Solicitudes', 'Mis Trámites']}
      title="Mis Solicitudes"
      subtitle="Da seguimiento a tus trámites sin llamar ni visitar el centro."
      subtitleIcon={ClipboardList}
      info={{
        title: '2 solicitudes en curso',
        text: 'Te avisamos por correo y en el portal apenas cambie el estado de cada trámite.',
        icon: Loader,
      }}
      rail={rail}
    >
      {solicitudes.map((s, i) => {
        const { label, cls, Icon } = ESTADO_SOL[s.estado]
        return (
          <Rise key={s.id} i={i}>
            <div className="card card-pad sol-card">
              <div className="sol-head">
                <div>
                  <h4 className="sol-tipo">{s.tipo}</h4>
                  <p className="estudio-code">{s.codigo}</p>
                </div>
                <span className={`status-pill ${cls}`}>
                  <Icon size={13} />
                  {label}
                </span>
              </div>

              <p className="sol-detalle">{s.detalle}</p>

              <div className="progress">
                <div
                  className={`progress-bar ${cls}`}
                  style={{ width: `${s.progreso}%` }}
                />
              </div>

              <div className="sol-foot">
                <span className="cell-mute">Solicitada el {s.fecha}</span>
                <div className="actions">
                  <button className="action-btn">Ver seguimiento</button>
                  {s.estado === 'aprobada' && (
                    <button className="action-btn strong">Descargar</button>
                  )}
                </div>
              </div>
            </div>
          </Rise>
        )
      })}
    </PortalPage>
  )
}
