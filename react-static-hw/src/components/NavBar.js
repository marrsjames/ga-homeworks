import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className="header">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
