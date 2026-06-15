import { motion } from "motion/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * In-view reveal. Replaces the old global `.fade-up` (which animated on load).
 * Now reveals fire when the element scrolls into view, with optional stagger.
 */
export default function Reveal({
  children,
  as = "div",
  y = 28,
  x = 0,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className,
  style,
  ...rest
}) {
  const reduced = usePrefersReducedMotion();
  const Comp = motion[as] || motion.div;

  if (reduced) {
    const Plain = motion[as] || motion.div;
    return (
      <Plain className={className} style={style} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
