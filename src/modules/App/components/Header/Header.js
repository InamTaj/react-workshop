import React from 'react';
import logo from '../../../../static/img/logo-pacman.svg';

const Header = () => {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Workshop</h1>
      </header>
  );
};

export default Header;