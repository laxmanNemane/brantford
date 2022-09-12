import React from "react";
// import "../Styles/Sidebar.css";
import { TiChartBar } from "react-icons/ti";
import { BsBuilding } from "react-icons/bs";
import {
  AiOutlineUsergroupAdd,
  AiOutlineInsurance,
  AiOutlineCreditCard,
  AiOutlineWechat,
  AiOutlineSetting,
  AiOutlineHome,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { MdNoteAdd } from "react-icons/md";
const Sidebar = () => {
  // this is dropdown option
  const menu = (
    <Menu
      style={{ width: "250px" }}
      items={[
        {
          key: "1",
          label: (
            <NavLink to="/privacy-policy" className="fs-5">
              <MdNoteAdd className="mx-2" />
              Privacy Policy
            </NavLink>
          ),
        },
        {
          key: "2",
          label: (
            <NavLink to="/" className="fs-5">
              <AiOutlineSetting className="mx-2" />
              Setting
            </NavLink>
          ),
        },

        {
          type: "divider",
        },
        {
          key: "3",
          label: (
            <NavLink to="/" className="fs-5">
              <AiFillQuestionCircle className="mx-2" />
              Help
            </NavLink>
          ),
        },
      ]}
    />
  );

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
            <NavLink to="/categories" className="text-dark">
              <AiOutlineInsurance className="Sidebar_icons" />
              Categories
            </NavLink>
          </li>
          <li className="my-3  list-sidebar-menu">
            <NavLink to="/revenu" className="text-dark">
              <AiOutlineCreditCard className="Sidebar_icons" />
              Income
            </NavLink>
          </li>
          <li className="my-3  list-sidebar-menu">
            <NavLink to="/requirments" className="text-dark">
              <AiOutlineCreditCard className="Sidebar_icons" />
              Requirements
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
          <Dropdown overlay={menu} placement="topLeft" arrow>
            <AiOutlineSetting className="setting_icon" />
          </Dropdown>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
