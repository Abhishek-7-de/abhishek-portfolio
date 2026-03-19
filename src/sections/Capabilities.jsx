export default function Capabilities() {
  const stats = [
    { number: "10+", label: "Campaign launches" },
    { number: "30+", label: "Voxpop, UGC & outlet content" },
    { number: "50+", label: "Decks, refs & brand docs" },
    { number: "Multi", label: "Brands, outlets & event formats" },
  ];

  const process = [
    {
      step: "01",
      title: "Understand",
      text: "Market, audience, rivals, and what people actually care about.",
    },
    {
      step: "02",
      title: "Plan",
      text: "Calendar logic, hero-hub-hygiene, and where attention should go.",
    },
    {
      step: "03",
      title: "Reference",
      text: "Moodboards, briefs, examples, and sharp context before execution.",
    },
    {
      step: "04",
      title: "Execute",
      text: "Rollout, content, deck support, and on-ground or digital delivery.",
    },
  ];

  return (
    <section id="capabilities" className="section fade-up">
      <p className="eyebrow">Capabilities</p>
      <h2 className="section-title compact-title cap-title-mobile">
        Numbers, process,
        <br />
        and proof.
      </h2>

      <div className="stats-grid-mobile">
        {stats.map((item) => (
          <div key={item.label} className="stat-card-mobile">
            <span className="stat-number-mobile">{item.number}</span>
            <span className="stat-label-mobile">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="process-grid-mobile">
        {process.map((item) => (
          <div key={item.step} className="process-card-mobile">
            <span className="process-step-mobile">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}