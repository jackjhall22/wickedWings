# Wicked Wings Slaughter — Build Progress

**Last updated:** May 1, 2026  
**Plan file:** `/Users/jackhall/.cursor/plans/wicked-wings-app_3602f741.plan.md`

---

## What Was Decided

### Product Scope (narrowed from original)
**Marketing site only** — no cart, no online ordering, no staff dashboard, no admin CRUD.

Four pages matching the existing Stitch HTML designs:
1. **Landing** — hero, about section, menu teaser
2. **Menu** — wings (piece tiers + heat scale + flavors), appetizers, burgers, drafts, cocktails
3. **Events** — recurring weekly event cards with "Notify Me"
4. **Contact** — location/hours, map, contact form

Three conversion goals (all wired to a mock API, real backend is a future swap):
- **Book a Table** (persistent CTA in the nav header)
- **Notify Me** (per-event dialog)
- **Contact Form** (general / large party / feedback / events-UFC PPV)

### Tech Stack Decided
- **Vite + React + TypeScript**
- **TanStack Router** (file-based, Vite plugin) for routing
- **TanStack Query** for data fetching / form mutations
- **shadcn/ui** — built on Radix + Tailwind, `base-nova` preset
- **Lucide React** icons (replacing Material Symbols from the Stitch designs)
- **Sonner** for toast notifications
- **Vercel** for hosting + preview deployments
- No zustand, no TanStack Table (no cart/admin in this build)

### Theme — "Wicked Neon"
Source of truth: `stitch_wicked_wings_website/wicked_neon/DESIGN.md`

Key CSS variable overrides for the shadcn global CSS file:
```css
--background:         #111316   /* Stitch: surface */
--card:               #1e2023   /* Stitch: surface-container */
--foreground:         #e2e2e6   /* Stitch: on-surface */
--muted-foreground:   #e6beb2   /* Stitch: on-surface-variant */
--border:             rgba(255,255,255,0.1)
--primary:            #ff571a   /* Stitch: primary-container — neon orange */
--primary-foreground: #000000
--accent:             #2ae500   /* Stitch: secondary-fixed-dim — electric green (prices) */
--destructive:        #ff525c   /* Stitch: tertiary-container — signal red (Heat 5) */
--ring:               #ff571a   /* neon orange focus rings */
```
Fonts: **Space Grotesk** (headings/labels) + **Be Vietnam Pro** (body) via Google Fonts.  
Heat scale custom vars: `--heat-1` … `--heat-5`.  
Permanently dark — set `<html class="dark">` and never toggle.

### API Boundary (typed, mock-first)
```ts
// src/api/client.ts
export interface WingsApi {
  getMenu(): Promise<MenuData>;
  listEvents(): Promise<RecurringEvent[]>;
  createReservation(input: ReservationInput): Promise<Reservation>;
  subscribeToEvent(input: { eventId: string; email: string }): Promise<NotifySubscription>;
  submitContactMessage(input: ContactInput): Promise<{ id: string }>;
}
// Swap VITE_API_MODE=http to wire to a real backend — components unchanged
export const api: WingsApi = import.meta.env.VITE_API_MODE === "http" ? httpClient : mockClient;
```

### Menu Data Model (matches actual Stitch HTML)
Wings: piece-tier pricing (6/$9.99, 12/$17.99, 24/$32.99, Tailgate-50/$65.99), bone-in or boneless, Heat 1–5 (Rookie/Starter/Pro/All-Star/Hall of Flame), four flavors (Classic Buffalo, Mango Habanero, Garlic Parmesan, The Widowmaker — waiver required).  
Other: Appetizers (Stadium Nachos, Fried Pickles, Pretzel Bites), Burgers (Wicked Smash, Buffalo Sandwich), Drafts (16oz/22oz dual pricing), Cocktails.

### Contact Info (real data from Stitch)
- **Address:** 615 West Slaughter Lane, Ste 108, Austin, TX 78748
- **Phone:** 512-520-8029
- **Hours:** Daily 11:00 AM – 2:00 AM

---

## What Was Built

**Nothing yet** — the workspace contains only the source Stitch HTML files.

```
wickedWings/
  stitch_wicked_wings_website/    ← source designs (do not modify)
    landing_page/code.html
    menu/code.html
    events/code.html
    contact/code.html
    wicked_neon/DESIGN.md
    logo_wicked.htm
    wicked_logo_2.jpg/screen.png
    wicked_neon/DESIGN.md
```

