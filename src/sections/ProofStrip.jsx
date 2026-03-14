export default function ProofStrip() {
  const items = [
    "Launch Rollouts",
    "Brand Storytelling",
    "Content Systems",
    "Social-first Strategy",
    "Creative Direction",
    "Campaign Thinking",
    "Culture-led Execution",
    "Scroll-stopping Ideas",
  ];

  return (
    <section className="proof-strip fade-up">
      <div className="proof-label">Built across</div>

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