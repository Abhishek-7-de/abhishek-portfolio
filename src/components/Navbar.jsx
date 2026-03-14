export default function Navbar() {
  return (
    <header className="navbar container">
      <div className="nav-brand-wrap">
        <p className="eyebrow nav-kicker">Portfolio</p>
        <h1 className="brand">Abhishek De</h1>
      </div>

      <nav className="nav-links">
        <a href="#manifesto">Why Me</a>
        <a href="#work">Work</a>
        <a href="#services">Capabilities</a>
        <a href="#tools">Tools</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}