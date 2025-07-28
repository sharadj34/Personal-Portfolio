import React, { useState, useEffect } from 'react';

const Education: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const education = [
    {
      institution: 'VIT Bhopal University, Bhopal, IND',
      degree: 'B.Tech in Computer Science and Engineering',
      duration: '2021 - 2025',
      status: 'Completed',
      cgpa: '8.77',
      scoreType: 'CGPA',
      image: '/assets/vit.jpg'
    },
    {
      institution: 'Christ the King College, Jhansi, IND',
      degree: 'Higher Secondary Certificate (Class XII) - PCM',
      duration: '2019 - 2021',
      status: 'Completed',
      cgpa: '86.17%',
      scoreType: 'Percentage',
      image: '/assets/ckc.png' // Add this image to public/assets folder
    },
    {
      institution: 'Christ the King College, Jhansi, IND',
      degree: 'Secondary School Certificate (Class X)',
      duration: '2017 - 2019',
      status: 'Completed',
      cgpa: '81.83%',
      scoreType: 'Percentage',
      image: '/assets/ckc.png' // Add this image to public/assets folder
    }
  ];

  return (
    <section id="education" style={{
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
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '20px' : '30px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {education.map((edu, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: isMobile ? '20px' : '25px',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '15px' : '20px',
              transition: 'all 0.3s ease',
              border: '1px solid #e0e0e0',
              textAlign: isMobile ? 'center' : 'left'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              {/* Institution Logo */}
              <div style={{
                flexShrink: 0,
                width: isMobile ? '60px' : '80px',
                height: isMobile ? '60px' : '80px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid #f0f0f0',
                alignSelf: isMobile ? 'center' : 'flex-start'
              }}>
                <img 
                  src={edu.image} 
                  alt={edu.institution}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Institution Details */}
              <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                <h3 style={{
                  color: '#6B73FF',
                  fontSize: isMobile ? '1.2rem' : '1.4rem',
                  margin: '0 0 8px 0',
                  fontWeight: '600'
                }}>
                  {edu.institution}
                </h3>
                <p style={{
                  color: '#666',
                  margin: '0 0 8px 0',
                  fontSize: '1rem',
                  lineHeight: '1.4'
                }}>
                  {edu.degree}
                </p>
                <p style={{
                  color: '#888',
                  margin: '0',
                  fontSize: '0.9rem'
                }}>
                  {edu.scoreType}: <span style={{ fontWeight: '600', color: '#333' }}>{edu.cgpa}</span>
                </p>
              </div>

              {/* Duration and Status */}
              <div style={{
                textAlign: isMobile ? 'center' : 'right',
                flexShrink: 0
              }}>
                <div style={{
                  color: '#333',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  marginBottom: '8px'
                }}>
                  {edu.duration}
                </div>
                <span style={{
                  backgroundColor: '#6B73FF',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
