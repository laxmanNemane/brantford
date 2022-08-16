import React, { useState } from "react";
import "../Styles/Sidebar.css";
import Collapse from "react-bootstrap/Collapse";
import {
  AiOutlineRocket,
  AiOutlineHome,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);
  return (
    <div className="sidebar_main shadow ">
      <h5 className="Logo_admin fw-bold my-3 ">BrantFord</h5>
      <div className=" Sidebar_otption_section">
        <p
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <AiOutlineRocket className="fs-3" /> Dashbord{" "}
          <span className="arrow_indication_collapse mb-2">
            {open ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>
        </p>
        <Collapse in={open}>
          <div className="collpse-item">
            <ul className="collapse_item_list list-unstyled">
              <li>
                <NavLink to="/" className="text-dark fw-bold ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-dark fw-bold">
                  Booked
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-dark fw-bold">
                  Properties
                </NavLink>
              </li>
            </ul>
          </div>
        </Collapse>
        <p>
          <AiOutlineHome className="fs-4 mb-2 ms-1" /> Properties
        </p>
        <p>
          <AiOutlineHome className="fs-4 mb-2 ms-1" /> Properties
        </p>
        <p>
          <AiOutlineHome className="fs-4 mb-2 ms-1" /> Properties
        </p>
      </div>
      <h5 className="ms-4 fw-bold">Proprty Detail</h5>
      <div className=" Sidebar_otption_section_2">
        <p
          onClick={() => setPropertyOpen(!propertyOpen)}
          aria-controls="example-collapse-text"
          aria-expanded={propertyOpen}
        >
          <AiOutlineRocket className="fs-3 " /> Dashbord
          <span className="arrow_indication_collapse mb-2">
            {propertyOpen ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>
        </p>
        <Collapse in={propertyOpen}>
          <div className="collpse-item">
            <ul className="collapse_item_list list-unstyled">
              <li>
                <NavLink to="/" className="text-dark fw-bold ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-dark fw-bold">
                  Booked
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-dark fw-bold">
                  Properties
                </NavLink>
              </li>
            </ul>
          </div>
        </Collapse>
        <p>
          <AiOutlineHome className="fs-4 mb-2 ms-1" /> Properties
        </p>
        <p>
          <AiOutlineHome className="fs-4 mb-2 ms-1" /> Properties
        </p>
        <p>
          <AiOutlineHome className="fs-4 mb-2 ms-1" /> Properties
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
