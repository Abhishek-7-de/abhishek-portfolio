import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "../motion/Reveal";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const experiences = [
  { src: "/photos/photo-1.jpg", title: "Hosting a Live Event", label: "College fest — solo on stage", tag: "Host", year: "2024" },
  { src: "/photos/photo-2.jpg", title: "Panel at Buzz Confluence", label: "Buzz Confluence '24 — moderating the panel", tag: "Host", year: "2024" },
  { src: "/photos/photo-3.jpg", title: "BPL Field Interview", label: "Bengal Premier League — player interaction", tag: "Interview", year: "2025" },
  { src: "/photos/photo-4.jpg", title: "Voxpop at ComicCon", label: "Street interviews with cosplayers", tag: "Voxpop", year: "2025" },
  { src: "/photos/photo-5.jpg", title: "BTS with Tridha Choudhury", label: "Behind-the-scenes content creation", tag: "BTS", year: "2025" },
  { src: "/photos/photo-6.jpg", title: "Stage with Akash Gupta", label: "Live event — crowd moment with the comedian", tag: "Live", year: "2025" },
];

export default function PhotoStrip() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);

  const [distance, setDistance] = useState(0);
  const [vh, setVh] = useState(800);
  const [pinned, setPinned] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const calc = () => {
      const canPin = window.innerWidth >= 768 && !reduced;
      if (canPin && trackRef.current && stickyRef.current) {
        const d = trackRef.current.scrollWidth - stickyRef.current.clientWidth;
        setDistance(Math.max(0, d));
        setVh(window.innerHeight);
        setPinned(d > 0);
      } else {
        setDistance(0);
        setPinned(false);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="field"
      id="field"
      style={pinned ? { height: distance + vh } : undefined}
    >
      <div
        ref={stickyRef}
        className={`field-sticky ${pinned ? "field-pinned" : ""}`}
      >
        <Reveal className="sec-head field-head" amount={0.4}>
          <span className="sec-eyebrow">In the Field</span>
          <h2 className="sec-title">Where the work happened.</h2>
        </Reveal>

        <motion.div
          ref={trackRef}
          className="field-track"
          style={pinned ? { x } : undefined}
        >
          {experiences.map((item, i) => (
            <article className="field-card" key={i}>
              <div className="field-card-media">
                <img src={item.src} alt={item.title} loading="lazy" />
                <span className="field-card-tag">{item.tag}</span>
              </div>
              <div className="field-card-info">
                <span className="field-card-year">{item.year}</span>
                <h3 className="field-card-title">{item.title}</h3>
                <p className="field-card-label">{item.label}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
