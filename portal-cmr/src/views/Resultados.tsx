import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  ChevronRight,
  ShieldCheck,
  ChevronDown,
  Calendar,
  Download,
  ArrowDown,
  CircleCheck,
  CircleAlert,
  Eye,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { estudios } from '../data/mockData'
import type { Estudio } from '../data/mockData'
import type { View } from '../App'

function Rise({ children, i = 0 }: { children: ReactNode; i?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Miniaturas de estudio como SVG inline.
 * Formas abstractas sobre fondo oscuro — no son imágenes médicas reales.
 */
function Thumb({ kind }: { kind: Estudio['thumb'] }) {
  const s = { stroke: '#9aa7b4', fill: 'none', strokeWidth: 1.2 }
  const soft = { stroke: '#5d6b7a', fill: 'none', strokeWidth: 1 }

  return (
    <div className="thumb">
      <svg viewBox="0 0 64 56" width="64" height="56">
        <rect width="64" height="56" fill="#0d151d" />

        {kind === 'torax-rx' && (
          <g>
            <ellipse cx="32" cy="30" rx="20" ry="19" {...soft} />
            <line x1="32" y1="10" x2="32" y2="48" {...soft} />
            {[16, 22, 28, 34, 40].map((y) => (
              <g key={y}>
                <path d={`M32 ${y} C 24 ${y}, 16 ${y + 3}, 14 ${y + 8}`} {...s} />
                <path d={`M32 ${y} C 40 ${y}, 48 ${y + 3}, 50 ${y + 8}`} {...s} />
              </g>
            ))}
            <path d="M27 20 q5 8 0 16" stroke="#c3ced9" fill="none" strokeWidth="1.4" />
          </g>
        )}

        {kind === 'torax-tc' && (
          <g>
            <ellipse cx="32" cy="28" rx="24" ry="17" {...s} />
            <ellipse cx="22" cy="28" rx="8" ry="11" fill="#2b3742" />
            <ellipse cx="42" cy="28" rx="8" ry="11" fill="#2b3742" />
            <ellipse cx="32" cy="32" rx="5" ry="6" fill="#8e9aa6" />
            <ellipse cx="32" cy="41" rx="6" ry="3" {...soft} />
          </g>
        )}

        {kind === 'rodilla' && (
          <g>
            <path d="M18 4 L18 20 Q18 26 26 27 L26 4" fill="#6f7d8a" />
            <path d="M20 52 L20 36 Q20 30 28 29 L28 52" fill="#6f7d8a" />
            <ellipse cx="38" cy="27" rx="7" ry="9" fill="#aab6c2" />
            <path d="M30 26 q10 -6 16 2" {...s} />
            <path d="M30 32 q10 6 16 -2" {...s} />
            <path d="M46 8 L46 48" {...soft} />
          </g>
        )}

        {kind === 'ultrasonido' && (
          <g>
            <path d="M32 4 L58 52 L6 52 Z" fill="#1b2630" />
            <path d="M32 4 L58 52 L6 52 Z" {...soft} />
            <path d="M18 40 q14 -12 28 0" stroke="#b6c2ce" fill="none" strokeWidth="1.4" />
            <path d="M22 46 q10 -7 20 0" {...s} />
            <ellipse cx="32" cy="30" rx="7" ry="5" fill="#41505e" />
            <circle cx="30" cy="29" r="2" fill="#cdd8e3" />
          </g>
        )}

        {kind === 'mamografia' && (
          <g>
            <path d="M4 6 Q26 26 4 50 Z" fill="#3a4753" />
            <path d="M4 6 Q26 26 4 50 Z" {...soft} />
            <path d="M60 6 Q38 26 60 50 Z" fill="#3a4753" />
            <path d="M60 6 Q38 26 60 50 Z" {...soft} />
            <circle cx="14" cy="28" r="3" fill="#c9d4df" />
            <circle cx="50" cy="30" r="2" fill="#a9b5c1" />
            <line x1="32" y1="4" x2="32" y2="52" stroke="#111a22" strokeWidth="2" />
          </g>
        )}

        {kind === 'cerebro' && (
          <g>
            <ellipse cx="32" cy="28" rx="21" ry="23" fill="#39454f" />
            <ellipse cx="32" cy="28" rx="21" ry="23" {...s} />
            <ellipse cx="32" cy="28" rx="16" ry="18" fill="#5d6b78" />
            <path d="M32 12 L32 44" {...soft} />
            <ellipse cx="26" cy="24" rx="4" ry="6" fill="#202a33" />
            <ellipse cx="38" cy="24" rx="4" ry="6" fill="#202a33" />
            <ellipse cx="32" cy="38" rx="6" ry="4" fill="#8c98a4" />
          </g>
        )}
      </svg>
    </div>
  )
}

type Props = { onNavigate: (v: View) => void }

export default function Resultados({ onNavigate }: Props) {
  return (
    <div className="portal">
      <div className="container">
        <div className="portal-grid no-rail">
          <Sidebar view="resultados" onNavigate={onNavigate} />

          <div className="portal-main">
            <div className="view-head">
              <div>
                <div className="breadcrumb">
                  <span className="b0">Resultados</span>
                  <ChevronRight size={14} />
                  <span>Imágenes e Informes</span>
                </div>
                <h1 className="view-title">Mis Estudios de Imágenes e Informes</h1>
                <div className="view-sub">
                  Consulta tus estudios de diagnóstico por imágenes y accede a tus informes.
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <ShieldCheck size={17} />
                </div>
                <div>
                  <h5>Tu información está segura</h5>
                  <p>
                    Utilizamos encriptación de nivel bancario para proteger tus datos de
                    salud.
                  </p>
                </div>
              </div>
            </div>

            {/* Barra de filtros — visual, no filtra nada */}
            <Rise>
              <div className="card card-pad">
                <div className="filter-bar">
                  <div className="filter-field">
                    <label>Tipo de estudio</label>
                    <div className="control">
                      <select defaultValue="Todos">
                        <option>Todos</option>
                        <option>Radiografía</option>
                        <option>Tomografía</option>
                      </select>
                      <span className="adorn">
                        <ChevronDown size={16} />
                      </span>
                    </div>
                  </div>

                  <div className="filter-field">
                    <label>Fecha desde</label>
                    <div className="control">
                      <input placeholder="Seleccione" readOnly />
                      <span className="adorn">
                        <Calendar size={16} />
                      </span>
                    </div>
                  </div>

                  <div className="filter-field">
                    <label>Fecha hasta</label>
                    <div className="control">
                      <input placeholder="Seleccione" readOnly />
                      <span className="adorn">
                        <Calendar size={16} />
                      </span>
                    </div>
                  </div>

                  <div className="segmented">
                    {['7 días', '30 días', '3 meses', '6 meses'].map((p) => (
                      <button className={`seg${p === '6 meses' ? ' active' : ''}`} key={p}>
                        {p}
                      </button>
                    ))}
                  </div>

                  <div className="filter-spacer" />

                  <button className="btn-outline">
                    <Download size={16} />
                    Exportar historial
                  </button>
                </div>
              </div>
            </Rise>

            {/* Tabla de estudios */}
            <Rise i={1}>
              <div className="table-card">
                <div className="table-scroll">
                  <table className="estudios">
                    <colgroup>
                      <col className="c-estudio" />
                      <col className="c-fecha" />
                      <col className="c-tipo" />
                      <col className="c-medico" />
                      <col className="c-estado" />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Estudio</th>
                        <th>
                          <span className="th-sort">
                            Fecha del Estudio <ArrowDown size={13} />
                          </span>
                        </th>
                        <th>Tipo de Estudio</th>
                        <th>Médico Solicitante</th>
                        <th>Estado del Informe</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {estudios.map((e) => (
                        <tr key={e.id}>
                          <td>
                            <div className="estudio-cell">
                              <Thumb kind={e.thumb} />
                              <div>
                                <h5>{e.nombre}</h5>
                                <div className="estudio-code">{e.codigo}</div>
                                <div className="estudio-centro">{e.centro}</div>
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="fecha-cell">
                              <Calendar size={14} color="#64748B" style={{ marginTop: 2 }} />
                              <div>
                                <div className="f-date">{e.fecha}</div>
                                <div className="f-time">{e.hora}</div>
                              </div>
                            </div>
                          </td>

                          <td>
                            <span className="cell-strong">{e.tipo}</span>
                          </td>

                          <td>
                            <div className="cell-strong">{e.medico}</div>
                            <div className="cell-mute">{e.especialidad}</div>
                          </td>

                          <td>
                            {e.estado === 'disponible' ? (
                              <span className="badge ok">
                                <CircleCheck size={15} style={{ marginTop: 2 }} />
                                <span>
                                  <h5>Resultado disponible</h5>
                                  <p>Informe finalizado</p>
                                </span>
                              </span>
                            ) : (
                              <span className="badge warn">
                                <CircleAlert size={15} style={{ marginTop: 2 }} />
                                <span>
                                  <h5>Resultados en edición</h5>
                                  <p>En proceso de revisión</p>
                                </span>
                              </span>
                            )}
                          </td>

                          <td>
                            <div className="actions">
                              <button className="action-btn">
                                <Eye size={14} />
                                Ver resultado
                              </button>
                              <button className="action-btn">
                                <Download size={14} />
                                Descargar
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pagination">
                  <span className="p-info">Mostrando 1 a 6 de 12 estudios</span>

                  <div className="pages">
                    <button className="page active">1</button>
                    <button className="page">2</button>
                    <button className="page">3</button>
                    <button className="page">›</button>
                    <button className="page">»</button>
                  </div>

                  <div className="p-size">
                    Mostrar
                    <select defaultValue="6 por página">
                      <option>6 por página</option>
                      <option>12 por página</option>
                    </select>
                  </div>
                </div>
              </div>
            </Rise>
          </div>
        </div>
      </div>
    </div>
  )
}
