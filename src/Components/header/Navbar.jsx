// Header.js
import React from 'react';
import './Navbar.css';
import logo from '../../assets/monkeyhead.svg';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo"><img src={logo}/> THE 100% FREE QR CODE GENERATOR</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">English</a></li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
