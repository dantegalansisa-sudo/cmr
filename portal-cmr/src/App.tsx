import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Landing from './views/Landing'
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

export type View =
  | 'landing'
  | 'dashboard'
  | 'citas'
  | 'resultados'
  | 'historia'
  | 'facturacion'
  | 'mensajes'
  | 'solicitudes'
  | 'documentos'
  | 'prefacturacion'
  | 'configuracion'

export default function App() {
  const [view, setView] = useState<View>('landing')

  const navigate = (v: View) => {
    setView(v)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /**
   * Los links del menú superior llevan a secciones del landing.
   * Si estamos dentro del portal, primero volvemos al landing y luego bajamos.
   */
  const scrollToSection = (id: string) => {
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    if (view !== 'landing') {
      setView('landing')
      window.setTimeout(go, 80)
    } else {
      go()
    }
  }

  // El cursor personalizado sólo vive en el landing
  useEffect(() => {
    if (view !== 'landing') document.body.classList.remove('has-custom-cursor')
  }, [view])

  return (
    <div className="app">
      {view === 'landing' && <CustomCursor />}

      <Header view={view} onNavigate={navigate} onScrollTo={scrollToSection} />

      <main>
        {view === 'landing' && <Landing onNavigate={navigate} />}
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

      <Footer />
    </div>
  )
}
