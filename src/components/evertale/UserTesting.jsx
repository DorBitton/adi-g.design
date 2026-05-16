const insights = [
  {
    quote: '"Add a hobby or something personal"',
    decision: 'Added free-text input for deeper personalization',
  },
  {
    quote: '"More story worlds = more control!"',
    decision: 'Expanded story world options',
  },
  {
    quote: '"Let us skip questions"',
    decision: 'Introduced optional fields',
  },
  {
    quote: '"Not comfortable uploading photos"',
    decision: 'Added character alternative + privacy messaging',
  },
]

const UserTesting = () => (
  <section className="w-full text-white py-20 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      <h2
        className="mb-6"
        style={{ fontFamily: 'Lato-bold, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff' }}
      >
        User Testing &amp; Insights
      </h2>

      <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed mb-10 max-w-4xl" style={{ fontFamily: 'Lato-light, sans-serif' }}>
        I conducted initial testing with parents and professionals working with children
        to evaluate clarity, comfort, and usability of the story creation flow. The feedback
        revealed key tensions between personalization, flexibility, and simplicity — directly
        shaping multiple iterations of the experience.
      </p>

      <p
        className="text-[20px] leading-relaxed mb-6"
        style={{ fontFamily: 'Lato-bold, sans-serif', fontWeight: 700, color: '#fff' }}
      >
        User Insights → Design Decisions
      </p>

      <div className="flex flex-col" style={{ gap: 20 }}>
        {insights.map(({ quote, decision }) => (
          <div key={quote}>
            <p className="text-[20px] text-neutral-300 font-lato-light leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif' }}>
              {quote}
            </p>
            <p className="text-[20px] font-lato-light leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif', color: '#a78baa' }}>
              → {decision}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default UserTesting
