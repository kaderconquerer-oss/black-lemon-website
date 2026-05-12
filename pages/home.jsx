// Home page — single-page scroller

const HomeHero = () => {
  // Kinetic hero: oversized type with cycling word
  const words = ['Galas.', 'Launches.', 'Weddings.', 'Festivals.', 'Town halls.', 'Dinners.'];
  const [i, setI] = React.useState(0);
  // #region agent log
  const heroDbgMount = React.useRef(0);
  const heroSectionRef = React.useRef(null);
  heroDbgMount.current += 1;
  React.useEffect(() => {
    fetch('http://127.0.0.1:7837/ingest/e849a84d-c4e5-4ac3-9ebd-f8eb341c5084', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'c543d8' }, body: JSON.stringify({ sessionId: 'c543d8', location: 'home.jsx:HomeHero', message: 'mount', data: { hypothesisId: 'A', renderCount: heroDbgMount.current }, timestamp: Date.now(), runId: 'pre-fix' }) }).catch(() => {});
  }, []);
  React.useEffect(() => {
    fetch('http://127.0.0.1:7837/ingest/e849a84d-c4e5-4ac3-9ebd-f8eb341c5084', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'c543d8' }, body: JSON.stringify({ sessionId: 'c543d8', location: 'home.jsx:HomeHero', message: 'wordIndexTick', data: { hypothesisId: 'A', i }, timestamp: Date.now(), runId: 'pre-fix' }) }).catch(() => {});
  }, [i]);
  React.useEffect(() => {
    let po;
    try {
      po = new PerformanceObserver((list) => {
        for (const e of list.getEntries()) {
          if (e.duration >= 48) {
            fetch('http://127.0.0.1:7837/ingest/e849a84d-c4e5-4ac3-9ebd-f8eb341c5084', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'c543d8' }, body: JSON.stringify({ sessionId: 'c543d8', location: 'home.jsx:HomeHero', message: 'longtask', data: { hypothesisId: 'E', durationMs: Math.round(e.duration), name: e.name || '' }, timestamp: Date.now(), runId: 'pre-fix' }) }).catch(() => {});
          }
        }
      });
      po.observe({ type: 'longtask', buffered: true });
    } catch (_) { /* longtask not supported */ }
    return () => { try { po && po.disconnect(); } catch (_) {} };
  }, []);
  // #endregion
  React.useEffect(() => {
    const el = heroSectionRef.current;
    if (!el) return;
    // #region agent log
    let prev = null;
    const io = new IntersectionObserver(([e]) => {
      const is = e.isIntersecting;
      if (prev !== null && prev !== is) {
        fetch('http://127.0.0.1:7837/ingest/e849a84d-c4e5-4ac3-9ebd-f8eb341c5084', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'c543d8' }, body: JSON.stringify({ sessionId: 'c543d8', location: 'home.jsx:heroIo', message: 'visibilityToggle', data: { hypothesisId: 'D', isIntersecting: is, ratio: e.intersectionRatio }, timestamp: Date.now(), runId: 'pre-fix' }) }).catch(() => {});
      }
      prev = is;
    }, { threshold: [0, 0.15, 0.5, 1] });
    io.observe(el);
    return () => io.disconnect();
    // #endregion
  }, []);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" ref={heroSectionRef} className="bl-hero" style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: '128px 64px 96px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Top meta — subtle, top-right, yellow */}
      <div className="bl-hero-meta">
        <span className="bl-hero-meta__dot" aria-hidden="true" />
        <span className="bl-hero-meta__text">Dubai · Operating since 2019</span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40, paddingTop: 24, minHeight: 0 }}>
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

        <div className="bl-hero-bottom">
          <Reveal delay={300}>
            <p className="bl-hero-tagline">
              An event studio in Dubai working at the intersection of editorial design and live production. Galas, launches, conferences, dinners — built by six people, on purpose.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="bl-hero-scroll">
        <Reveal delay={450}>
          <a href="#about" className="bl-scroll-cue bl-scroll-cue--rail" aria-label="Scroll to explore the studio">
            <span className="bl-scroll-cue__hint">Scroll</span>
            <span className="bl-scroll-cue__rail" aria-hidden="true">
              <span className="bl-scroll-cue__rail-fill" />
              <span className="bl-scroll-cue__glow-dot" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

