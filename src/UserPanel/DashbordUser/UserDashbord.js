import React, { useContext } from "react";
import "../Style.css";
import { NavLink } from "react-router-dom";
import { FiUsers, FiWatch } from "react-icons/fi";
import ReactEcharts from "echarts-for-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
import { IoIosArrowForward } from "react-icons/io";
import HocComponent from "../../Components/HocComponent";
import { usersContext } from "../../Context/UserContext";

const UserDashbord = () => {
  // const { users } = useContext(usersContext);
  // console.log(users);
  const option1 = {
    color: "#c2255c",
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };

  const option = {
    color: ["#c2255c", "#4263eb"],
    title: {
      title: "Propertis Status",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      bottom: "bottom",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Booked Properties" },
          { value: 735, name: "Rejected Properties" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className="position-relative property-owner h-100">
      <div className="user-dashbord mx-5  pb-5 ">
        <div className="row py-5">
          <div className="col-12 mb-5">
            <div className="dashbord-section-content d-flex justify-content-between align-items-center   px-4 py-2   rounded">
              <div className="heading-section-dashbord ">
                <h1 className="heading-second mb-1"> Dashbord</h1>
                <p className="paragraph">
                  Welcome to Brantford property portal
                </p>
              </div>
              <div className="heading-buttons-dashbord">
                <button className="btn-first mx-4">Refresh</button>
                <button className="btn-second">
                  <i className="fa-solid fa-gear"></i>
                </button>
              </div>
            </div>
          </div>

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
                          <p className="value-number">5,445</p>
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
                          <p className="value-number">5,445</p>
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
                          <p className="value-number">5,445</p>
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
                          <p className="value-number">5,445</p>
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

          <div className="col-12 mt-5">
            <h5 className="name mt-4">Account Summary</h5>
            <hr />
            <div className="col-12">
              <div className="account-summery-section">
                <div className="row">
                  <div className="col-8">
                    <div
                      className="this-week-section bg-white pt-5"
                      style={{ borderRadius: "15px" }}
                    >
                      <div className="icons-sections-this">
                        <div className="chart-daily mx-3">
                          <p className="paragraph fw-bold">Revenu status</p>
                          <p></p>
                          <ReactEcharts option={{ ...option1 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="this-week-section bg-white pt-5"
                      style={{ borderRadius: "15px" }}
                    >
                      <ReactEcharts option={{ ...option }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HocComponent(UserDashbord);
