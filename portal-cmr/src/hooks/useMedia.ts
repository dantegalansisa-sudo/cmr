import { useEffect, useState } from 'react'

/** true mientras la media query se cumpla; se actualiza al redimensionar */
export function useMedia(query: string) {
  const [coincide, setCoincide] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const alCambiar = () => setCoincide(mq.matches)
    alCambiar()
    mq.addEventListener('change', alCambiar)
    return () => mq.removeEventListener('change', alCambiar)
  }, [query])

  return coincide
}

/** Escritorio con espacio suficiente para las secciones ancladas al scroll */
export const ESCRITORIO = '(min-width: 900px) and (min-height: 600px)'
