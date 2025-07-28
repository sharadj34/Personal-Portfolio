import React, { useState, useEffect } from 'react';

const NewNavigation: React.FC = () => {
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

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset for fixed header
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { name: 'Home', id: 'hero', icon: '🏠' },
    { name: 'About', id: 'about', icon: '👤' },
    { name: 'Skills', id: 'skills', icon: '💼' },
    { name: 'Education', id: 'education', icon: '🎓' },
    { name: 'Experience', id: 'experience', icon: '💻' },
    { name: 'Projects', id: 'projects', icon: '🚀' },
    { name: 'Contact', id: 'contact', icon: '📞' }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: isMobile ? '1rem 15px' : '1rem 20px',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        boxSizing: 'border-box'
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
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: 'bold',
            color: '#2c3e50'
          }}>
            Sharad Jha
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              gap: '2rem'
            }}>
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
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
                  {item.name}
                </button>
              ))}
            </div>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none',
                border: '2px solid #667eea',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                position: 'relative',
                zIndex: 1001
              }}
              aria-label="Toggle mobile menu"
            >
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#667eea',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(-4px, 6px)' : 'none'
              }}></div>
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#667eea',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? '0' : '1'
              }}></div>
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#667eea',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(-4px, -6px)' : 'none'
              }}></div>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }}
        onClick={() => setIsMenuOpen(false)}
        >
          <div style={{
            position: 'absolute',
            top: '80px',
            right: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '1rem',
            width: '300px',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 25px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#2c3e50',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  padding: '16px 20px',
                  width: '100%',
                  textAlign: 'left',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: index === navigationItems.length - 1 ? '0' : '2px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.08)';
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#2c3e50';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <span style={{
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px'
                }}>{item.icon}</span>
                <span style={{
                  flex: 1,
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>{item.name}</span>
                <span style={{
                  fontSize: '0.8rem',
                  opacity: 0.5,
                  transform: 'translateX(-5px)',
                  transition: 'all 0.2s ease'
                }}>→</span>
              </button>
            ))}
            
            <div style={{
              height: '1px',
              backgroundColor: 'rgba(0,0,0,0.1)',
              margin: '12px 0'
            }}></div>
            
            <button
              onClick={() => setIsMenuOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#666',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                padding: '12px 20px',
                width: '100%',
                textAlign: 'center',
                borderRadius: '12px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                e.currentTarget.style.color = '#333';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#666';
              }}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewNavigation;
