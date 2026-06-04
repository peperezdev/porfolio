---
name: Synthetix Engineering
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
  slate-900: '#0F172A'
  slate-950: '#020617'
  zinc-50: '#FAFAFA'
  zinc-100: '#F4F4F5'
  indigo-vibrant: '#6366F1'
  cyan-cyber: '#22D3EE'
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
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  bento-gap: 16px
---

## Brand & Style

The design system is built for a **Frontend AI Engineer** portfolio, targeting high-end tech recruiters and CTOs. The brand personality is professional, technical, and innovative, emphasizing "the bridge" between complex machine learning and elegant user interfaces.

The chosen style is **Minimalist / Bento-box Modern**. It utilizes a structured, grid-based layout to organize dense technical information into digestible, high-clarity modules. The visual language conveys precision through:
- **High-Density Information:** Using "Bento" blocks to separate architectural diagrams, stack badges, and project metrics.
- **Glassmorphism:** Selective use of backdrop blurs on navigation and hover states to create a sense of depth and modernity.
- **Technical Rigor:** Monospace accents and subtle grid-line aesthetics to evoke a developer-centric environment.

## Colors

This design system defaults to **Dark Mode** to align with the technical/engineer aesthetic, but provides a semantic bridge for light mode accessibility.

- **Primary (Electric Indigo):** Used for primary CTAs and active states. It represents the "AI intelligence" layer.
- **Secondary (Cyber Cyan):** Used for highlights, accents, and successful technical validations.
- **Neutral (Slate/Zinc):** The foundation. In dark mode, we use `Slate-950` for the background and `Slate-900` for surface containers. In light mode, these flip to `Zinc-50` and `Zinc-100` respectively.

**Semantic Tokens:**
- **Surface:** `Slate-900` (Dark) / `Zinc-100` (Light)
- **Border:** Low-opacity `Slate-700` to maintain a subtle "ghost" outline.
- **Text-Strong:** `White` / `Slate-950`
- **Text-Muted:** `Slate-400` / `Zinc-500`

## Typography

The typography strategy balances high-performance readability with a technical edge. 

1.  **Headlines (Geist):** A clean, modern sans-serif that feels engineered and precise. Use heavy weights with tight letter-spacing for a "tech-editorial" look.
2.  **Body (Inter):** The industry standard for clarity in SaaS and complex interfaces. Used for all long-form descriptions and project narratives.
3.  **Technical Details (JetBrains Mono):** Used for labels, tags, and snippets. This font reinforces the engineer's identity.

**Scale:**
Use `headline-xl` sparingly for Hero sections. Use `label-caps` for section overlines (e.g., "01 / ARCHITECTURE").

## Layout & Spacing

The layout follows a **Fluid Grid** model with a specific **Bento-box** implementation for content sections.

- **The Bento Grid:** Content is grouped into logical "tiles" using a 12-column grid. On desktop, cards may span 4, 6, or 8 columns. On mobile, all tiles stack to 12 columns wide.
- **Rhythm:** A 4px baseline shift is used. Most paddings and margins should be multiples of 8px (2 units).
- **Responsive Strategy:** 
    - **Desktop (1280px+):** Max-width 1200px, 24px gutters.
    - **Tablet (768px - 1279px):** 100% width, 24px margins.
    - **Mobile (< 768px):** 16px margins, single-column stack.

## Elevation & Depth

This system avoids heavy shadows in favor of **Tonal Layers** and **Glassmorphism**.

1.  **Layering:**
    - **Level 0 (Base):** `Slate-950`.
    - **Level 1 (Bento Tiles):** `Slate-900` with a 1px border of `Slate-800`.
    - **Level 2 (Active/Hover):** Background blur (12px) with a semi-transparent `Slate-800/50` fill.
2.  **Navigation:** The navbar is a "floating" glass element with `backdrop-filter: blur(16px)` and a subtle bottom border.
3.  **Shadows:** When necessary (e.g., modals), use a very large, soft indigo-tinted shadow: `0 20px 50px -12px rgba(99, 102, 241, 0.15)`.

## Shapes

The shape language is **Rounded**, reflecting a modern, approachable software aesthetic while maintaining structure.

- **Bento Cards:** Use `rounded-xl` (24px) to create a distinct modular feel.
- **Buttons & Inputs:** Use `rounded-lg` (16px) for a comfortable touch target.
- **Badges/Chips:** Use full pill-shaping (999px) for tech stack tags to contrast against the rectangular grid.
- **Borders:** All borders are consistent at 1px width.

## Components

### Project Cards
- **Base:** Level 1 Surface with 24px padding.
- **Hover:** The 1px border changes to `indigo-vibrant`. The card slightly scales (1.02x) and gains a subtle glassmorphic overlay.
- **Footer:** Display tech badges at the bottom-left and a "View Project" link with an arrow icon at the bottom-right.

### Technical Badges (Tech Stack)
- **Style:** Small, pill-shaped, using `JetBrains Mono`.
- **Colors:** Transparent background with a `1px` border of the accent color. Text color matches the accent. Use low-saturation indigo for "Tools" and vibrant cyan for "Core Logic/AI".

### Navigation
- **Architecture:** A centered, floating bar at the top or a fixed sidebar.
- **Effect:** High blur (20px), `slate-950/70` background. Active links are highlighted with a small `indigo-vibrant` dot below the text.

### Buttons
- **Primary:** Solid `indigo-vibrant` with white text. No shadow; use a glow effect on hover.
- **Secondary:** Ghost style (border only) with `zinc-100` text.
- **Interaction:** 150ms ease-in-out transition for all hover states.

### Input Fields (Contact/Search)
- **Style:** `Slate-900` background, no fill. Bottom-only border or full border with high-contrast focus state (Cyan).
- **Typography:** `Inter` for input, `JetBrains Mono` for placeholders to maintain technical feel.