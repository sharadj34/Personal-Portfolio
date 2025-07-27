import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with MERN stack featuring user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/yourusername/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      link: 'https://github.com/yourusername/taskmanager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts using external APIs.',
      technologies: ['JavaScript', 'HTML/CSS', 'Weather API', 'Chart.js'],
      link: 'https://github.com/yourusername/weather-app'
    }
  ];

  return (
    <section id="projects" style={{
      padding: '80px 20px',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: '#333',
          fontWeight: 'bold'
        }}>Projects</h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '50px'
        }}>Here are some of my recent projects</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'left',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}>
              <h3 style={{
                color: '#667eea',
                fontSize: '1.4rem',
                marginBottom: '15px',
                fontWeight: 'bold'
              }}>{project.title}</h3>
              
              <p style={{
                color: '#666',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>{project.description}</p>
              
              <div style={{
                marginBottom: '20px'
              }}>
                <strong style={{ color: '#333', fontSize: '1rem' }}>Technologies: </strong>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '10px'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      backgroundColor: '#667eea',
                      color: 'white',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-block',
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  transition: 'color 0.3s ease'
                }}>
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
        
        <button style={{
          marginTop: '40px',
          padding: '15px 30px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}>
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
