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
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { DropdownButton } from "react-bootstrap";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { MdNotes } from "react-icons/md";


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
    <nav className="admin-sidebar">
      {/* <div className="sidebar_main shadow "> */}
      <h5 className="Logo_admin fw-bold text-center">
        <AiOutlineHome />
      </h5>
      <div className="Sidebar_otption_section">
        <ul className="list-unstyled">
          <li
            className="my-3  list-sidebar-menu"
            data-bs-toggle="collapse"
            data-bs-target="#getting-started-collapse2"
            aria-expanded="false"
          >
            <NavLink to="/dashbord" className="text-dark">
              <div className="menu-list align-items-center justify-content-center">
                <TiChartBar className="Sidebar_icons" />
                <span>Dashbord</span>
              </div>
            </NavLink>
            <div
              className="collapse sub-menu-div"
              id="getting-started-collapse2"
            >
              <ul>
                <li>
                  <NavLink to="/properties" className="text-dark">
                    <span>All Property </span>
                  </NavLink>
                </li>
                <li>
                  {/* <NavLink to="/properties" className="text-dark"> */}
                    <span>Booked Property</span>
                  {/* </NavLink> */}
                </li>
                <li>
                  <NavLink to="/properties" className="text-dark">
                    <span>Revenue</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="my-3 list-sidebar-menu">
            <NavLink to="/properties" className="text-dark">
              <div className="  align-items-center justify-content-center">
                <BsBuilding className="Sidebar_icons" />
                <span> properties </span>
              </div>
            </NavLink>
          </li>
          <li
            className="my-3   list-sidebar-menu"
            data-bs-toggle="collapse"
            data-bs-target="#getting-started-collapse"
          >
            <NavLink to="/tenants" className="text-dark">
              <div className="menu-list align-items-center justify-content-center">
                <AiOutlineUsergroupAdd className="Sidebar_icons" />
                <span>Tenants</span>
              </div>
            </NavLink>
            <div
              className="collapse sub-menu-div"
              id="getting-started-collapse"
            >
              <ul>
                <li>
                  <NavLink to="/properties" className="text-dark">
                    <span>All Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/properties" className="text-dark">
                    <span>Property Owner</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/properties" className="text-dark">
                    <span>End Users</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="my-3   list-sidebar-menu">
            <NavLink to="/categories" className="text-dark">
              <div className="menu-list align-items-center justify-content-center">
                <AiOutlineInsurance className="Sidebar_icons" />
                <span>Categories</span>
              </div>
            </NavLink>
          </li>
          <li className="my-3  list-sidebar-menu">
            <NavLink to="/revenu" className="text-dark">
              <div className=" align-items-center justify-content-center">
                <AiOutlineCreditCard className="Sidebar_icons" />
                <span>Income</span>
              </div>
            </NavLink>
          </li>
          <li className="my-3  list-sidebar-menu">
            <NavLink to="/requirements" className="text-dark">
              <div className=" align-items-center justify-content-center">
                <MdNotes className="Sidebar_icons" />
                <span>Requirements</span>
              </div>
            </NavLink>
          </li>
          <li className="my-3 list-sidebar-menu">
            <NavLink to="/chat" className="text-dark">
              <div className=" align-items-center justify-content-center">
                <AiOutlineWechat className="Sidebar_icons" />
                <span>Chat</span>
              </div>
            </NavLink>
          </li>

          <li className="my-3 list-sidebar-menu">
            <NavLink to="/mail" className="text-dark">
              <div className=" align-items-center justify-content-center">
                <BiMailSend className="Sidebar_icons" />
                <span>Mail</span>
              </div>
            </NavLink>
          </li>
          <li className="my-3 list-sidebar-menu">
            <NavLink to="/market" className="text-dark">
              <div className=" align-items-center justify-content-center">
                <FaMapMarkedAlt className="Sidebar_icons" />
                <span>Market</span>
              </div>
            </NavLink>
          </li>

        </ul>
        <p className="sidebar-setting">
          <Dropdown overlay={menu} placement="topLeft" arrow>
            <AiOutlineSetting className="setting_icon" />
          </Dropdown>
        </p>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Sidebar;
