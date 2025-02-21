import React from 'react';
import '../style/Project.css';

function Projects() {
  const projects = [
    {
      id: "qwe",
      name: 'Project One',
      description: 'Description of Project One',
      project_link: 'http://example.com/project-one',
      source_link: 'http://example.com/project-one',
      preview_img: null,
      skill_set: null,
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
      <h1 className='pro_heading'>Projects</h1>
      <div>
      {
        projects.map((project) => (
          <div id={project.id}>
            <img src={project.preview_img} alt="" />
            <div>
                <h1>{project.name}</h1>
            </div>
          </div>
        ))
      }
      </div>
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