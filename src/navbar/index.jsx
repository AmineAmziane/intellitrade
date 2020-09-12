import React from "react";
import svg from "./../images/Intellitrade-Vector-01.svg";
import path from "./../images/Path.svg";
import menu from "./../images/Shape.svg";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brandnav">
        <img src={svg} alt="" />
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li className="selected">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="signin">
        <a href="/">
          Sign In
          <img src={path} alt="" />
        </a>
      </div>
      <div className="menu">
        <img src={menu} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
