import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProofStrip from "./sections/ProofStrip";
import Manifesto from "./sections/Manifesto";
import WorkRail from "./sections/WorkRail";
import Services from "./sections/Services";
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
        <ProofStrip />
        <Manifesto />
        <WorkRail />
        <Services />
        <Tools />
        <Contact />
      </main>
    </div>
  );
}