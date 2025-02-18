import React, { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import nav_logo from './assets/logo.svg';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div className="nav_logo">
        <a href="#home" style={{ color: 'white', textDecoration: 'none' }} className='nav_logo_home'>
          <img src={nav_logo} alt="" className="nav_logo_image" />
        <h2>
            Home
        </h2>
        </a>
        </div>
        <div className={`burger ${isOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;