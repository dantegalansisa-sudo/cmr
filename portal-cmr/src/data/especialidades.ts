import {
  Activity,
  Apple,
  Baby,
  Bean,
  Bone,
  Brain,
  Droplet,
  Droplets,
  Ear,
  Eye,
  Flower2,
  Hand,
  Heart,
  HeartPulse,
  Ribbon,
  Scissors,
  ShieldPlus,
  Smile,
  Sparkle,
  Sparkles,
  Stethoscope,
  Waves,
  Wind,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { medicos } from './medicos'

/** Tonos de color definidos en sitio.css como .t-<tono> */
export type Tono = 'azul' | 'teal' | 'lima' | 'rojo' | 'violeta' | 'ambar' | 'rosa' | 'indigo'

type Meta = { icon: LucideIcon; tono: Tono }

// Las especialidades pediátricas comparten el tono rosa para reconocerlas de un vistazo
const META: Record<string, Meta> = {
  Cardiología: { icon: HeartPulse, tono: 'rojo' },
  'Cardiología Pediátrica': { icon: HeartPulse, tono: 'rosa' },
  'Cirugía Cardiovascular': { icon: Heart, tono: 'rojo' },
  'Cirugía General': { icon: Scissors, tono: 'indigo' },
  'Cirugía Oncológica': { icon: Ribbon, tono: 'violeta' },
  'Cirugía Pediátrica': { icon: Scissors, tono: 'rosa' },
  'Cirugía Plástica': { icon: Sparkle, tono: 'violeta' },
  Coloproctología: { icon: Activity, tono: 'indigo' },
  Dermatología: { icon: Sparkles, tono: 'ambar' },
  'Diabetología y Nutrición': { icon: Apple, tono: 'lima' },
  Endocrinología: { icon: Droplet, tono: 'teal' },
  'Endocrinología Pediátrica': { icon: Droplet, tono: 'rosa' },
  Gastroenterología: { icon: Activity, tono: 'ambar' },
  'Gastroenterología Pediátrica': { icon: Activity, tono: 'rosa' },
  'Ginecología y Obstetricia': { icon: Flower2, tono: 'rosa' },
  Hematología: { icon: Droplets, tono: 'rojo' },
  'Hematología Pediátrica': { icon: Droplets, tono: 'rosa' },
  Infectología: { icon: ShieldPlus, tono: 'teal' },
  'Medicina Interna': { icon: Stethoscope, tono: 'azul' },
  Nefrología: { icon: Bean, tono: 'teal' },
  Neumología: { icon: Wind, tono: 'azul' },
  'Neumología Pediátrica': { icon: Wind, tono: 'rosa' },
  Neurocirugía: { icon: Brain, tono: 'violeta' },
  Neurología: { icon: Brain, tono: 'indigo' },
  'Nutrición Pediátrica': { icon: Apple, tono: 'rosa' },
  'Odontología y Maxilofacial': { icon: Smile, tono: 'azul' },
  Oftalmología: { icon: Eye, tono: 'teal' },
  'Ortopedia y Traumatología': { icon: Bone, tono: 'ambar' },
  Otorrinolaringología: { icon: Ear, tono: 'lima' },
  Pediatría: { icon: Baby, tono: 'rosa' },
  Reumatología: { icon: Hand, tono: 'ambar' },
  Urología: { icon: Waves, tono: 'azul' },
}

export function metaDe(especialidad: string): Meta {
  return META[especialidad] ?? { icon: Stethoscope, tono: 'azul' }
}

/** Minúsculas y sin acentos, para buscar sin que importe cómo se escriba */
export function normalizar(s: string) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
}

export type Especialidad = Meta & { nombre: string; total: number }

const conteo = new Map<string, number>()
for (const m of medicos) conteo.set(m.especialidad, (conteo.get(m.especialidad) ?? 0) + 1)

/** Especialidades con al menos un médico, en orden alfabético */
export const especialidades: Especialidad[] = [...conteo.entries()]
  .map(([nombre, total]) => ({ nombre, total, ...metaDe(nombre) }))
  .sort((a, b) => normalizar(a.nombre).localeCompare(normalizar(b.nombre)))

/** Las de más médicos primero: para destacar en el inicio */
export const especialidadesDestacadas = [...especialidades].sort((a, b) => b.total - a.total)

export const totalMedicos = medicos.length
export const totalEspecialidades = especialidades.length

export function iniciales(nombre: string) {
  const partes = nombre.split(' ').filter(Boolean)
  const primera = partes[0]?.[0] ?? ''
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : ''
  return (primera + ultima).toUpperCase()
}
