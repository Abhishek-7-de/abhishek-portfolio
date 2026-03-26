import { useEffect, useRef, useState } from "react";
import { selectedWorks } from "../data/selectedWorks";

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        let current = 0;
        const stepTime = Math.max(40, Math.floor(900 / value));
        const timer = setInterval(() => {
          current += 1;
          setCount(current);
          if (current >= value) clearInterval(timer);
        }, stepTime);
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="selected-number">{count}+</span>;
}

export default function SelectedWorks() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="selected-works" className="section section-works fade-up">

      {/* Koto-style section header */}
      <div className="works-header">
        <div className="works-header-left">
          <p className="eyebrow">Selected Works</p>
          <h2 className="section-title works-title">The Work.</h2>
        </div>
        <p className="works-header-desc">
          Campaigns, content, and brand strategy built to drive real results — not just impressions.
        </p>
      </div>

      {/* Koto-style full-bleed work list */}
      <div className="selected-list">
        {selectedWorks.map((item, index) => {
          const isOpen = openIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={item.title}
              id={`work-card-${index}`}
              className={`selected-row ${isOpen ? "selected-row-open" : ""} ${isHovered ? "selected-row-hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                type="button"
                className="selected-row-top"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {/* Index number */}
                <span className="selected-row-index">0{index + 1}</span>

                {/* Title block */}
                <div className="selected-row-title-block">
                  <h3 className="selected-row-title">{item.title}</h3>
                  <p className="selected-row-desc">{item.description}</p>
                </div>

                {/* Stat */}
                <div className="selected-row-stat">
                  <AnimatedNumber value={item.countTo} />
                  <span className="selected-row-stat-label">{item.statLabel || "results"}</span>
                </div>

                {/* Toggle arrow */}
                <span className={`selected-row-arrow ${isOpen ? "selected-row-arrow-open" : ""}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {/* Expandable drawer */}
              <div className={`selected-drawer selected-drawer-row ${isOpen ? "selected-drawer-open" : ""}`}>
                {item.links.length > 0 ? (
                  <div className="selected-links selected-links-row">
                    {item.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="selected-link-btn">
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="selected-empty">Links coming soon.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA like Koto */}
      <div className="works-footer">
        <a href="/campaigns/chai-break" className="works-all-link">
          See Full Campaign Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
