import React from "react";
import "../../Styles/LandingPage/propertySectionLandingPage.css";
import { AiOutlineBook } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

const PropertySection = () => {
  return (
    <div className="container">
      <div className="heading-property">
        <div className="row my-5">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <div className="text-start-heading  ">
              <h1>Find Better Places to Live, Work and Wonder...</h1>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 my-3 text-center card-property-landPage">
            <div className="text-start col-second">
              <img
                src="https://images.pexels.com/photos/6899393/pexels-photo-6899393.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="propertyImage"
              />
            </div>

            <div className="buttons-group">
              <ul className="buttons-icons">
                <li className="icon1">
                  <AiOutlineBook className="fs-3" />
                </li>
                <li className="icon1">
                  <BsHeart className="fs-3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3 text-center card-property-landPage">
            <div className="text-start col-second">
              <img
                src="https://images.pexels.com/photos/6899393/pexels-photo-6899393.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="propertyImage"
              />
            </div>

            <div className="buttons-group">
              <ul className="buttons-icons">
                <li className="icon1">
                  <AiOutlineBook className="fs-3" />
                </li>
                <li className="icon1">
                  <BsHeart className="fs-3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3 text-center card-property-landPage">
            <div className="text-start col-second">
              <img
                src="https://images.pexels.com/photos/6899393/pexels-photo-6899393.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="propertyImage"
              />
            </div>

            <div className="buttons-group">
              <ul className="buttons-icons">
                <li className="icon1">
                  <AiOutlineBook className="fs-3" />
                </li>
                <li className="icon1">
                  <BsHeart className="fs-3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3 text-center card-property-landPage">
            <div className="text-start col-second">
              <img
                src="https://images.pexels.com/photos/6899393/pexels-photo-6899393.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="propertyImage"
              />
            </div>

            <div className="buttons-group">
              <ul className="buttons-icons">
                <li className="icon1">
                  <AiOutlineBook className="fs-3" />
                </li>
                <li className="icon1">
                  <BsHeart className="fs-3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3 text-center card-property-landPage">
            <div className="text-start col-second">
              <img
                src="https://images.pexels.com/photos/6899393/pexels-photo-6899393.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="propertyImage"
              />
            </div>

            <div className="buttons-group">
              <ul className="buttons-icons">
                <li className="icon1">
                  <AiOutlineBook className="fs-3" />
                </li>
                <li className="icon1">
                  <BsHeart className="fs-3" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySection;
