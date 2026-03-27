// src/sections/SelectedWorks.jsx

import { useEffect, useRef, useState } from "react";
import { selectedWorks } from "../data/selectedWorks";

function AnimatedNumber({ value, suffix = "+" }) {
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
        const steps = 45;
        const inc = value / steps;
        const timer = setInterval(() => {
          current = Math.min(current + inc, value);
          setCount(Math.floor(current));
          if (current >= value) clearInterval(timer);
        }, 28);
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="selected-number">{count}{suffix}</span>;
}

export default function SelectedWorks() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="selected-works" className="section section-works fade-up">

      {/* Header */}
      <div className="works-header">
        <div className="works-header-left">
          <p className="eyebrow">Selected Works</p>
          <h2 className="section-title works-title">The Work.</h2>
        </div>
        <p className="works-header-desc">
          Campaigns, content, and brand strategy built for real results — not just impressions.
        </p>
      </div>

      {/* Work list */}
      <div className="selected-list">
        {selectedWorks.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.title}
              id={`work-card-${index}`}
              className={`selected-row ${isOpen ? "selected-row-open" : ""}`}
            >
              {/* Clickable row header */}
              <button
                type="button"
                className="selected-row-top"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="selected-row-index">0{index + 1}</span>

                <div className="selected-row-title-block">
                  <h3 className="selected-row-title">{item.title}</h3>
                  <p className="selected-row-desc">{item.description}</p>
                </div>

                <div className="selected-row-stat">
                  <AnimatedNumber value={item.countTo} suffix="+" />
                  <span className="selected-row-stat-label">{item.statLabel || "results"}</span>
                </div>

                <span className={`selected-row-arrow ${isOpen ? "selected-row-arrow-open" : ""}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {/* Drawer — scrollable links */}
              <div className={`selected-drawer-row ${isOpen ? "selected-drawer-open" : ""}`}>
                <div className="selected-drawer-inner">
                  {item.links && item.links.length > 0 ? (
                    <div className="selected-links-scroll">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="selected-link-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="selected-empty">Content links dropping soon — check Instagram for now.</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="works-footer">
        <a href="/campaigns/chai-break" className="works-all-link">
          See Full Campaign Work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
