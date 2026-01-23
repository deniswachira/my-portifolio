
import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Community from "./components/Community";
import CommunityGallery from "./components/CommunityGallery";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import License from "./components/License";
import Projects from "./components/Projects";
import AnalyticsDashboard, { useAnalyticsDashboard } from "./components/AnalyticsDashboard";
import { initGA } from "./utils/analytics";
import { usePageTracking } from "./hooks/usePageTracking";

function App() {
  // Initialize Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  // Track page views and engagement
  usePageTracking("Denis Wachira - Portfolio");

  // Analytics dashboard (shows when typing "analytics")
  const { showDashboard } = useAnalyticsDashboard();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Home />
        <About />
        <Projects />
        <Experience />
        <License />
        <Community />
        <CommunityGallery />
        <Contact />
        <Footer />
      </div>

      {/* Hidden analytics dashboard */}
      <AnalyticsDashboard isVisible={showDashboard} />
    </>
  );
}

export default App;
