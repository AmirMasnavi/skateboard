# Skateboard Shop MVP Plan (Mellow Skateboard Edition)

## Tech Stack
- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Dark Mode: Class-based)
- **Icons:** Lucide React

## Progress Summary
- [x] **Project Cleanup:** Root directory and redundant node_modules resolved.
- [x] **Source of Truth Docs:** `docs/PROJECT_PLAN.md`, `docs/DESIGN_SYSTEM.md`, and `docs/BRAND_VOICE.md` created.
- [x] **Brand Assets:** Mellow Skateboard logos imported and tracked.
- [x] **Phase 0 (Branding):** Logo in header, Hero branding, and basic wiring complete.
- [x] **Phase 1 (Foundation):** Dark mode enabled and basic refinement complete.

## To-Do List (Execute one by one)

### Phase 2: Navigation & Multi-Page Layout
- [ ] **2.1 Routing Setup:** Install `react-router-dom` and set up the main router in `App.tsx`.
- [ ] **2.2 New Pages:** 
    - [ ] Create `src/pages/Shop.tsx` (Full product list).
    - [ ] Create `src/pages/NewArrivals.tsx` (Recently added items).
    - [ ] Create `src/pages/Brands.tsx` (Brand partner showcase).
    - [ ] Create `src/pages/About.tsx` (Full Mellow story).
- [ ] **2.3 About Section (Home):** Add a minimalist "Our Story" section to `src/pages/Home.tsx` based on `BRAND_VOICE.md`.
- [ ] **2.4 Footer Integration:** Create `src/components/Footer.tsx` with Instagram link and Mellow info.

### Phase 3: Shopping Cart State
- [ ] **3.1 Create Cart Context:** Create `src/context/CartContext.tsx` (cartItems, addToCart, removeFromCart).
- [ ] **3.2 Provide Context:** Wrap app in `src/main.tsx` with `CartProvider`.
- [ ] **3.3 Dynamic Header:** Update `Header.tsx` to display real cart count.

### Phase 4: Adding to Cart & UI
- [ ] **4.1 Interactive Product Cards:** Add "Add to Cart" button (hover effect).
- [ ] **4.2 Create Drawer Component:** Build `src/components/CartDrawer.tsx` (slide-in).
- [ ] **4.3 Toggle Logic:** Link Header cart icon to toggle `CartDrawer`.

### Phase 5: Refinement & Deployment
- [ ] **5.1 Feedback UI:** Add "Success" toast for cart additions.
- [ ] **5.2 Deployment:** Final build and deploy to Netlify.
