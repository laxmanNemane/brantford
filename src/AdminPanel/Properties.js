import React, { useEffect, useState } from "react";
import HocComponent from "../Components/HocComponent";
// import allPrperty from "../Assets/Images/propertiesIcon.svg";
// import Booking from "../Assets/Images/booked.svg";
// import Users from "../Assets/Images/Approval.svg";
// import ResquestUser from "../Assets/Images/NewListed.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Services from "./TabsPages/Services";
import NewListedProperty from "./TabsPages/NewListedProperty";
import PropertyBookings from "./TabsPages/PropertyBookings";
import { BsBuilding } from "react-icons/bs";
import { FiCheckSquare, FiCheck, FiList } from "react-icons/fi";
import axios from "axios";
import AllProperties from "./TabsPages/AllProperties/AllProperties";
import AllProperty from "./TabsPages/AllProperty";
import AdminFooter from "./AdminFooter";
import { NavLink } from "react-router-dom";

const BaseUrl = "http://bantford.prometteur.in";
// const Admin_token = localStorage.getItem("token");

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [bookedProperties, setBookedProperties] = useState({});
  const [propertyCount, setPropertyCount] = useState(0);
  const [newListedCount, setNewListedCount] = useState();
  const [countAproved, setCountAproved] = useState(0);


 

  console.log("properties", properties);
  // allProperties
  const allProperties = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-properties`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setProperties(res.data.spaces);
        totalApproved(res.data.spaces);
        setPropertyCount(res.data.spaces.length);
      })
      .catch((err) => {
        // console.log(err);
      });
    // setCountAproved("");
  };

  const totalApproved = (data) => {
    // const count=0;
    console.log(data);
     let approvecount = data.filter(function(element){
      return element.approve_status == "approved";
  }).length
    console.log(approvecount);
    setCountAproved(approvecount)
  }

  // allProperties booked properties
  const allbookedProperties = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-booked-properties`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setBookedProperties(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  //new listed
  const newListed = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-newlistedpropertirs`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setNewListedCount(res.data.spaces.length);
        console.log(res);
        console.log(res.data.spaces);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    allProperties();
    allbookedProperties();
    newListed();
  }, []);

  // console.log(Object.keys(bookedProperties).length);

  // console.log(properties.spaces.length);

  // console.log(newListedCount);

  // {
  //   Object.keys(bookedProperties).map((key, index) => {
  //     console.log(key, index);
  //     console.log(bookedProperties[key]);
  //     console.log(bookedProperties[key].approve_status);
  //     if (bookedProperties[key].approve_status === "approved") {
  //       setCountAproved(index + 1)
  //     }
  //   });
  // }

  // console.log(countAproved);

  return (
    <div
      className=""
      style={{
        background: "rgb(244, 240, 242)",
        paddingLeft: "270px",
        height: "100vh",
      }}
    >
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
                <h3 className="">Properties</h3>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Quick/stacks</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="row  mx-3  ">
          <div className="ms-2" style={{ width: "99%" }}>
            <div className="d-flex justify-content-between ">
              <div className="card d-flex align-items-center shadow Main_card_usertenants_properties ">
                <div
                  className="d-flex align-items-center"
                  style={{ height: "180px" }}
                >
                  <div className="me-2">
                    <div className="property-section-icon-background first-icon">
                      <BsBuilding className="property-section-icons" />
                    </div>
                  </div>
                  <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                    <p className=" properties-sectionCard_headeing" style={{}}>
                      Total Properties
                    </p>
                    <p className="People_tenant ">{propertyCount}</p>
                  </div>
                </div>
              </div>
              <div className="card d-flex align-items-center shadow Main_card_usertenants_properties ">
                <div
                  className="d-flex align-items-center"
                  style={{ height: "180px" }}
                >
                  <div className="me-2">
                    <div className="property-section-icon-background second-icon">
                      <FiCheckSquare className="property-section-icons" />
                    </div>
                  </div>
                  <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                    <p className=" properties-sectionCard_headeing" style={{}}>
                      Total Bookings
                    </p>
                    <p className="People_tenant ">
                      {Object.keys(bookedProperties).length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card d-flex align-items-center shadow Main_card_usertenants_properties ">
                <div
                  className="d-flex align-items-center"
                  style={{ height: "180px" }}
                >
                  <div className="me-2">
                    <div className="property-section-icon-background third-icon">
                      <FiCheck className="property-section-icons" />
                    </div>
                  </div>
                  <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                    <p className="properties-sectionCard_headeing" style={{}}>
                      Approval
                    </p>
                    <p className="People_tenant ">{countAproved}</p>
                  </div>
                </div>
              </div>

              <div className="card d-flex align-items-center shadow  Main_card_usertenants_properties">
                <div
                  className="d-flex align-items-center"
                  style={{ height: "180px" }}
                >
                  <div className="me-2">
                    <div className="property-section-icon-background fourth-icon">
                      <FiList className="property-section-icons" />
                    </div>
                  </div>
                  <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                    <p className=" properties-sectionCard_headeing" style={{}}>
                      New Listed
                    </p>
                    <p className="People_tenant ">{newListedCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="ms-2 mt-5 property-tab-section"
            style={{ width: "99%" }}
          >
            <hr />
            <Tabs
              defaultActiveKey="Booking"
              id="uncontrolled-tab-example"
              className="mb-3 tabs_property"
            >
              <Tab
                eventKey="Booking"
                title="Bookings"
                tabClassName="profile-tabitem"
              >
                <PropertyBookings />
              </Tab>
              <Tab
                eventKey="New Listed Properties"
                title="New Listed Properties"
                tabClassName="profile-tabitem"
              >
                <NewListedProperty />
              </Tab>
              <Tab
                eventKey="Services"
                title="Services"
                tabClassName="profile-tabitem"
              >
                <Services />
              </Tab>

              <Tab
                eventKey="All Properties"
                title="All Properties"
                tabClassName="profile-tabitem"
              >
                <AllProperty  />
              </Tab>
            </Tabs>
          </div>

          {/* <div className="col-8 card shadow my-2">
        <div className="d-flex py-2">
          <h4 className="pt-2 me-auto">New Listed </h4>
          <button className="btn border px-4 ">View all</button>
        </div>
        <Divider style={{ margin: "0", padding: "0" }} />
        <div className="row my-4">
          <div className="col-3  ">
            <div
              className="card shodow"
              style={{
                width: "280px",
                height: "350px",
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 0 10px 5px rgba(0,0,0,0.4)",
              }}
            >
              <img
                class="card-img-top "
                src="https://mb.cision.com/Public/197/2987870/883e1676b8a71a23_800x800ar.jpg"
                alt="Card image cap"
                style={{
                  borderRadius: "20px",
                  width: "260px",
                  margin: "10px auto",
                  height: "280px",
                }}
              />
              <div class="card-body">
                <h5 className="fw-bold">Gargoru Office Area</h5>
                <p>Lorem ipsum dolor sit.</p>
                <br />
                <strong>$24.89</strong>
              </div>
            </div>
          </div>

          <div className="col-3 my-2 ">
            <div
              className="card shodow"
              style={{
                width: "280px",
                height: "350px",
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 0 10px 5px rgba(0,0,0,0.4)",
              }}
            >
              <img
                class="card-img-top "
                src="https://mb.cision.com/Public/197/2987870/883e1676b8a71a23_800x800ar.jpg"
                alt="Card image cap"
                style={{
                  borderRadius: "20px",
                  width: "260px",
                  margin: "10px auto",
                  height: "280px",
                }}
              />
              <div class="card-body">
                <h5 className="fw-bold">Gargoru Office Area</h5>
                <p>Lorem ipsum dolor sit.</p>
                <br />
                <strong>$24.89</strong>
              </div>
            </div>
          </div>
          <div className="col-3 my-2 ">
            <div
              className="card shodow"
              style={{
                width: "280px",
                height: "350px",
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 0 10px 5px rgba(0,0,0,0.4)",
              }}
            >
              <img
                class="card-img-top "
                src="https://mb.cision.com/Public/197/2987870/883e1676b8a71a23_800x800ar.jpg"
                alt="Card image cap"
                style={{
                  borderRadius: "20px",
                  width: "260px",
                  margin: "10px auto",
                  height: "280px",
                }}
              />
              <div class="card-body">
                <h5 className="fw-bold">Gargoru Office Area</h5>
                <p>Lorem ipsum dolor sit.</p>
                <br />
                <strong>$24.89</strong>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
      <AdminFooter />
    </div>
  );
};

export default HocComponent(Properties);
