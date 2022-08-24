import React from "react";
import "../../Styles/LandingPage/Promices.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { FiUserX, FiArrowRight } from "react-icons/fi";

const PromiseSection = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h2 className="main-heading"> Our Services for you</h2>
        <p className="description-why-page">
          Make your life easier with our services.
        </p>
      </div>

      <div className="row py-5">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <p className="call-to-icons first-why">
            <IoDocumentTextOutline className=" " />
          </p>

          <h5 className="name">Rentel Aggrement</h5>
          <p className="desciption-why-brantford">
            Share basic details online and get doorstep delivery of your rental
            agreement
          </p>
          <p className="fw-bold text-primary">
            Know More{" "}
            <span className="arrow-transaction">
              {" "}
              <FiArrowRight />
            </span>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <p className="call-to-icons second-why">
            <AiOutlineHome className=" " />
          </p>

          <h5 className="name">Rentel Aggrement</h5>
          <p className="desciption-why-brantford">
            Share basic details online and get doorstep delivery of your rental
            agreement
          </p>
          <p className="fw-bold text-primary">
            Know More{" "}
            <span className="arrow-transaction">
              {" "}
              <FiArrowRight />
            </span>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <p className="call-to-icons third-why">
            <FiUserX className=" " />
          </p>
          <h5 className="name">Avoid Brokers ("no brokerage")</h5>
          <p className="desciption-why-brantford">
            For end user we don't charge any fees.
          </p>
          <p className="fw-bold text-primary">
            Know More{" "}
            <span className="arrow-transaction">
              {" "}
              <FiArrowRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromiseSection;