// About — 2 founders, placeholder portraits + bios
const HomeAbout = () => (
  <section id="about" className="bl-section" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, marginBottom: 72, alignItems: 'flex-end' }}>
      <Reveal>
        <div className="bl-eyebrow" style={{ marginBottom: 32 }}>About the studio</div>
        <h2 className="bl-h2">Two founders.<br/><span className="bl-italic" style={{ fontWeight: 300 }}>One studio, since 2019.</span></h2>
        <YellowRule width="160px" height={3} delay={300} style={{ marginTop: 32 }} />
      </Reveal>
      <Reveal delay={200}>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.75, margin: 0 }}>
          A small studio with a long memory — six years in Dubai, and a habit of saying no more often than yes. We started Black Lemon to make events that read like editorial: one strong idea, executed without hedging.
        </p>
      </Reveal>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="bl-founders">
      {[
        { name: 'Hassan El Beyrouthy', role: 'Creative Director · Co-founder',
          image: 'assets/hassan.jpg',
          bio: 'A short bio about Hassan — background, taste, what he brings to the room. Replace this paragraph with the real one when ready. Two or three sentences feels about right.' },
        { name: 'Founder Two', role: 'Production Director · Co-founder',
          image: null,
          bio: 'A short bio about Founder Two — background, taste, what they bring to the room. Replace this paragraph with the real one when ready. Two or three sentences feels about right.' },
      ].map((f, i) => (
        <Reveal key={f.name} delay={i * 150}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {f.image ? (
              <div style={{ width: '100%', aspectRatio: '4 / 5', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', background: '#0a0a0a' }}>
                <img src={f.image} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: 'grayscale(0.15) contrast(1.02)' }} />
              </div>
            ) : (
              <Placeholder label={`Portrait — ${f.name}`} style={{ width: '100%', aspectRatio: '4 / 5', border: '1px solid rgba(255,255,255,0.1)' }} />
            )}
            <div>
              <div className="bl-eyebrow" style={{ marginBottom: 8 }}>{f.role}</div>
              <h3 className="bl-h3" style={{ marginBottom: 16 }}>{f.name}</h3>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 18, lineHeight: 1.6, opacity: 0.8, margin: 0 }}>
                {f.bio}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);



const HomeMarquee = () => {
  const items = ['Editorial events', 'Concept to cleanup', 'Dubai \u00b7 Riyadh \u00b7 London', 'Founded 2019', 'No theme weddings', 'Six people, one studio'];
  return (
    <section id="marquee" className="bl-marquee-wrap" style={{ background: 'var(--bl-yellow)', color: '#0a0a0a', padding: '14px 0', borderTop: '1px solid #0a0a0a', borderBottom: '1px solid #0a0a0a' }}>
      <div className="bl-marquee-track">
        {[...items, ...items, ...items, ...items].map((it, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 28, paddingRight: 28 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.005em', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>{it}</span>
            <span style={{ width: 5, height: 5, background: '#0a0a0a', borderRadius: '50%' }} />
          </div>
        ))}
      </div>
    </section>
  );
};

