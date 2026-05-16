const BASE = import.meta.env.BASE_URL

const refCards = [
  {
    source: 'Pixar / Disney',
    img: 'pixar.png',
    note: 'Character-driven compositions and expressive illustrations shaped the storytelling approach, focusing on emotional clarity and a central character.',
  },
  {
    source: 'Headspace',
    img: 'headspace.png',
    note: 'A dark, low-stimulation interface and guided flow create a calm, focused experience with reduced cognitive load.',
  },
  {
    source: 'Khan Academy Kids',
    img: 'khan-academy.png',
    note: 'Soft, rounded UI elements create an approachable, child-friendly interface without feeling overly playful.',
  },
  {
    source: 'Apple Books',
    img: 'apple-books.png',
    note: 'By emphasizing book covers and visuals on the main page, the interface lets users explore content quickly and enjoyably before opening a story.',
  },
]

const colorBullets = [
  { dot: '#151328', text: 'Dark Blue → calm, secure, stable' },
  { dot: '#7F5086', text: 'Purple → creativity, imagination, magic, mystery' },
  { dot: null, gradient: ['#151328', '#7F5086'], text: 'Dark Blue + Purple → emotional depth + sense of wonder, ideal for children' },
  { img: 'Common_use.png', text: 'Common use → bedtime books, fantasy, adventures, magical characters' },
  { img: 'Design_principle.png', text: 'Design principle → dark blue for backgrounds, purple for magical details, light accents for emphasis' },
  { img: 'User_effect.png', text: 'User effect → soothing yet stimulating imagination, engaging children without visual overload' },
]

const designBullets = [
  { label: 'Color:', body: 'Warm purple tones on decorative and brand elements; clean neutral backgrounds where the content lived. The palette was designed to feel cohesive across both the playful UI and the illustrated story pages.' },
  { label: 'Typography:', body: 'Large, legible, rounded. Readable by a child but not condescending for an adult.' },
  { label: 'Buttons and tap areas:', body: 'Generously sized throughout — the interface is used by kids and parents together, often on a phone.' },
  { label: 'Story reading view:', body: 'Deliberately minimal. Full-bleed illustration, clean text below, unobtrusive audio controls. Nothing pulls focus from the story.' },
  { label: 'RTL support:', body: 'The entire layout mirrors correctly for Hebrew, including reading direction, button placement, and text alignment.' },
]

const txt = (weight) => ({
  fontFamily: weight === 'bold' ? 'Lato-bold' : 'Lato-light',
  fontSize: 20,
  lineHeight: '1.625',
  color: '#fff',
})

const ResearchDirection = () => (
  <section className="w-full text-white py-20 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      {/* Heading */}
      <h2
        className="text-[50px] mb-8"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" }}
      >
        Visual &amp; UX Direction Research
      </h2>

      {/* Intro paragraphs */}
      <div className="mb-16" style={{ maxWidth: 1200 }}>
        <p style={{ ...txt('bold'), marginBottom: 0 }}>
          The design direction for EverTale was shaped by the need to balance two distinct audiences: parents and children.
        </p>
        <p style={txt('light')}>
          Rather than following traditional, highly saturated children's app aesthetics, the goal was to create a calm, cinematic experience that feels comfortable for adults, while still delivering rich, engaging storytelling for kids.
        </p>
        <p style={txt('light')}>
          This approach led to a dual-layer experience: a minimal, low-stimulation interface for navigation and setup, and a vibrant, character-driven visual world within the stories themselves.
        </p>
      </div>

      {/* Reference cards — 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {refCards.map(({ source, img, note }) => (
          <div key={source} className="rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: '#2a1f2e' }}>
            <div className="overflow-hidden">
              <img
                src={`${BASE}images/evertale/Visual & UX Direction Research/research/${img}`}
                alt={source}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <p style={{ fontFamily: 'Lato-light', fontSize: 14, color: '#a78baa' }}>Source: {source}</p>
              <p style={{ fontFamily: 'Lato-light', fontSize: 18, lineHeight: '28px', color: '#d4d4d4' }}>{note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Choosing the Right Colors */}
      <h3 className="mb-8" style={{ fontFamily: 'Lato, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}>
        Choosing the Right Colors
      </h3>

      {/* Color swatch — 3 overlapping cards, Figma geometry at 100% scale */}
      {/* Total: 631 × 400. Cards: 300×400 at X positions 0, 174, 331 */}
      <div className="relative mb-16" style={{ width: 631, height: 400 }}>
        {/* Card 1: dark blue — top z, all-corner radius 20. Label at its own bottom-left */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: 300, height: 400, zIndex: 3, backgroundColor: '#151328', borderRadius: 20 }}>
          <span style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: 'Lato-bold', fontSize: 20, color: '#fff' }}>151328</span>
        </div>
        {/* Card 2: purple — middle z. Visible area starts at 300-174=126px in, so label left: 126+24=150 */}
        <div style={{ position: 'absolute', left: 174, top: 0, width: 300, height: 400, zIndex: 2, backgroundColor: '#7F5086', borderRadius: '0 20px 20px 0' }}>
          <span style={{ position: 'absolute', bottom: 24, left: 150, fontFamily: 'Lato-bold', fontSize: 20, color: '#fff' }}>7F5086</span>
        </div>
        {/* Card 3: white — bottom z, right corners rounded. Visible area starts at 474-331=143px in, so label left: 143+24=167 */}
        <div style={{ position: 'absolute', left: 331, top: 0, width: 300, height: 400, zIndex: 1, backgroundColor: '#FFFFFF', borderRadius: '0 20px 20px 0' }}>
          <span style={{ position: 'absolute', bottom: 24, left: 167, fontFamily: 'Lato-bold', fontSize: 20, color: '#000' }}>FFFFFF</span>
        </div>
      </div>

      {/* Color meaning bullets */}
      <div className="flex flex-col mb-20" style={{ gap: 8 }}>
        {colorBullets.map(({ dot, gradient, img, text }, i) => (
          <div key={i} className="flex items-center gap-4">
            {dot && !gradient && (
              <div className="flex-shrink-0 w-6 h-6 rounded-full" style={{ backgroundColor: dot }} />
            )}
            {gradient && (
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex overflow-hidden">
                <div style={{ flex: 1, backgroundColor: gradient[0] }} />
                <div style={{ flex: 1, backgroundColor: gradient[1] }} />
              </div>
            )}
            {img && (
              <img
                src={`${BASE}images/evertale/Visual & UX Direction Research/Choosing the Right Colors/${img}`}
                alt=""
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 object-contain"
              />
            )}
            <p style={txt('light')}>{text}</p>
          </div>
        ))}
      </div>

      {/* Visual Design Direction */}
      <h3 className="mb-6" style={{ fontFamily: 'Lato, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}>
        Visual Design Direction
      </h3>
      <p className="mb-6" style={txt('light')}>
        The app generates Pixar-inspired 3D illustrated story pages, so the UI needed to feel like a frame worthy of that content — not compete with it.
      </p>
      <ul className="flex flex-col" style={{ gap: 4 }}>
        {designBullets.map(({ label, body }) => (
          <li key={label} style={{ ...txt('light'), listStyle: 'disc', marginLeft: 32 }}>
            <span style={{ fontFamily: 'Lato-bold' }}>{label}</span> {body}
          </li>
        ))}
      </ul>

    </div>
  </section>
)

export default ResearchDirection
