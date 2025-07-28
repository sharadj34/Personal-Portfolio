import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const contactInfo = {
    email: 'sharad.jha1010@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sharadj34/',
    github: 'https://github.com/sharadj34',
    twitter: 'https://twitter.com/yourusername'
  };

  return (
    <section id="contact" style={{
      padding: isMobile ? '60px 15px' : '80px 20px',
      backgroundColor: 'white',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '2rem' : '2.5rem',
          marginBottom: '20px',
          color: '#333',
          fontWeight: 'bold'
        }}>Get in Touch</h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '50px'
        }}>Feel free to reach out to me through any of the following channels:</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <a href={`mailto:${contactInfo.email}`} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            padding: isMobile ? '12px 20px' : '15px 25px',
            borderRadius: '10px',
            fontSize: isMobile ? '1rem' : '1.1rem',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <span style={{ marginRight: '10px', fontSize: '1.5rem' }}>📧</span>
            Email
          </a>
          
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            padding: '15px 25px',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <span style={{ marginRight: '10px', fontSize: '1.5rem' }}>💼</span>
            LinkedIn
          </a>
          
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            padding: '15px 25px',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <span style={{ marginRight: '10px', fontSize: '1.5rem' }}>🐙</span>
            GitHub
          </a>
          
          <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            padding: '15px 25px',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <span style={{ marginRight: '10px', fontSize: '1.5rem' }}>🐦</span>
            Twitter
          </a>
        </div>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: isMobile ? '20px' : '30px',
          borderRadius: '15px',
          textAlign: 'left',
          marginTop: '40px'
        }}>
          <h3 style={{
            color: '#667eea',
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}>Contact Info</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <strong style={{ color: '#333' }}>📞 Phone:</strong>
              <span style={{ color: '#666', marginLeft: '10px' }}>+91 XXX-XXX-XXXX</span>
            </div>
            <div>
              <strong style={{ color: '#333' }}>📧 Email:</strong>
              <span style={{ color: '#666', marginLeft: '10px' }}>{contactInfo.email}</span>
            </div>
            <div>
              <strong style={{ color: '#333' }}>📍 Location:</strong>
              <span style={{ color: '#666', marginLeft: '10px' }}>Jhansi, India</span>
            </div>
          </div>
        </div>
        
        <footer style={{
          marginTop: '60px',
          padding: '20px 0',
          borderTop: '2px solid #e9ecef',
          color: '#666',
          fontSize: '1rem'
        }}>
          <p>Thank you for visiting my portfolio website. Connect with me over socials.</p>
          <p style={{ fontWeight: 'bold', color: '#667eea' }}>Keep Rising 🚀</p>
          <p style={{ fontSize: '0.9rem', marginTop: '20px' }}>
            Designed with ❤️ by Sharad Jha
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
