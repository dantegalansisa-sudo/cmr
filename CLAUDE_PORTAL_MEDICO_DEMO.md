# CLAUDE.md — Portal Médico Demo (NEXIX Tech Studio)

> **PROJECT TYPE:** Visual demo / sales prototype. NOT a production app.
> **GOAL:** Reproduce the visual language of the 3 reference screenshots provided by the client with maximum fidelity, using static mock data. Nothing needs a backend.

---

## 0. LOAD THE TASTE SKILL FIRST

Before writing any code, load and read:
`https://github.com/Leonxlnx/taste-skill`

**Scope of the Taste Skill in this project:**
- Apply levels 1–5 **only inside the Landing view** (hero + services grid + stats).
- The **Portal views (Dashboard, Prefacturación, Resultados) must NOT use CustomCursor or MagneticButton.** A dashboard with a magnetic cursor feels broken. Portal views get only subtle `whileInView` fade-ups on cards (stagger 0.06s).
- `AnimatedCounter` is used in the hero stats row only.

---

## 1. STACK — NON-NEGOTIABLE

- React 18 + TypeScript + Vite
- Framer Motion (animations)
- **Vanilla CSS only. Tailwind is strictly prohibited.**
- `lucide-react` for ALL icons — do not create custom SVG icons
- No React Router. No backend. No forms that submit. No localStorage.

**View switching:** a single `useState<'landing' | 'dashboard' | 'prefacturacion' | 'resultados'>` in `App.tsx`. Sidebar links and header links change that state. That's the whole navigation system.

---

## 2. FILE STRUCTURE — DO NOT EXCEED THIS

```
src/
  App.tsx                    // state machine + view switch
  index.css                  // ALL global styles, tokens, layout
  data/mockData.ts           // ALL fake data, single source
  components/
    Header.tsx               // top nav — shared across all views
    Sidebar.tsx              // dark portal sidebar — shared
    Footer.tsx               // dark gradient footer — shared
    CustomCursor.tsx         // Taste Skill (landing only)
    RevealText.tsx           // Taste Skill
    MagneticButton.tsx       // Taste Skill
    AnimatedCounter.tsx      // Taste Skill
  views/
    Landing.tsx              // Reference image 1 (top half)
    Dashboard.tsx            // Reference image 1 (bottom half)
    Prefacturacion.tsx       // Reference image 2
    Resultados.tsx           // Reference image 3
```

Do not create one file per card. Sub-components live inside their view file.

---

## 3. BRAND

- **Name:** `MEDIX CONNECT`
- **Wordmark:** logo image at `/public/images/logo.png` (provided). Height 40px in header.
- **Tagline (footer):** `Tecnología que conecta, salud que transforma.`
- **Center name used in mock data:** `Centro Médico Demo`

---

## 4. DESIGN TOKENS — EXACT VALUES

```css
:root {
  --navy:        #0A2540;  /* sidebar, footer, dark buttons */
  --navy-deep:   #071C30;
  --blue:        #1E5EFF;  /* links, active states, primary icons */
  --blue-soft:   #EFF4FF;  /* icon tile backgrounds */
  --green:       #16A34A;  /* primary CTA, success states, chat header */
  --green-soft:  #EAF7EF;
  --amber:       #F59E0B;  /* "en edición" status */
  --amber-soft:  #FEF6E7;
  --bg:          #F5F8FC;  /* page background */
  --card:        #FFFFFF;
  --border:      #E4EAF2;
  --text:        #0F172A;
  --text-mute:   #64748B;

  --radius:      12px;
  --radius-lg:   16px;
  --shadow-sm:   0 1px 3px rgba(15,23,42,0.05);
  --shadow-md:   0 4px 16px rgba(15,23,42,0.07);
}
```

**Typography:** Inter (Google Fonts), weights 400 / 500 / 600 / 700.
- Hero H1: `clamp(44px, 5vw, 64px)`, weight 700, letter-spacing `-0.02em`
- View title (H1 inside portal): 32px / 700
- Section title: 20px / 600
- Card label: 14px / 500, color `--text-mute`
- Body: 15px / 400, line-height 1.6

**Critical visual rule:** this reference is *clean SaaS*, not editorial. Borders are `1px solid var(--border)`, shadows are almost invisible. **Do NOT add dramatic shadows, glows, gradients on cards, or heavy hover lifts inside portal views.** Hover on a portal card = border turns `--blue` + shadow goes to `--shadow-md`. Nothing more.

**Layout:**
- Content max-width `1440px`, padding `0 32px`
- Portal grid gap: `20px`
- Card internal padding: `20px 24px`

---

