import React from 'react';
import './NavBar.css';

import { CiSearch, CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  return (
    <nav>
      <div className='left'>
        <h1>Balloons</h1>
      </div>

      <div className='right'>
        <CiSearch className='search-icon' />
        <CiShoppingCart className='cart-icon' />
      </div>
    </nav>
  );
}

export default NavBar;