export default function ProofStrip() {
  const items = [
    "3+ Years Marketing",
    "5+ Campaign Launches",
    "3000+ Leads Generated",
    "Campaign Strategy",
    "Brand Positioning",
    "Content Direction",
    "Social-first Thinking",
  ];

  return (
    <section className="proof-strip">
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