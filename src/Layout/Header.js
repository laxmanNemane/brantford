import { Badge, Dropdown, Input, Menu } from "antd";
import React, { useState } from "react";
import { BsSearch, BsBell, BsBookmarkStar } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlinePoweroff, AiOutlineUser } from "react-icons/ai";
import axios from "axios";

const BaseUrl = "http://bantford.prometteur.in";
// const AuthToken = localStorage.getItem("token");

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // const [isLogout, setIsLogout] = useState(false);
  const logoutHandler = () => {
    axios.post(`http://bantford.prometteur.in/admin/admin-logout`,{
      headers:{
        Authorization: localStorage.getItem("token")
      }
    }).then((res)=>{
      console.log(res.data)
    })
    .catch((err)=> {console.log(err)})
  }
  

  const logOutHandler = () => {
    // e.preventDefault();
    // setIsLogout(true);
    console.log("clicked logout")
    axios
      .post(`http://bantford.prometteur.in/admin/admin-logout`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/");
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
    console.log("clicked");
  };

  const menu = (
    <Menu
      style={{ width: "150px" }}
      items={[
        {
          key: "1",
          label: (
            <NavLink to="/profile" className="fs-5">
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
            <button onClick={logOutHandler}>
              {/* <NavLink to="/" className="fs-5"> */}
              <AiOutlinePoweroff className="mx-2" />
              Logout
              {/* </NavLink> */}
            </button>
          ),
        },
      ]}
    />
  );

  // console.log(isLogout);

  return (
    <div className=" w-100 header_admin ">
      <div className=" mx-3" style={{ margin: "-10px 0 5px 0" }}>
        <div className="d-flex align-items-center mb-2">
          <div className=" d-flex me-auto" style={{ width: "320px" }}>
            <BsSearch className="Serach_icon" />
            <Input
              placeholder="search"
              className="input_serach"
              style={{
                paddingLeft: "35px",
                borderRadius: "10px",
                height: "35px",
              }}
            />
          </div>
          <div><button onClick={logoutHandler}>logout</button></div>
          <div className="">
            <ul className="d-flex list-unstyled list_item_header">
              <li className="header_list">
                <BsBookmarkStar className="header_icons mt-2" />
              </li>
              <li>
                <BsBell className="header_icons mt-2" />
                <Badge className="badge_count">
                  <span className="count">2</span>
                </Badge>
              </li>

              <li
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                // aria-expanded={open}
              >
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    width={40}
                    height={40}
                    className="mb"
                    style={{ borderRadius: "50%" }}
                  />
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
