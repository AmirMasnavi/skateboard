# Skateboard Shop MVP Plan (Mellow Skateboard Edition)

## Tech Stack
- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Dark Mode: Class-based)
- **Icons:** Lucide React

## Current State
- ✅ **Clean Project Structure:** Root directory issues resolved.
- ✅ **Brand Assets:** Mellow Skateboard logos imported to `src/assets/`.
- ✅ **Global Navigation:** Header with mobile menu and cart badge.
- ✅ **Hero Section:** High-impact visual with CTA.
- ✅ **Product Grid:** Responsive grid using `ProductCard` components.
- ✅ **Asset Management:** All product and background images tracked in `src/assets/`.

## To-Do List (Execute one by one)

### Phase 0: Brand Integration (Mellow)
- [ ] **0.1 Update Header Logo:** Replace the "Decked Out" text in `Header.tsx` with the `logo-mellow-1.jpg` asset.
- [ ] **0.2 Hero Brand Update:** Update the Hero title and subtitle to align with Mellow's "Stay Mellow" vibe.
- [ ] **0.3 Brand Story:** Add a simple "About Mellow" section or update the 'About' link in navigation.

### Phase 1: Foundation & Theme (Priority)
- [ ] **1.1 Enable Tailwind Dark Mode:** Update `tailwind.config.js` with `darkMode: 'class'`.
- [ ] **1.2 Theme Toggle Logic:** Implement `ThemeContext` or local state in `Header.tsx` to toggle between light/dark modes using the `Sun/Moon` icon.
- [ ] **1.3 Hero Refinement:** 
    - [ ] Update the "Shop New Arrivals" button to scroll to the product grid.
    - [ ] Add a "scroll-down" indicator at the bottom of the hero section for better UX.
- [ ] **1.4 Global Button Polish:** Ensure all buttons have consistent hover states (e.g., `hover:scale-105`) and active states.

### Phase 2: Shopping Cart State
- [ ] **2.1 Create Cart Context:** Create `src/context/CartContext.tsx` to manage `cartItems`, `addToCart`, `removeFromCart`, and `totalPrice`.
- [ ] **2.2 Provide Context:** Wrap the application in `src/main.tsx` with the `CartProvider`.
- [ ] **2.3 Dynamic Header:** Update `Header.tsx` to consume `CartContext` and display the actual item count in the badge.

### Phase 3: Adding to Cart
- [ ] **3.1 Interactive Product Cards:** Update `ProductCard.tsx` with an "Add to Cart" button (hover effect).
- [ ] **3.2 Logic Wiring:** Connect the button to `CartContext` to add the specific product.

### Phase 4: The Cart UI (Slide-out Drawer)
- [ ] **4.1 Create Drawer Component:** Build `src/components/CartDrawer.tsx` with a slide-in animation from the right.
- [ ] **4.2 Drawer Content:** Display item list, quantity controls, subtotal, and a "Checkout" button.
- [ ] **4.3 Toggle Logic:** Link the `Header.tsx` cart icon to open/close the `CartDrawer`.

### Phase 5: Refinement & Deployment
- [ ] **5.1 Feedback UI:** Add a simple "Success" toast or animation when an item is added.
- [ ] **5.2 Deployment:** Deploy the static site to Netlify.
