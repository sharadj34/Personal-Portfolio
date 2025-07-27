import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Your University Name',
      duration: '2020-2024',
      status: 'Completed',
      icon: '🎓'
    },
    {
      degree: 'HSC Science | Computer Science',
      institution: 'Your High School Name',
      duration: '2018-2020',
      status: 'Completed',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" style={{
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
        }}>My Education</h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '50px',
          fontStyle: 'italic'
        }}>
          Education is not the learning of facts, but the training of the mind to think.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px'
        }}>
          {education.map((edu, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
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
                }}>{edu.icon}</span>
                <div>
                  <h3 style={{
                    color: '#667eea',
                    fontSize: '1.4rem',
                    margin: '0 0 5px 0',
                    fontWeight: 'bold'
                  }}>{edu.degree}</h3>
                  <p style={{
                    color: '#666',
                    margin: 0,
                    fontSize: '1rem'
                  }}>{edu.institution}</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px'
              }}>
                <span style={{
                  color: '#333',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}>{edu.duration}</span>
                <span style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>{edu.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
