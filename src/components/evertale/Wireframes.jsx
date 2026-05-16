const BASE = import.meta.env.BASE_URL

const rows = [
  [
    { file: '01-splash.png', label: 'Splash' },
    { file: '02-home.png',   label: 'Home' },
    { file: '03-login.png',  label: 'Sign In' },
  ],
  [
    { file: '04-create-1.png', label: 'Create — Step 1' },
    { file: '05-create-2.png', label: 'Create — Step 2' },
    { file: '06-create-3.png', label: 'Create — Step 3' },
  ],
  [
    { file: '07-story.png',   label: 'Story View' },
    null,
    { file: '08-library.png', label: 'Library' },
  ],
]

const Dot = () => (
  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 24, alignSelf: 'center' }}>
    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#5c5c5c' }} />
  </div>
)

const ScreenCard = ({ file, label }) => (
  <div className="flex flex-col gap-3" style={{ flex: 1, minWidth: 0 }}>
    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
      <img
        src={`${BASE}images/evertale/wireframes/${file}`}
        alt={label}
        className="w-full h-auto block"
      />
    </div>
    <p className="text-neutral-500 text-sm font-lato text-center">{label}</p>
  </div>
)

const Wireframes = () => (
  <section className="w-full text-white py-20 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      <h2
        className="text-[50px] leading-tight mb-4"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" }}
      >
        UX - Wireframes
      </h2>
      <p className="font-lato-light font-light text-[20px] text-neutral-300 max-w-3xl mb-12 leading-relaxed">
        Low-fidelity explorations focused on layout, flow, and hierarchy before any visual styling.
      </p>

      <div className="flex flex-col gap-8">
        {rows.map((row, ri) => (
          <div key={ri} className="flex items-start">
            {row.map((screen, i) => (
              <div key={screen ? screen.file : `empty-${i}`} className="contents">
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

export default Wireframes
