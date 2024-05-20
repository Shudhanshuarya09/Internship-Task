import React from 'react';
import './Certificates.css';

const CertificationsAndInternships = () => {
  return (
    <div className="certifications-internships-container">
      <h2>Unlock <span className="highlight">6 Certificates & Internship Opportunities!</span></h2>
      <div className="content">
        <div className="certificates">
          <h3>Get 6 Industry Recognized Certificates!</h3>
          <div className="certificate-image">Certificate Image</div>
          <p><strong>Official and Verified</strong></p>
          <p><strong>Enhances Credibility</strong></p>
        </div>
        <div className="internships">
          <h3>Bag Internship Opportunities!</h3>
          <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
          <div className="internship-image">Internship Image</div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
