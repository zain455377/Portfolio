
import './App.css';
import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ResumeButton from './components/ResumeButton';
import SocialLinks from './components/SocialLinks';
import ThemeToggle from './components/ThemeToggle';
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
function App() {

    useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <>
    <div className="scroll-smooth">
      <Navbar/>
      <ThemeToggle />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <ResumeButton />
      <Contact />
      <SocialLinks />
      <ScrollToTop /> 
      </div>
    </>
  );
}

export default App;