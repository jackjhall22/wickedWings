# Wicked Wings Slaughter

Marketing website for Wicked Wings — an Austin, TX sports bar at 615 West Slaughter Lane.

## Tech Stack

- **Vite** + **React 19** + **TypeScript**
- **TanStack Router** (file-based routing)
- **TanStack Query** (data fetching)
- **shadcn/ui** (Radix + Tailwind v4)
- **Sonner** (toast notifications)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing — hero, about section, menu teaser |
| `/menu` | Full menu with sticky category nav |
| `/events` | Weekly recurring events lineup |

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check then build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format with Prettier |

## Data

All menu and event data is served from local fixture files (`src/api/fixtures/`). The app uses a typed `WingsApi` interface via a mock client — no network requests are made.

## Theme

Permanently dark ("Wicked Neon" design system). Fonts: Space Grotesk (headings) + Be Vietnam Pro (body) via Google Fonts.
