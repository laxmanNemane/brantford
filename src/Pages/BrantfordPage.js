import React from "react";
import CallToActionSection from "../Components/BrantFordLandingPages/CallToActionSection";
import HeroSection from "../Components/BrantFordLandingPages/HeroSection";
import PromiseSection from "../Components/BrantFordLandingPages/PromiseSection";
import PropertySection from "../Components/BrantFordLandingPages/PropertySection";
import TestimonialSection from "../Components/BrantFordLandingPages/TestimonialSection";
import Navbar from "../Layout/Navbar";
import videoBg from ".././Assets/video/pexels-alena-darmel-7646596.mp4";
import Footer from "../Layout/Footer";
import ".././Styles/LandingPage/brantFord.css";
import Sponsers from "../Components/BrantFordLandingPages/Sponsers";
import FindsProperty from "../Components/BrantFordLandingPages/FindsProperty";
import PostAddFree from "../Components/BrantFordLandingPages/PostAddFree";
import Cities from "../Components/BrantFordLandingPages/Cities";
import ContactForm from "../AdminPanel/Modals/ContactForm";

const BrantfordPage = () => {
  return (
    <div className="brantford-landing-page">
      {/* <Navbar /> */}
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
        <ContactForm/>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default BrantfordPage;
