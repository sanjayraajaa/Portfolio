import React from "react";
import { Card } from "@/components/ui/card"; // Import Card component
import frappeIcon from "../assets/skills/frappe.svg";
import erpnextIcon from "../assets/skills/erpnext.png";
import pythonIcon from "../assets/skills/python.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import mariadbIcon from "../assets/skills/mariadb.svg";
import syvasoftLogo from "../assets/personal/Syvasoft.jpg";

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
    <Card
      key={index}
      className="rounded-lg shadow-md bg-[#1e2939]/30 backdrop-blur-lg overflow-hidden transition-all duration-300 w-full max-w-5xl mx-auto min-h-[350px] hover:scale-105 hover:bg-[#1e2939]/50 hover:backdrop-blur-xl border-0"
    >
      <div className="flex flex-col md:flex-row items-center justify-between p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Section - Company Logo */}
        <div className="flex-shrink-0 w-full md:w-2/5 h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden">
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Section - Details */}
        <div className="flex-grow md:pl-6 text-center md:text-left">
          {/* Role & Duration */}
          <div className="md:flex md:justify-between items-start w-full">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3> {/* Reduced font size */}
              <p className="text-gray-400 text-lg">{exp.company}</p> {/* Reduced font size */}
            </div>
            <p className="text-gray-300 text-sm md:text-base md:text-right mt-2 md:mt-0">
              {exp.duration}
            </p>
          </div>

          {/* Skills Icons */}
          <div className="flex mt-4 space-x-4">
            {exp.skills.map((icon, idx) => (
              <img key={idx} src={icon} alt="skill-icon" className="w-6 h-6" />
            ))}
          </div>

          {/* Description */}
          <ul className="text-gray-300 mt-4 text-sm list-disc list-inside"> {/* Reduced font size */}
            {exp.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  ))}
</div>
  );
};

export default Experience;
