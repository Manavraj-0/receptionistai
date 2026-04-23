'use client';

import { useState, useEffect } from 'react';

export default function GetStartedForm() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  // Listen for plan selection from pricing buttons
  useEffect(() => {
    function handlePlanSelect(e: CustomEvent) {
      setSelectedPlan(e.detail.plan);
    }
    window.addEventListener('selectPlan', handlePlanSelect as EventListener);
    return () => window.removeEventListener('selectPlan', handlePlanSelect as EventListener);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          plan: selectedPlan,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      setSelectedPlan('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit} id="get-started-form">
      <div className="cta-form-grid">
        <div className="cta-form-group">
          <label htmlFor="cta-name" className="cta-form-label">Full Name</label>
          <input
            id="cta-name"
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="cta-form-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="cta-form-group">
          <label htmlFor="cta-email" className="cta-form-label">Email</label>
          <input
            id="cta-email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="cta-form-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="cta-form-group">
          <label htmlFor="cta-phone" className="cta-form-label">Phone Number</label>
          <input
            id="cta-phone"
            type="tel"
            name="phone"
            placeholder="Enter your number"
            className="cta-form-input"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="cta-form-group">
          <label htmlFor="cta-business" className="cta-form-label">Business Name</label>
          <input
            id="cta-business"
            type="text"
            name="business"
            placeholder="Enter company name"
            className="cta-form-input"
            value={formData.business}
            onChange={handleChange}
          />
        </div>
        <div className="cta-form-group cta-form-group--full">
          <label htmlFor="cta-plan" className="cta-form-label">Plan</label>
          <select
            id="cta-plan"
            name="plan"
            className="cta-form-select"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            <option value="">Select a plan</option>
            <option value="Pilot">Pilot — £99 one-time + £49 onboarding</option>
            <option value="Starter">Starter — £299/month + £200 onboarding</option>
            <option value="Growth">Growth — £599/month + £400 onboarding</option>
            <option value="Scale">Scale — £999/month + £800 onboarding</option>
          </select>
        </div>
        <div className="cta-form-group cta-form-group--full">
          <label htmlFor="cta-message" className="cta-form-label">
            Anything we should know? <span className="cta-form-optional">(optional)</span>
          </label>
          <textarea
            id="cta-message"
            name="message"
            rows={3}
            placeholder="Tell us about your business, call volume, or any questions..."
            className="cta-form-input cta-form-textarea"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      {error && (
        <p className="cta-form-error">{error}</p>
      )}
      {submitted ? (
        <div className="cta-form-success">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Message sent — we&apos;ll be in touch shortly.</span>
        </div>
      ) : (
        <button type="submit" className="cta-form-submit" disabled={sending}>
          {sending ? 'Sending...' : (
            <>
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </>
          )}
        </button>
      )}
    </form>
  );
}
