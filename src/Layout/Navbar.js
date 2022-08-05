import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img
            src="https://thumbs.dreamstime.com/b/city-vector-logo-home-simple-design-building-skyline-house-apartment-template-188251128.jpg"
            alt=""
            width="40"
            height="34"
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
          <ul className="navbar-nav mb-1 me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <NavLink to="/login" className="btn border bg-dark text-white">
            Login
          </NavLink>

          {/* <avtar
            navLink
            color="stylish"
            slot="toggle"
            waves-fixed
            // className="dropdown-toggle"
          >
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
              className="rounded-circle z-depth-0"
              alt="avatar image"
              height="35"
            />
          </avtar> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
