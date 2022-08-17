import React, { useState } from "react";
import "../Styles/Sidebar.css";
import { TiChartBar } from "react-icons/ti";
import { BsBuilding } from "react-icons/bs";
import {
  AiOutlineUsergroupAdd,
  AiOutlineInsurance,
  AiOutlineCreditCard,
  AiOutlineWechat,
  AiOutlineSetting,
  AiOutlineHome,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar_main shadow ">
      <h5 className="Logo_admin fw-bold text-center">
        <AiOutlineHome />
      </h5>
      <div className=" Sidebar_otption_section">
        <ul className="list-unstyled">
          <li className="my-3    list-sidebar-menu">
            <NavLink to="/dashbord" className="text-dark">
              <TiChartBar className="Sidebar_icons" />
              Dashbord
            </NavLink>
          </li>
          <li className="my-3   list-sidebar-menu">
            <NavLink to="/properties" className="text-dark">
              <BsBuilding className="Sidebar_icons" /> properties
            </NavLink>
          </li>
          <li className="my-3   list-sidebar-menu">
            <NavLink to="/tenants" className="text-dark">
              <AiOutlineUsergroupAdd className="Sidebar_icons" />
              Tenants
            </NavLink>
          </li>
          <li className="my-3   list-sidebar-menu">
            {/* <NavLink to="/dashbord" className="text-dark"> */}
            <AiOutlineInsurance className="Sidebar_icons" />
            Insurance
            {/* </NavLink> */}
          </li>
          <li className="my-3  list-sidebar-menu">
            <NavLink to="/revenu" className="text-dark">
              <AiOutlineCreditCard className="Sidebar_icons" />
              Income
            </NavLink>
          </li>
          <li className="my-3 list-sidebar-menu">
            {/* <NavLink to="/dashbord" className="text-dark"> */}
            <AiOutlineWechat className="Sidebar_icons" />
            Chat
            {/* </NavLink> */}
          </li>
        </ul>
        <p className="sidebar-setting">
          <AiOutlineSetting className="setting_icon" />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
