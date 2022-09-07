import React from "react";
import { NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <NavLink className="navbar-brand " to="/">
          <img
            src="https://previews.123rf.com/images/haris99/haris991807/haris99180700198/103850953-simple-pink-house-outline-logo-template-vector.jpg"
            alt=""
            width="48"
            height="40"
            className="rounded-3 me-2"
          />
          BrantFord
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
          <ul className="navbar-nav mb-1 ms-auto">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Contact Us</li>
          </ul>

          <div className="user-icon">
            <NavLink to="/login">
              <p className="user-icons-tag">
                <BiUser className="fs-4 text-light" />
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
