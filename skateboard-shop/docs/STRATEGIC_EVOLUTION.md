# Mellow: The "Smart Rolex" Strategic Evolution

## 1. Status Report: April 2026
We have moved from a "Skate Shop" to a **Digital Gallery**. All four original phases are complete. The site now operates at a consistent luxury-editorial level. The active roadmap is the "Instrument Panel" phase — details, interactions, and live data that reward close attention.

---

## 2. Completed Work

### **Phase 1: Brand Locking**
- [x] Permanent Midnight: theme toggle removed; dark mode hard-locked in `main.tsx`.
- [x] Cinematic Hero: Ken Burns, fade-in animations, "Signal: Online" instrument detail.
- [x] Logo: `logo-mellow-2.jpg` in Header; white-bg logo stamp in About manifesto.

### **Phase 2: The Gallery Experience**
- [x] "Curiosity" Hover: info hidden by default on ProductCard; opacity fade on hover.
- [x] Asymmetrical Grid: 12-column offset layout in FeaturedProducts.
- [x] Vault Filter: text-only tabs (All / Hardware / Soft Goods / Limited) with live filtering.
- [x] Product Detail Drawer: full-height slide-in panel from right on card click. ESC to close. Body scroll locked. "Add to Vault" CTA.

### **Phase 3: The Zine Pages**
- [x] About → "The Archive": manifesto, grayscale image strip, 4-era timeline, CTA. Logo stamp as editorial press mark.
- [x] Mellow Tape → "The Drop": VHS scanlines + film grain. Now data-driven with Vol. 01/02 switcher.
- [x] Brands → "The Registry": dark-only, editorial list with hover image reveal, numbered entries.
- [x] Journal → "Street Report": dispatches with tag filter (All / Field Report / Dispatch / Signal / Archive), Ken Burns hero, image pair footer.
- [x] Shop → "The Vault": editorial entry header, filter wired to product categories.

### **Phase 4: The Instagram Ghost**
- [x] Minimalist Footer: `@mellow.skateboard` handle only as social link.
- [x] Live Signal: 3 grayscale deck images with brightness hover.

### **Phase 5: Instrument Panel (Interaction Details)**
- [x] Active NavLink highlighting: `useLocation()` drives a `#FCEE09` underline on current page.
- [x] Custom cursor: `#FCEE09` crosshair (`+`) with center dot. Appears on pointer devices only (`@media (pointer: fine)`). Hidden on touch.
- [x] Mellow Tape versioning: `volumes[]` array — Vol. 01 (2025) and Vol. 02 (2026). Switcher in header. Fully data-driven.
- [x] Journal tag filter: live filter row (All / Field Report / Dispatch / Signal / Archive). Dispatch count updates.

---

## 3. Active Technical Debt
- **Film-grain + VHS conflict:** Both `.film-grain::after` and `.vhs-scanlines::after` target the same pseudo-element on MellowTape. Only one `::after` renders. Resolved by keeping film-grain on top (defined last). Long-term fix: use a wrapper `<div>` for one effect.
- **Product categories are mock data:** Santa Cruz/Element = Hardware, Powell = Limited, Baker = Soft Goods. Real data layer needed when moving to a backend.
- **"Add to Vault" is UI-only:** No cart state, no checkout. Scope-appropriate for now.

---

## 4. Next Proposed Moves

### **A. Cart & Micro-interactions**
- Build a minimal cart state (Zustand or Context) behind "Add to Vault."
- Cart count in header updates live. Cart drawer slides in from right (reuse ProductDrawer pattern).
- A subtle "added" flash (yellow border pulse on the card) as confirmation.

### **B. The Signal Feed (Live-ish Home)**
- Add a scrolling ticker to the Home hero: "Vol. 02 just dropped · 4 pieces · Powell-Peralta Ripper · still available ·"
- Makes the homepage feel like a live broadcast, not a static billboard.

### **C. Page Transitions**
- Add a `framer-motion` `AnimatePresence` wrapper around `<Routes>`.
- Each page fades in (300ms) and slides slightly up. Feels like turning pages in a zine.
- Alternatively: a full-screen black flash between routes — more aggressive, more editorial.

### **D. Journal — Photography Mode**
- Add a "Raw" view to Journal that shows a full-bleed image grid instead of the text list.
- Toggle between "Text" and "Raw" (two small buttons top-right, like a camera mode dial).
- Uses existing background assets until real photography is available.

### **E. Brands — The Badge**
- Each brand entry in The Registry gets a hover-state that reveals a "verified" badge (small geometric mark in yellow).
- Clicking opens a brand-specific filtered view of the Vault.
- Future: `/brands/santa-cruz` route with that brand's full catalog.

### **F. Mobile Nav Polish**
- The mobile full-screen menu should animate in (slide from top or fade).
- Active link also underlined in the mobile menu.
- Close button position: top-right, consistent with ProductDrawer pattern.

### **G. Typography Scale System**
- Enforce a consistent type scale: `clamp()` for all headings.
- All "signal" labels (small uppercase text): `tracking-[0.3em]` consistently.
- Body text: `text-[#999999]` at `text-sm leading-relaxed` everywhere.
- Create a CSS custom property or Tailwind config extension for brand tokens.
