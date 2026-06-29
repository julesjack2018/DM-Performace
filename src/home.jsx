// home.jsx — Home page

function useReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
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

function Home() {
  return (
    <React.Fragment>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-dot"></div>
                <span className="eyebrow">BMW Specialist · New Jersey</span>
              </div>

              <h1 className="hero-headline">
                NJ's<br/>
                <em>BMW</em><br/>
                Master<br/>
                Tech.
              </h1>

              <p className="hero-sub">
                Doug Machado and his certified team handle everything your BMW needs —
                from routine maintenance to full performance builds. Master certified.
                Built different.
              </p>

              <div className="hero-actions">
                <a href="/contact" className="btn btn-primary btn-lg">Book an Appointment</a>
                <a href="/services" className="btn btn-outline btn-lg">View Services</a>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-value">14K+</div>
                  <div className="hero-stat-label">BMW Community</div>
                </div>
                <div>
                  <div className="hero-stat-value">BMW</div>
                  <div className="hero-stat-label">Master Certified</div>
                </div>
                <div>
                  <div className="hero-stat-value">Only</div>
                  <div className="hero-stat-label">BMW. Nothing Else.</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-photo">
                <div className="photo-placeholder" style={{height: '100%', minHeight: '480px', borderRadius: '12px'}}>
                  <span>🚗</span>
                  [Doug / Shop Photo]<br/>
                  <small style={{color: 'var(--text-muted)', fontSize: '11px'}}>Replace with client photo</small>
                </div>
                <div className="hero-badge">
                  <div className="hero-badge-text">BMW Master Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MStripe />

      {/* ── Services Preview ── */}
      <section className="section services-preview">
        <div className="container">
          <div className="services-header">
            <div>
              <MStripeSmall />
              <h2 className="display-md">What We Do</h2>
            </div>
            <a href="/services" className="btn btn-outline">All Services →</a>
          </div>

          <div className="services-grid">
            {[
              {
                num: '01',
                title: 'Maintenance & Repair',
                body: 'Oil service, brakes, cooling, timing, electrical — everything your BMW needs to run right.',
                tags: ['Oil Service', 'Brakes', 'Diagnostics', 'VANOS'],
              },
              {
                num: '02',
                title: 'Performance Upgrades',
                body: 'Coilovers, exhaust, ECU tuning, big brake kits. Turn your daily into something serious.',
                tags: ['Suspension', 'Exhaust', 'ECU', 'Intakes'],
              },
              {
                num: '03',
                title: 'Engine Work',
                body: 'Full engine rebuilds, swaps, rod bearings, head gaskets. We go where other shops won\'t.',
                tags: ['Rebuilds', 'Swaps', 'S54', 'B58'],
              },
              {
                num: '04',
                title: 'Race & Drift Builds',
                body: 'Doug built his own E46 M3 drift car. He knows exactly what it takes to build a race-ready BMW.',
                tags: ['Drift Builds', 'Track Prep', 'Alignment', 'Fab'],
              },
            ].map((s, i) => (
              <RevealSection key={s.num} delay={i + 1}>
                <div className="service-card">
                  <div className="service-card-num">{s.num}</div>
                  <div className="service-card-title">{s.title}</div>
                  <div className="service-card-body">{s.body}</div>
                  <div className="service-card-tags">
                    {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <MStripe />

      {/* ── Why DM Performance ── */}
      <section className="section why-section">
        <div className="container">
          <RevealSection>
            <div style={{marginBottom: 'var(--sp-7)'}}>
              <MStripeSmall />
              <h2 className="display-md">Why DM Performance</h2>
            </div>
          </RevealSection>

          <div className="why-grid">
            {[
              {
                num: '#01',
                title: 'Master Certified',
                body: 'Doug holds BMW\'s highest technician certification. This isn\'t a general shop that happens to see BMWs occasionally — every car that comes through is handled by someone who truly specializes.',
              },
              {
                num: '#02',
                title: 'Price + Quality',
                body: 'You shouldn\'t have to choose between a shop that does it right and one that doesn\'t drain your wallet. DM Performance delivers dealership-level quality without dealership pricing.',
              },
              {
                num: '#03',
                title: 'BMW Only',
                body: 'Every tool, every part, every bit of knowledge in this shop is focused on one brand. That focus isn\'t a limitation — it\'s exactly why your BMW gets better care here than anywhere else.',
              },
            ].map((w, i) => (
              <RevealSection key={w.num} delay={i + 1}>
                <div className="why-item">
                  <div className="why-number">{w.num}</div>
                  <div className="why-title">{w.title}</div>
                  <div className="why-body">{w.body}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            {[
              { value: '14K+', label: 'Instagram Community' },
              { value: '100%', label: 'BMW Focused' },
              { value: 'NJ', label: 'Based & Serving' },
              { value: 'M Cert', label: 'BMW Master Tech' },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Meet Doug ── */}
      <section className="section meet-section">
        <div className="container">
          <div className="meet-grid">
            <div className="meet-photo">
              <div className="meet-photo-frame">
                <div className="photo-placeholder" style={{height: '100%', minHeight: '500px'}}>
                  <span>👤</span>
                  [Doug Portrait Photo]<br/>
                  <small style={{color: 'var(--text-muted)', fontSize: '11px'}}>Replace with client photo</small>
                </div>
              </div>
              <div className="meet-accent">
                <div className="blue"></div>
                <div className="purple"></div>
                <div className="red"></div>
              </div>
            </div>

            <div className="meet-content">
              <RevealSection>
                <MStripeSmall />
                <div className="meet-title">BMW Master Technician</div>
                <h2 className="meet-name">Doug<br/>Machado</h2>
              </RevealSection>

              <RevealSection delay={1}>
                <p className="meet-body">
                  Doug Machado started working on BMWs because he loved them — the engineering,
                  the feel, the culture. That passion turned into a career when he earned BMW's
                  Master Technician certification, the highest level a BMW tech can achieve.
                </p>
                <p className="meet-body">
                  Today, DM Performance is his shop — where customers bring their BMWs knowing
                  the person touching their car genuinely gives a damn. Outside the shop, Doug
                  is behind the wheel of his E46 M3 drift car. For him, BMW isn't just work.
                  It's everything.
                </p>
              </RevealSection>

              <RevealSection delay={2}>
                <div className="meet-certs">
                  <div className="cert-badge"><div className="cert-badge-dot"></div>BMW Master Technician</div>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>Race Car Builder</div>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>Drift Competitor</div>
                  <div className="cert-badge"><div className="cert-badge-dot"></div>E46 M3 Builder</div>
                </div>
              </RevealSection>

              <RevealSection delay={3}>
                <a href="/about" className="btn btn-outline">Full Story →</a>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <MStripe />

      {/* ── CTA Strip ── */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-eyebrow">
            <span className="eyebrow">Ready to Book?</span>
          </div>
          <h2 className="cta-strip-headline">
            Your BMW<br/>Deserves a<br/>Specialist.
          </h2>
          <p className="cta-strip-sub">
            Book an appointment with DM Performance and see the difference
            a true BMW Master Tech makes.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary btn-lg">Book an Appointment</a>
            <a href="tel:7328650566" className="btn btn-outline btn-lg">Call 732-865-0566</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = Home;
