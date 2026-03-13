export default function Navbar() {
  return (
    <header className="navbar container">
      <div>
        <p className="eyebrow">Portfolio</p>
        <h1 className="brand">Abhishek De</h1>
      </div>

      <nav className="nav-links">
        <a href="#overview">Overview</a>
        <a href="#services">What I Do</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}