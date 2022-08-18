import React from "react";
import HocComponent from "../Components/HocComponent";
import { IoIosAirplane } from "react-icons/io";
import { FcRating, FcPlus, FcApproval, FcBullish } from "react-icons/fc";
import "../Styles/DashbordPage.css";
import { RiBuildingLine } from "react-icons/ri";
import { Divider } from "antd";
import MidSectionCards from "../AdminPanel/MidSectionCards";
import AdminDashbordFooter from "../AdminPanel/AdminDashbordFooter";

const DasbordPage = () => {
  return (
    <div className="dashbord_section_page">
      <div className="container-fluid mx-3 ">
        <div
          className="row  me-2  mb-3 align-items-center"
          style={{ height: "120px" }}
        >
          <div className="col-lg-1 text-center ">
            <IoIosAirplane
              className="plane_icon"
              style={{ fontSize: "40px" }}
            />
          </div>
          <div className="col-lg-8">
            <h5 className="Analytic_heading">Analytic Dashbord</h5>
            <p className="dashbord_description_admin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              blanditiis nihil odit!
            </p>
          </div>
          <div className="col-lg-3 text-end">
            <button className="ms-3 btn border Buttons_dashbord">
              &nbsp;Create one
            </button>
          </div>
        </div>

        <div className="row  me-2  align-items-center">
          <div className="col-12  ">
            <div className="card pt-2">
              <div className="mx-3 d-flex pb-3">
                <h6 className="pt-3 me-auto card_heading_dashbord_heading">All Detail</h6>
                <button className="btn border Buttons_dashbord mt-2">
                  View All
                </button>
              </div>
              <Divider style={{ margin: "0", padding: "0" }} />
              <div className="row py-4 px-3">
                <div className="col-4 d-flex ">
                  <div className="col-left mt-">
                    <RiBuildingLine
                      className="icons_dashbord"
                      style={{ fontSize: "90px" }}
                    />
                  </div>
                  <div className="col-right ms-3">
                    <span className="title_overiew_dashbord_page">All Property</span>
                    <br />
                    <span className="dashbord_page_overview_number">1k</span>
                    <br />
                    <span className="dashbord_page_overview_description">grow rate 1%</span>
                  </div>
                </div>
                <div className="col-4 d-flex algn-items-center">
                  <div className="col-left ">
                    <RiBuildingLine
                      className="icons_dashbord"
                      style={{ fontSize: "90px" }}
                    />
                    <FcApproval
                      style={{
                        fontSize: "30px",
                        position: "relative",
                        right: "30px",
                        top: "30px",
                      }}
                    />
                  </div>
                  <div className="col-right ms-3 booked_section">
                    <span className="title_overiew_dashbord_page">Booked Properties</span>
                    <br />
                    <span className="dashbord_page_overview_number">574</span>
                    <br />
                    <span className="dashbord_page_overview_description">Incresed By 1%</span>
                  </div>
                </div>
                <div className="col-4 d-flex">
                  <div className="col-left">
                    <FcBullish
                      style={{ fontSize: "80px", fontColor: "pink" }}
                      className="mt-2 icons_dashbord"
                    />
                  </div>
                  <div className="col-right ms-3">
                    <span className="title_overiew_dashbord_page"> Revenu (Profit)</span>
                    <br />
                    <span className="dashbord_page_overview_number">3K</span>
                    <br />
                    <span className="dashbord_page_overview_description">hello</span>
                  </div>
                </div>
              </div>
              <Divider style={{ margin: "0", padding: "0" }} />
              <div className="row text-center">
                <div className="col-12 py-2">
                  <button
                    className="btn Buttons_dashbord view_all_btn "
                    style={{ borderRadius: "50px" }}
                  >
                    Overview Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MidSectionCards />
      <AdminDashbordFooter />
    </div>
  );
};

export default HocComponent(DasbordPage);
