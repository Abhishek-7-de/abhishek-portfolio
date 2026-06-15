import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const seen = () =>
  typeof sessionStorage !== "undefined" && sessionStorage.getItem("introShown") === "1";

/**
 * One-per-session intro: a counter ticks 0→100, then the curtain lifts to
 * reveal the hero. Skipped entirely on revisits and for reduced motion.
 */
export default function PageLoader() {
  const reduced = usePrefersReducedMotion();
  const lenis = useLenis();
  // Skip the intro entirely on revisits and for reduced motion (decided at init,
  // so we never setState inside the effect just to flip the flag).
  const [done, setDone] = useState(() => seen() || reduced);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (done) return;

    lenis?.stop();

    let raf;
    const start = performance.now();
    const dur = 1100;
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      setCount(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const end = setTimeout(() => {
      sessionStorage.setItem("introShown", "1");
      setDone(true);
    }, 1600);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(end);
    };
  }, [done, reduced, lenis]);

  // Restore scrolling once the curtain is gone.
  useEffect(() => {
    if (done) lenis?.start();
  }, [done, lenis]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-inner">
            <motion.span
              className="loader-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Abhishek De
            </motion.span>
            <span className="loader-role">
              Brand Strategist · Content Creator · Host
            </span>
          </div>
          <span className="loader-count">{count}</span>
          <div className="loader-bar">
            <motion.div
              className="loader-bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
