// Header + Footer + Page Header

const SiteHeader = ({ route }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 32px' : '24px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      transition: 'all 0.3s',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <a href="#/home" style={{ display: 'flex', alignItems: 'center' }}>
        <Wordmark size={140} variant="dark" />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {NAV.slice(1, -1).map(n => (
          <a key={n.id} href={n.href} className="bl-link" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: route === n.id ? 'var(--bl-yellow)' : '#fff',
            opacity: route === n.id ? 1 : 0.85,
          }}>{n.label}</a>
        ))}
        <a href="#/contact" className="bl-btn bl-btn--yellow" style={{ padding: '10px 18px' }}>
          Start a project <BLIcon name="arrow" size={14} color="#0a0a0a" accent="#0a0a0a" />
        </a>
      </nav>
    </header>
  );
};

const SiteFooter = () => {
  return (
    <footer style={{ background: '#0a0a0a', color: '#fff', padding: '96px 64px 32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, marginBottom: 96 }}>
        <div>
          <Wordmark size={220} variant="dark" tagline />
          <p style={{ marginTop: 32, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.4, maxWidth: 360, color: 'rgba(255,255,255,0.75)' }}>
            We make rooms people remember. <br/>Quietly, on purpose.
          </p>
        </div>
        <div>
          <div className="bl-eyebrow" style={{ marginBottom: 20 }}>Studio</div>
          {NAV.slice(1).map(n => (
            <a key={n.id} href={n.href} style={{ display: 'block', padding: '6px 0', fontSize: 15, opacity: 0.8 }} className="bl-link">{n.label}</a>
          ))}
        </div>
        <div>
          <div className="bl-eyebrow" style={{ marginBottom: 20 }}>Visit</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.8, margin: 0 }}>
            Warehouse 4, Alserkal Avenue<br/>
            Al Quoz 1, Dubai, UAE<br/>
            <span style={{ opacity: 0.6 }}>By appointment</span>
          </p>
        </div>
        <div>
          <div className="bl-eyebrow" style={{ marginBottom: 20 }}>Contact</div>
          <a href="mailto:studio@blacklemon.ae" style={{ display: 'block', padding: '6px 0', fontSize: 15 }} className="bl-link">studio@blacklemon.ae</a>
          <a href="tel:+97144000000" style={{ display: 'block', padding: '6px 0', fontSize: 15 }} className="bl-link">+971 4 400 0000</a>
          <a href="https://wa.me/971500000000" style={{ display: 'block', padding: '6px 0', fontSize: 15 }} className="bl-link">WhatsApp \u2192</a>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}>
        <div className="bl-eyebrow" style={{ display: 'flex', gap: 32 }}>
          <span>\u00a9 2025 Black Lemon FZ-LLC</span>
          <span>Trade Licence 0044827</span>
          <a href="#/journal" className="bl-link">Imprint</a>
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, opacity: 0.6 }}>
          Made in Dubai \u00b7 25.276°N 55.296°E
        </div>
      </div>
    </footer>
  );
};

const PageHeader = ({ eyebrow, title, dek, dark = true }) => (
  <section style={{ padding: '180px 64px 96px', background: dark ? '#0a0a0a' : '#f5f1ea', color: dark ? '#fff' : '#0a0a0a', borderBottom: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)' }}>
    <Reveal>
      <div className="bl-eyebrow" style={{ marginBottom: 48 }}>{eyebrow}</div>
      <h1 className="bl-h1" style={{ maxWidth: 1400 }}>{title}</h1>
      {dek && <p style={{ marginTop: 40, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 28, lineHeight: 1.4, maxWidth: 720, opacity: 0.8 }}>{dek}</p>}
    </Reveal>
  </section>
);

Object.assign(window, { SiteHeader, SiteFooter, PageHeader });
