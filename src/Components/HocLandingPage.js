import React from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

function HocLandingPage(Component) {
  return (props) => {
    return (
      <div className="">
        <Navbar />
        <Component />
        <Footer />
      </div>
    );
  };
}

export default HocLandingPage;
