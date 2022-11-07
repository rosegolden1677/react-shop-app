import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import { CiSearch, CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  return (
    <nav>
      <div className='left'>
        <Link to="/">
          <h1>Balloons</h1>
        </Link>
      </div>

      <div className='right'>
        <Link to="/balloons">
          <CiSearch className='search-icon' />
        </Link>
        <Link to="/cart">
          <CiShoppingCart className='cart-icon' />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;