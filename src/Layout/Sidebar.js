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
  AiOutlineHome
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar_main shadow ">
      <h5 className="Logo_admin fw-bold text-center"><AiOutlineHome /></h5>
      <div className=" Sidebar_otption_section">
        <ul className="list-unstyled">
          <li className="my-3">
            <TiChartBar className="Sidebar_icons" />
            Dashbord
          </li>
          <li className="my-3">
            <BsBuilding  className="Sidebar_icons"/> properties
          </li>
          <li className="my-3">
            <AiOutlineUsergroupAdd  className="Sidebar_icons"/>
            Tenants
          </li>
          <li className="my-3">
            <AiOutlineInsurance  className="Sidebar_icons"/>
            Insurance
          </li>
          <li className="my-3">
            <AiOutlineCreditCard  className="Sidebar_icons"/>
            Income
          </li>
          <li className="my-3">
            <AiOutlineWechat  className="Sidebar_icons" />
            Chat
          </li>
        </ul>
        <p className="sidebar-setting"><AiOutlineSetting className="setting_icon" /></p>
      </div>
    </div>
  );
};

export default Sidebar;
