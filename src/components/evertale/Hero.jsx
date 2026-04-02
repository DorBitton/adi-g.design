const BASE = import.meta.env.BASE_URL

const Hero = () => (
  <div className="w-full text-white" style={{ backgroundColor: '#1E1C1C' }}>

    {/* ── Title block ─────────────────────────────────────── */}
    <div className="w-full max-w-5xl mx-auto px-6 lg:px-16 pt-28 pb-8 text-center">
      <h1
        className="leading-none tracking-tight mb-5"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5', fontSize: 'clamp(56px, 9vw, 128px)' }}
      >
        EverTale
      </h1>

      {/* Tags — inline pipe-separated */}
      <p className="text-neutral-400 text-sm font-lato mb-4 leading-relaxed">
        UX Design | UI Design | Mobile &amp; Web | Children's App | AI Product | Bilingual (EN / HE)
      </p>

      {/* Meta — bold labels inline */}
      <p className="text-neutral-300 text-sm font-lato mb-2 leading-relaxed">
        <span className="font-lato-bold text-white">Role:</span> UX/UI Design
        {' | '}
        <span className="font-lato-bold text-white">Collaboration:</span> Developer
        {' | '}
        <span className="font-lato-bold text-white">Product Type:</span> AI Web App
        {' | '}
        <span className="font-lato-bold text-white">Status:</span> Product in development
      </p>

      {/* Live Demo */}
      <p className="text-neutral-400 text-sm font-lato">
        Live Demo:{' '}
        <a
          href="https://evertale-f6c5c.web.app/#/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: '#D3B0D5' }}
        >
          https://evertale-f6c5c.web.app/#/landing
        </a>
      </p>
    </div>

    {/* ── What is EverTale + Phone mockup ─────────────────── */}
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left — What is EverTale? */}
        <div>
          <h2
            className="mb-6"
            style={{ fontFamily: "'Anton SC', sans-serif", fontSize: '48px', lineHeight: '50px', color: '#D3B0D5' }}
          >
            What is EverTale?
          </h2>
          <div className="flex flex-col gap-4 text-neutral-300 font-lato-light" style={{ fontSize: '28px', lineHeight: '50px' }}>
            <p>
              EverTale is an AI-powered storybook app that places children at the center
              of their own stories.
            </p>
            <p>
              By using personal details like their name, interests, and photos, the app creates
              unique, illustrated, and narrated tales.
            </p>
            <p>
              It's designed as a shared experience for parents and children to create
              and enjoy together.
            </p>
          </div>
        </div>

        {/* Right — Transparent phone mockup */}
        <div className="flex items-center justify-center">
          <img
            src={`${BASE}images/evertale/hero/hero.png`}
            alt="EverTale app mockup"
            className="w-full h-auto block"
          />
        </div>

      </div>
    </div>
  </div>
)

export default Hero