---

## Blocker: Node.js Version

The current active Node version is **v18.6.0**. The `shadcn@latest` CLI requires **Node >= 20** (specifically `>=20.5.0` or `^18.19.0`).

Attempts made:
- `nvm install 20` — failed silently (nvm list still only shows up to v18.6.0)
- `brew install node@20` — failed: no Xcode Command Line Tools installed
- `npm create vite@latest` — interrupted before completing

### To unblock before next session
Run **one** of these in a terminal outside Cursor:
```bash
# Option A — nvm (preferred, already installed)
nvm install 20 && nvm alias default 20

# Option B — direct pkg installer
# Download from: https://nodejs.org/en/download (LTS, macOS arm64 or x64 .pkg)
# Install, then verify: node --version  →  v20.x.x
```

---

## Next Steps (in order)

Once Node 20 is available, run these from the workspace root (`/Users/jackhall/projects/wickedWings`):

### Step 1 — Scaffold with shadcn
```bash
npx shadcn@latest init --name wicked-wings --template vite --preset base-nova
cd wicked-wings
```

### Step 2 — Add TanStack deps
```bash
npm install @tanstack/react-router @tanstack/react-query
npm install -D @tanstack/router-plugin @tanstack/react-query-devtools @tanstack/router-devtools
```

### Step 3 — Add shadcn components
```bash
npx shadcn@latest add button card dialog sheet input textarea select badge separator skeleton alert sonner
# "field" component for forms:
npx shadcn@latest add field
```

### Step 4 — Theme the app
Edit the global CSS file (`src/styles/app.css` or wherever `npx shadcn@latest info` reports `tailwindCssFile`) and apply the Wicked Neon palette from the table above + Google Fonts `@import`.

### Step 5 — Wire TanStack Router (Vite plugin)
In `vite.config.ts`:
```ts
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
export default { plugins: [TanStackRouterVite(), react()] };
```

### Step 6 — Build phases (follow the plan)
After setup, work through the phases in the plan file in order:
- **P0** setup + site shell (SiteHeader, MobileBottomNav, SiteFooter, `__root.tsx`, 4 placeholder routes)
- **P1** API boundary + `BookATableDialog`
- **P2** Landing page
- **P3** Menu page
- **P4** Events page
- **P5** Contact page
- **P6** Polish + `vercel.json` + deploy

---

## Reference Files
| File | Purpose |
|------|---------|
| `stitch_wicked_wings_website/landing_page/code.html` | Landing page visual reference + copy |
| `stitch_wicked_wings_website/menu/code.html` | Full menu structure, pricing, flavor names |
| `stitch_wicked_wings_website/events/code.html` | 5 weekly events, ticket card design |
| `stitch_wicked_wings_website/contact/code.html` | Address, phone, hours, form fields |
| `stitch_wicked_wings_website/wicked_neon/DESIGN.md` | Complete design system (colors, type, spacing) |
| `/Users/jackhall/.cursor/plans/wicked-wings-app_3602f741.plan.md` | Full plan with folder structure, component list, phase breakdown |

---

## Key Design Rules (quick ref for whoever picks this up)

1. **Permanently dark** — `<html class="dark">`, no toggle.
2. **shadcn primitives over custom markup** — `Button`, `Card`, `Dialog`, `Sheet`, `FieldGroup`/`Field`, `Badge`, `Separator`, `Skeleton`, `Alert`, `Sonner`.
3. **`gap-*` not `space-*`** for spacing.
4. **`size-*` not `w-* h-*`** when width = height.
5. **Semantic color tokens** (`text-primary`, `bg-card`, `text-muted-foreground`) — never raw `text-orange-600`.
6. **Lucide icons** — not Material Symbols. Key mappings: `MapPin` (location), `Phone`, `Clock`, `Bell` (notify-me), `Send` (submit), `Flame` (heat), `Beer`, `ArrowRight`, `Menu`, `Home`, `UtensilsCrossed`, `Calendar`.
7. **Forms** — always `FieldGroup` > `Field` > `FieldLabel` + input. Validation: `data-invalid` on `Field`, `aria-invalid` on the control.
8. **Dialogs** always need a `DialogTitle` (can be `sr-only`).
9. All mock submissions persist to `localStorage` — note this in the README so reviewers know data doesn't leave the browser.
