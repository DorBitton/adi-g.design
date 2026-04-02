const BASE = import.meta.env.BASE_URL

const refs = [
  {
    name: 'Pixar',
    img: `${BASE}images/evertale/research/pixar.png`,
    note: 'Emotional storytelling & world-building through vivid, character-driven visual language.',
  },
  {
    name: 'Headspace',
    img: `${BASE}images/evertale/research/headspace.png`,
    note: 'Calming, minimal UI that keeps focus on the content rather than chrome.',
  },
  {
    name: 'Khan Academy',
    img: `${BASE}images/evertale/research/khan-academy.png`,
    note: 'Progressive disclosure — complex flows broken into bite-sized, rewarding steps.',
  },
  {
    name: 'Apple Books',
    img: `${BASE}images/evertale/research/apple-books.png`,
    note: 'Clean library browsing with rich cover art and frictionless reading entry.',
  },
]

const palette = [
  { hex: '#2B1B3B', label: 'Deep Plum' },
  { hex: '#453147', label: 'Dark Mauve' },
  { hex: '#D3B0D5', label: 'Soft Lavender' },
  { hex: '#F7D9FF', label: 'Petal' },
  { hex: '#FFFFFF', label: 'White' },
]

const ResearchDirection = () => (
  <section className="w-full text-white py-20" style={{ backgroundColor: '#1E1C1C' }}>
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-4"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        Research & Design Direction
      </h2>
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl mb-12 leading-relaxed">
        Four key references shaped the visual and interaction language of EverTale — balancing
        wonder, calm, and purposeful simplicity.
      </p>

      {/* Reference cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {refs.map(({ name, img, note }) => (
          <div key={name} className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#453147' }}>
            <div className="h-40 bg-neutral-900 flex items-center justify-center overflow-hidden">
              <img src={img} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <p className="font-lato-bold text-white text-lg mb-2">{name}</p>
              <p className="font-lato-light font-light text-neutral-300 text-sm leading-relaxed">{note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Color palette */}
      <h3
        className="text-[28px] md:text-[36px] mb-6"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        Color Palette
      </h3>
      <div className="flex flex-wrap gap-4">
        {palette.map(({ hex, label }) => (
          <div key={hex} className="flex flex-col items-center gap-2">
            <div
              className="w-16 h-16 rounded-xl border border-neutral-700"
              style={{ backgroundColor: hex }}
            />
            <span className="text-neutral-400 text-xs font-lato">{label}</span>
            <span className="text-neutral-600 text-xs font-lato">{hex}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ResearchDirection
