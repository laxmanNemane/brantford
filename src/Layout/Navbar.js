import React from "react";

import logo from "../Assets/Icons/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container py-2">
        {/* <NavLink className="navbar-brand " to="/"> */}
        <img src={logo} alt="" className="rounded-3 me-2" />
        {/* </NavLink> */}
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
          <ul className="navbar-nav mb-1 ms-auto">
            <li className="nav-item">Co-Working</li>
            <li className="nav-item">Commercial</li>
            <li className="nav-item">For Rent </li>
            <li className="nav-item">For Sale </li>
            <li className="nav-item">Contact Us </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
