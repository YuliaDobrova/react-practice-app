import React from 'react';
import './ShiningBtn.css';

const ShiningBtn = () => {
  return (
    <div className="shining-btn-container">
      <a
        href="https://yuliadobrova.github.io/my-resume/"
        className="shining-btn"
        target="_blank"
      >
        → <b>Check out my CV</b>
      </a>
    </div>
  );
};

export default ShiningBtn;
