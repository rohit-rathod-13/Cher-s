import React, { useEffect } from 'react';
import '../css/Services.css';

function Services() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const services = [
    'INTERVIEW PREPARATION',
    'VIRTUAL COLOUR ANALYSIS',
    'SOCIAL AND BUSINESS ETIQUETTE',
    'BASIC LEVEL DINING ETIQUETTE',
    'PERSONALITY DEVELOPMENT',
    'STYLING AS PER PERSONALITY',
    'COMMUNICATION SKILLS',
    'EMAIL WRITING',
    'CORPORATE GROOMING AND EXECUTIVE PRESENCE',
    'PERSONAL BRANDING AND ONLINE PRESENCE',
    'MASTERING BODY LANGUAGE FOR IMPACT',
    'PUBLIC SPEAKING AND PRESENTATION SKILLS (BEGINNER LEVEL)',
    'CONFIDENCE BUILDING FOR TEENS AND ADULTS'
  ];

  return (
    <section className="services" id="services" style={{ 
      background: '#2A2A2A',
      width: '100%',
      maxWidth: '100%',
      margin: '0',
      padding: '4rem 5%'
    }}>
      <div className="services-header fade-in">
        <h2 style={{ color: '#F5F0E6', marginBottom: '2rem', textAlign: 'center' }}>SERVICES OFFERED</h2>
        <div className="underline" style={{ 
          background: '#D4AF37',
          height: '3px',
          width: '60px',
          margin: '0 auto 3rem auto'
        }}></div>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-item fade-in"
            style={{ 
              background: '#1A1A1A',
              border: '1px solid #D4AF37',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              opacity: 1, // Add this to ensure visibility
              transform: 'none' // Reset any transform
            }}
          >
            <div className="service-content">
              <h3 style={{ 
                color: '#F5F0E6',
                margin: 0,
                padding: '1rem'
              }}>{service}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="formats fade-in" style={{ 
        color: '#F5F0E6',
        marginTop: '3rem',
        padding: '2rem',
        background: '#1A1A1A',
        border: '1px solid #D4AF37',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          color: '#D4AF37',
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
          letterSpacing: '2px'
        }}>FORMATS AVAILABLE</h3>
        <div className="format-item" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <span className="format-icon" style={{ 
            color: '#D4AF37',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>↗</span>
          <p style={{ 
            color: '#F5F0E6',
            fontSize: '1.2rem',
            letterSpacing: '1px'
          }}>ONE-ON-ONE COACHING (ONLINE)</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
