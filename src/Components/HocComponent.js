import React from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { DasbordPage } from "../Pages/DasbordPage";

const HocComponent = (Component) => {
  return (props) => {
    return (
      <div className="d-flex w-100 " style={{ height: "100vh" }}>
        <Sidebar />
        <div className="w-100">
          <Header />
          <Component />
        </div>
      </div>
    );
  };
};

export default HocComponent;
