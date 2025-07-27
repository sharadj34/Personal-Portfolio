import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking on mobile
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      maxWidth: '100vw',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 20px',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#2c3e50'
        }}>
          <span style={{
            backgroundColor: '#667eea',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            fontSize: '1.2rem'
          }}>SJ</span>
          Sharad Jha
        </div>
        
        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#2c3e50',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px'
            }}
          >
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#2c3e50',
              margin: '3px 0',
              transition: '0.3s',
              transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
            }}></div>
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#2c3e50',
              margin: '3px 0',
              transition: '0.3s',
              opacity: isMenuOpen ? '0' : '1'
            }}></div>
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#2c3e50',
              margin: '3px 0',
              transition: '0.3s',
              transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
            }}></div>
          </button>
        )}

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <div style={{
            display: 'flex',
            gap: '2rem'
          }}>
            {['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item, index) => {
              const sectionIds = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(sectionIds[index])}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#667eea',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease',
                    padding: '0.5rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#2c3e50';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#667eea';
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
        
        {/* Mobile Navigation Links */}
        {isMobile && isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 999,
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'flex-start'
          }}>
            {['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item, index) => {
              const sectionIds = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(sectionIds[index])}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#667eea',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    padding: '0.5rem 0',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
