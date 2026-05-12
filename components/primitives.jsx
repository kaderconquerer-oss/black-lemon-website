// Black Lemon — site primitives (logo, monogram, icons, cursor bar, animations)

const Wordmark = ({ size = 200, variant = 'white', tone, tagline = false, style = {} }) => {
  // Single asset — transparent-bg logo (white text + yellow bar). Tone/variant
  // kept for API compat with older callers.
  const aspect = 2000 / 1437; // matches uploaded asset
  return (
    <img src="assets/logo-white.png" alt="Black Lemon" style={{ width: size, height: size / aspect, display: 'inline-block', ...style }} />
  );
};

// Cursor-follow ring (page-wide). Hidden on touch via media query.
const CursorBar = () => {
  React.useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const ring = document.createElement('div');
    ring.setAttribute('data-bl-cursor', '');
    ring.style.cssText = [
      'position:fixed','top:0','left:0','width:28px','height:28px',
      'border:1.5px solid var(--bl-yellow)','border-radius:50%',
      'pointer-events:none','z-index:9999',
      'mix-blend-mode:difference',
      'transform:translate3d(-100px,-100px,0)',
      'transition:transform 0.12s cubic-bezier(.2,.7,.3,1), opacity 0.2s, width 0.2s, height 0.2s',
      'opacity:0',
      'will-change:transform',
    ].join(';');
    // tiny dot in middle
    const dot = document.createElement('div');
    dot.style.cssText = 'position:absolute;top:50%;left:50%;width:3px;height:3px;background:var(--bl-yellow);border-radius:50%;transform:translate(-50%,-50%);';
    ring.appendChild(dot);
    document.body.appendChild(ring);

    let visible = false;
    const onMove = (e) => {
      ring.style.transform = `translate3d(${e.clientX - 14}px, ${e.clientY - 14}px, 0)`;
      if (!visible) { ring.style.opacity = '1'; visible = true; }
    };
    const onLeave = () => { ring.style.opacity = '0'; visible = false; };
    const onOver = (e) => {
      const t = e.target;
      const isHover = t.closest && t.closest('a,button,[role="button"],input,textarea,select,label');
      ring.style.width = isHover ? '44px' : '28px';
      ring.style.height = isHover ? '44px' : '28px';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', (e) => { if (!e.relatedTarget) onLeave(); });
    document.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      ring.remove();
    };
  }, []);
  return null;
};

// Reveal on scroll
const useReveal = () => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    // Re-triggering observer: fade in on enter, fade out on leave, so
    // scrolling back up replays the reveal animation smoothly.
    const io = new IntersectionObserver(([e]) => {
      setShown(e.isIntersecting);
    }, { threshold: 0.15 });
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

// Page-top scroll-progress yellow bar
const ScrollProgress = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      ref.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 200, background: 'transparent', pointerEvents: 'none' }}>
      <div ref={ref} style={{ height: '100%', background: 'var(--bl-yellow)', transformOrigin: '0 50%', transform: 'scaleX(0)', transition: 'transform 0.08s linear' }} />
    </div>
  );
};

// Stat icons — drawn with stroke-dasharray so they animate in.
// Triggered by useReveal (matches the Counter timing).
const AnimatedStatIcon = ({ name, size = 56, accent = 'var(--bl-yellow)' }) => {
  const [ref, shown] = useReveal();
  const dur = 1.1;
  const common = {
    fill: 'none', stroke: accent, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
    style: {
      strokeDasharray: 200, strokeDashoffset: shown ? 0 : 200,
      transition: `stroke-dashoffset ${dur}s cubic-bezier(.2,.7,.3,1)`,
    },
  };
  const fade = {
    style: { opacity: shown ? 1 : 0, transition: `opacity 0.6s ease ${dur*0.6}s` },
  };

  let body = null;
  if (name === 'calendar') {
    body = (
      <g>
        <rect x="6" y="10" width="36" height="32" rx="2" {...common} />
        <line x1="6" y1="18" x2="42" y2="18" {...common} />
        <line x1="14" y1="6" x2="14" y2="14" {...common} />
        <line x1="34" y1="6" x2="34" y2="14" {...common} />
        <rect x="20" y="24" width="8" height="8" fill={accent} {...fade} />
      </g>
    );
  } else if (name === 'pin') {
    // city / location
    body = (
      <g>
        <path d="M24 6 L8 22 L8 42 L40 42 L40 22 Z" {...common} />
        <rect x="14" y="28" width="6" height="14" {...common} />
        <rect x="28" y="24" width="6" height="18" {...common} />
        <line x1="24" y1="6" x2="24" y2="2" stroke={accent} strokeWidth="1.5" {...fade} />
        <circle cx="24" cy="2" r="1.5" fill={accent} {...fade} />
      </g>
    );
  } else if (name === 'award') {
    body = (
      <g>
        <circle cx="24" cy="20" r="12" {...common} />
        <path d="M16 28 L12 42 L20 38 L24 44 L28 38 L36 42 L32 28" {...common} />
        <circle cx="24" cy="20" r="5" fill={accent} {...fade} />
      </g>
    );
  } else if (name === 'people') {
    body = (
      <g>
        <circle cx="18" cy="18" r="6" {...common} />
        <circle cx="32" cy="16" r="5" {...common} />
        <path d="M6 40 C6 32 12 28 18 28 C24 28 30 32 30 40" {...common} />
        <path d="M28 40 C28 34 32 30 36 30 C40 30 42 32 42 40" {...common} />
      </g>
    );
  }
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 48 48">{body}</svg>
  );
};

// Parallax wrapper. Translates child by `intensity` * scrollDelta when in view.
const Parallax = ({ children, intensity = 0.25, style = {} }) => {
  const ref = React.useRef(null);
  const inner = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !inner.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = null;
    const update = () => {
      raf = null;
      if (!ref.current || !inner.current) return;
      const r = ref.current.getBoundingClientRect();
      const winH = window.innerHeight;
      // -1 (above viewport) to 1 (below viewport), 0 when centered
      const center = (r.top + r.height/2) - winH/2;
      const norm = center / (winH/2 + r.height/2);
      const offset = -norm * intensity * r.height;
      inner.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [intensity]);
  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }}>
      <div ref={inner} style={{ willChange: 'transform' }}>{children}</div>
    </div>
  );
};

// Yellow rule that draws itself in when revealed
const YellowRule = ({ width = '120px', height = 3, delay = 0, style = {} }) => {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} style={{ width, height, background: 'var(--bl-yellow)', transform: shown ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: '0 50%', transition: `transform 0.9s ${delay}ms cubic-bezier(.2,.7,.3,1)`, ...style }} />
  );
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

Object.assign(window, { Wordmark, CursorBar, Reveal, Counter, Placeholder, BLIcon, useSmoothScroll, useReveal, ScrollProgress, AnimatedStatIcon, Parallax, YellowRule });
