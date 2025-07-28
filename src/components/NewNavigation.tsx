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
    { name: '🏠 Home', id: 'hero', icon: '🏠' },
    { name: '👤 About', id: 'about', icon: '👤' },
    { name: '💼 Skills', id: 'skills', icon: '💼' },
    { name: '🎓 Education', id: 'education', icon: '🎓' },
    { name: '💻 Experience', id: 'experience', icon: '💻' },
    { name: '🚀 Projects', id: 'projects', icon: '🚀' },
    { name: '📞 Contact', id: 'contact', icon: '📞' }
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
            <img 
              src="/favcon.png" 
              alt="Logo" 
              style={{
                width: isMobile ? '35px' : '40px',
                height: isMobile ? '35px' : '40px',
                borderRadius: '8px',
                marginRight: '12px',
                objectFit: 'cover'
              }}
            />
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
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={() => setIsMenuOpen(false)}
        >
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '2rem',
            margin: '2rem',
            width: '90%',
            maxWidth: '400px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{
              color: '#667eea',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              textAlign: 'center',
              margin: '0 0 1rem 0'
            }}>
              Navigation Menu
            </h3>
            
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  padding: '15px 20px',
                  width: '100%',
                  textAlign: 'center',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                {item.name}
              </button>
            ))}
            
            <button
              onClick={() => setIsMenuOpen(false)}
              style={{
                background: 'none',
                border: '2px solid #ccc',
                color: '#666',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                padding: '10px 20px',
                width: '100%',
                textAlign: 'center',
                borderRadius: '10px',
                marginTop: '1rem'
              }}
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewNavigation;
