const BASE = import.meta.env.BASE_URL

const createScreens = [
  { file: 'create1.png', label: 'Step 1' },
  { file: 'create2.png',  label: 'Step 2' },
  { file: 'create3.png', label: 'Step 3' },
]

const DesignChallenge = () => (
  <section className="w-full text-white py-20 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      <h2
        className="text-[50px] mb-6"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" }}
      >
        Design Challenge: Story Creation Flow
      </h2>

      <p
        className="font-lato-light font-light text-[20px] leading-relaxed mb-16 max-w-4xl"
        style={{ color: '#d4d4d4' }}
      >
        Designing the story creation flow required balancing meaningful personalization
        with a simple, engaging experience for both parent and child.
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        {createScreens.map(({ file, label }) => (
          <img
            key={file}
            src={`${BASE}images/evertale/design/${file}`}
            alt={`Story creation flow — ${label}`}
            style={{ width: 290, height: 530, objectFit: 'cover', borderRadius: 16 }}
          />
        ))}
      </div>

    </div>
  </section>
)

export default DesignChallenge