## 5. SHARED COMPONENTS

### Header (all views)
White, `height: 76px`, `border-bottom: 1px solid var(--border)`, sticky top.
- Left: logo image
- Center: nav links — `Inicio · Servicios · Especialidades · Médicos · Resultados · Centro Médico · Contacto`. Active link has a 2px `--blue` underline sitting on the header's bottom border.
- Right: two buttons —
  - `Portal del Paciente` → pill, `background: var(--navy)`, white text, `UserRound` icon
  - `Agendar Cita` → pill, `background: var(--green)`, white text, `CalendarPlus` icon + `ArrowRight`

### Sidebar (portal views only)
Dark card, `background: var(--navy)`, `border-radius: var(--radius-lg)`, width `240px`, **not full-height — it is a floating panel with margin**, exactly like the reference.
- Top: 44px circle avatar (`/public/images/avatar.png`) + `Hola, Juan Carlos` (15px/600 white) + `Bienvenido a tu portal` (12px, `rgba(255,255,255,0.55)`)
- Items: `Inicio · Citas · Resultados · Historia Clínica · Facturación · Mensajes · Solicitudes · Documentos · Prefacturación · Configuración`
- Icons: `Home, Calendar, FlaskConical, FileText, Receipt, Mail, ClipboardList, File, FileCheck, Settings`
- Inactive: `rgba(255,255,255,0.7)`. Active: `background: var(--blue)`, white, `border-radius: 8px`
- Badges: `Mensajes` = 3, `Solicitudes` = 2 → small green pill, white text, 11px
- Bottom (separated by 1px `rgba(255,255,255,0.12)` divider): `Cerrar sesión` with `LogOut` icon

### Footer (all views)
Full-bleed bar, `linear-gradient(90deg, var(--navy) 0%, var(--navy) 55%, var(--green) 100%)`, padding `36px 0`.
4 columns, each = icon in a translucent circle + title (14px/600 white) + 2 lines of 12px `rgba(255,255,255,0.7)`:
1. `Seguridad y Confidencialidad` / Tus datos están protegidos con tecnología de última generación.
2. `Acceso 24/7` / Disponible desde cualquier dispositivo, cuando lo necesites.
3. `Experiencia Integrada` / Todos nuestros servicios conectados para tu comodidad.
4. Logo (white version) + tagline.

---

## 6. VIEW 1 — LANDING (reference image 1, top half)

Two-column hero, background `linear-gradient(160deg, #FFFFFF 0%, #EEF4FF 60%, #E8F1FF 100%)`, padding `80px 0 64px`.

**Left column (55%):**
- H1 `Centro Médico Demo` — wrap in `<RevealText tag="h1">`
- Subtitle row: 8px green dot + `Conectamos tu salud, simplificamos tu vida` (20px/600, `--navy`)
- Paragraph (17px, `--text-mute`, max-width 460px): `MEDIX Connect es el ecosistema digital que integra todos los servicios de salud para ti en un solo lugar.`
- Two buttons side by side, both `<MagneticButton>`:
  - `Agendar Cita` — solid `--navy`, white text
  - `Portal del Paciente` — white bg, `1px solid var(--border)`, `--navy` text, green user icon → **onClick sets view to `dashboard`**
- Stats row, 4 items with icon + `<AnimatedCounter>`:
  `+15 Especialidades` · `+50 Médicos` · `+10K Pacientes` · `24/7 Atención en línea`
  (icons: `HeartPulse, MapPin, Users, Clock` — 20px, `--blue`)

**Right column (45%):**
- Hero image at `/public/images/doctora-hero.png`, aligned right, bottom-anchored.
- **Behind and to the left of her:** a decorative circular badge — 200px circle, `background: rgba(255,255,255,0.75)`, `backdrop-filter: blur(8px)`, containing a `HeartPulse` icon (blue, 32px) above the text `Tu salud conectada siempre` (16px/600, `--navy`, centered, 3 lines).
- Around that circle: two SVG arcs (`stroke: var(--blue)` and `var(--green)`, `stroke-width: 2`, `stroke-dasharray`, opacity 0.6) rotating slowly — `animation: spin 18s linear infinite` and a second one reversed at 24s.
- Apply the Taste Skill hero scroll-zoom to the image.

**Floating card — "Acceso Rápido"** (top-right, overlapping the hero, white, `--shadow-md`, width 290px):
Title `Acceso Rápido` with a small blue diamond icon. Then 4 rows, each = 36px rounded icon tile (`--blue-soft` bg, blue icon) + title (14px/600) + subtitle (12px `--text-mute`):
- `Agendar Cita` / Reserva tu consulta — `CalendarDays`
- `Resultados en Línea` / Laboratorio e imágenes — `FlaskConical`
- `Historia Clínica` / Consulta tu información — `FileText`
- `Prefacturación` / Ahorra tiempo en tu visita — `FileCheck`
Footer link: `Ver todas las opciones →` in `--blue`, 13px/600.

