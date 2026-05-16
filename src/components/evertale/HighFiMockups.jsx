const BASE = import.meta.env.BASE_URL

const rows = [
  [
    { file: 'Welcome.png',   label: 'Welcome' },
    { file: 'Main.png',      label: 'Main' },
    { file: 'Login.png',     label: 'Login' },
  ],
  [
    { file: 'Create1.png',   label: 'Create — Step 1' },
    { file: 'Create2.png',   label: 'Create — Step 2' },
    { file: 'Create3.png',   label: 'Create — Step 3' },
  ],
  [
    { file: 'Storyview.png', label: 'Story View' },
    null,
    { file: 'library.png',   label: 'Library' },
  ],
]

const Dot = () => (
  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 24, alignSelf: 'center' }}>
    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#5c5c5c' }} />
  </div>
)

const ScreenCard = ({ file, label }) => (
  <div className="flex flex-col gap-3" style={{ flex: 1, minWidth: 0 }}>
    <div className="rounded-3xl overflow-hidden border border-neutral-800">
      <img
        src={`${BASE}images/evertale/hifi/${file}`}
        alt={`EverTale hi-fi — ${label}`}
        className="w-full h-auto block"
        style={{ aspectRatio: '402/874', objectFit: 'cover' }}
      />
    </div>
    <p className="text-neutral-500 text-sm font-lato text-center">{label}</p>
  </div>
)

const HighFiMockups = () => (
  <section className="w-full text-white py-20 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      <h2
        className="text-[50px] leading-tight mb-4"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" }}
      >
        UI - High-Fi Mockups
      </h2>
      <p className="font-lato-light font-light text-[20px] text-neutral-300 max-w-3xl mb-12 leading-relaxed">
        The final visual design — deep purples, soft lavender accents, and a warm typographic
        system that feels both magical and approachable for young readers.
      </p>

      <div className="flex flex-col gap-8">
        {rows.map((row, ri) => (
          <div key={ri} className="flex items-start">
            {row.map((screen, i) => (
              <div key={screen ? screen.file : `empty-${ri}-${i}`} className="contents">
                {i > 0 && <Dot />}
                {screen
                  ? <ScreenCard {...screen} />
                  : <div style={{ flex: 1, minWidth: 0 }} />
                }
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default HighFiMockups
