import { useState } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import navLogo from "./assets/logo.svg";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      <DotPattern
        width={25}
        height={25}
        x={0}
        y={0}
        cx={2}
        cy={2}
        cr={1}
        glow={false}
        className={cn("absolute inset-0 w-full h-full opacity-50")}
      />

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 shadow-lg z-50">
        <a href="#home" className="flex items-center space-x-2 text-white">
          <img src={navLogo} alt="Logo" className="h-10" />
          <h2 className="text-xl font-bold">Sanjay Raja S</h2>
        </a>

        {/* Hamburger Menu */}
        <div className="md:hidden cursor-pointer" onClick={handleBurgerClick}>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="md:flex space-x-6 hidden font-medium">
          <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu (Below Navbar) */}
      {isOpen && (
        <ul className="md:hidden fixed top-[60px] left-0 w-full bg-gray-800 shadow-lg z-40 flex flex-col items-center p-4 space-y-4 font-medium">
          <li><a href="#home" onClick={handleBurgerClick} className="hover:text-gray-300">Home</a></li>
          <li><a href="#experience" onClick={handleBurgerClick} className="hover:text-gray-300">Experience</a></li>
          <li><a href="#projects" onClick={handleBurgerClick} className="hover:text-gray-300">Projects</a></li>
          <li><a href="#skills" onClick={handleBurgerClick} className="hover:text-gray-300">Skills</a></li>
          <li><a href="#contact" onClick={handleBurgerClick} className="hover:text-gray-300">Contact</a></li>
        </ul>
      )}

      {/* Page Sections */}
      <main className="pt-16">
        <section id="home" className="relative z-10 scroll-mt-16"><Home /></section>
        <section id="experience" className="relative z-10 scroll-mt-16"><Experience /></section>
        <section id="projects" className="relative z-10 scroll-mt-16"><Projects /></section>
        <section id="skills" className="relative z-10 scroll-mt-16"><Skills /></section>
        <section id="contact" className="relative z-10 scroll-mt-16"><Contact /></section>
        <Footer />
      </main>
    </div>
  );
};

export default App;