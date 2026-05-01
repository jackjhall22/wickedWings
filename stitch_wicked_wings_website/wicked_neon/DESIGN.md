---
name: Wicked Neon
colors:
  surface: '#111316'
  surface-dim: '#111316'
  surface-bright: '#37393c'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#e6beb2'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#ad897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59e'
  primary: '#ffb59e'
  on-primary: '#5e1700'
  primary-container: '#ff571a'
  on-primary-container: '#521300'
  inverse-primary: '#ae3200'
  secondary: '#d7ffc5'
  on-secondary: '#053900'
  secondary-container: '#2ff801'
  on-secondary-container: '#0f6d00'
  tertiary: '#ffb3b2'
  on-tertiary: '#680012'
  tertiary-container: '#ff525c'
  on-tertiary-container: '#5b000f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#852400'
  secondary-fixed: '#79ff5b'
  secondary-fixed-dim: '#2ae500'
  on-secondary-fixed: '#022100'
  on-secondary-fixed-variant: '#095300'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b2'
  on-tertiary-fixed: '#410008'
  on-tertiary-fixed-variant: '#92001e'
  background: '#111316'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: beVietnamPro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: beVietnamPro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The brand personality is high-octane, uninhibited, and electric. It captures the raw energy of a Saturday night game—crowded, loud, and immersive. This design system moves away from the polite aesthetics of standard dining and embraces a **High-Contrast / Bold** style with a hint of **Modern Brutalism**.

The visual language is defined by dark, atmospheric backgrounds that allow neon accents to "pop" like physical signage. It aims to evoke the feeling of walking into a dimly lit bar where the only light comes from the glow of big-screen TVs and neon beer signs. The target audience is local sports fans and social diners looking for a premium but approachable "edge."

## Colors

The palette is anchored in a deep, nocturnal foundation. **#0A0A0B** serves as the primary canvas, creating an "infinite" depth common in high-end dark mode interfaces.

*   **Primary (Wicked Orange):** A high-vibrancy neon orange inspired by the core of the exterior signage. Used for primary calls to action and branding.
*   **Secondary (Electric Green):** A sharp contrast color used for "Live" status indicators, available event slots, or vegetarian menu highlights.
*   **Tertiary (Signal Red):** Reserved for urgent alerts, heat-levels on the menu, and "Book Now" highlights.
*   **Neutral:** We utilize the brand's extracted **#1C1E21** for containers and cards to provide a subtle lift from the pure black background, ensuring hierarchy without losing the atmospheric mood.

## Typography

This system uses a high-impact typographic pairing to balance "Wicked" energy with readable utility.

*   **Space Grotesk** is the voice of the brand. Its geometric, slightly technical quirks mirror the angularity of the "Wicked Wings" logo. It is used for all headings and navigational elements.
*   **beVietnamPro** provides a warm, approachable contrast for body text. It is highly legible under the low-light conditions of a dark-mode interface, ensuring that menu descriptions and event details are easily digestible.

Headlines should use tight tracking (letter spacing) to feel compact and aggressive, while body text uses generous line heights to prevent eye fatigue.

## Layout & Spacing

The layout employs a **Fluid Grid** system designed to feel expansive on desktop and punchy on mobile. 

*   **Grid:** A 12-column system for desktop, collapsing to 4 columns on mobile.
*   **Rhythm:** An 8px base unit drives all spacing.
*   **Density:** Sections should feel "full" but organized. Use **lg** (48px) spacing between major content blocks like "The Menu" and "Upcoming Games" to create a distinct rhythm.
*   **Gutter:** A consistent 24px gutter ensures that even with high-contrast borders, the elements have enough negative space to remain distinct.

## Elevation & Depth

In this dark-mode environment, depth is created through **Tonal Layers** and **Glow Effects** rather than traditional shadows.

1.  **Base Layer:** The deepest black (#0A0A0B).
2.  **Surface Layer:** Cards and containers use #1C1E21 with a subtle 1px border of #FFFFFF (10% opacity) to define edges.
3.  **Active State (Glow):** When an element is focused or active, it emits a soft outer glow in the primary color (Neon Orange). This mimics the lighting of a neon sign against a dark wall.
4.  **Glassmorphism:** Navigation bars and floating headers use a backdrop-blur (20px) with a semi-transparent dark fill to maintain context of the background imagery while scrolling.

## Shapes

The shape language is **Soft (0.25rem)**. While the brand is energetic and "wicked," the UI elements should feel modern and professional. 

*   **Standard Corners:** Buttons and input fields use a 4px radius. This keeps the look sharp and impactful without being dangerously "pointy."
*   **Container Corners:** Larger cards (e.g., featured menu items) can scale up to 8px (rounded-lg) to feel more substantial.
*   **Iconography:** Use thick-stroke, linear icons with slightly rounded caps to match the stroke weight of the body font.

## Components

### Buttons
Primary buttons are solid **Wicked Orange** with black text for maximum contrast. Secondary buttons use a "Ghost" style: a transparent background with a 2px Neon Orange border and white text.

### Menus (Food & Drink)
Menu items are presented in a list-card format. Use **Headline-MD** for the dish name and **Body-MD** for descriptions. Prices should be highlighted in **Secondary (Electric Green)** to stand out immediately. Use small, high-contrast chips for dietary labels (e.g., "HOT," "GF").

### Event Listings
Events use a "Ticket" layout pattern. A vertical border on the left side of the card uses the **Tertiary (Signal Red)** color to indicate live or upcoming sports broadcasts. Include a "Notify Me" button using the Ghost style.

### Contact & Booking Forms
Inputs use a dark fill (#1C1E21) with a 2px bottom border that transforms into a full-color neon stroke (Primary) when focused. Labels use **Label-Bold** for a disciplined, organized feel.

### Lists
Lists for "Current Draft Beers" should use high-contrast dividers (1px #FFFFFF at 5% opacity) and feature the brand's secondary color for "Limited Time" items.