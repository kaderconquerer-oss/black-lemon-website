// Brand guidelines artboards — logo system, color, type, voice, applications

const Section = ({ label, children, dark = false }) => (
  <div style={{ padding: '48px 56px', background: dark ? '#0a0a0a' : '#fff', color: dark ? '#fff' : '#0a0a0a', minHeight: '100%' }}>
    <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 32 }}>
      {label}
    </div>
    {children}
  </div>
);

// 1. LOGO SYSTEM
const LogoSystem = () => (
  <Section label="01 / Logo System" dark>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1 }}>
      The wordmark<br />is the brand.
    </h1>
    <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.5, maxWidth: 600, opacity: 0.7, marginBottom: 56 }}>
      A geometric wordmark, split across two lines by a single yellow bar — the pivot of every event we touch. The bar is non-negotiable. Everything else flexes.
    </p>

    {/* Three lockups */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 56 }}>
      <div style={{ background: '#000', padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 240, border: '1px solid #222' }}>
        <Wordmark size={260} variant="white" tagline />
      </div>
      <div style={{ background: '#fdd535', padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 240 }}>
        <Wordmark size={260} variant="black" tagline />
      </div>
      <div style={{ background: '#fff', padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 240 }}>
        <Wordmark size={260} variant="dark" tagline />
      </div>
    </div>

    {/* Monogram + clear space */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 56 }}>
      <div>
        <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 16 }}>MONOGRAM · B|</div>
        <div style={{ background: '#141414', border: '1px solid #222', padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200 }}>
          <Monogram size={120} variant="white" />
        </div>
        <p style={{ fontSize: 14, opacity: 0.6, marginTop: 12 }}>For favicons, social avatars, and tight spaces under 64px.</p>
      </div>
      <div>
        <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 16 }}>CLEAR SPACE · 1× BAR</div>
        <div style={{ background: '#141414', border: '1px solid #222', padding: 32, position: 'relative', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ border: '1px dashed rgba(253,213,53,0.5)', padding: 24 }}>
            <Wordmark size={200} variant="white" tagline={false} />
          </div>
        </div>
        <p style={{ fontSize: 14, opacity: 0.6, marginTop: 12 }}>Always reserve at least the width of the bar around all edges.</p>
      </div>
    </div>

    {/* Don'ts */}
    <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 16 }}>DO NOT</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
      {[
        { label: 'STRETCH', el: <div style={{ transform: 'scaleY(1.6)' }}><Wordmark size={140} variant="white" tagline={false} /></div> },
        { label: 'WRONG BG', el: <div style={{ background: '#1a4a8a', padding: 8 }}><Wordmark size={120} variant="white" tagline={false} /></div> },
        { label: 'OUTLINE', el: <div style={{ filter: 'invert(1) saturate(0)' }}><Wordmark size={120} variant="white" tagline={false} /></div> },
        { label: 'ROTATE', el: <div style={{ transform: 'rotate(-12deg)' }}><Wordmark size={120} variant="white" tagline={false} /></div> },
      ].map((d, i) => (
        <div key={i} style={{ background: '#141414', border: '1px solid #2a1010', padding: 24, height: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 8, left: 12, fontFamily: 'var(--font-mono)', fontSize: 9, color: '#ff3b3b', letterSpacing: '0.15em' }}>✗ {d.label}</div>
          {d.el}
        </div>
      ))}
    </div>
  </Section>
);

// 2. COLOR
const ColorSystem = () => {
  const palette = [
    { name: 'Lemon', hex: '#FDD535', role: 'Primary accent', dark: false },
    { name: 'Black', hex: '#0A0A0A', role: 'Primary surface', dark: true },
    { name: 'Ink', hex: '#141414', role: 'Cards, panels', dark: true },
    { name: 'Graphite', hex: '#2A2A2A', role: 'Dividers, borders', dark: true },
    { name: 'Smoke', hex: '#6B6B6B', role: 'Body on dark', dark: true },
    { name: 'Mist', hex: '#B8B8B8', role: 'Disabled, captions', dark: false },
    { name: 'Bone', hex: '#EBE6DC', role: 'Light surface', dark: false },
    { name: 'Paper', hex: '#F5F1EA', role: 'Cream backdrop', dark: false },
    { name: 'White', hex: '#FFFFFF', role: 'Pure light', dark: false },
  ];
  return (
    <Section label="02 / Color">
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1 }}>
        One yellow.<br />Everything else, ink.
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 600, opacity: 0.7, marginBottom: 56 }}>
        Lemon is the only saturated color in the system. Use it for emphasis — never as decoration. Aim for 5–10% of any composition.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {palette.map(c => (
          <div key={c.hex} style={{ border: '1px solid #e0dcd2' }}>
            <div style={{ background: c.hex, height: 180, position: 'relative' }}>
              {c.name === 'Lemon' && <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: '#0a0a0a' }}>★ PRIMARY</div>}
            </div>
            <div style={{ padding: '16px 18px', background: '#fff' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600 }}>{c.name}</div>
              <div className="bl-mono" style={{ fontSize: 11, opacity: 0.6, marginTop: 4 }}>{c.hex}</div>
              <div style={{ fontSize: 13, opacity: 0.7, marginTop: 8 }}>{c.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, padding: 32, background: '#0a0a0a', color: '#fff' }}>
        <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 16 }}>RATIO IN COMPOSITION</div>
        <div style={{ display: 'flex', height: 60, marginBottom: 12 }}>
          <div style={{ background: '#0a0a0a', flex: 70, borderRight: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', paddingLeft: 16, fontFamily: 'var(--font-mono)', fontSize: 11 }}>BLACK · 70</div>
          <div style={{ background: '#fff', color: '#0a0a0a', flex: 22, display: 'flex', alignItems: 'center', paddingLeft: 16, fontFamily: 'var(--font-mono)', fontSize: 11 }}>WHITE · 22</div>
          <div style={{ background: '#fdd535', color: '#0a0a0a', flex: 8, display: 'flex', alignItems: 'center', paddingLeft: 16, fontFamily: 'var(--font-mono)', fontSize: 11 }}>★ 8</div>
        </div>
      </div>
    </Section>
  );
};

