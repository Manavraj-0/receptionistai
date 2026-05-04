export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-logo">Daizy<span className="brand-accent">AI</span></span>
          <p className="footer-tagline">Never miss a call. Never lose a lead.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="/#demo">Demo</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#features">Features</a>
          <a href="/#use-cases">Use Cases</a>
          <a href="/#pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/#faq">FAQ</a>
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} DaizyAI. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
