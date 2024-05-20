import React from 'react';
import './Curriculam.css';

const CourseCurriculum = () => {
  const courses = [
    { name: "C++", description: "Learn C++ for strong programming fundamentals." },
    { name: "MERN Stack", description: "Master the MERN stack for high-demand projects." },
    { name: "Data Structure & Algorithm", description: "Excel in Data Structures and Algorithms for interview success." },
    { name: "Competitive Programming", description: "Excel in Data Structures and Algorithms for interview success." }
  ];

  return (
    <div className="curriculum-container">
      <div className="header">
        <span className="path-indicator">DATASCIENCE COURSE LEARNING PATH</span>
        <h2><span className="highlight">Data Science</span> Course Curriculum</h2>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <div className="course-info">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
            </div>
            <button className="view-button">👁️ View Curriculum</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;