import React from 'react';
import "./NavBar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header class="header">
      <div class="left">
        <a href="#">JobSwap Navigation Bar</a>
      </div>
      <div class="mid">
        <ul class="navbar">

        <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/regform">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>

        </ul>

      </div>
      <div class="right">
        <a href="#">Welcome</a>
      </div>

    </header>
  );
}
export default Navbar;