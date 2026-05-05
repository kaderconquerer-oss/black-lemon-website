// Work index page

const WorkPage = () => {
  const [filter, setFilter] = React.useState('All');
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const tags = ['All', ...Array.from(new Set(CASE_STUDIES.map(c => c.tag)))];
  const list = filter === 'All' ? CASE_STUDIES : CASE_STUDIES.filter(c => c.tag === filter);

  return (
    <>
      <PageHeader
        eyebrow="Index 02 / Work"
        title={<>Eight rooms,<br/><span className="bl-italic" style={{ fontWeight: 300 }}>recently.</span></>}
        dek="A short, slow-moving list. We update it twice a year."
      />

      <section style={{ padding: '48px 64px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {tags.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              padding: '10px 18px', border: '1px solid', borderColor: filter === t ? 'var(--bl-yellow)' : 'rgba(255,255,255,0.2)',
              background: filter === t ? 'var(--bl-yellow)' : 'transparent', color: filter === t ? '#0a0a0a' : '#fff',
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s'
            }}>{t}</button>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.55 }}>
          {list.length} project{list.length !== 1 ? 's' : ''}
        </div>
      </section>

      <section style={{ padding: '0 64px', position: 'relative' }}>
        {list.map((cs, i) => (
          <Reveal key={cs.slug} delay={i * 40}>
            <a href={`#/work/${cs.slug}`}
               onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)}
               style={{ display: 'grid', gridTemplateColumns: '100px 1.5fr 1.5fr 1fr 0.6fr 60px', gap: 32, padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, opacity: 0.5 }}>{String(i+1).padStart(2,'0')}</div>
              <div>
                <div className="bl-eyebrow" style={{ marginBottom: 10 }}>{cs.client}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, letterSpacing: '-0.015em', lineHeight: 1.1 }}>{cs.title}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 17, opacity: 0.7, lineHeight: 1.5 }}>{cs.summary}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6 }}>{cs.tag} \u00b7 {cs.location}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, opacity: 0.5, textAlign: 'right' }}>{cs.year}</div>
              <div style={{ textAlign: 'right' }}><BLIcon name="arrow" size={20} color="#fff" accent="var(--bl-yellow)" /></div>
            </a>
          </Reveal>
        ))}

        {/* Hover preview */}
        <div style={{ position: 'fixed', right: 64, bottom: 64, width: 360, height: 240, pointerEvents: 'none', zIndex: 50, opacity: hoverIdx !== null ? 1 : 0, transform: hoverIdx !== null ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)', transition: 'all 0.4s cubic-bezier(.2,.7,.3,1)' }}>
          {hoverIdx !== null && (
            <div style={{ position: 'relative', width: '100%', height: '100%', border: '1px solid var(--bl-yellow)' }}>
              <Placeholder label={`${list[hoverIdx].client} \u00b7 ${list[hoverIdx].location}`} style={{ width: '100%', height: '100%' }} tone={list[hoverIdx].tone === 'light' ? 'light' : 'dark'} />
              <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bl-yellow)', display: 'flex', justifyContent: 'space-between' }}>
                <span>{list[hoverIdx].attendees.toLocaleString()} guests</span>
                <span>{list[hoverIdx].year}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: '120px 64px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, opacity: 0.7, marginBottom: 32 }}>
          Want to see the work that didn't make this list?
        </p>
        <a href="#/contact" className="bl-btn bl-btn--yellow">Email the studio <BLIcon name="arrow" size={14} color="#0a0a0a" accent="#0a0a0a" /></a>
      </section>
    </>
  );
};

window.WorkPage = WorkPage;
