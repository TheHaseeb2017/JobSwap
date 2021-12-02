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
            <Link to="/searchBYZIP">Search for Jobs</Link>
          </li>
          <li>
            <Link to="/searchByCat">Search By Category</Link>
          </li>

          <li>
            <Link to="/myJobs">My Jobs</Link>
          </li>

          <li>
            <Link to="/addJob">Add a Job</Link>
          </li>
          <li>
            <Link to="/changePassword">Change Password</Link>
          </li>
          <li>
            <Link to="/changeEmail">Change Email</Link>
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