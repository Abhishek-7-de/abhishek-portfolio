import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * Dot + trailing ring cursor. The ring springs behind the dot and morphs to a
 * "VIEW" state over media/work elements. Pointer detection is delegated (one
 * mousemove listener) instead of binding every element. Desktop + fine-pointer
 * + non-reduced-motion only; otherwise the native cursor is used.
 */
// Device capability is stable for the session — read it once at init so we
// never setState inside the effect just to flip a flag.
const isCapable = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  window.innerWidth >= 768;

export default function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [capable] = useState(isCapable);
  const enabled = capable && !reduced;
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      if (t.closest(".work-row, .field-card, .reel, .hero-portrait")) {
        setVariant("view");
        setLabel("VIEW");
      } else if (t.closest("a, button, .tool-chip, .brand-chip")) {
        setVariant("link");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cur-dot" style={{ x, y }} aria-hidden="true" />
      <motion.div
        className={`cur-ring cur-${variant}`}
        style={{ x: ringX, y: ringY }}
        aria-hidden="true"
      >
        {label && <span className="cur-label">{label}</span>}
      </motion.div>
    </>
  );
}
