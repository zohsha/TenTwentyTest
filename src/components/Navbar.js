import React, { useRef } from 'react';
import './Navbar.scss';

const Navbar = () => {

  const ref = useRef();

  const toggleMenu = () => {
    ref.current.classList.toggle("openmenu");
  };

  const handleLinkClick = (event) => {
    toggleMenu();
  };


  return(<header className="header">
    <nav>
      <ul ref={ref}>
      <i className="fa-solid fa-xmark" onClick={toggleMenu}></i>
        <a href='#about' onClick={handleLinkClick}><li>About</li></a>
        <a href='#news' onClick={handleLinkClick}><li>News</li></a>
        <a href='#services' onClick={handleLinkClick}><li>Services</li></a>
        <a href='#teams' onClick={handleLinkClick}><li>Our Team</li></a>
        <a href='#enquiry' onClick={handleLinkClick}><li>Make Enquiry</li></a>
        
      </ul>
      <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
      <button className='contactus'>Contact us<i className="fa-solid fa-arrow-right"></i></button>
    </nav>
  </header>
  )
};

export default Navbar;