import React, { useEffect } from 'react';
import { initScrollAnimation } from '../utils/ScrollObserver';
import '../css/About.css';

function About() {
  useEffect(() => {
    initScrollAnimation();
  }, []);

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
    <section className="about">
      <div className="quote fade-in">
        <p>"EVERYONE IS BORN WITH A UNIQUE LIGHT. IMAGE CONSULTING ISN'T ABOUT 
        CHANGING WHO YOU ARE—IT'S ABOUT REVEALING YOUR BRILLIANCE TO THE WORLD."</p>
        <span className="author">– CHER PEREIRA</span>
      </div>
      
      <div className="expertise-areas">
        {expertiseData.map(({ title, description }, index) => (
          <div 
            key={title} 
            className="expertise-item fade-in" 
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
