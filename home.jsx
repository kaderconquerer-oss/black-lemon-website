// Home page

const HomeHero = () => {
  // Kinetic hero: oversized type with cycling word
  const words = ['Rooms.', 'Moments.', 'Galas.', 'Launches.', 'Weddings.', 'Festivals.'];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: '180px 64px 96px', position: 'relative', overflow: 'hidden' }}>
      {/* Top meta row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 80 }}>
        <span>Index \u2014 01 / Studio</span>
        <span>Dubai \u00b7 Operating since 2019</span>
      </div>

      {/* Headline */}
      <Reveal>
        <h1 className="bl-h1" style={{ maxWidth: 1500 }}>
          We make<br/>
          <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
            <span style={{ display: 'inline-block', width: '0.06em', height: '0.85em', background: 'var(--bl-yellow)', alignSelf: 'center', marginRight: '0.08em' }} />
            <span style={{ position: 'relative', display: 'inline-block', minWidth: '6ch' }}>
              {words.map((w, idx) => (
                <span key={idx} style={{
                  position: idx === 0 ? 'relative' : 'absolute',
                  left: 0, top: 0,
                  opacity: idx === i ? 1 : 0,
                  transform: idx === i ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(.2,.7,.3,1)',
                  whiteSpace: 'nowrap',
                }}>{w}</span>
              ))}
            </span>
          </span>
          <br/>
          <span className="bl-italic" style={{ fontWeight: 300, fontSize: '0.7em' }}>People remember.</span>
        </h1>
      </Reveal>

      {/* Footer of hero */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 120 }}>
        <Reveal delay={300}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.4, maxWidth: 480, opacity: 0.85 }}>
            An event studio in Dubai working at the intersection of editorial design and live production. Quiet rooms, sharp ideas, no theme weddings.
          </p>
        </Reveal>
        <Reveal delay={500}>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#/work" className="bl-btn bl-btn--yellow">See the work <BLIcon name="arrow" size={14} color="#0a0a0a" accent="#0a0a0a" /></a>
            <a href="#/contact" className="bl-btn bl-btn--ghost">Start a project</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const HomeMarquee = () => {
  const items = ['Editorial events', 'Concept to cleanup', 'Dubai \u00b7 Riyadh \u00b7 London', 'Founded 2019', 'No theme weddings', 'Six people, one studio'];
  return (
    <section style={{ background: 'var(--bl-yellow)', color: '#0a0a0a', padding: '32px 0', borderTop: '1px solid #0a0a0a', borderBottom: '1px solid #0a0a0a' }} className="bl-marquee-wrap">
      <div className="bl-marquee-track">
        {[...items, ...items, ...items, ...items].map((it, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 48, paddingRight: 48 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 64, letterSpacing: '-0.03em', whiteSpace: 'nowrap' }}>{it}</span>
            <span style={{ width: 8, height: 64, background: '#0a0a0a' }} />
          </div>
        ))}
      </div>
    </section>
  );
};

