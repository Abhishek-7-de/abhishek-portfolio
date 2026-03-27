import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProofStrip from "./sections/ProofStrip";
import PhotoStrip from "./sections/PhotoStrip";
import WhyMe from "./sections/WhyMe";
import SelectedWorks from "./sections/SelectedWorks";
import Capabilities from "./sections/Capabilities";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import Chatbot from "./components/Chatbot";
import CampaignPage from "./pages/CampaignPage";
import CVPage from "./pages/CVPage";

function Shell({ children }) {
  return (
    <div className="site-shell">
      <Chatbot />
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="bg-grid" />
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <Shell>
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
    </Shell>
  );
}

export default function App() {
  const path = window.location.pathname;

  if (path.startsWith("/campaigns/")) {
    return (
      <Shell>
        <main className="container"><CampaignPage /></main>
      </Shell>
    );
  }

  if (path === "/cv" || path === "/cv/") {
    return (
      <Shell>
        <main className="container"><CVPage /></main>
      </Shell>
    );
  }

  return <HomePage />;
}
