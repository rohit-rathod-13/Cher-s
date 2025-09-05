import React, { useEffect } from 'react';
import '../css/Contact.css';

function Contact() {
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

  return (
    <section className="contact" id="contact" style={{ 
      background: '#0D0D0D',
      width: '100%',
      maxWidth: '100%',
      margin: '0',
      padding: '4rem 5%'
    }}>
      <div className="contact-container fade-in" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h2 style={{ color: '#FFFFFF' }}>LET'S COLLABORATE</h2>
        <p className="subtitle" style={{ color: '#D4AF37' }}>
          Take the First Step Toward Your Power Presence
        </p>
        
        <div className="contact-card" style={{ 
          background: '#FFFFFF',
          border: '1px solid #D4AF37'
        }}>
          <div className="contact-info">
            <h3 style={{ color: '#1A1A1A' }}>Get in Touch</h3>
            <a 
              href="mailto:powerpresencebycher@gmail.com" 
              className="email-link"
              style={{ 
                color: '#D4AF37',
                transition: 'color 0.3s ease'
              }}
            >
              <span className="icon">✉</span>
              powerpresencebycher@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
