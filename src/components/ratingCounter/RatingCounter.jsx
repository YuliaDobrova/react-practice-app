import React, { useState } from 'react';
import MyButton from '../shared/button/MyButton';
import './RatingCounter.css';

const RatingCounter = () => {
  const [rateZero, setRateZero] = useState(true);

  const onResetClick = () => {
    setRateZero(true);
  };
  const onHandleClick = () => {
    setRateZero(false);
  };

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
      </div>

      <div className="rating-stars-container">
        <div className="rating-stars">
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs0"
            checked={rateZero ? true : false}
            // defaultChecked
          />
          <label
            className="rating-stars-label"
            htmlFor="rs0"
            defaultChecked
          ></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs1"
            onClick={onHandleClick}
          />
          <label className="rating-stars-label" htmlFor="rs1"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs2"
            onClick={onHandleClick}
          />
          <label className="rating-stars-label" htmlFor="rs2"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs3"
            onClick={onHandleClick}
          />
          <label className="rating-stars-label" htmlFor="rs3"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs4"
            onClick={onHandleClick}
          />
          <label className="rating-stars-label" htmlFor="rs4"></label>
          <input
            className="rating-stars-input"
            type="radio"
            name="rating"
            id="rs5"
            onClick={onHandleClick}
          />
          <label className="rating-stars-label" htmlFor="rs5"></label>
          <span className="rating-counter"></span>
        </div>
        <MyButton onClick={onResetClick}>Reset</MyButton>
      </div>
    </>
  );
};

export default RatingCounter;
