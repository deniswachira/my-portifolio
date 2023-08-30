
import "./App.css";
import About from "./components/About";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import License from "./components/License";
import Projects from "./components/Projects";

function App() {


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
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
