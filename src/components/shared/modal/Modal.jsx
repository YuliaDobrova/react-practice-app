import React, { useCallback, useEffect } from 'react';
import './Modal.css';

const Modal = ({ active, setActive, children }) => {
  const onHandleClick = () => setActive(false);

  const handleEscKey = event => {
    if (event.key === 'Escape') {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleEscKey, false);

    return () => {
      document.removeEventListener('keyup', handleEscKey, false);
    };
  }, [handleEscKey]);

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={onHandleClick}
      onKeyUp={handleEscKey}
    >
      <div
        className={active ? 'modal-content active' : 'modal-content'}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
