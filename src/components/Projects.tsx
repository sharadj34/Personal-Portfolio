import React, { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'Application Development' | 'Data Analytics' | 'Product Management' | 'Others';
  link?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const projects: Project[] = [
    {
      title: 'RideRio',
      description: 'RideRio is a self-drive car rental app that allows users to conveniently rent cars for personal use, offering flexible booking, affordable pricing, and a wide range of vehicles.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      category: 'Application Development',
      link: 'https://github.com/sharadj34/RideRio'
    },
    {
      title: 'Rise and Shine',
      description: 'Rise and Shine is a Flutter-based event management and social engagement app with login, feed, notifications, post sharing, comments, image uploads, and a vibrant UI using Provider and gradients.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      category: 'Application Development',
      link: 'https://github.com/sharadj34/Rise-And-Shine'
    },
    {
      title: 'Urban Heat - Correlation with Population',
      description: 'Built a NetLogo simulation to analyze the impact of urbanization on temperature using real-world datasets (1995–2024), modeling factors like population growth, land use, pollution, and vegetation.Processed and visualized 30 years of geospatial and environmental data (e.g., LST, population density, built-up area) to study Urban Heat Island (UHI) patterns in Delhi.',
      technologies: ['Python', 'NetLogo', 'Excel', 'Regression Analysis'],
      category: 'Data Analytics',
      link: 'https://github.com/sharadj34/Urban-Heat-Correlation-with-Population'
    }
  ];

  const [category, setCategory] = useState<'Application Development' | 'Data Analytics' | 'Product Management' | 'Others' | 'All'>('All');

  const filteredProjects = category === 'All' ? projects : projects.filter(project => project.category === category);

  return (
    <section id="projects" style={{
      padding: isMobile ? '60px 15px' : '80px 20px',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '2rem' : '2.5rem',
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
          marginBottom: '40px'
        }}>
          {(['All', 'Application Development', 'Data Analytics', 'Product Management', 'Others'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: '10px 20px',
                marginRight: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: category === cat ? '#667eea' : '#e0e0e0',
                color: category === cat ? 'white' : '#333',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                if (category !== cat) {
                  e.currentTarget.style.backgroundColor = '#d0d0d0';
                }
              }}
              onMouseOut={(e) => {
                if (category !== cat) {
                  e.currentTarget.style.backgroundColor = '#e0e0e0';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '20px' : '30px'
        }}>
          {filteredProjects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: isMobile ? '20px' : '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'left',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
            >
              <h3 style={{
                color: '#667eea',
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                marginBottom: '15px',
                fontWeight: 'bold'
              }}>{project.title}</h3>
              
              <p style={{
                color: '#666',
                fontSize: isMobile ? '0.95rem' : '1rem',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>{project.description}</p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '20px'
              }}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    backgroundColor: '#e9ecef',
                    padding: '5px 12px',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    color: '#495057',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {project.category}
                </span>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#667eea',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#666',
            fontSize: '1.1rem'
          }}>
            No projects found in this category.
          </div>
        )}
        
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
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#5a67d8';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#667eea';
        }}
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
