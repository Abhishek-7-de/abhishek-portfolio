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
        const duration = 900;
        const stepTime = Math.max(40, Math.floor(duration / value));

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

  return (
    <span ref={ref} className="selected-number">
      {count}+
    </span>
  );
}

export default function SelectedWorks() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="selected-works" className="section fade-up">
      <p className="eyebrow">Selected Works</p>
      <h2 className="section-title compact-title">Click into the work.</h2>

      <div className="selected-grid">
        {selectedWorks.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.title}
              className={`selected-card ${isOpen ? "selected-card-open" : ""}`}
            >
              <button
                type="button"
                className="selected-card-top"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="selected-number-wrap">
                  <AnimatedNumber value={item.countTo} />
                </div>

                <div className="selected-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="drawer-toggle">
                    {isOpen ? "▲ Hide links" : "▼ Show links"}
                  </span>
                </div>
              </button>

              {/* Drawer — opens smoothly, scrollable if many links */}
              <div
                className={`selected-drawer ${isOpen ? "selected-drawer-open" : ""}`}
              >
                {item.links.length > 0 ? (
                  <div className="selected-links">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="selected-link-btn"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="selected-empty">
                    Links for this will be added here later.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
