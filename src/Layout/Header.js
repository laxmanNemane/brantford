import { Badge, Dropdown, Input, Menu, Popover, Modal } from "antd";
import React, { useState } from "react";
import { BsSearch, BsBell, BsBookmarkStar } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AiOutlinePoweroff,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import axios, { Axios } from "axios";
import { get } from "jquery";
import { useEffect } from "react";

const BaseUrl = "http://bantford.prometteur.in";
// const AuthToken = localStorage.getItem("token");

const Header = () => {
  const [open, setOpen] = useState(false);
  const [marketPrices, setMarketPrices] = useState([]);
  const navigate = useNavigate();


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const [isLogout, setIsLogout] = useState(false);
  const logoutHandler = () => {
    axios
      .post(`http://bantford.prometteur.in/admin/admin-logout`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logOutHandler = () => {
    // e.preventDefault();
    // setIsLogout(true);
    console.log("clicked logout");
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

  const notifications = (
    <div className="popover-notification">
      <div className="notification-title">
        <h6>Notification</h6>
      </div>
      <div style={{ height: "300px", overflow: "auto" }} className="notification-list">
        <ul className="">
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt=""
                width="40"
                height="40"
                className="mb"
                style={{ borderRadius: "" }}
              />
              <div className="ms-4">
                <h6>Cool Marketing</h6>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt=""
                width="40"
                height="40"
                className="mb"
                style={{ borderRadius: "" }}
              />
              <div className="ms-4">
                <h6>Cool Marketing</h6>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt=""
                width="40"
                height="40"
                className="mb"
                style={{ borderRadius: "" }}
              />
              <div className="ms-4">
                <h6>Cool Marketing</h6>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt=""
                width="40"
                height="40"
                className="mb"
                style={{ borderRadius: "" }}
              />
              <div className="ms-4">
                <h6>Cool Marketing</h6>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt=""
                width="40"
                height="40"
                className="mb"
                style={{ borderRadius: "" }}
              />
              <div className="ms-4">
                <h6>Cool Marketing</h6>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center p-4 bg-light">
        <button className="brant-btn-blue text-center">See All</button>
      </div>
    </div>
  );

  const popovermessages = (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  style={{ top: 20, left:10 }}>
      <div className="message-box">
        div
        <p></p>
        <p></p>
        <p></p>
      </div>
      </Modal>
  )

  const menu = (
    <div>
      <div className="Profile-container " style={{}}>
        <h6>Name</h6>
        <p>admin</p>
      </div>
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

  const getMarketPrices = () => {
    const options = {
      method: "GET",
      url: "https://latest-stock-price.p.rapidapi.com/price",
      params: { Indices: "NIFTY 50" },
      headers: {
        "X-RapidAPI-Key": "fb0dc31435msh800d9ca4e73bcacp1e8e76jsnd83a9811bd4d",
        "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMarketPrices(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };



  useEffect(() => {
    // getMarketPrices();
  }, []);
  // console.log(isLogout);

  return (
    <>
     {/* <marquee behavior="" direction="">
       <p>market prices</p>
       </marquee> */}
     

      <div className=" w-100 header_admin ">
        <div className=" mx-3" style={{ margin: "-10px 0 5px 0" }}>
          <div className="d-flex align-items-center mb-2">
            <div
              className=" d-flex me-auto position-relative"
              style={{ width: "320px" }}
             >
              <BsSearch className="Search_icon position-absolute" />
              <Input
                placeholder="search here..."
                className="input_search position-relative"
                style={{
                  paddingLeft: "35px",
                  borderRadius: "10px",
                  height: "35px",
                }}
              />
            </div>
            <div className="">
              <ul className="d-flex list-unstyled list_item_header">
                <li className="header_list">
                <Popover
                    content={popovermessages}
                    placement="bottomRight"
                    trigger="click"
                    onClick={showModal}
                  >
                  <AiOutlineMail className="header_icons mt-2" />
                  </Popover>
                  
                </li>
                <li>
                  <Popover
                    content={notifications}
                    placement="bottomRight"
                    trigger="click"
                  >
                    <BsBell className="header_icons mt-2" />
                    <Badge className="badge_count">
                      <span className="count">2</span>
                    </Badge>
                  </Popover>
                </li>

                <li
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  // aria-expanded={open}
                >
                  {/* <Dropdown overlay={menu} placement="bottomRight" arrow> */}
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
