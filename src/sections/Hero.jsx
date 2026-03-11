export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="pill">
          Social Media Manager • Brand Strategist • Campaign Builder
        </div>

        <h2 className="hero-title">
          I build campaigns people notice, share, and remember.
        </h2>

        <p className="hero-text">
          3+ years creating culture-led social campaigns, brand storytelling,
          and launch strategies for hospitality and lifestyle brands.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            See My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="stats">
          <div className="card stat-card">
            <strong>3+</strong>
            <span>Years Experience</span>
          </div>
          <div className="card stat-card">
            <strong>5+</strong>
            <span>Launch Campaigns</span>
          </div>
          <div className="card stat-card">
            <strong>3000+</strong>
            <span>Campaign Leads</span>
          </div>
        </div>
      </div>

      <div className="hero-panel card">
        <div className="mini-top">
          <span>Abhishek De</span>
          <span>2026 Portfolio</span>
        </div>

        <div className="hero-highlight">
          <p className="eyebrow">Signature</p>
          <h3>Strategy, storytelling, and scroll-stopping execution.</h3>
        </div>

        <div className="mini-grid">
          <div className="card mini-card">
            <p className="eyebrow">Focus</p>
            <h4>F&B + Lifestyle</h4>
            <p>
              Content systems, social campaigns, launch storytelling, and brand
              recall.
            </p>
          </div>

          <div className="card mini-card">
            <p className="eyebrow">Edge</p>
            <h4>Creative + Culture</h4>
            <p>
              Work built to feel current, native, and commercially sharp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}