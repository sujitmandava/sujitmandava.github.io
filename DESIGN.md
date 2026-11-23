---
name: Sujit Mandava
description: A personal site drawn as a transit system, set in 1970 Unimark signage.
colors:
  ground: "#ffffff"
  ink: "#111111"
  ink-2: "#444444"
  panel: "#eeeeee"
  band: "#111111"
  band-ink: "#ffffff"
  band-ink-2: "#c8c8c8"
  career-orange: "#e0582a"
  wren-plum: "#5a4a8c"
  fpl-yellow: "#f2b705"
  safewatch-teal: "#0f766e"
  other-grey: "#77787b"
  plaque: "#ffffff"
  letter-dark: "#111111"
  letter-light: "#ffffff"
  ground-dark: "#242424"
  ink-dark: "#f3f3f3"
  ink-2-dark: "#c4c4c4"
  panel-dark: "#303030"
  band-dark: "#000000"
  wren-plum-dark: "#8b78cc"
  safewatch-teal-dark: "#1c9c90"
  other-grey-dark: "#8d8e91"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.9rem, 6.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  figure:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 4.6vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  route-title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 2.6vw, 2.1rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  subtitle:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.55
rounded:
  none: "0"
  full: "50%"
spacing:
  gutter: "clamp(16px, 4.5vw, 72px)"
  max: "1520px"
  band-h: "68px"
  rule: "6px"
  section-top: "clamp(80px, 12vw, 152px)"
  stop-gap: "clamp(56px, 8vw, 96px)"
components:
  bullet-career:
    backgroundColor: "{colors.career-orange}"
    textColor: "{colors.letter-dark}"
    rounded: "{rounded.full}"
    size: "44px"
  bullet-wren:
    backgroundColor: "{colors.wren-plum}"
    textColor: "{colors.letter-light}"
    rounded: "{rounded.full}"
    size: "44px"
  bullet-fpl:
    backgroundColor: "{colors.fpl-yellow}"
    textColor: "{colors.letter-dark}"
    rounded: "{rounded.full}"
    size: "44px"
  bullet-safewatch:
    backgroundColor: "{colors.safewatch-teal}"
    textColor: "{colors.letter-light}"
    rounded: "{rounded.full}"
    size: "44px"
  bullet-other:
    backgroundColor: "#67686b"
    textColor: "{colors.letter-light}"
    rounded: "{rounded.full}"
    size: "44px"
  signage-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    height: "{spacing.band-h}"
  band-cta:
    backgroundColor: "{colors.band-ink}"
    textColor: "{colors.band}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  band-cta-hover:
    backgroundColor: "{colors.career-orange}"
    textColor: "{colors.letter-dark}"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "54px"
  button-solid-hover:
    backgroundColor: "{colors.career-orange}"
    textColor: "{colors.letter-dark}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "54px"
  button-line-hover:
    backgroundColor: "{colors.career-orange}"
    textColor: "{colors.letter-dark}"
  button-light:
    backgroundColor: "{colors.letter-light}"
    textColor: "{colors.letter-dark}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "54px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.letter-light}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "54px"
  route-sign:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(18px, 2.4vw, 28px) clamp(18px, 3vw, 36px)"
  route-status:
    backgroundColor: "transparent"
    textColor: "{colors.band-ink}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  film-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "44px"
  film-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  plaque:
    backgroundColor: "{colors.plaque}"
    rounded: "{rounded.none}"
    padding: "6px"
    size: "64px"
  terminal:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    padding: "clamp(64px, 9vw, 120px) clamp(16px, 4.5vw, 72px)"
---

# Design System: Sujit Mandava

## Overview

**Creative North Star: "The Line Map"**

The site is drawn as a transit system in the manner of the 1970 Unimark signage standards. A career is a single orange trunk line that runs stop by stop to a terminus; each product is its own coloured route with its own lettered bullet; smaller work is listed on a departures board. Everything is set the way enamel station signs are set: white ground, black bands carrying white bold grotesk, circular route bullets with one letter, heavy horizontal rules.

