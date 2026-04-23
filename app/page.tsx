import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-container">

          {/* Main headline */}
          <h1 className="hero-h1">
            Turn every missed call<br />
            into a <span className="text-highlight">qualified lead.</span>
          </h1>

          {/* Newspaper-style info row */}
          <div className="hero-info-row">
            <p className="hero-desc">
              Your AI receptionist answers instantly, qualifies the caller, and gets the lead to your team — 24/7, without missing a beat.
            </p>
            <div className="hero-actions">
              <a href="#demo" className="hero-btn-primary">Call the Demo</a>
              <a href="#how-it-works" className="hero-btn-ghost">How It Works →</a>
            </div>
          </div>

          {/* Trust strip — industry verticals */}
          <div className="hero-trust-strip">
            <span className="trust-label">Trusted by businesses in</span>
            <div className="trust-tags">
              <span className="trust-tag">Roofing &amp; Solar</span>
              <span className="trust-tag">Medical &amp; Dental</span>
              <span className="trust-tag">Legal &amp; Immigration</span>
              <span className="trust-tag">Home Services</span>
              <span className="trust-tag">Real Estate</span>
            </div>
          </div>

        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo-section">
        <div className="container demo-container">
          <div className="demo-text-content">
            <p className="demo-label">Voice AI Demo</p>
            <h2>Speak to our AI.<br />Let it speak for itself.</h2>
            <p className="demo-desc">
              George handles inbound calls exactly as a trained receptionist would — without the overheads. Call the number and hear it firsthand.
            </p>
            <div className="demo-capabilities">
              <div className="demo-capability-item">
                <span className="capability-mark">—</span>
                <div>
                  <strong>Qualifies every caller</strong>
                  <p>Captures service type, location & urgency in a natural conversation.</p>
                </div>
              </div>
              <div className="demo-capability-item">
                <span className="capability-mark">—</span>
                <div>
                  <strong>Handles objections fluently</strong>
                  <p>Responds to questions, pricing queries, and hesitation without skipping a beat.</p>
                </div>
              </div>
              <div className="demo-capability-item">
                <span className="capability-mark">—</span>
                <div>
                  <strong>Hands off to your team</strong>
                  <p>Sends a clean lead summary to your sales team within seconds of the call ending.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="demo-card-wrapper">
            <div className="demo-card-glow"></div>
            <div className="demo-card-interactive">
              <div className="demo-status-text">
                <span className="demo-pulse-minimal"></span>
                System Active
              </div>
              <div className="demo-card-body-minimal">
                <div className="ai-monogram">George</div>
                <h3>Voice Agent Direct</h3>
                <a href="tel:+441234987233" className="phone-number-display">+44 1234 987233</a>
                <p className="demo-note-minimal">Tap to call. Available around the clock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <div className="container">

          <div className="problem-header">
            <p className="problem-eyebrow">The Problem</p>
            <h2>Where your revenue goes.</h2>
          </div>

          <div className="problem-rows">

            <div className="problem-row">
              <span className="pr-num">01</span>
              <div className="pr-body">
                <h3>The call goes to voicemail.</h3>
                <p>62% of callers hang up the moment they hear it. They don't leave a message — they call your competitor instead. That lead is gone. The ad spend that generated it is gone.</p>
              </div>
            </div>

            <div className="problem-row">
              <span className="pr-num">02</span>
              <div className="pr-body">
                <h3>Your team can't always answer.</h3>
                <p>They're on a job, in a meeting, or already on another call. Asking staff to act as receptionists costs you in distraction, error, and morale — on top of the leads they miss.</p>
              </div>
            </div>

            <div className="problem-row">
              <span className="pr-num">03</span>
              <div className="pr-body">
                <h3>You're funding the loss yourself.</h3>
                <p>Every pound spent on Meta Ads, leaflets, or referrals that results in an unanswered call is capital destroyed. The marketing worked. The reception failed.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <div className="container solution-container">

          {/* Left: Editorial statement */}
          <div className="solution-left">
            <p className="solution-eyebrow">The Fix</p>
            <h2 className="solution-headline">
              An AI that answers every call.<br />
              Every time. Without fail.
            </h2>
            <p className="solution-body">
              Replace the voicemail with a voice that thinks. Your AI receptionist picks up instantly, holds the conversation, extracts what matters, and gets the lead to your team — clean, complete, and ready to close.
            </p>
            <a href="#demo" className="solution-cta">
              Hear it yourself
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* Right: Outcome metrics */}
          <div className="solution-right">
            <div className="solution-metric">
              <div className="metric-top">
                <span className="metric-value">100%</span>
                <span className="metric-unit">of calls answered</span>
              </div>
              <p className="metric-desc">No more voicemails. No more missed intent. Every ring gets a response.</p>
              <div className="metric-rule"></div>
            </div>
            <div className="solution-metric">
              <div className="metric-top">
                <span className="metric-value">&lt; 2s</span>
                <span className="metric-unit">response time</span>
              </div>
              <p className="metric-desc">Your AI picks up before the second ring. First impressions are non-negotiable.</p>
              <div className="metric-rule"></div>
            </div>
            <div className="solution-metric">
              <div className="metric-top">
                <span className="metric-value">24 / 7</span>
                <span className="metric-unit">operational</span>
              </div>
              <p className="metric-desc">Bank holidays, evenings, weekends — your pipeline stays open when your office doesn't.</p>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-section">
        <div className="container">

          <div className="how-header">
            <p className="how-eyebrow">How It Works</p>
            <h2 className="how-headline">Three steps.<br />Zero friction.</h2>
          </div>

          <div className="how-steps">

            {/* Connector line sits behind the step numbers */}
            <div className="how-connector" aria-hidden="true"></div>

            <div className="how-step">
              <div className="how-step-number">
                <span>01</span>
              </div>
              <div className="how-step-content">
                <h3>Your AI answers the call.</h3>
                <p>The receptionist picks up within two seconds, greets the caller in your business's name, and immediately sets them at ease — no menus, no hold music, no voicemail.</p>
              </div>
            </div>

            <div className="how-step">
              <div className="how-step-number">
                <span>02</span>
              </div>
              <div className="how-step-content">
                <h3>It qualifies the lead.</h3>
                <p>Through a natural conversation, your AI captures whatever your business needs — service type, location, urgency, callback number. The caller never feels like they're filling in a form.</p>
              </div>
            </div>

            <div className="how-step">
              <div className="how-step-number">
                <span>03</span>
              </div>
              <div className="how-step-content">
                <h3>Your team gets the lead.</h3>
                <p>A clean summary lands with your team the moment the call ends. Someone follows up within 24 hours with everything they need to close.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">

          <div className="features-header">
            <p className="features-eyebrow">Capabilities</p>
            <h2 className="features-headline">Built to perform<br />on every call.</h2>
          </div>

          <div className="features-grid">

            <div className="feature-item">
              <span className="feature-label">Always On</span>
              <p>Answers calls 24 hours a day, 7 days a week — including bank holidays, evenings, and weekends. Your pipeline never closes.</p>
            </div>

            <div className="feature-item">
              <span className="feature-label">Instant Response</span>
              <p>Picks up within two seconds of the first ring. No hold music. No menus. No frustration for the caller.</p>
            </div>

            <div className="feature-item">
              <span className="feature-label">Sounds Human</span>
              <p>Natural language, real conversational flow. Callers routinely ask if they're speaking to a person — that's by design.</p>
            </div>

            <div className="feature-item">
              <span className="feature-label">Lead Qualification</span>
              <p>Captures your required fields — service type, location, urgency, contact number — in a natural conversation, not an interrogation.</p>
            </div>

            <div className="feature-item">
              <span className="feature-label">Objection Handling</span>
              <p>Trained to respond calmly to hesitation, frustration, and pricing questions without breaking character or losing the lead.</p>
            </div>

            <div className="feature-item">
              <span className="feature-label">Instant Lead Handoff</span>
              <p>A clean, structured lead summary is sent to your team the moment the call ends. No data entry. No delay.</p>
            </div>

            <div className="feature-item">
              <span className="feature-label">Fully Customisable</span>
              <p>Scripted to your business — your name, your services, your tone. It represents your brand, not a generic call centre.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="usecases-section">
        <div className="container usecases-container">

          {/* Left: editorial framing */}
          <div className="usecases-left">
            <p className="usecases-eyebrow">Who It's For</p>
            <h2 className="usecases-headline">Any business that runs on inbound calls.</h2>
            <p className="usecases-body">
              If your revenue depends on people calling you first, you cannot afford to miss those calls. The industry doesn't matter. The missed call always costs the same.
            </p>
          </div>

          {/* Right: industry rows */}
          <div className="usecases-right">
            <div className="usecase-row">
              <div className="usecase-row-inner">
                <span className="usecase-industry">Roofing & Solar</span>
                <span className="usecase-desc">High-ticket leads with short decision windows. Every missed call is a job gone to a rival.</span>
              </div>
            </div>
            <div className="usecase-row">
              <div className="usecase-row-inner">
                <span className="usecase-industry">Medical & Dental</span>
                <span className="usecase-desc">Patients call once. If no one answers, they book with the next practice on the list.</span>
              </div>
            </div>
            <div className="usecase-row">
              <div className="usecase-row-inner">
                <span className="usecase-industry">Immigration & Legal</span>
                <span className="usecase-desc">Complex enquiries, emotionally loaded callers. A calm, consistent first response matters enormously.</span>
              </div>
            </div>
            <div className="usecase-row">
              <div className="usecase-row-inner">
                <span className="usecase-industry">Real Estate</span>
                <span className="usecase-desc">Leads go cold in hours. Instant qualification and handoff keeps your pipeline moving.</span>
              </div>
            </div>
            <div className="usecase-row">
              <div className="usecase-row-inner">
                <span className="usecase-industry">Home Services & Trades</span>
                <span className="usecase-desc">Plumbers, electricians, HVAC — your team is on the job, not near a phone. We cover the gap.</span>
              </div>
            </div>
            <div className="usecase-row usecase-row--more">
              <div className="usecase-row-inner">
                <span className="usecase-industry usecase-industry--more">And Many More</span>
                <span className="usecase-desc">If your business runs on inbound calls, it works. Speak to us about your specific industry.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">

          <div className="pricing-header">
            <div className="pricing-header-left">
              <p className="pricing-eyebrow">Pricing</p>
              <h2 className="pricing-headline">
                Clear, honest pricing.<br />No surprises.
              </h2>
            </div>
            <div className="pricing-header-right">
              <p className="pricing-header-desc">
                Every plan includes a fully configured AI receptionist, built for your business. Pick the level that fits your call volume and grow from there.
              </p>
              <a href="mailto:daizyaiinfo@gmail.com" className="pricing-header-link">
                Book a Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
          <div className="pricing-cards pricing-cards--three">

            {/* Starter Plan */}
            <div className="pricing-card pricing-card--light">
              <div className="pricing-card-header">
                <span className="pricing-plan-name">Starter</span>
                <p className="pricing-plan-desc">Best suited for smaller operations or initial setup.</p>
                <div className="pricing-card-rule"></div>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    1 call handling system
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Up to 300 minutes / month
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Lead qualification &amp; booking
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Ongoing support
                  </li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <div className="pricing-price">
                  <span className="pricing-amount">&pound;299</span>
                  <span className="pricing-period">/ month</span>
                </div>
                <a href="mailto:daizyaiinfo@gmail.com" className="pricing-cta pricing-cta--light">
                  Get started
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Growth Plan — Popular */}
            <div className="pricing-card pricing-card--dark">
              <div className="pricing-card-header">
                <div className="pricing-card-header-top">
                  <span className="pricing-plan-name">Growth</span>
                  <span className="pricing-badge">Most Popular</span>
                </div>
                <p className="pricing-plan-desc pricing-plan-desc--dark">Designed for businesses with consistent enquiry volume.</p>
                <div className="pricing-card-rule pricing-card-rule--dark"></div>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Up to 2 call handling systems
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Up to 1000 minutes / month
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Advanced workflows
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Priority support
                  </li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <div className="pricing-price">
                  <span className="pricing-amount pricing-amount--white">&pound;599</span>
                  <span className="pricing-period pricing-period--white">/ month</span>
                </div>
                <a href="mailto:daizyaiinfo@gmail.com" className="pricing-cta pricing-cta--accent">
                  Get started
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Scale Plan */}
            <div className="pricing-card pricing-card--light">
              <div className="pricing-card-header">
                <span className="pricing-plan-name">Scale</span>
                <p className="pricing-plan-desc">Designed for higher-volume or expanding businesses.</p>
                <div className="pricing-card-rule"></div>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Multiple workflows / systems
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Higher usage capacity
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Advanced routing &amp; logic
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Ongoing optimisation
                  </li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <div className="pricing-price">
                  <span className="pricing-amount">&pound;999</span>
                  <span className="pricing-period">/ month</span>
                </div>
                <a href="mailto:daizyaiinfo@gmail.com" className="pricing-cta pricing-cta--light">
                  Get started
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Meta Ads Management Add-on */}
          <div className="meta-ads-section">
            <div className="meta-ads-header">
              <div className="meta-ads-header-left">
                <p className="meta-ads-eyebrow">Add-on</p>
                <h3 className="meta-ads-title">Meta Ads Management</h3>
              </div>
              <p className="meta-ads-desc">
                To generate consistent enquiries, we manage Meta Ads alongside the system. Ad spend is paid directly by you to Meta — fully transparent, no hidden fees, separate from management fees.
              </p>
            </div>

            <div className="meta-ads-body">
              {/* Fee table */}
              <div className="meta-ads-table-wrap">
                <p className="meta-ads-table-label">Management Fees — Based on Ad Budget</p>
                <table className="meta-ads-table">
                  <thead>
                    <tr>
                      <th>Ad Spend</th>
                      <th>Management Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&pound;300 – &pound;500 / month</td>
                      <td>&pound;100 – &pound;150 / month</td>
                    </tr>
                    <tr>
                      <td>&pound;500 – &pound;1,000 / month</td>
                      <td>&pound;150 – &pound;250 / month</td>
                    </tr>
                    <tr>
                      <td>&pound;1,000 – &pound;2,000 / month</td>
                      <td>&pound;250 – &pound;400 / month</td>
                    </tr>
                    <tr>
                      <td>&pound;2,000+ / month</td>
                      <td>Custom — based on scale</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* What's Included */}
              <div className="meta-ads-included">
                <p className="meta-ads-table-label">What&apos;s Included</p>
                <ul className="meta-ads-included-list">
                  <li>
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Campaign setup
                  </li>
                  <li>
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Targeting strategy
                  </li>
                  <li>
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Ad structure &amp; copy
                  </li>
                  <li>
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Ongoing optimisation
                  </li>
                  <li>
                    <svg className="pricing-check pricing-check--accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Performance tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">

          <div className="faq-header">
            <p className="faq-eyebrow">FAQs</p>
            <h2 className="faq-headline">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">

            <details className="faq-item">
              <summary className="faq-question">
                <span>Will it really sound natural to my callers?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>Yes. This is not a phone tree or a chatbot reading from a script. It is a voice AI that understands context, follows a conversation, and responds naturally — including handling tangents, silences, and follow-up questions. Most callers do not realise they are speaking to an AI until they are told.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>Can I customise what it says and how it behaves?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>Entirely. The agent is scripted to your business — your name, your services, your tone, your qualifying questions. It is not a generic product placed in front of your callers. It represents your brand specifically.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>What happens after the AI qualifies a lead?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>A structured lead summary is sent to your team the moment the call ends — service type, location, urgency, and contact number. Your team follows up within 24 hours with everything they need. No data entry, no transcription lag.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>How long does setup take?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>Most clients are live within a few days. We handle the configuration and testing. You review, approve, and go live. There is no lengthy integration process or technical requirement on your end.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>What if a caller asks something it cannot handle?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>It handles the situation gracefully. If a question is outside its scope, it acknowledges this and redirects the caller — either back to the objective, or by letting them know a specialist will follow up. It does not freeze, repeat itself or give a wrong answer.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>How is this different from a voicemail or an answering service?</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>A voicemail captures nothing and converts nobody. A human answering service is expensive, inconsistent, and unavailable outside working hours. This is a fully autonomous agent that qualifies every single caller — at 2am on a bank holiday — and delivers a clean lead to your team. There is no comparison.</p>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container cta-container">
          <p className="cta-eyebrow">Get Started</p>
          <h2 className="cta-headline">
            Your next missed call<br />doesn't have to be.
          </h2>
          <p className="cta-subtext">
            We'll build your AI receptionist, configure it to your business, and have it live within days. No long contracts. No technical overhead.
          </p>
          <div className="cta-actions">
            <a href="tel:+441234987233" className="cta-btn-primary">Call the Demo First</a>
            <a href="mailto:daizyaiinfo@gmail.com" className="cta-btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
