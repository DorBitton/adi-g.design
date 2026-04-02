const BASE = import.meta.env.BASE_URL

const SectionHeading = ({ children }) => (
  <h2
    className="text-[36px] md:text-[48px] leading-tight mb-4"
    style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
  >
    {children}
  </h2>
)

const DesignChallenge = () => (
  <section className="w-full text-white py-20" style={{ backgroundColor: '#1E1C1C' }}>
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <SectionHeading>Design Challenge</SectionHeading>
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl mb-12 leading-relaxed">
        The story creation flow was the most critical — and most complex — interaction in EverTale.
        Below is the evolution from low-fidelity wireframes to the final hi-fi screens.
      </p>

      <h3
        className="text-[22px] md:text-[28px] mb-8 font-lato-bold text-white"
      >
        Story Creation Flow
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lo-fi */}
        <div className="flex flex-col gap-4">
          <p className="text-neutral-500 text-sm font-lato uppercase tracking-widest">Lo-Fi Wireframes</p>
          <div className="flex gap-3 flex-wrap">
            {['04-create-1.png', '05-create-2.png', '06-create-3.png'].map((f, i) => (
              <div key={f} className="flex-1 min-w-[28%] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <img
                  src={`${BASE}images/evertale/wireframes/${f}`}
                  alt={`Create step ${i + 1} wireframe`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hi-fi */}
        <div className="flex flex-col gap-4">
          <p className="text-neutral-500 text-sm font-lato uppercase tracking-widest">Hi-Fi Mockup</p>
          <div className="rounded-2xl overflow-hidden border border-neutral-800">
            <img
              src={`${BASE}images/evertale/hifi/03-create-flow.png`}
              alt="Story creation hi-fi mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default DesignChallenge
