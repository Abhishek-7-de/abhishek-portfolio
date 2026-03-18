export default function ProofStrip() {
  const items = [
    "Content Creation",
    "Brand Strategy",
    "Campaign Direction",
    "Hosting",
    "Creative Briefs",
    "Decks & PPTs",
    "Shoot References",
    "Content Calendars",
    "Rollout Planning",
    "Social-first Thinking",
  ];

  return (
    <section className="proof-strip fade-up">
      <div className="marquee skills-marquee">
        <div className="marquee-track proof-track skills-track">
          {items.concat(items).map((item, index) => (
            <span key={index} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}