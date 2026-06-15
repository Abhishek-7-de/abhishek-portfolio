import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import heroCutout from "../assets/hero-cutout.png";
import { topStripVideos } from "../data/heroMedia";
import SplitText from "../motion/SplitText";
import Reveal from "../motion/Reveal";
import Magnetic from "../motion/Magnetic";
import CountUp from "../motion/CountUp";
import HeroReels from "../components/HeroReels";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const stageRef = useRef(null);

  // Cursor parallax for the portrait (subtle, springy, the "alive" feel).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const imgX = useTransform(sx, (v) => v * 20);
  const imgY = useTransform(sy, (v) => v * 20);
  const glowX = useTransform(sx, (v) => v * -34);
  const glowY = useTransform(sy, (v) => v * -34);

  const onMove = (e) => {
    if (reduced) return;
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - (r.left + r.width / 2)) / r.width);
    py.set((e.clientY - (r.top + r.height / 2)) / r.height);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <Reveal className="hero-eyebrow" y={0} duration={0.9} amount={0.6}>
          <span className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">
            Brand Strategist · Content Creator · Host
          </span>
        </Reveal>

        <h1 className="hero-name">
          <SplitText
            as="span"
            className="hero-name-inner"
            lines={["Abhishek", "De"]}
            duration={1}
            stagger={0.12}
            delay={0.15}
            inView={false}
          />
        </h1>

        <div
          className="hero-stage"
          ref={stageRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <motion.div
            className="hero-stage-glow"
            style={reduced ? undefined : { x: glowX, y: glowY }}
          />
          <div className="hero-stage-ring" />
          <motion.img
            src={heroCutout}
            alt="Abhishek De"
            className="hero-portrait"
            style={reduced ? undefined : { x: imgX, y: imgY }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <Reveal as="p" className="hero-role" delay={0.4} y={22}>
          Social-first ideas, campaign direction, and content built to stop the
          scroll.
        </Reveal>

        <Reveal className="hero-cta-row" delay={0.52} y={20}>
          <Magnetic>
            <a href="#selected-works" className="hero-cta hero-cta-primary">
              <span>View Work</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="hero-cta hero-cta-ghost">
              Let's Build
            </a>
          </Magnetic>
        </Reveal>

        <Reveal className="hero-stats" delay={0.62} y={16}>
          <div className="hero-stat">
            <CountUp to={10} suffix="+" className="hero-stat-num" />
            <span className="hero-stat-label">Campaigns</span>
          </div>
          <span className="hero-stat-div" />
          <div className="hero-stat">
            <CountUp to={3.9} decimals={1} suffix="M" className="hero-stat-num" />
            <span className="hero-stat-label">Reel Views</span>
          </div>
          <span className="hero-stat-div" />
          <div className="hero-stat">
            <CountUp to={50} suffix="+" className="hero-stat-num" />
            <span className="hero-stat-label">Decks</span>
          </div>
        </Reveal>
      </div>

      <HeroReels videos={topStripVideos} />

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}
