export default function Capabilities() {
  const items = [
    {
      title: "Ideas built to travel",
      text: "Campaign concepts shaped for culture, audience behavior, and stronger recall.",
    },
    {
      title: "Content with shape",
      text: "Reels, edits, shoots, and systems that feel intentional, not random.",
    },
    {
      title: "Positioning with edge",
      text: "Sharper voice, stronger identity, and communication that lands with clarity.",
    },
  ];

  return (
    <section id="capabilities" className="section fade-up">
      <p className="eyebrow">Capabilities</p>
      <h2 className="section-title compact-title">
        Less noise.
        <br />
        More point of view.
      </h2>

      <div className="cap-grid">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`cap-card ${index === 0 ? "cap-large" : ""}`}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}