// 3. TYPOGRAPHY
const TypeSystem = () => (
  <Section label="03 / Typography" dark>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1 }}>
      Now.<br />Set in stone.
    </h1>
    <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 640, opacity: 0.7, marginBottom: 48 }}>
      The brand voice is set in <b>Now</b> (Canva) — geometric, confident, with a single-storey 'a'. For systems where Now is unavailable, <b>Manrope</b> is the approved digital substitute. Mono accents in <b>JetBrains Mono</b>.
    </p>

    {/* Type scale */}
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, alignItems: 'baseline', borderTop: '1px solid #2a2a2a', paddingTop: 24 }}>
      {[
        { size: 96, label: 'DISPLAY · 96/0.95', sample: 'Made in Dubai.' },
        { size: 56, label: 'H1 · 56/1.05', sample: 'Brand activations, on time, on budget.' },
        { size: 32, label: 'H2 · 32/1.15', sample: 'A studio for moments that matter.' },
        { size: 20, label: 'H3 · 20/1.3', sample: 'From boardroom to ballroom — every detail considered.' },
        { size: 16, label: 'BODY · 16/1.55', sample: 'We design, plan and produce events for governments, brands and enterprises across the GCC. Eight years, 240+ activations, zero compromises.' },
        { size: 11, label: 'MONO · 11/1.4', sample: 'BL/01 · DXB · EST. 2018 · 25.276987° N, 55.296249° E', mono: true },
      ].map((t, i) => (
        <React.Fragment key={i}>
          <div className="bl-mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: '0.15em', paddingTop: 12, borderTop: i ? '1px solid #1a1a1a' : 'none' }}>{t.label}</div>
          <div style={{ fontFamily: t.mono ? 'var(--font-mono)' : 'var(--font-display)', fontSize: t.size, fontWeight: t.size >= 32 ? 700 : 400, lineHeight: t.size >= 56 ? 0.98 : 1.3, letterSpacing: t.size >= 56 ? '-0.02em' : '0', paddingTop: 12, borderTop: i ? '1px solid #1a1a1a' : 'none', paddingBottom: 12 }}>{t.sample}</div>
        </React.Fragment>
      ))}
    </div>
  </Section>
);

