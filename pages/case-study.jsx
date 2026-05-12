// Single case study template

const CaseStudyPage = ({ slug }) => {
  const cs = CASE_STUDIES.find(c => c.slug === slug) || CASE_STUDIES[0];
  const next = CASE_STUDIES[(CASE_STUDIES.findIndex(c => c.slug === cs.slug) + 1) % CASE_STUDIES.length];

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '180px 64px 64px', background: '#0a0a0a', color: '#fff' }}>
        <Reveal>
          <a href="#/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 64 }} className="bl-link">
            \u2190 Back to all work
          </a>
          <div className="bl-eyebrow" style={{ marginBottom: 24 }}>{cs.client} \u00b7 {cs.year}</div>
          <h1 className="bl-h1" style={{ maxWidth: 1500 }}>{cs.title}</h1>
          <p style={{ marginTop: 40, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 26, lineHeight: 1.4, maxWidth: 880, opacity: 0.85 }}>{cs.summary}</p>
        </Reveal>
      </section>

      {/* Hero image */}
      <section style={{ padding: '0 64px 96px', background: '#0a0a0a' }}>
        <Reveal delay={200}>
          <Placeholder label={`Hero image \u00b7 ${cs.client}`} style={{ width: '100%', height: 'min(75vh, 720px)' }} tone={cs.tone === 'light' ? 'light' : 'dark'} />
        </Reveal>
      </section>

      {/* Meta strip */}
      <section style={{ background: 'var(--bl-yellow)', color: '#0a0a0a', padding: '40px 64px', borderTop: '1px solid #0a0a0a', borderBottom: '1px solid #0a0a0a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32 }}>
          {[
            { l: 'Client', v: cs.client },
            { l: 'Type', v: cs.tag },
            { l: 'Location', v: cs.location },
            { l: 'Attendees', v: cs.attendees.toLocaleString() },
            { l: 'Year', v: cs.year },
          ].map(m => (
            <div key={m.l}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 8 }}>{m.l}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brief + scope */}
      <section style={{ padding: '120px 64px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Reveal>
          <div className="bl-eyebrow" style={{ marginBottom: 32 }}>The brief</div>
          <h3 className="bl-h3">An event that sounded like the company — not the venue.</h3>
        </Reveal>
        <Reveal delay={200}>
          <p style={{ fontSize: 19, lineHeight: 1.6, opacity: 0.8, marginTop: 0, marginBottom: 32, fontFamily: 'var(--font-serif)', fontWeight: 300 }}>
            Most studios would have walked into this brief and reached for the obvious moves: a hashtag, an LED ribbon, a step-and-repeat. We took the brief literally, removed everything that wasn't the idea, and built a room you could walk into and immediately know whose room it was \u2014 without seeing a single logo on a wall.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.6, opacity: 0.8, fontFamily: 'var(--font-serif)', fontWeight: 300 }}>
            The result was {cs.attendees.toLocaleString()} guests, three speakers, a single visual signature, and zero confusion about what they were there for.
          </p>
          <div style={{ marginTop: 64 }}>
            <div className="bl-eyebrow" style={{ marginBottom: 20 }}>Scope of work</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cs.scope.map(s => (
                <span key={s} style={{ padding: '8px 16px', border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Image grid */}
      <section style={{ padding: '0 64px 120px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, marginBottom: 24 }}>
          <Placeholder label="Stage \u00b7 wide" style={{ height: 480 }} tone={cs.tone === 'light' ? 'light' : 'dark'} />
          <Placeholder label="Detail \u00b7 vertical" style={{ height: 480 }} tone={cs.tone === 'light' ? 'light' : 'dark'} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          <Placeholder label="Crowd" style={{ height: 320 }} tone={cs.tone === 'light' ? 'light' : 'dark'} />
          <Placeholder label="F&B" style={{ height: 320 }} tone={cs.tone === 'light' ? 'light' : 'dark'} />
          <Placeholder label="Signage" style={{ height: 320 }} tone={cs.tone === 'light' ? 'light' : 'dark'} />
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: '#f5f1ea', color: '#0a0a0a', padding: '160px 64px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.25, maxWidth: 1100, margin: '0 auto', letterSpacing: '-0.015em' }}>
            \u201cIt was the first event in five years where I didn't notice the production. I just listened to the people on stage.\u201d
          </div>
          <div className="bl-eyebrow" style={{ marginTop: 48 }}>\u2014 Head of Communications, {cs.client}</div>
        </Reveal>
      </section>

      {/* Outcome stats */}
      <section style={{ padding: '120px 64px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="bl-eyebrow" style={{ marginBottom: 48 }}>Outcome</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          {[
            { n: 96, s: '%', l: 'Attendance vs invited' },
            { n: 4, s: 'wks', l: 'Concept-to-curtain' },
            { n: 0, s: '', l: 'Production cues missed' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '48px 32px 48px 0' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--bl-yellow)' }}>
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="bl-eyebrow" style={{ marginTop: 24 }}>{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next */}
      <section style={{ padding: '120px 64px', background: '#0a0a0a' }}>
        <a href={`#/work/${next.slug}`} style={{ display: 'block', cursor: 'pointer' }} className="bl-card">
          <div className="bl-eyebrow" style={{ marginBottom: 24 }}>Next project \u2192</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'center' }}>
            <div className="bl-card-image" style={{ overflow: 'hidden' }}>
              <Placeholder label={next.client} style={{ height: 320 }} tone={next.tone === 'light' ? 'light' : 'dark'} />
            </div>
            <div>
              <div className="bl-eyebrow" style={{ marginBottom: 16 }}>{next.client} \u00b7 {next.year}</div>
              <h2 className="bl-h2">{next.title}</h2>
            </div>
          </div>
        </a>
      </section>
    </>
  );
};

window.CaseStudyPage = CaseStudyPage;
