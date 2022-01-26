import React, { useState } from 'react';

import MyButton from '../shared/button/MyButton';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    // console.log(count);
  }
  function decrement() {
    setCount(count - 1);
    // console.log(count);
  }

  return (
    <div className="CounterWrapper">
      <h1>{count}</h1>
      <div>
        <MyButton className="CounterBtn" onClick={increment}>
          Increment
        </MyButton>
        <MyButton className="CounterBtn" onClick={decrement}>
          Decrement
        </MyButton>
      </div>
    </div>
  );
};

export default Counter;
