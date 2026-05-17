# EverTale Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix the EverTale case study page so it matches the Figma design — correct layout, section names, content, and images.

**Architecture:** All sections are standalone JSX components under `src/components/evertale/`. The page composes them in `index.jsx`. Images live in `public/images/evertale/<subfolder>/`. Anton SC loads from Google Fonts (already in `index.html`). No Anton SC Tailwind token exists yet — components use inline `style={{ fontFamily: "'Anton SC', sans-serif" }}` which is correct.

**Tech Stack:** React 19, Vite 7, Tailwind CSS v4, Anton SC (Google Fonts), Lato (local fonts)

**Figma reference:** https://www.figma.com/design/cNXGImH513nWVTMBCYkU59/Web-app---EverTale?node-id=728-3015&m=dev

---

## ⚠️ PREREQUISITE: Image Exports (Adi must do these in Figma)

Before building anything, the following images need to be exported from Figma and placed in the correct folders. **Without these, the wireframes and IA sections cannot be completed.**

### Images to export from Figma → save to these exact paths:

| What | Where in Figma | Save to |
|------|---------------|---------|
| IA flow diagram | The "Information Architecture" section's flow image (Frame inside Portfolio) | `public/images/evertale/ia/flow.png` (replace current) |
| Wireframe — Splash | Inside "UX - Wireframes" frame, first screen | `public/images/evertale/wireframes/01-splash.png` (replace) |
| Wireframe — Home | Second screen | `public/images/evertale/wireframes/02-home.png` (replace) |
| Wireframe — Sign In | Third screen | `public/images/evertale/wireframes/03-login.png` (replace) |
| Wireframe — Create 1 | Fourth screen | `public/images/evertale/wireframes/04-create-1.png` (replace) |
| Wireframe — Create 2 | Fifth screen | `public/images/evertale/wireframes/05-create-2.png` (replace) |
| Wireframe — Create 3 | Sixth screen | `public/images/evertale/wireframes/06-create-3.png` (replace) |
| Wireframe — Story View | Seventh screen | `public/images/evertale/wireframes/07-story.png` (replace) |
| Wireframe — Library | Eighth screen | `public/images/evertale/wireframes/08-library.png` (replace) |

**Current state of wrong files:**
- `wireframes/` folder currently holds animated Disney-style story illustration stills (Frame 269.png series) — these are hi-fi story content images, not wireframe UI screens.
- `ia/flow.png` currently holds `Screenshot 2026-03-27 133358 1.png` which appears to show Apple Books screenshots, not an IA flow diagram.

**Note on research images:** The research folder images (pixar, headspace, khan-academy, apple-books) appear correct based on Figma. Confirm with Adi.

---

## Current State Summary (what was built so far)

All components exist. Main issues:
1. Hero shows a full-width forest image — Figma shows the actual app in an iPhone frame
2. Missing "What is EverTale?" intro section (goes between Hero and Opportunity/Problem)
3. Research section is named "Research & Design Direction" — Figma says "Visual Information Design"
4. Research section missing the Visual Design Direction text block after the color palette
5. IA section has wrong image (needs export from Figma)
6. Wireframes section has completely wrong images (animated scenes, not grey lo-fi UI screens)
7. User Testing content is fabricated — should match Figma text
8. Home page Projects.jsx doesn't show EverTale yet

---

## Task 1: Add Anton SC to Tailwind theme

**Why:** The `font-anton` class doesn't exist — components must use inline `style`. Adding it to the theme makes future usage cleaner.

**Files:**
- Modify: `src/index.css`

**Step 1: Add font token**

In `src/index.css`, inside the `@theme { }` block, after `--font-family-lato-bold`, add:

```css
--font-family-anton: 'Anton SC', sans-serif;
```

**Step 2: Verify in browser**

Visit `http://localhost:5173/#/evertale` — headings should still look the same (no visible change, just enables `font-anton` class for future use).

**Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add Anton SC to Tailwind font theme"
```

---

## Task 2: Fix Hero — replace forest image with app mockup

**Context:** The Figma hero shows the EverTale app running inside an iPhone 13 Pro frame. The device frame PNG is already at `public/images/evertale/device-frame.png` (329KB, copied from `iPhone 13 Pro.png`). The hi-fi splash/home app screens are `hifi/01-splash.png` and `hifi/02-home.png` (Welcome 44.png and Welcome 45.png, 482KB each — these appear to be composite composite images of the app UI).

**Files:**
- Modify: `src/components/evertale/Hero.jsx`

**Step 1: Understand the Figma hero layout**

Open Figma, click on the Portfolio frame's top area. The hero shows:
- Left side: Title "EVERTALE", small subtitle text ("An AI-powered bedtime story app for children"), then the tag pills (Role, Type etc.)
- Right side (or full-width below title): One or two phone mockups with the EverTale splash/home screen inside the iPhone frame

The current `hero.png` (Frame 208.png, 140KB, the forest-boy illustration) is actually an *in-app scene image* — it belongs inside the app mockup frame, not as a standalone hero.

**Step 2: Check current hero image by opening Figma**

Navigate to: https://www.figma.com/design/cNXGImH513nWVTMBCYkU59/Web-app---EverTale?node-id=728-3015&m=dev

Click on the top section of the Portfolio frame. Look at the actual layout — is it:
a) Title left + single phone mockup right (two-column)
b) Title + tags on top, then full-width phone mockups below

**Step 3: Redesign Hero.jsx based on what you see**

Replace the current `<img hero.png>` with a phone mockup display. Here's the two-column approach (adjust if Figma shows something different):

```jsx
const BASE = import.meta.env.BASE_URL

