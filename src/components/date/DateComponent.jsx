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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="date">
        Today is <span style={{ color: '#61dafb' }}>{newdate}</span>.{' '}
      </div>
      <div className="time">
        Local time in Vancouver, BC is{' '}
        <span style={{ color: '#61dafb' }}>{time}</span>
      </div>
    </div>
  );
};

export default DateComponent;
