// Black Lemon — shared primitives (logo, bar, placeholders, icons)

// Wordmark — uses the actual uploaded logo PNGs (cropped to content bounds).
// `variant` selects the surface the logo will sit on:
//   "white" → on dark / black surfaces (white logo)
//   "black" → on yellow surfaces (black logo)
//   "dark"  → on light / cream / white surfaces (black logo on transparent-ish)
// `size` is the logo width in px. `tagline` toggles the "Precision. Experience. Vision." line.
const Wordmark = ({ size = 240, variant = 'white', tagline = true, style = {} }) => {
  const base = tagline ? 'full' : 'wordmark';
  const tone = variant === 'black' ? 'yellow'   // logo on yellow
             : variant === 'dark'  ? 'white'    // logo on white/cream
             :                       'black';   // logo on black
  const src = window.__resources[`${base}-${tone}`] || `assets/${base}-${tone}.png`;
  // Aspect: wordmark 1344/674 ≈ 1.994; full 1344/886 ≈ 1.517
  const aspect = tagline ? (1344/886) : (1344/674);
  return (
    <img src={src} alt="Black Lemon"
      style={{
        width: size,
        height: size / aspect,
        display: 'inline-block',
        verticalAlign: 'top',
        ...style,
      }}
    />
  );
};

// Monogram — extracts the "B|" portion from the wordmark PNG via background-image crop.
// In the cropped wordmark (1344×674), the "B|" sits roughly at:
//   x: 0..0.205 (the letter B + bar), y: 0..0.46 (top row "Black")
const Monogram = ({ size = 40, variant = 'white', style = {} }) => {
  const tone = variant === 'black' ? 'yellow'
             : variant === 'dark'  ? 'white'
             :                       'black';
  const src = window.__resources[`wordmark-${tone}`] || `assets/wordmark-${tone}.png`;
  const cropX = 0.04, cropY = 0.04;   // tiny inset to skip the safe-area pad
  const cropW = 0.20, cropH = 0.42;   // size of the "B|" region
  return (
    <div style={{
      width: size,
      height: size,
      display: 'inline-block',
      backgroundImage: `url(${src})`,
      backgroundSize: `${100/cropW}% ${100/cropH}%`,
      backgroundPosition: `${(cropX/(cropW-1))*100}% ${(cropY/(cropH-1))*100}%`,
      backgroundRepeat: 'no-repeat',
      ...style,
    }} aria-label="Black Lemon" />
  );
};

// Striped placeholder
const Placeholder = ({ label = 'IMAGE', tone = 'dark', style = {}, ratio }) => {
  const cls = tone === 'light' ? 'bl-placeholder light' : tone === 'yellow' ? 'bl-placeholder yellow' : 'bl-placeholder';
  const content = <div className={cls} style={{ width: '100%', height: '100%', ...style }}>{label}</div>;
  if (ratio) {
    return <div style={{ aspectRatio: ratio, width: '100%', ...style }}>{content}</div>;
  }
  return content;
};

