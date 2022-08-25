import React from "react";
import { BsBuilding } from "react-icons/bs";
import { FcApproval, FcBusinessman } from "react-icons/fc";
// import "../../Styles/LandingPage/CalltoAction.css";

const CallToActionSection = () => {
  return (
    <div className="call-to-section service-section py-4">
      <div className="container py-5">
        <div className="text-center">
          <h2 className="main-heading">Why use Brantford offices?</h2>
          <p className="description-why-page">
            We ensure the best experience for your office space.
          </p>
        </div>
        <div className=" row-why-page">
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div>
                <p className="call-to-icons first-why">
                  <BsBuilding />
                </p>
                <h4 className="heading-why-brantford">
                  <span className="sr-no">0.1</span>. Over 1+ Lac properties
                </h4>
                <p className="desciption-why-brantford">
                  1000+ properties are added every day
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div>
                <p className="call-to-icons second-why">
                  <BsBuilding className="ms-3" />{" "}
                  <FcApproval className="selected-icon" />
                </p>
                <h4 className="heading-why-brantford">
                  <span className="sr-no">0.2</span>. Verification by Brantford
                  team
                </h4>
                <p className="desciption-why-brantford">
                  Photos / Videos and other details are verified on location
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div>
                <p className="call-to-icons third-why">
                  <FcBusinessman />
                </p>
                <h4 className="heading-why-brantford">
                  <span className="sr-no">0.3</span>. Large user base
                </h4>
                <p className="desciption-why-brantford">
                  High active user count and user engagement to find and close
                  deals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
