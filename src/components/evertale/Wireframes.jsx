const BASE = import.meta.env.BASE_URL

const rows = [
  [
    { file: '01-splash.png', label: 'Landing' },
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
  <div className="flex-shrink-0 flex items-center justify-center px-10" style={{ alignSelf: 'center' }}>
    <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#D3B0D5' }} />
  </div>
)

const ScreenCard = ({ file, label }) => (
  <div className="flex flex-col gap-3" style={{ flex: 1, minWidth: 0 }}>
    <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
      <img
        src={`${BASE}images/evertale/wireframes/${file}`}
        alt={label}
        className="w-full h-auto block"
      />
    </div>
    <p className="text-[16px] font-lato-light leading-relaxed text-center" style={{ fontFamily: 'Lato-light, sans-serif', color: '#D3B0D5' }}>{label}</p>
  </div>
)

const Wireframes = () => (
  <section className="w-full text-white py-20 bg-black pt-55">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      <h2
        className="text-[50px] leading-tight mb-16"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" ,  letterSpacing: '0.02em' }}
      >
        UX - Wireframes
      </h2>

      <div className="flex flex-col gap-8 max-w-[70%]">
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