// Sliding cities band — reads from MENA_CITIES. Mouse-reactive: smooth speed + gentle 3D tilt.
const CitiesBand = () => {
  const wrapRef = React.useRef(null);
  const row1Ref = React.useRef(null);
  const row2Ref = React.useRef(null);

  // Smooth-tracked mouse x (-1..+1). State is for tilt only; speed runs in RAF.
  const targetRef = React.useRef({ x: 0, active: false });
  const smoothRef = React.useRef({ x: 0, active: 0 }); // active eases 0..1
  const [tilt, setTilt] = React.useState({ x: 0, active: 0 });

  // Continuous offset for each row (in % of one segment width).
  const offsetRef = React.useRef({ a: 0, b: 0 });

  const onMove = (e) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    targetRef.current = { x: Math.max(-1, Math.min(1, x)), active: true };
  };
  const onLeave = () => { targetRef.current = { x: 0, active: false }; };

  React.useEffect(() => {
    let raf = 0, last = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      const tgt = targetRef.current;
      const s = smoothRef.current;
      // Ease smoothed mouse toward target — slow, buttery
      const easeP = 1 - Math.pow(0.001, dt); // ~independent of dt
      s.x += (tgt.x - s.x) * easeP;
      s.active += ((tgt.active ? 1 : 0) - s.active) * easeP;
      // Speeds (segments per second). Slower base + slow-on-hover.
      // Base 0.018 ≈ 55s loop. Hover scales speed down to ~25%.
      const base = 0.018;
      const slow = 1 - s.active * 0.75;
      const r1 = base * slow;
      const r2 = base * slow;
      const o = offsetRef.current;
      o.a = (o.a - r1 * dt) % 1; // shift left
      o.b = (o.b + r2 * dt) % 1; // shift right
      if (row1Ref.current) row1Ref.current.style.transform = `translate3d(${(o.a * 33.3333)}%, 0, 0)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translate3d(${(o.b * 33.3333 - 33.3333)}%, 0, 0)`;
      // Update tilt (state) only when noticeably changed
      if (Math.abs(s.x - tilt.x) > 0.003 || Math.abs(s.active - tilt.active) > 0.01) {
        setTilt({ x: s.x, active: s.active });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rotY = tilt.x * 5 * tilt.active;
  const rotX = -1.5 * tilt.active;

  const row1 = MENA_CITIES;
  const row2 = [...MENA_CITIES].reverse();

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="bl-cities bl-cities--3d"
      style={{ perspective: '1100px', transformStyle: 'preserve-3d' }}
    >
      <div
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s cubic-bezier(.2,.7,.3,1)',
          display: 'flex', flexDirection: 'column', gap: 10,
        }}
      >
        <div className="bl-cities-row">
          <div ref={row1Ref} className="bl-cities-track bl-cities-track--js">
            {[...row1, ...row1, ...row1].map((c, i) => (
              <span key={i} className="bl-city">
                <span className="bl-city__pin" />
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="bl-cities-row">
          <div ref={row2Ref} className="bl-cities-track bl-cities-track--js">
            {[...row2, ...row2, ...row2].map((c, i) => (
              <span key={i} className="bl-city">
                <span className="bl-city__pin" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeStats = () => (
  <section id="stats" className="bl-section">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'flex-end', marginBottom: 96 }}>
      <Reveal>
        <div className="bl-eyebrow" style={{ marginBottom: 32 }}>By the numbers</div>
        <h2 className="bl-h2">Quiet receipts.<br/><span className="bl-italic" style={{ fontWeight: 300 }}>Across the region.</span></h2>
        <YellowRule width="160px" height={3} delay={300} style={{ marginTop: 32 }} />
      </Reveal>
      <Reveal delay={200}>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.75 }}>
          We could show you a wall of logos. Instead, here's the work — and where it travels.
        </p>
      </Reveal>
    </div>

    {/* Two stats + a sliding city band in the middle */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'stretch' }} className="bl-stats-grid">
      <Reveal>
        <div style={{ borderRight: '1px solid rgba(255,255,255,0.12)', padding: '64px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20, height: '100%', justifyContent: 'center' }}>
          <AnimatedStatIcon name="calendar" size={56} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(72px, 8vw, 120px)', letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--bl-yellow)' }}>
            <Counter to={40} />+
          </div>
          <div style={{ width: 32, height: 2, background: 'var(--bl-yellow)', opacity: 0.6 }} />
          <div className="bl-eyebrow">Events produced</div>
        </div>
      </Reveal>

      {/* Cities band — middle */}
      <Reveal delay={120}>
        <div style={{ borderRight: '1px solid rgba(255,255,255,0.12)', padding: '48px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: 24, position: 'relative' }} className="bl-stats-cities">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="bl-eyebrow">GCC · North Africa</div>
            <div className="bl-eyebrow" style={{ opacity: 0.5 }}>16 cities</div>
          </div>
          <CitiesBand />
          <div className="bl-eyebrow" style={{ opacity: 0.5, textAlign: 'center' }}>— Where we've worked —</div>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <div style={{ padding: '64px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20, height: '100%', justifyContent: 'center' }}>
          <AnimatedStatIcon name="award" size={56} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(72px, 8vw, 120px)', letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--bl-yellow)' }}>
            <Counter to={20} />+
          </div>
          <div style={{ width: 32, height: 2, background: 'var(--bl-yellow)', opacity: 0.6 }} />
          <div className="bl-eyebrow">Years of experience</div>
        </div>
      </Reveal>
    </div>
  </section>
);

