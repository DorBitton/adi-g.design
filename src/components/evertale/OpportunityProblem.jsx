const BASE = import.meta.env.BASE_URL

const OpportunityProblem = () => (
  <section className="w-full text-white py-20 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ── The Opportunity ───────────────────────────── */}
        <div className="flex flex-col items-center text-center">
          {/* Icons */}
          <div className="flex gap-4 mb-6">
            <img src={`${BASE}images/evertale/hero/Hero/fluent-mdl2_family.png`} alt="" aria-hidden="true" className="w-14 h-14" />
            <img src={`${BASE}images/evertale/hero/Hero/mdi_magic.png`} alt="" aria-hidden="true" className="w-14 h-14" />
          </div>
          <h2
            className="text-[50px] mb-5"
            style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" , letterSpacing: '0.02em'}}
          >
            The Opportunity
          </h2>
          <div className="flex flex-col gap-3 font-lato-light font-light text-[20px] leading-relaxed text-neutral-300">
            <p>Storytime is a chance to spark imagination and create shared memories.</p>
            <p>EverTale explores the opportunity to make stories personal, interactive, and meaningful for both parents and children.</p>
          </div>
        </div>

        {/* ── The Problem ───────────────────────────────── */}
        <div className="flex flex-col items-center text-center">
          {/* Icons */}
          <div className="flex gap-4 mb-6">
            <img src={`${BASE}images/evertale/hero/Hero/pajamas_time-out.png`} alt="" aria-hidden="true" className="w-14 h-14" />
            <img src={`${BASE}images/evertale/hero/Hero/octicon_stop-16.png`} alt="" aria-hidden="true" className="w-14 h-14" />
          </div>
          <h2
            className="text-[50px] mb-5"
            style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" , letterSpacing: '0.02em'}}
          >
            The Problem
          </h2>
          <div className="flex flex-col gap-3 font-lato-light font-light text-[20px] leading-relaxed text-neutral-300">
            <p>Parents want to create meaningful experiences for their children, but often lack the time or tools to do so.</p>
            <p>Existing storytelling solutions are eith  er too generic or require too much effort to personalize.</p>
            <p>As a result, storytime becomes passive rather than engaging.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default OpportunityProblem
