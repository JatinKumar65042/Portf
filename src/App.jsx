import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ThreeDBackground from './components/3DBackground';
import Globe3D from './components/Globe3D';

function App() {
  return (
    <div className="app">
      <ThreeDBackground />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center gradient-text" style={{ marginBottom: '2rem' }}>Global Connection</h2>
            <Globe3D />
          </div>
        </section>
      </main>
      <Contact />
    </div>
  );
}

export default App;
