import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | DaizyAI",
  description:
    "Meet the team behind DaizyAI. We build high-end AI receptionists so service businesses never lose another lead to a missed call.",
};

export default function About() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-left">
            <p className="about-eyebrow">About DaizyAI</p>
            <h1 className="about-headline">
              We exist because your<br />business shouldn&apos;t stop<br />when you&apos;re busy.
            </h1>
          </div>
          <div className="about-hero-right">
            <p className="about-hero-desc">
              DaizyAI is a specialist automation agency that builds high-end, human-sounding AI receptionists for service businesses across the UK. Every system we deploy is configured to sound, think, and respond like your best member of staff — so that no call goes unanswered and no lead slips through.
            </p>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="about-story">
        <div className="container about-story-inner">
          <div className="about-story-label">
            <p className="about-eyebrow">How It Started</p>
          </div>
          <div className="about-story-content">
            <h2 className="about-section-title">
              A problem hiding in plain sight.
            </h2>
            <div className="about-story-text">
              <p>
                It started with a simple observation: service businesses — plumbers, roofers, clinics, law firms — were losing thousands of pounds a year to calls they simply couldn&apos;t answer. Not because they didn&apos;t care, but because they were already on a job, in a meeting, or closed for the day.
              </p>
              <p>
                The caller would get a voicemail. Most would hang up. Then they&apos;d call the next business on Google. A perfectly good lead — gone in seconds.
              </p>
              <p>
                We knew the technology had reached a point where this didn&apos;t need to happen anymore. Conversational AI had advanced far beyond the robotic phone trees that people dread. It was now possible to build something that listens, understands context, handles objections, and books appointments — all while sounding genuinely human.
              </p>
              <p>
                So we built it. Not as a generic SaaS product, but as a hands-on service: each AI receptionist is configured specifically for the business it serves. The tone, the questions, the workflow — everything is tailored. That&apos;s what makes DaizyAI different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values">
        <div className="container">
          <div className="about-values-header">
            <p className="about-eyebrow">What We Believe</p>
            <h2 className="about-section-title">Our approach.</h2>
          </div>
          <div className="about-values-grid">
            <div className="about-value-card">
              <span className="about-value-number">01</span>
              <h3 className="about-value-title">Configured, not templated</h3>
              <p className="about-value-desc">
                Every AI receptionist is built from scratch for the specific business it serves. We study your workflow, your tone, and your customers before writing a single line of configuration.
              </p>
            </div>
            <div className="about-value-card">
              <span className="about-value-number">02</span>
              <h3 className="about-value-title">Indistinguishable from human</h3>
              <p className="about-value-desc">
                Our systems handle tangents, silences, follow-up questions, and objections naturally. Most callers don&apos;t realise they&apos;re speaking to AI until they&apos;re told.
              </p>
            </div>
            <div className="about-value-card">
              <span className="about-value-number">03</span>
              <h3 className="about-value-title">Leads, not just calls</h3>
              <p className="about-value-desc">
                We don&apos;t just answer the phone. We qualify the caller, capture the right details, and deliver a clean, actionable lead to your team — ready to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team">
        <div className="container">
          <div className="about-team-header">
            <p className="about-eyebrow">The Team</p>
            <h2 className="about-section-title">Built by people who<br />understand both sides.</h2>
          </div>
          <div className="about-team-grid about-team-grid--three">

            {/* Prasanna */}
            <div className="about-team-card">
              <div className="about-team-info">
                <h3 className="about-team-name">Prasanna Rajvansh</h3>
                <p className="about-team-role">Co-founder · Growth &amp; Strategy</p>
                <p className="about-team-bio">
                  Prasanna drives the commercial engine behind DaizyAI — from client acquisition and onboarding to long-term growth strategy. With a strong foundation in business development and performance marketing, he ensures that DaizyAI isn&apos;t just a product clients use, but a partnership that consistently delivers measurable results.
                </p>
              </div>
            </div>

            {/* Manav */}
            <div className="about-team-card">
              <div className="about-team-info">
                <h3 className="about-team-name">Manav Rajvansh</h3>
                <p className="about-team-role">Co-founder · AI &amp; Systems</p>
                <p className="about-team-bio">
                  Manav leads the technical side of DaizyAI — designing the AI workflows, voice configurations, and system integrations that power each deployment. With a deep background in artificial intelligence and automation architecture, he ensures every receptionist we build doesn&apos;t just work, but works intelligently: handling edge cases, adapting to context, and improving over time.
                </p>
              </div>
            </div>

            {/* Prem */}
            <div className="about-team-card">
              <div className="about-team-info">
                <h3 className="about-team-name">Prem Vaniya</h3>
                <p className="about-team-role">Co-founder · Advertising &amp; Acquisition</p>
                <p className="about-team-bio">
                  Prem runs and manages the paid advertising side of DaizyAI — building, optimising, and scaling Meta Ads campaigns that keep a steady flow of qualified enquiries coming in. He ensures every pound of ad spend translates into real conversations, so the AI systems our clients rely on are never short of calls to handle.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2 className="about-cta-headline">
            Ready to stop missing calls?
          </h2>
          <p className="about-cta-desc">
            We&apos;d love to show you what DaizyAI can do for your specific business. Get in touch and we&apos;ll walk you through a live demo.
          </p>
          <div className="about-cta-actions">
            <a href="tel:+441234987233" className="cta-btn-primary">Call the Demo</a>
            <a href="mailto:daizyaiinfo@gmail.com" className="cta-btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
