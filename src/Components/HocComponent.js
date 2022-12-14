import React from "react";
// import { usersContext } from "../Context/UserContext";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import UserSidebar from "../UserPanel/PropertyOwnerSidebar/UserSidebar";
// import { DasbordPage } from "../Pages/DasbordPage";

// const User = JSON.parse(localStorage.getItem("user"));
// console.log(User.admin.profile);

const HocComponent = (Component) => {
  return (props) => {
    return (
      <div className="" style={{ height: "100vh" }}>
        <div style={{  }}>
          {JSON.parse(localStorage.getItem("user")).admin.profile ===
          "property-owner" ? (
            <UserSidebar />
          ) : (
            <Sidebar />
          )}
        </div>
        <div style={{ }}>
          <Header />
          <Component />
        </div>
      </div>
    );
  };
};

export default HocComponent;
