import React from 'react';

// Import your skill icons with corrected paths
import erpnextIcon from "../assets/skills/erpnext.png";
import frappeIcon from "../assets/skills/frappe.svg";
import pythonIcon from "../assets/skills/python.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import mariadbIcon from "../assets/skills/mariadb.svg";
import reactIcon from "../assets/skills/react.svg";
import htmlIcon from "../assets/skills/html.svg"
import cssIcon from "../assets/skills/css.svg"

const Skills: React.FC = () => {
  const skills = [
    { name: 'ERPNext', icon: erpnextIcon },
    { name: 'Frappe', icon: frappeIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'MariaDB', icon: mariadbIcon },
    { name: 'React', icon: reactIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <p className="text-gray-400 mt-2">Here are some of the technologies I work with:</p>
      <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="bg-gray-800 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className={`w-6 h-6 ${skill.name === 'ERPNext' ? 'object-contain' : ''}`}
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;