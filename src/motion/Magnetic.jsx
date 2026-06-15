import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * Magnetic hover wrapper — the child eases toward the cursor while hovered and
 * springs back on leave. Used on CTAs and key interactive chips for the
 * "alive / real-time" feel. Disabled for reduced-motion and touch.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className,
  as = "div",
  ...rest
}) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 160, damping: 15, mass: 0.1 });

  const Comp = motion[as] || motion.div;

  if (reduced) {
    const Plain = as === "div" ? "div" : as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
