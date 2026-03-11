import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import "./styles.css";

export default function App() {
  return (
    <div className="page">

      <Navbar />

      <Hero />

      <Projects />

      <About />

      <Tools />

      <Contact />

    </div>
  );
}