import { Dropdown, Menu } from "antd";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { MdNoteAdd } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import logo from "../Assets/Icons/logo.png";

const Navbar = () => {
  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log("user in navbar section", user.admin.profile);
  const menu = (
    <Menu
      style={{ width: "250px" }}
      items={[
        {
          key: "1",
          label: (
            <NavLink to="/dashbord" className="fs-5">
              <MdNoteAdd className="mx-2" />
              Dashbord
            </NavLink>
          ),
        },
        {
          key: "2",
          label: (
            <NavLink to="/" className="fs-5">
              <AiOutlineSetting className="mx-2" />
              Logout
            </NavLink>
          ),
        },
      ]}
    />
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="list-unstyled d-flex">
          <li className="d-none d-lg-block nav-item pt-2">
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li className="d-none d-lg-block nav-item pt-2">
            <i class="fa-brands fa-linkedin"></i>
          </li>
          <li className="d-none d-lg-block nav-item pt-2">
            <i class="fa-brands fa-google-plus-g"></i>
          </li>
        </ul>
      </div>
      <div className="container ">
        <NavLink className="navbar-brand d-lg-none " to="/">
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
              <Link to="/allrentedspaces" className="text-dark">
                For Rent
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link to="/salingproperties" className="text-dark">
                For Sale
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link to="/contactUs" className="text-dark">
                Contact Us
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="list-unstyled  mx-auto">
          {/* {user.admin === null ? (
            <Dropdown overlay={menu} placement="topLeft" arrow>
              <li className="nav-item  d-flex align-items-center pt-2">
                {/* {user.admin.name} */}

          {/* </li>
            </Dropdown> */}
          {/* ) : ( */}
          <Link to="/login" className="text-dark">
            <li className="nav-item  d-flex align-items-center pt-2">
              {/* <BiUser /> jhhg */} <i class="fa-regular fa-user"></i>
            </li>
          </Link>
          {/* )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
