// about.jsx — About page

function useReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealSection({ children, delay, className }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${delay ? ' reveal-delay-' + delay : ''}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  );
}

function About() {
  return (
    <React.Fragment>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-eyebrow">
            <span className="eyebrow">The Story</span>
          </div>
          <h1 className="page-header-title">
            Built by a<br/>BMW<br/>Obsessive.
          </h1>
          <p className="page-header-sub">
            DM Performance is what happens when a BMW Master Tech decides
            to do things on his own terms.
          </p>
        </div>
      </section>

      <MStripe />

      {/* ── Story ── */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-photo">
              <div className="about-story-frame">
                <div className="photo-placeholder" style={{height: '100%', minHeight: '560px'}}>
                  <span>👤</span>
                  [Doug in Shop / With Car]<br/>
                  <small style={{color: 'var(--text-muted)', fontSize: '11px'}}>Replace with client photo</small>
                </div>
              </div>
            </div>

            <div className="about-story-content">
              <RevealSection>
                <MStripeSmall />
                <p className="about-story-intro">
                  Doug Machado didn't just end up working on BMWs. He chose them. And he's
                  never looked back.
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <div className="about-story-body">
                  <p>
                    Doug started wrenching on BMWs because he genuinely loved them. Not as
                    transportation. As machines. The engineering. The feel of a well-sorted
                    suspension. The way a proper BMW sounds when everything is right. That love
                    turned into a career path, and that career path led to BMW's Master Technician
                    certification. The highest level a BMW tech can hold.
                  </p>
                  <p>
                    DM Performance came from a simple idea: BMW owners in New Jersey deserved
                    a shop run by someone who actually cared. Not a dealership that treats your
                    car like a number. Not a general shop that learned BMW on your dime. A
                    specialist. Someone who has worked on every BMW model, knows every common
                    failure point, and takes real pride in getting it right.
                  </p>
                  <p>
                    Outside the shop, Doug is building and competing in his E46 M3 drift car.
                    He's been to Formula Drift events. He builds race cars on weekends because
                    BMW is not just how he earns a living. It's how he lives. That's the
                    difference you feel when you bring your BMW to DM Performance.
                  </p>
                  <p>
                    Whether you need an oil service or a complete engine swap, Doug and his
                    certified team handle every job with the same level of care. Because your
                    BMW deserves nothing less.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={2}>
                <div className="meet-certs" style={{marginTop: 'var(--sp-6)', marginBottom: 'var(--sp-6)'}}>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>BMW Master Technician</div>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>Race Car Builder</div>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>Drift Competitor</div>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>Formula Drift</div>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>E46 M3 Specialist</div>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>14K+ Community</div>
                </div>
              </RevealSection>

              <RevealSection delay={3}>
                <div style={{display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap'}}>
                  <a href="/contact" className="btn btn-primary btn-lg">Book an Appointment</a>
                  <a href="/services" className="btn btn-outline btn-lg">View Services</a>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            {[
              { value: '14K+', label: 'Instagram Followers' },
              { value: 'BMW', label: 'Master Certified' },
              { value: 'NJ', label: 'Wrightstown Based' },
              { value: '100%', label: 'BMW Focused' },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MStripe />

      {/* ── CTA ── */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-eyebrow">
            <span className="eyebrow">Ready?</span>
          </div>
          <h2 className="cta-strip-headline">
            Bring Your<br/>BMW to<br/>Someone Who<br/>Gets It.
          </h2>
          <p className="cta-strip-sub">
            Book an appointment or give us a call. We'll talk about your BMW
            and figure out exactly what it needs.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary btn-lg">Book an Appointment</a>
            <a href="tel:7328650566" className="btn btn-outline btn-lg">732-865-0566</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = About;
