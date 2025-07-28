import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ['Application Development', 'Product Management', 'Data Analytics'];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentPhrase) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else if (isDeleting) {
        // Continue deleting
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        // Continue typing
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, phrases]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '120px 20px 60px 20px' : '140px 20px 60px 20px',
      margin: '0',
      background: '#ffffff',
      position: 'relative',
      overflow: 'visible',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box'
    }}>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%',
        gap: isMobile ? '25px' : '30px',
        zIndex: 2,
        position: 'relative',
        padding: isMobile ? '0 1rem' : '0 2rem',
        textAlign: 'center'
      }}>

        {/* Content */}
        <div style={{
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : isTablet ? '3.5rem' : '4.5rem',
            marginBottom: '10px',
            color: '#333',
            fontWeight: '600',
            lineHeight: '1.2',
            textAlign: 'center'
          }}>
            Hi There, I'm <span style={{ color: '#667eea' }}>Sharad Jha</span>
          </h1>

          <p style={{
            fontSize: isMobile ? '1.25rem' : isTablet ? '1.6rem' : '1.9rem',
            color: '#666',
            marginBottom: '35px',
            textAlign: 'center'
          }}>
            I specialize in <span style={{ 
              color: '#667eea', 
              fontWeight: '600'
            }}>{currentText}</span>
          </p>
          
          <style>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.1); opacity: 0.3; }
            }
          `}</style>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '25px'
          }}>
            <button 
              onClick={scrollToAbout}
              style={{
                padding: isMobile ? '12px 25px' : '15px 30px',
                fontSize: isMobile ? '1rem' : '1.2rem',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#3498db';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            About Me
          </button>
          </div>

                {/* Social Icons */}
                <div style={{
                  marginTop: '20px',
                  display: 'flex',
                  gap: '20px',
                  justifyContent: 'center'
                }}>
                  {[
                    { 
                      img: '/assets/linkedin.png', 
                      link: 'https://www.linkedin.com/in/sharadj34/', 
                      alt: 'LinkedIn' 
                    }, 
                    { 
                      img: '/assets/github.png', 
                      link: 'https://github.com/sharadj34', 
                      alt: 'GitHub' 
                    },
                    { 
                      img: '/assets/leetcode.png', 
                      link: 'https://leetcode.com/u/sophisticated89/', 
                      alt: 'LeetCode' 
                    },
                    { 
                      img: '/assets/instagram.png', 
                      link: 'https://www.instagram.com/sharad_10.10?igsh=a2llbXNtZXl5YmEx', 
                      alt: 'Instagram' 
                    },
                    { 
                      img: '/assets/twitter.png', 
                      link: 'https://x.com/sharadj34', 
                      alt: 'X' 
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        borderRadius: '12px',
                        backgroundColor: '#f8f9fa',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e9ecef'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.backgroundColor = '#667eea';
                        e.currentTarget.style.borderColor = '#667eea';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.borderColor = '#e9ecef';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <img 
                        src={social.img} 
                        alt={social.alt} 
                        style={{
                          width: '28px', 
                          height: '28px', 
                          objectFit: 'contain'
                        }} 
                      />
                    </a>
                  ))}
                </div>
              </div>

      </div>

    </section>
  );
};

export default Hero;
