const BASE = import.meta.env.BASE_URL

const personas = [
  {
    type: 'Child Persona',
    name: 'Emma',
    age: '6',
    title: 'The Curious Dreamer',
    image: 'emma.png',
    about: 'Emma loves magical stories and imaginative worlds. She enjoys visually rich experiences and engaging moments she can share with a parent.',
    frustrations: 'Loses interest with too much text or complex steps. Gets disengaged when the experience feels generic or not personal.',
    solution: 'A simple, visual experience that makes Emma feel part of the story — keeping her engaged, excited, and immersed.',
  },
  {
    type: 'Parent Persona',
    name: 'Daniel',
    age: '35',
    title: 'The Thoughtful Dad',
    image: 'daniel.png',
    about: 'Daniel looks for meaningful ways to spend quality time with his child. He prefers simple, intuitive experiences that are easy to start and enjoyable to use together.',
    frustrations: 'Concerned about privacy and data safety. Gets frustrated with long or unclear processes before reaching the value.',
    solution: 'A guided, low-friction flow with clear value and reassuring messaging, enabling a smooth and enjoyable shared experience.',
  },
]


const tStyle = 'text-neutral-300 text-[20px] font-lato-light mb-2 leading-relaxed '
const tInline = { fontFamily: 'Lato-light, sans-serif' }
const s = { fontSize: 20, lineHeight: '1.625', color: '#fff', wordWrap: 'break-word' }

const PersonaCard = ({ type, name, age, title, image, about, frustrations, solution }) => (
  <div
    className="w-full flex flex-col xl:flex-row xl:items-center rounded-[30px]  py-10 px-8 gap-10 xl:gap-12"
    style={{ backgroundColor: '#453147' }}
  >

    {/* Col 1 — Photo + identity */}
    <div className="flex flex-col items-start gap-[41px] xl:w-[280px] flex-shrink-0 ">

      {/* Lavender circle + character image */}
      <div className="relative flex-shrink-0" style={{ width: 250, height: 250, overflow: 'hidden', borderRadius: 9999 }}>
        <div style={{ width: 250, height: 250, position: 'absolute', top: 0, left: 0, background: '#D3B0D5', borderRadius: 9999 }} />
        <img
          src={`${BASE}images/evertale/hero/personas/${image}`}
          alt={name}
          style={{ width: 200, height: 200, position: 'absolute', left: 25, top: 55, borderRadius: 9999, objectFit: 'cover' }}
        />
      </div>

      {/* Identity text — one line per field */}
      <div>
        <p className={tStyle} style={tInline}><span className="font-bold text-white">{type}</span></p>
        <p className={tStyle} style={tInline}><span className="font-bold text-white">Name:</span> {name}</p>
        <p className={tStyle} style={tInline}><span className="font-bold text-white">Age:</span> {age}</p>
        <p className={tStyle} style={tInline}><span className="font-bold text-white">Title:</span> {title}</p>
      </div>
    </div>

    {/* Cols 2-4 — About / Frustrations / Solution */}
    <div className="flex flex-col md:flex-row items-start gap-8 flex-1 min-w-0">
      {[
        { header: 'About', body: about },
        { header: 'Frustrations', body: frustrations },
        { header: 'Solution', body: solution },
      ].map(({ header, body }) => (
        <div key={header} className="flex flex-col flex-1 min-w-0 gap-5">
          <p className={tStyle} style={tInline}><span className="font-bold text-white">{header}</span></p>
          <p className="text-[20px] text-neutral-300 mb-8 leading-relaxed" style={{ fontFamily: 'Lato-light, sans-serif' }}>{body}</p>
        </div>
      ))}
    </div>

  </div>
)

const MeetUsers = () => (
  <section className="w-full text-white py-20 bg-black pt-55">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">
      <h2
        className="text-[50px] mb-12"
        style={{ color: '#D3B0D5', fontFamily: "'Anton SC', sans-serif" }}
      >
        Meet the Users
      </h2>

      <div className="flex flex-col gap-8">
        {personas.map((p) => (
          <PersonaCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  </section>
)

export default MeetUsers
