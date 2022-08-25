import React from "react";
// import "../../Styles/LandingPage/HeroSection.css";
import videoBg from "../../Assets/video/pexels-alena-darmel-7646596.mp4";
import { Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-xl-8 col-md-10 col-12">
            <div className="title-landPage">
              <h2 className="title">Let's Find your office!</h2>
            </div>
            {/* <p className="expant-paragraph">Expand. Renew. Relocate</p> */}
            <div className="search-section d-flex">
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="drop-btn"
                >
                  Select City
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">pune</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Mumbai</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Banglore</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="input_search">
                <div className="input1">
                  <input
                    type="text"
                    placeholder="Search By Location"
                    className="input-serchboox"
                  />
                </div>
                <div className="serch-icon">
                  <AiOutlineSearch className="fs-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
