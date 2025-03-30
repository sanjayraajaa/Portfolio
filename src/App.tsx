import { useState } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import navLogo from "./assets/logo.svg";

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
        className={cn(
          "absolute inset-0 w-full h-full opacity-100",
          `[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]`
        )}
      />
      <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-lg">
        <a href="#home" className="flex items-center space-x-2 text-white">
          <img src={navLogo} alt="Logo" className="h-10" />
          <h2 className="text-xl font-bold">Home</h2>
        </a>
        <div className="md:hidden" onClick={handleBurgerClick}>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </div>
        <ul className={`md:flex space-x-6 hidden font-medium`}>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 p-4 space-y-4 font-medium">
          <li><a href="#projects" onClick={handleBurgerClick}>Projects</a></li>
          <li><a href="#skills" onClick={handleBurgerClick}>Skills</a></li>
          <li><a href="#contact" onClick={handleBurgerClick}>Contact</a></li>
        </ul>
      )}

      <section id="home" className="p-6"><Home /></section>
      <section className="p-6"><Experience /></section>
      <section id="projects" className="p-6"><Projects /></section>
      <section id="skills" className="p-6"><Skills /></section>
      <section id="contact" className="p-6"><Contact /></section>
    </div>
  );
};

export default App;
