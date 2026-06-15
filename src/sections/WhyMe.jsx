import Reveal from "../motion/Reveal";

const Icon = {
  systems: (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
      <rect x="3" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
      <rect x="16" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  strategy: (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <line x1="18" y1="18" x2="25" y2="25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  content: (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 11.5 L17 14 L12 16.5 Z" fill="currentColor" />
      <line x1="3" y1="10.5" x2="25" y2="10.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  ),
  launch: (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <path d="M14 3 C19 7 20 13 18 19 L10 19 C8 13 9 7 14 3 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="14" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 19 L7 24 M18 19 L21 24 M14 19 L14 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const cards = [
  {
    icon: "systems",
    tag: "01",
    title: "Content Systems",
    text: "Monthly calendars, rollout plans, and posting systems that keep brands consistent without burning out teams.",
    note: "Foundation layer · runs behind everything",
    feature: true,
  },
  {
    icon: "strategy",
    tag: "02",
    title: "Research & Strategy",
    text: "Brand research, campaign planning, strategy docs — the thinking before the doing.",
    link: "See strategy work",
  },
  {
    icon: "content",
    tag: "03",
    title: "Shoot & Content",
    text: "On-ground execution — directing shoots, UGC, reels, and influencer briefs.",
    link: "See content work",
  },
  {
    icon: "launch",
    tag: "04",
    title: "Campaign Launches",
    text: "End-to-end rollouts — from concept to live, across 35+ outlets.",
    link: "See campaigns",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="sec whyme">
      <Reveal className="sec-head">
        <span className="sec-eyebrow">Why Me</span>
        <h2 className="sec-title">
          Sharp thinking,
          <br />
          real execution.
        </h2>
      </Reveal>

      <div className="why-grid">
        {cards.map((card, i) => {
          const Tag = card.link ? "a" : "div";
          return (
            <Reveal
              key={card.title}
              as={Tag}
              delay={i * 0.08}
              y={26}
              className={`why-card ${card.feature ? "why-card-feature" : ""} ${card.link ? "why-card-link" : ""}`}
              {...(card.link ? { href: "#selected-works" } : {})}
            >
              <div className="why-card-top">
                <span className="why-card-icon">{Icon[card.icon]}</span>
                <span className="why-card-tag">{card.tag}</span>
              </div>
              <div className="why-card-body">
                <h3 className="why-card-title">{card.title}</h3>
                <p className="why-card-text">{card.text}</p>
              </div>
              {card.link ? (
                <span className="why-card-cta">
                  {card.link}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : (
                <span className="why-card-note">{card.note}</span>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
