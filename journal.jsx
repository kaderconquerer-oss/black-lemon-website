// Journal / Press page

const JournalPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Index 05 / Journal"
        title={<>Field notes &amp;<br/><span className="bl-italic" style={{ fontWeight: 300 }}>occasional press.</span></>}
        dek="We write when we have something to say. We're not a content studio. Updates roughly once a month."
      />

      <section style={{ padding: '0 64px' }}>
        {JOURNAL.map((j, i) => (
          <Reveal key={i} delay={i * 50}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '120px 0.6fr 2.2fr 1fr 80px', gap: 32, padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'baseline', cursor: 'pointer' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, opacity: 0.5 }}>{j.date}</div>
              <div className="bl-eyebrow" style={{ color: 'var(--bl-yellow)' }}>{j.tag}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, letterSpacing: '-0.015em', margin: '0 0 12px', lineHeight: 1.15 }}>{j.title}</h3>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 17, lineHeight: 1.5, opacity: 0.7, margin: 0 }}>{j.dek}</p>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.55, textAlign: 'right' }}>{j.read}</div>
              <div style={{ textAlign: 'right' }}><BLIcon name="arrow" size={18} color="#fff" accent="var(--bl-yellow)" /></div>
            </a>
          </Reveal>
        ))}
      </section>

      <section style={{ background: '#f5f1ea', color: '#0a0a0a', padding: '120px 64px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
          <div>
            <div className="bl-eyebrow" style={{ marginBottom: 32 }}>Newsletter \u2014 The Bar</div>
            <h2 className="bl-h2" style={{ marginBottom: 24 }}>Twelve issues a year.<br/><span className="bl-italic" style={{ fontWeight: 300 }}>One a month.</span></h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 20, lineHeight: 1.5, opacity: 0.75, maxWidth: 480 }}>
              Notes from the studio. Recently-finished work, things we're reading, and the occasional rant about LED walls. No tracking, no gifs.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 12, borderBottom: '2px solid #0a0a0a', paddingBottom: 12 }}>
            <input type="email" placeholder="your@email.com" style={{ flex: 1, background: 'transparent', border: 'none', fontFamily: 'var(--font-display)', fontSize: 22, outline: 'none', color: '#0a0a0a', padding: '12px 0' }} />
            <button type="submit" className="bl-btn bl-btn--ink">Subscribe <BLIcon name="arrow" size={14} color="#fff" accent="#fff" /></button>
          </form>
        </div>
      </section>
    </>
  );
};

window.JournalPage = JournalPage;
