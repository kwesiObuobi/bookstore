import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <div className="logo-and-links">
        <h1 className="logo">Bookstore CMS</h1>
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link">Books</NavLink></li>
          <li><NavLink to="/categories" className="nav-link">Categories</NavLink></li>
        </ul>
      </div>
      <div className="user"><FaUser color="#0290ff" /></div>
    </nav>
  </div>
);

export default Navbar;
