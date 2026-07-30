import { useState } from 'react'
import {
  File,
  FileText,
  Pill,
  FileCheck,
  FileSignature,
  Download,
  Eye,
  Search,
  Upload,
  HardDrive,
} from 'lucide-react'
import PortalPage from '../components/PortalPage'
import Rise from '../components/Rise'
import { documentos, categoriasDoc } from '../data/mockData'
import type { Documento } from '../data/mockData'
import type { View } from '../App'

const CAT_META: Record<Documento['categoria'], { Icon: typeof FileText; tone: string }> = {
  Informes: { Icon: FileText, tone: 'blue' },
  Recetas: { Icon: Pill, tone: 'green' },
  Certificados: { Icon: FileCheck, tone: 'amber' },
  Consentimientos: { Icon: FileSignature, tone: 'violet' },
}

type Props = { onNavigate: (v: View) => void }

export default function Documentos({ onNavigate }: Props) {
  const [cat, setCat] = useState('Todos')
  const visibles =
    cat === 'Todos' ? documentos : documentos.filter((d) => d.categoria === cat)

  return (
    <PortalPage
      view="documentos"
      onNavigate={onNavigate}
      crumbs={['Documentos', 'Mis Archivos']}
      title="Mis Documentos"
      subtitle="Informes, recetas, certificados y consentimientos siempre a la mano."
      subtitleIcon={File}
      info={{
        title: 'Almacenamiento seguro',
        text: 'Tus documentos se conservan cifrados y disponibles durante 10 años.',
        icon: HardDrive,
      }}
    >
      <Rise>
        <div className="card card-pad">
          <div className="filter-bar">
            <div className="segmented">
              {categoriasDoc.map((c) => {
                const n =
                  c === 'Todos'
                    ? documentos.length
                    : documentos.filter((d) => d.categoria === c).length
                return (
                  <button
                    key={c}
                    className={`seg${cat === c ? ' active' : ''}`}
                    onClick={() => setCat(c)}
                  >
                    {c} ({n})
                  </button>
                )
              })}
            </div>

            <div className="filter-spacer" />

            <div className="msg-search" style={{ maxWidth: 220 }}>
              <Search size={15} />
              <input placeholder="Buscar documento..." readOnly />
            </div>

            <button className="btn-outline">
              <Upload size={15} />
              Subir documento
            </button>
          </div>
        </div>
      </Rise>

      <div className="doc-grid">
        {visibles.map((d, i) => {
          const { Icon, tone } = CAT_META[d.categoria]
          return (
            <Rise key={d.id} i={i}>
              <div className="doc-card">
                <div className={`doc-icon ${tone}`}>
                  <Icon size={22} />
                </div>
                <span className={`pill soft ${tone}`}>{d.categoria}</span>
                <h4>{d.nombre}</h4>
                <p className="doc-meta">
                  {d.emisor} · {d.fecha}
                </p>
                <div className="doc-foot">
                  <span className="cell-mute">{d.peso}</span>
                  <div className="actions">
                    <button className="action-btn">
                      <Eye size={14} />
                      Ver
                    </button>
                    <button className="action-btn">
                      <Download size={14} />
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            </Rise>
          )
        })}
      </div>
    </PortalPage>
  )
}
