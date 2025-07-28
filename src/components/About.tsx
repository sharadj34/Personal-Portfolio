import React, { useState, useEffect } from 'react';
import pfp from '../assets/pfp.jpg';

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section id="about" style={{
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
          fontSize: isMobile ? '2rem' : '2.5rem',
          marginBottom: '40px',
          color: '#333',
          fontWeight: 'bold'
        }}>About Me</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? '30px' : '40px',
          alignItems: 'center'
        }}>
          <div style={{
            textAlign: 'left',
            backgroundColor: 'white',
            padding: isMobile ? '20px' : '30px',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            order: isMobile ? 2 : 1
          }}>
            <h3 style={{ color: '#667eea', fontSize: isMobile ? '1.5rem' : '1.8rem', marginBottom: '20px' }}>Sharad Jha</h3>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
I’m a tech enthusiast passionate about application development, data analytics, and product management.
With a background in Computer Science and hands-on experience across full-stack development, data-driven insights, and cross-functional collaboration, I enjoy building products that are both functional and impactful. I thrive in roles where I can blend technical execution with strategic thinking to solve real-world problems.
            </p>
            <a 
              href="https://docs.google.com/document/d/1piR19w6DzZg1DkrhIC0xWwdHkYnxfeMJj7BYc63ePZw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '12px 25px',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#5a67d8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#667eea';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Resume
            </a>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: isMobile ? 1 : 2
          }}>
            <div style={{
              width: isMobile ? '250px' : '320px',
              height: isMobile ? '250px' : '320px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <img 
                src={pfp} 
                alt="Sharad Jha Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
