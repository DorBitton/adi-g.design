# Known Issues

## 1. Font Usage Inconsistency

Fonts are defined correctly once in `src/index.css` (`@theme` tokens), but usage across components is split between Tailwind classes and hardcoded inline styles.

**The correct way (Tailwind classes):**
```jsx
className="font-casta"
className="font-lato"
className="font-lato-light"
className="font-lato-bold"
```

**The wrong way (scattered inline styles):**

| File | Line(s) | Hardcoded value |
|------|---------|-----------------|
| `src/components/home/Hero.jsx` | 147 | `style={{ fontFamily: 'Casta, serif' }}` |
| `src/components/home/Projects.jsx` | 128, 208 | `style={{ fontFamily: 'Casta, serif' }}` |
| `src/components/home/Contact.jsx` | 65, 75, 85 | `style={{ fontFamily: 'Casta, serif' }}` |
| `src/components/cinema-app/BackButton.jsx` | 13 | `style={{ fontFamily: 'Lato, sans-serif' }}` |
| `src/components/cinema-app/Hero.jsx` | 102 | `style={{ fontFamily: 'Casta, serif' }}` |
| `src/components/cinema-app/ProblemGoal.jsx` | 72, 78, 88, 94 | `style={{ fontFamily: 'Lato / Lato-light, sans-serif' }}` |
| `src/components/cinema-app/MarketResearch.jsx` | 77, 102, 108 | `style={{ fontFamily: 'Lato-light, sans-serif' }}` |
| `src/components/cinema-app/InformationArchitecture.jsx` | 97, 119, 128, 140, 146, 158 | `style={{ fontFamily: 'Lato / Lato-light, sans-serif' }}` |
| `src/components/cinema-app/UXPatterns.jsx` | 103, 109, 116, 130, 136 | `style={{ fontFamily: 'Lato / Lato-light, sans-serif' }}` |
| `src/components/cinema-app/PrototypesSection.jsx` | 243, 341, 355, 369, 383 | `style={{ fontFamily: 'Lato / Lato-light, sans-serif' }}` |

### Bug — `MarketResearch.jsx` line 77
`fontWeight` is accidentally written inside the `fontFamily` string — it has no effect:
```jsx
// WRONG — fontWeight: 600 is ignored
style={{ fontFamily: 'Lato-light, sans-serif, fontWeight: 600' }}

// CORRECT
style={{ fontFamily: 'Lato-light, sans-serif', fontWeight: 600 }}
// or better:
className="font-lato-light font-semibold"
```

---

## 2. Duplicate Dependencies — GSAP + Framer Motion

Both `gsap` and `framer-motion` are installed. The site primarily uses GSAP for all animations. Framer Motion adds bundle weight (~50KB gzipped) for no clear benefit unless it's actively used somewhere.

- Verify if Framer Motion is used anywhere
- If not, remove it: `npm uninstall framer-motion`

---

## 3. `BackButton.jsx` Scoped to `cinema-app/`

`src/components/cinema-app/BackButton.jsx` should live in `src/components/common/` so new project pages can reuse it without duplication.

---

## 4. Empty `public/videos/` Folder

The `public/videos/` directory is empty. Either populate it or remove it to keep the repo clean.

---

## 5. `lottie-react` — Verify Usage

`lottie-react` is listed in `package.json`. Confirm it is actively used. If not, remove it to reduce bundle size.
