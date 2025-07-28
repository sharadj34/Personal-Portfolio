import React, { useState, useEffect } from 'react';

const Experience: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const experiences = [
    {
      role: 'Salesforce Developement Intern',
      company: 'SmartInternz',
      duration: 'Nov 2024 - Jan 2025',
      description: 'Built Salesforce apps, learned CRM workflows, developed custom Lightning components.',
      icon: <img src="/assets/smartinternz.jpg" alt="Icon" style={{ width: '50px', height: '50px' }} />
    },
    {
      role: 'Founder & President',
      company: 'iOS Club, VIT Bhopal university',
      duration: 'Sept 2022 - Sept 2023',
      description: 'Organized workshops, led team, built developer community, promoted app development.',
      icon: <img src="/assets/iosclub.jpg" alt="Icon" style={{ width: '50px', height: '50px' }} />
    }
  ];

  return (
    <section id="experience" style={{
      padding: isMobile ? '40px 15px' : '50px 20px',
      backgroundColor: 'white',
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
        }}>Work Experience</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: isMobile ? '20px' : '30px'
        }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{
              backgroundColor: '#f8f9fa',
              padding: isMobile ? '20px' : '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: isMobile ? 'center' : 'left',
              border: '2px solid transparent',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : 'center',
                marginBottom: '20px',
                gap: isMobile ? '10px' : '15px'
              }}>
                <div style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {React.cloneElement(exp.icon as React.ReactElement<any>, {
                    style: {
                      width: isMobile ? '45px' : '50px',
                      height: isMobile ? '45px' : '50px',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }
                  } as React.Attributes)}
                </div>
                <div style={{
                  flex: 1,
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <h3 style={{
                    color: '#667eea',
                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                    margin: '0 0 5px 0',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                  }}>{exp.role}</h3>
                  <p style={{
                    color: '#666',
                    margin: 0,
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    lineHeight: '1.4'
                  }}>{exp.company}</p>
                </div>
              </div>

              <p style={{
                color: '#666',
                fontSize: isMobile ? '1rem' : '1.1rem',
                lineHeight: '1.6',
                marginBottom: isMobile ? '15px' : '0'
              }}>{exp.description}</p>

              <span style={{
                display: 'block',
                marginTop: isMobile ? '10px' : '20px',
                color: '#333',
                fontWeight: 'bold',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>{exp.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

