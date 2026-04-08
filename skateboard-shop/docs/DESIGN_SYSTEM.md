# Skateboard Shop Design System

## Core Aesthetic
- **Vibe:** Dark mode, minimalist, high-contrast, bold "skate culture" typography.
- **Key Concepts:** "Built for the Bold", grid layouts, hover states, and smooth transitions.

## Color Palette
| Purpose | Hex/Class | Note |
|---|---|---|
| **Background (Main)** | `#121212` | Dark neutral, core background. |
| **Foreground/Text** | `#F5F5F5` | Off-white for readability. |
| **Accent (Action)** | `#FCEE09` | Bold yellow for buttons, badges, and highlights. |
| **Secondary Text** | `#999999` | Muted labels, secondary info. |
| **Borders** | `#333333` | Subtle separators. |

## Brand Assets (Mellow)
- **Logos:** `logo-mellow-1.jpg` (Primary), `logo-mellow-2.jpg`, `logo-mellow-3.jpg`, `logo-mellow-4.jpg`.
- **Identity:** Use these logos to replace generic text while maintaining the dark/high-contrast vibe.

## Typography
- **Headings:** `font-bold uppercase tracking-wider`
- **Body:** `text-sm`, `text-base`
- **Navigation:** `text-sm uppercase font-semibold`
- **Font Stack:** Standard Sans-serif (via Tailwind).

## UI Components

### 1. Buttons (Primary)
- **Base:** `inline-flex items-center justify-center bg-[#FCEE09] text-[#121212] font-bold text-lg uppercase py-4 px-8 rounded transition-transform`
- **State:** `hover:scale-105`

### 2. Header
- **Background:** `#121212` with a `border-b border-[#333333]`
- **Z-Index:** `z-50` (fixed position)

### 3. Product Cards
- **Overlay:** `bg-gradient-to-t from-black via-black/80 to-transparent`
- **Image Hover:** `transition-transform duration-300 group-hover:scale-105`
- **Price Label:** `text-[#FCEE09]`

## Iconography
- **Library:** `lucide-react`
- **Size:** `size={20}` for header actions, `size={24}` for mobile menu toggle.
- **Colors:** Default to `#F5F5F5`, hover state `#FCEE09`.

## Layout & Spacing
- **Container:** `container mx-auto px-4`
- **Padding:** `py-16` for sections.
- **Grid Gap:** `gap-8` for product grids.
