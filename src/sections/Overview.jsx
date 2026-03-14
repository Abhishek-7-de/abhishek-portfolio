export default function Overview() {
  const stats = [
    { number: "Brand-first", label: "Campaign thinking built for recall" },
    { number: "Social-led", label: "Made for how people actually engage" },
    { number: "Execution-ready", label: "Strategy translated into content and rollout" },
  ];

  return (
    <section id="overview" className="section fade-up">
      <p className="eyebrow">Overview</p>
      <h2 className="section-title compact-title">
        Clear thinking.
        <br />
        <span className="text-highlight">High-impact execution.</span>
      </h2>

      <div className="overview-grid">
        {stats.map((item) => (
          <div key={item.label} className="card overview-card">
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}