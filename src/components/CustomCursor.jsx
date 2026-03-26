// src/components/CustomCursor.jsx
// Custom cursor — morphs on hover: default dot → "VIEW" on cards → arrow on links
// Add <CustomCursor /> inside site-shell in App.jsx (desktop only)

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [label, setLabel] = useState("");
  const [variant, setVariant] = useState("default"); // default | view | link | drag

  useEffect(() => {
    if (window.innerWidth < 768) return; // desktop only

    let rafId;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Dot follows exactly
      if (dotRef.current) {
        dotRef.current.style.left = targetX + "px";
        dotRef.current.style.top = targetY + "px";
      }
    };

    // Smooth lerp for large cursor
    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = currentX + "px";
        cursorRef.current.style.top = currentY + "px";
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", move);

    // Hover detection
    const addHover = (selector, v, lbl) => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener("mouseenter", () => { setVariant(v); setLabel(lbl); });
        el.addEventListener("mouseleave", () => { setVariant("default"); setLabel(""); });
      });
    };

    // Re-run hover binding after React renders
    const bindHovers = () => {
      addHover(".selected-row, .selected-card", "view", "VIEW");
      addHover("a[href], .btn", "link", "");
      addHover(".hero-cutout-image, .m-cutout", "view", "DRAG");
      addHover(".brand-ticker-item, .logo-chip", "view", "TAP");
    };

    const timer = setTimeout(bindHovers, 600);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", move);
      clearTimeout(timer);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Small trailing dot */}
      <div ref={dotRef} className="cursor-dot" />

      {/* Large morphing cursor */}
      <div ref={cursorRef} className={`cursor-blob cursor-${variant}`}>
        {label && <span className="cursor-label">{label}</span>}
      </div>
    </>
  );
}
