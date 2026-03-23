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
      icon: "🔍",
      color: "#c9a84c",
    },
    {
      step: "02",
      title: "Plan",
      text: "Calendar logic, hero-hub-hygiene, and where attention should go.",
      icon: "🗺️",
      color: "#b8945a",
    },
    {
      step: "03",
      title: "Reference",
      text: "Moodboards, briefs, examples, and sharp context before execution.",
      icon: "📐",
      color: "#a08040",
    },
    {
      step: "04",
      title: "Execute",
      text: "Rollout, content, deck support, and on-ground or digital delivery.",
      icon: "🚀",
      color: "#c9a84c",
    },
  ];

  return (
    <section id="capabilities" className="section fade-up">
      <p className="eyebrow">Capabilities</p>
      <h2 className="section-title compact-title cap-title-mobile">
        Numbers, process,
        <br />and proof.
      </h2>

      <div className="stats-grid-mobile">
        {stats.map((item) => (
          <div key={item.label} className="stat-card-mobile">
            <span className="stat-number-mobile">{item.number}</span>
            <span className="stat-label-mobile">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Process tree */}
      <div className="process-tree">
        <div className="process-tree-line" />
        {process.map((item, i) => (
          <div key={item.step} className={`process-node ${i % 2 === 0 ? "node-left" : "node-right"}`}>
            {/* Connector dot on the line */}
            <div className="process-node-dot" style={{ background: item.color }} />

            <div className="process-node-card" style={{ borderColor: `${item.color}30` }}>
              <div className="process-node-header">
                <span className="process-node-icon">{item.icon}</span>
                <span className="process-node-step" style={{ color: item.color }}>{item.step}</span>
              </div>
              <h3 className="process-node-title">{item.title}</h3>
              <p className="process-node-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
