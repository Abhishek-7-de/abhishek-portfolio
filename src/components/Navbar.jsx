export default function Navbar() {
  return (
    <header className="navbar container">
      <div className="nav-brand-wrap">
        <p className="eyebrow nav-kicker">Portfolio</p>

        <div className="brand-row">
          <h1 className="brand">Abhishek De</h1>

          <a
            href="/Abhishek-De-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="cv-btn"
          >
            Download CV
          </a>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#why-me">Why Me</a>
        <a href="#selected-works">Selected Works</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#tools">Tools</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}