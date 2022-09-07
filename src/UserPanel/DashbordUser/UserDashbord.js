import React, { useEffect } from "react";
import "../Style.css";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD

import ReactEcharts from "echarts-for-react";

import { BiBuildingHouse } from "react-icons/bi";

=======
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
>>>>>>> d9163b9 (private route which is used to authorization)
// import { HiArrowTrendingUp } from "react-icons/hi";
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
  const bookedProperties = useSelector(
    (state) => state.POBookings.ApprovepropertiesPO
  );
  console.log(bookedProperties.length);

  var size = Object.keys(bookedProperties).length;
  console.log(size); // Prints: 4

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileUser());
    dispatch(FetchAllApproveProperties());
    dispatch(FetchAllCategories());
    dispatch(FetchAllPendingProperties());
    dispatch(FetchAllRejectedProperties());
    dispatch(FetchAllSpaces());
    dispatch(FetchAllVisitors());
    dispatch(fetchTotalAmount());
    dispatch(fetchTotalBooking());

    // eslint-disable-next-line
  }, []);

  const option1 = {
<<<<<<< HEAD
    color: "#c2255c",
=======
>>>>>>> d9163b9 (private route which is used to authorization)
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
<<<<<<< HEAD
    color: ["#c2255c", "#4263eb"],
=======
>>>>>>> d9163b9 (private route which is used to authorization)
    title: {
      title: "Propertis Status",
      left: "center",
    },
<<<<<<< HEAD
    tooltip: {},
    legend: {
      orient: "vertical",
      bottom: "bottom",
    },
=======
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      bottom: "bottom",
    },
>>>>>>> d9163b9 (private route which is used to authorization)
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
<<<<<<< HEAD
          { value: 2, name: "Booked Properties" },
          { value: 1, name: "Rejected Properties" },
=======
          { value: 1048, name: "Booked Properties" },
          { value: 735, name: "Rejected Properties" },

>>>>>>> d9163b9 (private route which is used to authorization)
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

<<<<<<< HEAD
          <div className="col-12 mt-5 ">
=======
          <div className="col-12 mt-5">
>>>>>>> d9163b9 (private route which is used to authorization)
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
<<<<<<< HEAD
                    <div
                      className="this-week-section bg-white pt-5"
                      style={{ borderRadius: "15px" }}
                    >
=======
                    <div className="this-week-section bg-white pt-5"
                      style={{ borderRadius: "15px" }} >
>>>>>>> d9163b9 (private route which is used to authorization)
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
