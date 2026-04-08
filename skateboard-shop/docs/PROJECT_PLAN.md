# Mellow Skateboard: The Rolex MVP Roadmap

## Core Philosophy
Every feature must feel **high-performance** and **intentional**. We are building a "Digital Gallery," not just a shop. No fluff, only "Smart Rolex" execution.

## Tech Stack
- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Dark Mode: Class-based)
- **Icons:** Lucide React

## Progress Summary
- [x] **Project Cleanup:** Root directory and redundant node_modules resolved.
- [x] **Source of Truth Docs:** `docs/PROJECT_PLAN.md`, `docs/DESIGN_SYSTEM.md`, `docs/BRAND_VOICE.md`, and `docs/IDENTITY.md` created.
- [x] **Phase 0 & 1:** Foundation, Theme Toggle, and Header Logo complete.
- [x] **Bug Fix:** Brands page dark mode hover contrast resolved.

## To-Do List (High-Impact Execution)

### Phase 2: Brand Identity & Routing (The "Smart Rolex" UI)
- [ ] **2.1 Routing Setup:** Install `react-router-dom` and set up the main router in `App.tsx`.
- [ ] **2.2 The "Mellow Tape" (Replaces New Arrivals):**
    - [ ] Create `src/pages/MellowTape.tsx`.
    - [ ] Implement a horizontal, auto-scrolling gallery of the latest drops with a subtle film-grain overlay.
- [ ] **2.3 The Editorial Shop:**
    - [ ] Create `src/pages/Shop.tsx`.
    - [ ] Use an offset, asymmetrical grid layout (not a generic grid).
    - [ ] Hide prices and buttons until hover (Gallery Mode).
- [ ] **2.4 The Story (About Page):**
    - [ ] Create `src/pages/About.tsx`.
    - [ ] Use high-impact typography and large lifestyle imagery. Focus on "The Community."
- [ ] **2.5 The "Instagram Ghost" Footer:** 
    - [ ] Create `src/components/Footer.tsx`.
    - [ ] Minimalist design featuring only the handle and a small "latest from the street" image grid.

### Phase 3: The Setup & Cart (High Performance)
- [ ] **3.1 Cart Context:** Create `src/context/CartContext.tsx` with high-performance state management.
- [ ] **3.2 The "Complete Your Ride" (In-Product Feature):** Add intelligent truck/wheel suggestions when viewing a deck.
- [ ] **3.3 The Rolex Cart Drawer:**
    - [ ] Build `src/components/CartDrawer.tsx` with buttery-smooth animations.
    - [ ] Minimalist item list and a single-click "Checkout" flow.

### Phase 4: Refinement & Deployment
- [ ] **4.1 Typography Update:** Audit all fonts to ensure they match the "Zine" style (Bold All-Caps headings).
- [ ] **4.2 Deployment:** Final build and deploy to Netlify.
