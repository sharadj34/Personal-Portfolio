import React, { useState, useEffect } from 'react';
import heroGif from '../assets/hero_gif.gif';

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
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '100px 20px 80px 20px' : '120px 20px 80px 20px',
      margin: '0',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box'
    }}>
      {/* Animated background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        zIndex: 1
      }}></div>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        maxWidth: '1400px',
        width: '100%',
        gap: isMobile ? '30px' : isTablet ? '40px' : '60px',
        zIndex: 2,
        position: 'relative',
        padding: isMobile ? '0 1rem' : '0 2rem'
      }}>
        {/* Left Content */}
        <div style={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'left',
          order: isMobile ? 2 : 1
        }}>
          <h1 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
            marginBottom: '20px',
            color: '#2c3e50',
            fontWeight: 'bold',
            lineHeight: '1.2',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            Hi There,<br />
            I'm <span style={{ color: '#f39c12' }}>Sharad Jha</span>
          </h1>

          <p style={{
            fontSize: isMobile ? '1.1rem' : isTablet ? '1.5rem' : '1.8rem',
            color: '#34495e',
            marginBottom: '40px',
            textAlign: isMobile ? 'center' : 'left',
            minHeight: isMobile ? '2.2rem' : isTablet ? '3rem' : '3.6rem'
          }}>
            I Am Into{' '}
            <span style={{ 
              color: '#e74c3c', 
              fontWeight: 'bold',
              position: 'relative'
            }}>
              {currentText}
              <span style={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                backgroundColor: '#e74c3c',
                marginLeft: '2px',
                animation: 'blink 1s infinite',
                verticalAlign: 'middle'
              }}></span>
            </span>
          </p>
          
          <style>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
          `}</style>

          <div style={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-start'
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
                  marginTop: '40px',
                  display: 'flex',
                  gap: '15px',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  flexWrap: 'wrap'
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
                      link: 'https://www.instagram.com/sharad_10.10?igsh=a2llbXNtZXl5YmEx', 
                      alt: 'X' 
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      }}
                    >
                            <img 
        src={social.img} 
        alt={social.alt} 
        style={{
          width: '40px', 
          height: '40px', 
          objectFit: 'contain'
        }} 
      />

                    </a>
                  ))}
                </div>
              </div>

        {/* Right Content - Avatar */}
        <div style={{
          flex: isMobile ? '0 0 auto' : 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          order: isMobile ? 1 : 2
        }}>
          <div style={{
            width: isMobile ? '240px' : '380px',
            height: isMobile ? '240px' : '380px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            position: 'relative',
            overflow: 'hidden',
            marginTop: isMobile ? '40px' : '0'
          }}>
            {/* Avatar GIF */}
            <img 
              src={heroGif} 
              alt="Avatar" 
              style={{
                width: isMobile ? '240px' : '380px',
                height: isMobile ? '240px' : '380px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '30px',
              height: '30px',
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: '50%'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '30px',
              width: '20px',
              height: '20px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '50%'
            }}></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
