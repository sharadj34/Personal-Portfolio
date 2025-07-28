import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
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
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      const button = document.getElementById('mobile-menu-button');
      if (nav && button && !nav.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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
          <img 
            src="/favcon.png" 
            alt="Logo" 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              marginRight: '12px',
              objectFit: 'cover'
            }}
          />
          Sharad Jha
        </div>
        
        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Menu toggle clicked, current state:', isMenuOpen);
              setIsMenuOpen(!isMenuOpen);
            }}
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
              width: '40px',
              height: '40px',
              padding: '5px',
              borderRadius: '4px',
              zIndex: 1001
            }}
            aria-label="Toggle mobile menu"
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
        
      </div>
      
      {/* Mobile Navigation Links */}
      {isMobile && isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          zIndex: 1002,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box',
          minHeight: 'auto',
          border: '1px solid rgba(0,0,0,0.1)',
          borderTop: 'none'
        }}>
          {['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item, index) => {
            const sectionIds = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
            return (
              <button
                key={index}
                onClick={() => scrollToSection(sectionIds[index])}
                style={{
                  background: 'none',
                  border: '2px solid #667eea',
                  color: '#667eea',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  padding: '12px 24px',
                  width: '100%',
                  textAlign: 'center',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#667eea';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#667eea';
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
