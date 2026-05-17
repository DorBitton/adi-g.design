const LINE = '#D3B0D5'
const BG_NODE = '#1e1022'
const BG_TAB = '#2d1a35'

const Node = ({ label, sub, accent, small }) => (
  <div
    className="flex flex-col items-center justify-center text-center px-4 py-3 rounded-xl"
    style={{
      backgroundColor: BG_NODE,
      border: `1.5px solid ${accent || LINE}`,
      minWidth: small ? 110 : 140,
      maxWidth: small ? 160 : 200,
    }}
  >
    <span style={{ fontFamily: 'Lato-bold, sans-serif', fontWeight: 700, fontSize: small ? 13 : 15, color: accent || '#fff', lineHeight: 1.3 }}>
      {label}
    </span>
    {sub && (
      <span style={{ fontFamily: 'Lato-light, sans-serif', fontSize: 11, color: '#a78baa', marginTop: 3 }}>
        {sub}
      </span>
    )}
  </div>
)

const TabHeader = ({ label }) => (
  <div
    className="rounded-xl px-4 py-2 text-center w-full"
    style={{ backgroundColor: BG_TAB, border: `1px solid ${LINE}` }}
  >
    <span style={{ fontFamily: 'Lato-bold, sans-serif', fontWeight: 700, fontSize: 13, color: LINE }}>
      {label}
    </span>
  </div>
)

const VLine = ({ h = 28 }) => (
  <div style={{ width: 1, height: h, backgroundColor: LINE, margin: '0 auto' }} />
)

const BranchRow = ({ items }) => {
  const count = items.length
  return (
    <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
      {items.map((item, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 0,
            left: i === 0 ? '50%' : 0,
            right: i === count - 1 ? '50%' : 0,
            height: 1, backgroundColor: LINE,
          }} />
          <div style={{ width: 1, height: 24, backgroundColor: LINE }} />
          {item}
        </div>
      ))}
    </div>
  )
}

// Vertical chain of nodes connected by lines
const VChain = ({ items }) => (
  <div className="flex flex-col items-center">
    {items.map((item, i) => (
      <div key={i} className="flex flex-col items-center">
        {i > 0 && <VLine h={20} />}
        {item}
      </div>
    ))}
  </div>
)

const InformationArchitecture = () => (
  <section className="w-full text-white py-20 bg-black">
    <div className="w-full max-w-[2028px] mx-auto px-6 lg:px-16">

      <h2
        className="text-[50px] leading-tight mb-12"
        style={{ color: LINE, fontFamily: "'Anton SC', sans-serif", letterSpacing: '0.02em' }}
      >
        Information Architecture
      </h2>

      <div className="flex flex-col items-center" style={{ overflowX: 'auto', paddingBottom: 16 }}>

        {/* Tier 1 — Entry */}
        <Node label="App Launch" sub="/landing · /splash" accent="#6ee7b7" />
        <VLine />

        {/* Tier 2 — Home Shell */}
        <Node label="Home Screen" sub="public · no auth required" />
        <VLine />

        {/* Tier 3 — 3 Tabs */}
        <BranchRow items={[
          <TabHeader label="Tab 0 · Home" />,
          <TabHeader label="Tab 1 · Create" />,
          <TabHeader label="Tab 2 · Library" />,
        ]} />
        <VLine />

        {/* Tier 4 — Content under each tab */}
        <div style={{ display: 'flex', width: '100%', gap: 24, alignItems: 'flex-start' }}>

          {/* Tab 0 — public story preview */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <VChain items={[
              <Node label="Story Preview" sub="Browse a story world · no sign-in needed" small />,
            ]} />
          </div>

          {/* Tab 1 — Create flow */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <VChain items={[
              <Node label="Auth Overlay" sub="if guest user" accent="#fbbf24" small />,
              <Node label="Step 1" sub="Child details · name, age, interests" small />,
              <Node label="Step 2" sub="Story world · theme, character / photo" small />,
              <Node label="Step 3" sub="Review & generate" small />,
              <Node label="Story Loading" sub="AI generation in progress" small />,
              <Node label="Story View" sub="Illustrated · narrated story" small />,
            ]} />
          </div>

          {/* Tab 2 — Library flow */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <VChain items={[
              <Node label="Auth Overlay" sub="if guest user" accent="#fbbf24" small />,
              <Node label="Library" sub="All created stories" small />,
              <Node label="Story View" sub="Open & read a story" small />,
            ]} />
          </div>

        </div>

      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mt-12">
        {[
          { color: '#6ee7b7', label: 'Entry point' },
          { color: LINE, label: 'Screen / Tab' },
          { color: '#fbbf24', label: 'Auth gate (guests only)' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: color }} />
            <span style={{ fontFamily: 'Lato-light, sans-serif', fontSize: 14, color: '#a78baa' }}>{label}</span>
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default InformationArchitecture
