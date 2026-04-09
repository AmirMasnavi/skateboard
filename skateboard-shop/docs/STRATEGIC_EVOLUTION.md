# Mellow: The "Smart Rolex" Strategic Evolution

## 1. Status Report: April 2026
We have moved from a "Skate Shop" to a **Digital Gallery**. The core structure is 90% aligned with the Rolex strategy. The final 10% is about removing the last traces of generic UI and adding "Performance Details."

### **Phase 1: Brand Locking (The Foundation)**
- [x] **Permanent Midnight:** Theme toggle removed; dark mode enforced globally.
- [x] **Cinematic Hero:** Redesigned with Ken Burns, "Signal" indicators, and Zine typography.
- [ ] **Logo Audit:** Verify `logo-mellow-1` through `4` to ensure the most "floating" (no box) version is used in the header.

### **Phase 2: The Gallery Experience (Product Card & Shop)**
- [x] **"Curiosity" Hover:** Info hidden by default; rewards interaction.
- [x] **Asymmetrical Grid:** `FeaturedProducts` breaks the standard e-commerce grid successfully.
- [ ] **The "Vault" Filter:** Add a minimalist, text-only filtering system to the Shop page (e.g., "All / Hardware / Soft Goods / Limited").

### **Phase 3: The "Zine" Pages (Content Evolution)**
- [x] **About -> "The Archive":** manifesto and timeline implemented.
- [x] **Mellow Tape -> "The Drop":** VHS Scanlines and marquee active.
- [ ] **Brands -> "The Registry":** **[CRITICAL]** Still uses white-background logic. Needs to be refactored into a premium "Partnership Registry."
- [ ] **New Page -> "Journal":** Add a minimalist "Street Report" page for raw photos and short signals.

### **Phase 4: The "Instagram Ghost" (Footer Rebirth)**
- [x] **Minimalist Footer:** Handle-only social link.
- [x] **Live Signal:** Grayscale image strip with hover effects.

---

## 2. The "Small Details" Audit (Issues Found)

### **A. Technical Polishing**
- **Animation Refinement:** The `.film-grain::after` block in `index.css` needs its background SVG restored to ensure the "noise" is actually visible.
- **Typography Consistency:** Ensure `tracking-[0.3em]` is used for all "Signal" text (small labels) to match the Rolex "instrument" feel.

### **B. Interaction Design**
- **Transition Smoothness:** Ensure all hover states (Links, Cards, Buttons) use a consistent `duration-500` for a "buttery" feel.
- **Header Navigation:** Update `navLinks` to include "Journal" and remove any legacy links.

---

## 3. Next Steps (Proposed)
1. **Kill the Light Mode in Brands:** Refactor `Brands.tsx` to be dark-only and asymmetrical.
2. **Restore the Noise:** Fix the `.film-grain` CSS to ensure the texture is present across the site.
3. **The Vault Navigation:** Add the "Journal" route and update the Header.
