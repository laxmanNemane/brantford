import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const HocLandingPage = (LandingPages) => {
  return (props) => {
    return (
      <div>
        <Navbar />
        <LandingPages />
        <Footer />
      </div>
    );
  };
};

export default HocLandingPage;
