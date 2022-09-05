import React, { useState, useEffect } from "react";
import HocComponent from "../Components/HocComponent";
import { IoIosAirplane } from "react-icons/io";
import { FcRating, FcPlus, FcApproval, FcBullish } from "react-icons/fc";
import "../Styles/DashbordPage.css";
import { RiBuildingLine } from "react-icons/ri";
import { Divider } from "antd";
import { BsPatchPlus } from "react-icons/bs";
import MidSectionCards from "../AdminPanel/MidSectionCards";
import AdminDashbordFooter from "../AdminPanel/AdminDashbordFooter";
import { NavLink, useNavigate } from "react-router-dom";
import AddCategoryModel from "../AdminPanel/Modals/AddCategoryModel";
import axios from "axios";
import { useDispatch } from "react-redux";

const BaseUrl = "http://bantford.prometteur.in";
const Admin_token = localStorage.getItem("admin_token");

const DasbordPage = () => {
  const [revenue, setRevenue] = useState();
  const [showStatus, setshowStatus] = useState(false);
  const [allPropertiesCount, setAllPropertiesCount] = useState();
  const [bookedCount, setBookedCount] = useState({});
  // const [propertyBookedCount, setPropertyBookedCount] = useState(0);
  const navigate = useNavigate();


  const revenueCategory = "monthly";

  const getRevenue = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/get-revenue?revenue=${revenueCategory}`, {
        headers: {
          Authorization:localStorage.getItem("admin_token"),
        },
      })
      .then((res) => {
        setRevenue(res.data.total_revenue);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        navigate("/dashbord", { replace: true });
      });
  };
  //  //All Properties
  const getallProperties = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-properties`, {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      })
      .then((res) => {
        setAllPropertiesCount(res.data.spaces.length);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBookedProperties = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-booked-properties`, {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      })
      .then((res) => {
        console.log(res.data.length);
        console.log(res.data);
      

        setBookedCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // bookedCount.map((item)=> {
  //   setPropertyBookedCount(propertyBookedCount++);
  // })
  console.log(bookedCount);
  console.log(Object.keys(bookedCount).length)


  useEffect(() => {
    getBookedProperties();
    getallProperties();
    getRevenue();
  }, []);

  // console.log(bookedCount);

  return (
    <div
      className="dashbord_section_page "
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        height: "100vh",
      }}
    >
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
            <BsPatchPlus className="fs-2 text-dark" />
            <button
              className="ms-3 btn border Buttons_dashbord"
              onClick={() => setshowStatus(true)}
            >
              &nbsp;Create Category
            </button>
          </div>
        </div>

        <div className="row  me-2  align-items-center">
          <div className="col-12  ">
            <div className="card pt-2">
              <div className="mx-3 d-flex pb-3">
                <h6 className="pt-3 me-auto card_heading_dashbord_heading">
                  All Detail
                </h6>
                <button className="btn border Buttons_dashbord btn-view-all-dashbord mt-2">
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
                    <span className="title_overiew_dashbord_page">
                      All Property
                    </span>
                    <br />
                    <span className="dashbord_page_overview_number">
                      {allPropertiesCount}
                    </span>
                    <br />
                    <span className="dashbord_page_overview_description">
                      grow rate 1%
                    </span>
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
                    <span className="title_overiew_dashbord_page">
                      Booked Properties
                    </span>
                    <br />
                    <span className="dashbord_page_overview_number">
                      {Object.keys(bookedCount).length}
                    </span>
                    <br />
                    <span className="dashbord_page_overview_description">
                      Incresed By 1%
                    </span>
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
                    <span className="title_overiew_dashbord_page">
                      {" "}
                      Revenu (Profit)
                    </span>
                    <br />
                    <span className="dashbord_page_overview_number">
                      {revenue}
                    </span>
                    <br />
                    <span className="dashbord_page_overview_description">
                      hello
                    </span>
                  </div>
                </div>
              </div>
              <Divider style={{ margin: "0", padding: "0" }} />
              <div className="row text-center">
                <div className="col-12 py-2">
                  <NavLink to="/properties" className="text-dark">
                    <button
                      className="btn Buttons_dashbord view_all_btn "
                      style={{ borderRadius: "40px", margin: "20px 0" }}
                    >
                      Overview Page
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MidSectionCards /> */}
      {/* <AdminDashbordFooter /> */}
      <AddCategoryModel showStatus={showStatus} setshowStatus={setshowStatus} />
    </div>
  );
};

export default HocComponent(DasbordPage);
