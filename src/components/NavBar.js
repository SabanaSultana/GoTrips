// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import navData from './NavData';

export default function NavBar() {
  return (
    <div className='navbar z-10 bg-gray-200 rounded-lg'>
      <h1 className='title animated-text'>GoTrips</h1>
      <ul className='nav-links'>
        {navData.map((navs) => (
          <li key={navs.url}>
            <Link to={navs.url}>{navs.navMenu}</Link>
          </li>
        ))}
      </ul>
      <div className='auth-buttons'>
        <Link to='/login'>
          <button className='login-button'>Login</button>
        </Link>
        <Link to='/signup'>
          <button className='signup-button'>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
