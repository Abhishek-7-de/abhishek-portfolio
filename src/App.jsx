import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="site-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <Navbar />

      <main className="container">
        <Hero />
        <Overview />
        <Services />
        <Projects />
        <About />
        <Tools />
        <Contact />
      </main>
    </div>
  );
}