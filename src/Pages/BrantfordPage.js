import React from "react";
import CallToActionSection from "../Components/BrantFordLandingPages/CallToActionSection";
import HeroSection from "../Components/BrantFordLandingPages/HeroSection";
import PromiseSection from "../Components/BrantFordLandingPages/PromiseSection";
import PropertySection from "../Components/BrantFordLandingPages/PropertySection";
import TestimonialSection from "../Components/BrantFordLandingPages/TestimonialSection";
import Navbar from "../Layout/Navbar";
import videoBg from ".././Assets/video/pexels-alena-darmel-7646596.mp4";
import Footer from "../Layout/Footer";
import Sponsers from "../Components/BrantFordLandingPages/Sponsers";

const BrantfordPage = () => {
  return (
    <div className=" brantford-landing-page">
      <Navbar />
      <video src={videoBg} autoPlay loop muted></video>
      <HeroSection />
      <div className="">
        <PropertySection />
        {/* <PromiseSection /> */}
        <CallToActionSection />
        <TestimonialSection />
        <Sponsers />
        <Footer />
      </div>
    </div>
  );
};

export default BrantfordPage;
