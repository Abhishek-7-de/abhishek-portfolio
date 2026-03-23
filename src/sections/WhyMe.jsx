export default function WhyMe() {
  const linked = [
    {
      title: "PPT Thinking",
      tag: "02",
      text: "Decks, references, and brand docs",
      sub: "→ Decks & PPTs",
      mobileTarget: "work-card-1",
      href: "#selected-works",
    },
    {
      title: "Shoot Logic",
      tag: "03",
      text: "References and execution support",
      sub: "→ Outlet launches & UGC",
      mobileTarget: "work-card-2",
      href: "#selected-works",
    },
    {
      title: "Campaign Flow",
      tag: "04",
      text: "Rollout logic and social direction",
      sub: "→ Campaign launches",
      mobileTarget: "work-card-0",
      href: "#selected-works",
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

        {/* Calendar card — with icon, not clickable but visually strong */}
        <div className="why-card-muted">
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
            <h3>Calendars</h3>
            <p>Content calendar systems — the backbone behind every consistent brand presence.</p>
            <span className="why-no-link">Foundation work · No direct link</span>
          </div>
        </div>

        <div className="why-divider">
          <span>Click any card below to see the work</span>
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
