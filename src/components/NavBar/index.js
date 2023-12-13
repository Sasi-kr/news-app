import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={'/'} className="nav-link">
        Home
      </Link>
      <Link to={'/about'} className="nav-link">
        About
      </Link>
      <Link to={'/contact'} className="nav-link">
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
