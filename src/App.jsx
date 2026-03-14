import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProofStrip from "./sections/ProofStrip";
import Manifesto from "./sections/Manifesto";
import WorkRail from "./sections/WorkRail";
import Capabilities from "./sections/Capabilities";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="site-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="bg-grid" />

      <Navbar />

      <main className="container">
        <Hero />
        <ProofStrip />
        <Manifesto />
        <WorkRail />
        <Capabilities />
        <Tools />
        <Contact />
      </main>
    </div>
  );
}