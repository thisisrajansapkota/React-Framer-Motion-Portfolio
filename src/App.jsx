import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingIcon from "./components/FloatingIcon/FloatingIcon";

// Import your toggle icon SVGs
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";

function App() {
  // My default theme is dark mode
  const [darkMode, setDarkMode] = useState(true);
  const [modeName, setModeName] = useState("light");
  const [currentMode, setCurrentMode] = useState("dark");

  const handleClick = () => {
    // Toggle darkMode state
    setDarkMode(!darkMode);

    // Toggle currentMode state between "dark" and "light"
    setCurrentMode(darkMode ? "light" : "dark");

    // Toggle modeName state between "dark" and "light"
    setModeName(darkMode ? "dark" : "light");
  };

  return (
    <div className={`${currentMode}`}>
      <Navbar />
      <div className="toggle-container" onClick={handleClick}>
        {darkMode ? (
          <img src={sunIcon} alt="Light Mode" className="toggle-icon" />
        ) : (
          <img src={moonIcon} alt="Dark Mode" className="toggle-icon" />
        )}
      </div>
      <section>
        <Hero />
      </section>
      <section id="skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section>Portfolio</section>
      <section id="about">
        <Parallax type="about" />
      </section>
      <section className="aboutSec">
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
      <FloatingIcon />
    </div>
  );
}

export default App;
