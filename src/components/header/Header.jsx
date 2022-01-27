import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <Logo className="left" />
          <Logo className="right" />
          <h1 className="header-title">React JS Practice App</h1>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
