import React from 'react';
import './RatingCounter.css';

const RatingCounter = () => {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        <h3
          style={{
            letterSpacing: '0.03em',
          }}
        >
          Rating stars
        </h3>
        <span>(changes on double click)</span>
      </div>

      <div className="rating-stars-container">
        <div className="rating-stars">
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs0"
            checked
          />
          <label className="rating-stars-label" htmlFor="rs0"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs1"
          />
          <label className="rating-stars-label" htmlFor="rs1"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs2"
          />
          <label className="rating-stars-label" htmlFor="rs2"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs3"
          />
          <label className="rating-stars-label" htmlFor="rs3"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs4"
          />
          <label className="rating-stars-label" htmlFor="rs4"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs5"
          />
          <label className="rating-stars-label" htmlFor="rs5"></label>
          <span className="rating-counter"></span>
        </div>
      </div>
    </>
  );
};

export default RatingCounter;
