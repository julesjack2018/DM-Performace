// services.jsx — Services page

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

var SERVICE_GROUPS = [
  {
    icon: '🔧',
    title: 'Maintenance & Repair',
    items: [
      'Engine oil & filter service',
      'Brake pads, rotors & fluid flush',
      'Cooling system (water pump, thermostat, coolant flush)',
      'Timing chain & belt service',
      'Transmission fluid & filter service',
      'VANOS service & repair',
      'Wheel bearing replacement',
      'Control arm & bushing replacement',
      'Power steering service',
      'Air conditioning service',
      'Battery & electrical diagnosis',
      'Pre-purchase inspection',
      'Check engine light / fault code diagnosis',
      'Annual inspection & safety check',
      'Suspension components (struts, springs, links)',
    ],
  },
  {
    icon: '⚡',
    title: 'Performance Upgrades',
    items: [
      'Coilover & suspension installation',
      'Catback & full exhaust systems',
      'Headers & downpipe installation',
      'Cold air intake & filter upgrades',
      'ECU tuning & flash programming',
      'Supercharger & turbo kit installation',
      'Brake kit upgrades (big brake packages)',
      'Wheel & tire fitment & mounting',
      'Short shifter & drivetrain upgrades',
      'Differential rebuilds & swaps',
      'Performance alignment',
      'Intercooler installation',
    ],
  },
  {
    icon: '🏎️',
    title: 'Engine Work',
    items: [
      'Full engine rebuilds',
      'Engine swaps (S54, S65, B58, N54, and more)',
      'Head gasket replacement',
      'Valve adjustment & cover service',
      'Rod bearing service (N54, N52, S85)',
      'Oil pan gasket & rear main seal',
      'Cold start & hard start diagnosis',
      'High-mileage engine refresh',
      'Internal engine cleaning & decarb',
      'Compression & leak-down testing',
    ],
  },
  {
    icon: '💻',
    title: 'ECU Tuning & Dealer Services',
    items: [
      'Custom ECU tuning (dyno & street)',
      'Bootmod3 license & flash (authorized dealer)',
      'Femto data logging & analysis',
      'Transmission custom tuning',
      'XHP transmission flash (sport, sport+, race modes)',
      'Ethanol / E85 tuning & fuel system setup',
      'Flex fuel sensor installation',
      'Stage 1, 2 & 3 tune packages',
      'Remote tune support',
      'Data logging review & calibration',
    ],
  },
  {
    icon: '🏁',
    title: 'Race & Drift Builds',
    items: [
      'Complete drift car builds',
      'Track preparation packages',
      'Safety equipment installation (harness, extinguisher mounts)',
      'Roll cage coordination & install support',
      'Four-wheel alignment & corner balancing',
      'Weight reduction & interior stripping',
      'Custom fabrication & welding',
      'Cooling system upgrades for track use',
      'Brake bias & fluid upgrades for track',
      'Suspension geometry setup for racing',
    ],
  },
];

function Services() {
  return (
    <React.Fragment>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-eyebrow">
            <span className="eyebrow">Full Service · BMW Only</span>
          </div>
          <h1 className="page-header-title">
            Everything<br/>Your BMW<br/>Needs.
          </h1>
          <p className="page-header-sub">
            One shop. One specialty. From routine maintenance to full race builds.
            DM Performance handles it all, and handles it right.
          </p>
        </div>
      </section>

      <MStripe />

      {/* ── Full Services ── */}
      <section className="section services-full">
        <div className="container">
          {SERVICE_GROUPS.map(function(group, gi) {
            return (
              <RevealSection key={group.title}>
                <div className="service-group">
                  <div className="service-group-header">
                    <div className="service-group-icon">{group.icon}</div>
                    <h2 className="service-group-title">{group.title}</h2>
                  </div>
                  <div className="service-items">
                    {group.items.map(function(item) {
                      return (
                        <div key={item} className="service-item">
                          <div className="service-item-check"></div>
                          <span className="service-item-name">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </section>

      <MStripe />

      {/* ── Authorized Dealer Badges ── */}
      <section className="section-sm">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: 'var(--sp-6)'}}>
            <MStripeSmall />
            <h2 className="display-md" style={{marginTop: 'var(--sp-4)'}}>Authorized Dealer</h2>
            <p style={{color: 'var(--text-secondary)', fontSize: '15px', marginTop: 'var(--sp-3)', maxWidth: '480px', margin: 'var(--sp-3) auto 0'}}>
              DM Performance is an authorized dealer and installer for the industry's top BMW tuning platforms.
            </p>
          </div>
          <div style={{display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap'}}>
            {[
              { name: 'Bootmod3', desc: 'Authorized Dealer & Installer', detail: 'License sales + flash + tune' },
              { name: 'XHP', desc: 'Transmission Flash Specialist', detail: 'Sport, Sport+, Race modes' },
              { name: 'Ethanol / E85', desc: 'Authorized Distributor', detail: 'Flex fuel setups & tuning' },
              { name: 'Femto', desc: 'Data Logging & Analysis', detail: 'Advanced BMW diagnostics' },
            ].map(function(badge) {
              return (
                <div key={badge.name} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  padding: 'var(--sp-5) var(--sp-6)',
                  minWidth: '200px',
                  flex: '1',
                  maxWidth: '260px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: 'var(--blue)', margin: '0 auto var(--sp-3)',
                  }}></div>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', marginBottom: 'var(--sp-1)'}}>{badge.name}</div>
                  <div style={{fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 'var(--sp-2)'}}>{badge.desc}</div>
                  <div style={{fontSize: '13px', color: 'var(--text-muted)'}}>{badge.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MStripe />

      {/* ── Not sure? CTA ── */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-eyebrow">
            <span className="eyebrow">Don't see your service?</span>
          </div>
          <h2 className="cta-strip-headline">
            Just Ask.<br/>We Probably<br/>Do It.
          </h2>
          <p className="cta-strip-sub">
            If it's a BMW and it needs work, reach out. We'll tell you straight whether
            we can help. And we almost always can.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary btn-lg">Get a Quote</a>
            <a href="tel:7328650566" className="btn btn-outline btn-lg">Call 732-865-0566</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = Services;
