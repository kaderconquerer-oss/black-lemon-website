// Services page

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Index 03 / Services"
        title={<>Six things.<br/><span className="bl-italic" style={{ fontWeight: 300 }}>Done with care.</span></>}
        dek="We do six things and we do them well. Anything else, we'll point you to a friend who does it better than we would."
      />

      {/* Long-form services list */}
      <section style={{ padding: '0 64px' }}>
        {SERVICES.map((s, i) => (
          <Reveal key={s.num} delay={i * 60}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1.4fr 2fr', gap: 48, padding: '80px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 64, letterSpacing: '-0.03em', color: 'var(--bl-yellow)', lineHeight: 1 }}>{s.num}</div>
              <div>
                <h3 className="bl-h3" style={{ marginBottom: 24 }}>{s.name}</h3>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.8 }}>{s.desc}</p>
              </div>
              <div>
                <div className="bl-eyebrow" style={{ marginBottom: 24 }}>What you get</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.deliverables.map(d => (
                    <li key={d} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 17 }}>
                      <span style={{ width: 4, height: 16, background: 'var(--bl-yellow)', flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Process */}
      <section style={{ background: '#f5f1ea', color: '#0a0a0a', padding: '160px 64px' }}>
        <div className="bl-eyebrow" style={{ marginBottom: 48 }}>How we work</div>
        <h2 className="bl-h2" style={{ marginBottom: 96, maxWidth: 1200 }}>Four phases.<br/><span className="bl-italic" style={{ fontWeight: 300 }}>Almost always in this order.</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          {[
            { n: '01', t: 'Listen', d: 'Two hours with the person who actually has to live with the result. No deck.' },
            { n: '02', t: 'Frame', d: 'A single page. The idea, the audience, the one thing the room should do.' },
            { n: '03', t: 'Build', d: 'Vendors, freight, permits, build, light, test, tune, breathe.' },
            { n: '04', t: 'Run', d: 'Show day. We disappear into the corners and let the room speak.' },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div style={{ borderTop: '2px solid #0a0a0a', paddingTop: 24 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 16 }}>{p.n}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36, letterSpacing: '-0.02em', margin: '0 0 16px' }}>{p.t}</h3>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 18, lineHeight: 1.5, opacity: 0.75 }}>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section style={{ padding: '120px 64px', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
        <div className="bl-eyebrow" style={{ marginBottom: 32 }}>A note on budgets</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1.35, maxWidth: 1100, margin: '0 auto 40px', letterSpacing: '-0.01em' }}>
          We don't have packages. Most projects we take on land between AED 250k and AED 4M. The smallest dinner we did last year was AED 80k. The largest production was AED 11M. The right number is the one that matches what you're trying to do.
        </p>
        <a href="#/contact" className="bl-btn bl-btn--yellow" style={{ marginTop: 24 }}>Tell us about your project <BLIcon name="arrow" size={14} color="#0a0a0a" accent="#0a0a0a" /></a>
      </section>
    </>
  );
};

window.ServicesPage = ServicesPage;
