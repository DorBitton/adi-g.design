const BASE = import.meta.env.BASE_URL

const InformationArchitecture = () => (
  <section className="w-full text-white py-20" style={{ backgroundColor: '#1E1C1C' }}>
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-4"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        Information Architecture
      </h2>
      <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 max-w-3xl mb-12 leading-relaxed">
        A clear, shallow hierarchy ensures children and parents can navigate the app intuitively —
        without dead-ends or confusion.
      </p>
      <div className="rounded-3xl overflow-hidden border border-neutral-800">
        <img
          src={`${BASE}images/evertale/ia/flow.png`}
          alt="EverTale information architecture flow"
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
)

export default InformationArchitecture
