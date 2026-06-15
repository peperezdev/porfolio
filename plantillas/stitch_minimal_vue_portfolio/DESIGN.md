---
name: Synthetix Bento Pro
colors:
  surface: '#13131b'
  surface-dim: '#13131b'
  surface-bright: '#393841'
  surface-container-lowest: '#0d0d15'
  surface-container-low: '#1b1b23'
  surface-container: '#1f1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e4e1ed'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e4e1ed'
  inverse-on-surface: '#303038'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#F43F5E'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#13131b'
  on-background: '#e4e1ed'
  surface-variant: '#34343d'
  surface-base: '#020617'
  surface-card: '#0F172A'
  surface-border: '#1E293B'
  text-strong: '#F8FAFC'
  text-muted: '#94A3B8'
  accent-indigo: '#6366F1'
  accent-cyan: '#22D3EE'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  bento-gap: 1rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 4rem
---

## Brand & Style

The design system is a high-performance framework tailored for a **Frontend AI Engineer** portfolio. It bridges the gap between sophisticated machine learning logic and elegant, user-centric interfaces. The brand personality is professional, technical, and meticulously clean, designed to appeal to CTOs and high-end technical recruiters.

The aesthetic follows a **Minimalist / Bento-box** movement. It relies on a rigorous grid structure to organize dense technical information—architecture diagrams, tech stacks, and project metrics—into digestible, modular "tiles." Visual interest is generated through geometric precision, selective glassmorphism, and a "dashboard" feel that suggests a high-stakes engineering environment.

- **Professionalism:** Communicated through strict alignment and a neutral-heavy palette.
- **Innovation:** Expressed through vibrant accent glows and glassmorphic depth.
- **Clarity:** Driven by high-quality typography and generous whitespace within a "grid-locked" layout.

## Colors

The design system defaults to a **Dark** mode to reflect a modern developer environment, while maintaining semantic compatibility for light mode accessibility via DaisyUI tokens.

- **Primary (Electric Indigo):** Reserved for core calls-to-action and active navigational states. It symbolizes the "intelligence" layer of the engineering work.
- **Secondary (Cyber Cyan):** Used for highlights, success states, and secondary data visualizations.
- **Surface & Background:** The foundation uses a "Slate" scale. Level 0 (Base) is a deep midnight slate, while Level 1 (Cards/Bento) uses a slightly elevated tone to create depth without relying on heavy shadows.
- **Text:** High contrast is maintained with near-white for headings and a muted slate-gray for long-form descriptions to reduce eye strain.

**DaisyUI Mapping:**
- `primary`: `#6366F1`
- `secondary`: `#22D3EE`
- `base-100`: `#020617` (Dark) / `#FFFFFF` (Light)
- `base-200`: `#0F172A` (Dark) / `#F1F5F9` (Light)

## Typography

The typography system is engineered for technical clarity.

1.  **Headlines (Geist):** Used for all major headings. It provides a sharp, geometric profile that feels contemporary and precise. Use tighter letter-spacing for large displays.
2.  **Body (Inter):** The workhorse for all descriptions, narratives, and content. It ensures maximum readability across different display densities.
3.  **Monospace (JetBrains Mono):** Crucial for the technical narrative. Used for labels, tags, code snippets, and UI metadata. 

Hierarchy is established not just by size, but by the shift in font-family—using Monospace labels to "bookend" sections of Inter body text.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with a strict **Bento-box** module implementation.

- **The Bento Logic:** Content is organized into cards that span a 12-column grid. On desktop, tiles should ideally span 4 columns (1/3), 6 columns (1/2), or 8 columns (2/3) to maintain a balanced rhythm.
- **Breakpoints:**
    - **Desktop (1280px+):** Max-width 1200px, 24px (1.5rem) bento-gap, 64px (4rem) outer margins.
    - **Tablet (768px - 1279px):** 100% width, 24px (1.5rem) outer margins.
    - **Mobile (< 768px):** Single-column stack, 16px (1rem) margins and gaps.
- **Incremental Rhythm:** All internal component padding and margins must be multiples of **4px**. Standard cards should use 24px or 32px padding to maintain a premium, airy feel.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional drop shadows, keeping the UI "flat" but multi-dimensional.

1.  **Level 0 (Base):** The dark Slate-950 background provides the canvas.
2.  **Level 1 (Bento Tiles):** A slightly lighter Slate-900 surface with a subtle 1px border (`Slate-800`). This creates a "panel" effect common in hardware dashboards.
3.  **Level 2 (Glass Overlays):** Navigation bars and dropdowns use a high-blur (`backdrop-filter: blur(16px)`) with a semi-transparent background (`Slate-900/70`) to suggest they float above the content.
4.  **Interaction Depth:** On hover, tiles do not "lift" with shadows; instead, they transition their border color to the Primary Indigo and may include a very subtle, soft glow (5% opacity indigo tint).

## Shapes

The shape language is modern and structured, using a consistent rounding logic to soften technical edges.

- **Bento Cards:** Use `rounded-xl` (1.5rem) to define the modular "tiles" and create a friendly, contemporary aesthetic.
- **Buttons & Inputs:** Use `rounded-lg` (1rem) for a comfortable, modern appearance that fits within the grid tiles.
- **Badges / Tech Chips:** Use full pill-shaped rounding (`999px`) to distinguish them as interactive or categorizing metadata elements against the rectangular background tiles.
- **Borders:** All borders across the system are a crisp 1px.

## Components

### Project Cards (Bento Tiles)
The core component. It features a Level 1 surface, 24px padding, and `rounded-xl` corners. On hover, the border transitions to `primary` (indigo) and the card scales 1.02x. Use `label-caps` for the category overline.

### Buttons
- **Primary:** Solid `Primary Indigo` with white text. Apply a subtle indigo glow on hover (`box-shadow: 0 0 20px rgba(99,102,241, 0.3)`).
- **Secondary/Ghost:** 1px border in `Slate-700` with `Slate-100` text.
- **Interaction:** Standard 200ms ease-in-out transition for all states.

### Technical Badges
Small, pill-shaped tags for tech stacks. Use `JetBrains Mono` at `code-sm` size. Backgrounds should be transparent with a 1px border matching the accent color (Indigo for tools, Cyan for AI/Logic).

### Navigation
A "floating" glass bar centered at the top. It uses the `Level 2` elevation style (high blur). Active links are indicated by a 4px `Primary` dot beneath the label rather than a background change.

### Input Fields
Inputs use the `Level 1` surface background with a bottom-only 2px border that highlights in `Cyan` when focused. Placeholders use `JetBrains Mono` to maintain the technical tone.