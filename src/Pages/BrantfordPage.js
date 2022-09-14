import React, { useEffect } from "react";
import CallToActionSection from "../Components/BrantFordLandingPages/CallToActionSection";
import HeroSection from "../Components/BrantFordLandingPages/HeroSection";
import PromiseSection from "../Components/BrantFordLandingPages/PromiseSection";
import PropertySection from "../Components/BrantFordLandingPages/PropertySection";
import TestimonialSection from "../Components/BrantFordLandingPages/TestimonialSection";
import Navbar from "../Layout/Navbar";
import videoBg from ".././Assets/video/pexels-alena-darmel-7646596.mp4";
import Footer from "../Layout/Footer";
// import ".././Styles/LandingPage/brantFord.css";
import Sponsers from "../Components/BrantFordLandingPages/Sponsers";
import FindsProperty from "../Components/BrantFordLandingPages/FindsProperty";
import PostAddFree from "../Components/BrantFordLandingPages/PostAddFree";
import Cities from "../Components/BrantFordLandingPages/Cities";

import HocLandingPage from "../Components/HocLandingPage";

import ContactForm from "../Components/BrantFordLandingPages/ContactForm";

const BrantfordPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="brantford-landing-page">
      <div className="landing_section">
        <video src={videoBg} autoPlay loop muted></video>
        <HeroSection />
      </div>
      <div className="">
        <FindsProperty />
        <PropertySection />
        <PostAddFree />
        <PromiseSection />
        <Cities />
        <CallToActionSection />
        <TestimonialSection />
        <Sponsers />
      </div>
    </div>
  );
};

export default HocLandingPage(BrantfordPage);
