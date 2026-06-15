import { motion } from "motion/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Masked line-by-line headline reveal. Each line sits in an overflow-hidden
 * box; the inner span slides up from below.
 *
 * The trigger is observed on the UNCLIPPED parent (via variants), not on the
 * moving inner spans — observing the clipped spans would never fire because
 * they start at ~0 visible area. `inView={false}` animates on mount instead
 * (used for the hero, which is always above the fold).
 */
export default function SplitText({
  lines,
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.09,
  duration = 0.9,
  once = true,
  amount = 0.3,
  inView = true,
  style,
  ...rest
}) {
  const reduced = usePrefersReducedMotion();
  const items = lines || (Array.isArray(text) ? text : [text]);
  const Container = motion[as] || motion.span;

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} style={style} {...rest}>
        {items.map((line, i) => (
          <span key={i} style={{ display: "block" }}>
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const lineVariant = {
    hidden: { y: "115%" },
    visible: { y: "0%", transition: { duration, ease: EASE } },
  };

  const triggerProps = inView
    ? { whileInView: "visible", viewport: { once, amount } }
    : { animate: "visible" };

  return (
    <Container
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      {...triggerProps}
      {...rest}
    >
      {items.map((line, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}
        >
          <motion.span
            variants={lineVariant}
            style={{ display: "block", willChange: "transform" }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Container>
  );
}
