import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProofStrip from "./sections/ProofStrip";
import Brands from "./sections/Brands";
import PhotoStrip from "./sections/PhotoStrip";
import WhyMe from "./sections/WhyMe";
import SelectedWorks from "./sections/SelectedWorks";
import Capabilities from "./sections/Capabilities";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import Chatbot from "./components/Chatbot";
import PageLoader from "./components/PageLoader";
import CustomCursor from "./components/CustomCursor";
import AmbientBackground from "./components/AmbientBackground";
import AnchorScroll from "./components/AnchorScroll";
import CampaignPage from "./pages/CampaignPage";
import CVPage from "./pages/CVPage";

function HomePage() {
  return (
    <div className="site-shell">
      <PageLoader />
      <CustomCursor />
      <Chatbot />
      <AmbientBackground />
      <Navbar />
      <main className="container">
        <Hero />
        <ProofStrip />
        <Brands />
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

function SubPageShell({ children }) {
  return (
    <div className="site-shell">
      <CustomCursor />
      <Chatbot />
      <AmbientBackground />
      <main className="container">{children}</main>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname;

  let content;
  if (path.startsWith("/campaigns/chai-break")) {
    content = (
      <SubPageShell>
        <CampaignPage />
      </SubPageShell>
    );
  } else if (path === "/cv" || path === "/cv/") {
    content = (
      <SubPageShell>
        <CVPage />
      </SubPageShell>
    );
  } else {
    content = <HomePage />;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <AnchorScroll />
      {content}
    </ReactLenis>
  );
}
