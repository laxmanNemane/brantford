import React from "react";
import HocComponent from "../Components/HocComponent";
import tenantsUser from "../Assets/Images/tenates.svg";
import Users from "../Assets/Images/user.svg";
import ResquestUser from "../Assets/Images/request.svg";
import "../Styles/Admintenants.css";
import AdminUserTable from "./AdminSubUserstable";

const AdminTenants = () => {
  return (
    <div className="row  mx-3 mt-4 d-flex">
      <h4>Connected users</h4>
      <div className="ms-2" style={{ width: "65%" }}>
        <div className="d-flex justify-content-between ">
          <div className="card d-flex align-items-center shadow Main_card_usertenants ">
            <div
              className="d-flex align-items-center"
              style={{ height: "120px" }}
            >
              <div className="me-2">
                <img src={tenantsUser} alt="" width={70} />
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
                <img src={Users} alt="" width={70} />
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
                <img src={ResquestUser} alt="" width={70} />
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
  );
};

export default HocComponent(AdminTenants);
