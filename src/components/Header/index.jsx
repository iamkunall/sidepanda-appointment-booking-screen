import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaChevronDown } from 'react-icons/fa';
import { CiShare1 } from 'react-icons/ci';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosCloseCircle } from 'react-icons/io';

import './header.css';

const HeaderButton = ({ isMobile }) => {
  return (
    <div className={!isMobile ? 'button-wrapper' : 'button-wrapper-mobile'}>
      <a className="header-button">
        Menu{' '}
        <span className="menu-button-icon">
          <FaChevronDown />
        </span>
      </a>
      <a className="header-button">Contact Us</a>
      <a className="header-button share-link">
        <span className="share-button-icon">
          <CiShare1 />
        </span>
        Share Link
      </a>
    </div>
  );
};

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <img className="logo" src={logo} alt="Logo" />
        <button
          className="hamburger-button"
          onClick={() => setIsMenuActive((prev) => !prev)}
        >
          {isMenuActive && <IoIosCloseCircle />}
          {!isMenuActive && <GiHamburgerMenu />}
        </button>
        <HeaderButton isMobile={false} />
      </div>
      {isMenuActive && <HeaderButton isMobile={true} />}
    </div>
  );
};

export default Header;
