const BASE = import.meta.env.BASE_URL

const createScreens = [
  { file: 'create1.png', label: 'Step 1' },
  { file: 'create2.png',  label: 'Step 2' },
  { file: 'create3.png', label: 'Step 3' },
]

const Dot = () => (
  <div className="flex-shrink-0 flex items-center justify-center px-10" style={{ alignSelf: 'center' }}>
    <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#D3B0D5' }} />
  </div>
)

const DesignChallenge = () => (
  <section className="w-full text-white py-20 bg-black pt-55">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      <h2
        className="text-[50px] mb-6"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif", letterSpacing: '0.02em' }}
      >
        Design Challenge: Story Creation Flow
      </h2>

      <p
        className="text-[20px] text-neutral-300 font-lato-light leading-relaxed mb-16"
        style={{ fontFamily: 'Lato-light, sans-serif' }}
      >
        Designing the story creation flow required balancing meaningful personalization
        with a simple, engaging experience for both parent and child.
      </p>

      <div className="flex items-center justify-center">
        {createScreens.map(({ file, label }, i) => (
          <div key={file} className="contents">
            {i > 0 && <Dot />}
            <img
              src={`${BASE}images/evertale/design/${file}`}
              alt={`Story creation flow — ${label}`}
              style={{ width: 261, height: 477, objectFit: 'cover', borderRadius: 16 }}
            />
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default DesignChallenge
