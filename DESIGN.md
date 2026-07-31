---
name: 24/7 Piura - Cerrajería Experta
description: Emergency locksmith landing page for Piura, Peru — urgent and reliable
colors:
  primary: "#1152d4"
  accent: "#3b82f6"
  accent-hover: "#2563eb"
  surface-light: "#f6f6f8"
  surface-dark: "#0B1120"
  navy-dark: "#0a121e"
  navy-light: "#151e2e"
  text-heading-light: "#111827"
  text-body-light: "#374151"
  text-muted-light: "#4b5563"
  text-muted-dark: "#9ca3af"
  text-caption-light: "#6b7280"
  text-caption-dark: "#9ca3af"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-heading-light}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  card-service:
    backgroundColor: "{colors.surface-light}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: 24/7 Piura - Cerrajería Experta

## 1. Overview

**Creative North Star: "The Emergency Dispatch Console"**

This is a service you reach for when something has already gone wrong: a lockout, a broken key, a door that won't open. The interface borrows its composure from dispatch and control-room software, not from a home-decor catalogue: a dark, low-glare surface by default (most lockouts happen at night), a single blue signal color that means "this is active and it works," and generous negative space so the one thing that matters (call, WhatsApp) is never competing for attention. Light mode exists for daytime browsing but the dark navy console is the resting state.

The system explicitly rejects the generic-locksmith template look: no stock key/padlock photography, no gold-and-black "security company" cliché, no cluttered service walls, no fake-urgency banners. Gold accents present in earlier drafts (scrollbar thumb, logo gradient, hero headline gradient) are being retired for this reason; every accent in this system is the single blue signal, never a second metallic tone competing with it.

**Key Characteristics:**
- Dark-first console surface, not a bright consumer landing page
- One accent color (signal blue) carrying all emphasis and interactivity
- Rounded-but-solid geometry (16px cards, 8px controls), not soft/bubbly
- Elevation on hover reads as "this responds," not decorative depth
- Copy-led hierarchy: the phone/WhatsApp CTA is always the loudest element on screen

## 2. Colors

A near-monochrome navy console lit by a single confident blue. Nothing else is allowed to compete with that blue.

### Primary
- **Signal Blue** (`#3b82f6`, `accent`): the one interactive color. Every link, icon, focus ring, active state, and the primary CTA background live here. If it's clickable or "live," it's this blue.
- **Deep Blue** (`#1152d4`, `primary`): the brand mark's anchor tone — logo, favicon, and any place the brand identity itself (not an action) needs representing. Reserved, not used for interactive states.
- **Signal Blue Hover** (`#2563eb`, `accent-hover`): the pressed/hover state of Signal Blue. Never used at rest.

### Neutral
- **Console Navy** (`#0B1120`, `surface-dark`): the default page background. This is the resting state of the product, not a "dark mode option."
- **Console Panel** (`#151e2e`, `navy-light`): elevated surfaces within the dark theme — cards, the phone-mockup panel, the theme toggle track.
- **Console Deep** (`#0a121e`, `navy-dark`): the darkest layer, used for scrollbar track and the deepest recesses of nested panels.
- **Daylight Surface** (`#f6f6f8`, `surface-light`): the light-theme background and light-theme card fill.
- **Heading Ink** (`#111827`, `text-heading-light`): headline and title text in light mode.
- **Body Ink** (`#374151`, `text-body-light`): paragraph text in light mode.
- **Muted Ink** (`#4b5563` light / `#9ca3af` dark, `text-muted-light` / `text-muted-dark`): secondary labels, timestamps, helper text.
- **Caption Ink** (`#6b7280` light / `#9ca3af` dark, `text-caption-light` / `text-caption-dark`): the smallest supporting text — captions, review dates, footnote-scale labels. Always pair the light value with the dark one; the light shade alone fails WCAG AA (3.9:1) on Console Navy.

### Token Source

**The Framework-Is-The-System Rule.** These neutral roles are not custom hex values; they resolve 1:1 to Tailwind's built-in gray scale (`text-heading-light` = `gray-900`, `text-body-light` = `gray-700`, `text-muted-light` = `gray-600`, `text-muted-dark` = `gray-400`, `text-caption-light` = `gray-500`, `text-caption-dark` = `gray-400`). There is no separate token layer in `tailwind.config.ts` to keep in sync; use Tailwind's own utility classes directly (`text-gray-900`, `text-gray-700 dark:text-gray-400`, etc.) and always pair a light value with an explicit `dark:` value. Never ship a bare `text-gray-500` (or any neutral) without its dark-mode pair; on Console Navy that reads below AA contrast.

### Named Rules
**The One Signal Rule.** Signal Blue is the only accent color in the system. No second accent, no gold, no green-for-success/red-for-error palette expansion; state is communicated through the blue's opacity and motion, not through additional hues.

**The Console-Is-Home Rule.** Dark navy is the default, resting appearance, not a toggle-triggered special case. Light mode is a courtesy for daytime reading, not the canonical look.

## 3. Typography

**Display/Body Font:** Inter (with system-ui, -apple-system, sans-serif)

**Character:** A single, no-nonsense grotesque doing all the work. Extreme weight contrast (black 900 headlines against light 300 body copy) does the job that a second typeface would otherwise do, keeping the system fast and legible under stress.

