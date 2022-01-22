import React from 'react';
import Logo from '../logo/Logo';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo className="left" />
      <Logo className="right" />

      <h1 className="header-title">React JS fundamental course</h1>
    </header>
  );
};

export default Header;
