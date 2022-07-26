import React from 'react';
import Tippy from '@tippyjs/react';
import './Tippy.css';
import 'tippy.js/dist/tippy.css';

const TippyComponent = () => {
  return (
    <div className="area">
      <Tippy interactive={true} content={<span>TIPPY</span>}>
        <button className="ref-button">Hover for a Tooltip!</button>
      </Tippy>
    </div>
  );
};

export default TippyComponent;
