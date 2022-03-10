import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SwitchTransition } from 'react-transition-group';
import './RadioButton.css';

const RadioButton = () => {
  const [mode, setMode] = useState('out-in');
  const [toggle, setToggle] = useState(false);

  function changeHandler(e) {
    // e.preventDafault();
    setMode(e.target.value);
  }

  return (
    <>
      <div className="RadioLabelWrapper">
        <div className="RadioLabelWrapperContainer">
          <label htmlFor="out-in" className="RadioLabel">
            out-in
          </label>
          <input
            onChange={e => changeHandler(e)}
            id="out-in"
            value="out-in"
            name="radio"
            type="radio"
            className="RadioInput"
          />
        </div>
        <div className="RadioLabelWrapperContainer">
          <label htmlFor="in-out" className="RadioLabel">
            in-out
          </label>
          <input
            onChange={e => changeHandler(e)}
            id="in-out"
            value="in-out"
            name="radio"
            type="radio"
            className="RadioInput"
          />
        </div>
      </div>
      <SwitchTransition mode={mode}>
        <CSSTransition key={toggle} timeout={500} classNames="fade">
          <button
            className="RadioInputBtn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? 'Hello' : 'Goodbye'}
          </button>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default RadioButton;
