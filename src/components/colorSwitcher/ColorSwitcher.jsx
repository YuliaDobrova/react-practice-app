import React from 'react';
import MyButton from '../shared/button/MyButton';
import './ColorSwitcher.css';

const ColorSwitcher = () => {
  const colors = ['#004472', '#2974b1', '#2d947a', '#028175', '#487ecf'];
  let setId;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function onStartBtnClick() {
    const startBtnEl = document.querySelector('#colorSwitcherStartBtn');
    const colorSwitchWrap = document.querySelector('#colorSwitcherWrapper');
    startBtnEl.setAttribute('disabled', true);
    setId = setInterval(() => {
      colorSwitchWrap.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  }

  function onStopBtnClick() {
    const startBtnEl = document.querySelector('#colorSwitcherStartBtn');
    clearInterval(setId);
    startBtnEl.removeAttribute('disabled');
  }

  function onClearClick() {
    onStopBtnClick();
    const colorSwitchWrap = document.querySelector('#colorSwitcherWrapper');
    colorSwitchWrap.style.backgroundColor = 'transparent';
  }

  return (
    <div className="colorSwitcherWrapper" id="colorSwitcherWrapper">
      <MyButton
        id="colorSwitcherStartBtn"
        type="button"
        onClick={onStartBtnClick}
      >
        Start
      </MyButton>
      <MyButton
        id="colorSwitcherStopBtn"
        type="button"
        onClick={onStopBtnClick}
      >
        Stop
      </MyButton>
      <MyButton id="colorSwitcherClearBtn" type="button" onClick={onClearClick}>
        Clear
      </MyButton>
    </div>
  );
};

export default ColorSwitcher;
