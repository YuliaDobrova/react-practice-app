import React from 'react';
import './ColorSwitcher.css';

const colorSwitchWrap = document.querySelector('#colorSwitcherWrapper');
const startBtnEl = document.querySelector('#colorSwitcherStartBtn');
const ColorSwitcher = () => {
  const colors = [
    '#FFFFFF',
    '#2974b1',
    '#4caf96',
    '#45d6d6',
    '#009688',
    '#8bb9ff',
  ];

  // const stopBtnEl = document.querySelector('#colorSwitcherStopBtn');
  let setId;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // startBtnEl.addEventListener('click', onStartBtnClick);
  // stopBtnEl.addEventListener('click', onStopBtnClick);

  function onStartBtnClick() {
    startBtnEl.setAttribute('disabled', true);
    setId = setInterval(() => {
      colorSwitchWrap.style.backgroundColor =
        // document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  }

  function onStopBtnClick() {
    clearInterval(setId);
    startBtnEl.removeAttribute('disabled');
  }

  return (
    <div className="colorSwitcherWrapper" id="colorSwitcherWrapper">
      <button
        className="colorSwitcherBtn"
        id="colorSwitcherStartBtn"
        type="button"
        data-action="start"
        onClick={onStartBtnClick}
      >
        Start
      </button>
      <button
        className="colorSwitcherBtn"
        id="colorSwitcherStopBtn"
        type="button"
        data-action="stop"
        onClick={onStopBtnClick}
      >
        Stop
      </button>
    </div>
  );
};

export default ColorSwitcher;
