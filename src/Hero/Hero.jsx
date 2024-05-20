import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="course-container">
      <div className="alumni-initiative">
        <span role="img" aria-label="graduation-cap">🎓</span> An <strong>IIT Delhi</strong> Alumni Initiative
      </div>
      <h1>Become an Expert in the field of <span className="highlight">Data Science</span> with 6 courses</h1>
      <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
      <div className="features">
        <span>🎓 Personal Mentorship</span>
        <span>🎓 Internship Assistance</span>
        <span>🎓 Industry Certified Courses</span>
      </div>
      <div className="buttons">
        <button className="enroll-button">Enroll Now</button>
        <button className="know-more-button">Know More</button>
      </div>
      <div className="statistics">
        <div className="stat-item">
          <span role="img" aria-label="courses">🖥️</span>
          <p>24 Courses</p>
        </div>
        <div className="stat-item">
          <span role="img" aria-label="learners">👩‍🎓</span>
          <p>30k+ Learners</p>
        </div>
        <div className="stat-item">
          <span role="img" aria-label="doubts">❓</span>
          <p>100k+ Doubts Solved</p>
        </div>
        <div className="stat-item">
          <span role="img" aria-label="projects">📈</span>
          <p>10k+ Student Projects</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
