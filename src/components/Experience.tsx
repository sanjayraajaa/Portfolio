import frappeIcon from "../assets/skills/frappe.svg";
import erpnextIcon from "../assets/skills/erpnext.png";
import pythonIcon from "../assets/skills/python.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import mariadbIcon from "../assets/skills/mariadb.svg";
import syvasoftLogo from "../assets/personal/Syvasoft.jpg";

// Experiences array with skill names
const experiences = [
  {
    role: "Frappe Developer",
    company: "SyvaSoft Business Solutions",
    duration: "Aug 2024 - Present",
    location: "Madurai, India",
    description: [
      "Developing and customizing ERPNext modules for business process automation.",
      "Implementing backend solutions using Python and the Frappe Framework.",
      "Enhancing system performance and database optimization using MariaDB.",
      "Collaborating with clients to deliver tailored ERP solutions.",
      "Utilizing Business Intelligence (BI) tools to develop data-driven dashboards and analytics",
    ],
    skills: [
      { icon: frappeIcon, name: "Frappe" },
      { icon: erpnextIcon, name: "ERPNext" },
      { icon: pythonIcon, name: "Python" },
      { icon: javascriptIcon, name: "JavaScript" },
      { icon: mariadbIcon, name: "MariaDB" },
    ],
    logo: syvasoftLogo,
  },
];

const Experience = () => {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-10"> {/* Increased padding */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Experience
        </h2>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1e2939]/30 backdrop-blur-lg p-6 rounded-lg w-full max-w-5xl mx-auto mb-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-start md:items-start justify-start gap-6">
              
              {/* Logo Section */}
              <div className="w-full md:w-1/5 h-28 sm:h-36 md:h-40 rounded-lg overflow-hidden">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow text-left space-y-3">
              {/* Header: Role, Company, Duration */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left space-y-2 md:space-y-0">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-gray-400 text-lg">{exp.company}</p>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{exp.duration}</p>
              </div>

                {/* Skills Icons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {exp.skills.map((skill, idx) => (
                    <img
                      key={idx}
                      src={skill.icon}
                      alt={skill.name}
                      title={skill.name}
                      className="w-6 h-6 transition-transform duration-200 hover:scale-125"
                    />
                  ))}
                </div>

                {/* Description */}
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;