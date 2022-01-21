import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }
  function decrement() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="CounterWrapper">
      <h1>{count}</h1>
      <div>
        <button className="CounterBtn" onClick={increment}>
          Increment
        </button>
        <button className="CounterBtn" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
