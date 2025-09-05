import React, { useEffect } from 'react';
import { initScrollAnimation } from '../utils/ScrollObserver';
import '../css/Services.css';

function Services() {
  useEffect(() => {
    initScrollAnimation();
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
    <section className="services" id="services">
      <div className="services-header fade-in">
        <h2>SERVICES OFFERED</h2>
        <div className="underline"></div>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-item fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="service-content">
              {/* <span className="service-number">{(index + 1).toString().padStart(2, '0')}</span> */}
              <h3>{service}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="formats fade-in">
        <h3>FORMATS AVAILABLE</h3>
        <div className="format-item">
          <span className="format-icon">↗</span>
          <p>ONE-ON-ONE COACHING (ONLINE)</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
