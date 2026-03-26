// src/sections/WhyMe.jsx

export default function WhyMe() {
  const linked = [
    {
      title: "Research & Strategy",
      tag: "02",
      text: "Brand research, campaign planning, strategy docs — the thinking before the doing.",
      sub: "→ See strategy work",
      mobileTarget: "work-card-1",
      href: "#selected-works",
      icon: "🧠",
    },
    {
      title: "Shoot & Content",
      tag: "03",
      text: "On-ground execution — directing shoots, UGC, reels, influencer briefs.",
      sub: "→ See content work",
      mobileTarget: "work-card-2",
      href: "#selected-works",
      icon: "🎬",
    },
    {
      title: "Campaign Launches",
      tag: "04",
      text: "End-to-end rollouts — from concept to live, across 35+ outlets.",
      sub: "→ See campaigns",
      mobileTarget: "work-card-0",
      href: "#selected-works",
      icon: "🚀",
    },
  ];

  const handleMobileClick = (target) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else document.getElementById("selected-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-me" className="section fade-up">
      <p className="eyebrow">Why Me</p>
      <h2 className="section-title compact-title why-title-mobile">
        Sharp thinking,<br />real execution.
      </h2>

      <div className="why-grid-new">

        {/* Top stat card */}
        <div className="why-card-muted why-card-calendar">
          <div className="why-calendar-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="5" width="24" height="21" rx="4" stroke="#c9a84c" strokeWidth="1.5" fill="rgba(201,168,76,0.06)"/>
              <line x1="2" y1="11" x2="26" y2="11" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
              <rect x="7" y="2" width="2.5" height="6" rx="1.25" fill="#c9a84c"/>
              <rect x="18.5" y="2" width="2.5" height="6" rx="1.25" fill="#c9a84c"/>
              <rect x="7" y="15" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.7"/>
              <rect x="12" y="15" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.5"/>
              <rect x="17" y="15" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.3"/>
              <rect x="7" y="21" width="4" height="3" rx="1" fill="#c9a84c" opacity="0.4"/>
              <rect x="12" y="21" width="4" height="3" rx="1" fill="#c9a84c" opacity="0.3"/>
            </svg>
          </div>
          <div className="why-card-body">
            <h3>Content Systems</h3>
            <p>Monthly calendars, rollout plans, and posting systems that keep brands consistent without burning out teams.</p>
            <span className="why-no-link">Foundation layer · Runs behind everything</span>
          </div>
          <div className="why-card-badge">01</div>
        </div>

        <div className="why-divider">
          <span>Tap any card to jump to the work</span>
        </div>

        <div className="why-linked-grid">
          {linked.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="why-card-linked"
              onClick={(e) => {
                if (window.innerWidth < 768) {
                  e.preventDefault();
                  handleMobileClick(card.mobileTarget);
                }
              }}
            >
              <div className="why-card-icon-wrap">{card.icon}</div>
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
