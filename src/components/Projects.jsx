import React from 'react';
import '../style/Project.css';
import open from '../assets/open.svg'
import code from '../assets/code.svg'

function Projects() {
  const projects = [
    {
      id: "dynamic-login-form",
      pro_name: "Dynamic Themed Form",
      preview_img: "src/assets/dynamic_login_form.jpg",
      working_langs: ["html", "css", "javascript"],
      description: "A dynamic sign-in form with theme toggling, password visibility toggle, responsive design, and elegant styling for a personalized user experience.",
      project_link: "https://sanjayraajaa.github.io/Dynamic_Themed_Form/",
      source_link: "https://github.com/sanjayraajaa/Dynamic_Themed_Form"
    },
    {
      id: "portfolio-archive",
      pro_name: "Personal Portfolio - Archive",
      preview_img: "src/assets/portfolio_archive.png",
      working_langs: ["html", "css", "javascript"],
      description: "Developed a responsive and animated portfolio website using HTML, CSS, and JavaScript, ensuring a seamless user experience across all devices.",
      project_link: "https://sanjayraja.netlify.app/",
      source_link: "https://github.com/sanjayraajaa/Personal_Portfolio"
    },
  ];

  return (
    <div>
      <h1 className='pro_heading'>Projects</h1>
      <div className='projects-container'>
        {projects.map((project) => (
          <div id={project.id} key={project.id} className='project-card'>
            <img src={project.preview_img} alt={project.pro_name} className='project-preview' />
            <div className='project-details'>
              <h1>{project.pro_name}</h1>
              <div className='project-langs'>
                {project.working_langs.map((lang, index) => (
                  <img key={index} src={`src/assets/${lang.toLowerCase()}.svg`} alt={lang} className='lang-icon' />
                ))}
              </div>
              <div className='project-description'>{project.description}</div>
              <div className='project-buttons'>
                
                <a href={project.project_link} target='_blank' rel='noopener noreferrer'>
                  <button className='project-action-button'><img src={open} alt="Open SVG" className='project-action-img' /> Project</button>
                </a>
                <a href={project.source_link} target='_blank' rel='noopener noreferrer'>
                  <button className='project-action-button'><img src={code} alt="Code SVG" className='project-action-img' /> Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;