// Studio note — single line, no scroll-jacking
const HomeParallax = () => (
  <section
    id="studio-note"
    className="bl-studio-note"
    style={{
      background: '#050505',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}
  >
    <div className="bl-studio-note__inner">
      <div className="bl-eyebrow bl-studio-note__eyebrow">Studio note</div>
      <p className="bl-studio-note__quote">
        We light the room, <span className="bl-studio-note__accent">so the people light up.</span>
      </p>
      <p className="bl-studio-note__attr">Hassan El Beyrouthy · Founder</p>
    </div>
  </section>
);

const HomeServices = () => (
  <section id="services" style={{ background: '#f5f1ea', color: '#0a0a0a', padding: '120px 64px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, marginBottom: 80 }}>
      <Reveal>
        <div className="bl-eyebrow" style={{ marginBottom: 32 }}>What we do</div>
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
          <div className="bl-row" style={{ display: 'grid', gridTemplateColumns: '80px 1.4fr 2fr 60px', gap: 32, padding: '36px 0', borderBottom: '1px solid rgba(0,0,0,0.15)', alignItems: 'baseline' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, opacity: 0.5 }}>{s.num}</div>
            <div className="bl-h3">{s.name}</div>
            <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.7, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>{s.desc}</div>
            <div style={{ textAlign: 'right' }}><BLIcon name="arrow" size={20} color="#0a0a0a" accent="var(--bl-yellow)" /></div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const HomeWork = () => {
  const featured = CASE_STUDIES.slice(0, 6);
  const [hover, setHover] = React.useState(null); // { i, x, y }
  const sectionRef = React.useRef(null);
  const onMove = (e, i) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    setHover({ i, x: e.clientX - r.left, y: e.clientY - r.top });
  };
  return (
    <section id="work" ref={sectionRef} className="bl-section" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, marginBottom: 80 }}>
        <Reveal>
          <div className="bl-eyebrow" style={{ marginBottom: 32 }}>Selected work</div>
          <h2 className="bl-h2">Recent events.</h2>
        </Reveal>
        <Reveal delay={200}>
          <p style={{ alignSelf: 'flex-end', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.75, margin: 0 }}>
            A handful of recent rooms — galas, launches, festivals, and the occasional 88-person dinner.
          </p>
        </Reveal>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        {featured.map((cs, i) => (
          <a
            key={cs.slug}
            href={`#/work/${cs.slug}`}
            className={`bl-row bl-work-row${hover?.i === i ? ' is-hover' : ''}`}
            onMouseMove={(e) => onMove(e, i)}
            onMouseLeave={() => setHover(h => (h && h.i === i ? null : h))}
            style={{ display: 'grid', gridTemplateColumns: '80px 1.6fr 1.5fr 1fr', gap: 32, padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'center', position: 'relative', cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, opacity: 0.5 }}>{String(i+1).padStart(2,'0')}</div>
            <div>
              <div className="bl-eyebrow" style={{ marginBottom: 8 }}>{cs.client}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{cs.title}</div>
            </div>
            <div style={{ fontSize: 14, opacity: 0.6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cs.tag}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, opacity: 0.5, textAlign: 'right' }}>{cs.year}</div>
          </a>
        ))}
      </div>

      {/* Hover preview that follows the cursor */}
      {hover && (
        <div className="bl-work-preview" style={{ left: hover.x, top: hover.y }}>
          <Placeholder label={featured[hover.i].client} style={{ width: 320, height: 220, border: '1px solid rgba(255,255,255,0.15)' }} />
          <div style={{ marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>
            {featured[hover.i].tag} · {featured[hover.i].year}
          </div>
        </div>
      )}
    </section>
  );
};

const HomeManifesto = () => (
  <section style={{ background: 'var(--bl-yellow)', color: '#0a0a0a', padding: '160px 64px', borderTop: '1px solid #0a0a0a' }}>
    <div className="bl-eyebrow" style={{ marginBottom: 80 }}>Studio note</div>
    <Reveal>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: 1400, margin: 0 }}>
        We don't believe in <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 700 }}>themes</span>, we don't believe in <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 700 }}>vibes</span>, and we don't believe a gala needs an <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 700 }}>LED wall</span> to feel important.
        <br/><br/>We believe in <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-display)', fontWeight: 700 }}>one strong idea</span>, executed without hedging.
      </h2>
    </Reveal>
    <div style={{ marginTop: 96 }}>
      <div className="bl-eyebrow">— The studio, since 2019</div>
    </div>
  </section>
);

