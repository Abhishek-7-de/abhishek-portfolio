import { useState, useEffect } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#selected-works" },
    { label: "Why Me", href: "#why-me" },
    { label: "Process", href: "#capabilities" },
    { label: "Tools", href: "#tools" },
    { label: "Contact", href: "#contact" },
  ];

  const close = () => setNavOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-brand-wrap">
          <p className="eyebrow nav-kicker">Portfolio</p>
          <div className="brand-row">
            <h2 className="brand">Abhishek De</h2>
          </div>
        </div>

        <div className="nav-right">
          {/* Desktop links */}
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div>

          <a href="/cv.pdf" className="cv-btn" download>Download CV</a>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setNavOpen(true)}
            aria-label="Open navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Side drawer overlay */}
      {navOpen && (
        <div className="side-nav-overlay" onClick={close} />
      )}

      {/* Side drawer */}
      <div className={`side-nav ${navOpen ? "side-nav-open" : ""}`}>
        <div className="side-nav-header">
          <span className="side-nav-brand">ABHISHEK DE</span>
          <button className="side-nav-close" onClick={close} aria-label="Close">✕</button>
        </div>

        <div className="side-nav-eyebrow">Brand Strategist · Content Creator · Host</div>

        <nav className="side-nav-links">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="side-nav-link"
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={close}
            >
              <span className="side-nav-num">0{i + 1}</span>
              <span>{l.label}</span>
              <span className="side-nav-arrow">→</span>
            </a>
          ))}
        </nav>

        <div className="side-nav-footer">
          <a href="mailto:abhishek7de@gmail.com" className="side-nav-contact">abhishek7de@gmail.com</a>
          <div className="side-nav-socials">
            <a href="https://www.instagram.com/abhishek7.exe" target="_blank" rel="noreferrer">IG</a>
            <a href="https://www.linkedin.com/in/abhishek-de-157819221" target="_blank" rel="noreferrer">LI</a>
          </div>
        </div>
      </div>
    </>
  );
}
