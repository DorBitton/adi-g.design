const BASE = import.meta.env.BASE_URL

const OpportunityProblem = () => (
  <section className="w-full text-white py-20" style={{ backgroundColor: '#1E1C1C' }}>
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ── The Opportunity ───────────────────────────── */}
        <div>
          {/* Icons */}
          <div className="flex gap-4 mb-6">
            <img
              src={`${BASE}images/evertale/hero/fluent-mdl2_family.png`}
              alt=""
              aria-hidden="true"
              className="w-14 h-14"
            />
            <img
              src={`${BASE}images/evertale/hero/mdi_magic.png`}
              alt=""
              aria-hidden="true"
              className="w-14 h-14"
            />
          </div>
          <h2
            className="mb-5"
            style={{ fontFamily: "'Anton SC', sans-serif", fontSize: '48px', lineHeight: '50px', color: '#D3B0D5' }}
          >
            The Opportunity
          </h2>
          <div className="flex flex-col gap-3 font-lato-light text-neutral-300" style={{ fontSize: '28px', lineHeight: '50px' }}>
            <p>Storytime is a chance to spark imagination and create shared memories.</p>
            <p>
              EverTale explores the opportunity to make stories personal, interactive,
              and meaningful for both parents and children.
            </p>
          </div>
        </div>

        {/* ── The Problem ───────────────────────────────── */}
        <div>
          {/* Icons */}
          <div className="flex gap-4 mb-6">
            <img
              src={`${BASE}images/evertale/hero/pajamas_time-out.png`}
              alt=""
              aria-hidden="true"
              className="w-14 h-14"
            />
            <img
              src={`${BASE}images/evertale/hero/octicon_stop-16.png`}
              alt=""
              aria-hidden="true"
              className="w-14 h-14"
            />
          </div>
          <h2
            className="mb-5"
            style={{ fontFamily: "'Anton SC', sans-serif", fontSize: '48px', lineHeight: '50px', color: '#D3B0D5' }}
          >
            The Problem
          </h2>
          <div className="flex flex-col gap-3 font-lato-light text-neutral-300" style={{ fontSize: '28px', lineHeight: '50px' }}>
            <p>
              Parents want to create meaningful experiences for their children, but often
              lack the time or tools to do so.
            </p>
            <p>
              Existing storytelling solutions are either too generic or require too much
              effort to personalize.
            </p>
            <p>As a result, storytime becomes passive rather than engaging.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default OpportunityProblem
