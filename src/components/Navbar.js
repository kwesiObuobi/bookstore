import React from 'react';

const Navbar = () => (
  <div className="navbar-container">
    <nav>
      <div className="logo-and-links">
        <h1 className="logo">Bookstore</h1>
        <ul className="nav-links">
          <li className="nav-link">Books</li>
          <li className="nav-link">Categories</li>
        </ul>
      </div>
      <div className="user">user</div>
    </nav>
  </div>
);

export default Navbar;