The palette is black, white, one neutral panel grey and the route colours, nothing else. There are no tints, no shadows, no visible gradients and no rounded card shells. Depth comes from the black band alone, and the only curves in the system are perfect circles: bullets, stop dots, the terminal dot. Results are set as platform numbers: very large, very heavy, tabular figures. Density is generous and editorial; sections open with a sign (bullet plus heading over a 6px rule) and then breathe.

Dark mode inverts the ground and keeps the bands. The ground goes to charcoal, ink goes near-white, the bands go fully black, and the route colours that need it lift in lightness; career orange and FPL yellow hold their values in both themes.

**Key Characteristics:**
- One family, Archivo, used heavy (800) for every sign and heading; tabular lining numerals site-wide.
- Black enamel bands with a thin white inner rule 6px above the bottom edge.
- Two shapes only: square-cornered rectangles and full circles.
- Lines are literal: strip diagrams, trunk tracks and route stops are drawn bars and ringed dots.
- Career orange is both the trunk line and the only interaction colour.
- One authored motion: the trunk line fills as it scrolls through view.

## Colors

A signage palette: black, white and route colours, each route colour standing for exactly one line.

### Primary
- **Career Orange** (career-orange): the trunk line, the terminal stop and every interaction signal. It fills the strip diagram's track and terminus, the experience trunk, the terminal dot and the hero status dot; it is also the hover fill for every button, the focus ring (3px outline, 3px offset), the text selection and the skip link. Text on it is always letter-dark.

### Secondary
- **Wren Plum** (wren-plum; wren-plum-dark in dark mode): the Wren route only, its bullet and its route-stops bar.
- **FPL Yellow** (fpl-yellow): the FPL route only. Always carries a letter-dark letter.
- **SafeWatch Teal** (safewatch-teal; safewatch-teal-dark in dark mode): the SafeWatch route only.

### Tertiary
- **Other-Lines Grey** (other-grey; other-grey-dark in dark mode): bullets for the smaller projects on the departures board and the "+" projects bullet. A paused line drops its fill to an outlined bullet (transparent, 3px ink ring, ink letter).

### Neutral
- **Station White** (ground; ground-dark charcoal in dark mode): the page ground and the hollow centre of every stop dot.
- **Enamel Black** (ink; ink-dark in dark mode): all primary text, all rules, stop-dot rings, button strokes.
- **Worn Ink** (ink-2; ink-2-dark): secondary copy: ledes, metadata, stack lines, notes.
- **Platform Grey** (panel; panel-dark): the hero's strip-diagram panel, video letterbox, scrollbar track.
- **Band Black** (band; band-dark pure black in dark mode) with **Band White** (band-ink) and **Band Silver** (band-ink-2): the signage band, route signs, terminal and footer. Band Silver carries nav links and sub-lines inside bands.
- **Plaque White** (plaque): the fixed white plate behind school and employer logos; it does not invert.
- **Letter Dark / Letter Light** (letter-dark, letter-light): fixed letter colours that never invert, used on route fills and on the orange hover state.

### Named Rules
**The Route Colour Rule.** A route colour appears only on its own route: its bullet, its stops bar. No route colour is used for decoration, backgrounds of content blocks, or text.

**The One Signal Rule.** Career orange is the only interactive colour. Hover fills, focus rings, selection and the skip link are orange with a letter-dark letter; no other colour signals state.

