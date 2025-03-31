import React from "react";
import frappeIcon from "../assets/skills/frappe.svg";
import erpnextIcon from "../assets/skills/erpnext.png";
import pythonIcon from "../assets/skills/python.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import mariadbIcon from "../assets/skills/mariadb.svg";
import syvasoftLogo from "../assets/personal/Syvasoft.png";

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
    ],
    skills: [frappeIcon, erpnextIcon, pythonIcon, javascriptIcon, mariadbIcon],
    logo: syvasoftLogo,
  },
];

const Experience: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Experience Heading */}
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>

      {/* Loop through experiences */}
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg p-8 md:gap-8 mb-8 w-full min-h-[300px] hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          {/* Left Section - Company Logo */}
          <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center bg-white rounded-lg overflow-hidden">
            <img src={exp.logo} alt={exp.company} className="object-contain w-full h-full" />
          </div>

          {/* Middle Gap on Small Screens */}
          <div className="my-4 md:my-0"></div>

          {/* Right Section - Details */}
          <div className="flex flex-col flex-grow w-full">
            {/* Role & Duration */}
            <div className="md:flex md:justify-between items-start w-full">
              <div>
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="text-gray-400 text-xl">{exp.company}</p>
              </div>
              <p className="text-gray-300 text-sm md:text-lg md:text-right mt-2 md:mt-0">{exp.duration}</p>
            </div>

            {/* Skills Icons */}
            <div className="flex mt-4 space-x-4">
              {exp.skills.map((icon, idx) => (
                <img key={idx} src={icon} alt="skill-icon" className="w-8 h-8" />
              ))}
            </div>

            {/* Description */}
            <ul className="text-gray-300 mt-4 text-lg list-disc list-inside">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;