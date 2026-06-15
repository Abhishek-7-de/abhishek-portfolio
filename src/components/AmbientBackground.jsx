import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * One calm ambient layer that replaces the old orb/grid/particle soup:
 *  - a single soft gold radial that lazily follows the cursor (the "live" feel)
 *  - a vignette for depth
 * Grain stays on body::before. Static + centered for reduced motion / touch.
 */
export default function AmbientBackground() {
  const reduced = usePrefersReducedMotion();

  const mx = useMotionValue(50);
  const my = useMotionValue(18);
  const sx = useSpring(mx, { stiffness: 40, damping: 25, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 40, damping: 25, mass: 0.6 });
  const glow = useMotionTemplate`radial-gradient(640px circle at ${sx}% ${sy}%, var(--gold-glow), transparent 62%)`;

  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth) * 100);
      my.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, mx, my]);

  return (
    <div className="ambient" aria-hidden="true">
      <motion.div
        className="ambient-glow"
        style={reduced ? undefined : { background: glow }}
      />
      <div className="ambient-vignette" />
    </div>
  );
}
