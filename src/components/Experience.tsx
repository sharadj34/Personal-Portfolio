import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Your Company Name',
      duration: 'Oct 2021 - Present',
      description: 'Working on web applications and solutions using the MERN stack.',
      icon: '💼'
    },
    {
      role: 'Web Developer Intern',
      company: 'Another Company',
      duration: 'June 2021 - Dec 2021',
      description: 'Built and maintained several website projects.',
      icon: '🌐'
    }
  ];

  return (
    <section id="experience" style={{
      padding: '80px 20px',
      backgroundColor: 'white',
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
        }}>Work Experience</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px'
        }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{
              backgroundColor: '#f8f9fa',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'left',
              border: '2px solid transparent',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <span style={{
                  fontSize: '2.5rem',
                  marginRight: '15px'
                }}>{exp.icon}</span>
                <div>
                  <h3 style={{
                    color: '#667eea',
                    fontSize: '1.4rem',
                    margin: '0 0 5px 0',
                    fontWeight: 'bold'
                  }}>{exp.role}</h3>
                  <p style={{
                    color: '#666',
                    margin: 0,
                    fontSize: '1rem'
                  }}>{exp.company}</p>
                </div>
              </div>

              <p style={{
                color: '#666',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>{exp.description}</p>

              <span style={{
                display: 'block',
                marginTop: '20px',
                color: '#333',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}>{exp.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

