export default function Services() {
  const items = [
    {
      title: "Ideas built to travel",
      text: "Campaign concepts shaped for culture, audience behavior, and stronger recall.",
    },
    {
      title: "Content with shape",
      text: "Reels, launches, edits, and systems that feel intentional, not random.",
    },
    {
      title: "Positioning with edge",
      text: "Sharper voice, stronger identity, and communication that lands with clarity.",
    },
  ];

  return (
    <section id="services" className="services-v6 fade-up">
      <div className="services-head">
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-title compact-title">
          Less template.
          <br />
          More point of view.
        </h2>
      </div>

      <div className="services-v6-grid">
        {items.map((item) => (
          <div key={item.title} className="service-v6-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}