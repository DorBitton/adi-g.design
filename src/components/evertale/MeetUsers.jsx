const BASE = import.meta.env.BASE_URL

const PersonaCard = ({ name, age, role, quote, traits, image, initials }) => (
  <div className="rounded-3xl p-8 md:p-10 flex flex-col gap-6" style={{ backgroundColor: '#453147' }}>
    {/* Avatar */}
    <div className="flex items-center gap-5">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#D3B0D5]"
        />
      ) : (
        <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-[#D3B0D5] bg-neutral-800 text-[#D3B0D5] text-3xl font-lato-bold">
          {initials}
        </div>
      )}
      <div>
        <p className="font-lato-bold text-white text-2xl">{name}</p>
        <p className="font-lato-light text-neutral-400 text-base">{age} · {role}</p>
      </div>
    </div>

    {/* Quote */}
    <blockquote className="font-lato-light font-light text-[18px] text-neutral-200 leading-relaxed border-l-2 border-[#D3B0D5] pl-4 italic">
      "{quote}"
    </blockquote>

    {/* Traits */}
    <ul className="flex flex-wrap gap-2">
      {traits.map((t) => (
        <li key={t} className="px-3 py-1 rounded-full bg-black/30 text-neutral-300 text-sm font-lato border border-neutral-700">
          {t}
        </li>
      ))}
    </ul>
  </div>
)

const MeetUsers = () => (
  <section className="w-full text-white py-20" style={{ backgroundColor: '#1E1C1C' }}>
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
      <h2
        className="text-[36px] md:text-[48px] leading-tight mb-12"
        style={{ fontFamily: "'Anton SC', sans-serif", color: '#D3B0D5' }}
      >
        Meet the Users
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PersonaCard
          name="Emma"
          age="8 years old"
          role="The Child"
          quote="I want a story about ME going on an adventure with my dog Biscuit!"
          traits={['Imaginative', 'Loves animals', 'Short attention span', 'Tablet native']}
          image={`${BASE}images/evertale/personas/emma.png`}
        />
        <PersonaCard
          name="Daniel"
          age="36 years old"
          role="The Parent"
          quote="I want bedtime to be magical, but I run out of ideas after a long day."
          traits={['Time-pressed', 'Tech-comfortable', 'Values creativity', 'Reads nightly']}
          initials="D"
        />
      </div>
    </div>
  </section>
)

export default MeetUsers
