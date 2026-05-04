import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "DaizyAI Ltd Privacy Policy — how we collect, use, and protect your data. UK GDPR compliant.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-eyebrow">DaizyAI</p>
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-meta">
            <span>Effective date: 1 May 2026</span>
            <span>Last reviewed: 1 May 2026</span>
            <span>Version 1.0</span>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-container">

          {/* Table of Contents */}
          <nav className="legal-toc">
            <p className="legal-toc-title">Contents</p>
            <ol className="legal-toc-list">
              <li><a href="#s1">Who We Are</a></li>
              <li><a href="#s2">Scope of This Policy</a></li>
              <li><a href="#s3">Definitions</a></li>
              <li><a href="#s4">Data We Collect — Clients</a></li>
              <li><a href="#s5">Data We Collect — Callers</a></li>
              <li><a href="#s6">Call Recordings</a></li>
              <li><a href="#s7">Template Reuse &amp; AI Training</a></li>
              <li><a href="#s8">Lawful Basis</a></li>
              <li><a href="#s9">How We Use Data</a></li>
              <li><a href="#s10">Sub-processors</a></li>
              <li><a href="#s11">Data Retention</a></li>
              <li><a href="#s12">Your Rights</a></li>
              <li><a href="#s13">International Transfers</a></li>
              <li><a href="#s14">Security</a></li>
              <li><a href="#s15">Contact &amp; Complaints</a></li>
            </ol>
          </nav>

          {/* 01 */}
          <div className="legal-section" id="s1">
            <p className="legal-section-num">01</p>
            <h2>Who We Are</h2>
            <p><strong>DaizyAI Ltd</strong> (&quot;DaizyAI&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a company registered in England and Wales. We provide AI-powered inbound communication infrastructure — including AI voice agents, lead qualification, call routing, and reporting — to UK service businesses.</p>
            <p>For the purposes of UK data protection law, DaizyAI acts as:</p>
            <ul>
              <li><strong>Data Controller</strong> in respect of data relating to our own clients (business owners and their staff) and our own operational and marketing activities.</li>
              <li><strong>Data Processor</strong> in respect of personal data belonging to our clients&apos; customers and callers, which we process on our clients&apos; behalf under a Data Processing Agreement (DPA).</li>
            </ul>
            <p>Contact: <a href="mailto:daizyaiinfo@gmail.com">daizyaiinfo@gmail.com</a>&nbsp;|&nbsp;<a href="https://daizyai.uk">daizyai.uk</a></p>
          </div>

          {/* 02 */}
          <div className="legal-section" id="s2">
            <p className="legal-section-num">02</p>
            <h2>Scope of This Policy</h2>
            <p>This policy applies to:</p>
            <ul>
              <li>Prospective and current <strong>clients</strong> (businesses that contract with DaizyAI).</li>
              <li><strong>Callers</strong> — members of the public who call a telephone number managed by a DaizyAI voice agent on behalf of one of our clients.</li>
              <li>Visitors to <strong>daizyai.uk</strong>.</li>
            </ul>
            <p>It covers all personal data processed in connection with our services, including data captured by AI voice agents, call recordings stored on third-party infrastructure, and data held in our own systems.</p>
          </div>

          {/* 03 */}
          <div className="legal-section" id="s3">
            <p className="legal-section-num">03</p>
            <h2>Definitions</h2>
            <table className="legal-table">
              <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
              <tbody>
                <tr><td><strong>Client</strong></td><td>A business or individual that has contracted with DaizyAI to use our voice-agent services.</td></tr>
                <tr><td><strong>Caller / End-Customer</strong></td><td>A member of the public who calls a phone number operated by DaizyAI on a client&apos;s behalf.</td></tr>
                <tr><td><strong>Agent</strong></td><td>An AI voice agent we configure and deploy for a client.</td></tr>
                <tr><td><strong>Call Recording</strong></td><td>An audio recording of a call handled by an Agent, stored on Retell AI&apos;s infrastructure.</td></tr>
                <tr><td><strong>Lead Summary</strong></td><td>A structured text output generated after a call, delivered to the client&apos;s nominated CRM or inbox.</td></tr>
                <tr><td><strong>Vertical Template</strong></td><td>A reusable configuration framework — containing scripts, logic, and qualification flows — built for a specific business sector.</td></tr>
                <tr><td><strong>UK GDPR</strong></td><td>The UK General Data Protection Regulation as retained in UK law.</td></tr>
              </tbody>
            </table>
          </div>

          {/* 04 */}
          <div className="legal-section" id="s4">
            <p className="legal-section-num">04</p>
            <h2>Data We Collect — Clients</h2>
            <p>When a business engages DaizyAI, we collect and process the following categories of personal data:</p>

            <h3>Identity &amp; Contact</h3>
            <ul>
              <li>Full name, job title, business name</li>
              <li>Email address, phone number</li>
              <li>Business address and Companies House number (where applicable)</li>
            </ul>

            <h3>Commercial &amp; Contractual</h3>
            <ul>
              <li>Subscription tier, onboarding date, billing history</li>
              <li>Signed DPA and service agreements</li>
              <li>Communications (emails, meeting notes) relating to the account</li>
            </ul>

            <h3>Technical Configuration</h3>
            <ul>
              <li>Phone numbers purchased or ported for the agent</li>
              <li>CRM webhook endpoints and integration credentials</li>
              <li>Agent configuration settings (scripts, qualifying fields, escalation logic)</li>
            </ul>

            <h3>Usage &amp; Performance</h3>
            <ul>
              <li>Call volumes, minutes used, lead counts</li>
              <li>Optimisation notes and performance review records</li>
            </ul>

            <div className="legal-callout">
              <strong>Lawful basis:</strong> Contract performance (Art. 6(1)(b) UK GDPR) for data required to deliver the service; legitimate interests (Art. 6(1)(f)) for performance analytics and service improvement communications.
            </div>
          </div>

          {/* 05 */}
          <div className="legal-section" id="s5">
            <p className="legal-section-num">05</p>
            <h2>Data We Collect — Callers (End-Customers)</h2>
            <p>When a member of the public calls a phone number operated by one of our Agents, the following data is captured:</p>

            <h3>Telephony Data</h3>
            <ul>
              <li>Caller&apos;s phone number (CLI / Caller ID), where presented by the network</li>
              <li>Call date, time, and duration</li>
              <li>Call outcome (answered, transferred, voicemail, disconnected)</li>
            </ul>

            <h3>Conversation Data</h3>
            <ul>
              <li>Full audio recording of the call</li>
              <li>Automated transcript of the call</li>
              <li>Structured Lead Summary: name, stated service need, location, urgency, budget indicator, and any other qualifying fields configured by the client</li>
            </ul>

            <div className="legal-callout legal-callout--warn">
              <strong>Important:</strong> DaizyAI collects this data as a <strong>Data Processor</strong> on behalf of our client (the Data Controller). The client&apos;s own privacy notice governs how their end-customers&apos; data is used after it is delivered to the client. Callers seeking to exercise rights in relation to a specific business&apos;s data should contact that business directly.
            </div>

            <h3>AI Disclosure</h3>
            <p><strong>Inbound Agents (current):</strong> DaizyAI&apos;s inbound voice agents operate as virtual receptionists and do not proactively identify themselves as AI at the start of a call. If a caller directly asks whether they are speaking to a human or an AI, the Agent will truthfully confirm it is an AI. Calls may be recorded for quality and service purposes; this is disclosed in the client&apos;s own privacy notice, which the client is responsible for maintaining.</p>
            <p><strong>Outbound Agents (future):</strong> When DaizyAI introduces outbound voice agent services, those agents will explicitly identify themselves as a &quot;Virtual Receptionist&quot; or AI agent at the start of every call, in compliance with applicable regulations including the UK&apos;s rules on automated calling and the FTC guidelines where relevant. This section will be updated prior to outbound services going live.</p>
          </div>

          {/* 06 */}
          <div className="legal-section" id="s6">
            <p className="legal-section-num">06</p>
            <h2>Call Recordings</h2>

            <h3>Where Recordings Are Stored</h3>
            <p>Call recordings and transcripts are stored on infrastructure operated by <strong>Retell AI, Inc.</strong>, our voice AI sub-processor. Retell AI stores recordings on servers which may be located in the United States. Please see Section 13 (International Transfers) for how we address this.</p>

            <h3>Who Can Access Recordings</h3>
            <ul>
              <li><strong>DaizyAI</strong> — for quality assurance, agent optimisation, and client reporting.</li>
              <li><strong>The client</strong> — via their DaizyAI reporting dashboard or upon request. Clients access only their own recordings.</li>
              <li><strong>Retell AI</strong> — as our sub-processor, subject to contractual data processing obligations.</li>
              <li>No other party has access to call recordings without explicit client consent or a legal obligation.</li>
            </ul>

            <h3>Retention of Recordings</h3>
            <p>Call recordings are retained for a default period of <strong>12 months</strong> from the date of the call, unless the client requests a shorter period or deletion. Transcripts are retained for the same period. After the retention period expires, recordings and transcripts are permanently deleted from Retell AI&apos;s infrastructure.</p>
            <p>Clients may request deletion of specific recordings at any time by contacting us at <a href="mailto:daizyaiinfo@gmail.com">daizyaiinfo@gmail.com</a>. We will process deletion requests within 14 days.</p>

            <h3>Recordings and Legal Obligations</h3>
            <p>We may retain recordings beyond the standard period where required by law, court order, or regulatory authority — for example, if a recording is relevant to a live legal dispute. Clients will be notified where this applies.</p>
          </div>

          {/* 07 */}
          <div className="legal-section" id="s7">
            <p className="legal-section-num">07</p>
            <h2>Template Reuse &amp; AI Improvement</h2>

            <div className="legal-callout">
              This section explains one of the most important aspects of how DaizyAI operates. Please read it carefully.
            </div>

            <h3>What &quot;Template Reuse&quot; Means</h3>
            <p>As part of DaizyAI&apos;s core service, we build and maintain a library of <strong>Vertical Templates</strong> — reusable configuration frameworks for each business sector we serve (e.g. roofing, dental, legal, home services). When we deploy an Agent for a new client, we may use an existing Vertical Template as the starting point, adapting it to the new client&apos;s specific business name, services, and preferences.</p>

            <h3>What Is and Is Not Shared</h3>
            <table className="legal-table">
              <thead><tr><th>Element</th><th>Included in Template Reuse?</th><th>Detail</th></tr></thead>
              <tbody>
                <tr><td>Script structure &amp; logic</td><td>✓ Yes</td><td>Generalised conversation flows and decision trees — no client-identifying content</td></tr>
                <tr><td>Qualifying questions</td><td>✓ Yes (anonymised)</td><td>Question formats proven effective in the vertical, stripped of any client-specific content</td></tr>
                <tr><td>Objection-handling phrases</td><td>✓ Yes (generalised)</td><td>Language patterns — not attributed to or identifiable with any specific client</td></tr>
                <tr><td>Client business name or branding</td><td>✗ Never</td><td>Always replaced for each new client deployment</td></tr>
                <tr><td>Caller personal data</td><td>✗ Never</td><td>Lead data, phone numbers, names — never incorporated into any template</td></tr>
                <tr><td>Call recordings</td><td>✗ Never</td><td>Recordings are never used to train AI models or included in templates</td></tr>
                <tr><td>Client CRM or integration data</td><td>✗ Never</td><td>Integration configurations are specific to each client</td></tr>
              </tbody>
            </table>

            <h3>No Personal Data in Templates</h3>
            <p><strong>We do not use personal data — either client data or caller data — as part of our Vertical Template library.</strong> Templates contain only generalised, anonymised configuration logic derived from operational experience. No individual caller&apos;s name, phone number, conversation content, or other personal data is ever incorporated into a template.</p>

            <h3>AI Model Training</h3>
            <p>DaizyAI does not train or fine-tune AI models. The underlying voice AI models are provided by third-party suppliers (currently Retell AI and its integrated providers). We have confirmed with Retell AI that call data processed through our account is <strong>not</strong> used to train or improve Retell AI&apos;s general models without explicit consent. If this position changes, we will update this policy and notify affected clients in advance.</p>
          </div>

          {/* 08 */}
          <div className="legal-section" id="s8">
            <p className="legal-section-num">08</p>
            <h2>Lawful Basis for Processing</h2>
            <table className="legal-table">
              <thead><tr><th>Processing Activity</th><th>Data Subject</th><th>Lawful Basis</th></tr></thead>
              <tbody>
                <tr><td>Delivering the contracted service</td><td>Client</td><td>Contract — Art. 6(1)(b)</td></tr>
                <tr><td>Billing and invoicing</td><td>Client</td><td>Contract — Art. 6(1)(b)</td></tr>
                <tr><td>Service communications and account management</td><td>Client</td><td>Contract — Art. 6(1)(b)</td></tr>
                <tr><td>Performance reporting and optimisation</td><td>Client</td><td>Legitimate interests — Art. 6(1)(f)</td></tr>
                <tr><td>Marketing to prospects</td><td>Prospect</td><td>Legitimate interests — Art. 6(1)(f), with opt-out</td></tr>
                <tr><td>Handling inbound caller conversations</td><td>Caller</td><td>Legitimate interests (client&apos;s) — Art. 6(1)(f)</td></tr>
                <tr><td>Call recording for QA and optimisation</td><td>Caller</td><td>Legitimate interests (client&apos;s) — Art. 6(1)(f)</td></tr>
                <tr><td>Legal compliance and dispute resolution</td><td>Both</td><td>Legal obligation — Art. 6(1)(c)</td></tr>
              </tbody>
            </table>
          </div>

          {/* 09 */}
          <div className="legal-section" id="s9">
            <p className="legal-section-num">09</p>
            <h2>How We Use Data</h2>

            <h3>Client Data Is Used To</h3>
            <ul>
              <li>Set up, configure, and maintain their AI voice agent</li>
              <li>Deliver lead summaries and call reports</li>
              <li>Invoice and manage the contractual relationship</li>
              <li>Improve agent performance through monthly optimisation reviews</li>
              <li>Send service and operational communications</li>
              <li>Where opted in, send commercial communications about new features or services</li>
            </ul>

            <h3>Caller Data Is Used To</h3>
            <ul>
              <li>Answer the caller&apos;s inbound enquiry via the AI agent</li>
              <li>Capture and deliver a structured lead summary to the client</li>
              <li>Record the call for quality assurance and agent optimisation purposes</li>
              <li>Generate anonymised performance metrics for our internal reporting</li>
            </ul>

            <h3>What We Do Not Do</h3>
            <ul>
              <li>We do not sell personal data to any third party.</li>
              <li>We do not use caller data for any purpose beyond those described above.</li>
              <li>We do not conduct automated decision-making with legal or similarly significant effects without human oversight.</li>
              <li>We do not build profiles of individual callers across multiple clients.</li>
            </ul>
          </div>

          {/* 10 */}
          <div className="legal-section" id="s10">
            <p className="legal-section-num">10</p>
            <h2>Sub-Processors</h2>
            <p>We use the following categories of sub-processor to deliver our services. All sub-processors are engaged under written contracts containing data protection obligations consistent with UK GDPR.</p>
            <table className="legal-table">
              <thead><tr><th>Sub-Processor</th><th>Purpose</th><th>Location</th></tr></thead>
              <tbody>
                <tr><td><strong>Retell AI, Inc.</strong></td><td>Core voice AI infrastructure: call handling, speech-to-text, text-to-speech, recording storage, transcription</td><td>United States</td></tr>
                <tr><td>Telephony / SIP provider</td><td>Phone number provisioning, call routing, PSTN connectivity</td><td>United States / EU</td></tr>
                <tr><td>CRM / webhook destination</td><td>Lead delivery — configured per client instruction</td><td>Client-determined</td></tr>
                <tr><td>Email service provider</td><td>Client communications, lead email delivery</td><td>EU / US</td></tr>
                <tr><td>Accounting software</td><td>Invoicing and financial records</td><td>UK / EU</td></tr>
              </tbody>
            </table>
            <p>A full and current list of sub-processors is available upon request by emailing <a href="mailto:daizyaiinfo@gmail.com">daizyaiinfo@gmail.com</a>.</p>
          </div>

          {/* 11 */}
          <div className="legal-section" id="s11">
            <p className="legal-section-num">11</p>
            <h2>Data Retention</h2>
            <table className="legal-table">
              <thead><tr><th>Data Category</th><th>Retention Period</th><th>Basis</th></tr></thead>
              <tbody>
                <tr><td>Client account data</td><td>Duration of contract + 6 years</td><td>Limitation Act 1980; tax / accounting obligations</td></tr>
                <tr><td>Call recordings</td><td>12 months from call date (default)</td><td>Quality assurance; reducible on client request</td></tr>
                <tr><td>Call transcripts &amp; Lead Summaries</td><td>12 months from call date (default)</td><td>Client reporting and optimisation</td></tr>
                <tr><td>Caller phone numbers (CLI)</td><td>12 months from call date</td><td>Fraud prevention; quality assurance</td></tr>
                <tr><td>Email correspondence</td><td>3 years from last interaction</td><td>Legitimate interests; dispute resolution</td></tr>
                <tr><td>Marketing prospect data</td><td>Until opt-out or 2 years of inactivity</td><td>Legitimate interests</td></tr>
                <tr><td>Website analytics</td><td>26 months</td><td>ICO guidance on analytics cookies</td></tr>
              </tbody>
            </table>
            <p>On termination of a client agreement, we will delete or return all caller data held on the client&apos;s behalf within <strong>30 days</strong>, unless we are required by law to retain it for longer.</p>
          </div>

          {/* 12 */}
          <div className="legal-section" id="s12">
            <p className="legal-section-num">12</p>
            <h2>Your Rights</h2>
            <p>Under UK GDPR, you have the following rights in relation to your personal data:</p>

            <h3>Rights Available to Clients and Prospects</h3>
            <ul>
              <li><strong>Right of access</strong> — request a copy of your personal data we hold</li>
              <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
              <li><strong>Right to erasure</strong> — request deletion, subject to legal retention requirements</li>
              <li><strong>Right to restrict processing</strong> — request we limit processing in certain circumstances</li>
              <li><strong>Right to data portability</strong> — request your data in a machine-readable format</li>
              <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
              <li><strong>Rights in relation to automated decision-making</strong> — we do not make solely automated decisions with significant effects</li>
            </ul>

            <h3>Rights Available to Callers (End-Customers)</h3>
            <p>If you called a business whose calls are handled by DaizyAI and wish to exercise your data rights, please note:</p>
            <ul>
              <li>The business you called is the <strong>Data Controller</strong> for your call data. Direct requests to exercise your rights to that business in the first instance.</li>
              <li>If you cannot identify or reach that business, contact us at <a href="mailto:daizyaiinfo@gmail.com">daizyaiinfo@gmail.com</a> and we will assist in identifying the correct controller.</li>
              <li>We will process requests for recording deletion within <strong>14 days</strong> upon verified instruction from the relevant client (controller).</li>
            </ul>

            <h3>How to Submit a Request</h3>
            <p>Email <a href="mailto:daizyaiinfo@gmail.com">daizyaiinfo@gmail.com</a> with the subject line &quot;Data Rights Request&quot;. We will acknowledge within 3 working days and respond within <strong>one calendar month</strong>, as required by UK GDPR.</p>
          </div>

          {/* 13 */}
          <div className="legal-section" id="s13">
            <p className="legal-section-num">13</p>
            <h2>International Transfers</h2>
            <p>Some of our sub-processors, notably <strong>Retell AI, Inc.</strong> and our telephony providers, process data outside the UK, primarily in the United States.</p>
            <p>We address this by:</p>
            <ul>
              <li>Entering into the <strong>UK International Data Transfer Agreement (IDTA)</strong> or the <strong>UK Addendum to the EU Standard Contractual Clauses</strong> with each sub-processor that transfers data outside the UK.</li>
              <li>Conducting a Transfer Risk Assessment (TRA) for transfers to Retell AI.</li>
              <li>Including data transfer provisions in our client-facing DPA.</li>
            </ul>
            <p>A summary of the transfer mechanisms we rely upon is available on request.</p>
          </div>

          {/* 14 */}
          <div className="legal-section" id="s14">
            <p className="legal-section-num">14</p>
            <h2>Security</h2>
            <p>We implement appropriate technical and organisational measures to protect personal data, including:</p>
            <ul>
              <li>Encrypted transmission of all data in transit (TLS 1.2 or higher)</li>
              <li>Access controls limiting data access to those who need it for their role</li>
              <li>Two-factor authentication on all production systems and sub-processor accounts</li>
              <li>Regular review of sub-processor security certifications (Retell AI maintains SOC 2 Type II)</li>
              <li>Documented incident response procedure — we will notify the ICO within 72 hours of a breach where required</li>
              <li>Annual security review of our data processing activities</li>
            </ul>
            <p>No transmission over the internet is 100% secure. We take all reasonable steps to protect data but cannot guarantee absolute security.</p>
          </div>

          {/* 15 */}
          <div className="legal-section" id="s15">
            <p className="legal-section-num">15</p>
            <h2>Contact &amp; Complaints</h2>
            <p>For any questions about this policy or to exercise your rights:</p>
            <div className="legal-contact-box">
              <p><strong>DaizyAI Ltd — Data Enquiries</strong></p>
              <p>Email: <a href="mailto:daizyaiinfo@gmail.com">daizyaiinfo@gmail.com</a></p>
              <p>Website: <a href="https://daizyai.uk">daizyai.uk</a></p>
            </div>

            <h3>Right to Complain to the ICO</h3>
            <p>If you are unhappy with how we have handled your data, you have the right to lodge a complaint with the <strong>Information Commissioner&apos;s Office (ICO)</strong>:</p>
            <div className="legal-contact-box">
              <p><strong>Information Commissioner&apos;s Office</strong></p>
              <p>Website: <a href="https://ico.org.uk">ico.org.uk</a></p>
              <p>Helpline: 0303 123 1113</p>
            </div>
            <p>We would, however, appreciate the opportunity to address your concern before you contact the ICO. Please reach out to us first.</p>

            <h3>Policy Updates</h3>
            <p>We may update this policy from time to time. Material changes will be notified to clients by email at least 14 days before they take effect. The current version is always available at <a href="https://daizyai.uk">daizyai.uk</a>.</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
