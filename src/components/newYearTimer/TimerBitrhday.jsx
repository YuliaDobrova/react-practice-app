import React, { useState, useEffect } from 'react';

const NewYearTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  function calculateTimeLeft() {
    // let year = new Date().getFullYear() + 1;
    let year = new Date().getFullYear();

    // console.log('year', year);
    const difference = Number(new Date(`12/31/${year}`) - Number(new Date()));
    // const difference = Number(new Date(`01/01/${year}`) - Number(new Date()));
    // console.log('difference', difference);
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ letterSpacing: '0.03em', marginBottom: 5 }}>
        New Year Timer
        {/* New Year's Timer */}
      </h3>
      <p>
        Time left till the New Year <br />
        🎉🥳✨
      </p>
      {timerComponents?.length ? timerComponents : <span>Happy Birthday!</span>}
    </div>
  );
};

export default NewYearTimer;
