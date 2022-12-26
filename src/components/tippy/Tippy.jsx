import React from 'react';
import Tippy from '@tippyjs/react';
import './Tippy.css';
import 'tippy.js/dist/tippy.css';

const TippyComponent = () => {
  return (
    <div className="area">
      <Tippy interactive={true} content={<span>TIPPY created with "@tippyjs/react"</span>}>
        <button className="ref-button">Hover for a Tooltip! <br/>
        <p>/\_/\</p>
        <p>=( °w° )=</p>
        <p>"") <span> __</span>  (  // </p>
        <p>"(__ __)//</p>
        </button>
      </Tippy>
    </div>
  );
};

export default TippyComponent;
