import React, { useState, useEffect, useCallback } from "react";
import HocComponent from "../Components/HocComponent";
import { IoIosAirplane } from "react-icons/io";
import { FcApproval, FcBullish } from "react-icons/fc";
// import "../Styles/DashbordPage.css";
import { RiBuildingLine } from "react-icons/ri";
import { Divider } from "antd";
import { BsPatchPlus } from "react-icons/bs";
import MidSectionCards from "../AdminPanel/MidSectionCards";
import AdminDashbordFooter from "../AdminPanel/AdminDashbordFooter";
import { NavLink, useNavigate, Link } from "react-router-dom";
import AddCategoryModel from "../AdminPanel/Modals/AddCategoryModel";
import axios from "axios";
import { useDispatch } from "react-redux";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import ProgressBar from "react-bootstrap/ProgressBar";
import Calendar from "react-calendar";
import { AiFillDollarCircle, AiFillCaretDown } from "react-icons/ai";
import AdminFooter from "../AdminPanel/AdminFooter";

const BaseUrl = "http://bantford.prometteur.in";
// const Admin_token = localStorage.getItem("token");

const DasbordPage = () => {
  const [revenue, setRevenue] = useState();
  const [showStatus, setshowStatus] = useState(false);
  const [allPropertiesCount, setAllPropertiesCount] = useState();
  const [bookedCount, setBookedCount] = useState({});
  const [bars, setbars] = useState();
  const [value, onChange] = useState(new Date());

  const [radarChart, setRadarChart] = useState({
    series: [
      {
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"],
            },
          },
        },
      },
      title: {
        show: false,
      },
      colors: ["#FF4560"],
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColor: "#FF4560",
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function (val, i) {
            if (i % 2 === 0) {
              return val;
            } else {
              return "";
            }
          },
        },
      },
    },
  });
  const [lineChart, setLineChart] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 30, 51, 34],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        sparkline: {
          enabled: false,
        },
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        show:false,
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
    },
  });

  const [circleChart, setCircleChart] = useState({
    series: [42, 47, 52, 58, 65],
    options: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
    },
  });
  const [chartData, setChartData] = useState({
    options: {
      
      chart: {
        // type: 'Line',
        id: "apexchart-example",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        show:false,

        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      legend: {
        show:false,
        // position: '',
        // width: 400,
        // position: 'top',
      },
    },
    series: [
      {
        name: "Distance Traveled",
        type: "column",
        data: [440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160],
      },
      {
        name: "Time Traveled",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16],
      },
    ],
  });
  // const [propertyBookedCount, setPropertyBookedCount] = useState(0);
  const navigate = useNavigate();

  const revenueCategory = "monthly";

  const getchartData = () => {};

  const getRevenue = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/get-revenue?revenue=${revenueCategory}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setRevenue(res.data.total_revenue);
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
        navigate("/dashbord");
      });
  };
  //  //All Properties
  const getallProperties = useCallback(() => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-properties`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAllPropertiesCount(res.data.spaces.length);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, [navigate]);

  const getBookedProperties = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-booked-properties`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.length);
        console.log(res.data);

        setBookedCount(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  // bookedCount.map((item)=> {
  //   setPropertyBookedCount(propertyBookedCount++);
  // })
  console.log(bookedCount);
  console.log(Object.keys(bookedCount).length);

  useEffect(() => {
    getBookedProperties();
    getallProperties();
    getRevenue();
    getchartData();
  }, [getallProperties]);

  // console.log(bookedCount);

  return (
    <div
      className="main-section"
      style={{
        background: "rgb(244, 240, 242)",
      }}
    >
      <div className="">
        <div className="top-banner">
          <div className="dashboard-title">
            <div className="row align-items-center">
              {/* <div className="col-lg-1 text-center ">
            <IoIosAirplane
              className="plane_icon"
              style={{ fontSize: "40px" }}
            />
           </div> */}
              <div className="col-lg-8">
                <div className="brant-title">
                  <h3 className="">Dashbord</h3>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                </div>
              </div>
              <div className="col-lg-4 text-end">
                {/* <BsPatchPlus className="fs-2 text-dark" /> */}
                <button
                  className="ms-3 btn border Buttons_dashbord"
                  onClick={() => setshowStatus(true)}
                >
                  &nbsp;Create Category
                </button>
              </div>
            </div>
          </div>

          <div className="row    align-items-center">
            <div className="col-12">
              <div className="card brant-card-body mx-4 p-4">
                <div className="mx-3 d-flex pb-3">
                  <h6 className="pt-3 me-auto card_heading_dashbord_heading">
                    All Detail
                  </h6>
                  <button className="btn border  Buttons_dashbord btn-view-all-dashbord mt-2">
                    View All
                  </button>
                </div>
                <Divider style={{ margin: "0", padding: "0" }} />
                <div className="row py-4 px-3">
                  <div className="col-4 d-flex ">
                    <div className="col-left mt-">
                      <Link to="/all-properties">
                        <RiBuildingLine
                          className="icons_dashbord"
                          style={{ fontSize: "90px" }}
                        />
                      </Link>
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

          <div className="row m-4">
            <div className="col-md-8">
              <div className="brant-card">
                <div className="brant-card-body">
                  <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                    height={380}
                  />
                </div>
              </div>

              <div className="brant-card mt-4">
                <div className="brant-card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text">
                      <h4>Download your earnings report</h4>
                      <p>There are many variations of passages.</p>
                    </div>
                    <div className="button">
                      <Link rel="stylesheet" to="">
                        <button className="brant-btn">create Report</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="brant-card">
                <div className="brant-card-body">
                  <ReactApexChart
                    options={circleChart.options}
                    series={circleChart.series}
                    type="polarArea"
                    height={380}
                  />
                </div>
                <div className="brant-card-body">
                  <div className="d-flex">
                    <div className="sales">
                      <p>This Month Revenue</p>
                      <h3>$57k</h3>
                      <p>14.5% Up From Last Month</p>
                    </div>
                    <div className="sales">
                      <p>This Month Revenue</p>
                      <h3>$57k</h3>
                      <p>14.5% Up From Last Month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-4">
            <div className="col-md-4">
              <div className="brant-card">
                <div className="brant-card-body" style={{ height: "250px" }}>
                  <ReactApexChart
                    options={lineChart.options}
                    series={lineChart.series}
                    type="line"
                    // height={350}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="brant-card">
                <div className="brant-card-body" style={{ height: "250px" }}>
                  <div className="chart-title d-flex justify-content-between align-items-center">
                    <p>Sumary</p>
                    <p>...</p>
                  </div>
                  <div className="prg-bar">
                    <div className="mt-4">
                      <ProgressBar variant="warning" now={25}  label={`25%`} />
                    </div>
                    <div className="mt-4">
                      <ProgressBar  variant="primary" now={75}  label={`75%`} />
                    </div>
                    <div className="mt-4">
                      <ProgressBar  variant="success"  now={34}  label={`34%`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="brant-card">
                <div className="brant-card-body" style={{ height: "250px" }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="total">
                      <p>Total</p>
                      <h3>356</h3>
                    </div>
                    <div className="bars">
                      <div className="d-flex justify-content-end">
                        <button className="brant-label">Today</button>
                        <button className="brant-label ms-3">This Week</button>
                      </div>
                      {/* <ReactApexChart options={bars.options} series={bars.series}type="line"height={350}/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="brant-card">
                <div className="brant-card-body" style={{  }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Transactions</h6>
                    <p>...</p>
                  </div>
                  <div className="transaction-list">
                    <ul>
                      <li className="d-flex justify-content-between align-items-center">
                        <div className="doller-icon">
                        <AiFillDollarCircle style={{fontSize: "40px", color:"#64C5B1"}}/>
                        </div>
                        <div>
                          <h5>Electricity Bill</h5>
                          <p>10 Aug 03:00PM</p>
                        </div>
                        <div>
                          <h6 className="btn-red">- $ 1254.00</h6>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <div className="doller-icon"><AiFillDollarCircle style={{fontSize: "40px", color:"#64C5B1"}}/></div>
                        <div>
                          <h5>Electricity Bill</h5>
                          <p>10 Aug 03:00PM</p>
                        </div>
                        <div>
                          <h6 className="btn-green">- $ 1254.00</h6>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <div className="doller-icon"><AiFillDollarCircle style={{fontSize: "40px", color:"#64C5B1"}}/></div>
                        <div>
                          <h5>Electricity Bill</h5>
                          <p>10 Aug 03:00PM</p>
                        </div>
                        <div>
                          <h6 className="btn-green">- $ 1254.00</h6>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <div className="doller-icon"><AiFillDollarCircle style={{fontSize: "40px", color:"#64C5B1"}}/></div>
                        <div>
                          <h5>Electricity Bill</h5>
                          <p>10 Aug 03:00PM</p>
                        </div>
                        <div>
                          <h6 className="btn-green">- $ 1254.00</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="brant-card">
                <div className="brant-card-body" style={{  }}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6>News and updates</h6>
                    <div className="select-options">
                      <select name="" id="">
                        <option value="today">today</option>
                        <option value="tomorrow">tommorow</option>
                        <option value="yesterday">yesterday</option>
                      </select>
                    </div>
                  </div>
                  <div className="transaction-list">
                    <ul>
                      <li className=" p-2">
                        <h6>36% off For pixel lights Couslations Types.</h6>
                        <p>Sorem Kpsum is simply of the printing..</p>
                      </li>
                      <li className=" p-2">
                        <h6>We are produce new product this</h6>
                        <p>Gorem Rpsum is simply text of the printing...</p>
                      </li>
                      <li className=" p-2">
                        <h6>50% off For COVID Couslations Types.</h6>
                        <p>EoremHpsum is simply dummy...</p>
                      </li>
                      
                    </ul>
                        <div className="text-center">
                          <button className="brant-label">Load more
                          <span><AiFillCaretDown/></span>
                          </button>
                        </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="brant-card">
                <div className="brant-card-body" style={{ }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Account info</h6>
                    <p>...</p>
                  </div>
                  <div className="transaction-list">
                    <ul>
                      <li className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5>Monthly Plan</h5>
                        </div>
                        <div>
                          <h6>$25</h6>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5>Taxes</h5>
                        </div>
                        <div>
                          <h6>$14</h6>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5>Monthly Plan</h5>
                        </div>
                        <div>
                          <h6>$25</h6>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <div>
                            <h5>Extra</h5>
                            <p>Netflix and other bills in this month.</p>
                          </div>
                        </div>
                        <div>
                          <h6>$25</h6>
                        </div>
                      </li>
                     
                    </ul>
                    <div className="total-balance">
                          <span>Total Balance</span>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="amt-title">$3650</h4>
                              <p className="brant-label">+1235</p>
                            </div>
                            <div>
                              <button className="d-block brant-btn-red">
                                Today
                              </button>
                              <button className="mt-3 brant-btn-blue">
                                This week
                              </button>
                            </div>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-4">
            <div className="col-md-4">
              <div className="brant-card">
                <div className="brant-card-body">
                  <Calendar
                    className="calendar"
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="brant-card">
                <div className="brant-card-body">
                  {/* <VectorMap map={esMill}  /> */}
                  <div>
                    <p>map</p>
                  </div>
                  <div>
                    <div className="prg-bar">
                      <div className="mt-4">
                        <ProgressBar variant="warning" now={25}  label={`25%`} style={{}} />
                      </div>
                      <div className="mt-4">
                        <ProgressBar variant="primary"  label={`75%`} now={75} />
                      </div>
                      <div className="mt-4">
                        <ProgressBar variant="success"  label={`34%`} now={34} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-4">
            <div className="col-md-6">
              <div className="brant-card">
                <div className="brant-card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Monthly Invoices</h6>
                    <p>...</p>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Invoice</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <button className="brant-label btn-pending">
                            Pending
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <button className="brant-label btn-paid">Paid</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <button className="brant-label btn-shipped">
                            Shipped
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <button className="brant-label btn-shipped">
                            Shipped
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <button className="brant-label btn-paid">Paid</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <button className="brant-label btn-delivered">
                            Delivered
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="brant-card">
                <div className="brant-card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Top Selling Product</h6>
                    <p>...</p>
                  </div>
                  <table className="w-100">
                    <thead>
                      <tr>
                        <th>Product 1</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Sold</th>
                        <th>Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>

                        <td>$564 </td>
                        <td>#DE2548 </td>
                        <td>60 </td>
                        <td>
                          <span className=" btn-red">Google</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <span className=" btn-green">Direct</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <span className="btn-red">Email</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <span className=" btn-blue">Refferal</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <span className="btn-green">Direct</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={40}
                                height={40}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <p className="m-0 ps-2">Customer</p>
                          </div>
                        </td>
                        <td>Sunglass</td>
                        <td>#DE2548 </td>
                        <td>$350 </td>
                        <td>
                          <span className=" btn-blue">Refferel</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-4">
            <div className="col-md-8">
              <div className="brant-card">
                <div className="brant-card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6>Popular products</h6>
                    <p>...</p>
                  </div>
                  <table className="w-100">
                    <thead>
                      <tr className="table-head">
                        <th>Product</th>
                        <th>Product Code</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-start align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={70}
                                height={70}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <h5 className="m-0 ps-2">Sport Shoe</h5>
                          </div>
                        </td>
                        <td>#DE2548 </td>
                        <td>$99.00 </td>
                        <td>
                          <div className="brant-label bg-r text-r">
                            354 sold
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-start align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={70}
                                height={70}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <h5 className="m-0 ps-2">Unique Watch</h5>
                          </div>
                        </td>
                        <td>#DE2548 </td>
                        <td>$99.00 </td>
                        <td>
                          <div className="brant-label bg-r text-r">
                            354 sold
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-start align-items-center">
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                                width={70}
                                height={70}
                                className="mb"
                                style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <h5 className="m-0 ps-2">Wireless Headphones</h5>
                          </div>
                        </td>
                        <td>#DE2548 </td>
                        <td>$99.00 </td>
                        <td>
                          <div className="brant-label bg-r text-r">
                            354 sold
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tr>
                      <div>
                        <button className="viewAll-btn">View All</button>
                      </div>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="brant-card">
                <div className="brant-card-body">
                  <div className="d-flex align-items-center justify-content-between mb-5">
                    <h6>Market Value</h6>
                    <div className="select-options">
                      <select name="" id="">
                        <option value="year">year</option>
                        <option value="month">month</option>
                        <option value="day">day</option>
                      </select>
                    </div>
                  </div>
                  <ReactApexChart
                    options={radarChart.options}
                    series={radarChart.series}
                    type="radar"
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="top-scroller" style={{ display: "block" }}>
            <a href="#">
              <p>^</p>
            </a>
          </div>

          {/* <MidSectionCards /> */}
          {/* <AdminDashbordFooter /> */}
          <AddCategoryModel
            showStatus={showStatus}
            setshowStatus={setshowStatus}
          />
        </div>
      </div>
      <AdminFooter/>
    </div>
  );
};

export default HocComponent(DasbordPage);
