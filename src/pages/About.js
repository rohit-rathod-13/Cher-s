import React from 'react';
import '../css/About.css';

function About() {
  const expertiseData = [
    {
      title: 'Personal Development',
      description: 'Tailored coaching to enhance your personal growth journey'
    },
    {
      title: 'Image Consulting',
      description: 'Professional guidance to refine your personal and professional image'
    },
    {
      title: 'Communication Skills',
      description: 'Master the art of effective communication in any setting'
    }
  ];

  return (
    <section className="about" style={{ 
      background: '#1A1A1A',
      width: '100%',
      maxWidth: '100%',
      margin: '0',
      padding: '4rem 5%'
    }}>
      <div className="quote" style={{ 
        color: '#F5F0E6',
        maxWidth: '1200px',
        margin: '0 auto 4rem auto',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <p style={{
          fontSize: '1.8rem',
          lineHeight: '1.6',
          marginBottom: '2rem',
          fontWeight: '300'
        }}>"EVERYONE IS BORN WITH A UNIQUE LIGHT. IMAGE CONSULTING ISN'T ABOUT 
        CHANGING WHO YOU ARE—IT'S ABOUT REVEALING YOUR BRILLIANCE TO THE WORLD."</p>
        <span className="author" style={{ 
          color: '#D4AF37',
          fontSize: '1.2rem',
          display: 'block',
          marginTop: '1rem'
        }}>– CHER PEREIRA</span>
      </div>
      
      <div className="expertise-areas" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem'
      }}>
        {expertiseData.map(({ title, description }, index) => (
          <div 
            key={title} 
            className="expertise-item" 
            style={{
              border: '1px solid #D4AF37',
              background: '#2A2A2A',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '2rem',
              borderRadius: '8px',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h4 style={{ 
              color: '#D4AF37',
              marginBottom: '1rem',
              fontSize: '1.4rem'
            }}>{title}</h4>
            <p style={{ 
              color: '#F5F0E6',
              lineHeight: '1.6',
              fontSize: '1.1rem'
            }}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
