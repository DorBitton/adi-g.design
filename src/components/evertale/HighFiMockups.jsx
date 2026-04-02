const BASE = import.meta.env.BASE_URL

const screens = [
  { file: '01-splash.png', label: 'Splash' },
  { file: '02-home.png', label: 'Home' },
  { file: '03-create-flow.png', label: 'Create Flow' },
  { file: '04-story.png', label: 'Story View' },
]

const HighFiMockups = () => (
  <section className="w-full text-white py-20" style={{ backgroundColor: '#1E1C1C' }}>
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-4"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        High-Fidelity Mockups
      </h2>
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl mb-12 leading-relaxed">
        The final visual design — deep purples, soft lavender accents, and a warm typographic
        system that feels both magical and approachable for young readers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screens.map(({ file, label }) => (
          <div key={file} className="flex flex-col gap-3">
            <div className="rounded-3xl overflow-hidden border border-neutral-800">
              <img
                src={`${BASE}images/evertale/hifi/${file}`}
                alt={`EverTale hi-fi — ${label}`}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-500 text-sm font-lato text-center">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default HighFiMockups
