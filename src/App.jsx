import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Parallax from './components/Parallax/Parallax';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingIcon from './components/FloatingIcon/FloatingIcon';
function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
    
        <section>
          <Hero />
        </section>
      </div>

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
    </>
  );
}

export default App
