import { useState } from 'react'
import {
  Mail,
  Search,
  Send,
  Paperclip,
  ShieldCheck,
  SquarePen,
  MoreVertical,
} from 'lucide-react'
import PortalPage from '../components/PortalPage'
import Rise from '../components/Rise'
import { conversaciones, hilo } from '../data/mockData'
import type { View } from '../App'

type Props = { onNavigate: (v: View) => void }

export default function Mensajes({ onNavigate }: Props) {
  const [activa, setActiva] = useState(conversaciones[0].id)
  const conv = conversaciones.find((c) => c.id === activa)!

  return (
    <PortalPage
      view="mensajes"
      onNavigate={onNavigate}
      crumbs={['Mensajes', 'Bandeja de entrada']}
      title="Mensajes"
      subtitle="Comunícate directamente con tu equipo médico y con el centro."
      subtitleIcon={Mail}
      info={{
        title: 'Canal seguro',
        text: 'Los mensajes viajan cifrados y quedan asociados a tu expediente clínico.',
        icon: ShieldCheck,
      }}
    >
      <Rise>
        <div className="msg-layout card">
          {/* Lista de conversaciones */}
          <div className="msg-list">
            <div className="msg-list-head">
              <div className="msg-search">
                <Search size={15} />
                <input placeholder="Buscar conversación..." readOnly />
              </div>
              <button className="icon-btn" aria-label="Nuevo mensaje">
                <SquarePen size={16} />
              </button>
            </div>

            {conversaciones.map((c) => (
              <button
                key={c.id}
                className={`msg-item${c.id === activa ? ' active' : ''}`}
                onClick={() => setActiva(c.id)}
              >
                <span className="avatar-initials">{c.iniciales}</span>
                <span className="msg-item-body">
                  <span className="msg-item-top">
                    <strong>{c.nombre}</strong>
                    <em>{c.hora}</em>
                  </span>
                  <span className="msg-item-rol">{c.rol}</span>
                  <span className="msg-item-prev">{c.ultimo}</span>
                </span>
                {c.sinLeer > 0 && <span className="sidebar-badge">{c.sinLeer}</span>}
              </button>
            ))}
          </div>

          {/* Hilo activo */}
          <div className="msg-thread">
            <div className="msg-thread-head">
              <span className="avatar-initials">{conv.iniciales}</span>
              <div style={{ flex: 1 }}>
                <h4>{conv.nombre}</h4>
                <p>{conv.rol}</p>
              </div>
              <button className="icon-btn" aria-label="Opciones">
                <MoreVertical size={17} />
              </button>
            </div>

            <div className="msg-thread-body">
              <div className="msg-day">Hoy</div>
              {hilo.map((m, i) => (
                <div
                  key={i}
                  className={`msg-bubble-row${m.de === 'paciente' ? ' mine' : ''}`}
                >
                  <div className="msg-bubble">
                    {m.texto}
                    <span className="msg-hora">{m.hora}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <button className="icon-btn" aria-label="Adjuntar">
                <Paperclip size={17} />
              </button>
              <input placeholder="Escribe tu mensaje..." readOnly />
              <button className="send-btn" aria-label="Enviar">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </Rise>
    </PortalPage>
  )
}
