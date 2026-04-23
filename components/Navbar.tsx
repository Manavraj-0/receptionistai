export default function Navbar() {
  return (
    <nav className="site-nav">
      <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-checkbox" hidden />

      <div className="container nav-container">

        {/* Brand */}
        <a href="/" className="brand">
          Daizy<span className="brand-accent">AI</span>
        </a>

        {/* Desktop Links — centred */}
        <div className="nav-links">
          <a href="/#how-it-works" className="nav-link">How It Works</a>
          <a href="/#features" className="nav-link">Features</a>
          <a href="/#use-cases" className="nav-link">Use Cases</a>
          <a href="/#pricing" className="nav-link">Pricing</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/#contact" className="nav-link">Contact</a>
        </div>

        {/* Right actions */}
        <div className="nav-actions">
          <a href="/#demo" className="nav-cta-outline">Try the Demo</a>

          {/* Hamburger — CSS-only toggle */}
          <label htmlFor="mobile-menu-toggle" className="mobile-menu-btn" aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="menu-icon-open">
              <line x1="3" y1="7" x2="21" y2="7"></line>
              <line x1="3" y1="17" x2="21" y2="17"></line>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="menu-icon-close">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </label>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <a href="/#how-it-works">How It Works</a>
        <a href="/#features">Features</a>
        <a href="/#use-cases">Use Cases</a>
        <a href="/#pricing">Pricing</a>
        <a href="/about">About</a>
        <a href="/#contact">Contact</a>
        <a href="/#demo" className="mobile-menu-cta">Try the Demo</a>
      </div>
    </nav>
  );
}
