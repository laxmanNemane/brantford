import React from "react";
import "../Style.css";
import { NavLink } from "react-router-dom";
import { FiUsers, FiWatch } from "react-icons/fi";
import {
  MdIncompleteCircle,
  MdOutlineCancel,
  MdOutlineWatch,
} from "react-icons/md";
import {
  BiBuildingHouse,
  BiHome,
  BiHomeAlt,
  BiTime,
  BiTimeFive,
} from "react-icons/bi";
import {
  BsArrowBarUp,
  BsArrowDown,
  BsArrowLeft,
  BsArrowUp,
  BsLightningCharge,
  BsWatch,
} from "react-icons/bs";
// import { HiArrowTrendingUp } from "react-icons/hi";
import { FcCancel } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { TiMediaFastForward } from "react-icons/ti";
import HocComponent from "../../Components/HocComponent";

const UserDashbord = () => {
  const option1 = {
    tooltip: {
      trigger: "item",
    },
    //   legend: {
    //     bottom: "1%",
    //     fontSize:"10px"
    //     // left: "center",
    //   },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["30%", "60%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "All Properties" },
          { value: 735, name: "Booked Properties" },
          { value: 580, name: "New Listed propertis" },
        ],
      },
    ],
  };
  return (
    <div className="position-relative property-owner h-100">
      <div className="user-dashbord mx-5  pb-5 ">
        <div className="row py-5">
          <div className="col-lg-12">
            <div className="user-right-esction">
              <div className="row">
                <div className="col-3">
                  <div className="space-one">
                    <div className="row">
                      <div className="col-4">
                        <div className="dash-icons ms-2 mt-1">
                          <BiBuildingHouse />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="decsiption-user-dashbord">
                          <p className="value-number">5445</p>
                          <p className="user-dash-heading">All Spaces</p>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="right-arrow">
                          <NavLink to="/spaces">
                            <IoIosArrowForward />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="space-one">
                    <div className="row">
                      <div className="col-4">
                        <div className="dash-icons ms-2 mt-1">
                          <BiBuildingHouse />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="decsiption-user-dashbord">
                          <p className="value-number">5445</p>
                          <p className="user-dash-heading">All Booked Space</p>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="right-arrow">
                          <NavLink to="/spaces">
                            <IoIosArrowForward />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="space-one">
                    <div className="row">
                      <div className="col-4">
                        <div className="dash-icons ms-2 mt-1">
                          <BiBuildingHouse />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="decsiption-user-dashbord">
                          <p className="value-number">5445</p>
                          <p className="user-dash-heading">Rejected Space</p>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="right-arrow">
                          <NavLink to="/spaces">
                            <IoIosArrowForward />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="space-one">
                    <div className="row">
                      <div className="col-4">
                        <div className="dash-icons ms-2 mt-1">
                          <BiBuildingHouse />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="decsiption-user-dashbord">
                          <p className="value-number">5445</p>
                          <p className="user-dash-heading">Visitors </p>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="right-arrow">
                          <NavLink to="/visitors">
                            <IoIosArrowForward />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h5 className="name mt-4">Account Summary</h5>
            <hr />

            <div className="col-8">
              <div className="account-summery-section">
                <div className="row">
                  <div className="col-4">
                    <div className="this-week-section bg-white">
                      <div className="icons-sections-this">
                        <p className="icn first-icon">
                          <BsLightningCharge />
                        </p>
                      </div>
                      <p className="heading-summery fw-bold">This Month</p>
                      <p className="return-value">
                        3.54k <BsArrowDown className="text-danger" />
                      </p>
                      <p className="slope-value">+3.1 icon</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="this-week-section bg-white">
                      <div className="icons-sections-this">
                        <p className="icn second-icon">
                          <BiTimeFive />
                        </p>
                      </div>
                      <p className="heading-summery fw-bold">This Month</p>
                      <p className="return-value">
                        3.54k <BsArrowDown className="text-danger" />
                      </p>
                      <p className="slope-value">+3.1 icon</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="this-week-section bg-white">
                      <div className="icons-sections-this">
                        <p className="icn third-icon">
                          <MdIncompleteCircle />
                        </p>
                      </div>
                      <p className="heading-summery fw-bold">This Year</p>
                      <p className="return-value">3.54k</p>
                      <p className="slope-value">+3.1 icon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5 text-center ">
                        <div className="upgrade-package bg-white">
                            <p className="upgrade-heading">Upgrade to Your package </p>
                            <NavLink to="/" className="text-dark">
                                You'r now in Basic pack
                            </NavLink>
                            <br />
                            <img
                                src="https://img.freepik.com/free-vector/operating-system-upgrade-concept-illustration_114360-5629.jpg?w=740&t=st=1661843596~exp=1661844196~hmac=ec5fc44e0da3e4dd095bfc6e8d7853aef29775586cd29ea4a442d0149e04b398"
                                alt=""
                                width={200}
                            />
                            <br />

                            <button className="btn-for-all-landpage">Upgrade Now</button>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default HocComponent(UserDashbord);
