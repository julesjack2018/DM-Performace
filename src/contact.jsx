// contact.jsx — Contact / Book page

function Contact() {
  return (
    <React.Fragment>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-eyebrow">
            <span className="eyebrow">Get in Touch</span>
          </div>
          <h1 className="page-header-title">
            Let's Talk<br/>About Your<br/>BMW.
          </h1>
          <p className="page-header-sub">
            Book online in minutes or reach out directly.
            We'll get you on the schedule fast.
          </p>
        </div>
      </section>

      <MStripe />

      {/* ── Book Online ── */}
      <section className="section">
        <div className="container">
          <div style={{maxWidth: '640px', margin: '0 auto', textAlign: 'center'}}>
            <MStripeSmall />
            <h2 className="display-md" style={{marginTop: 'var(--sp-4)', marginBottom: 'var(--sp-4)'}}>Book an Appointment</h2>
            <p style={{color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.65', marginBottom: 'var(--sp-6)'}}>
              Use our online booking system to pick your date, time, and service.
              Takes less than 2 minutes.
            </p>
            <a
              href="https://app.shopmonkey.cloud/public/scheduler/63b8709cad02080026526cd8"
              target="_blank"
              rel="noopener"
              className="btn btn-primary btn-lg"
              style={{display: 'inline-flex', marginBottom: 'var(--sp-8)'}}
            >
              Book Online Now
            </a>

            <div style={{borderTop: '1px solid var(--border)', paddingTop: 'var(--sp-8)'}}>
              <p style={{fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--sp-5)'}}>Or reach out directly</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)'}}>
                <div className="contact-info-item" style={{justifyContent: 'center'}}>
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <div className="contact-info-label">Call or Text</div>
                    <div className="contact-info-value"><a href="tel:7328650566">732-865-0566</a></div>
                  </div>
                </div>
                <div className="contact-info-item" style={{justifyContent: 'center'}}>
                  <div className="contact-info-icon">✉️</div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value"><a href="mailto:info@dmperformancenj.com">info@dmperformancenj.com</a></div>
                  </div>
                </div>
                <div className="contact-info-item" style={{justifyContent: 'center'}}>
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">Wrightstown, NJ — address provided at booking</div>
                  </div>
                </div>
                <div className="contact-info-item" style={{justifyContent: 'center'}}>
                  <div className="contact-info-icon">📷</div>
                  <div>
                    <div className="contact-info-label">Instagram</div>
                    <div className="contact-info-value">
                      <a href="https://www.instagram.com/dougmbmw/" target="_blank" rel="noopener">@dougmbmw</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MStripe />

      {/* ── CTA ── */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-eyebrow">
            <span className="eyebrow">BMW Only. Always.</span>
          </div>
          <h2 className="cta-strip-headline">
            Your BMW<br/>Deserves a<br/>Specialist.
          </h2>
          <p className="cta-strip-sub">
            Every model, every issue, every build. If it's a BMW, we handle it.
          </p>
          <div className="cta-strip-actions">
            <a href="https://app.shopmonkey.cloud/public/scheduler/63b8709cad02080026526cd8" target="_blank" rel="noopener" className="btn btn-primary btn-lg">Book Online Now</a>
            <a href="tel:7328650566" className="btn btn-outline btn-lg">Call 732-865-0566</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = Contact;
