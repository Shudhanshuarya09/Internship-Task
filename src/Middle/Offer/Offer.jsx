import React from 'react';
import './Offer.css';

const RefundOffer = () => {
  return (
    <div className="refund-offer-container">
      <div className="refund-offer-box">
        <div className="offer-title">
          <h2>100% Refund Offer 😎</h2>
        </div>
        <div className="offer-details">
          <p>20 Seats Left</p>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <p>Offer ends in 10:00Mins</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;