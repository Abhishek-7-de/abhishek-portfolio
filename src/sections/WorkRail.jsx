export default function WorkRail() {
  const items = [
    {
      number: "01",
      title: "Campaign Launches",
      text: "Launch films, rollout thinking, teaser hooks, and social momentum.",
    },
    {
      number: "02",
      title: "Brand Campaign Worlds",
      text: "Festive, cultural, and audience-first campaign ideas built to travel.",
    },
    {
      number: "03",
      title: "Content Direction",
      text: "Visual language, sharper hooks, platform-native execution, and storytelling systems.",
    },
    {
      number: "04",
      title: "Work Section, Ready to Grow",
      text: "Later this rail can hold reels, campaign videos, decks, links, and case studies.",
    },
  ];

  return (
    <section id="work" className="work-rail-section fade-up">
      <div className="work-rail-left">
        <p className="eyebrow">Selected Work</p>
        <h2 className="work-rail-title">
          Work that’s built to move.
        </h2>
        <p className="work-rail-text">
          Not just visuals. Not just posts.
          Systems, launches, and campaigns designed to leave a mark.
        </p>
      </div>

      <div className="work-rail-right">
        {items.map((item) => (
          <article key={item.number} className="work-rail-card">
            <span className="work-no">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}