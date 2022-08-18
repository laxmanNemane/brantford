import React from "react";
import HocComponent from "../Components/HocComponent";
import tenantsUser from "../Assets/Images/tenates.svg";
import Users from "../Assets/Images/user.svg";
import ResquestUser from "../Assets/Images/request.svg";
import "../Styles/Admintenants.css";
import AdminUserTable from "./AdminSubUserstable";
import { AiOutlineUserSwitch, AiOutlineTeam } from "react-icons/ai";
import { BsArrowDownLeftCircle } from "react-icons/bs";


const AdminTenants = () => {
  return (
    <div
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        height: "100vh",
      }}
    >
      <div className="row  mx-3  d-flex">
        <div className="col-12 my-2">
          <h4>Connected Users </h4>
        </div>
        <div className="ms-2" style={{ width: "65%" }}>
          <div className="d-flex justify-content-between ">
            <div className="card d-flex align-items-center shadow Main_card_usertenants ">
              <div
                className="d-flex align-items-center"
                style={{ height: "120px" }}
              >
                <div className="me-2">
                  <div className="icon-backgound-tenants first-icon">
                    <AiOutlineUserSwitch className="tenants-section-icon" />
                  </div>
                </div>
                <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                  <p className=" tenents_card-heading" style={{}}>
                    Total Tenant
                  </p>
                  <p className="People_tenant ">23</p>
                </div>
              </div>
            </div>
            <div className="card d-flex align-items-center shadow Main_card_usertenants ">
              <div
                className="d-flex align-items-center"
                style={{ height: "120px" }}
              >
                <div className="me-2">
                  <div className="icon-backgound-tenants second-icon">
                    <AiOutlineTeam className="tenants-section-icon" />
                  </div>
                </div>
                <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                  <p className=" tenents_card-heading" style={{}}>
                    All users
                  </p>
                  <p className="People_tenant ">23</p>
                </div>
              </div>
            </div>

            <div className="card d-flex align-items-center shadow  Main_card_usertenants">
              <div
                className="d-flex align-items-center"
                style={{ height: "120px" }}
              >
                <div className="me-2">
                  <div className="icon-backgound-tenants third-icon">
                    <BsArrowDownLeftCircle className="tenants-section-icon" />
                  </div>
                </div>
                <div className="ms-2 " style={{ lineHeight: "0.7" }}>
                  <p className=" tenents_card-heading" style={{}}>
                    Tenant Request
                  </p>
                  <p className="People_tenant ">23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminUserTable />
      </div>
    </div>
  );
};

export default HocComponent(AdminTenants);
