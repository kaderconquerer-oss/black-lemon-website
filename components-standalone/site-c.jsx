// Direction C — Architectural Light website
// Tone: calm, premium, restrained. Cream backdrop. Editorial serif. Quiet bar accents.

const SiteC = ({ tweaks }) => {
  const wrapRef = React.useRef(null);
  useCursorBar(wrapRef);
  const yellow = tweaks?.yellow || '#fdd535';

  return (
    <div ref={wrapRef} style={{ background: '#f5f1ea', color: '#0a0a0a', fontFamily: 'var(--font-display)', position: 'relative', minHeight: '100%' }}>
      {/* NAV */}
      <div style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(245,241,234,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 56px' }}>
          <Wordmark size={120} variant="dark" tagline={false} />
          <div style={{ display: 'flex', gap: 32, fontSize: 13, fontWeight: 500 }}>
            {['Work','Practice','Studio','Journal','Contact'].map(l => <a key={l} style={{ color: '#0a0a0a', opacity: 0.75 }}>{l}</a>)}
          </div>
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.15em', opacity: 0.5 }}>EST. 2018 · DXB</div>
        </div>
      </div>

      {/* HERO — editorial */}
      <div style={{ padding: '120px 56px 88px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 48 }}>
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.25em', opacity: 0.5, lineHeight: 1.7 }}>
            BL/01<br />VOL. VIII<br />2026 EDITION
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 132, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 0.94, margin: 0 }}>
              A studio<br />for moments<br />
              <span style={{ fontStyle: 'italic' }}>that matter.</span>
            </h1>
            <div style={{ display: 'flex', gap: 56, marginTop: 64, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, maxWidth: 480 }}>
                <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, opacity: 0.78, fontWeight: 400 }}>
                  Black Lemon is an event studio based in Dubai. We work with governments, cultural institutions and global brands to produce conferences, activations and pavilions across the Gulf.
                </p>
              </div>
              <div style={{ paddingTop: 4 }}>
                <button className="bl-btn" style={{ background: '#0a0a0a', color: '#fff', padding: '14px 22px' }}>Begin a conversation →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE — full bleed */}
      <div style={{ position: 'relative' }}>
        <Placeholder label="GRAND HALL — DUBAI ECONOMIC FORUM 2025" tone="dark" style={{ aspectRatio: '21/9' }} />
        <div style={{ position: 'absolute', bottom: 24, left: 24, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', opacity: 0.7 }}>
          FIG.01 — DUBAI ECONOMIC FORUM, GRAND HALL · MARCH 2025
        </div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 2, background: yellow }} />
      </div>

      {/* PRACTICE — alternating rows */}
      <div style={{ padding: '120px 56px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.25em', opacity: 0.5, marginBottom: 16 }}>I. PRACTICE</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 72, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 64px', maxWidth: 900 }}>
          We are quiet on the floor and loud on the page. Four practices. One standard.
        </h2>
        {[
          { n: 'I', name: 'Conferences & Forums', desc: 'For ministries, multilaterals and Fortune 500s. Stage design, run-of-show, delegate flow, simul translation, broadcast.', icon: 'mic' },
          { n: 'II', name: 'Brand Activations', desc: 'Boutique reveals, product launches, pop-ups. Fabrication, lighting, programming, talent.', icon: 'sparkle' },
          { n: 'III', name: 'Government & VIP', desc: 'Heads of state, royal protocol, security integration. Cleared crew, classified workflows.', icon: 'flag' },
          { n: 'IV', name: 'Exhibitions & Pavilions', desc: 'Stand build at GITEX, ADIPEC, Expo. Modular fabrication, content systems, daily ops.', icon: 'cube' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr 80px', gap: 32, padding: '40px 0', borderTop: '1px solid rgba(0,0,0,0.12)', alignItems: 'flex-start' }}>
            <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.4, paddingTop: 8 }}>{s.n}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.05 }}>{s.name}</div>
            <div style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.7, paddingTop: 12 }}>{s.desc}</div>
            <div style={{ paddingTop: 6 }}><BLIcon name={s.icon} size={32} accent={yellow} /></div>
          </div>
        ))}
      </div>

      {/* JOURNAL */}
      <div style={{ padding: '120px 56px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.25em', opacity: 0.5, marginBottom: 16 }}>II. JOURNAL</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 56, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 56px' }}>Notes from the floor.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { tag: 'ESSAY · 8 MIN', title: 'On the run-of-show.', desc: 'A 4,200-pax forum is a 36-page binder, not a vibe. Notes on the discipline.' },
            { tag: 'CASE STUDY', title: 'Eleven days to build a forum.', desc: 'How we delivered the Dubai Economic Forum in a window that should have been impossible.' },
            { tag: 'INTERVIEW · 12 MIN', title: 'Cleared crew, quiet rooms.', desc: 'Our Head of Protocol on working with heads of state and royal households.' },
          ].map((j, i) => (
            <div key={i}>
              <Placeholder label={`FIG.${String(i+2).padStart(2,'0')}`} tone="dark" style={{ aspectRatio: '4/3', marginBottom: 20 }} />
              <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 8 }}>{j.tag}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 12 }}>{j.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.7 }}>{j.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '120px 56px', background: '#0a0a0a', color: '#fff', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 56, top: 80, width: 4, height: 64, background: yellow }} />
        <div style={{ paddingLeft: 80, maxWidth: 900 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 80, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 32px' }}>
            <span style={{ fontStyle: 'italic' }}>Tell us</span> what's<br />on the calendar.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.5, maxWidth: 540, opacity: 0.7, marginBottom: 40 }}>
            Briefs, decks, half-formed ideas — all welcome. We respond inside one business day.
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <button className="bl-btn" style={{ background: yellow, color: '#0a0a0a' }}>Begin a conversation →</button>
            <span className="bl-mono" style={{ fontSize: 12, letterSpacing: '0.15em', opacity: 0.5 }}>OR · +971 4 555 0118</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '48px 56px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: 32, marginBottom: 20 }}>
          <Wordmark size={160} variant="dark" tagline={false} />
          <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.15em', opacity: 0.6 }}>DESIGN DISTRICT · D3 · DUBAI</div>
        </div>
        <div className="bl-mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.2em', opacity: 0.4 }}>
          <span>© BLACK LEMON · MMXXVI</span>
          <span>EST. 2018 · TRN 100482935700003</span>
        </div>
      </div>
    </div>
  );
};

window.SiteC = SiteC;
