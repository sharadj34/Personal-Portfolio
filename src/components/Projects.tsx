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
      title: 'Smart Public Transit Analytics for Delhi Metro',
      description: 'Smart Public Transit Analytics for Delhi Metro is a data analytics project that leverages open metro datasets and SQL to uncover insights on passenger flow, revenue, and station usage. It automates data loading, analysis, and visualization, enabling data-driven decisions to optimize Delhi Metro operations and enhance commuter experience.',
      technologies: ['PostgreSQL', 'SQL', 'Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
      category: 'Data Analytics',
      link: 'https://github.com/sharadj34/Smart-Public-Transit-Analytics-for-Delhi-Metro'
    },
    {
      title: 'RideRio',
      description: 'RideRio is a self-drive car rental app that allows users to conveniently rent cars for personal use, offering flexible booking, affordable pricing, and a wide range of vehicles.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      category: 'Application Development',
      link: 'https://github.com/sharadj34/RideRio'
    },
        {
      title: 'Urban Heat - Correlation with Population',
      description: 'Built a NetLogo simulation to analyze the impact of urbanization on temperature using real-world datasets (1995–2024), modeling factors like population growth, land use, pollution, and vegetation.Processed and visualized 30 years of geospatial and environmental data (e.g., LST, population density, built-up area) to study Urban Heat Island (UHI) patterns in Delhi.',
      technologies: ['Python', 'NetLogo', 'Excel', 'Regression Analysis'],
      category: 'Data Analytics',
      link: 'https://github.com/sharadj34/Urban-Heat-Correlation-with-Population'
    },
    {
      title: 'Rise and Shine',
      description: 'Rise and Shine is a Flutter-based event management and social engagement app with login, feed, notifications, post sharing, comments, image uploads, and a vibrant UI using Provider and gradients.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      category: 'Application Development',
      link: 'https://github.com/sharadj34/Rise-And-Shine'
    }
  ];

  const [category, setCategory] = useState<'Application Development' | 'Data Analytics' | 'Product Management' | 'Others' | 'All'>('All');

  const filteredProjects = category === 'All' ? projects : projects.filter(project => project.category === category);

  return (
    <section id="projects" style={{
      padding: isMobile ? '60px 15px' : '80px 20px',
      background: 'linear-gradient(135deg, #1f1c2c 0%, #3a3a5a 100%)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '2.5rem' : '3rem',
          marginBottom: '20px',
          color: '#fff',
          fontWeight: 'bold',
          textShadow: '0 0 10px rgba(255,255,255,0.3)'
        }}>My Creations</h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#ccc',
          marginBottom: '50px'
        }}>A collection of my favorite projects.</p>

        <div style={{
          marginBottom: '40px'
        }}>
          {(['All', 'Application Development', 'Data Analytics', 'Product Management', 'Others'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: '12px 25px',
                marginRight: '15px',
                marginBottom: '15px',
                borderRadius: '50px',
                border: '2px solid transparent',
                backgroundColor: category === cat ? '#8a2be2' : 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                backdropFilter: 'blur(5px)',
              }}
              onMouseOver={(e) => {
                if (category !== cat) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.borderColor = '#8a2be2';
                }
              }}
              onMouseOut={(e) => {
                if (category !== cat) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{
          display: isMobile ? 'flex' : 'grid',
          flexDirection: isMobile ? 'column' : undefined,
          gridTemplateColumns: isMobile ? undefined : 'repeat(auto-fit, minmax(380px, 1fr))',
          gridAutoRows: 'min-content',
          gap: isMobile ? '30px' : '30px',
          alignItems: 'start'
        }}>
          {filteredProjects.map((project, index) => {
            // Calculate relative content size for dynamic styling
            const contentLength = project.description.length + project.technologies.join('').length;
            const isLongContent = contentLength > 200;
            
            return (
              <div key={index} style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                padding: isMobile ? '25px' : '30px',
                borderRadius: '24px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(138, 43, 226, 0.1)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'left',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                height: 'fit-content',
                minHeight: isLongContent ? '420px' : '320px',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(138, 43, 226, 0.2)';
                e.currentTarget.style.border = '1px solid rgba(138, 43, 226, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(138, 43, 226, 0.1)';
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)';
              }}
              >
                {/* Decorative gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #8a2be2, #ff6b9d, #4ecdc4)',
                  borderRadius: '24px 24px 0 0'
                }} />
                
                <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ flex: '1 0 auto' }}>
                    <h3 style={{
                      color: '#fff',
                      fontSize: isMobile ? '1.4rem' : '1.6rem',
                      marginBottom: '15px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #8a2be2, #ff6b9d)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>{project.title}</h3>
                    
                    <p style={{
                      color: '#e0e0e0',
                      fontSize: isMobile ? '0.95rem' : '1rem',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      opacity: 0.9
                    }}>{project.description}</p>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '20px'
                    }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} style={{
                          background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 107, 157, 0.2))',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: '#fff',
                          fontWeight: '500',
                          border: '1px solid rgba(138, 43, 226, 0.3)',
                          backdropFilter: 'blur(5px)'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Fixed footer section */}
                  <div style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '15px',
                    paddingTop: '15px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #8a2be2, #ff6b9d)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '25px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                      whiteSpace: 'nowrap'
                    }}>
                      {project.category}
                    </span>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          color: '#fff',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(5px)',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #8a2be2, #ff6b9d)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.5)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredProjects.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '50px',
            color: '#fff',
            fontSize: '1.2rem'
          }}>
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
