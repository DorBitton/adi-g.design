const BASE = import.meta.env.BASE_URL

const rows = [
  [
    { file: 'Welcome.png',   label: 'Landing' },
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
  <div className="flex-shrink-0 flex items-center justify-center px-10" style={{ alignSelf: 'center' }}>
    <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#D3B0D5' }} />
  </div>
)

const ScreenCard = ({ file, label }) => (
  <div className="flex flex-col gap-3" style={{ flex: 1, minWidth: 0 }}>
    <div className="rounded-lg overflow-hidden">
      <img
        src={`${BASE}images/evertale/hifi/${file}`}
        alt={`EverTale hi-fi — ${label}`}
        className="w-full h-auto block"
      />
    </div>
    <p className="text-[16px] font-lato-light leading-relaxed text-center" style={{ fontFamily: 'Lato-light, sans-serif', color: '#D3B0D5' }}>{label}</p>
  </div>
)

const HighFiMockups = () => (
  <section className="w-full text-white py-20 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      <h2
        className="text-[50px] leading-tight mb-16"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif", letterSpacing: '0.02em' }}
      >
        UI - High-Fi Mockups
      </h2>

      <div className="flex flex-col gap-8 max-w-[70%]">
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
