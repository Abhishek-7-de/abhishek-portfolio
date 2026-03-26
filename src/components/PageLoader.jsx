// src/components/PageLoader.jsx
// Cinematic page entrance — black overlay wipes up on load
// Add <PageLoader /> at the top of App.jsx inside site-shell

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [phase, setPhase] = useState("entering"); // entering → revealing → done

  useEffect(() => {
    // Phase 1: show loader for 800ms
    const t1 = setTimeout(() => setPhase("revealing"), 800);
    // Phase 2: wipe animation completes at 1.6s, unmount
    const t2 = setTimeout(() => setPhase("done"), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`page-loader ${phase === "revealing" ? "page-loader-reveal" : ""}`}>
      <div className="page-loader-inner">
        <div className="page-loader-name">
          <span className="pl-first">Abhishek</span>
          <span className="pl-last">De</span>
        </div>
        <div className="page-loader-bar">
          <div className="page-loader-progress" />
        </div>
        <span className="pl-role">Brand Strategist · Content Creator</span>
      </div>
    </div>
  );
}
