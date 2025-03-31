import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  projectName: string;
  previewImg: string;
  langs: { name: string; icon: JSX.Element }[];
  description: string;
  projectLink: string;
  sourceLink: string;
}

export const projects: Project[] = [
  {
    id: "portfolio-archive",
    projectName: "Personal Portfolio - Archive",
    previewImg: "src/assets/portfolio_archive.png",
    langs: [
      { name: "HTML", icon: <img src="src/assets/skills/html.svg" alt="HTML" className="w-5 h-5" /> },
      { name: "CSS", icon: <img src="src/assets/skills/css.svg" alt="CSS" className="w-5 h-5" /> },
      { name: "JavaScript", icon: <img src="src/assets/skills/javascript.svg" alt="JavaScript" className="w-5 h-5" /> }
    ],
    description:
      "A responsive and animated portfolio website showcasing skills in HTML, CSS, and JavaScript, optimized for all device types.",
    projectLink: "https://sanjayraja.netlify.app/",
    sourceLink: "https://github.com/sanjayraajaa/Personal_Portfolio",
  }
];

const Projects = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="space-y-6 mx-2 sm:mx-4 md:mx-6">
          {projects.map((project) => (
            <Card key={project.id} className="rounded-lg shadow-md bg-gray-800 overflow-hidden hover:scale-102 transition-transform duration-300">
              <div className="flex flex-col md:flex-row items-center justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
                {/* Left side: Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 h-36 sm:h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${project.previewImg})` }} />
                
                {/* Right side: Content and Buttons */}
                <div className="flex-grow md:pl-4 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-1">{project.projectName}</h3>
                  <div className="flex gap-2 justify-center md:justify-start mb-3">
                    {project.langs.map((lang) => (
                      <span key={lang.name} title={lang.name} className="text-xl">
                        {lang.icon}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs mb-3">{project.description}</p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button className="border border-white text-white hover:bg-white hover:text-gray-900 px-3 py-1 rounded-md text-sm">
                      <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;