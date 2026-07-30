import {
  Receipt,
  Wallet,
  CircleCheck,
  ShieldCheck,
  CalendarClock,
  CreditCard,
  Download,
  Eye,
  Plus,
  CircleAlert,
  Loader,
} from 'lucide-react'
import PortalPage from '../components/PortalPage'
import Rise from '../components/Rise'
import { facturacionKpis, facturas, metodosPago, seguro } from '../data/mockData'
import type { View } from '../App'

const KPI_ICONS = { Wallet, CircleCheck, ShieldCheck, CalendarClock } as const

const ESTADO_FACTURA = {
  pendiente: { label: 'Pendiente', cls: 'warn', Icon: CircleAlert },
  pagada: { label: 'Pagada', cls: 'ok', Icon: CircleCheck },
  procesando: { label: 'En proceso con ARS', cls: 'neutral', Icon: Loader },
} as const

type Props = { onNavigate: (v: View) => void }

export default function Facturacion({ onNavigate }: Props) {
  const rail = (
    <>
      <Rise>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
            <CreditCard size={19} color="#1E5EFF" />
            Métodos de pago
          </h3>
          {metodosPago.map((m) => (
            <div className="list-row" key={m.detalle}>
              <div className="icon-tile">
                <CreditCard size={17} />
              </div>
              <div style={{ flex: 1 }}>
                <h5>
                  {m.tipo} {m.detalle}
                </h5>
                <p>Vence {m.vence}</p>
              </div>
              {m.principal && <span className="pill blue">Principal</span>}
            </div>
          ))}
          <button className="btn-outline" style={{ width: '100%', marginTop: 12 }}>
            <Plus size={15} />
            Agregar método de pago
          </button>
        </div>
      </Rise>

      <Rise i={1}>
        <div className="card card-pad">
          <h3 className="section-title" style={{ fontSize: 18, marginBottom: 12 }}>
            <ShieldCheck size={19} color="#16A34A" />
            Mi seguro
          </h3>
          <div className="secure-strip" style={{ marginBottom: 14 }}>
            <ShieldCheck size={20} />
            <div>
              <h5>{seguro.aseguradora}</h5>
              <p>{seguro.plan}</p>
            </div>
          </div>
          <dl className="data-list">
            <dt>N.º de afiliado</dt>
            <dd>{seguro.afiliado}</dd>
            <dt>Cobertura</dt>
            <dd>{seguro.cobertura}</dd>
            <dt>Vigencia</dt>
            <dd>{seguro.vigencia}</dd>
          </dl>
        </div>
      </Rise>
    </>
  )

  return (
    <PortalPage
      view="facturacion"
      onNavigate={onNavigate}
      crumbs={['Facturación', 'Mis Facturas']}
      title="Facturación y Pagos"
      subtitle="Consulta tus facturas, paga en línea y revisa la cobertura de tu seguro."
      subtitleIcon={Receipt}
      info={{
        title: 'Tienes 1 factura pendiente',
        text: 'Vence el 30 de mayo. Puedes pagarla en línea con cualquiera de tus métodos guardados.',
        icon: Wallet,
      }}
      rail={rail}
    >
      <div className="kpi-grid">
        {facturacionKpis.map((k, i) => {
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
                  <p className="mini-kpi-sub">{k.sub}</p>
                </div>
              </div>
            </Rise>
          )
        })}
      </div>

      <Rise>
        <div className="table-card">
          <div className="table-head-bar">
            <h2 className="section-title" style={{ fontSize: 18 }}>
              Historial de facturas
            </h2>
            <button className="btn-outline">
              <Download size={15} />
              Exportar
            </button>
          </div>

          <div className="table-scroll">
            <table className="estudios facturas-table">
              <colgroup>
                <col className="c-num" />
                <col className="c-fec" />
                <col />
                <col className="c-monto" />
                <col className="c-est" />
                <col className="c-acc" />
              </colgroup>
              <thead>
                <tr>
                  <th>N.º de Factura</th>
                  <th>Fecha</th>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {facturas.map((f) => {
                  const { label, cls, Icon } = ESTADO_FACTURA[f.estado]
                  return (
                    <tr key={f.id}>
                      <td>
                        <div className="estudio-code">{f.numero}</div>
                        <div className="cell-mute">{f.seguro}</div>
                      </td>
                      <td>
                        <span className="cell-strong">{f.fecha}</span>
                      </td>
                      <td>
                        <span className="cell-strong">{f.concepto}</span>
                      </td>
                      <td>
                        <span className="monto">{f.monto}</span>
                      </td>
                      <td>
                        <span className={`status-pill ${cls}`}>
                          <Icon size={13} />
                          {label}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          <button className="action-btn">
                            <Eye size={14} />
                            Ver
                          </button>
                          {f.estado === 'pendiente' ? (
                            <button className="action-btn strong">Pagar</button>
                          ) : (
                            <button className="action-btn">
                              <Download size={14} />
                              PDF
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <span className="p-info">Mostrando 5 de 12 facturas</span>
            <div className="pages">
              <button className="page active">1</button>
              <button className="page">2</button>
              <button className="page">3</button>
              <button className="page">›</button>
            </div>
            <div className="p-size">
              Mostrar
              <select defaultValue="5 por página">
                <option>5 por página</option>
                <option>10 por página</option>
              </select>
            </div>
          </div>
        </div>
      </Rise>
    </PortalPage>
  )
}
