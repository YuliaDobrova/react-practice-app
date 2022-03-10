import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import MyButton from '../shared/button/MyButton';
import './CircleLoader.css';

const CircleLoader = () => {
  const [loaderVisible, setLoaderVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaderVisible(true);
    }, 1000);
    setTimeout(() => {
      setLoaderVisible(false);
    }, 3000);
  }, []);

  return (
    <div className="CircleLoaderWrapperBox">
      <MyButton
        className="CircleLoaderBtn"
        onClick={() => setLoaderVisible(!loaderVisible)}
      >
        {loaderVisible ? 'Hide CircleLoader' : 'Show CircleLoader'}
      </MyButton>
      <div className="CircleLoaderWrapper">
        <Transition in={loaderVisible} timeout={500} mountOnEnter unmountOnExit>
          {state => <div className={`CircleLoader ${state}`}></div>}
        </Transition>
      </div>
    </div>
  );
};

export default CircleLoader;