// 4. VOICE
const VoiceSystem = () => (
  <Section label="04 / Voice & Tone">
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1 }}>
      Plain words.<br />Big rooms.
    </h1>
    <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 600, opacity: 0.7, marginBottom: 56 }}>
      We're operators, not poets. Short sentences. Specific numbers. No fluff, no filler, no hospitality clichés.
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      {[
        { do: 'A 4,200-pax product launch in 11 days.', dont: 'Crafting unforgettable journeys for our valued partners.' },
        { do: 'Stage. Lights. Run-of-show. Done.', dont: 'We pride ourselves on holistic event solutions.' },
        { do: 'We build it. We run it. We strike it.', dont: 'Synergistic experiential ecosystems.' },
        { do: 'Eight years. Forty cities. One bar.', dont: 'A leading boutique agency in the MENA region.' },
      ].map((v, i) => (
        <div key={i} style={{ border: '1px solid #e0dcd2' }}>
          <div style={{ padding: 24, background: '#fff', borderBottom: '1px solid #e0dcd2', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, right: 16, fontFamily: 'var(--font-mono)', fontSize: 10, color: '#0a0a0a', letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, background: '#fdd535' }} />DO
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, lineHeight: 1.2 }}>"{v.do}"</div>
          </div>
          <div style={{ padding: 24, background: '#f5f1ea', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, right: 16, fontFamily: 'var(--font-mono)', fontSize: 10, color: '#888', letterSpacing: '0.15em' }}>✗ DON'T</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, lineHeight: 1.3, color: '#888', textDecoration: 'line-through', textDecorationColor: '#ccc' }}>"{v.dont}"</div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// 5. ICON SET
const IconSet = () => {
  const icons = ['stage','spotlight','mic','audience','calendar','pin','camera','speaker','cube','sparkle','flag','ticket','gear','screen','globe','arrow'];
  return (
    <Section label="05 / Icon Library" dark>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1 }}>
        Sixteen marks,<br />one bar each.
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 600, opacity: 0.7, marginBottom: 48 }}>
        Every Black Lemon icon carries a single yellow stroke — a reminder of the bar in the wordmark. 1.5px line, 32×32 grid, 4px outer padding.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#1a1a1a', border: '1px solid #1a1a1a' }}>
        {icons.map(name => (
          <div key={name} style={{ background: '#0a0a0a', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, transition: 'background 0.2s' }}
               onMouseEnter={e => e.currentTarget.style.background = '#141414'}
               onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}>
            <BLIcon name={name} size={48} color="#fff" />
            <div className="bl-mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{name}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// 6. APPLICATIONS — business card, social, deck cover, signage
const Applications = () => (
  <Section label="06 / Applications">
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1 }}>
      In the wild.
    </h1>
    <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 600, opacity: 0.7, marginBottom: 48 }}>
      Stationery, social, decks, on-site signage. The bar travels with us.
    </p>

    {/* Business cards */}
    <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 12 }}>BUSINESS CARD · 85×55MM</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 48 }}>
      <div style={{ background: '#0a0a0a', color: '#fff', aspectRatio: '85/55', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Wordmark size={140} variant="white" tagline={false} />
        <div className="bl-mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: '0.15em' }}>DXB · MENA</div>
      </div>
      <div style={{ background: '#fdd535', color: '#0a0a0a', aspectRatio: '85/55', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700 }}>Layla Al-Sayed</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>Executive Producer</div>
        </div>
        <div className="bl-mono" style={{ fontSize: 10, letterSpacing: '0.1em' }}>
          layla<span style={{ display: 'inline-block', width: 1, height: 10, background: '#0a0a0a', margin: '0 4px', verticalAlign: '-1px' }} />blacklemon.ae<br />
          +971 4 555 0118
        </div>
      </div>
    </div>

    {/* Social */}
    <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 12 }}>SOCIAL · 1080×1350</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
      <div style={{ background: '#0a0a0a', color: '#fff', aspectRatio: '4/5', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Monogram size={36} variant="white" />
        <div>
          <div className="bl-mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: '0.2em', marginBottom: 12 }}>NOW SHOWING / 03</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            <span style={{ color: '#fdd535' }}>4,200</span><br />pax<br />through<br />the door.
          </div>
        </div>
      </div>
      <div style={{ aspectRatio: '4/5' }}><Placeholder label="HERO IMAGE — STAGE" tone="dark" /></div>
      <div style={{ background: '#fdd535', color: '#0a0a0a', aspectRatio: '4/5', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          Built<br />in 11<br />days.
        </div>
        <div className="bl-mono" style={{ fontSize: 10, marginTop: 16, letterSpacing: '0.15em' }}>BLACKLEMON.AE</div>
      </div>
    </div>

    {/* Deck cover + lanyard */}
    <div className="bl-mono" style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 12 }}>DECK COVER · ON-SITE LANYARD</div>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
      <div style={{ background: '#0a0a0a', color: '#fff', aspectRatio: '16/9', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '40%', width: 3, background: '#fdd535' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Monogram size={28} variant="white" />
          <div className="bl-mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: '0.2em' }}>PROPOSAL · CONFIDENTIAL</div>
        </div>
        <div>
          <div className="bl-mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: '0.2em', marginBottom: 12 }}>FOR / DUBAI ECONOMIC FORUM</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 700, lineHeight: 0.98, letterSpacing: '-0.02em' }}>
            Three days.<br />Forty heads of state.<br />One run-of-show.
          </div>
        </div>
      </div>
      <div style={{ background: '#fdd535', color: '#0a0a0a', aspectRatio: '3/5', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className="bl-mono" style={{ fontSize: 9, letterSpacing: '0.2em' }}>CREW / ALL-ACCESS</div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' }}>O. RASHID</div>
          <div style={{ fontSize: 11, marginTop: 4, opacity: 0.7 }}>Floor Manager</div>
        </div>
        <Monogram size={24} variant="black" />
      </div>
    </div>
  </Section>
);

Object.assign(window, { LogoSystem, ColorSystem, TypeSystem, VoiceSystem, IconSet, Applications });
