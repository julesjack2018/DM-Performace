// legal.jsx — Privacy Policy + Terms of Service

function Privacy() {
  return (
    <React.Fragment>
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-eyebrow">
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="page-header-title">Privacy<br/>Policy</h1>
          <p className="page-header-sub">Last updated: June 2026</p>
        </div>
      </section>
      <MStripe />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p>
              DM Performance LLC ("DM Performance", "we", "our", or "us") respects your privacy.
              This Privacy Policy explains how we collect, use, and protect information when you
              visit <strong>dmperformancenj.com</strong> or contact us.
            </p>
            <h2>Information We Collect</h2>
            <p>We may collect the following when you use our website or submit a contact form:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Vehicle information (year, model, mileage)</li>
              <li>Service requests and messages you send us</li>
              <li>Basic usage data (pages visited, browser type) via analytics tools</li>
            </ul>
            <h2>How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to your service inquiries and schedule appointments</li>
              <li>Provide quotes and communicate about your vehicle</li>
              <li>Improve our website and services</li>
              <li>Send service reminders or follow-up communications (only if you've contacted us)</li>
            </ul>
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share information with service providers who assist in operating our website
              (such as appointment scheduling or email delivery tools) under confidentiality agreements.
            </p>
            <h2>Cookies & Analytics</h2>
            <p>
              Our website may use cookies and third-party analytics tools (such as Google Analytics)
              to understand how visitors use our site. This data is aggregated and does not personally
              identify you. You may disable cookies in your browser settings.
            </p>
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect your information. However, no method of internet
              transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
            <h2>Your Rights</h2>
            <p>
              You may request to access, correct, or delete your personal information at any time
              by contacting us at <a href="mailto:info@dmperformancenj.com">info@dmperformancenj.com</a>.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Contact us at:<br/>
              DM Performance LLC · Wrightstown, NJ<br/>
              <a href="mailto:info@dmperformancenj.com">info@dmperformancenj.com</a> ·{' '}
              <a href="tel:7328650566">732-865-0566</a>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function Terms() {
  return (
    <React.Fragment>
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-eyebrow">
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="page-header-title">Terms of<br/>Service</h1>
          <p className="page-header-sub">Last updated: June 2026</p>
        </div>
      </section>
      <MStripe />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p>
              By using the website <strong>dmperformancenj.com</strong> or engaging the services
              of DM Performance LLC ("DM Performance"), you agree to the following terms.
            </p>
            <h2>Services</h2>
            <p>
              DM Performance provides automotive repair, maintenance, and performance modification
              services for BMW vehicles. All service work is performed by or under the supervision
              of certified technicians.
            </p>
            <h2>Appointments & Scheduling</h2>
            <p>
              Submitting a contact form or appointment request does not guarantee a confirmed
              appointment. Appointments are confirmed only when you receive direct confirmation
              from DM Performance via phone, text, or email.
            </p>
            <h2>Payment</h2>
            <p>
              Payment is due upon completion of services unless otherwise agreed in writing.
              DM Performance accepts cash and major payment methods. A written estimate will
              be provided before non-emergency work begins.
            </p>
            <h2>Estimates</h2>
            <p>
              Written estimates are our best assessment based on the information available at
              the time of inspection. Final pricing may vary if additional issues are discovered
              during service. We will notify you before proceeding with work that exceeds the
              original estimate.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              DM Performance is not liable for pre-existing conditions unrelated to services
              performed, incidental or consequential damages, or issues arising from parts
              supplied by the customer. Our liability is limited to the cost of the specific
              service performed.
            </p>
            <h2>Website Use</h2>
            <p>
              This website is provided for informational purposes. We make no warranties regarding
              the accuracy or completeness of content. We reserve the right to modify or discontinue
              any part of the site at any time.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us:<br/>
              DM Performance LLC · Wrightstown, NJ<br/>
              <a href="mailto:info@dmperformancenj.com">info@dmperformancenj.com</a> ·{' '}
              <a href="tel:7328650566">732-865-0566</a>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

// Set the correct page component based on the route
if (window.__route === '/terms') {
  window.__Page = Terms;
} else {
  window.__Page = Privacy;
}
