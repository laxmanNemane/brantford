import React from "react";
import "../../Styles/LandingPage/HeroSection.css";
import videoBg from "../../Assets/video/pexels-alena-darmel-7646596.mp4";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="">
        <h2 className="hero-heading">
          Buy, rent or sell your without <br /> any issues
        </h2>
        {/* <p className="expant-paragraph">Expand. Renew. Relocate</p> */}
        <div className="serach-section">
          <select name="" id="" className="select-box">
            <option value="select">Select</option>
            <option value="pune">pune</option>
            <option value="banglore">banglore</option>
          </select>
          <input type="text" className="input-hero-section" />
          <button className="btn-search-herosection">Serach</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
