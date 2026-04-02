const UserTesting = () => (
  <section className="w-full text-white py-20" style={{ backgroundColor: '#1E1C1C' }}>
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-6"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        User Testing
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 leading-relaxed mb-6">
            Five parent-child pairs tested an interactive Figma prototype across two rounds.
            Sessions focused on task completion, navigation clarity, and emotional response.
          </p>
          <p className="font-lato-light font-light text-[18px] md:text-[22px] text-neutral-300 leading-relaxed">
            Key findings shaped the final design: children needed larger tap targets during story
            creation, parents wanted clearer progress indicators, and both groups responded strongly
            to the animated story cover reveal at the end of the flow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { stat: '5/5', label: 'Users completed story creation without guidance' },
            { stat: '2×', label: 'Rounds of testing — wireframe then hi-fi' },
            { stat: '3', label: 'Key changes made based on test feedback' },
          ].map(({ stat, label }) => (
            <div
              key={stat}
              className="flex items-center gap-5 rounded-2xl px-6 py-5"
              style={{ backgroundColor: '#453147' }}
            >
              <span
                className="text-[40px] leading-none flex-shrink-0"
                style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
              >
                {stat}
              </span>
              <p className="font-lato-light font-light text-neutral-200 text-[16px] leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default UserTesting
