import React, { useEffect, useState } from "react";
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
import CompareSidebar from "../Components/BrantFordLandingPages/CompareSidebar";
import ChatBot from "../Components/ChatBot";

const BrantfordPage = () => {
  const [locationCords, setLocationCords] = useState();

  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      setLocationCords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log(
        position.coords.latitude,
        position.coords.longitude,
        position.coords.speed,
        position
      );
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    geoLocation();
  }, []);


 

  console.log(locationCords)

  return (
    <>
      <div className="brantford-landing-page w-100">
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
          {/* <TestimonialSection /> */}
          <Sponsers />
        </div>
        <ChatBot/>
      </div>

    </>
  );
};

export default HocLandingPage(BrantfordPage);
