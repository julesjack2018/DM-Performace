// contact.jsx — Contact / Book page

function Contact() {
  var [submitted, setSubmitted] = React.useState(false);
  var [sending, setSending] = React.useState(false);
  var [error, setError] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError(false);

    fetch('https://formspree.io/f/mpqglzgk', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' },
    })
      .then(function(res) {
        setSending(false);
        if (res.ok) {
          setSubmitted(true);
        } else {
          setError(true);
        }
      })
      .catch(function() {
        setSending(false);
        setError(true);
      });
  }

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
            Book an appointment, get a quote, or just ask a question.
            We'll get back to you fast.
          </p>
        </div>
      </section>

      <MStripe />

      {/* ── Contact Grid ── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Form */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div style={{textAlign: 'center', padding: 'var(--sp-9) 0'}}>
                  <div style={{fontSize: '48px', marginBottom: 'var(--sp-4)'}}>✅</div>
                  <div className="contact-form-title" style={{marginBottom: 'var(--sp-4)'}}>Request Sent!</div>
                  <p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.65'}}>
                    Thanks — we'll reach out shortly to confirm your appointment.
                    For faster response, text or call <a href="tel:7328650566" style={{color: 'var(--blue)'}}>732-865-0566</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-grid">
                  <div className="contact-form-title">Book an Appointment</div>

                  {/* TODO: Replace this form action with Shop Monkey booking widget URL
                      or Formspree: <form action="https://formspree.io/f/YOUR_ID" method="POST">
                      Shop Monkey embed: replace form with their iframe booking widget */}

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input className="form-input" type="text" name="first_name" placeholder="John" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input className="form-input" type="text" name="last_name" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input className="form-input" type="email" name="email" placeholder="john@email.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input className="form-input" type="tel" name="phone" placeholder="(732) 000-0000" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Vehicle Year</label>
                      <input className="form-input" type="text" name="year" placeholder="e.g. 2018" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">BMW Model</label>
                      <input className="form-input" type="text" name="model" placeholder="e.g. 335i, M3, X5" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mileage</label>
                    <input className="form-input" type="text" name="mileage" placeholder="e.g. 85,000 miles" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service Needed</label>
                    <select className="form-select" name="service" required>
                      <option value="">Select a service...</option>
                      <option value="maintenance">Maintenance &amp; Repair</option>
                      <option value="performance">Performance Upgrade</option>
                      <option value="engine">Engine Work</option>
                      <option value="tuning">ECU / Custom Tuning</option>
                      <option value="bootmod3">Bootmod3 License &amp; Flash</option>
                      <option value="xhp">Transmission Tuning (XHP)</option>
                      <option value="ethanol">Ethanol / E85 Setup</option>
                      <option value="race">Race / Drift Build</option>
                      <option value="diagnostic">Diagnostic / Check Engine</option>
                      <option value="inspection">Pre-Purchase Inspection</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Describe the Issue or Request</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Tell us what's going on with your BMW, or what you're looking to do..."
                      required
                    ></textarea>
                  </div>

                  {error && (
                    <p style={{color: 'var(--red)', fontSize: '14px', padding: '10px 14px', background: 'rgba(204,17,0,0.08)', borderRadius: 'var(--r-sm)', border: '1px solid rgba(204,17,0,0.2)'}}>
                      Something went wrong. Please try again or call/text 732-865-0566.
                    </p>
                  )}

                  <p className="form-note">
                    We'll reach out within 24 hours to confirm and schedule.
                    For urgent needs, call or text <strong style={{color: 'var(--text-primary)'}}>732-865-0566</strong>.
                  </p>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={sending}
                    style={{width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1}}
                  >
                    {sending ? 'Sending...' : 'Send Request →'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <div className="contact-info-title">Contact Info</div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <div className="contact-info-label">Phone / Text</div>
                    <div className="contact-info-value">
                      <a href="tel:7328650566">732-865-0566</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">✉️</div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">
                      <a href="mailto:info@dmperformancenj.com">info@dmperformancenj.com</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">Wrightstown, NJ</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">⏰</div>
                  <div>
                    <div className="contact-info-label">Hours</div>
                    <div className="contact-info-value">
                      Contact us for current hours
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📷</div>
                  <div>
                    <div className="contact-info-label">Instagram</div>
                    <div className="contact-info-value">
                      <a href="https://www.instagram.com/dougmbmw/" target="_blank" rel="noopener">@dougmbmw</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-title">Book Online</div>
                <p style={{fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: 'var(--sp-4)'}}>
                  Schedule your appointment directly through our booking system — pick your date and service in minutes.
                </p>
                <a
                  href="https://app.shopmonkey.cloud/public/scheduler/63b8709cad02080026526cd8"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                  style={{width: '100%', justifyContent: 'center'}}
                >
                  Book an Appointment →
                </a>
              </div>

              <div className="contact-info-card" style={{background: 'var(--bg)', border: '1px solid var(--border)'}}>
                <div className="contact-info-title" style={{color: 'var(--blue)'}}>BMW Only.</div>
                <p style={{fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.65'}}>
                  We specialize exclusively in BMW. Every model from the 1 Series
                  to M cars to X-series SUVs. If it's a BMW, we handle it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = Contact;
