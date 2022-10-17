
import { Dropdown, Menu, Popover} from "antd";
import React from "react";
import { AiOutlineSetting,AiOutlinePoweroff, AiOutlineUser } from "react-icons/ai";
import { MdNoteAdd } from "react-icons/md";
import  { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/Icons/logo.png";
import axios from "axios";

const BaseUrl = "http://bantford.prometteur.in";
const Navbar = () => {
  const navigate = useNavigate();
let user;
  if (localStorage.getItem("user") === null) {
      user = ({admin:{profile:null}})
  }else if(localStorage.getItem("user") != null){
     user =  JSON.parse(localStorage.getItem("user"));
  }

  const logOutHandler = () => {
    axios.post(`${BaseUrl}/admin/admin-logout`, {headers: {
      Authorization: localStorage.getItem("token")
    }})
    .then((res)=> {
      
      console.log(res.data)
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/")
    })
    .catch((err)=>{console.log(err)})
  }
  
  const menu = (
    <div>
      <div className="Profile-container " style={{}}>
        <h6>{user.admin.name}</h6>
        <p>{user.admin.profile}</p>
      </div>
      <Menu
        style={{ width: "150px" }}
        items={[
          {
            key: "1",
            label: (
              <NavLink to={user.admin.profile === 'endUser'?"/enduserprofile":"/profile"} className="fs-5">
                <AiOutlineUser className="mx-2" />
                Profile
              </NavLink>
            ),
          },

          {
            type: "divider",
          },
          {
            key: "3",
            label: (
              <NavLink to="/" className="fs-5" onClick={logOutHandler}>
                <AiOutlinePoweroff className="mx-2" />
                Logout
              </NavLink>
            ),
          },
        ]}
      />
    </div>
  );



  const [loginProfile, setLoginProfile] = useState();

  const logindata = localStorage.getItem('user');
  console.log(logindata);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="list-unstyled d-flex">
          <li className="d-none d-lg-block nav-item pt-2">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li className="d-none d-lg-block nav-item pt-2">
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li className="d-none d-lg-block nav-item pt-2">
            <i className="fa-brands fa-google-plus-g"></i>
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

      { user.admin.profile === 'endUser' || user.admin.profile === 'property-owner' ?  (<>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="list-unstyled  mx-auto my-auto">
          <Popover content={menu} placement="bottomRight">
                    <img
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                      width={40}
                      height={40}
                      className="mb"
                      style={{ borderRadius: "50%" }}
                    />
                    {/* </Dropdown> */}
                  </Popover>
         
        </ul>
        </div>
      
      </>) : (<>
      
        <div className="login-btn-container d-flex">
        <NavLink to="/login">
          <button className="navbar-login-btn me-3 btn-second">Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="navbar-login-btn me-3 btn-first">Register</button>
        </NavLink>
      </div>
      
      </>)}

      


      


    </nav>
  );
};

export default Navbar;
