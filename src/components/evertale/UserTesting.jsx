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

      {/* Heading with yellow dot */}
      <div className="flex items-center gap-3 mb-6">
        <span style={{ fontSize: 20 }}>💡</span>
        <h2
          className="text-[50px]"
          style={{ color: '#fff', fontFamily: "'Anton SC', sans-serif" }}
        >
          User Testing &amp; Insights
        </h2>
      </div>

      <p
        className="font-lato-light font-light text-[20px] leading-relaxed mb-10 max-w-4xl"
        style={{ color: '#d4d4d4' }}
      >
        I conducted initial testing with parents and professionals working with children
        to evaluate clarity, comfort, and usability of the story creation flow. The feedback
        revealed key tensions between personalization, flexibility, and simplicity — directly
        shaping multiple iterations of the experience.
      </p>

      <p
        className="mb-6"
        style={{ fontFamily: 'Lato, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}
      >
        User Insights → Design Decisions
      </p>

      <ul className="flex flex-col" style={{ gap: 20 }}>
        {insights.map(({ quote, decision }) => (
          <li key={quote} style={{ listStyle: 'disc', marginLeft: 28 }}>
            <p style={{ fontFamily: 'Lato-light', fontSize: 20, lineHeight: '1.625', color: '#d4d4d4' }}>
              {quote}
            </p>
            <p style={{ fontFamily: 'Lato-light', fontSize: 20, lineHeight: '1.625', color: '#a78baa' }}>
              → {decision}
            </p>
          </li>
        ))}
      </ul>

    </div>
  </section>
)

export default UserTesting