// Black Lemon icon set — line-style with a yellow bar accent
// All icons are 32×32, designed to match the logo's vertical bar motif.
const BLIcon = ({ name, size = 32, color = 'currentColor', accent = 'var(--bl-yellow)', strokeWidth = 1.5 }) => {
  const s = size;
  const props = { width: s, height: s, viewBox: '0 0 32 32', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'stage':
      return (
        <svg {...props}>
          <path d="M3 22 L29 22" />
          <path d="M6 22 L6 26" /><path d="M26 22 L26 26" />
          <path d="M9 22 L9 12" /><path d="M23 22 L23 12" />
          <path d="M9 12 L23 12" />
          <line x1="16" y1="6" x2="16" y2="22" stroke={accent} strokeWidth="2.5" />
        </svg>
      );
    case 'spotlight':
      return (
        <svg {...props}>
          <path d="M10 4 L22 4 L20 9 L12 9 Z" />
          <path d="M16 9 L16 14" />
          <path d="M8 28 L24 28 L20 14 L12 14 Z" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case 'mic':
      return (
        <svg {...props}>
          <rect x="13" y="4" width="6" height="14" rx="3" stroke={accent} strokeWidth="2" />
          <path d="M9 14 C9 18 12 21 16 21 C20 21 23 18 23 14" />
          <path d="M16 21 L16 27" /><path d="M11 27 L21 27" />
        </svg>
      );
    case 'audience':
      return (
        <svg {...props}>
          <circle cx="9" cy="11" r="3" />
          <circle cx="23" cy="11" r="3" />
          <circle cx="16" cy="8" r="3" stroke={accent} strokeWidth="2" />
          <path d="M4 24 C4 20 6 18 9 18 C12 18 14 20 14 24" />
          <path d="M18 24 C18 20 20 18 23 18 C26 18 28 20 28 24" />
          <path d="M11 26 C11 22 13 20 16 20 C19 20 21 22 21 26" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...props}>
          <rect x="4" y="6" width="24" height="22" rx="1" />
          <path d="M4 12 L28 12" />
          <line x1="10" y1="3" x2="10" y2="9" stroke={accent} strokeWidth="2.5" />
          <path d="M22 3 L22 9" />
          <circle cx="11" cy="18" r="1" fill={color} />
          <circle cx="16" cy="18" r="1" fill={color} />
          <circle cx="21" cy="18" r="1" fill={accent} />
        </svg>
      );
    case 'pin':
      return (
        <svg {...props}>
          <path d="M16 28 C16 28 7 19 7 13 A9 9 0 0 1 25 13 C25 19 16 28 16 28 Z" />
          <circle cx="16" cy="13" r="3" fill={accent} stroke="none" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...props}>
          <rect x="3" y="9" width="20" height="14" rx="1" />
          <path d="M23 13 L29 9 L29 23 L23 19 Z" stroke={accent} strokeWidth="2" />
          <circle cx="11" cy="16" r="3" />
        </svg>
      );
    case 'speaker':
      return (
        <svg {...props}>
          <rect x="9" y="4" width="14" height="24" rx="1" />
          <circle cx="16" cy="11" r="2" />
          <circle cx="16" cy="20" r="4" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case 'cube':
      return (
        <svg {...props}>
          <path d="M16 4 L28 10 L28 22 L16 28 L4 22 L4 10 Z" />
          <path d="M16 16 L28 10" /><path d="M16 16 L4 10" />
          <line x1="16" y1="16" x2="16" y2="28" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg {...props}>
          <path d="M16 4 L18 14 L28 16 L18 18 L16 28 L14 18 L4 16 L14 14 Z" stroke={accent} strokeWidth="1.5" fill={accent} fillOpacity="0.15" />
        </svg>
      );
    case 'flag':
      return (
        <svg {...props}>
          <line x1="8" y1="4" x2="8" y2="28" stroke={accent} strokeWidth="2.5" />
          <path d="M8 6 L24 6 L20 12 L24 18 L8 18" />
        </svg>
      );
    case 'ticket':
      return (
        <svg {...props}>
          <path d="M4 10 L4 8 A2 2 0 0 1 6 6 L26 6 A2 2 0 0 1 28 8 L28 10 A2 2 0 0 0 28 14 L28 16 A2 2 0 0 0 28 20 L28 22 A2 2 0 0 0 28 26 A2 2 0 0 1 26 28 L6 28 A2 2 0 0 1 4 26 A2 2 0 0 0 4 22 L4 20 A2 2 0 0 0 4 16 L4 14 A2 2 0 0 0 4 10 Z" />
          <line x1="16" y1="6" x2="16" y2="28" stroke={accent} strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      );
    case 'gear':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="4" stroke={accent} strokeWidth="2" />
          <path d="M16 4 L16 8 M16 24 L16 28 M4 16 L8 16 M24 16 L28 16 M7.5 7.5 L10 10 M22 22 L24.5 24.5 M7.5 24.5 L10 22 M22 10 L24.5 7.5" />
        </svg>
      );
    case 'screen':
      return (
        <svg {...props}>
          <rect x="3" y="6" width="26" height="16" rx="1" />
          <path d="M11 26 L21 26" />
          <path d="M16 22 L16 26" />
          <line x1="9" y1="14" x2="9" y2="18" stroke={accent} strokeWidth="2.5" />
          <line x1="14" y1="11" x2="14" y2="18" stroke={accent} strokeWidth="2.5" />
          <line x1="19" y1="9" x2="19" y2="18" stroke={accent} strokeWidth="2.5" />
          <line x1="24" y1="13" x2="24" y2="18" stroke={accent} strokeWidth="2.5" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="16" cy="16" rx="5" ry="12" />
          <path d="M4 16 L28 16" />
          <line x1="16" y1="4" x2="16" y2="28" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...props}>
          <path d="M5 16 L27 16" />
          <path d="M20 9 L27 16 L20 23" />
          <line x1="2" y1="6" x2="2" y2="26" stroke={accent} strokeWidth="2.5" />
        </svg>
      );
    default:
      return <svg {...props}><rect x="4" y="4" width="24" height="24" /></svg>;
  }
};

// Cursor-follow yellow vertical bar
const useCursorBar = (ref) => {
  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const bar = document.createElement('div');
    bar.className = 'bl-cursor-bar';
    bar.style.transform = 'translateX(-100px)';
    el.appendChild(bar);
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      bar.style.transform = `translateX(${x}px)`;
    };
    el.addEventListener('mousemove', onMove);
    return () => { el.removeEventListener('mousemove', onMove); bar.remove(); };
  }, []);
};

Object.assign(window, { Wordmark, Monogram, Placeholder, BLIcon, useCursorBar });
