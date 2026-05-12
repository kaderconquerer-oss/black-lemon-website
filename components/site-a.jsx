// Direction A — Editorial Dark website
// Tone: confident, editorial, masculine. Black canvas, generous type, single bar accent.

const SiteA = ({ tweaks }) => {
  const wrapRef = React.useRef(null);
  useCursorBar(wrapRef);
  const yellow = tweaks?.yellow || '#fdd535';

  const services = [
    { n: '01', name: 'Conferences & Forums', desc: 'Run-of-show, stage, AV, delegate flow.', icon: 'mic' },
    { n: '02', name: 'Brand Activations', desc: 'Pop-ups, launches, retail moments.', icon: 'sparkle' },
    { n: '03', name: 'Government & VIP', desc: 'Heads of state, royal protocol, security.', icon: 'flag' },
    { n: '04', name: 'Exhibitions & Expos', desc: 'Stand build, fabrication, Expo experience.', icon: 'cube' },
  ];

  const work = [
    { client: 'Dubai Economic Forum', kind: 'Government / Forum', year: '2025', pax: '4,200' },
    { client: 'Aramco Innovation Summit', kind: 'Conference', year: '2025', pax: '1,800' },
    { client: 'Cartier · Boutique Reveal', kind: 'Brand Activation', year: '2024', pax: '320' },
    { client: 'GITEX Pavilion · MoEF', kind: 'Exhibition', year: '2024', pax: '12,000' },
    { client: 'COP Side Programme', kind: 'Government / Forum', year: '2024', pax: '2,400' },
    { client: 'Emaar · Tower Top-Out', kind: 'Brand Activation', year: '2023', pax: '850' },
  ];

  return (
    <div ref={wrapRef} style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'var(--font-display)', position: 'relative', minHeight: '100%' }}>
      {/* NAV */}
      <div style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 56px' }}>
          <Wordmark size={120} variant="white" tagline={false} />
          <div style={{ display: 'flex', gap: 32, fontSize: 13, fontWeight: 500 }}>
            {['Work','Services','Studio','Press','Contact'].map(l => (
              <a key={l} style={{ color: '#fff', textDecoration: 'none', opacity: 0.75 }}>{l}</a>
            ))}
          </div>
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.15em', opacity: 0.5 }}>DXB · 25.27°N</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: '88px 56px 72px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.25em', opacity: 0.5, marginBottom: 32, display: 'flex', justifyContent: 'space-between' }}>
          <span>BL / 2018 — 2026</span>
          <span>EVENT STUDIO · DUBAI</span>
        </div>
        <h1 style={{ fontSize: 152, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92, margin: 0 }}>
          Events
          <br />
          <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
            bui<span style={{ display: 'inline-block', width: 8, height: 110, background: yellow, margin: '0 8px', transform: 'translateY(-12px)' }} />t
          </span>{' '}
          like
          <br />
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>infrastructure.</span>
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 64 }}>
          <p style={{ fontSize: 22, lineHeight: 1.4, maxWidth: 540, margin: 0, opacity: 0.85, fontWeight: 300 }}>
            Black Lemon is a Dubai event studio that designs, plans and produces conferences, brand activations and government-grade programmes across the GCC.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="bl-btn" style={{ background: yellow, color: '#0a0a0a' }}>Start a brief →</button>
            <button className="bl-btn bl-btn--ghost">Selected work</button>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{ padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
        <div className="bl-marquee" style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 48, paddingRight: 48 }}>
              {['CONFERENCES','— ACTIVATIONS','— GOVERNMENT','— EXPOS','— LAUNCHES','— GALAS','— FORUMS','— EXPERIENCES'].map((w, i) => (
                <span key={i} style={{ color: i % 3 === 0 ? yellow : '#fff' }}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {[['240+','events delivered'], ['8','years in DXB'], ['62','crew'], ['0','missed call sheets']].map(([n, l], i) => (
          <div key={i} style={{ padding: '48px 32px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: i === 3 ? yellow : '#fff' }}>{n}</div>
            <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginTop: 16, textTransform: 'uppercase' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div style={{ padding: '88px 56px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.25em', opacity: 0.5, marginBottom: 16 }}>02 / WHAT WE DO</div>
            <h2 style={{ fontSize: 72, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>Four practices.<br /><span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>One standard.</span></h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'rgba(255,255,255,0.08)' }}>
          {services.map(s => (
            <div key={s.n} style={{ background: '#0a0a0a', padding: 40, position: 'relative', minHeight: 220 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                <BLIcon name={s.icon} size={40} accent={yellow} />
                <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5 }}>{s.n}</div>
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 12 }}>{s.name}</div>
              <div style={{ fontSize: 15, opacity: 0.65, lineHeight: 1.5 }}>{s.desc}</div>
              <div style={{ position: 'absolute', bottom: 32, right: 32, fontSize: 24, opacity: 0.4 }}>→</div>
            </div>
          ))}
        </div>
      </div>

      {/* WORK */}
      <div style={{ padding: '88px 56px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.25em', opacity: 0.5, marginBottom: 16 }}>03 / SELECTED WORK · 2023—2025</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px 120px 120px 60px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.5, padding: '16px 0' }}>CLIENT</div>
          <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.5, padding: '16px 0' }}>TYPE</div>
          <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.5, padding: '16px 0' }}>YEAR</div>
          <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.5, padding: '16px 0' }}>PAX</div>
          <div />
          {work.map((w, i) => (
            <React.Fragment key={i}>
              <div style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 28, fontWeight: 500, letterSpacing: '-0.01em' }}>{w.client}</div>
              <div style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 14, opacity: 0.6, alignSelf: 'center' }}>{w.kind}</div>
              <div style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 14, opacity: 0.6, alignSelf: 'center', fontFamily: 'var(--font-mono)' }}>{w.year}</div>
              <div style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 14, alignSelf: 'center', fontFamily: 'var(--font-mono)', color: yellow }}>{w.pax}</div>
              <div style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 18, opacity: 0.5, alignSelf: 'center', textAlign: 'right' }}>↗</div>
            </React.Fragment>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', gridColumn: '1 / -1', padding: '24px 0' }} />
        </div>
      </div>

      {/* IMAGE BAND */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.08)' }}>
        <Placeholder label="DEF · MAIN STAGE" tone="dark" style={{ aspectRatio: '4/5' }} />
        <Placeholder label="GITEX · PAVILION FLOOR" tone="dark" style={{ aspectRatio: '4/5' }} />
        <Placeholder label="CARTIER · ARRIVAL" tone="dark" style={{ aspectRatio: '4/5' }} />
      </div>

      {/* QUOTE */}
      <div style={{ padding: '120px 56px', background: '#0a0a0a', textAlign: 'left', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ position: 'absolute', left: 56, top: 64, width: 4, height: 80, background: yellow }} />
        <div style={{ paddingLeft: 80, maxWidth: 900 }}>
          <div style={{ fontSize: 56, fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            "Eleven days, four thousand guests, three heads of state. They didn't blink."
          </div>
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.6, marginTop: 32 }}>DIR. OF PROTOCOL · DUBAI ECONOMIC FORUM</div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '64px 56px 32px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <Wordmark size={200} variant="white" tagline={false} />
          <p className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.15em', opacity: 0.5, marginTop: 24, lineHeight: 1.6 }}>
            DESIGN DISTRICT · D3<br />
            BUILDING 6, OFFICE 207<br />
            DUBAI, UAE
          </p>
        </div>
        <div>
          <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.4, marginBottom: 16 }}>SERVICES</div>
          {['Conferences','Activations','Government','Exhibitions'].map(s => <div key={s} style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>{s}</div>)}
        </div>
        <div>
          <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.4, marginBottom: 16 }}>STUDIO</div>
          {['Work','Press','Careers','Contact'].map(s => <div key={s} style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>{s}</div>)}
        </div>
        <div>
          <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.4, marginBottom: 16 }}>CONTACT</div>
          <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>hello<span style={{ display: 'inline-block', width: 1, height: 12, background: yellow, margin: '0 3px', verticalAlign: '-2px' }} />blacklemon.ae</div>
          <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>+971 4 555 0118</div>
          <div style={{ fontSize: 14, opacity: 0.7 }}>@blacklemon.dxb</div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 56px', display: 'flex', justifyContent: 'space-between' }} className="bl-mono">
        <span style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.4 }}>© BLACK LEMON EVENTS · TRN 100482935700003</span>
        <span style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.4 }}>BUILT IN DUBAI</span>
      </div>
    </div>
  );
};

window.SiteA = SiteA;