const Hero = () => (
  <div className="w-full bg-black text-white">
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-16">

      {/* Two-column: text left, phone mockup right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Title + meta */}
        <div>
          <h1
            className="leading-none tracking-tight text-[72px] md:text-[96px] lg:text-[128px]"
            style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
          >
            EverTale
          </h1>

          <div className="flex flex-wrap gap-3 mt-6">
            {['UX Design', 'Mobile App', 'AI-Powered', 'Children'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-neutral-600 text-neutral-300 text-sm font-lato"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 border-t border-neutral-800 pt-8">
            {[
              { label: 'Role', value: 'UX Designer' },
              { label: 'Type', value: 'End-to-end' },
              { label: 'Status', value: 'Case Study' },
              { label: 'Platform', value: 'iOS Mobile' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-neutral-500 text-sm font-lato uppercase tracking-widest mb-1">{label}</p>
                <p className="text-white text-lg font-lato-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: iPhone mockup */}
        <div className="relative flex justify-center">
          <div className="relative w-[280px] md:w-[320px]">
            <img
              src={`${BASE}images/evertale/hifi/01-splash.png`}
              alt="EverTale app splash screen"
              className="w-full h-auto rounded-[40px]"
            />
            <img
              src={`${BASE}images/evertale/device-frame.png`}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
```

**Note:** Adjust `rounded-[40px]` and positioning based on how the device-frame.png composites with the app screenshot — you may need to tweak padding/offsets so the screen fills the phone frame correctly. The device-frame.png is an iPhone 13 Pro outline PNG (transparent background).

**Step 4: Check in browser** — does it look like the Figma hero?

**Step 5: Commit**

```bash
git add src/components/evertale/Hero.jsx
git commit -m "feat: evertale hero — replace forest image with iPhone app mockup"
```

---

## Task 3: Add "What is EverTale?" intro section

**Context:** The Figma shows a section between the title/meta and the Opportunity/Problem cards. It has a brief description of the app on the left and the app mockup visible on the right.

**Files:**
- Create: `src/components/evertale/WhatIsEverTale.jsx`
- Modify: `src/components/evertale/index.jsx`

**Step 1: Create WhatIsEverTale.jsx**

Open Figma and look at the text in this section (it's labeled something like "Frame 427318910" in the layers). Read the exact text, then create:

```jsx
const WhatIsEverTale = () => (
  <section className="w-full bg-black text-white py-16">
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-6"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        What is EverTale?
      </h2>
      {/* Replace this with the actual Figma text */}
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl leading-relaxed">
        EverTale is an AI-powered mobile app that helps parents create personalised,
        illustrated bedtime stories starring their child — in seconds.
      </p>
    </div>
  </section>
)

export default WhatIsEverTale
```

**Important:** Read the actual Figma text for this section before writing the copy. Adjust the text to match exactly.

**Step 2: Add to index.jsx**

```jsx
import WhatIsEverTale from './WhatIsEverTale'

// In the JSX, between <Hero /> and <OpportunityProblem />:
<WhatIsEverTale />
```

**Step 3: Check in browser**

**Step 4: Commit**

```bash
git add src/components/evertale/WhatIsEverTale.jsx src/components/evertale/index.jsx
git commit -m "feat: add WhatIsEverTale intro section"
```

---

## Task 4: Fix ResearchDirection — section name + add Visual Design text

**Context:**
- Section heading in Figma: **"Visual Information Design"** (not "Research & Design Direction")
- After the color palette, the Figma has a "Visual Design Direction" text block with typography/design principle information
- The Figma layer "Visual Design Direction" is a heading with accompanying text

**Files:**
- Modify: `src/components/evertale/ResearchDirection.jsx`

**Step 1: Open Figma, navigate to the research section**

Click on "Frame 427318949" in the layers panel. Read:
1. The exact section heading text
2. The text block that appears below the color palette (the "Visual Design Direction" content)

**Step 2: Update ResearchDirection.jsx**

Change the heading text from `"Research & Design Direction"` to whatever Figma shows (likely `"Visual Information Design"`).

After the color palette `<div>`, add a "Visual Design Direction" subsection:

```jsx
{/* Visual Design Direction */}
<div className="mt-16">
  <h3
    className="text-[28px] md:text-[36px] mb-6"
    style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
  >
    Visual Design Direction
  </h3>
  {/* Add the actual Figma text here — typography choices, design principles */}
  <p className="font-lato-light font-light text-[18px] text-neutral-300 leading-relaxed max-w-3xl">
    {/* Paste from Figma */}
  </p>
</div>
```

**Step 3: Verify in browser**

**Step 4: Commit**

```bash
git add src/components/evertale/ResearchDirection.jsx
git commit -m "fix: research section — correct heading, add visual design direction block"
```

---

## Task 5: Fix InformationArchitecture — image placeholder until Figma export

**Context:** The current `ia/flow.png` is the wrong file. The actual IA flow diagram needs to be exported from Figma. This task adds a clear placeholder and notes so it's obvious the image needs replacing.

**Files:**
- Modify: `src/components/evertale/InformationArchitecture.jsx`

**Step 1: Check if Adi has already exported the IA image**

Run: `ls -la "public/images/evertale/ia/"` — check if `flow.png` has been replaced with the correct file (the real IA diagram from Figma would look like a flow chart/diagram of the app screens, NOT Apple Books screenshots).

**Step 2a: If not yet replaced — add a placeholder state**

Wrap the image in a conditional that shows a visible "needs image" placeholder:

```jsx
{/* TODO: Replace ia/flow.png with the exported IA flow diagram from Figma */}
<div className="rounded-3xl overflow-hidden border border-dashed border-[#D3B0D5]/40 bg-neutral-900/50 min-h-[300px] flex items-center justify-center">
  <p className="text-neutral-600 font-lato text-center px-8">
    IA Flow Diagram — export from Figma and replace public/images/evertale/ia/flow.png
  </p>
</div>
```

**Step 2b: If image IS correct — keep the current `<img>` tag, no change needed**

**Step 3: Commit (if changed)**

```bash
git add src/components/evertale/InformationArchitecture.jsx
git commit -m "fix: ia section — placeholder until flow diagram exported from Figma"
```

---

## Task 6: Fix Wireframes — placeholder until Figma export

**Context:** The current wireframe images (Frame 269.png series = `01-splash.png` through `08-library.png`) are hi-fi animated story scene illustrations (cute animals, Disney-style characters) — **not** lo-fi wireframes. The actual wireframes are grey/white mobile UI screens in Figma that need to be exported.

Until Adi exports them, show a clear placeholder.

**Files:**
- Modify: `src/components/evertale/Wireframes.jsx`
- Modify: `src/components/evertale/DesignChallenge.jsx` (also uses wireframe images)

**Step 1: Update Wireframes.jsx to detect missing/wrong images**

Replace the screen grid with a placeholder until images are exported:

```jsx
const Wireframes = () => (
  <section className="w-full bg-black text-white py-20">
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-4"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        UX — Wireframes
      </h2>
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl mb-12 leading-relaxed">
        Low-fidelity explorations focused on layout, flow, and hierarchy before any visual styling.
      </p>

      {/*
        TODO: Export the 8 wireframe screens from Figma (grey lo-fi UI screens, not story illustrations)
        and replace the files in public/images/evertale/wireframes/:
        01-splash.png, 02-home.png, 03-login.png, 04-create-1.png,
        05-create-2.png, 06-create-3.png, 07-story.png, 08-library.png
      */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {screens.map(({ file, label }) => (
          <div key={file} className="flex flex-col items-center gap-2">
            <div className="w-full aspect-[9/16] rounded-xl border border-dashed border-neutral-700 bg-neutral-900/50 flex items-center justify-center">
              <span className="text-neutral-700 text-[10px] font-lato text-center px-1">{label}</span>
            </div>
            <span className="text-neutral-600 text-[10px] font-lato text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)
```

**Note:** Also fix the section heading from `"Wireframes"` to `"UX — Wireframes"` to match the Figma layer name.

**Step 2: Update DesignChallenge.jsx lo-fi column similarly**

The lo-fi wireframes column in `DesignChallenge.jsx` also references the wrong images. Apply the same placeholder approach for the 3 create-flow wireframe images.

**Step 3: Once Adi exports the wireframes → restore the `<img>` tags**

When the correct grey lo-fi wireframe PNGs are in place, revert to the image grid (the existing img code can be restored).

**Step 4: Commit**

```bash
git add src/components/evertale/Wireframes.jsx src/components/evertale/DesignChallenge.jsx
git commit -m "fix: wireframes — placeholders until grey lo-fi screens exported from Figma"
```

---

## Task 7: Fix UserTesting — match Figma text

**Context:** The current UserTesting.jsx has completely fabricated content (stats, paragraphs). The Figma shows:
- A heading (check Figma for exact text — visible in layers as "I conducted initial testing wit...")
- A paragraph starting with "The app generates Pixar-ins..."
- A paragraph starting with "I conducted initial testing wit..."

**Files:**
- Modify: `src/components/evertale/UserTesting.jsx`

**Step 1: Open Figma, navigate to the UserTesting section**

Click "I conducted initial testing wit..." in the layers panel. Read the full text.
Also click "The app generates Pixar-ins..." and read the full text.

**Step 2: Rewrite UserTesting.jsx with actual Figma copy**

The fabricated stats cards should be replaced with the real paragraphs. Likely structure:

```jsx
const UserTesting = () => (
  <section className="w-full bg-black text-white py-20">
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-6"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        User Testing
      </h2>
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl leading-relaxed mb-6">
        {/* Paste "The app generates Pixar-ins..." full text from Figma */}
      </p>
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl leading-relaxed">
        {/* Paste "I conducted initial testing wit..." full text from Figma */}
      </p>
    </div>
  </section>
)
```

**Note:** Check if there's a section heading in Figma different from "User Testing" — look at the layer above these text blocks.

**Step 3: Verify in browser**

**Step 4: Commit**

```bash
git add src/components/evertale/UserTesting.jsx
git commit -m "fix: user testing — replace fabricated content with actual Figma copy"
```

---

## Task 8: Fix HighFiMockups — verify images and section heading

**Context:** The hi-fi mockups folder has 4 images:
- `hifi/01-splash.png` = Welcome 44.png (482KB)
- `hifi/02-home.png` = Welcome 45.png (482KB)
- `hifi/03-create-flow.png` = Story creation flow (482KB)
- `hifi/04-story.png` = Hebrew-named story image (196KB)

These appear to be correct hi-fi screens. The section heading should be verified against Figma.

**Files:**
- Modify: `src/components/evertale/HighFiMockups.jsx`

**Step 1: Open Figma, check the hi-fi mockups section**

Click "Frame 427318959" in the layers panel. Check:
1. What is the exact section heading? (likely "Hi-fi Mockups" or just "Hi-Fi")
2. How many screens are shown?
3. What is the layout (grid, horizontal row, stacked)?

**Step 2: Update heading if needed**

Change `"High-Fidelity Mockups"` to match Figma exactly.

**Step 3: Verify layout matches Figma**

The current grid is `grid-cols-2`. If Figma shows something different (horizontal scroll, single column, etc.) update accordingly.

**Step 4: Commit**

```bash
git add src/components/evertale/HighFiMockups.jsx
git commit -m "fix: hi-fi mockups section — match Figma heading and layout"
```

---

## Task 9: Add EverTale card to home page Projects

**Context:** The home page `src/components/home/Projects.jsx` currently only shows Cinema App. EverTale should appear as a second featured project.

**Files:**
- Modify: `src/components/home/Projects.jsx`

**Step 1: Read the current Projects.jsx**

```bash
cat src/components/home/Projects.jsx
```

**Step 2: Add EverTale entry**

Following the same pattern as Cinema App, add EverTale using `hifi/01-splash.png` or `hero/hero.png` as the thumbnail:

```jsx
{
  title: 'EverTale',
  description: 'AI-powered bedtime story app for children — end-to-end UX design',
  tags: ['UX Design', 'Mobile App', 'AI-Powered'],
  image: `${BASE}images/evertale/hifi/01-splash.png`,
  link: '/evertale',
}
```

**Step 3: Verify routing**

Check `src/App.jsx` has the `/evertale` route. If not:

```jsx
import EverTaleDetail from './components/evertale'
// In routes:
<Route path="/evertale" element={<EverTaleDetail />} />
```

**Step 4: Check in browser** — home page should show both project cards

**Step 5: Commit**

```bash
git add src/components/home/Projects.jsx src/App.jsx
git commit -m "feat: add EverTale card to home page projects"
```

---

## Task 10: Design polish pass — compare entire page to Figma

**This is the final visual QA task.** Open both the local site and Figma side by side and scroll through each section.

Check each section:
- [ ] Hero: correct layout and content
- [ ] WhatIsEverTale: text matches Figma exactly
- [ ] Opportunity/Problem: cards match Figma
- [ ] Meet the Users: persona cards match Figma
- [ ] Visual Information Design: heading correct, 4 cards, palette, design direction text
- [ ] Information Architecture: shows correct IA flow image (or placeholder)
- [ ] UX Wireframes: shows correct wireframe screens (or placeholder)
- [ ] Design Challenge: layout matches Figma
- [ ] User Testing: text matches Figma exactly
- [ ] Hi-Fi Mockups: screens and layout match Figma

For any remaining visual differences: note them in a list and fix them one at a time.

**Common issues to look for:**
- Section heading font sizes (Figma: 48px, check our code uses `text-[48px]`)
- Section vertical spacing (between sections — Figma uses consistent padding)
- Card border-radius differences
- Text colors (body text should be `text-neutral-300` not `text-white`)

**Step: Commit all remaining fixes**

```bash
git add -A
git commit -m "fix: evertale page visual polish pass"
```

---

## Task 11: Final — test navigation and deploy

**Step 1: Test full page scroll**

In browser, visit `http://localhost:5173/#/evertale`. Scroll the entire page. Check:
- No broken images (404s)
- No console errors
- All sections render correctly

**Step 2: Test navigation from home**

Visit `http://localhost:5173/`. Click EverTale card. Verify it navigates to `/evertale`.

**Step 3: Build for production**

```bash
npm run build
```

Check for any build errors.

**Step 4: Deploy**

```bash
git add -A
git commit -m "feat: evertale case study page complete"
git push origin main
```

GitHub Pages will auto-deploy (typically 1-2 min). Verify at `adi-g.design/#/evertale`.

---

## Image File Reality Check

These are the actual files currently in the project. Use this table when questions arise:

| Subfolder | File | What it actually is |
|-----------|------|---------------------|
| `hero/` | `hero.png` | Forest boy illustration (Frame 208.png) — an in-app story scene |
| `hifi/` | `01-splash.png` | App hi-fi screen (Welcome 44.png) — likely EverTale splash UI |
| `hifi/` | `02-home.png` | App hi-fi screen (Welcome 45.png) — likely EverTale home UI |
| `hifi/` | `03-create-flow.png` | Story creation flow composite |
| `hifi/` | `04-story.png` | Story view hi-fi screen (Hebrew filename) |
| `wireframes/` | `01-08` | **WRONG** — currently animated story illustrations (Frame 269 series) |
| `ia/` | `flow.png` | Possibly wrong — needs visual verification |
| `research/` | `pixar.png` | YouTube thumbnail (maxresdefault 1.png) |
| `research/` | `headspace.png` | Lightbulb emoji image (Light.png, 3KB) — may be wrong |
| `research/` | `khan-academy.png` | Khan Academy Kids screenshot |
| `research/` | `apple-books.png` | Apple Books screenshots |
| `personas/` | `emma.png` | ChatGPT-generated girl character image |
| root | `device-frame.png` | iPhone 13 Pro transparent PNG frame |
