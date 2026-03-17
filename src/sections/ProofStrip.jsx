export default function ProofStrip() {
  const items = [
    "Built Across",
    "Launch Rollouts",
    "Brand Storytelling",
    "Content Systems",
    "Social-first Strategy",
    "Creative Direction",
    "Campaign Thinking",
    "Culture-led Execution",
  ];

  return (
    <section className="proof-strip fade-up">
      <div className="marquee">
        <div className="marquee-track">
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