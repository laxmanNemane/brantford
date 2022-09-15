import React, { useEffect } from "react";
import "../Style.css";
import { NavLink } from "react-router-dom";

// import ReactEcharts from "echarts-for-react";

import { BiBuildingHouse } from "react-icons/bi";

// import { FiUsers, FiWatch } from "react-icons/fi";
import ReactEcharts from "echarts-for-react";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import {
//   MdIncompleteCircle,
//   MdOutlineCancel,
//   MdOutlineWatch,
// } from "react-icons/md";
// import {
//   BiBuildingHouse,

// } from "react-icons/bi";
// import {
//   BsArrowBarUp,
//   BsArrowDown,
//   BsArrowLeft,
//   BsArrowUp,
//   BsLightningCharge,
//   BsWatch,
// } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import HocComponent from "../../Components/HocComponent";
// import { usersContext } from "../../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { getProfileUser } from "../../Redux/PropertyOwnerSlices/profileSlice";
import { FetchAllApproveProperties } from "../../Redux/PropertyOwnerSlices/allapprovedSlice";
import { FetchAllCategories } from "../../Redux/PropertyOwnerSlices/allcategoriesSlice";
import { FetchAllPendingProperties } from "../../Redux/PropertyOwnerSlices/AllpendingSlice";
import { FetchAllRejectedProperties } from "../../Redux/PropertyOwnerSlices/allRejectedSlice";
import { fetchTotalAmount } from "../../Redux/PropertyOwnerSlices/totalAmountSlice";
import { FetchAllVisitors } from "../../Redux/PropertyOwnerSlices/allVisitors";
import { FetchAllSpaces } from "../../Redux/PropertyOwnerSlices/allvenuSlice";
import { fetchTotalBooking } from "../../Redux/PropertyOwnerSlices/totalBookingslice";

const UserDashbord = () => {
  // const { users } = useContext(usersContext);

  // console.log(users);
  const data = useSelector((state) => state);
  console.log(data);
  // console.log("all venues", data.Allvenue.AllSpaces);
  // console.log("all venues length", data.Allvenue.AllSpaces.length);
  // console.log("total amount paid ", data.POAmount.totalAmount);
  // console.log(
  //   "all approved propertis",
  //   data.POApprovedProperty.ApprovepropertiesPO
  // );
  // console.log("all bookings", data.POBookings.ApprovepropertiesPO);
  // console.log(
  //   "all bookings length",
  //   data.POBookings.ApprovepropertiesPO.length
  // );
  // console.log("all categoris", data.POCategories.AllPropertyOwnerCategories);
  // console.log(
  //   "all pending properties",
  //   data.POPendingProperty.PendingPropertiesOwner
  // );
  // console.log(
  //   "all pending properties length",
  //   data.POPendingProperty.PendingPropertiesOwner.length
  // );
  // console.log(
  //   "all rejected properties",
  //   data.PORejectedProperties.RejectedpropertiesPO
  // );
  // console.log(
  //   "all rejected properties length",
  //   data.PORejectedProperties.RejectedpropertiesPO.length
  // );

  // const bookedProperties = useSelector(
  //   (state) => state.POBookings.ApprovepropertiesPO
  // );
  // console.log(bookedProperties.length);

  // var size = Object.keys(bookedProperties).length;
  // console.log(size); // Prints: 4

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileUser());
    dispatch(FetchAllApproveProperties());
    dispatch(FetchAllCategories());
    dispatch(FetchAllPendingProperties());
    dispatch(FetchAllRejectedProperties());
    dispatch(FetchAllSpaces());
    dispatch(FetchAllVisitors());
    // dispatch(fetchTotalAmount());
    // dispatch(fetchTotalBooking());

    // eslint-disable-next-line
  }, []);

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
    tooltip: {},
    legend: {
      orient: "vertical",
      bottom: "bottom",
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
          { value: `${data.Allvenue.AllSpaces.length}`, name: "Properties" },
          {
            value: `${data.POPendingProperty.PendingPropertiesOwner.length}`,
            name: "Booked Properties",
          },
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
                          <p className="value-number">
                            {data.Allvenue.AllSpaces.length}
                          </p>
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
                          <p className="value-number">
                            {
                              data.POPendingProperty.PendingPropertiesOwner
                                .length
                            }
                          </p>
                          <p className="user-dash-heading">All Pending Space</p>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="right-arrow">
                          <NavLink to="/pendingSpaces">
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
                          <p className="value-number">
                            {
                              data.PORejectedProperties.RejectedpropertiesPO
                                .length
                            }
                          </p>
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
                          <p className="value-number">
                            {" "}
                            {data.allvisitors.AllVisitors.length}
                          </p>
                          <p className="user-dash-heading">Visitors(todays)</p>
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

          <div className="col-12 mt-5 ">
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
                        className="this-week-section bg-white "
                        style={{ borderRadius: "15px" }}
                      >
                        <div
                          className=" bg-white py-3"
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
      </div>
    </div>
  );
};

export default HocComponent(UserDashbord);
