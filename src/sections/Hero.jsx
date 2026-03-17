import profile from "../assets/profile.png";

const overallBrands = [
  "Chai Break",
  "CB Caters",
  "StoryBizz",
  "Turtle",
  "Make Calcutta Relevant Again",
];

const eventBrands = [
  "Comiccon India",
  "CCU Festival",
  "Bengal Premier League",
];

export default function Hero() {
  return (
    <section className="hero-vNext">
      <div className="hero-copy fade-up">
        <p className="eyebrow hero-kicker">Social-first creative operator</p>

        <h2 className="hero-name">Abhishek De</h2>

        <p className="hero-role-line">
          Content Creation • Hosting • Brand Strategy • Campaign Direction
        </p>

        <p className="hero-sub-vNext">
          Building campaigns, content worlds, and brand moments that feel sharp,
          current, and made to move.
        </p>

        <div className="hero-actions">
          <a href="#selected-works" className="btn btn-primary">
            Enter Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let’s Build
          </a>
        </div>
      </div>

      <div className="hero-visual fade-up delay-2">
        <div className="hero-image-shell">
          <img src={profile} alt="Abhishek De" className="hero-image-vNext" />

          <div className="floating-box overall-box">
            <span className="floating-box-title">Overall</span>
            <div className="floating-box-list">
              {overallBrands.map((item) => (
                <a key={item} href="#" className="mini-pill">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="floating-box events-box">
            <span className="floating-box-title">Events</span>
            <div className="floating-box-list">
              {eventBrands.map((item) => (
                <a key={item} href="#" className="mini-pill">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}