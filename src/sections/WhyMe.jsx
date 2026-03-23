export default function WhyMe() {
  const linked = [
    {
      title: "PPT Thinking",
      tag: "02",
      text: "Decks, references, and brand docs",
      sub: "→ Decks & PPTs",
      href: "#selected-works",
      highlight: true,
    },
    {
      title: "Shoot Logic",
      tag: "03",
      text: "References and execution support",
      sub: "→ Outlet launches & UGC",
      href: "#selected-works",
      highlight: true,
    },
    {
      title: "Campaign Flow",
      tag: "04",
      text: "Rollout logic and social direction",
      sub: "→ Campaign launches",
      href: "#selected-works",
      highlight: true,
    },
  ];

  return (
    <section id="why-me" className="section fade-up">
      <p className="eyebrow">Why Me</p>
      <h2 className="section-title compact-title why-title-mobile">
        Sharp thinking,
        <br />
        real execution.
      </h2>

      <div className="why-grid-new">

        {/* ── Muted calendar card — no link ── */}
        <div className="why-card-muted">
          <span className="why-tag">01</span>
          <div className="why-card-body">
            <h3>Calendars</h3>
            <p>Content calendar systems — the backbone behind every consistent brand presence.</p>
            <span className="why-no-link">Foundation work · No direct link</span>
          </div>
        </div>

        {/* ── Divider label ── */}
        <div className="why-divider">
          <span>Click any card below to see the work</span>
        </div>

        {/* ── 3 linked cards ── */}
        <div className="why-linked-grid">
          {linked.map((card) => (
            <a key={card.title} href={card.href} className="why-card-linked">
              <span className="why-tag why-tag-gold">{card.tag}</span>
              <div className="why-card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className="why-follow">{card.sub}</span>
              </div>
              <span className="why-arrow">↗</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
