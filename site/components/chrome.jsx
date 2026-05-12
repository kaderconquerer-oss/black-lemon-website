// Header + Footer + WhatsApp + Page Header

const SECTIONS = [
  { id: 'hero', label: 'Top' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact' },
];

const SiteHeader = ({ logoTone = 'black' }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('hero');

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track current section in viewport
  React.useEffect(() => {
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      // Pick the one with highest intersection ratio
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { threshold: [0.25, 0.5, 0.75] });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeOnClick = () => setOpen(false);

  return (
    <>
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '12px 22px' : '28px 22px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled || open ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled || open ? 'blur(16px)' : 'none',
      transition: 'padding 0.45s cubic-bezier(.2,.7,.3,1), background 0.3s, border-color 0.3s',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="assets/logo-white.png" alt="Black Lemon" style={{ height: scrolled ? 38 : 64, width: 'auto', display: 'block', transition: 'height 0.45s cubic-bezier(.2,.7,.3,1)' }} />
        </a>
        <nav className="bl-desktop-nav" style={{ alignItems: 'center', gap: 28 }}>
          {SECTIONS.slice(1).map(s => (
            <a key={s.id} href={`#${s.id}`} className="bl-link" style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: active === s.id ? 'var(--bl-yellow)' : '#fff',
              opacity: active === s.id ? 1 : 0.85,
            }}>{s.label}</a>
          ))}
        </nav>
      </div>
      <a href="#contact" className="bl-desktop-nav bl-btn bl-btn--yellow" style={{ padding: '10px 18px' }}>
        Get in touch <BLIcon name="arrow" size={14} color="#0a0a0a" accent="#0a0a0a" />
      </a>
      <button
        className="bl-mobile-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
        style={{
          background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer',
          width: 44, height: 44, alignItems: 'center', justifyContent: 'center', padding: 0,
          color: '#fff',
        }}
      >
        <span style={{ display: 'block', position: 'relative', width: 18, height: 12 }}>
          <span style={{ position: 'absolute', left: 0, right: 0, top: open ? 5 : 0, height: 2, background: open ? 'var(--bl-yellow)' : '#fff', transition: 'all 0.25s', transform: open ? 'rotate(45deg)' : 'none' }} />
          <span style={{ position: 'absolute', left: 0, right: 0, top: open ? 5 : 10, height: 2, background: open ? 'var(--bl-yellow)' : '#fff', transition: 'all 0.25s', transform: open ? 'rotate(-45deg)' : 'none' }} />
        </span>
      </button>
    </header>

    {/* Mobile drawer — fullscreen, animated */}
    <div
      className={`bl-mobile-drawer${open ? ' is-open' : ''}`}
      aria-hidden={!open}
    >
      <div className="bl-mobile-drawer__bg" aria-hidden="true" />
      <div className="bl-mobile-drawer__content">
        <div className="bl-mobile-drawer__eyebrow">Menu · Black Lemon</div>
        <nav className="bl-mobile-nav">
          {SECTIONS.slice(1).map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={closeOnClick}
              className={`bl-mobile-nav__item${active === s.id ? ' is-active' : ''}`}
              style={{ transitionDelay: open ? `${0.15 + i * 0.07}s` : '0s' }}
            >
              <span className="bl-mobile-nav__index">0{i + 1}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </nav>
        <div className="bl-mobile-drawer__footer">
          <a href="#contact" onClick={closeOnClick} className="bl-mobile-drawer__cta">
            <span>Get in touch</span>
            <BLIcon name="arrow" size={16} color="#0a0a0a" accent="#0a0a0a" />
          </a>
          <div className="bl-mobile-drawer__meta">
            <span>studio@blacklemon.ae</span>
            <span>+971 4 400 0000</span>
            <span>Alserkal Avenue · Dubai</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

// Floating WhatsApp pill — fixed left, always visible
const WhatsAppFab = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="bl-whatsapp-fab"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="bl-whatsapp-fab__pulse" />
      <span className="bl-whatsapp-fab__inner">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.69-1.71A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="#25D366"/>
          <path d="M22.7 19.4c-.37-.18-2.16-1.07-2.5-1.19-.34-.12-.58-.18-.83.18-.24.37-.95 1.19-1.16 1.43-.21.24-.43.27-.79.09-.37-.18-1.55-.57-2.94-1.81a11.06 11.06 0 0 1-2.04-2.54c-.21-.37-.02-.56.16-.74.16-.16.37-.43.55-.64.18-.21.24-.37.37-.61.12-.24.06-.46-.03-.64-.09-.18-.83-2-1.13-2.74-.3-.72-.61-.62-.83-.63l-.7-.01c-.24 0-.64.09-.97.46-.34.37-1.28 1.25-1.28 3.04 0 1.79 1.31 3.52 1.49 3.76.18.24 2.58 3.94 6.25 5.52.87.37 1.55.6 2.08.77.87.28 1.66.24 2.29.15.7-.1 2.16-.88 2.46-1.74.3-.85.3-1.59.21-1.74-.09-.15-.34-.24-.71-.43z" fill="#fff"/>
        </svg>
        <span className={`bl-whatsapp-fab__label ${hover ? 'is-open' : ''}`}>WhatsApp us</span>
      </span>
    </a>
  );
};

const SiteFooter = ({ logoTone = 'black' }) => {
  return (
    <footer style={{ background: '#0a0a0a', color: '#fff', padding: '96px 64px 32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, marginBottom: 96 }}>
        <div>
          <Wordmark size={240} tone={logoTone} tagline />
          <p style={{ marginTop: 32, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.4, maxWidth: 360, color: 'rgba(255,255,255,0.75)' }}>
            We make events people remember. <br/>Quietly, on purpose.
          </p>
        </div>
        <div>
          <div className="bl-eyebrow" style={{ marginBottom: 20 }}>Sections</div>
          {SECTIONS.slice(1).map(s => (
            <a key={s.id} href={`#${s.id}`} style={{ display: 'block', padding: '6px 0', fontSize: 15, opacity: 0.8 }} className="bl-link">{s.label}</a>
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
          <a href="https://wa.me/971500000000" style={{ display: 'block', padding: '6px 0', fontSize: 15 }} className="bl-link">WhatsApp →</a>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}>
        <div className="bl-eyebrow" style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <span>© 2025 Black Lemon FZ-LLC</span>
          <span>Trade Licence 0044827</span>
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, opacity: 0.6 }}>
          Made in Dubai · 25.276°N 55.296°E
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { SiteHeader, SiteFooter, WhatsAppFab });