---

## 7. VIEW 2 — DASHBOARD (reference image 1, bottom half)

Layout: `grid-template-columns: 240px 1fr 290px; gap: 20px;` — Sidebar / main column / right rail.

### Main column

**A. `Tu Resumen de Salud`** — section title + `Ver todo →` link on the right.
4 cards in a row. Each card has a **tinted background and matching border**, a 40px rounded icon tile, and a full-width outlined button at the bottom:

| Card | Tint | Icon | Content | Button |
|---|---|---|---|---|
| Próxima Cita | `--blue-soft` | `CalendarDays` | `Cardiología` (15/600) · `Dr. Carlos Méndez` · `24 Mayo 2024 - 10:30 AM` · `Centro Médico Demo` (all 13px mute) | `Ver Detalles` |
| Resultados Pendientes | `--green-soft` | `FlaskConical` | big `2` (34px/700) + `Estudios listos para ver` | `Ver Resultados` |
| Balance Pendiente | `--amber-soft` | `Wallet` | big `RD$2,450.00` (26px/700) + `Último pago: 10 Abr 2024` | `Pagar Ahora` |
| Mensajes No Leídos | `#F5F1FF` | `Mail` | big `3` + `Mensajes nuevos` | `Ver Mensajes` |

Buttons: white bg, `1px solid var(--border)`, text colored to match the card's accent, 13px/600, full width, height 36px.

**B. `Servicios Destacados`** — 6 cards in a row (`repeat(6, 1fr)`), white, border, centered-left content:
36px icon tile + label in 2 lines (14px/600) + `Ver más →` at the bottom in `--blue` 12px.
Items: `Consultas Médicas` (Stethoscope) · `Laboratorio Clínico` (FlaskConical) · `Imágenes Diagnósticas` (ScanLine) · `Medicina Preventiva` (HeartPulse) · `Vacunación` (Syringe) · `Procedimientos` (BriefcaseMedical)

**C. Two-column block:**
- Left — `Integración de Sistemas` + paragraph + 6 icon tiles in a row, each = 44px rounded square (`--blue-soft`) + label (12px/600) + sublabel (11px mute): `ERP`/Administrativo · `CRM`/Pacientes · `LIS`/Laboratorio · `RIS / PACS`/Imágenes · `Facturación`/Electrónica · `Inventario`/Médico
- Right — `Canales de Atención` + paragraph + 4 tiles: `Chat en Línea`/Atención inmediata · `WhatsApp`/809-123-4567 · `Llamada`/809-123-4567 · `Correo`/info@cmdemo.com

### Right rail (290px)

**1. Center card** — image `/public/images/edificio.jpg` (160px tall, `object-fit: cover`, rounded top). Above the image: `Centro Médico Demo` (17px/700) + `Cuidamos de ti y tu familia` (13px mute). Below: a `--green-soft` strip with a green `CircleCheck` + `Estado del Sistema` / `Todos los sistemas operativos` + `→` on the right.

**2. Chat widget** — white card, `--shadow-md`:
- Header: `background: var(--green)`, white, `Chat en Línea` (15/600) + a small pulsing dot + `En línea` (11px) + `MoreVertical` icon right.
- Body (`--bg` background, padding 16px): 28px avatar + message bubble (white, radius 12px with one square corner): `¡Hola! Soy Laura, asistente virtual del Centro Médico Demo. ¿En qué puedo ayudarte hoy?` + timestamp `10:30 AM` (11px mute).
- Quick-reply chips: `Agendar cita` · `Resultados` · `Información general` — white bg, `1px solid var(--blue)`, `--blue` text, 12px, radius 999px, wrapped.
- Input row: text field placeholder `Escribe tu mensaje...` + circular green send button (`Send` icon). **Non-functional — it does not send anything.**

---

## 8. VIEW 3 — PREFACTURACIÓN (reference image 2)

**IMPORTANT: only step 1 is built.** The stepper is visual; steps 2–5 are never reachable. `Guardar y Continuar` does nothing (or shows a small toast `Guardado`). Do not build multi-step state.

Layout: `grid-template-columns: 240px 1fr 380px;`

