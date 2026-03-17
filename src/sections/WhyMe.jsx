export default function WhyMe() {
  const points = [
    "Content calendars and planning systems",
    "Creative briefs, decks, and PPT thinking",
    "Shoot references and execution support",
    "Campaign rollout logic and social direction",
  ];

  return (
    <section id="why-me" className="section fade-up">
      <p className="eyebrow">Why Me</p>
      <h2 className="section-title compact-title">
        Short, sharp,
        <br />
        and built for real work.
      </h2>

      <p className="section-text short-text">
        I don’t just make posts. I shape the idea, structure the communication,
        build the rollout, and make sure the work lands properly.
      </p>

      <div className="why-grid">
        {points.map((item) => (
          <div key={item} className="why-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}