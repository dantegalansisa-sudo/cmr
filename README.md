# CMR — Centro Médico Real · Portal del Paciente

Demo visual del ecosistema digital de **Centro Médico Real**: sitio público + portal del paciente.

> **Prototipo de demostración.** No tiene backend: todos los datos salen de `src/data/mockData.ts`.
> Los formularios no envían nada y los filtros de tablas son visuales.

## Cómo ejecutarlo

```bash
cd portal-cmr
npm install
npm run dev
```

Abre http://localhost:5173

Para generar la versión de producción:

```bash
npm run build     # salida en dist/
npm run preview
```

## Qué incluye

**Sitio público** — hero con estadísticas animadas y 5 secciones enlazadas desde el menú superior:
Servicios · Especialidades · Médicos · Centro Médico · Contacto.

**Portal del paciente** — 10 vistas accesibles desde la barra lateral:

| Vista | Contenido |
|---|---|
| Inicio | Resumen de salud, servicios destacados, integraciones y chat |
| Citas | Próximas / pasadas / canceladas + panel para agendar |
| Resultados | Tabla de estudios de imagen con estados e informes |
| Historia Clínica | Perfil clínico, línea de tiempo, alergias, medicamentos y vacunas |
| Facturación | KPIs, historial de facturas, métodos de pago y seguro |
| Mensajes | Bandeja de conversaciones con hilo de chat |
| Solicitudes | Trámites con estado y progreso |
| Documentos | Archivos por categoría con filtro |
| Prefacturación | Formulario de admisión previo a la visita (paso 1) |
| Configuración | Datos, seguridad, notificaciones y sesiones |

## Stack

- React + TypeScript + Vite
- Framer Motion para las animaciones
- `lucide-react` para los iconos
- **CSS vanilla** — sin Tailwind ni frameworks de estilo (`src/index.css`)

Sin router: la navegación es una máquina de estados con `useState` en `src/App.tsx`.

## Estructura

```
portal-cmr/
  src/
    App.tsx                 máquina de estados y cambio de vista
    index.css               tokens de diseño y todos los estilos
    data/mockData.ts        única fuente de datos
    components/             Header, Sidebar, Footer, PortalPage y animaciones
    views/                  una vista por pantalla
  public/images/            logo, hero, avatar y foto del edificio
```

Assets originales del cliente en la raíz del repositorio.
