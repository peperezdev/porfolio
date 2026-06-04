---
name: Synthetix Engineering
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#f0ecf9'
  surface-container-high: '#eae6f3'
  surface-container-highest: '#e4e1ee'
  on-surface: '#1b1b24'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f3effc'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4e45e0'
  primary: '#3526c9'
  on-primary: '#ffffff'
  primary-container: '#4f46e1'
  on-primary-container: '#d9d6ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#7d2f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a34000'
  on-tertiary-container: '#ffd0bc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3425c9'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e4e1ee'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  mono-code:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The visual identity of the design system is rooted in the precision and clarity required for high-stakes engineering environments. It targets developers and technical operators who value efficiency, legibility, and a "no-nonsense" interface. 

The aesthetic is a hybrid of **Minimalism** and **Corporate Modern**, leaning into a high-tech "dashboard" feel. By utilizing a high-contrast light mode with a desaturated neutral palette, the design system ensures that complex data remains the focal point. The interface should feel like a sophisticated instrument—stable, responsive, and meticulously organized. Heavy use of whitespace, strict alignment, and subtle tonal shifts replace decorative elements to create a sense of professional-grade reliability.

## Colors

The palette is anchored by a pure white background (`#ffffff`) to maximize clarity. Surfaces are defined by a strict "Saturation 0" approach for neutrals, using cool, soft grays (`#f8fafc`, `#f1f5f9`) to create hierarchical separation without introducing visual noise. 

- **Primary Accent (Indigo):** Reserved for primary actions, active states, and critical paths.
- **Secondary Accent (Sky Blue):** Used for informational elements, progress indicators, and secondary data visualizations.
- **Status Colors:** Standard engineering semantic colors (Success: Emerald, Warning: Amber, Error: Rose) should be used sparingly, ensuring they pop against the desaturated background.

## Typography

The design system utilizes **Geist** exclusively to maintain a technical, developer-centric atmosphere. Geist’s geometric precision and generous apertures ensure readability at small sizes, which is critical for dense engineering consoles.

Headlines use a tighter letter-spacing and heavier weights to establish a clear hierarchy. For technical data, logs, and addresses, a monospaced variant of the font should be used. Labels are often set in medium weight to distinguish them from standard body text. On mobile devices, large headlines scale down to prevent excessive line-breaking while maintaining the font's characteristic "sharp" profile.

## Layout & Spacing

The layout follows a **Fluid Grid** philosophy optimized for high-density information. A 12-column grid system is used for desktop layouts, while a 4-column grid is used for mobile. 

The spacing rhythm is based on a 4px/8px incremental scale. This mathematical approach ensures consistent alignment across complex components like nested data tables and multi-step forms. 
- **Desktop:** 24px gutters with 48px outer margins.
- **Mobile:** 16px gutters and margins to maximize screen real estate.
- **Component Padding:** Internal component padding should strictly adhere to the 8px (sm) and 16px (md) units to maintain the "grid-locked" engineering feel.

## Elevation & Depth

To maintain a clean, high-tech aesthetic, the design system minimizes the use of traditional shadows. Depth is primarily communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** Pure `#ffffff`.
- **Level 1 (Cards/Sections):** Subtle background shifts to `#f8fafc` or `#f1f5f9` with a 1px border of `#e2e8f0`.
- **Level 2 (Overlays/Modals):** These use a very soft, diffused ambient shadow (8% opacity, 12px blur) to indicate elevation above the primary plane.
- **Level 3 (Popovers):** Sharp 1px outlines with a slightly tighter shadow to suggest immediate interaction.

Avoid heavy blurs or colorful glows; the goal is to feel like physical sheets of paper or panels in a hardware rack.

## Shapes

The design system employs a "Rounded Eight" logic (8px/0.5rem base) to soften the technical edges just enough to feel modern and accessible without losing its professional rigor.

- **Standard Elements (Buttons, Inputs):** 8px (0.5rem) radius.
- **Large Containers (Cards, Modals):** 16px (1rem) radius.
- **Extra Large (Hero Sections):** 24px (1.5rem) radius.
- **Utility Items (Tags, Badges):** Can optionally use a full pill-shape for distinct visual categorization.

## Components

- **Buttons:** High-contrast primary buttons use the Indigo accent with white text. Secondary buttons use a white background with a 1px `#e2e8f0` border and `#0f172a` text. Ghost buttons are reserved for tertiary actions and use the Sky blue accent for text only.
- **Inputs:** Text fields feature a 1px border. When focused, the border transitions to the Indigo accent with a subtle 2px outer glow (ring) of the same color at 20% opacity.
- **Cards:** Engineering dashboards rely on "Stats Cards." These should have a subtle `#f8fafc` header area separated by a 1px horizontal rule, with the data payload in the white body area.
- **Data Tables:** Tables are the heart of the system. Use "Zebra Striping" with `#f8fafc` for alternating rows. Headers should be all-caps using the `label-md` style for maximum clarity.
- **Status Chips:** Use desaturated backgrounds with high-contrast text for status indicators (e.g., a "Success" chip uses a very pale green background with dark forest green text).
- **Code Blocks:** Displayed on `#f1f5f9` with syntax highlighting optimized for light-mode legibility.