import React from 'react';
import '../styles/navbar.css';

const Header = () => {
  return (
    <header className='navbar'>
      <a className='header-text home-text' href='/'>Home</a>
      <div className='other-bar'>
        <a className='header-text' href='/eventos'>Eventos</a>
        <a className='header-text' href='/about'>Sobre</a>
      </div>
    </header>
  )
};

export default Header;