import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="../../images/ecommerce-logo-png-11.jpg" alt="" />

        <ul>
          <li>
            <a href="#?">Home</a>
          </li>
          <li>
            <a href="#/">Recipes</a>
          </li>
          <li>
            <a href="#/">About Us</a>
          </li>
          <li>
            <a href="#/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
