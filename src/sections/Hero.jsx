import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero-v2">
      <div className="hero-left fade-up">
        <p className="eyebrow">
          Social Media Strategist • Brand Builder • Campaign Thinker
        </p>

        <h2 className="hero-title-v2">
          I build brands that feel current, sharp, and impossible to ignore.
        </h2>

        <p className="hero-text-v2">
          Strategy, storytelling, campaigns, content.
          Built for attention. Designed for recall.
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

      <div className="hero-right fade-up delay-2">
        <div className="hero-image-wrap">
          <img src={profile} alt="Abhishek De" className="hero-image" />
          <div className="image-badge badge-top">Creative + Strategy</div>
          <div className="image-badge badge-bottom">Marketing that moves</div>
        </div>
      </div>
    </section>
  );
}