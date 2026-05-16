const BASE = import.meta.env.BASE_URL

const Hero = () => (
  <div className="w-full text-white bg-black">

    {/* ── Title block ─────────────────────────────────────── */}
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16 pt-28 pb-8 text-center">
      <h1
        className="text-[96px] leading-none mb-5"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5', letterSpacing: '0.05em' }}
      >
        EverTale
      </h1>

      {/* Tags — inline pipe-separated */}
      <p className="text-[20px] text-neutral-300 font-lato-light mb-8 leading-relaxed"
        style={{ fontFamily: 'Lato-light, sans-serif' }} >
        UX Design | UI Design | Mobile &amp; Web | Children's App | AI Product | Bilingual (EN / HE)
      </p>

      {/* Meta — bold labels inline */}
      <p className="text-neutral-300 text-[20px] font-lato-light mb-2 leading-relaxed"
        style={{ fontFamily: 'Lato-light, sans-serif' }} >
        <span className="font-lato font-bold text-white">Role:</span> UX/UI Design
        {' | '}
        <span className="font-lato font-bold text-white">Collaboration:</span> Developer
        {' | '}
        <span className="font-lato font-bold text-white">Product Type:</span> AI Web App
        {' | '}
        <span className="font-lato font-bold text-white">Status:</span> Product in development
      </p>

      {/* Live Demo */}
      <p className="text-neutral-400 text-[20px] font-lato-light leading-relaxed"
        style={{ fontFamily: 'Lato-light, sans-serif' }} >
        <span className="font-lato font-bold text-white">Live Demo:</span>{' '}
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
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16 pt-55">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left — What is EverTale? */}
        <div>
          <h2
            className="text-[44px] mb-6"
            style={{ color: '#D3B0D5', fontFamily: "'Anton SC" , letterSpacing: '0.02em'}}
          >
            What is EverTale?
          </h2>
          <div className="flex flex-col">
            <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed"
              style={{ fontFamily: 'Lato-light, sans-serif' }} >
              EverTale is an AI-powered storybook app that places children at the center
              of their own stories.
            </p>
            <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed"
              style={{ fontFamily: 'Lato-light, sans-serif' }} >
              By using personal details like their name, interests, and photos, the app creates
              unique, illustrated, and narrated tales.
            </p>
            <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed"
              style={{ fontFamily: 'Lato-light, sans-serif' }} >
              It's designed as a shared experience for parents and children to create
              and enjoy together.
            </p>
          </div>
        </div>

        {/* Right — Transparent phone mockup */}
        <div className="flex items-center justify-center pb-[-10%]">
          <img
            src={`${BASE}images/evertale/hero/Hero/hero.png`}
            alt="EverTale app mockup"
            className="w-full h-auto block scale-120"
          />
        </div>

      </div>
    </div>
  </div>
)

export default Hero
