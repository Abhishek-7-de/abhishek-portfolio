import profile from "../assets/profile.png";

const brandTags = [
  { name: "Chai Break", href: "/brands/chai-break", cls: "pill-1" },
  { name: "CB Caters", href: "/brands/cb-caters", cls: "pill-2" },
  { name: "Clever Mind Media", href: "/brands/clever-mind-media", cls: "pill-3" },
  { name: "StoryBizz Media", href: "/brands/storybizz-media", cls: "pill-4" },
  { name: "Bengal Premier League", href: "/brands/bengal-premier-league", cls: "pill-5" },
  { name: "CCU Festival", href: "/brands/ccu-festival", cls: "pill-6" },
  { name: "Wasooli Bhaiyya", href: "/brands/wasooli-bhaiyya", cls: "pill-7" },
  { name: "MCRA Podcast", href: "/brands/mcra-podcast", cls: "pill-8" },
];

export default function Hero() {
  return (
    <section className="hero-v10">
      <div className="hero-copy fade-up">
        <p className="eyebrow hero-kicker">
          Social-first strategist • campaign builder • brand thinker
        </p>

        <h2 className="hero-title-v10">
          I build <span className="text-highlight">cultural momentum</span>
          <br />
          for brands that want to be
          <br />
          <span className="text-outline">felt</span>, not just seen.
        </h2>

        <p className="hero-sub-v10">
          Strategy, storytelling, campaign worlds, and content systems built to
          stop the scroll, sharpen identity, and stay in memory.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            Enter Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let’s Build
          </a>
        </div>
      </div>

      <div className="hero-visual fade-up delay-2">
        <div className="hero-image-shell">
          <img src={profile} alt="Abhishek De" className="hero-image-v10" />

          <div className="floating-tag tag-1">Creative + Strategy</div>
          <div className="floating-tag tag-2">Campaign Brain</div>
          <div className="floating-tag tag-3">Social-first</div>

          {brandTags.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              className={`brand-pill-link ${brand.cls}`}
            >
              {brand.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}