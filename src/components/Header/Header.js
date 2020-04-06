import React from 'react';

import './Header.css'

const Header = () => (
    <header className="mainHeader" id="home">
          <a href="#home" className="homeButton" >Desiree Solomon</a>
          
          <nav className="">
            <a href="#about" className="">About</a>
            <a href="#portfolio" className="">Portfolio</a>
            <a href="#contact" className="">Contact</a>
          </nav>
       
</header>
);

export default Header;