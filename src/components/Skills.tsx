import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'ReactJS', icon: '⚛️', color: '#61DAFB' },
    { name: 'ExpressJS', icon: '🟢', color: '#68A063' },
    { name: 'NodeJS', icon: '🟢', color: '#68A063' },
    { name: 'Redux', icon: '🔄', color: '#764ABC' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
    { name: 'Android', icon: '🤖', color: '#3DDC84' },
    { name: 'MaterialUI', icon: '🎨', color: '#0081CB' },
    { name: 'ChakraUI', icon: '⚡', color: '#319795' },
    { name: 'TailwindCSS', icon: '🌊', color: '#06B6D4' },
    { name: 'Bootstrap', icon: '🅱️', color: '#7952B3' },
    { name: 'Sass', icon: '💅', color: '#CC6699' },
    { name: 'HTML5', icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', icon: '🎨', color: '#1572B6' },
    { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
    { name: 'Java', icon: '☕', color: '#ED8B00' },
    { name: 'Kotlin', icon: '🔷', color: '#0095D5' },
    { name: 'PHP', icon: '🐘', color: '#777BB4' },
    { name: 'Python', icon: '🐍', color: '#3776AB' }
  ];

  return (
    <section id="skills" style={{
      padding: '80px 20px',
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
            fontSize: '2.5rem',
            marginRight: '15px',
            color: 'white'
          }}>💻</span>
          <h2 style={{
            fontSize: '3rem',
            margin: '0',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Skills & <span style={{ color: '#FFD700' }}>Abilities</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: '#1a1a2e',
                padding: '30px 20px',
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
                fontSize: '3rem',
                marginBottom: '15px',
                color: skill.color
              }}>
                {skill.icon}
              </div>
              
              <h3 style={{
                color: 'white',
                fontSize: '1.2rem',
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
