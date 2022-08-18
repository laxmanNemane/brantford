import React from "react";
import "./StyleTabs/NewListed.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NewListedProperty = () => {
  return (
    <div className="row">
      <div className="col-3 text-center">
        <div className="card new_listed_cardtabs shadow">
          <div>
            <img
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-441948,resizemode-1,msid-78487988/industry/services/property-/-cstruction/india-office-property-market-shows-resilience-q3-absorption-up-64-on-quarter.jpg"
              alt=""
              className="property_imageTabs"
            />
            <div className="NewListed_propert-description">
              <h4 className="office_name-newListed">Gargoue Office</h4>
              <p className="description_new_listedtabs">
                Lorem ipsum dolor sit amet consectetur, Praesentium placeat
                autem est!
              </p>
              <div className="w-75 d-flex justify-content-between">
                <p className="price_newListedtabs">Price : 2999.99</p>
                <p className="viewIcon">
                  <NavLink to="/detail" className="text-dark">
                    <AiOutlineFolderOpen />
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewListedProperty;
