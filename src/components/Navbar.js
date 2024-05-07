import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Whiskers Adoption Co</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
        
          <li className="nav-item">
            <Link to="/volunteer" className="nav-link">Volunteer</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;