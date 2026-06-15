import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";

const links = [
  { label: "Work", href: "#selected-works" },
  { label: "Why Me", href: "#why-me" },
  { label: "Process", href: "#capabilities" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // Lenis is the source of truth for scroll position (Framer's useScroll
  // direction is unreliable when Lenis owns scrolling). Hide on meaningful
  // downward movement, show on upward — tracked via last position, not
  // velocity (which reads ~0 on the settled callback fire).
  const lenis = useLenis(
    (inst) => {
      const y = inst.scroll;
      setScrolled(y > 24);
      if (open) return;
      if (y < 240) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      const delta = y - lastY.current;
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0);
        lastY.current = y;
      }
    },
    [open]
  );

  const toggle = (next) => {
    setOpen(next);
    if (next) lenis?.stop();
    else lenis?.start();
  };

  return (
    <>
      <motion.nav
        className={`nv ${scrolled ? "nv-scrolled" : ""}`}
        animate={{ y: hidden ? "-130%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#top" className="nv-brand">
          <span className="nv-kicker">Portfolio</span>
          <span className="nv-name">Abhishek De</span>
        </a>

        <div className="nv-right">
          <div className="nv-links">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="nv-link">
                {l.label}
              </a>
            ))}
          </div>
          <a href="/Abhishek-De-CV.pdf" className="nv-cv" download="Abhishek-De-CV.pdf">
            Download CV
          </a>
          <button
            className="nv-burger"
            onClick={() => toggle(true)}
            aria-label="Open navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nv-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="nv-panel"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="nv-panel-head">
                <span className="nv-panel-brand">Abhishek De</span>
                <button className="nv-close" onClick={() => toggle(false)} aria-label="Close">
                  <span />
                  <span />
                </button>
              </div>
              <span className="nv-panel-eyebrow">
                Brand Strategist · Content Creator · Host
              </span>
              <nav className="nv-panel-links">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    className="nv-panel-link"
                    onClick={() => toggle(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="nv-panel-num">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="nv-panel-foot">
                <a href="mailto:abhishek7de@gmail.com">abhishek7de@gmail.com</a>
                <div className="nv-panel-socials">
                  <a href="https://www.instagram.com/abhishek7.exe" target="_blank" rel="noreferrer">Instagram</a>
                  <a href="https://www.linkedin.com/in/abhishek-de-157819221" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
