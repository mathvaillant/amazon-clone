import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { useStateValue } from '../ContextApi/StateProvider';
import { auth } from '../firebase';


const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <div className='header1'>
        <Link to='/'>
          <img
            className='header1__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt="logo.png"
          />
        </Link>

        <Link to='/login'>
          <div className="header1__deliver">
            <div className="header1__deliver__icon">
              <LocationOnIcon className='icon' />
            </div>
            <div className="header1__deliver__location">
              <p>Deliver to</p>
              <strong>Portugal</strong>
            </div>
          </div>
        </Link>

        <div className="header1__search">
          <input
            type="text"
            className='header1__searchInput'
          />
          <SearchIcon className='header1__searchIcon' />
        </div>

        <div className="header1__nav">
          <Link to={!user && '/login'}>
            <div
              onClick={handleAuthentication}
              className='header1__option'>
              <span className='header1__optionLineOne'>
                {user ? (`Hello, ${user?.email}`) : (`Hello, Guest`)}
              </span>
              <span className='header1__optionLineTwo'>
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>
          <div className='header1__option'>
            <span className='header1__optionLineOne'>
              Return
          </span>
            <span className='header1__optionLineTwo'>
              Orders
          </span>
          </div>
          <div className='header1__option'>
            <span className='header1__optionLineOne'>
              Your
          </span>
            <span className='header1__optionLineTwo'>
              Prime
          </span>
          </div>

          <Link to='/checkout'>
            <div className="header1__optionBasket">
              <ShoppingBasketIcon />
              <span className="header1__optionLineTwo header1__basketCount">{basket?.length}</span>
            </div>
          </Link>

        </div>
      </div>
      <div className="header2">
        <ul>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Gift Cards</li>
          <li>Sell</li>
          <li>Registry</li>
          <li className="header2__covid-19">Amazon's Response to COVID-19</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
