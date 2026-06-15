import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { selectedWorks } from "../data/selectedWorks";
import Reveal from "../motion/Reveal";
import CountUp from "../motion/CountUp";

const units = ["campaigns", "content pieces", "decks & docs"];

export default function SelectedWorks() {
  const [open, setOpen] = useState(0);

  return (
    <section id="selected-works" className="sec works">
      <Reveal className="sec-head sec-head-row">
        <div>
          <span className="sec-eyebrow">Selected Works</span>
          <h2 className="sec-title">The Work.</h2>
        </div>
        <p className="sec-lead">
          Campaigns, content, and brand strategy built for real results — not
          just impressions.
        </p>
      </Reveal>

      <div className="works-list">
        {selectedWorks.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              y={20}
              className={`work-row ${isOpen ? "work-row-open" : ""}`}
            >
              <button
                type="button"
                className="work-row-head"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="work-row-index">0{i + 1}</span>
                <span className="work-row-titles">
                  <span className="work-row-title">{item.title}</span>
                  <span className="work-row-desc">{item.description}</span>
                </span>
                <span className="work-row-stat">
                  <CountUp to={item.countTo} suffix="+" className="work-row-stat-num" />
                  <span className="work-row-stat-label">{units[i] || "results"}</span>
                </span>
                <span className={`work-row-plus ${isOpen ? "open" : ""}`} aria-hidden="true" />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="work-drawer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="work-links">
                      {item.links && item.links.length > 0 ? (
                        item.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="work-link"
                          >
                            {l.label}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17 L17 7 M9 7 H17 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                        ))
                      ) : (
                        <p className="work-empty">Links dropping soon.</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="works-footer" delay={0.1}>
        <a href="/campaigns/chai-break" className="works-all">
          See Full Campaign Work
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Reveal>
    </section>
  );
}
