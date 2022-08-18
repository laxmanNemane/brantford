import { Badge, Divider, Input, Modal } from "antd";
import React, { useState } from "react";
import { BsSearch, BsBell, BsBookmarkStar } from "react-icons/bs";
import { Collapse } from "react-bootstrap";
import "../Styles/DashbordHeader.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
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
                aria-expanded={open}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2020/11/22/22/17/male-5768177_960_720.png"
                  alt=""
                  width={40}
                  height={40}
                  className="mb"
                  style={{ borderRadius: "50%" }}
                />
                <Collapse in={open}>
                  <div id="example-collapse-text">hdehd</div>
                </Collapse>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
