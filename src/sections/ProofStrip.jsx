export default function ProofStrip() {
  const items = [
    "Launch Rollouts",
    "Campaign Thinking",
    "Brand Storytelling",
    "Social-first Strategy",
    "Creative Direction",
    "Content Systems",
    "Culture-led Execution",
    "Scroll-stopping Ideas",
  ];

  return (
    <section className="proof-strip fade-up">
      <div className="proof-label">Trusted across</div>

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