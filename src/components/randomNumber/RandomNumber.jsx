import { useState } from 'react';
import MyButton from '../shared/button/MyButton';
import MyInput from '../shared/input/MyInput';

const RandomNumber = () => {
  const [minNum, setMinNum] = useState(undefined);
  const [maxNum, setMaxNum] = useState(undefined);
  const [num, setNum] = useState('');

  function handleMinClick(e) {
    e.preventDefault();
    console.log('min e.currentTarget.value', e.currentTarget.value);
    // if (e.currentTarget.value <= maxNum) {
    // } else {
    //   alert('Min number must be smaller than Max number.');
    //   return;
    // }
    setMinNum(e.currentTarget.value);
  }
  function handleMaxClick(e) {
    e.preventDefault();
    // console.log('max e.currentTarget.value', e.currentTarget.value);
    // if (e.currentTarget.value >= minNum) {
    // } else {
    //   alert('Max number must be bigger than Min number.');
    //   return;
    // }
    setMaxNum(e.currentTarget.value);
  }
  const handleClick = () => {
    // console.log('minNum', minNum);
    // console.log('maxNum', maxNum);
    setNum(randomNumberInRange(+minNum, +maxNum));
  };
  function randomNumberInRange(min, max) {
    // console.log('min', min);
    // console.log('max', max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // console.log('num', num);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h4
        style={{
          textAlign: 'center',
          marginBottom: 10,
          letterSpacing: '0.03em',
        }}
      >
        Random Number
      </h4>
      <MyInput
        type="text"
        autoComplete="off"
        value={minNum}
        placeholder="Enter min number"
        onChange={e => handleMinClick(e)}
        style={{ width: 200, textAlign: 'center' }}
        // autoFocus
      />
      <MyInput
        type="text"
        autoComplete="off"
        value={maxNum}
        placeholder="Enter max number"
        onChange={e => handleMaxClick(e)}
        style={{ width: 200, textAlign: 'center' }}
        // autoFocus
      />
      <MyButton onClick={handleClick}>Generate random number</MyButton>
      {num === '' ? (
        <>
          <p style={{ textAlign: 'center', marginTop: 10 }}>
            Your generated number is unsetted.
          </p>
          <p style={{ textAlign: 'center', marginTop: 10 }}>
            Enter min and max number value to get a result.
          </p>
        </>
      ) : (
        <p style={{ textAlign: 'center', marginTop: 10 }}>
          Your generated number is: {''}
          {isNaN(num) ? `not a number` : `${num} `}
        </p>
      )}
    </div>
  );
};

export default RandomNumber;
