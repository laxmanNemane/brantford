import React from "react";
import first from "../../Assets/Images/brantfordindia.com-images-k9wjfq/client-logo-1-1.png"
import second from "../../Assets/Images/brantfordindia.com-images-k9wjfq/client-logo-2.png"
import third from "../../Assets/Images/brantfordindia.com-images-k9wjfq/client-logo-3.png"
import fourth from "../../Assets/Images/brantfordindia.com-images-k9wjfq/client-logo-4.png"
import fifth from "../../Assets/Images/brantfordindia.com-images-k9wjfq/partner-05-e1582734603812.jpg"
import "../../Styles/LandingPage/Client.css"

const Sponsers = () => {
  return (
    <div className="container">
      <div className="row">
        <ul className="list-unstyled client">
          <li>
            <img src={first} alt="" />
          </li>
          <li>
            <img src={second} alt="" />
          </li>
          <li>
            <img src={third} alt="" />
          </li>
          <li>
            <img src={fourth} alt="" />
          </li>
          <li>
            <img src={fifth} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sponsers;