**Header block:**
- Breadcrumb: `Prefacturación  ›  Nuevo Proceso` (13px, first part `--blue`)
- H1 `Proceso de Prefacturación`
- Subline with blue `ShieldCheck`: `Completa la información requerida antes de tu visita para agilizar tu atención`
- Top-right info card (`--blue-soft`, radius 12px, 320px): clock icon + `¿Por qué prefacturar?` (14/600) + `Ahorra tiempo en tu visita, evita filas y asegura que tengamos toda tu información.` (12px mute)

**Stepper** — white card, 5 items separated by dotted 1px lines. Each = 32px numbered circle + title (13/600) + subtitle (11px mute).
Step 1 circle: `--navy` filled, white number. Steps 2–5: `--bg` fill, `1px solid var(--border)`, `--text-mute` number.
1. `Información Personal` / Tus datos básicos
2. `Seguros y Coberturas` / Información del seguro
3. `Servicios a Realizar` / Procedimientos y exámenes
4. `Documentos y Consentimientos` / Firmas y autorizaciones
5. `Revisión y Confirmación` / Verifica y envía

**Form card** — white. Header = 40px outlined `UserRound` icon + `Información Personal` (20/600) + `Actualiza tus datos personales para continuar` (13px mute).
Two-column grid (`gap: 20px 24px`). All inputs: height 44px, radius 8px, `1px solid var(--border)`, 14px, **pre-filled with the values below**, focus state = `--blue` border:

| Field | Type | Value |
|---|---|---|
| Nombres | text | Juan Carlos |
| Apellidos | text | Méndez Rodríguez |
| Tipo de Documento | select | Cédula de Identidad |
| Número de Documento | text | 001-1234567-8 |
| Fecha de Nacimiento | date-styled | 15/06/1990 |
| Género | select | Masculino |
| Teléfono Móvil | text w/ 🇩🇴 flag prefix | (809) 123-4567 |
| Correo Electrónico | email | juan.mendez@email.com |
| Dirección | text, **full width** | Av. Winston Churchill #123, Santo Domingo, RD |

Bottom row: left = green strip (`--green-soft`, radius 8px) with `ShieldCheck` + `Tu información está protegida` (13/600) / `Utilizamos encriptación de nivel bancario para proteger tus datos personales.` (12px). Right = `Guardar y Continuar →` button, `--navy`, white.

**Right rail — `Resumen de Prefacturación`** (white card, `CalendarCheck` icon in title):
5 rows mirroring the stepper. Row 1 is highlighted: `--blue-soft` bg, `3px solid var(--blue)` left border, and a blue pill `En progreso`. Rows 2–5: plain, grey pill `Pendiente`.

**Right rail — `¿Necesitas ayuda?`** card: `Nuestro equipo está disponible para asistirte` + 3 tiles in a row (`Chat en Línea`/Atención inmediata · `WhatsApp`/809-123-4567 · `Llamada`/809-123-4567).

**Bottom strip** (white card, full width under the form): 4 benefit items in a row, each = 48px soft-tinted circle icon + title (14/600) + 2 lines (12px mute):
`Ahorra Tiempo` / Reduce tu tiempo de espera en el centro médico ·
`Proceso Ágil` / Completa todo antes de tu visita ·
`Información Segura` / Tus datos están protegidos con encriptación avanzada ·
`Mejor Experiencia` / Atención más rápida y personalizada

---

## 9. VIEW 4 — RESULTADOS / IMÁGENES (reference image 3)

Layout: `grid-template-columns: 240px 1fr;`

**Sidebar difference:** `Resultados` is expanded — it shows a `ChevronDown` and two sub-items indented with small circle bullets: `Laboratorio Clínico` (hollow bullet) and `Imágenes e Informes` (filled green bullet = active).

**Header:** breadcrumb `Resultados › Imágenes e Informes` · H1 `Mis Estudios de Imágenes e Informes` · subtitle `Consulta tus estudios de diagnóstico por imágenes y accede a tus informes.` · top-right `--blue-soft` card with `ShieldCheck` + `Tu información está segura` / `Utilizamos encriptación de nivel bancario para proteger tus datos de salud.`

**Filter bar** — white card, single row, all controls **visual only, they filter nothing**:
`Tipo de estudio` select (value `Todos`) · `Fecha desde` (placeholder `Seleccione`, calendar icon) · `Fecha hasta` (same) · segmented pills `7 días` `30 días` `3 meses` `6 meses` (last one active: `--blue-soft` bg, `--blue` border and text) · right-aligned `Exportar historial` button with `Download` icon.

**Table** — white card, `border-radius: var(--radius-lg)`, `overflow: hidden`.
Header row: `background: var(--bg)`, 13px/600 `--text-mute`, uppercase off.
Columns: `Estudio` · `Fecha del Estudio ↓` (sorted, arrow visible) · `Tipo de Estudio` · `Médico Solicitante` · `Estado del Informe` · `Acciones`

