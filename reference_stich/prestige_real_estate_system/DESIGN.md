---
name: Prestige Real Estate System
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4b4731'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#7d775f'
  outline-variant: '#cec7aa'
  surface-tint: '#6a5f00'
  primary: '#6a5f00'
  on-primary: '#ffffff'
  primary-container: '#ffe500'
  on-primary-container: '#726600'
  inverse-primary: '#dec800'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#e4e4e4'
  on-tertiary-container: '#646566'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fee400'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-md:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Lato
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Lato
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Lato
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Lato
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a high-end, editorial aesthetic tailored for the luxury real estate market. It balances heritage with modernity, evoking feelings of exclusivity, trust, and meticulous attention to detail. 

The style is **Modern Corporate with Editorial influences**, utilizing expansive whitespace and a sophisticated "less is more" philosophy. It avoids trendy visual gimmicks in favor of timeless layouts that allow high-quality property photography to remain the focal point. The emotional response should be one of professional confidence and aspirational elegance.

## Colors
The palette is derived from a classic high-contrast scheme. 
- **Primary (Ray White Yellow):** Used sparingly as an accent for high-intent actions, notifications, or subtle branding moments. It should never overwhelm the page.
- **Secondary (Charcoal):** The foundation for typography, iconography, and structural elements. It provides a grounded, authoritative weight to the interface.
- **Tertiary (White):** The primary surface color, creating a clean, "gallery-like" environment.
- **Neutrals:** A range of cool grays used for borders, secondary text, and background subtle-shifts to maintain hierarchy without introducing new hues.

## Typography
The typographic strategy relies on the tension between the classic, high-contrast serifs of **Playfair Display** and the crisp, functional sans-serif of **Lato**. 

- **Headlines:** Use Playfair Display for all major headings and display moments. It signals luxury and editorial quality. 
- **Body & UI:** Lato provides excellent legibility for property descriptions, data points, and interface labels.
- **Hierarchy:** Use uppercase styling with generous letter-spacing for labels and small captions to evoke a premium "architectural" feel.

## Layout & Spacing
The layout uses a **Fixed Grid** system for desktop to maintain a controlled, high-end editorial feel, transitioning to a fluid model for mobile devices.

- **Desktop:** 12-column grid with a 1280px max-width. Margins are intentionally wide (64px) to create breathing room.
- **Spacing Rhythm:** Based on an 8px base unit. Component internal padding should favor generous vertical space to reinforce the premium positioning.
- **Alignment:** Consistent left-alignment for text blocks to maintain a clean vertical axis, mirroring high-end magazine layouts.

## Elevation & Depth
Depth is handled through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. This keeps the interface feeling "flat" and modern, similar to a physical printed document.

- **Level 0 (Base):** White (#FFFFFF) background.
- **Level 1 (Cards/Containers):** Subtle 1px borders using a light neutral (#E0E0E0).
- **Interactive Depth:** Only the most critical interactive elements (like primary search bars) may use a very soft, highly diffused ambient shadow (0px 4px 20px, 5% opacity Charcoal) to indicate "lift" during hover states.

## Shapes
To maintain a "crisp" and "sharp" professional aesthetic, the design system utilizes **Sharp (0px)** corners. This geometric precision communicates stability, architectural accuracy, and modern sophistication. 

Circular shapes are reserved strictly for specialized UI elements like profile avatars or specific status indicators to provide a clear visual contrast from the structural layout.

## Components
- **Buttons:** Primary buttons use a solid Charcoal background with White Lato Bold text. Secondary buttons use a Sharp outline with Charcoal text. The Yellow accent is reserved for "Action-Primary" moments like "Book Appraisal."
- **Inputs:** Simple bottom-border only or a full sharp-edged outline. Labels should use the `label-md` style (uppercase, spaced) positioned above the field.
- **Cards:** No shadows. Use a 1px Charcoal or Light Gray border. Property imagery should be full-bleed at the top of the card.
- **Chips/Badges:** Small, rectangular tags with sharp corners. Use Yellow background for "New" or "Just Listed" to draw immediate attention.
- **Lists:** Clean, divided by 1px horizontal lines with generous 24px padding between items.
- **Navigation:** Minimalist top-bar with generous spacing between links. Active states indicated by a subtle Charcoal underline rather than a color change.