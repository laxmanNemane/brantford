import React from "react";
// import { usersContext } from "../Context/UserContext";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import UserSidebar from "../UserPanel/PropertyOwnerSidebar/UserSidebar";
// import { DasbordPage } from "../Pages/DasbordPage";

const User = JSON.parse(localStorage.getItem("user"));

const HocComponent = (Component) => {
  return (props) => {
    return (
      <div className="d-flex" style={{ height: "100vh" }}>
        <div style={{ widtth: "18%" }}>
          {User.admin.profile === "admin" ? <Sidebar /> : <UserSidebar />}
        </div>
        <div style={{ width: "82%", marginLeft: "18%" }}>
          <Header />
          <Component />
        </div>
      </div>
    );
  };
};

export default HocComponent;
