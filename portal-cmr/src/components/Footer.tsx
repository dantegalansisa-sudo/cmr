import { MapPin, Phone, Mail, Camera, Siren, ArrowUpRight } from 'lucide-react'
import { CMR, emergencias, servicios } from '../data/institucion'
import type { View, Navegar } from '../rutas'

const ENLACES: { label: string; view: View }[] = [
  { label: 'Inicio', view: 'landing' },
  { label: 'Nosotros', view: 'nosotros' },
  { label: 'Servicios', view: 'servicios' },
  { label: 'Directorio médico', view: 'especialistas' },
  { label: 'Emergencias', view: 'emergencias' },
  { label: 'Contacto', view: 'contacto' },
]

export default function Footer({ onNavigate }: { onNavigate: Navegar }) {
  return (
    <footer className="foot">
      <div className="container foot-grid">
        <div className="foot-brand">
          <img className="foot-logo" src="/images/logo.png" alt="CMR — Centro Médico Real" />
          <p className="foot-lema">{CMR.lema}.</p>
          <p className="foot-txt">
            Hospital privado de alta especialidad al servicio de la salud dominicana desde{' '}
            {CMR.anioFundacion}.
          </p>
          <a className="foot-social" href={CMR.instagram} target="_blank" rel="noopener noreferrer">
            <Camera size={16} />
            {CMR.instagramUsuario}
          </a>
        </div>

        <div>
          <h4 className="foot-h">El Centro</h4>
          <ul className="foot-list">
            {ENLACES.map((e) => (
              <li key={e.view}>
                <button onClick={() => onNavigate(e.view)}>{e.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="foot-h">Servicios</h4>
          <ul className="foot-list">
            {servicios.map((s) => (
              <li key={s.slug}>
                {s.externo ? (
                  <a href={s.externo} target="_blank" rel="noopener noreferrer">
                    {s.nombre} <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <button onClick={() => onNavigate(s.slug === 'emergencias' ? 'emergencias' : 'servicios')}>
                    {s.nombre}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="foot-h">Contacto</h4>
          <ul className="foot-contact">
            <li>
              <MapPin size={16} />
              <span>
                {CMR.direccion}, {CMR.sector}
                <br />
                {CMR.ciudad}, {CMR.pais}
              </span>
            </li>
            <li>
              <Phone size={16} />
              <a href={CMR.telefonoHref}>{CMR.telefono}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${CMR.correo}`}>{CMR.correo}</a>
            </li>
            <li className="foot-urg">
              <Siren size={16} />
              <span>
                <strong>Emergencias 24/7</strong>
                <br />
                Adultos ext. {emergencias.adultos.join(', ')}
                <br />
                Pediátricas ext. {emergencias.pediatricas.join(', ')}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot-bottom">
        <div className="container foot-bottom-in">
          <span>
            © {new Date().getFullYear()} {CMR.nombre}. Todos los derechos reservados.
          </span>
          <span className="foot-dev">
            Desarrollado por
            <img src="/images/linkdicom.png" alt="LINKDICOM" />
          </span>
        </div>
      </div>
    </footer>
  )
}
