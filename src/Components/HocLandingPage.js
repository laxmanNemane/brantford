import React from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

function HocLandingPage(Component) {
  return (props) => {
    return (
      <div className="">
        <Navbar />
        <div className="postion-relative">
          <Component />
        </div>
        <Footer />
      </div>
    );
  };
}

export default HocLandingPage;
