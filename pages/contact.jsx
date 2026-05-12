// Contact page

const ContactPage = () => {
  const [form, setForm] = React.useState({ name: '', company: '', email: '', type: '', date: '', budget: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  const eventTypes = ['Corporate / Town Hall', 'Gala / Fundraiser', 'Brand Launch', 'Conference / Summit', 'Wedding / Private', 'Festival / Public', 'Other'];
  const budgets = ['Under AED 250k', 'AED 250k \u2013 750k', 'AED 750k \u2013 2M', 'AED 2M \u2013 5M', 'AED 5M+', 'Not sure yet'];

  return (
    <>
      <section style={{ padding: '180px 64px 64px', background: '#0a0a0a', color: '#fff' }}>
        <Reveal>
          <div className="bl-eyebrow" style={{ marginBottom: 48 }}>Index 06 / Contact</div>
          <h1 className="bl-h1">Tell us about<br/><span className="bl-italic" style={{ fontWeight: 300 }}>the event.</span></h1>
          <p style={{ marginTop: 40, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 26, lineHeight: 1.4, maxWidth: 880, opacity: 0.85 }}>
            Six fields, four minutes. We reply to every brief within two working days \u2014 even the ones we can't take on.
          </p>
        </Reveal>
      </section>

      <section style={{ padding: '64px 64px 120px', background: '#0a0a0a', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 96, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {/* Form */}
        <div>
          {sent ? (
            <div style={{ padding: '120px 0', textAlign: 'center' }}>
              <div style={{ display: 'inline-block', padding: 24, border: '2px solid var(--bl-yellow)', marginBottom: 32 }}>
                <BLIcon name="sparkle" size={48} color="var(--bl-yellow)" accent="var(--bl-yellow)" />
              </div>
              <h2 className="bl-h2" style={{ marginBottom: 24 }}>Got it.</h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.5, opacity: 0.8, maxWidth: 600, margin: '0 auto' }}>
                Thanks, {form.name || 'friend'}. We'll come back to you within two working days. If it's urgent, WhatsApp us \u2014 we usually pick up.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                  {eventTypes.map(t => (
                    <button key={t} type="button" onClick={() => setForm(f => ({ ...f, type: t }))} style={{
                      padding: '12px 18px', border: '1px solid', borderColor: form.type === t ? 'var(--bl-yellow)' : 'rgba(255,255,255,0.2)',
                      background: form.type === t ? 'var(--bl-yellow)' : 'transparent', color: form.type === t ? '#0a0a0a' : '#fff',
                      fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s'
                    }}>{t}</button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                <div>
                  <label className="bl-label">05 / When</label>
                  <input className="bl-input" placeholder="Q3 2025 / 14 March" value={form.date} onChange={set('date')} />
                </div>
                <div>
                  <label className="bl-label">06 / Budget range</label>
                  <select className="bl-input" value={form.budget} onChange={set('budget')} style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="" style={{ background: '#0a0a0a' }}>Select a range</option>
                    {budgets.map(b => <option key={b} value={b} style={{ background: '#0a0a0a' }}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="bl-label">07 / What's the event?</label>
                <textarea className="bl-input" rows={4} placeholder="Tell us anything. The audience, the goal, the constraint, the thing that's bugging you about the brief\u2026" value={form.message} onChange={set('message')} style={{ resize: 'vertical', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
                <div className="bl-eyebrow" style={{ opacity: 0.5 }}>We reply within two working days.</div>
                <button type="submit" className="bl-btn bl-btn--yellow" style={{ fontSize: 14, padding: '18px 28px' }}>
                  Send the brief <BLIcon name="arrow" size={16} color="#0a0a0a" accent="#0a0a0a" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar — direct contact */}
        <aside>
          <div style={{ borderTop: '2px solid var(--bl-yellow)', paddingTop: 32, marginBottom: 64 }}>
            <div className="bl-eyebrow" style={{ marginBottom: 24 }}>Or, more directly</div>
            <div style={{ marginBottom: 32 }}>
              <div className="bl-eyebrow" style={{ marginBottom: 8, color: 'var(--bl-yellow)' }}>WhatsApp</div>
              <a href="https://wa.me/971500000000" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22 }} className="bl-link">+971 50 000 0000 \u2192</a>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, opacity: 0.65, marginTop: 8 }}>Mon\u2013Fri, 09:00\u201318:00 GST</p>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div className="bl-eyebrow" style={{ marginBottom: 8, color: 'var(--bl-yellow)' }}>Phone</div>
              <a href="tel:+97144000000" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22 }} className="bl-link">+971 4 400 0000</a>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div className="bl-eyebrow" style={{ marginBottom: 8, color: 'var(--bl-yellow)' }}>Email</div>
              <a href="mailto:studio@blacklemon.ae" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22 }} className="bl-link">studio@blacklemon.ae</a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 32 }}>
            <div className="bl-eyebrow" style={{ marginBottom: 16 }}>Studio address</div>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 18, lineHeight: 1.6, opacity: 0.85, margin: 0 }}>
              Warehouse 4<br/>Alserkal Avenue<br/>Al Quoz 1<br/>Dubai, UAE
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginTop: 16 }}>
              25.276°N \u00b7 55.296°E
            </p>
          </div>
        </aside>
      </section>

      <section style={{ background: 'var(--bl-yellow)', color: '#0a0a0a', padding: '64px', textAlign: 'center', borderTop: '1px solid #0a0a0a' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.4, maxWidth: 1100, margin: 0 }}>
          We turn down about half the projects we're asked about. If we say no, we'll say why \u2014 and we'll usually point you to a studio that's a better fit.
        </p>
      </section>
    </>
  );
};

window.ContactPage = ContactPage;
