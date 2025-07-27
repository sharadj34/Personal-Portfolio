import React from 'react';

const About: React.FC = () => {
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
          fontSize: '2.5rem',
          marginBottom: '40px',
          color: '#333',
          fontWeight: 'bold'
        }}>About Me</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div style={{
            textAlign: 'left',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#667eea', fontSize: '1.8rem', marginBottom: '20px' }}>Full Stack Developer</h3>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              I am a Full-Stack developer based in [Your Location]. I am passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using modern technologies.
            </p>
            <div style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#333' }}>📧 Email:</strong>
              <span style={{ color: '#666', marginLeft: '10px' }}>your.email@example.com</span>
            </div>
            <div>
              <strong style={{ color: '#333' }}>📍 Location:</strong>
              <span style={{ color: '#666', marginLeft: '10px' }}>Your City, Country</span>
            </div>
            <button style={{
              marginTop: '20px',
              padding: '12px 25px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>Resume</button>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '4rem',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              👨‍💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
