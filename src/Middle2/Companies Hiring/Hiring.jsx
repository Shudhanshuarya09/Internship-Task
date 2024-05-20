import React from 'react';
import './Hiring.css';

const TopCompanies = () => {
  return (
    <div className="top-companies-container">
      <h2>Top Companies Hiring <span className="highlight">Data Scientist</span></h2>
      <div className="company-logos">
        <div className="logo">Logo</div>
        <div className="logo">Logo</div>
        <div className="logo">Logo</div>
        <div className="logo">Logo</div>
      </div>
    </div>
  );
};

export default TopCompanies;