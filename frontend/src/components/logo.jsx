import React from 'react';
import logo1 from '../assets/logo.svg';
const Logo = () => {
  return (
    <div className='header__logo'>
      <a href='./'>
        <img src={logo1} />
      </a>
    </div>
  );
};

export default Logo;
