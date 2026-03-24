import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProofStrip from "./sections/ProofStrip";
import PhotoStrip from "./sections/PhotoStrip";
import WhyMe from "./sections/WhyMe";
import SelectedWorks from "./sections/SelectedWorks";
import Capabilities from "./sections/Capabilities";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import IntroFlip from "./components/IntroFlip";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="site-shell">
      <IntroFlip />
      <Chatbot />

      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="bg-grid" />

      <Navbar />

      <main className="container">
        <Hero />
        <ProofStrip />
        <PhotoStrip />
        <WhyMe />
        <SelectedWorks />
        <Capabilities />
        <Tools />
        <Contact />
      </main>
    </div>
  );
}
