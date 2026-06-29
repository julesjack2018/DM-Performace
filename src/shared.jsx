// shared.jsx — Nav + Footer (loaded on every page)

function useScrolled() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return scrolled;
}

function MStripe() {
  return (
    <div className="m-stripe">
      <div className="m-stripe-seg blue"></div>
      <div className="m-stripe-seg purple"></div>
      <div className="m-stripe-seg red"></div>
    </div>
  );
}

function MStripeSmall() {
  return (
    <div className="m-stripe-sm">
      <div className="blue"></div>
      <div className="purple"></div>
      <div className="red"></div>
    </div>
  );
}

function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = React.useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <React.Fragment>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="/" className="nav-logo">
            <span className="nav-logo-top"><em>DM</em> Performance</span>
            <span className="nav-logo-sub">BMW Specialist · New Jersey</span>
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nav-link${currentPath === l.href ? ' active' : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <a href="tel:7328650566" className="nav-phone">732-865-0566</a>
            <a href="/contact" className="btn btn-primary">Book Now</a>
            <button
              className={`nav-hamburger${open ? ' open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="/contact" className="btn btn-primary btn-lg nav-mobile-cta" onClick={() => setOpen(false)}>
          Book an Appointment
        </a>
      </div>
    </React.Fragment>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-m-stripe">
        <div className="blue"></div>
        <div className="purple"></div>
        <div className="red"></div>
      </div>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo-name"><em>DM</em> Performance</div>
            <div className="footer-tagline">
              New Jersey's BMW specialist. Master-certified. Built different.
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/dougmbmw/" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">📷</a>
              <a href="https://www.youtube.com/@dougmbmw" target="_blank" rel="noopener" className="social-link" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><a href="/services" className="footer-link">Maintenance &amp; Repair</a></li>
              <li><a href="/services" className="footer-link">Performance Upgrades</a></li>
              <li><a href="/services" className="footer-link">Engine Work</a></li>
              <li><a href="/services" className="footer-link">Race &amp; Drift Builds</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-label">Phone</div>
                <div className="footer-contact-value">
                  <a href="tel:7328650566">732-865-0566</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-label">Email</div>
                <div className="footer-contact-value">
                  <a href="mailto:info@dmperformancenj.com">info@dmperformancenj.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-label">Location</div>
                <div className="footer-contact-value">Wrightstown, NJ</div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-label">Instagram</div>
                <div className="footer-contact-value">
                  <a href="https://www.instagram.com/dougmbmw/" target="_blank" rel="noopener">@dougmbmw</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} DM Performance LLC. All rights reserved.
            &nbsp;·&nbsp; Site by <a href="https://www.instagram.com/julesbattiato/" style={{color: 'inherit'}}>Motion Marketing LLC</a>.
          </div>
          <div className="footer-legal-links">
            <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
            <a href="/terms" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.Footer = Footer;
window.MStripe = MStripe;
window.MStripeSmall = MStripeSmall;
