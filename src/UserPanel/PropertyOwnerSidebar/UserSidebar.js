import React from "react";
// import "../Styles/Sidebar.css";
import { TiChartBar } from "react-icons/ti";
// import { BsBuilding } from "react-icons/bs";
import {
  // AiOutlineUsergroupAdd,
  // AiOutlineInsurance,
  AiOutlineCreditCard,
  AiOutlineWechat,
  AiOutlineSetting,
  AiOutlineHome,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu  } from "antd";
import { MdNoteAdd } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
const {SubMenu} = Menu;


const UserSidebar = () => {
  // this is dropdown option
  const menu = (
    <Menu
      style={{ width: "250px" }}
      items={[
        {
          key: "1",
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
          key: "2",
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
    <div>
      <div>
        <nav className="admin-sidebar">
          <div className="dashboard_logo">
          <h5 className="Logo_admin fw-bold text-center">
            <AiOutlineHome />
          </h5>
          </div>

          <div className="Sidebar_otption_section">
            <ul className="list-unstyled">
              <li
                className="my-3  list-sidebar-menu"
                data-bs-toggle="collapse"
                data-bs-target="#getting-started-collapse2"
                aria-expanded="false"
              >
                <NavLink to="/userdashbord" className="text-dark">
                  <div className="menu-list align-items-center justify-content-center">
                    <TiChartBar className="Sidebar_icons" />
                    <span>Dashboard</span>
                  </div>
                </NavLink>
                <div
                  className="collapse sub-menu-div"
                  id="getting-started-collapse2"
                >
                  <ul>
                    <li>
                      <NavLink to="/properties" className="text-dark">
                        <span> Spaces </span>
                      </NavLink>
                    </li>
                    <li>
                      <span>Booked Property</span>
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
                <NavLink to="/spaces" className="text-dark">
                  <div className="  align-items-center justify-content-center">
                    <AiOutlineCreditCard className="Sidebar_icons" />
                    <span> Spaces </span>
                  </div>
                </NavLink>
              </li>
              <li
                className="my-3   list-sidebar-menu"
                data-bs-toggle="collapse"
                data-bs-target="#getting-started-collapse"
              >
                <NavLink to="/visitors" className="text-dark">
                  <div className="menu-list align-items-center justify-content-center">
                    <AiOutlineWechat className="Sidebar_icons" />
                    <span>Visitors</span>
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

              <li className="my-3 list-sidebar-menu">
                <NavLink to="/propertycalc" className="text-dark">
                  <div className="  align-items-center justify-content-center">
                    <AiOutlineCreditCard className="Sidebar_icons" />
                    <span> Calculator </span>
                  </div>
                </NavLink>
              </li>
              <li className="my-3 list-sidebar-menu">
                <NavLink to="/market" className="text-dark">
                  <div className="  align-items-center justify-content-center">
                    <FaMapMarkedAlt className="Sidebar_icons" />
                    <span> Market </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="sideScrollBar">

          </div>
        </nav>
      </div>

           

     <p className="sidebar-setting">
        <Dropdown overlay={menu} placement="topLeft" arrow>
           <AiOutlineSetting className="setting_icon" />
         </Dropdown>
       </p>
     </div> 
  );
};

export default UserSidebar;
