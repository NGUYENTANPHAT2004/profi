import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com'
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with real-time features',
      technologies: ['TypeScript', 'Express', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com'
    },
    {
      title: 'Project 3',
      description: 'Social media dashboard with analytics',
      technologies: ['React', 'Firebase', 'Chart.js'],
      github: 'https://github.com/yourusername/project3',
      demo: 'https://project3-demo.com'
    }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 