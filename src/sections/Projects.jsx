export default function Projects() {
  const items = [
    {
      title: "Campaign Launches",
      text: "Launch films, teasers, rollouts, and social momentum.",
    },
    {
      title: "Brand Campaigns",
      text: "Festive, cultural, and audience-first concepts that travel.",
    },
    {
      title: "Content Direction",
      text: "Visual language, hooks, edits, and storytelling systems.",
    },
  ];

  return (
    <section id="work" className="section fade-up">
      <p className="eyebrow">Selected Work</p>
      <h2 className="section-title compact-title">
        Work section, ready to grow.
      </h2>

      <p className="section-text short-text">
        Later, you can plug in videos, reels, links, decks, and case studies here.
      </p>

      <div className="projects-v2-grid">
        {items.map((item, index) => (
          <div key={item.title} className="card project-v2-card">
            <span className="project-no">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}