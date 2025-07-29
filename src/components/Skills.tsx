import React, { useState, useEffect } from 'react';

const Skills: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const skills = [
  { name: 'Python', logo: '/assets/python.png', color: '#3776AB' },
  { name: 'C++', logo: '/assets/cpp.png', color: '#61DAFB' },
  { name: 'JavaScript', logo: '/assets/JS.png', color: '#68A063' },
  { name: 'Flutter', logo: '/assets/flutter.png', color: '#68A063' },
  { name: 'NodeJS', logo: '/assets/nodejs.png', color: '#764ABC' },
  { name: 'Firebase', logo: '/assets/firebase.png', color: '#FFCA28' },
  { name: 'Django', logo: '/assets/django.svg', color: '#3DDC84' },
  { name: 'MySQL', logo: '/assets/mysql.png', color: '#0081CB' },
  { name: 'PostgreSQL', logo: '/assets/postgre.png', color: '#319795' },
  { name: 'AWS', logo: '/assets/aws.png', color: '#06B6D4' },
  { name: 'Tableau', logo: '/assets/tableau.png', color: '#7952B3' },
  { name: 'Power BI', logo: '/assets/powerbi.png', color: '#CC6699' },
  { name: 'Excel', logo: '/assets/excel.png', color: '#E34F26' },
  { name: 'Git', logo: '/assets/git.png', color: '#1572B6' },
  { name: 'Figma', logo: '/assets/figma.png', color: '#F7DF1E' },
  { name: 'Canva', logo: '/assets/canva.png', color: '#ED8B00' },
  { name: 'Notion', logo: '/assets/notion.png', color: '#0095D5' },
  { name: 'Google Analytics', logo: '/assets/googlea.webp', color: '#777BB4' },
  { name: 'Google Tag Manager', logo: '/assets/googletag.svg', color: '#777BB4' },
  { name: 'Postman', logo: '/assets/postman.webp', color: '#777BB4' },
  { name: 'Vercel', logo: '/assets/vercel.png', color: '#0095D5' }
];

  return (
    <section id="skills" style={{
      padding: isMobile ? '60px 15px' : '80px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '60px'
        }}>
          <span style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            marginRight: isMobile ? '10px' : '15px',
            color: 'white'
          }}>💻</span>
          <h2 style={{
            fontSize: isMobile ? '2.2rem' : '3rem',
            margin: '0',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Skills & <span style={{ color: '#FFD700' }}>Abilities</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(140px, 1fr))' : 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: isMobile ? '15px' : '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: '#1a1a2e',
                padding: isMobile ? '20px 15px' : '30px 20px',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.4)';
                e.currentTarget.style.backgroundColor = '#16213e';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                e.currentTarget.style.backgroundColor = '#1a1a2e';
              }}
            >
              <div style={{
                fontSize: isMobile ? '2.5rem' : '3rem',
                marginBottom: isMobile ? '10px' : '15px',
                color: skill.color
              }}>
                <img src={skill.logo} alt={skill.name} style={{ width: '75px', height: '75px', objectFit: 'contain' }} />
              </div>
              
              <h3 style={{
                color: 'white',
                fontSize: isMobile ? '1rem' : '1.2rem',
                margin: '0',
                fontWeight: '600'
              }}>
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
