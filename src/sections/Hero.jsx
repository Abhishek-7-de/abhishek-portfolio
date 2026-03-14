import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero-v6">
      <div className="hero-copy fade-up">
        <p className="eyebrow hero-kicker">
          Social-first strategist • campaign builder • brand thinker
        </p>

        <h2 className="hero-title-v6">
          I build <span className="text-highlight">cultural momentum</span> for
          brands that want to be felt, not just seen.
        </h2>

        <p className="hero-sub-v6">
          Strategy. Storytelling. Launches. Content systems.
          Built to stop the scroll and stay in memory.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let’s Connect
          </a>
        </div>
      </div>

      <div className="hero-visual fade-up delay-2">
        <div className="hero-image-shell">
          <img src={profile} alt="Abhishek De" className="hero-image-v6" />

          <div className="floating-tag tag-1">Creative + Strategy</div>
          <div className="floating-tag tag-2">Social-first thinking</div>
          <div className="floating-tag tag-3">Brand momentum</div>
        </div>
      </div>
    </section>
  );
}