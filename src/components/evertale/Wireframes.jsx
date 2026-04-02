const BASE = import.meta.env.BASE_URL

const screens = [
  { file: '01-splash.png', label: 'Splash' },
  { file: '02-home.png', label: 'Home' },
  { file: '03-login.png', label: 'Sign In' },
  { file: '04-create-1.png', label: 'Create — Step 1' },
  { file: '05-create-2.png', label: 'Create — Step 2' },
  { file: '06-create-3.png', label: 'Create — Step 3' },
  { file: '07-story.png', label: 'Story View' },
  { file: '08-library.png', label: 'Library' },
]

const Wireframes = () => (
  <section className="w-full text-white py-20" style={{ backgroundColor: '#1E1C1C' }}>
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-4"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        Wireframes
      </h2>
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl mb-12 leading-relaxed">
        Low-fidelity explorations focused on layout, flow, and hierarchy before any visual styling.
      </p>
    </div>

    {/* Horizontal scroll on mobile, wrap on desktop */}
    <div className="w-full overflow-x-auto pb-6 lg:overflow-x-visible">
      <div className="flex gap-4 px-6 lg:px-16 lg:flex-wrap lg:justify-start min-w-max lg:min-w-0 max-w-7xl mx-auto">
        {screens.map(({ file, label }) => (
          <div key={file} className="flex flex-col items-center gap-3 flex-shrink-0 w-[140px] lg:w-[calc(12.5%-14px)]">
            <div className="w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img
                src={`${BASE}images/evertale/wireframes/${file}`}
                alt={label}
                className="w-full h-auto"
              />
            </div>
            <span className="text-neutral-500 text-xs font-lato text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Wireframes
