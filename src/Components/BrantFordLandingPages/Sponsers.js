import React from "react";
import first from "../../Assets/Images/brantfordindia.com-images-k9wjfq/client-logo-1-1.png";
import second from "../../Assets/Images/brantfordindia.com-images-k9wjfq/client-logo-2.png";
import third from "../../Assets/Images/brantfordindia.com-images-k9wjfq/client-logo-3.png";
import fourth from "../../Assets/Images/brantfordindia.com-images-k9wjfq/client-logo-4.png";
import fifth from "../../Assets/Images/brantfordindia.com-images-k9wjfq/partner-05-e1582734603812.jpg";
// import "../../Styles/LandingPage/Client.css"

const Sponsers = () => {
  return (
    <div className="client-page">
      <div className="container">
        <p className="main-heading text-center mb-5">
          Our Client
        </p>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-6 text-center">
            <ul className="list-unstyled">
              <li className=" py-1">
                <img src={first} alt="" />
              </li>

            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 text-center">
            <ul className="list-unstyled">

              <li className=" py-1">
                <img src={fourth} alt="" />
              </li>

            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 text-center">
            <ul className="list-unstyled">

              <li className=" py-1">
                <img src={third} alt="" />
              </li>

            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 text-center">
            <ul className="list-unstyled">

              <li className="py-1">
                <img src={second} alt="" />
              </li>

            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 text-center">
            <ul className="list-unstyled">

              <li className="py-1">
                <img src={fifth} alt="" />
              </li>

            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 text-center">
            <ul className="list-unstyled">

              <li className="py-1">
                <img src={second} alt="" />
              </li>

            </ul>
          </div>









        </div>
      </div>
    </div>
  );
};

export default Sponsers;
