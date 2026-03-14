export default function Capabilities() {
  const items = [
    {
      title: "Ideas built to travel",
      text: "Campaign concepts shaped for culture, audience behavior, and stronger recall.",
      size: "large",
    },
    {
      title: "Content with shape",
      text: "Reels, edits, launches, and systems that feel intentional, not random.",
      size: "small",
    },
    {
      title: "Positioning with edge",
      text: "Sharper voice, stronger identity, and communication that lands with clarity.",
      size: "small",
    },
  ];

  return (
    <section id="capabilities" className="capabilities-v10 fade-up">
      <div className="services-head">
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-title compact-title">
          Less template.
          <br />
          More <span className="text-highlight">point of view.</span>
        </h2>
      </div>

      <div className="cap-grid">
        {items.map((item) => (
          <div
            key={item.title}
            className={`cap-card ${item.size === "large" ? "cap-large" : "cap-small"}`}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}