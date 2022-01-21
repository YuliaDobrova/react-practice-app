import React, { useState } from 'react';
import './Input.css';

const Input = () => {
  const [value, setValue] = useState('Input text');

  const handleChange = event => setValue(event.target.value);

  return (
    <div className="InputWrapper">
      <h2>{value}</h2>
      <input className="Input" type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
