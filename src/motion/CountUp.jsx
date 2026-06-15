import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * One shared in-view counter. Replaces the multiple bespoke setInterval
 * counters that were scattered across sections. Eases out, supports decimals
 * and prefix/suffix, and respects reduced motion (jumps straight to value).
 */
export default function CountUp({
  to,
  duration = 1.6,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    if (reduced) {
      raf = requestAnimationFrame(() => setVal(to));
      return () => cancelAnimationFrame(raf);
    }
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setVal(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduced]);

  const display = decimals ? val.toFixed(decimals) : Math.floor(val);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
