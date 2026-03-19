export default function WhyMe() {
  const cards = [
    {
      title: "Calendars",
      icon: "🗓️",
      text: "Content calendar systems",
      href: "#why-me",
      muted: true,
    },
    {
      title: "PPT Thinking",
      icon: "📊",
      text: "Decks, references, and brand docs",
      href: "#selected-works",
    },
    {
      title: "Shoot Logic",
      icon: "🎥",
      text: "References and execution support",
      href: "#selected-works",
    },
    {
      title: "Campaign Flow",
      icon: "🚀",
      text: "Rollout logic and social direction",
      href: "#selected-works",
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

      <div className="why-mini-grid">
        {cards.map((card) =>
          card.muted ? (
            <div key={card.title} className="why-mini-card is-muted">
              <span className="why-mini-icon">{card.icon}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ) : (
            <a key={card.title} href={card.href} className="why-mini-card is-link">
              <span className="why-mini-icon">{card.icon}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
}