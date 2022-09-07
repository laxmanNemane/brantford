import React from "react";
// import "../Styles/LandingPage/Footer.css";
import gpay from ".././Assets/Icons/googlepay.svg";
import appstore from ".././Assets/Icons/appstore.svg";
import insta from ".././Assets/Icons/insta.svg";
import twitter from ".././Assets/Icons/twitter.svg";
import facebook from ".././Assets/Icons/fc.svg";
import { BsChevronRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="list-unstyled list-of-footer d-flex text-light flex-column">
              <li className="brand-heading-footer">Brantford</li>
              <li>
                <BsChevronRight /> Mobile App
              </li>
              <li>
                <BsChevronRight /> Our Services
              </li>
              <li>
                <BsChevronRight /> price trends
              </li>
              <li>
                <BsChevronRight /> Post your Property
              </li>
              <li>
                <BsChevronRight /> Builders in India
              </li>
              <li>
                <NavLink to="/terms-conditions " className="text-light">
                  <BsChevronRight /> Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="list-unstyled list-of-footer d-flex text-light flex-column">
              <li className="brand-heading-footer">Coworking Space</li>
              <li>
                <BsChevronRight /> Coworking Space In Pune
              </li>
              <li>
                <BsChevronRight /> Coworking Office Space In Mumbai
              </li>
              <li>
                <BsChevronRight /> Coworking Office Space In Delhi
              </li>
              <li>
                <BsChevronRight /> Coworking Office Space In <br />
                &nbsp;&nbsp;&nbsp;&nbsp; Hydrabad
              </li>
              <li>
                <BsChevronRight /> Coworking Office Space In <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Banglore
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="list-unstyled list-of-footer d-flex text-light flex-column">
              <li className="brand-heading-footer">Conventional Space</li>
              <li>
                <BsChevronRight /> Conventional Space In Pune
              </li>
              <li>
                <BsChevronRight /> Conventional Space In Mumbai{" "}
              </li>
              <li>
                <BsChevronRight /> Conventional Space In <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Ahemadabad
              </li>
              <li>
                <BsChevronRight /> Conventional Space In Banglore
              </li>
              <li>
                <BsChevronRight /> Conventional Space In Delhi
              </li>
              <li>
                <BsChevronRight /> Conventional Space In <br />
                &nbsp;&nbsp;&nbsp;&nbsp; Hydrabad
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="list-unstyled list-of-footer d-flex text-light flex-column">
              <li className="brand-heading-footer">Contact Us</li>
              <li>
                Toll Free -0392163876 <br />
                <span className="timing-footer">
                  Monday-Saturday(9.00AM to 11.00PM )
                </span>
              </li>
              <li>
                Email:
                <span className="email-footer">feedback@brantford.com</span>
              </li>
              <li>
                Connect with us
                <ul className="list-unstyled social-icons d-flex">
                  <li>
                    <img src={twitter} alt="twitter" />
                  </li>
                  <li>
                    <img src={facebook} alt="facebook" />
                  </li>
                  <li>
                    <img src={insta} alt="instagram" />
                  </li>
                </ul>
              </li>
              <li>
                Download the App
                <ul className="list-unstyled download-option d-flex">
                  <li>
                    <img src={gpay} alt="google Pay" />
                  </li>
                  <li>
                    <img src={appstore} alt="app store" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <p className="text-white ">
              <span className=" ms-2">©</span> Brantford India - All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
