import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../Assets/Icons/logo.png";

const Navbar = () => {

  const [loginProfile, setLoginProfile] = useState();

  const logindata = localStorage.getItem('user');
  console.log(logindata);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container ">
        <NavLink className="navbar-brand d-lg-none" to="/">
          <img src={logo} alt="" className="rounded-2 mx-3" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-1 mx-auto align-items-center">
            <li className="nav-item">Co-Working</li>
            <li className="nav-item">Commercial</li>

            <NavLink className="navbar-brand d-none d-lg-block" to="/">
              <img src={logo} alt="" className="rounded-2 mx-3" />
            </NavLink>

            <li className="nav-item">
              <Link to="/allrentedspaces">For Rent</Link>{" "}
            </li>
            <li className="nav-item">
              <Link to="/salingproperties">For Sale</Link>{" "}
            </li>
            <li className="nav-item">
              <Link to="/contactUs">Contact Us</Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="login-btn-container">

        <NavLink to="/login">
          <button className="navbar-login-btn me-3 btn-second">Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="navbar-login-btn me-3 btn-first">Register</button>
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
