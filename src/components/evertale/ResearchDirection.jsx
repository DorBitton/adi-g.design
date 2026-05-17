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

const bodyStyle = 'text-[20px] text-neutral-300 font-lato-light leading-relaxed'
const bodyInline = { fontFamily: 'Lato-light, sans-serif' }

const ResearchDirection = () => (
  <section className="w-full text-white py-20 bg-black pt-40">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      {/* Heading */}
      <h2
        className="text-[50px] mb-8"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif", letterSpacing: '0.02em' }}
      >
        Visual & UX Direction Research
      </h2>

      {/* Intro paragraphs */}
      <div className="mb-16" style={{ maxWidth: 1200 }}>
        <p className="text-neutral-300 text-[20px] font-lato-light mb-2 leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif' }}>
          <span className="font-lato font-bold text-white">The design direction for EverTale was shaped by the need to balance two distinct audiences: parents and children.</span>
        </p>
        <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif' }}>
          Rather than following traditional, highly saturated children's app aesthetics, the goal was to create a calm, cinematic experience that feels comfortable for adults, while still delivering rich, engaging storytelling for kids.
        </p>
        <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif' }}>
          This approach led to a dual-layer experience: a minimal, low-stimulation interface for navigation and setup, and a vibrant, character-driven visual world within the stories themselves.
        </p>
      </div>

      {/* Reference cards — 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
        {refCards.map(({ source, img, note }) => (
          <div key={source} className="rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: '#2a1f2e' }}>
            <div className="p-4 flex-shrink-0 h-52">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src={`${BASE}images/evertale/Visual & UX Direction Research/research/${img}`}
                  alt={source}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1">
              <p className="text-[14px] font-lato-light leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif', color: '#a78baa' }}>Source: {source}</p>
              <p className={bodyStyle} style={bodyInline}>{note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Choosing the Right Colors */}
      <h3 className="mb-8" style={{ fontFamily: 'Lato-bold, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff' }}>
        Choosing the Right Colors
      </h3>

      {/* Color swatch — 3 overlapping cards, Figma geometry at 100% scale */}
      {/* Total: 631 × 400. Cards: 300×400 at X positions 0, 174, 331 */}
      <div className="relative mb-16" style={{ width: 456, height: 289 }}>
        {/* Card 1: dark blue — top z */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: 217, height: 289, zIndex: 3, backgroundColor: '#151328', borderRadius: 14 }}>
          <span style={{ position: 'absolute', bottom: 17, left: 17, fontFamily: 'Lato-bold', fontSize: 15, color: '#fff' }}>151328</span>
        </div>
        {/* Card 2: purple — middle z */}
        <div style={{ position: 'absolute', left: 126, top: 0, width: 217, height: 289, zIndex: 2, backgroundColor: '#7F5086', borderRadius: '0 14px 14px 0' }}>
          <span style={{ position: 'absolute', bottom: 17, left: 109, fontFamily: 'Lato-bold', fontSize: 15, color: '#fff' }}>7F5086</span>
        </div>
        {/* Card 3: white — bottom z */}
        <div style={{ position: 'absolute', left: 239, top: 0, width: 217, height: 289, zIndex: 1, backgroundColor: '#FFFFFF', borderRadius: '0 14px 14px 0' }}>
          <span style={{ position: 'absolute', bottom: 17, left: 121, fontFamily: 'Lato-bold', fontSize: 15, color: '#000' }}>FFFFFF</span>
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
                className="flex-shrink-0 w-6 h-6 object-contain rounded"
              />
            )}
            <p className={bodyStyle} style={bodyInline}>{text}</p>
          </div>
        ))}
      </div>

      {/* Visual Design Direction */}
      <h3 className="mb-6" style={{ fontFamily: 'Lato-bold, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff' }}>
        Visual Design Direction
      </h3>
      <p className={`mb-6 ${bodyStyle}`} style={bodyInline}>
        The app generates Pixar-inspired 3D illustrated story pages, so the UI needed to feel like a frame worthy of that content — not compete with it.
      </p>
      <ul className="flex flex-col" style={{ gap: 4 }}>
        {designBullets.map(({ label, body }) => (
          <li key={label} className={bodyStyle} style={{ ...bodyInline, listStyle: 'disc', marginLeft: 32 }}>
            <span className="font-bold text-white" style={{ fontFamily: 'Lato-bold, sans-serif' }}>{label}</span> {body}
          </li>
        ))}
      </ul>

    </div>
  </section>
)

export default ResearchDirection
