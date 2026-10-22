import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Send, ChevronDown, CircleCheck, Siren, Phone, MapPin, Camera } from 'lucide-react'
import { PageHero, SectionHead, BloqueUbicacion } from '../../components/SitioUI'
import { CMR, emergencias } from '../../data/institucion'

const MOTIVOS = [
  'Información general',
  'Citas y especialistas',
  'Seguros médicos (ARS)',
  'Resultados de laboratorio',
  'Facturación',
  'Sugerencias o reclamaciones',
  'Empleo',
]

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  // Sin servidor de formularios todavía: se abre el correo del usuario con el mensaje armado
  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const campo = (k: string) => String(f.get(k) ?? '').trim()

    const asunto = `[Web] ${campo('motivo')} — ${campo('nombre')}`
    const cuerpo = [
      `Nombre: ${campo('nombre')}`,
      `Teléfono: ${campo('telefono') || '—'}`,
      `Correo: ${campo('correo') || '—'}`,
      `Motivo: ${campo('motivo')}`,
      '',
      campo('mensaje'),
    ].join('\n')

    window.location.href = `mailto:${CMR.correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
    setEnviado(true)
  }

  return (
    <>
      <PageHero
        tono="violeta"
        icon={Mail}
        eyebrow="Contacto"
        title="¿En qué podemos ayudarle?"
        subtitle="Escríbanos, llámenos o visítenos. Para emergencias, llame directamente: atendemos las 24 horas."
      />

      <section className="sx sx-tinted">
        <div className="container cto-grid">
          <form className="cto-form" onSubmit={enviar}>
            <h2>Envíenos un mensaje</h2>
            <p className="cto-form-sub">Los campos con * son obligatorios.</p>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="c-nombre">Nombre completo *</label>
                <div className="control">
                  <input id="c-nombre" name="nombre" required autoComplete="name" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-tel">Teléfono</label>
                <div className="control">
                  <input id="c-tel" name="telefono" type="tel" autoComplete="tel" placeholder="809-000-0000" />
                </div>
              </div>
              <div className="field full">
                <label htmlFor="c-correo">Correo electrónico</label>
                <div className="control">
                  <input id="c-correo" name="correo" type="email" autoComplete="email" />
                </div>
              </div>
              <div className="field full">
                <label htmlFor="c-motivo">Motivo *</label>
                <div className="control">
                  <select id="c-motivo" name="motivo" defaultValue={MOTIVOS[0]} required>
                    {MOTIVOS.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                  <span className="adorn">
                    <ChevronDown size={17} />
                  </span>
                </div>
              </div>
              <div className="field full">
                <label htmlFor="c-msj">Mensaje *</label>
                <div className="control">
                  <textarea id="c-msj" name="mensaje" required placeholder="Cuéntenos en qué podemos ayudarle…" />
                </div>
              </div>
            </div>

            {enviado && (
              <div className="cto-ok">
                <CircleCheck size={18} />
                Se abrió su aplicación de correo con el mensaje listo. Solo tiene que pulsar «Enviar».
              </div>
            )}

            <div className="form-foot">
              <span className="cell-mute">Su mensaje llega a {CMR.correo}</span>
              <button type="submit" className="btn btn-green">
                <Send size={16} />
                Enviar mensaje
              </button>
            </div>
          </form>

          <aside className="cto-side">
            <a className="cto-card t-rojo" href={CMR.telefonoHref}>
              <span className="cto-ic">
                <Siren size={20} />
              </span>
              <div>
                <p className="cto-k">Emergencias 24/7</p>
                <p className="cto-v">{CMR.telefono}</p>
                <p className="cto-s">
                  Adultos ext. {emergencias.adultos.join(', ')} · Pediátricas ext.{' '}
                  {emergencias.pediatricas.join(', ')}
                </p>
              </div>
            </a>
            <a className="cto-card t-azul" href={CMR.telefonoHref}>
              <span className="cto-ic">
                <Phone size={20} />
              </span>
              <div>
                <p className="cto-k">Teléfono central</p>
                <p className="cto-v">{CMR.telefono}</p>
              </div>
            </a>
            <a className="cto-card t-teal" href={`mailto:${CMR.correo}`}>
              <span className="cto-ic">
                <Mail size={20} />
              </span>
              <div>
                <p className="cto-k">Correo</p>
                <p className="cto-v">{CMR.correo}</p>
              </div>
            </a>
            <a className="cto-card t-lima" href={CMR.mapaUrl} target="_blank" rel="noopener noreferrer">
              <span className="cto-ic">
                <MapPin size={20} />
              </span>
              <div>
                <p className="cto-k">Dirección</p>
                <p className="cto-v">{CMR.direccion}</p>
                <p className="cto-s">
                  {CMR.sector}, {CMR.ciudad}
                </p>
              </div>
            </a>
            <a className="cto-card t-rosa" href={CMR.instagram} target="_blank" rel="noopener noreferrer">
              <span className="cto-ic">
                <Camera size={20} />
              </span>
              <div>
                <p className="cto-k">Instagram</p>
                <p className="cto-v">{CMR.instagramUsuario}</p>
              </div>
            </a>
          </aside>
        </div>
      </section>

      <section className="sx sx-mint">
        <div className="container">
          <SectionHead center eyebrow="Ubicación" title="Cómo llegar" />
          <BloqueUbicacion />
        </div>
      </section>
    </>
  )
}
