import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ backgroundColor = "#FBEBB5" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" style={{ backgroundColor }}>
      <div className="navbar-logo">LOGO</div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}
        style={{ backgroundColor }}
        >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Shop">Shop</Link></li>
        <li><Link to="">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <div className="icons">
          <li><Link><i className="fa-regular fa-user"></i></Link></li>
          <li><Link><i className="fa-solid fa-magnifying-glass"></i></Link></li>
          <li><Link><i className="fa-regular fa-heart"></i></Link></li>
          <li><Link to="/Cart"><i className="fa-solid fa-cart-plus"></i></Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