// Clients — clean 3D card stack. Whole grid tilts gently with mouse;
// the cell under the cursor lifts forward with a yellow underline.
const HomeClients = () => {
  const ref = React.useRef(null);
  const rafRef = React.useRef(0);
  const targetRef = React.useRef({ x: 0.5, y: 0.5, active: false, hoverIdx: -1 });
  const [m, setM] = React.useState({ x: 0.5, y: 0.5, active: false, hoverIdx: -1 });

  const tick = React.useCallback(() => {
    setM(prev => {
      const t = targetRef.current;
      const ease = 0.14;
      const nx = prev.x + (t.x - prev.x) * ease;
      const ny = prev.y + (t.y - prev.y) * ease;
      const done = Math.abs(nx - t.x) < 0.001 && Math.abs(ny - t.y) < 0.001 && prev.active === t.active && prev.hoverIdx === t.hoverIdx;
      if (!done) rafRef.current = requestAnimationFrame(tick);
      else rafRef.current = 0;
      return { x: nx, y: ny, active: t.active, hoverIdx: t.hoverIdx };
    });
  }, []);

  const COLS = 7, ROWS = 3;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const col = Math.min(COLS - 1, Math.max(0, Math.floor(x * COLS)));
    const row = Math.min(ROWS - 1, Math.max(0, Math.floor(y * ROWS)));
    targetRef.current = { x, y, active: true, hoverIdx: row * COLS + col };
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
  };
  const onLeave = () => {
    targetRef.current = { x: 0.5, y: 0.5, active: false, hoverIdx: -1 };
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
  };
  React.useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  // Whole-grid tilt that follows the mouse — small, elegant, controlled.
  const gridRotX = m.active ? (0.5 - m.y) * 8 : 0;
  const gridRotY = m.active ? (m.x - 0.5) * 10 : 0;

  return (
    <section id="clients" style={{ padding: '120px 64px', background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, marginBottom: 64, alignItems: 'flex-end' }}>
        <Reveal>
          <div className="bl-eyebrow" style={{ marginBottom: 24 }}>Selected clients</div>
          <h2 className="bl-h2">Names you know.</h2>
        </Reveal>
        <Reveal delay={150}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 20, lineHeight: 1.5, opacity: 0.7, margin: 0 }}>
            Some are global. Some are local. All of them got a room they'll remember.
          </p>
        </Reveal>
      </div>

      <div className="bl-clients-stage" style={{ perspective: '1600px' }}>
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="bl-clients-grid-v2"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            transform: `rotateX(${gridRotX}deg) rotateY(${gridRotY}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s cubic-bezier(.2,.7,.3,1)',
          }}
        >
          {CLIENTS.map((c, i) => {
            const isHover = i === m.hoverIdx && m.active;
            const isLong = c.length > 14;
            return (
              <div
                key={c}
                className={`bl-client-card-v2${isHover ? ' is-hover' : ''}`}
                style={{ transform: isHover ? 'translateZ(40px)' : 'translateZ(0)' }}
              >
                <span className="bl-client-card-v2__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="bl-client-card-v2__name" style={{ fontSize: isLong ? 'clamp(12px, 1.1vw, 15px)' : 'clamp(15px, 1.4vw, 20px)', letterSpacing: isLong ? '0.01em' : '-0.005em' }}>
                  {c}
                </span>
                <span className="bl-client-card-v2__rule" />
              </div>
            );
          })}
          {/* 22nd cell — CTA, spans full row, jumps to contact */}
          <a
            href="#contact"
            className={`bl-client-card-v2 bl-client-card-v2--cta${m.hoverIdx === CLIENTS.length && m.active ? ' is-hover' : ''}`}
            style={{ gridColumn: '1 / -1', textDecoration: 'none', transform: (m.hoverIdx === CLIENTS.length && m.active) ? 'translateZ(48px)' : 'translateZ(0)' }}
          >
            <span className="bl-client-card-v2__num">{String(CLIENTS.length + 1).padStart(2, '0')}</span>
            <span className="bl-client-card-v2-cta__line">
              <span className="bl-client-card-v2-cta__text">Ready to be number 22?</span>
              <span className="bl-client-card-v2-cta__arrow" aria-hidden="true">→</span>
            </span>
            <span className="bl-client-card-v2__rule" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact section — different color, same form
const HomeContact = () => {
  const [form, setForm] = React.useState({ name: '', company: '', email: '', type: '', date: '', budget: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  const eventTypes = ['Corporate / Town Hall', 'Gala / Fundraiser', 'Brand Launch', 'Conference / Summit', 'Wedding / Private', 'Festival / Public', 'Other'];
  const budgets = ['Under AED 250k', 'AED 250k \u2013 750k', 'AED 750k \u2013 2M', 'AED 2M \u2013 5M', 'AED 5M+', 'Not sure yet'];

  return (
    <section id="contact" className="bl-contact-section" style={{ background: '#f5f1ea', color: '#0a0a0a', padding: '140px 64px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <div className="bl-contact-header">
        <div>
          <div className="bl-eyebrow" style={{ marginBottom: 32 }}>Contact</div>
          <h2 className="bl-contact-h">Tell us about<br/><span className="bl-italic" style={{ fontWeight: 300 }}>the event.</span></h2>
        </div>
        <p className="bl-contact-lede">
          Six fields, four minutes. We reply to every brief within two working days — even the ones we can't take on.
        </p>
      </div>

      <div className="bl-contact-grid">
        <div className="bl-contact-form-col">
          {sent ? (
            <div style={{ padding: '120px 0' }}>
              <div style={{ display: 'inline-block', padding: 24, border: '2px solid #0a0a0a', marginBottom: 32 }}>
                <BLIcon name="sparkle" size={48} color="#0a0a0a" accent="#0a0a0a" />
              </div>
              <h2 className="bl-h2" style={{ marginBottom: 24 }}>Got it.</h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.8, maxWidth: 600, margin: 0 }}>
                Thanks, {form.name || 'friend'}. We'll come back to you within two working days. If it's urgent, WhatsApp us — we usually pick up.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bl-contact-form">
              <div className="bl-contact-row">
                <div>
                  <label className="bl-label">01 / Your name</label>
                  <input className="bl-input" placeholder="Layla Mansour" value={form.name} onChange={set('name')} required />
                </div>
                <div>
                  <label className="bl-label">02 / Company</label>
                  <input className="bl-input" placeholder="Aurora Capital" value={form.company} onChange={set('company')} />
                </div>
              </div>

              <div>
                <label className="bl-label">03 / Email</label>
                <input className="bl-input" type="email" placeholder="layla@aurora.com" value={form.email} onChange={set('email')} required />
              </div>

              <div>
                <label className="bl-label">04 / Event type</label>
                <div className="bl-chip-row">
                  {eventTypes.map(t => (
                    <button key={t} type="button" onClick={() => setForm(f => ({ ...f, type: t }))} className={`bl-chip${form.type === t ? ' is-active' : ''}`}>{t}</button>
                  ))}
                </div>
              </div>

              <div className="bl-contact-row">
                <div>
                  <label className="bl-label">05 / When</label>
                  <input className="bl-input" placeholder="Q3 2025 / 14 March" value={form.date} onChange={set('date')} />
                </div>
                <div>
                  <label className="bl-label">06 / Budget range</label>
                  <select className="bl-input" value={form.budget} onChange={set('budget')} style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="">Select a range</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="bl-label">07 / What's the event?</label>
                <textarea className="bl-input bl-textarea" rows={4} placeholder="Tell us anything. The audience, the goal, the constraint, the thing that's bugging you about the brief…" value={form.message} onChange={set('message')} />
              </div>

              <div className="bl-contact-footer">
                <div className="bl-eyebrow" style={{ opacity: 0.6 }}>We reply within two working days.</div>
                <button type="submit" className="bl-btn bl-btn--ink" style={{ fontSize: 13, padding: '18px 28px' }}>
                  Send the brief <BLIcon name="arrow" size={16} color="#fff" accent="var(--bl-yellow)" />
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="bl-contact-aside">
          <div className="bl-contact-card">
            <div className="bl-eyebrow" style={{ marginBottom: 24 }}>Or, more directly</div>
            <a href="https://wa.me/971500000000" className="bl-contact-direct bl-contact-direct--link">
              <span className="bl-contact-kv">
                <span className="bl-contact-kv__k">WhatsApp</span>
                <span className="bl-contact-kv__v">+971 50 000 0000</span>
              </span>
              <span className="bl-contact-kv__meta">Mon–Fri, 09:00–18:00 GST</span>
            </a>
            <a href="tel:+97144000000" className="bl-contact-direct bl-contact-direct--link">
              <span className="bl-contact-kv">
                <span className="bl-contact-kv__k">Phone</span>
                <span className="bl-contact-kv__v">+971 4 400 0000</span>
              </span>
            </a>
            <a href="mailto:studio@blacklemon.ae" className="bl-contact-direct bl-contact-direct--link">
              <span className="bl-contact-kv">
                <span className="bl-contact-kv__k">Email</span>
                <span className="bl-contact-kv__v">studio@blacklemon.ae</span>
              </span>
            </a>
          </div>

          <div className="bl-contact-card bl-contact-card--secondary">
            <div className="bl-eyebrow" style={{ marginBottom: 14 }}>Studio address</div>
            <p className="bl-contact-address">
              Warehouse 4<br/>Alserkal Avenue<br/>Al Quoz 1<br/>Dubai, UAE
            </p>
            <p className="bl-contact-coords">
              25.276°N · 55.296°E
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

const SectionDivider = ({ num, label }) => (
  <div className="bl-section-divider" aria-hidden="true">
    <span className="bl-section-divider__rule" />
    <span className="bl-section-divider__num">{num}</span>
    <span className="bl-section-divider__tick" />
    <span>{label}</span>
    <span className="bl-section-divider__rule" />
  </div>
);

const HomePage = () => (
  <>
    <HomeHero />
    <SectionDivider num="01" label="The Studio" />
    <HomeAbout />
    <HomeMarquee />
    <SectionDivider num="02" label="By the numbers" />
    <HomeStats />
    <HomeServices />
    <HomeParallax />
    <SectionDivider num="03" label="Selected work" />
    <HomeWork />
    <HomeManifesto />
    <SectionDivider num="04" label="Clients" />
    <HomeClients />
    <HomeContact />
  </>
);

window.HomePage = HomePage;
