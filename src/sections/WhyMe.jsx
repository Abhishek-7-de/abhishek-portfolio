export default function WhyMe() {
  const linked = [
    {
      title: "PPT Thinking",
      tag: "02",
      text: "Decks, references, and brand docs",
      sub: "→ Decks & PPTs",
      // mobile: scroll to 50+ card (index 1 in selectedWorks — adjust as needed)
      hrefMobile: "#selected-works",
      hrefDesktop: "#selected-works",
    },
    {
      title: "Shoot Logic",
      tag: "03",
      text: "References and execution support",
      sub: "→ Outlet launches & UGC",
      hrefMobile: "#selected-works",
      hrefDesktop: "#selected-works",
    },
    {
      title: "Campaign Flow",
      tag: "04",
      text: "Rollout logic and social direction",
      sub: "→ Campaign launches",
      hrefMobile: "#selected-works",
      hrefDesktop: "#selected-works",
    },
  ];

  // Mobile-specific scroll targets (scroll to exact card by index)
  const mobileTargets = [
    "work-card-1", // 50+ Decks → index 1
    "work-card-2", // 30+ Outlets → index 2
    "work-card-0", // 10+ Campaigns → index 0
  ];

  const handleMobileClick = (idx) => {
    const el = document.getElementById(mobileTargets[idx]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback — just go to section
      document.getElementById("selected-works")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="why-me" className="section fade-up">
      <p className="eyebrow">Why Me</p>
      <h2 className="section-title compact-title why-title-mobile">
        Sharp thinking,<br />real execution.
      </h2>

      <div className="why-grid-new">
        {/* Muted card */}
        <div className="why-card-muted">
          <span className="why-tag">01</span>
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
          {linked.map((card, idx) => (
            <a
              key={card.title}
              href={card.hrefDesktop}
              className="why-card-linked"
              onClick={(e) => {
                if (window.innerWidth < 768) {
                  e.preventDefault();
                  handleMobileClick(idx);
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
