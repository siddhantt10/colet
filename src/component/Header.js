import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div class="header">

      {/* Logo on the left */}
      <Link to="/">
        <img 
          class="header__logo" 
          src="coletLTE.png"  
          alt="logo"
        />
      </Link>


      {/* Search bar */}
      <div className='header__search'>
        <input type="text" className="header__searchInput" placeholder='Search in VIT Bhopal...' />
        <SearchIcon className='header__searchIcon'/>
      </div>


      {/* nav links */}
      <div className='header__Nav'>

        {/* Link 1 */}
        <Link to="/" className="header__link">
          <span className="header__options">
            Home
          </span>
        </Link>

        {/* Link 2 */}
        <Link to="/about" className="header__link">
          <span className="header__options">
            About
          </span>
        </Link>

        {/* Link 3 */}
        <Link to="/" className="header__link">
          <span className="header__options">
            Orders
          </span>
        </Link>

        {/* Link 4 */}
        <Link to="/login" className="header__link orange-text-bus">
          <span className="header__options header__signin">
            Sign in
          </span>
        </Link>

        {/* Link 3 */}
        <Link to="/cart" className="header__link">
          <span className="header__options">
            <ShoppingCartIcon className='cartIcon' />
          </span>

        </Link>


      </div>
      


    </div>
  )
}

export default Header;