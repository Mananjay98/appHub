import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/*Logo*/}
        <div className="logo">
          <h2>
            <span>A</span>pplication
            <span>H</span>ub
          </h2>
        </div>
        {/*Navigation links*/}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/applica">Applications</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="button">
          <ul className="buttonName">
            <li>
              <button type="submit" className="btn">SIGNUP</button>
            </li>
            <li>
              <button type="submit" className="btn">LOGIN</button>
            </li>
          </ul>
          {/* hamburget menu   */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
