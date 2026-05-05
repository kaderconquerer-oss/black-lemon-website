// Black Lemon — site primitives (logo, monogram, icons, cursor bar, animations)

const Wordmark = ({ size = 200, variant = 'white', tagline = false, style = {} }) => {
  const base = tagline ? 'full' : 'wordmark';
  const tone = variant === 'black' ? 'yellow'
             : variant === 'dark'  ? 'white'
             :                       'black';
  const src = `assets/${base}-${tone}.png`;
  const aspect = tagline ? (1344/886) : (1344/674);
  return (
    <img src={src} alt="Black Lemon" style={{ width: size, height: size / aspect, display: 'inline-block', ...style }} />
  );
};

// Cursor-follow yellow bar (page-wide)
const CursorBar = () => {
  React.useEffect(() => {
    const bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;width:2px;height:100vh;background:var(--bl-yellow);pointer-events:none;z-index:9999;mix-blend-mode:difference;transform:translateX(-100px);transition:transform 0.08s cubic-bezier(.2,.7,.3,1);';
    document.body.appendChild(bar);
    const onMove = (e) => { bar.style.transform = `translateX(${e.clientX}px)`; };
    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); bar.remove(); };
  }, []);
  return null;
};

// Reveal on scroll
const useReveal = () => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
};

const Reveal = ({ children, delay = 0, style = {} }) => {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} style={{ opacity: shown ? 1 : 0, transform: shown ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 0.8s ${delay}ms cubic-bezier(.2,.7,.3,1), transform 0.8s ${delay}ms cubic-bezier(.2,.7,.3,1)`, ...style }}>
      {children}
    </div>
  );
};

// Animated number counter
const Counter = ({ to, suffix = '', duration = 1600 }) => {
  const [val, setVal] = React.useState(0);
  const [ref, shown] = useReveal();
  React.useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

// Striped placeholder
const Placeholder = ({ label, style = {}, tone = 'dark' }) => {
  const bg = tone === 'light'
    ? 'repeating-linear-gradient(135deg, rgba(0,0,0,0.05) 0 12px, rgba(0,0,0,0) 12px 24px), linear-gradient(180deg, #ebe6dc, #d9d2c4)'
    : 'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 12px, rgba(255,255,255,0) 12px 24px), linear-gradient(180deg, #1a1a1a, #0a0a0a)';
  return (
    <div style={{ background: bg, color: tone === 'light' ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', ...style }}>
      {label}
    </div>
  );
};

// Icons
const BLIcon = ({ name, size = 32, color = 'currentColor', accent = 'var(--bl-yellow)' }) => {
  const props = { width: size, height: size, viewBox: '0 0 32 32', fill: 'none', stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'mic': return <svg {...props}><rect x="13" y="4" width="6" height="14" rx="3" stroke={accent} strokeWidth="2"/><path d="M9 14 C9 18 12 21 16 21 C20 21 23 18 23 14"/><path d="M16 21 L16 27"/><path d="M11 27 L21 27"/></svg>;
    case 'sparkle': return <svg {...props}><path d="M16 4 L18 14 L28 16 L18 18 L16 28 L14 18 L4 16 L14 14 Z" stroke={accent} fill={accent} fillOpacity="0.15"/></svg>;
    case 'flag': return <svg {...props}><line x1="8" y1="4" x2="8" y2="28" stroke={accent} strokeWidth="2.5"/><path d="M8 6 L24 6 L20 12 L24 18 L8 18"/></svg>;
    case 'cube': return <svg {...props}><path d="M16 4 L28 10 L28 22 L16 28 L4 22 L4 10 Z"/><path d="M16 16 L28 10"/><path d="M16 16 L4 10"/><line x1="16" y1="16" x2="16" y2="28" stroke={accent} strokeWidth="2"/></svg>;
    case 'arrow': return <svg {...props}><path d="M5 16 L27 16"/><path d="M20 9 L27 16 L20 23"/></svg>;
    default: return null;
  }
};

// Smooth scroll on anchor
const useSmoothScroll = () => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);
};

Object.assign(window, { Wordmark, CursorBar, Reveal, Counter, Placeholder, BLIcon, useSmoothScroll, useReveal });
