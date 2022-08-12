import { Divider } from "antd";
import React from "react";
import { FaJsfiddle } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { AiOutlineMessage } from "react-icons/ai";
import "../Styles/MidSectionCardPage.css";

const MidSectionCards = () => {
  return (
    <div className="row  mx-3  mt-4 ">
      <div className="col-6   ">
        <div className=" shadow border-none ">
          <div className="card-body">
            <div className="card_header  d-flex">
              <h6 className="me-auto heading_cards_midSection">
                <FaJsfiddle className="icons_cards_dashbord_section" />{" "}
                Technical Support
              </h6>
              <span>
                <FcMenu className=" icons_cards_dashbord_section" />
              </span>
            </div>
            <Divider style={{ margin: "0", padding: "0" }} />
            <div className="my-5">
              <strong>Hello No technical supports here!</strong>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="col-6 ">
        <div className="shadow ">
          <div className="card-body">
            <div className="card_header  d-flex">
              <h6 className="me-auto heading_cards_midSection">
                <AiOutlineMessage className="icons_cards_dashbord_section" />{" "}
                Message Teams
              </h6>
              <span>
                <FcMenu className="icons_cards_dashbord_section" />
              </span>
            </div>
            <Divider style={{ margin: "0", padding: "0" }} />
            <div className="my-5">
              <strong>Hello No technical supports here!</strong>
            </div>
            <Divider style={{ margin: "0", padding: "0" }} />
            <div className="text-center">
              <button className="btn Buttons_dashbord px-5 mt-3 rounded-5">
                View All messages
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default MidSectionCards;
