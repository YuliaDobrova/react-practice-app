import React from 'react';
import './Board.css';

const Board = () => {
  const board = document.querySelector('#board');
  const colors = [
    '#ff8fdf',
    '#faf75a',
    '#5afadf',
    '#d778fd',
    '#e67777',
    '#5abffa',
    '#b5fa5a',
    '#789bfd',
    '#7c5fff',
  ];
  // const SQUARES_NUMBER = 308;
  // const SQUARES_NUMBER = 196;
  const SQUARES_NUMBER = 60;

  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
      setColor(square);
    });

    square.addEventListener('mouseleave', () => {
      removeColor(square);
    });
    // if (square!== null && board!==null) {
    // board.append(square);
  }

  function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
  }

  function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  return (
    <>
      <div className="board-wrapper">
        <div className="board-container" id="board"></div>
      </div>
    </>
  );
};

export default Board;
