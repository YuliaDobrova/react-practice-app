import React, { useState, useEffect } from 'react';

const TimerBitrhday = () => {
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
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  function calculateTimeLeft() {
    let year = new Date().getFullYear();
    // console.log('year', year);
    const difference = Number(new Date(`02/17/${year}`) - Number(new Date()));
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
      <p>Soon there will be my BDay party 🥳🎉✨</p>
      {timerComponents.length ? timerComponents : <span>Happy Birthday!</span>}
    </div>
  );
};

export default TimerBitrhday;