**The No-Tint Rule.** Colours are used at full strength or not at all: no opacity tints, no colour gradients, no shadows. (The trunk's scroll fill animates the size of a solid orange fill; it is not a gradient.)

## Typography

**Display Font:** Archivo (variable, 100–900, self-hosted woff2, with Helvetica Neue, Arial)
**Body Font:** Archivo (same family)

**Character:** A single bold grotesk doing the job of station lettering: dense, heavy and tightly tracked at sign scale, plain and open at reading scale.

### Hierarchy
- **Display** (800, clamp(2.9rem, 6.6vw, 6rem), 0.94, -0.035em): the hero headline only, max 13ch.
- **Figure** (800, clamp(2.6rem, 4.6vw, 4.2rem), 1, -0.04em, tabular): results set as platform numbers, each under a 6px rule with a bold label above and a 30ch note below.
- **Headline** (800, clamp(2.2rem, 5vw, 4rem), 1, -0.03em): section signs. The terminal heading runs larger (clamp(2.4rem, 5.6vw, 4.8rem), 0.98).
- **Route Title** (800, clamp(2rem, 4.4vw, 3.4rem)): product names inside route signs.
- **Title** (800, clamp(1.45rem, 2.6vw, 2.1rem)): stop names on the trunk.
- **Subtitle** (800, 1.35rem / 1.4rem, -0.02em): strip-diagram stop names, departures-board names.
- **Lede** (400, clamp(1.15rem, 1.6vw, 1.4rem), 1.45): the hero proof line, Worn Ink, max 54ch.
- **Body** (400, 1.125rem, 1.55): reading text, held to 58–68ch.
- **Label** (600–700, 0.95–1.05rem): nav, buttons, status plates, stack lines, board columns. Sentence case, never uppercase-tracked.

### Named Rules
**The One Family Rule.** Archivo is the only typeface. Hierarchy comes from size and weight (800 for anything that is a sign), never from a second family.

**The Platform Number Rule.** Numbers are tabular and lining everywhere; headline results are set at Figure scale, with an orange signage arrow between before and after values.

## Layout

A centred frame of 1520px with a fluid gutter (clamp(16px, 4.5vw, 72px)). A sticky 68px signage band sits on top; anchor scrolling pads by the band height plus 16px. Sections open clamp(80px, 12vw, 152px) below the previous one and start with a sign: a large bullet (or a cluster of bullets) beside the headline, underlined by a 6px ink rule.

The hero is a two-column grid: copy on the left, and a Platform Grey panel on the right (clamp(320px, 30vw, 440px), bleeding to the viewport edge) holding the portrait above a vertical strip diagram. Below 860px it stacks and the strip diagram turns horizontal, keeping only the first and last stop names.

Lines change orientation with the viewport rather than disappearing: route-stop diagrams run horizontally in three columns when a route has no film, and vertically beside text otherwise or on phones. Route bodies with film split 5:7 (text:film) and stack below 960px with the film first. The departures board is a five-column grid (bullet, name and text, kind, stack, link) that collapses to two columns below 960px. The hero fills the viewport below the band; the Platform Grey panel holds the portrait above the strip diagram. Breakpoints in use: 400, 560, 600, 640, 760, 860, 960, 980, 1060px.

## Elevation & Depth

The system is flat. There are no shadows anywhere. Depth is carried by the black band: a full-strength Band Black surface with a 2px Band White inner rule 6px above its bottom edge, which reads as an enamel sign plate. The signage band, route signs and terminal block are the only raised-feeling surfaces, and they are raised by contrast alone.

### Named Rules
**The Enamel Band Rule.** A surface that needs to stand forward becomes a black band with the inner white rule. Nothing stands forward by shadow, blur or tint.

## Shapes

Two shapes only. Rectangles are square-cornered (0 radius): buttons, bands, plaques, status plates, film frames. Circles are perfect (50%): route bullets, stop dots, the theme toggle, the hero status dot, the terminal dot.

Strokes are heavy and graded: 6px horizontal rules for section signs, figures, and the board top; 3px for buttons, film frames and paused bullets; 2px for board row dividers, plaques, film buttons and status plates. Stop dots are hollow rings (7–9px ink ring on ground) and the terminus is a solid orange disc. Track bars are solid rectangles: 12px (hero strip), 14px with a 3px orange border (trunk), 8px (route stops), 10px (horizontal phone strip). List bullets are 12×4px ink dashes.

## Components

### Route Bullets
A filled circle carrying one capital letter, weight 800. Three sizes: small 32px (nav), medium 44px (departures board), large clamp(56px, 7vw, 84px) (section and route signs). Letter colour is letter-dark on orange and yellow, letter-light on plum, teal and grey. Bullet discs keep the light-theme plum (#5a4a8c) and teal (#0f766e) in both themes, and grey bullets use a darker #67686b, so every letter holds 4.5:1; the lifted dark-mode route colours are for lines and bars only. A paused line shows an outlined bullet. Decorative bullets are aria-hidden; labelled ones take role="img".

### Signage Band (Navigation)
- **Style:** sticky Band Black bar, 68px, inner white rule. Name left (800, 1.25rem), then route bullets with labels as nav, a circular theme toggle (40px, 2px Band Silver ring), and a "Get in touch" plate in Band White with Band Black text.
- **States:** nav links go from Band Silver to Band White with an underline on the label; the CTA turns orange with a dark letter; the toggle ring brightens.
- **Mobile:** labels drop below 1060px leaving bullets only; the CTA drops below 760px.

### Buttons
- **Shape:** square corners (0), 54px tall, 26px side padding, 3px stroke, 700 at 1.05rem.
- **Solid:** ink fill, ground text. **Line:** transparent with ink stroke and text.
- **On bands:** Light (white fill, dark text) for the primary, Ghost (transparent, white stroke and text) for the rest.
- **Hover / Focus:** every variant fills career orange with a letter-dark letter over 160ms ease-out (cubic-bezier(0.16, 1, 0.3, 1)); focus is the global 3px orange outline.
- **Text links:** bold, 2px underline at 0.2em offset, with a signage arrow; underline turns orange on hover.

### Strip Diagram
The hero's career map on Platform Grey: a 12px orange track behind hollow 46px stop dots (8px ink ring), each with an 800 name and a Worn Ink note; the terminus is a solid orange dot. Hovering a stop turns its ring orange and underlines its name. Horizontal on phones.

### Trunk Stops
The Experience section as a vertical line: 44px hollow stop dots (9px ring), a 14px orange track between consecutive stops, a 64px white logo plaque (2px ink border) beside each stop title, Worn Ink metadata, and dash-bulleted lists. The final stop is a 52px solid orange disc. The track fills top to bottom as it scrolls into view (scroll-driven, `entry 40%` to `cover 55%`), and renders solid without scroll timelines or under reduced motion.

### Route Signs
Each product opens with a black band: large route bullet, Route Title name with a Band Silver tagline, and a status plate on the right (2px white border, 700, hidden below 760px). Below it, a "stops" diagram in the route's colour: an 8px bar with 30px hollow dots (7px ink ring) marking what the product does. Like every line in the system, the bar runs dot to dot and stops at the last stop; it never runs past a terminus. Tech-stack lists keep each item and its trailing separator together so a line never starts with a dot.

### Departures Board
Smaller projects as rows under a 6px top rule, each divided by a 2px ink line: medium grey bullet, 800 name with a Worn Ink description, a bold kind column, a stack column and a right-aligned source link or a muted "Private repo" / "Not running".

### Films
16:9 video in a 3px ink frame on Platform Grey, muted, looping and autoplaying only in view (never under reduced motion), with explicit Play/Pause and Sound buttons (44px, 2px ink stroke, ink fill on hover) and a right-aligned credit line.

### Portrait
The one photograph on the page sits at the top of the hero's Platform Grey panel, above the strip diagram (120px on phones, above the horizontal strip): a square crop at clamp(150px, 12vw, 200px), object-fit cover, framed with the same 2px ink border as the logo plaques, flat on the ground with no radius or shadow.

### Terminal Block
The last stop: a full-width black band with a large orange disc ringed in Band White, the terminal headline, a Band Silver paragraph and Light/Ghost buttons.

### Signage Arrow
A single 24-unit SVG: a 3px square-capped, mitred stroke, rotated for right, up-right, up and down. Used in text links and between before/after figures.

## Do's and Don'ts

### Do:
- **Do** open every section with a sign: bullet(s), Headline, 6px ink rule underneath.
- **Do** give every new route its own bullet letter and one route colour, and use that colour only on that route.
- **Do** make every hover and focus state career orange with a letter-dark letter.
- **Do** draw sequences as lines: a solid track bar with hollow ringed dots and a solid terminus.
- **Do** set results at Figure scale with tabular numerals under a 6px rule.
- **Do** keep logo plaques white in both themes.
- **Do** keep motion to colour transitions (160ms ease-out) plus the single scroll-driven line fill, all static under reduced motion.

### Don't:
- **Don't** add shadows, blurs, opacity tints or colour gradients.
- **Don't** round rectangles; the only curve is the full circle.
- **Don't** wrap content in card shells; content sits on the ground under rules or inside a black band.
- **Don't** introduce a second typeface or set signs below weight 800.
- **Don't** use a route colour for decoration, text or section backgrounds.
- **Don't** use any colour but career orange for interaction state.