### Hierarchy
- **Display** (900, `clamp(2.25rem, 6vw, 4.5rem)`, 1.1 line-height, -0.02em tracking): the hero headline only. One per page.
- **Headline** (700, `clamp(1.875rem, 4vw, 3rem)`, 1.2 line-height): section titles ("Servicios de Cerrajería 24 Horas").
- **Title** (700, 1.25rem, 1.3 line-height): card and component headings (service names).
- **Body** (300, 1.125rem, 1.6 line-height, max 65ch): descriptive paragraphs. Light weight against the black display creates the contrast, not size alone.
- **Label** (700, 0.75rem, 0.1em tracking, uppercase): eyebrow tags, badges ("Cerrajería de Emergencia en Piura"), status strings.

### Named Rules
**The Weight-Over-Size Rule.** Hierarchy is built from weight contrast (300 → 700 → 900) before it's built from size. A label and a body line can share a font-size; they never share a weight.

## 4. Elevation

Flat by default, with layered surfaces (navy → panel → card) doing most of the depth work instead of shadows. Shadows appear sparingly and only where something needs to feel actively "on" — chiefly the primary CTA, which carries a soft blue glow to read as a live, pressable control rather than a static button. Cards lift on hover (translateY) as a response to interaction, not as a resting decoration.

### Shadow Vocabulary
- **CTA glow** (`box-shadow: 0 0 25px rgba(59,130,246,0.4)`, hover: `0 0 35px rgba(59,130,246,0.6)`): the primary WhatsApp/call button only. Signals "this is the live action."
- **Panel lift** (`shadow-2xl` on the hero mock panel; `shadow-lg` on the glass info card): reserved for the one hero visual, not for general cards.

### Named Rules
**The Earned Glow Rule.** Glow is a privilege of the single primary CTA. Solid, direct components (buttons, cards, badges) skip glow entirely and rely on border and background-tint changes on hover; if a second element starts glowing, the first one stops meaning anything.

## 5. Components

Solid and direct: confident weight and contrast carry the interface, with the CTA's glow as the one deliberate exception, not the house style. Rounded corners throughout (never sharp, never fully pill-shaped except true toggles), elevation on hover to confirm responsiveness, transitions on the `ease-out-emil` curve (`cubic-bezier(0.23, 1, 0.32, 1)`) everywhere.

### Buttons
- **Shape:** rounded-lg (8px, `{rounded.md}`), height 56px, generous 32px horizontal padding.
- **Primary:** Signal Blue background (`accent` → `accent-hover` on hover), white text, bold. Carries the CTA glow (see Elevation). This is the only button allowed to glow.
- **Hover / Focus:** `-translate-y-1` lift, `active:scale-[0.97]` on press, 2px Signal Blue focus ring with offset on keyboard focus. Transition via `transition-emil` (200ms, ease-out-emil).
- **Secondary / Ghost:** transparent background, 1px border at 20% black/white opacity, subtle tint on hover (`bg-black/5` light, `bg-white/5` dark). No glow, no gradient.

### Cards
- **Corner Style:** rounded-2xl (16px, `{rounded.lg}`).
- **Background:** `surface-light` in light mode, `surface-dark` in dark mode; both sit one layer below their section's own background so cards read as distinct panels.
- **Shadow Strategy:** none at rest. On hover: 1px border shifts to Signal Blue at 30% opacity plus a 2px upward translate. No box-shadow (see Elevation, Named Rules).
- **Border:** 1px, 5% black/white opacity at rest.
- **Internal Padding:** 32px (`{spacing.md}` scaled up; matches `p-8`).

### Inputs / Fields
- **Style:** not yet present in the product (no forms today); if added, follow the button vocabulary — rounded-md, 1px border at 10% opacity, Signal Blue on focus.
- **Focus:** 2px Signal Blue ring with offset, matching every other interactive element. No glow.

### Navigation
- Sticky header, translucent navy/white with backdrop blur, bottom hairline border. Nav links are `text-muted` at rest, Signal Blue on hover, with an animated underline that grows from the left (`scale-x` on the `ease-out-emil` curve) rather than fading in. Mobile collapses to a single icon-only menu button (44px hit target).

### Theme Toggle (signature component)
A physical-feeling pill switch: a 64×32px track with sun/moon glyphs baked into the track ends, and a 24px circular thumb that slides between them on the `ease-out-emil` curve, cross-fading and rotating the active icon. This is the one place a skeuomorphic touch (light thumb, subtle shadow) is intentional, standing in for a hardware toggle rather than a flat checkbox.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Blue (`#3b82f6`) as the only interactive/accent color across the entire system.
- **Do** default every new surface to the dark Console Navy (`#0B1120`) theme; treat light mode as the secondary path.
- **Do** reserve the CTA glow (`rgba(59,130,246,0.4–0.6)`) for the single primary call/WhatsApp action per screen.
- **Do** build hierarchy through weight contrast (300/700/900) before reaching for size.
- **Do** use full borders, background tints, or leading icons for emphasis, never a colored `border-left`/`border-right` stripe.

### Don't:
- **Don't** reintroduce gold/yellow (`#D4AF37`, `yellow-600`, `via-yellow-200`) anywhere — it reads as the generic "gold-and-black security company" cliché this brand explicitly rejects. Existing instances (scrollbar thumb hover, header logo gradient, hero headline gradient) are legacy and should be migrated to Signal Blue.
- **Don't** use `background-clip: text` gradient headlines (the current hero `H1` gradient span is a legacy instance to remove) — emphasis comes from weight and color, not gradient text.
- **Don't** use stock photography of keys, padlocks, or generic "locksmith" iconography; keep illustration abstract (the phone/dashboard mockup) or use real team/location photography.
- **Don't** stack more than one shadow-glow element on a screen; if everything glows, nothing reads as "the live action."
- **Don't** add urgency banners, countdown timers, or "¡OFERTA POR TIEMPO LIMITADO!"-style copy — urgency here comes from clarity and CTA speed, not alarm.
