import React from 'react';
import './lastPart.css';

const InternshipProgram = () => {
  return (
    <div className="internship-program">
      <h2>How does the Internship Program works ?</h2>
      <div className="steps">
        <div className="step">
          <span className="icon">📚</span>
          <p>Learn from our structured pre-recorded courses made by experts to meet industry needs</p>
        </div>
        <div className="step">
          <span className="icon">💬</span>
          <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly</p>
        </div>
        <div className="step">
          <span className="icon">👨‍🏫</span>
          <p>Personal mentors to guide and help you throughout your journey as a friend</p>
        </div>
        <div className="step">
          <span className="icon">💼</span>
          <p>Build major projects which makes your resume stand apart</p>
        </div>
        <div className="step">
          <span className="icon">✅</span>
          <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
        </div>
      </div>
      <button className="apply-button">Apply now for ₹ 2999</button>
    </div>
  );
}

export default lastPart;