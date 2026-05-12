// Direction B — Kinetic Yellow website
// Tone: high-energy, full-bleed, expressive. Yellow dominates. Big editorial type.

const SiteB = ({ tweaks }) => {
  const wrapRef = React.useRef(null);
  useCursorBar(wrapRef);
  const yellow = tweaks?.yellow || '#fdd535';

  return (
    <div ref={wrapRef} style={{ background: yellow, color: '#0a0a0a', fontFamily: 'var(--font-display)', position: 'relative', minHeight: '100%' }}>
      {/* NAV */}
      <div style={{ position: 'sticky', top: 0, zIndex: 20, background: yellow, borderBottom: '2px solid #0a0a0a' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px' }}>
          <Wordmark size={120} variant="black" tagline={false} />
          <div style={{ display: 'flex', gap: 28, fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {['Work','Services','Studio','Press','Contact'].map(l => <a key={l} style={{ color: '#0a0a0a' }}>{l}</a>)}
          </div>
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.15em' }}>DXB · 25.27°N · 33°C</div>
        </div>
      </div>

      {/* KINETIC HERO */}
      <div style={{ padding: '56px 48px 32px', position: 'relative' }}>
        <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.25em', display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
          <span>● LIVE FROM DUBAI · BL/2026</span>
          <span>BLACK LEMON EVENT STUDIO</span>
        </div>
        <h1 style={{ fontSize: 196, fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.86, margin: 0 }}>
          We make<br />
          <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
            roo<span style={{ display: 'inline-block', width: 12, height: 140, background: '#0a0a0a', margin: '0 8px', transform: 'translateY(-12px)' }} />ms
          </span>
          <br />
          <span style={{ background: '#0a0a0a', color: yellow, padding: '0 16px' }}>roar.</span>
        </h1>
      </div>

      {/* TICKER */}
      <div style={{ padding: '20px 0', borderTop: '2px solid #0a0a0a', borderBottom: '2px solid #0a0a0a', overflow: 'hidden', background: '#0a0a0a' }}>
        <div className="bl-marquee" style={{ fontSize: 22, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', color: yellow, fontWeight: 500 }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 32, paddingRight: 32 }}>
              <span>● ON-SITE NOW · DUBAI ECONOMIC FORUM · DAY 02</span>
              <span style={{ color: '#fff' }}>↗</span>
              <span>● BUILD-UP · CARTIER DIFC · STRIKE +14H</span>
              <span style={{ color: '#fff' }}>↗</span>
              <span>● PRE-PRO · GITEX 2026 · 142 DAYS OUT</span>
              <span style={{ color: '#fff' }}>↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <div style={{ padding: '88px 48px', borderBottom: '2px solid #0a0a0a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'flex-start' }}>
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.25em' }}>WHAT WE DO →</div>
          <p style={{ fontSize: 36, lineHeight: 1.2, margin: 0, fontWeight: 500, letterSpacing: '-0.01em' }}>
            We design, plan and produce events for governments, brands and enterprises across the GCC.
            <span style={{ opacity: 0.4 }}> Conferences. Brand activations. Pavilions. Galas. Whatever needs lights, sound, and a run-of-show — we build it.</span>
          </p>
        </div>
      </div>

      {/* SERVICES — STACKED CARDS */}
      <div style={{ background: '#0a0a0a', color: '#fff', borderBottom: '2px solid #0a0a0a' }}>
        {[
          { n: '01', name: 'Conferences', dot: yellow, count: '86', icon: 'mic' },
          { n: '02', name: 'Activations', dot: '#fff', count: '124', icon: 'sparkle' },
          { n: '03', name: 'Government', dot: yellow, count: '18', icon: 'flag' },
          { n: '04', name: 'Exhibitions', dot: '#fff', count: '42', icon: 'cube' },
        ].map((s, i) => (
          <div key={i} style={{ borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none', padding: '40px 48px', display: 'grid', gridTemplateColumns: '60px 1fr 100px 120px', gap: 32, alignItems: 'center', cursor: 'pointer' }}>
            <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5 }}>{s.n}</div>
            <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: '-0.03em' }}>{s.name}</div>
            <div style={{ width: 14, height: 14, background: s.dot, borderRadius: '50%', justifySelf: 'center' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16 }}>
              <div className="bl-mono" style={{ fontSize: 13, opacity: 0.6 }}>{s.count} done</div>
              <BLIcon name={s.icon} size={28} accent={yellow} color="#fff" />
            </div>
          </div>
        ))}
      </div>

      {/* WORK GRID */}
      <div style={{ padding: '88px 48px', borderBottom: '2px solid #0a0a0a' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <h2 style={{ fontSize: 88, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.92, margin: 0 }}>Recent<br />work.</h2>
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em' }}>2024 — 2026 / 240+ EVENTS</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { c: 'Dubai Economic Forum', y: '2025', tone: 'dark' },
            { c: 'Cartier DIFC', y: '2024', tone: 'dark' },
            { c: 'GITEX · MoEF Pavilion', y: '2024', tone: 'dark' },
            { c: 'COP Side Programme', y: '2024', tone: 'dark' },
            { c: 'Aramco Innovation', y: '2025', tone: 'dark' },
            { c: 'Emaar · Tower Top-Out', y: '2023', tone: 'dark' },
          ].map((w, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <Placeholder label={w.c.toUpperCase()} tone={w.tone} style={{ aspectRatio: '4/5' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ fontSize: 18, fontWeight: 600 }}>{w.c}</div>
                <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.15em', color: yellow }}>{w.y} ↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '120px 48px', background: yellow, position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontSize: 240, fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.85, position: 'relative' }}>
          Got a<br />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>brief?</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 56 }}>
          <p style={{ fontSize: 22, lineHeight: 1.4, maxWidth: 480, margin: 0, fontWeight: 500 }}>
            Send the deck. We'll come back inside 24 hours with a budget bracket, a producer name, and a date you can hold.
          </p>
          <button className="bl-btn bl-btn--ink" style={{ fontSize: 18, padding: '20px 32px' }}>hello<span style={{ display: 'inline-block', width: 2, height: 16, background: yellow, margin: '0 4px' }} />blacklemon.ae →</button>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: '#0a0a0a', color: '#fff', padding: '48px 48px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 32, marginBottom: 24 }}>
          <Wordmark size={180} variant="white" tagline={false} />
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.15em', opacity: 0.6 }}>DESIGN DISTRICT · D3 · BLDG 6</div>
        </div>
        <div className="bl-mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.2em', opacity: 0.4 }}>
          <span>© BLACK LEMON EVENTS · 2026</span>
          <span>BUILT IN DUBAI · TRN 100482935700003</span>
        </div>
      </div>
    </div>
  );
};

window.SiteB = SiteB;
