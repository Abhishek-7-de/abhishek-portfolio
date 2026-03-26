export default function WhyMe() {
  const cards = [
    {
      num: "01",
      title: "Content Systems",
      desc: "Monthly calendars, rollout plans, and posting systems that keep brands consistent without burning out teams.",
      sub: "Foundation layer · Runs behind everything",
      muted: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="3" stroke="#c9a84c" strokeWidth="1.5"/>
          <line x1="3" y1="9" x2="21" y2="9" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>
          <rect x="6" y="2" width="2" height="4" rx="1" fill="#c9a84c"/>
          <rect x="16" y="2" width="2" height="4" rx="1" fill="#c9a84c"/>
          <line x1="7" y1="13" x2="11" y2="13" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="7" y1="17" x2="14" y2="17" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
        </svg>
      ),
    },
    {
      num: "02",
      title: "Research & Strategy",
      desc: "Brand research, campaign planning, strategy docs — the thinking before the doing.",
      sub: "→ See strategy work",
      href: "#selected-works",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#c9a84c" strokeWidth="1.5"/>
          <line x1="16" y1="16" x2="21" y2="21" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
          <line x1="8" y1="11" x2="14" y2="11" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="11" y1="8" x2="11" y2="14" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      num: "03",
      title: "Shoot & Content",
      desc: "On-ground execution — directing shoots, UGC, reels, influencer briefs.",
      sub: "→ See content work",
      href: "#selected-works",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="6" width="20" height="14" rx="3" stroke="#c9a84c" strokeWidth="1.5"/>
          <circle cx="12" cy="13" r="4" stroke="#c9a84c" strokeWidth="1.5"/>
          <circle cx="12" cy="13" r="1.5" fill="#c9a84c" opacity="0.6"/>
          <rect x="8" y="3" width="8" height="3" rx="1" stroke="#c9a84c" strokeWidth="1.2"/>
        </svg>
      ),
    },
    {
      num: "04",
      title: "Campaign Launches",
      desc: "End-to-end rollouts — from concept to live, across 35+ outlets.",
      sub: "→ See campaigns",
      href: "/campaigns/chai-break",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(201,168,76,0.1)"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="why-me" className="section fade-up">
      <p className="eyebrow">Why Me</p>
      <h2 className="section-title compact-title why-title-mobile">
        Sharp thinking,<br />real execution.
      </h2>
      <div className="why-mini-grid">
        {cards.map((card) => (
          <a
            key={card.num}
            href={card.href || undefined}
            className={`why-mini-card ${card.href ? "is-link" : ""} ${card.muted ? "is-muted" : ""}`}
            onClick={card.href && !card.href.startsWith('/') ? (e) => {
              e.preventDefault();
              document.querySelector(card.href)?.scrollIntoView({ behavior: 'smooth' });
            } : undefined}
          >
            <div className="why-mini-icon">
              {card.icon}
            </div>
            <div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className="why-follow">{card.sub}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
