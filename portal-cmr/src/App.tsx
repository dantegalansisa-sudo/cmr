import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Gate, { accesoConcedido } from './components/Gate'
import { AvisoFase2 } from './components/SitioUI'
import Inicio from './views/sitio/Inicio'
import Nosotros from './views/sitio/Nosotros'
import Servicios from './views/sitio/Servicios'
import Especialistas from './views/sitio/Especialistas'
import Emergencias from './views/sitio/Emergencias'
import Contacto from './views/sitio/Contacto'
import Dashboard from './views/Dashboard'
import Citas from './views/Citas'
import Resultados from './views/Resultados'
import HistoriaClinica from './views/HistoriaClinica'
import Facturacion from './views/Facturacion'
import Mensajes from './views/Mensajes'
import Solicitudes from './views/Solicitudes'
import Documentos from './views/Documentos'
import Prefacturacion from './views/Prefacturacion'
import Configuracion from './views/Configuracion'
import './sitio.css'
import { RUTAS, TITULOS, esPortal, vistaDe } from './rutas'
import type { View, Navegar } from './rutas'

// Muchas vistas importan estos tipos desde App
export type { View, Navegar }


export default function App() {
  const [acceso, setAcceso] = useState(accesoConcedido)
  const [view, setView] = useState<View>(() => vistaDe(window.location.pathname))
  const [search, setSearch] = useState(() => window.location.search)

  const navigate: Navegar = useCallback((v, query = '') => {
    window.history.pushState(null, '', RUTAS[v] + query)
    setView(v)
    setSearch(query)
    window.scrollTo({ top: 0 })
  }, [])

  // Botones atrás / adelante del navegador
  useEffect(() => {
    const alVolver = () => {
      setView(vistaDe(window.location.pathname))
      setSearch(window.location.search)
    }
    window.addEventListener('popstate', alVolver)
    return () => window.removeEventListener('popstate', alVolver)
  }, [])

  useEffect(() => {
    document.title = TITULOS[view] ?? 'Portal del Paciente · Centro Médico Real'
  }, [view])

  // Sin acceso no se monta nada del sitio
  if (!acceso) return <Gate onUnlock={() => setAcceso(true)} />

  return (
    <div className="app">
      <Header view={view} onNavigate={navigate} />

      <main>
        {esPortal(view) && <AvisoFase2 />}

        {view === 'landing' && <Inicio onNavigate={navigate} />}
        {view === 'nosotros' && <Nosotros onNavigate={navigate} />}
        {view === 'servicios' && <Servicios onNavigate={navigate} />}
        {view === 'especialistas' && <Especialistas key={search} />}
        {view === 'emergencias' && <Emergencias onNavigate={navigate} />}
        {view === 'contacto' && <Contacto />}

        {view === 'dashboard' && <Dashboard onNavigate={navigate} />}
        {view === 'citas' && <Citas onNavigate={navigate} />}
        {view === 'resultados' && <Resultados onNavigate={navigate} />}
        {view === 'historia' && <HistoriaClinica onNavigate={navigate} />}
        {view === 'facturacion' && <Facturacion onNavigate={navigate} />}
        {view === 'mensajes' && <Mensajes onNavigate={navigate} />}
        {view === 'solicitudes' && <Solicitudes onNavigate={navigate} />}
        {view === 'documentos' && <Documentos onNavigate={navigate} />}
        {view === 'prefacturacion' && <Prefacturacion onNavigate={navigate} />}
        {view === 'configuracion' && <Configuracion onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  )
}
