import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioArchiveImg from "../assets/portfolio_archive.png"; // Project preview image
import htmlIcon from "../assets/skills/html.svg"; // HTML icon
import cssIcon from "../assets/skills/css.svg"; // CSS icon
import javascriptIcon from "../assets/skills/javascript.svg"; // JavaScript icon

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
    previewImg: portfolioArchiveImg,
    langs: [
      { name: "HTML", icon: <img src={htmlIcon} alt="HTML" className="w-6 h-6" /> },
      { name: "CSS", icon: <img src={cssIcon} alt="CSS" className="w-6 h-6" /> },
      { name: "JavaScript", icon: <img src={javascriptIcon} alt="JavaScript" className="w-6 h-6" /> },
    ],
    description:
      "A responsive and animated portfolio website showcasing skills in HTML, CSS, and JavaScript, optimized for all device types.",
    projectLink: "https://sanjayraja.netlify.app/",
    sourceLink: "https://github.com/sanjayraajaa/Personal_Portfolio",
  },
];

const Projects = () => {
  return (
    <section className="py-16  text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="space-y-8 mx-2 sm:mx-4 md:mx-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="rounded-lg shadow-md bg-gray-800 overflow-hidden hover:scale-102 transition-transform duration-300 w-full min-h-[350px]"
            >
              <div className="flex flex-col md:flex-row items-center justify-between p-6 space-y-6 md:space-y-0 md:space-x-6">
                {/* Left side: Image */}
                <div className="flex-shrink-0 w-full md:w-2/5 h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden">
                  <img
                    src={project.previewImg}
                    alt={`${project.projectName} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right side: Content and Buttons */}
                <div className="flex-grow md:pl-6 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2">{project.projectName}</h3>
                  <div className="flex gap-3 justify-center md:justify-start mb-4">
                    {project.langs.map((lang) => (
                      <span key={lang.name} title={lang.name} className="text-xl">
                        {lang.icon}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mb-4">{project.description}</p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base">
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button className="border border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-md text-base">
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