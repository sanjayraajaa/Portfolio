import React from 'react';
import '../style/Project.css';

function Projects() {
  const projects = [
    {
      name: 'Project One',
      description: 'Description of Project One',
      link: 'http://example.com/project-one'
    },
    {
      name: 'Project Two',
      description: 'Description of Project Two',
      link: 'http://example.com/project-two'
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;