const HomeStats = () => (
  <section className="bl-section">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'flex-end', marginBottom: 96 }}>
      <Reveal>
        <div className="bl-eyebrow" style={{ marginBottom: 32 }}>02 / By the numbers</div>
        <h2 className="bl-h2">Six years.<br/><span className="bl-italic" style={{ fontWeight: 300 }}>Quiet receipts.</span></h2>
      </Reveal>
      <Reveal delay={200}>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.75 }}>
          We could show you a wall of logos. Instead, here's the work.
        </p>
      </Reveal>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      {[
        { n: 184, label: 'Events produced', s: '' },
        { n: 41, label: 'Cities reached', s: '' },
        { n: 22, label: 'Industry awards', s: '' },
        { n: 6, label: 'People in the studio', s: '' },
      ].map((s, i) => (
        <Reveal key={i} delay={i * 120}>
          <div style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '48px 32px 48px 0' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--bl-yellow)' }}>
              <Counter to={s.n} />
            </div>
            <div className="bl-eyebrow" style={{ marginTop: 24 }}>{s.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const HomeServices = () => (
  <section style={{ background: '#f5f1ea', color: '#0a0a0a', padding: '120px 64px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, marginBottom: 80 }}>
      <Reveal>
        <div className="bl-eyebrow" style={{ marginBottom: 32 }}>03 / What we do</div>
        <h2 className="bl-h2">Six things.<br/>Done with care.</h2>
      </Reveal>
      <Reveal delay={200}>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.75, marginTop: 24 }}>
          We don't do venue scouting, we don't do brand activations, and we don't do "vibes". The list is short on purpose.
        </p>
      </Reveal>
    </div>
    <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)' }}>
      {SERVICES.map((s, i) => (
        <Reveal key={s.num} delay={i * 60}>
          <a href="#/services" style={{ display: 'grid', gridTemplateColumns: '80px 1.4fr 2fr 60px', gap: 32, padding: '36px 0', borderBottom: '1px solid rgba(0,0,0,0.15)', alignItems: 'baseline', cursor: 'pointer' }} className="bl-svc-row">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, opacity: 0.5 }}>{s.num}</div>
            <div className="bl-h3">{s.name}</div>
            <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.7, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>{s.desc}</div>
            <div style={{ textAlign: 'right' }}><BLIcon name="arrow" size={20} color="#0a0a0a" accent="var(--bl-yellow)" /></div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);

const HomeWork = () => {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const featured = CASE_STUDIES.slice(0, 4);
  return (
    <section className="bl-section" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, marginBottom: 80 }}>
        <Reveal>
          <div className="bl-eyebrow" style={{ marginBottom: 32 }}>04 / Selected work</div>
          <h2 className="bl-h2">Recent rooms.</h2>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ alignSelf: 'flex-end', textAlign: 'right' }}>
            <a href="#/work" className="bl-btn bl-btn--ghost">All projects \u2014 ({CASE_STUDIES.length}) <BLIcon name="arrow" size={14} /></a>
          </div>
        </Reveal>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        {featured.map((cs, i) => (
          <a key={cs.slug} href={`#/work/${cs.slug}`}
             onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)}
             style={{ display: 'grid', gridTemplateColumns: '80px 1.6fr 1.5fr 1fr 60px', gap: 32, padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'center', cursor: 'pointer', position: 'relative' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, opacity: 0.5 }}>{String(i+1).padStart(2,'0')}</div>
            <div>
              <div className="bl-eyebrow" style={{ marginBottom: 8 }}>{cs.client}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{cs.title}</div>
            </div>
            <div style={{ fontSize: 14, opacity: 0.6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cs.tag}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, opacity: 0.5, textAlign: 'right' }}>{cs.year}</div>
            <div style={{ textAlign: 'right' }}><BLIcon name="arrow" size={18} color="#fff" accent="var(--bl-yellow)" /></div>
          </a>
        ))}
      </div>

      {/* Hover preview */}
      <div style={{ position: 'fixed', right: 64, bottom: 64, width: 320, height: 200, pointerEvents: 'none', zIndex: 50, opacity: hoverIdx !== null ? 1 : 0, transform: hoverIdx !== null ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)', transition: 'all 0.4s cubic-bezier(.2,.7,.3,1)' }}>
        {hoverIdx !== null && (
          <Placeholder label={`${featured[hoverIdx].client} \u00b7 ${featured[hoverIdx].location}`} style={{ width: '100%', height: '100%', border: '1px solid var(--bl-yellow)' }} />
        )}
      </div>
    </section>
  );
};

const HomeManifesto = () => (
  <section style={{ background: 'var(--bl-yellow)', color: '#0a0a0a', padding: '160px 64px', borderTop: '1px solid #0a0a0a' }}>
    <div className="bl-eyebrow" style={{ marginBottom: 80 }}>05 / Studio note</div>
    <Reveal>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: 1400, margin: 0 }}>
        We don't believe in <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 700 }}>themes</span>, we don't believe in <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 700 }}>vibes</span>, and we don't believe a room needs an <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 700 }}>LED wall</span> to feel important.
        <br/><br/>We believe in <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 700 }}>one strong idea</span>, executed without hedging.
      </h2>
    </Reveal>
    <div style={{ marginTop: 96, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div className="bl-eyebrow">\u2014 The studio, since 2019</div>
      <a href="#/studio" className="bl-btn bl-btn--ink">Read more about us <BLIcon name="arrow" size={14} color="#fff" accent="#fff" /></a>
    </div>
  </section>
);

const HomeClients = () => (
  <section style={{ padding: '96px 64px', background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
    <div className="bl-eyebrow" style={{ marginBottom: 48 }}>06 / Selected clients</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)', borderLeft: '1px solid rgba(255,255,255,0.12)' }}>
      {CLIENTS.map((c, i) => (
        <div key={c} style={{ borderRight: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '36px 24px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em' }}>
          {c}
        </div>
      ))}
    </div>
  </section>
);

const HomeCTA = () => (
  <section style={{ background: '#0a0a0a', color: '#fff', padding: '160px 64px 200px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
    <Reveal>
      <div className="bl-eyebrow" style={{ marginBottom: 48 }}>07 / Next</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(64px, 9vw, 160px)', letterSpacing: '-0.04em', lineHeight: 0.92, margin: 0 }}>
        Have a room<br/>
        <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
          <span style={{ display: 'inline-block', width: '0.06em', height: '0.85em', background: 'var(--bl-yellow)', alignSelf: 'center', marginRight: '0.08em' }} />
          <span className="bl-italic" style={{ fontWeight: 300 }}>in mind?</span>
        </span>
      </h2>
      <a href="#/contact" className="bl-btn bl-btn--yellow" style={{ marginTop: 64, fontSize: 16, padding: '20px 32px' }}>
        Start a project <BLIcon name="arrow" size={18} color="#0a0a0a" accent="#0a0a0a" />
      </a>
    </Reveal>
  </section>
);

const HomePage = () => (
  <>
    <HomeHero />
    <HomeMarquee />
    <HomeStats />
    <HomeServices />
    <HomeWork />
    <HomeManifesto />
    <HomeClients />
    <HomeCTA />
  </>
);

window.HomePage = HomePage;
