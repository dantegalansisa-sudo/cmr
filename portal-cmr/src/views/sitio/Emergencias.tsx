import {
  Siren,
  PhoneCall,
  Baby,
  UserRound,
  TriangleAlert,
  IdCard,
  ShieldCheck,
  Pill,
  FileText,
  BedDouble,
  ArrowRight,
} from 'lucide-react'
import Rise from '../../components/Rise'
import { PageHero, SectionHead, BloqueUbicacion } from '../../components/SitioUI'
import { CMR, emergencias } from '../../data/institucion'
import type { Navegar } from '../../rutas'

const telExt = (ext: string) => `${CMR.telefonoHref},${ext}`

// Orientación general, no sustituye la valoración médica
const SIGNOS = [
  'Dolor u opresión en el pecho',
  'Dificultad para respirar',
  'Desmayo o pérdida del conocimiento',
  'Cara caída, debilidad de un brazo o dificultad para hablar',
  'Sangrado abundante que no se detiene',
  'Convulsiones',
  'Fiebre alta en bebés menores de 3 meses',
  'Golpes fuertes, caídas o accidentes',
]

const LLEVAR = [
  { icon: IdCard, texto: 'Cédula o documento de identidad del paciente' },
  { icon: ShieldCheck, texto: 'Carnet de su seguro médico (ARS)' },
  { icon: Pill, texto: 'Lista de medicamentos que toma actualmente' },
  { icon: FileText, texto: 'Estudios o resultados recientes, si los tiene' },
]

function TarjetaUrgencia({
  titulo,
  sub,
  ext,
  tono,
  icon: Icon,
}: {
  titulo: string
  sub: string
  ext: string[]
  tono: string
  icon: typeof Baby
}) {
  return (
    <div className={`urg-card t-${tono}`}>
      <div className="urg-card-head">
        <span className="urg-card-ic">
          <Icon size={26} />
        </span>
        <div>
          <h2>{titulo}</h2>
          <p>{sub}</p>
        </div>
      </div>
      <p className="urg-card-k">Llame al {CMR.telefono} y marque la extensión:</p>
      <div className="urg-exts">
        {ext.map((e) => (
          <a key={e} className="urg-ext" href={telExt(e)}>
            <PhoneCall size={15} />
            ext. {e}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Emergencias({ onNavigate }: { onNavigate: Navegar }) {
  return (
    <>
      <PageHero
        tono="rojo"
        icon={Siren}
        eyebrow="Emergencias 24/7"
        title="Abiertos las 24 horas, los 365 días"
        subtitle="Áreas de emergencia separadas para adultos y para niños, con personal médico permanente."
      >
        <a className="btn btn-white-red pg-hero-btn" href={CMR.telefonoHref}>
          <PhoneCall size={18} />
          Llamar al {CMR.telefono}
        </a>
      </PageHero>

      <section className="sx sx-rosa">
        <div className="container">
          <div className="urg-grid">
            <Rise>
              <TarjetaUrgencia
                titulo="Emergencias Adultos"
                sub="Pacientes mayores de edad"
                ext={emergencias.adultos}
                tono="rojo"
                icon={UserRound}
              />
            </Rise>
            <Rise i={1}>
              <TarjetaUrgencia
                titulo="Emergencias Pediátricas"
                sub="Bebés, niños y adolescentes"
                ext={emergencias.pediatricas}
                tono="rosa"
                icon={Baby}
              />
            </Rise>
          </div>

          <div className="aviso-911">
            <TriangleAlert size={22} />
            <p>
              Si la vida del paciente corre peligro inmediato o no puede trasladarlo de forma segura,
              llame al <strong>9-1-1</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="sx">
        <div className="container urg-split">
          <div>
            <SectionHead
              eyebrow="Signos de alarma"
              title="Acuda de inmediato si presenta…"
              desc="Esta lista es orientativa y no sustituye la valoración de un médico. Ante la duda, acuda o llame."
            />
            <ul className="signos">
              {SIGNOS.map((s) => (
                <li key={s}>
                  <span className="signo-dot" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <Rise>
            <div className="llevar-card">
              <h3>Qué traer a emergencias</h3>
              <p>Tenerlo a mano agiliza el registro y la atención.</p>
              <ul>
                {LLEVAR.map(({ icon: Icon, texto }) => (
                  <li key={texto}>
                    <span className="llevar-ic">
                      <Icon size={18} />
                    </span>
                    {texto}
                  </li>
                ))}
              </ul>
            </div>
          </Rise>
        </div>
      </section>

      <section className="sx sx-navy">
        <div className="container uci-band">
          <span className="uci-ic">
            <BedDouble size={30} />
          </span>
          <div>
            <h2>Unidad de Cuidados Intensivos</h2>
            <p>
              Para los pacientes que requieren vigilancia continua, contamos con una Unidad de Cuidados
              Intensivos con monitoreo permanente y atención especializada.
            </p>
          </div>
          <button className="btn btn-lima" onClick={() => onNavigate('servicios')}>
            Ver servicios
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="sx sx-mint">
        <div className="container">
          <SectionHead
            center
            eyebrow="Cómo llegar"
            title="Estamos en la Av. Rómulo Betancourt No. 515"
            desc={`${CMR.sector}, ${CMR.ciudad}.`}
          />
          <BloqueUbicacion />
        </div>
      </section>
    </>
  )
}
