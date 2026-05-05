// Studio / About page

const StudioPage = () => {
  const team = [
    { name: 'Layla Mansour', role: 'Founder, Creative Director', bio: 'Ex-Wallpaper*, ex-Studio Toogood. Started Black Lemon out of a warehouse in Al Quoz with one client and one folding table.' },
    { name: 'Idris Khoury', role: 'Head of Production', bio: 'Fifteen years on festival mainstages. Believes the best production is the one nobody compliments.' },
    { name: 'Soraya Park', role: 'Senior Designer', bio: 'Trained in Seoul, sharpened in Beirut. Draws every plan in pencil before it touches a screen.' },
    { name: 'Marcus Aboud', role: 'F&B Director', bio: 'Was a sous chef at Frenchie before he was a stage manager. Reads menus like architectural drawings.' },
    { name: 'Hana Suleiman', role: 'Studio Manager', bio: 'The reason anything happens on time. Has the only set of keys.' },
    { name: 'Omar Tarek', role: 'Junior Producer', bio: 'Joined out of NYU Abu Dhabi. Already runs the most complex builds on the floor.' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Index 04 / Studio"
        title={<>A small studio,<br/><span className="bl-italic" style={{ fontWeight: 300 }}>on purpose.</span></>}
        dek="Six people, one warehouse in Alserkal Avenue, and a list of clients we mostly meet for coffee before we say yes."
      />

      {/* Manifesto / about */}
      <section style={{ padding: '120px 64px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Reveal>
          <div className="bl-eyebrow">2019 \u2014 today</div>
          <div style={{ marginTop: 32 }}><Wordmark size={180} variant="dark" /></div>
        </Reveal>
        <Reveal delay={200}>
          <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 28, lineHeight: 1.45, marginBottom: 32, letterSpacing: '-0.01em' }}>
            Black Lemon was started in 2019 because the founders kept being asked to make the same kind of room: <em>"big, with branding everywhere"</em>. We thought there might be a different version of that brief.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 22, lineHeight: 1.55, opacity: 0.8 }}>
            Six years later, we still take fewer than fifteen projects a year. We think of ourselves less like an agency and more like a small editorial team \u2014 one with a workshop, a fabricator on speed-dial, and a strong opinion about typography.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 22, lineHeight: 1.55, opacity: 0.8, marginTop: 24 }}>
            We're based in Dubai, but we work where we're useful. Riyadh, London, Marrakech, Beirut, Singapore. The studio fits in two flight cases.
          </p>
        </Reveal>
      </section>

      {/* Stat row */}
      <section style={{ padding: '0 64px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n: 6, l: 'People', s: '' },
            { n: 184, l: 'Projects since 2019', s: '' },
            { n: 41, l: 'Cities', s: '' },
            { n: 1, l: 'Studio cat (Lemon)', s: '' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none', padding: '64px 32px 64px 0' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 80, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--bl-yellow)' }}>
                  <Counter to={s.n} />
                </div>
                <div className="bl-eyebrow" style={{ marginTop: 20 }}>{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '120px 64px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="bl-eyebrow" style={{ marginBottom: 48 }}>The studio</div>
        <h2 className="bl-h2" style={{ marginBottom: 80 }}>Six people.<br/><span className="bl-italic" style={{ fontWeight: 300 }}>One Lemon.</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)', borderLeft: '1px solid rgba(255,255,255,0.12)' }}>
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div style={{ borderRight: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '40px 32px' }}>
                <Placeholder label={p.name} style={{ height: 280, marginBottom: 24 }} />
                <div className="bl-eyebrow" style={{ marginBottom: 8 }}>{p.role}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{p.name}</h4>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 16, lineHeight: 1.5, opacity: 0.75, margin: 0 }}>{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section style={{ background: 'var(--bl-yellow)', color: '#0a0a0a', padding: '160px 64px', borderTop: '1px solid #0a0a0a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
          <div>
            <div className="bl-eyebrow" style={{ marginBottom: 32 }}>Visit the studio</div>
            <h2 className="bl-h2" style={{ marginBottom: 32 }}>Warehouse 4,<br/><span className="bl-italic" style={{ fontWeight: 300 }}>Alserkal Avenue.</span></h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.85, marginBottom: 32 }}>
              We're behind the courtyard, past the gallery with the red door. There's almost always coffee. Email first \u2014 we sometimes pull the door closed when we're building.
            </p>
            <a href="#/contact" className="bl-btn bl-btn--ink">Make an appointment <BLIcon name="arrow" size={14} color="#fff" accent="#fff" /></a>
          </div>
          <Placeholder label="Studio \u00b7 exterior" style={{ height: 480 }} tone="light" />
        </div>
      </section>
    </>
  );
};

window.StudioPage = StudioPage;
