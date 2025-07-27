import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'HTML/CSS', level: 90, icon: '🎨' },
    { name: 'Git', level: 85, icon: '📝' }
  ];

  return (
    <section id="skills" style={{
      padding: '80px 20px',
      backgroundColor: 'white',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: '#333',
          fontWeight: 'bold'
        }}>Skills & Abilities</h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '50px',
          fontStyle: 'italic'
        }}>
          "Education is not the learning of facts, but the training of the mind to think."
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {skills.map((skill, index) => (
            <div key={index} style={{
              backgroundColor: '#f8f9fa',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <span style={{ fontSize: '2rem', marginRight: '15px' }}>{skill.icon}</span>
                <h3 style={{ color: '#333', fontSize: '1.3rem', margin: 0 }}>{skill.name}</h3>
              </div>
              
              <div style={{
                backgroundColor: '#e9ecef',
                borderRadius: '10px',
                overflow: 'hidden',
                height: '10px'
              }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '10px',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
              
              <span style={{
                display: 'block',
                marginTop: '10px',
                color: '#667eea',
                fontWeight: 'bold'
              }}>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
