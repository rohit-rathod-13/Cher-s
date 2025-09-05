import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container fade-in">
        <h2>LET'S COLLABORATE</h2>
        <p className="subtitle">Take the First Step Toward Your Power Presence</p>
        
        <div className="contact-card">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <a href="mailto:powerpresencebycher@gmail.com" className="email-link">
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
