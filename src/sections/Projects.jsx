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
        Work that’s built to move.
      </h2>

      <p className="section-text short-text">
        This section is ready for reels, campaigns, decks, launch videos, and
        stronger case-study links later.
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