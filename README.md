# adi-g.design

Personal portfolio and UX design site for Adi — a designer transitioning from architecture to digital experiences. The site showcases featured case studies, small projects, and design philosophy.

**Live site:** [adi-g.design](https://adi-g.design)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 7](https://vite.dev/) |
| Routing | [React Router DOM 7](https://reactrouter.com/) (HashRouter) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| Animation | [GSAP 3](https://gsap.com/) + [@gsap/react](https://gsap.com/docs/v3/Packages/@gsap/react/) (ScrollTrigger, ScrollSmoother, ScrollToPlugin) |
| Motion | [Framer Motion 12](https://motion.dev/) |
| UI primitives | [shadcn/ui](https://ui.shadcn.com/) tooling (`clsx`, `tailwind-merge`, `class-variance-authority`) |
| Icons | [lucide-react](https://lucide.dev/) |
| Responsive | [react-responsive](https://github.com/yocontra/react-responsive) |
| Linting | [ESLint 9](https://eslint.org/) (flat config) |
| Deployment | GitHub Actions → GitHub Pages |

> **HashRouter** is used so the SPA routes work correctly on GitHub Pages without server-side rewrites.

---

## Project Structure

```
adi-g.design/
├── public/
│   ├── fonts/                        # Casta (serif) + Lato (sans-serif) font files
│   ├── images/
│   │   ├── cards/                    # Skill card icons (PNG)
│   │   ├── cinema-app/               # Cinema App case study assets
│   │   │   ├── Lofi-Wireframe-Sketches/
│   │   │   ├── market-research/      # Competitor streaming logos
│   │   │   └── Prototype/            # High-fidelity mockup screens
│   │   ├── projects/                 # Project card images
│   │   │   ├── CinemaApp/
│   │   │   └── smallProjects/
│   │   └── transition/               # Marquee section icons
│   ├── videos/
│   ├── resume.pdf
│   └── CNAME                         # Custom domain: adi-g.design
├── src/
│   ├── main.jsx                      # App entry point
│   ├── App.jsx                       # Router, GSAP registration, scroll cleanup
│   ├── index.css                     # Tailwind @theme, custom fonts, keyframes
│   ├── App.css                       # ScrollSmoother wrapper styles
│   ├── lib/
│   │   └── utils.js                  # cn() helper (clsx + tailwind-merge)
│   ├── hooks/
│   │   └── useResponsive.js          # Breakpoint hooks (mobile/tablet/desktop)
│   └── components/
│       ├── common/
│       │   └── ErrorBoundary.jsx
│       ├── home/                     # Home page — one file per section
│       │   ├── index.jsx             # Layout + GSAP ScrollSmoother setup
│       │   ├── Header.jsx            # Sticky nav + mobile menu
│       │   ├── Hero.jsx              # Pinned hero + skill cards marquee
│       │   ├── Projects.jsx          # Featured project card (Cinema App)
│       │   ├── SmallProjects.jsx     # Stacked card project grid
│       │   ├── AboutMe.jsx           # Design philosophy section
│       │   └── Contact.jsx           # Contact info + resume download
│       └── cinema-app/               # Cinema App case study — one file per section
│           ├── index.jsx
│           ├── BackButton.jsx
│           ├── Hero.jsx
│           ├── ProblemGoal.jsx
│           ├── MarketResearch.jsx
│           ├── UXPatterns.jsx
│           ├── InformationArchitecture.jsx
│           ├── WireframesSection.jsx
│           └── PrototypesSection.jsx
├── .github/workflows/deploy.yml      # CI/CD pipeline
├── vite.config.js
└── package.json
```

---

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `components/home/index.jsx` | Home — hero, projects, about, contact |
| `/cinema-app` | `components/cinema-app/index.jsx` | Cinema App UX case study |

---

## Design System

### Colors (`src/index.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `oklch(0% 0 0)` (black) | Page background |
| `--color-foreground` | `oklch(100% 0 0)` (white) | Body text |
| `--color-primary` | `#FF0084` (pink) | Accent, highlights |
| `--color-card` | `oklch(15% 0 0)` (dark gray) | Card backgrounds |
| `--color-border` | `oklch(30% 0 0)` (medium gray) | Borders |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Casta** (serif) | Regular, Italic | Headings, display text |
| **Lato** (sans-serif) | 300, 400, 700, 900 | Body text, UI labels |

### Breakpoints (`src/hooks/useResponsive.js`)

| Hook | Breakpoint |
|------|-----------|
| `useMobile()` | ≤ 480px |
| `useTablet()` | 481–768px |
| `useTabletLg()` | 769–1024px |
| `useDesktop()` | > 1024px |

---

## Key Patterns

### GSAP Animations

All GSAP animations use `useLayoutEffect` + `gsap.context()` for proper scoping and cleanup:

```jsx
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(titleRef.current, { opacity: 0, y: 40, duration: 1 })
  }, containerRef)
  return () => ctx.revert()
}, [])
```

**ScrollSmoother** (1.2s smooth factor) wraps the entire home page in `components/home/index.jsx`. It is destroyed when navigating away (handled in `App.jsx`).

### Responsive Layout

```jsx
const isMobile = useMobile()
const isTablet = useTablet()

<h1 className={isMobile ? 'text-[40px]' : isTablet ? 'text-[56px]' : 'text-[96px]'}>
```

### Asset Paths

All `public/` assets use `import.meta.env.BASE_URL` as prefix:

```jsx
const baseUrl = import.meta.env.BASE_URL
<img src={`${baseUrl}images/cinema-app/Prototype/screen1.png`} />
```

### Class Merging

```jsx
import { cn } from '@/lib/utils'
<div className={cn('base-class', condition && 'extra-class')} />
```

---

## Adding a New Project Page

Follow the same pattern as `cinema-app`:

1. **Create component folder:** `src/components/<project-name>/`
   - `index.jsx` — page layout, composes all sections
   - Section files: `Hero.jsx`, `ProblemGoal.jsx`, etc.
   - Reuse `BackButton.jsx` and `Contact.jsx` from the cinema-app pattern

2. **Add route** in `src/App.jsx`:
   ```jsx
   <Route path="/<project-name>" element={<ProjectNameDetail />} />
   ```

3. **Add project card** to home page:
   - Featured project → `src/components/home/Projects.jsx`
   - Smaller project → `src/components/home/SmallProjects.jsx`

4. **Add assets:** `public/images/<project-name>/`

5. **Add navigation link** in `src/components/home/Header.jsx` (if needed)

---

## Getting Started

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev       # Dev server (accessible on local network)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. Checkout → Node 20 → `npm ci` → `npm run build`
2. Upload `dist/` to GitHub Pages

Custom domain `adi-g.design` is set via `public/CNAME`.
