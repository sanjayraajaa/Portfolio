import React from 'react';
import '../style/Skills.css';

const skillsList = [
  { name: 'Frappe', logo: 'frappe-framework-logo.svg' },
  { name: 'ERPNext', logo: 'erpnext-logo-blue.png' },
  { name: 'Python', logo: 'python.svg' },
  { name: 'JavaScript', logo: 'javascript.svg' },
  { name: 'MariaDB', logo: 'mariadb.svg' },
  { name: 'React', logo: 'react.svg' },
  { name: 'GitHub', logo: 'github.svg' },
];

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Tech Stack</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon-wrapper">
              <img
                src={`/src/assets/${skill.logo}`}
                alt={skill.name}
                className="skill-icon"
              />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
