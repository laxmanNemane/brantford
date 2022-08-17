import React from "react";
import "../Styles/AdminProperty.css";
import HocComponent from "../Components/HocComponent";
import allPrperty from "../Assets/Images/propertiesIcon.svg";
import Booking from "../Assets/Images/booked.svg";
import Users from "../Assets/Images/Approval.svg";
import ResquestUser from "../Assets/Images/NewListed.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Services from "./TabsPages/Services";
import NewListedProperty from "./TabsPages/NewListedProperty";
import PropertyBookings from "./TabsPages/PropertyBookings";

const Properties = () => {
  return (
    <div className="row  mx-3  mt-4 ">
      <div className="col-12 my-2">
        <h4>Quick Stats</h4>
      </div>

      <div className="ms-2" style={{ width: "99%" }}>
        <div className="d-flex justify-content-between ">
          <div className="card d-flex align-items-center shadow Main_card_usertenants_properties ">
            <div
              className="d-flex align-items-center"
              style={{ height: "180px" }}
            >
              <div className="me-2">
                <img src={allPrperty} alt="" width={150} />
              </div>
              <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                <p className=" properties-sectionCard_headeing" style={{}}>
                  Total Properties
                </p>
                <p className="People_tenant ">1K</p>
              </div>
            </div>
          </div>
          <div className="card d-flex align-items-center shadow Main_card_usertenants_properties ">
            <div
              className="d-flex align-items-center"
              style={{ height: "180px" }}
            >
              <div className="me-2">
                <img src={Booking} alt="" width={150} />
              </div>
              <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                <p className=" properties-sectionCard_headeing" style={{}}>
                  Total Booking
                </p>
                <p className="People_tenant ">574</p>
              </div>
            </div>
          </div>
          <div className="card d-flex align-items-center shadow Main_card_usertenants_properties ">
            <div
              className="d-flex align-items-center"
              style={{ height: "180px" }}
            >
              <div className="me-2">
                <img src={Users} alt="" width={150} />
              </div>
              <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                <p className="properties-sectionCard_headeing" style={{}}>
                  Approval
                </p>
                <p className="People_tenant ">15</p>
              </div>
            </div>
          </div>

          <div className="card d-flex align-items-center shadow  Main_card_usertenants_properties">
            <div
              className="d-flex align-items-center"
              style={{ height: "180px" }}
            >
              <div className="me-2">
                <img src={ResquestUser} alt="" width={150} />
              </div>
              <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                <p className=" properties-sectionCard_headeing" style={{}}>
                  New Listed
                </p>
                <p className="People_tenant ">20</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ms-2 mt-5" style={{ width: "99%" }}>
        <Tabs
          defaultActiveKey="Booking"
          id="uncontrolled-tab-example"
          className="mb-3 tabs_property"
        >
          <Tab eventKey="Booking" title="Booking">
        <PropertyBookings/>
          </Tab>
          <Tab eventKey="New Listed Properties" title="New Listed Properties">
            <NewListedProperty />
          </Tab>
          <Tab eventKey="Services" title="Services">
            <Services />
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
  );
};

export default HocComponent(Properties);