**Thumbnails:** 64×56px, `border-radius: 8px`, dark background. Generate these as **inline SVG placeholders** — black/dark-grey background with light-grey abstract shapes suggesting each scan type (ribcage arcs, skull outline, joint shape, fan-shaped ultrasound cone, etc.). Do NOT look for real medical images.

Rows (build exactly these 6, from `mockData.ts`):

| Estudio | Código / Centro | Fecha | Tipo | Médico | Estado |
|---|---|---|---|---|---|
| Radiografía de Tórax | EST-2024-000987 / Hospital Central | 15 Mayo 2024 · 09:30 AM | Radiografía | Dr. Carlos Mendez — Neumología | **En edición** |
| Tomografía de Tórax | EST-2024-000876 / Centro Médico Demo | 10 Mayo 2024 · 02:15 PM | Tomografía | Dra. Ana Rodríguez — Neumología | Disponible |
| Resonancia de Rodilla | EST-2024-000765 / Centro Médico Demo | 28 Abril 2024 · 11:45 AM | Resonancia Magnética | Dr. Luis Fernández — Traumatología | Disponible |
| Ultrasonido Abdominal | EST-2024-000654 / Hospital Central | 12 Abril 2024 · 08:20 AM | Ultrasonido | Dra. María Gómez — Gastroenterología | Disponible |
| Mamografía Bilateral | EST-2024-000543 / Centro Médico Demo | 05 Marzo 2024 · 10:10 AM | Mamografía | Dra. Laura Sánchez — Ginecología | Disponible |
| Tomografía Cerebral | EST-2023-000432 / Hospital Central | 20 Noviembre 2023 · 03:30 PM | Tomografía | Dr. Pedro Ramírez — Neurología | Disponible |

Estudio cell = thumbnail + name (14/600 `--text`) + code (12px `--blue`) + center (12px mute).
Fecha cell = small calendar icon + date (13/500) + time below (12px mute).

**Status badges** (rounded 8px, padding `6px 12px`, two lines):
- Disponible → `--green-soft` bg, `CircleCheck` icon, `Resultado disponible` (12/600 green) / `Informe finalizado` (11px)
- En edición → `--amber-soft` bg, `CircleAlert` icon, `Resultados en edición` (12/600 amber) / `En proceso de revisión` (11px)

**Acciones** = two ghost buttons side by side, `--blue` text, 12px/600: `Ver resultado` (Eye icon) · `Descargar` (Download icon). Neither does anything.

**Pagination footer:** left `Mostrando 1 a 6 de 12 estudios` (13px mute) · center pages `1` (active, `--blue` filled) `2` `3` `›` `»` · right `Mostrar [6 por página ▾]`.

---

## 10. ASSETS (already in `/public/images/`)

- `logo.png` — brand wordmark
- `doctora-hero.png` — hero doctor, transparent background
- `avatar.png` — chat/sidebar avatar
- `edificio.jpg` — medical center building *(if missing, use a `--navy` → `--blue` gradient block with a `Building2` icon, do not break the build)*

**If any asset is missing, render a neutral placeholder. Never stop the build over a missing image.**

---

## 11. RESPONSIVE

Desktop-first (this is a demo shown on a laptop). Minimum viable breakpoints:
- `<1200px` — right rail drops below the main column
- `<900px` — sidebar becomes a horizontal scrollable icon bar at the top; hero goes single column; the results table scrolls horizontally inside its card
- `<768px` — CustomCursor disabled (already in the Taste Skill)

Do not spend effort perfecting mobile. It must not look broken, that's all.

---

## 12. MANDATORY CHECKPOINT

**Build the Landing hero ONLY. Then stop and report.**
Do not build the dashboard, prefacturación, or resultados views until the hero screenshot is approved.

When you stop, report: fonts loaded, exact colors used, and whether the hero image rendered correctly.

---

## 13. FINAL CHECKLIST

- [ ] Hero H1 uses `RevealText`; hero CTAs use `MagneticButton`
- [ ] Stats use `AnimatedCounter`
- [ ] `Portal del Paciente` button switches the view to the dashboard
- [ ] CustomCursor active on Landing, **disabled on portal views**
- [ ] All icons come from `lucide-react`
- [ ] No Tailwind anywhere; no React Router; no localStorage
- [ ] All data comes from `mockData.ts`
- [ ] Portal cards have flat, minimal shadows — no glow, no heavy lift
- [ ] `npm run build` passes with zero TypeScript errors
