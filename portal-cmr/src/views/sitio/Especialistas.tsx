import { useMemo, useState, useEffect } from 'react'
import {
  Search,
  Stethoscope,
  DoorOpen,
  Phone,
  Clock,
  PhoneCall,
  X,
  Info,
  ChevronDown,
} from 'lucide-react'
import { PageHero } from '../../components/SitioUI'
import { medicos } from '../../data/medicos'
import type { Medico } from '../../data/medicos'
import {
  especialidades,
  metaDe,
  normalizar,
  iniciales,
  totalMedicos,
} from '../../data/especialidades'
import { CMR } from '../../data/institucion'

const telHref = (t: string) => {
  const [num, ext] = t.split(/\s*ext\.\s*/i)
  const digitos = num.replace(/\D/g, '')
  return `tel:+1${digitos}${ext ? ',' + ext.replace(/\D/g, '') : ''}`
}

function TarjetaMedico({ m }: { m: Medico }) {
  const { icon: Icon, tono } = metaDe(m.especialidad)
  const tel = m.telefonos[0]

  return (
    <article className={`doc-card2 t-${tono}`}>
      <div className="doc2-top">
        <span className="doc2-avatar">{iniciales(m.nombre)}</span>
        <div className="doc2-id">
          <h3>{m.nombre}</h3>
          <span className="doc2-esp">
            <Icon size={14} />
            {m.especialidad}
          </span>
          {m.detalle && <span className="doc2-det">{m.detalle}</span>}
        </div>
      </div>

      <ul className="doc2-data">
        <li>
          <DoorOpen size={15} />
          Consultorio {m.consultorio}
        </li>
        {m.telefonos.length > 0 ? (
          m.telefonos.map((t) => (
            <li key={t}>
              <Phone size={15} />
              <a href={telHref(t)}>{t}</a>
            </li>
          ))
        ) : (
          <li className="muted">
            <Phone size={15} />
            Central {CMR.telefono}
          </li>
        )}
        <li className={m.horario ? undefined : 'muted'}>
          <Clock size={15} />
          {m.horario ?? 'Horario: consultar en el consultorio'}
        </li>
      </ul>

      <a className="doc2-call" href={tel ? telHref(tel) : CMR.telefonoHref}>
        <PhoneCall size={16} />
        Llamar para agendar
      </a>
    </article>
  )
}

export default function Especialistas() {
  // El estado inicial sale de la URL para que los enlaces filtrados se puedan compartir
  const params = new URLSearchParams(window.location.search)
  const [q, setQ] = useState(params.get('q') ?? '')
  const [esp, setEsp] = useState(params.get('especialidad') ?? '')

  useEffect(() => {
    const p = new URLSearchParams()
    if (esp) p.set('especialidad', esp)
    if (q.trim()) p.set('q', q.trim())
    const qs = p.toString()
    window.history.replaceState(null, '', '/especialistas' + (qs ? `?${qs}` : ''))
  }, [q, esp])

  const visibles = useMemo(() => {
    const n = normalizar(q)
    return medicos.filter((m) => {
      if (esp && m.especialidad !== esp) return false
      if (!n) return true
      return [m.nombre, m.especialidad, m.detalle ?? '', m.consultorio].some((c) =>
        normalizar(c).includes(n),
      )
    })
  }, [q, esp])

  const limpiar = () => {
    setQ('')
    setEsp('')
  }

  return (
    <>
      <PageHero
        tono="azul"
        icon={Stethoscope}
        eyebrow="Directorio médico"
        title="Encuentre a su especialista"
        subtitle={`${totalMedicos} médicos en ${especialidades.length} especialidades. Busque por nombre o especialidad y llame directamente a su consultorio para agendar.`}
      >
        <div className="dir-search">
          <Search size={20} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Nombre del médico, especialidad o consultorio…"
            aria-label="Buscar médico"
          />
          {q && (
            <button onClick={() => setQ('')} aria-label="Borrar búsqueda">
              <X size={18} />
            </button>
          )}
        </div>
      </PageHero>

      <section className="dir">
        <div className="container dir-grid">
          {/* Filtro por especialidad */}
          <aside className="dir-side">
            <h2>Especialidades</h2>

            <div className="dir-select">
              <select value={esp} onChange={(e) => setEsp(e.target.value)} aria-label="Especialidad">
                <option value="">Todas las especialidades ({totalMedicos})</option>
                {especialidades.map((e) => (
                  <option key={e.nombre} value={e.nombre}>
                    {e.nombre} ({e.total})
                  </option>
                ))}
              </select>
              <ChevronDown size={18} />
            </div>

            <ul className="dir-list">
              <li>
                <button className={`dir-opt${!esp ? ' on' : ''}`} onClick={() => setEsp('')}>
                  <span>Todas</span>
                  <em>{totalMedicos}</em>
                </button>
              </li>
              {especialidades.map((e) => (
                <li key={e.nombre}>
                  <button
                    className={`dir-opt t-${e.tono}${esp === e.nombre ? ' on' : ''}`}
                    onClick={() => setEsp(e.nombre)}
                  >
                    <e.icon size={15} />
                    <span>{e.nombre}</span>
                    <em>{e.total}</em>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Resultados */}
          <div className="dir-main">
            <div className="dir-bar">
              <p>
                <strong>{visibles.length}</strong>{' '}
                {visibles.length === 1 ? 'especialista' : 'especialistas'}
                {esp && (
                  <>
                    {' '}
                    en <strong>{esp}</strong>
                  </>
                )}
                {q.trim() && (
                  <>
                    {' '}
                    para «<strong>{q.trim()}</strong>»
                  </>
                )}
              </p>
              {(esp || q) && (
                <button className="dir-clear" onClick={limpiar}>
                  <X size={15} />
                  Quitar filtros
                </button>
              )}
            </div>

            <div className="dir-note">
              <Info size={17} />
              <p>
                Las citas se agendan directamente con cada consultorio. Si no encuentra a su médico, llame
                a la central al <a href={CMR.telefonoHref}>{CMR.telefono}</a>.
              </p>
            </div>

            {visibles.length > 0 ? (
              <div className="dir-cards">
                {visibles.map((m) => (
                  <TarjetaMedico key={m.id} m={m} />
                ))}
              </div>
            ) : (
              <div className="dir-empty">
                <Search size={30} />
                <h3>No encontramos resultados</h3>
                <p>Pruebe con otro nombre o quite los filtros.</p>
                <button className="btn btn-navy" onClick={limpiar}>
                  Ver todos los especialistas
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
