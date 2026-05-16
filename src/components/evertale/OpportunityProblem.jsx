const BASE = import.meta.env.BASE_URL

const OpportunityProblem = () => (
  <section className="w-full text-white pt-55 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ── The Opportunity ───────────────────────────── */}
        <div className="flex flex-col items-center text-center">
          {/* Icons */}
          <div className="flex gap-4 mb-6">
            <img src={`${BASE}images/evertale/hero/Hero/fluent-mdl2_family.png`} alt="" aria-hidden="true" className="w-9 h-9" />
            <img src={`${BASE}images/evertale/hero/Hero/mdi_magic.png`} alt="" aria-hidden="true" className="w-9 h-9" />
          </div>
          <h2
            className="text-[50px] mb-5"
            style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" , letterSpacing: '0.02em'}}
          >
            The Opportunity
          </h2>
          <div className="flex flex-col max-w-xl">
            <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif' }}>Storytime is a chance to spark imagination and create shared memories. EverTale explores the opportunity to make stories personal, interactive, and meaningful for both children and parents.</p>
          </div>
        </div>

        {/* ── The Problem ───────────────────────────────── */}
        <div className="flex flex-col items-center text-center">
          {/* Icons */}
          <div className="flex gap-4 mb-6">
            <img src={`${BASE}images/evertale/hero/Hero/pajamas_time-out.png`} alt="" aria-hidden="true" className="w-8 h-8" />
            <img src={`${BASE}images/evertale/hero/Hero/octicon_stop-16.png`} alt="" aria-hidden="true" className="w-8 h-8" />
          </div>
          <h2
            className="text-[50px] mb-5"
            style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" , letterSpacing: '0.02em'}}
          >
            The Problem
          </h2>
          <div className="flex flex-col max-w-xl">
            <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif' }}>Parents want to create meaningful experiences for their children, but often lack the time or tools to do so. Existing storytelling solutions are either too generic or require too much effort to personalize. As a result, storytime becomes passive rather than engaging.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default OpportunityProblem
