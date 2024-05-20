import React from 'react';
import './Working.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2>How does it work?</h2>
      <div className="steps">
        <div className="step">
          <div className="step-title">Step 1</div>
          <div className="step-content">
            <h3>Enroll into your favorite course for only ₹1,499</h3>
            <p>Start Learning with <strong>Lifetime Course Access</strong>.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-title">Step 2</div>
          <div className="step-content">
            <h3>Complete Course & Assignments within 2 Years!</h3>
            <p><strong>2</strong> years time from the date of enrollment</p>
            <p>Finish the course within <strong>2 Years</strong> to Qualify for Refund.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-title">Step 3</div>
          <div className="step-content">
            <h3>Receive 100% Refund upon completion</h3>
            <p><strong>100%</strong> Enrollment Fee is refunded</p>
            <p>Upon Course Completion within <strong>2 Years</strong>, Get Your ₹1,499 Back.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;