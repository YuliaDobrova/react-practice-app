import { useState, useEffect, useRef } from 'react';
import './DateComponent.css';

const DateComponent = () => {
  // Data info
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = year + '/' + month + '/' + day;

  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => tick(), 1000);

    return () => {
      stop();
    };
  }, []);

  const tick = () => {
    setTime(new Date().toLocaleTimeString('en-US', { timeStyle: 'short' }));
  };

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p className="date">Date: {newdate}</p>
      <p className="time">Time: {time}</p>
    </div>
  );
};

export default DateComponent;
