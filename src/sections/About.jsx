export default function About() {
  return (
    <section id="about" className="section about-v2 fade-up">
      <div className="card about-v2-card">
        <p className="eyebrow">About</p>
        <h2 className="section-title compact-title">
          I mix instinct, culture, and strategy.
        </h2>

        <p className="section-text short-text">
          I work across campaigns, content, launches, and brand storytelling.
          My style is visual, social-first, and built to make people stop.
        </p>
      </div>

      <div className="about-mini-grid">
        <div className="card mini-info-card">
          <h3>Social-first</h3>
          <p>Built for how people actually watch, react, and share.</p>
        </div>
        <div className="card mini-info-card">
          <h3>Culture-aware</h3>
          <p>Concepts shaped by mood, timing, trend, and context.</p>
        </div>
      </div>
    </section>
  );
}