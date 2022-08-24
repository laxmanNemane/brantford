import React from "react";
import "../../Styles/LandingPage/propertySectionLandingPage.css";
import { AiOutlineBook } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const PropertySection = () => {
  return (
    <div className="container">
      <div className="heading-property">
        <div className="row">
          <div className="col-lg-12 col-sm-12 s-l-md-12 property-section-headings ">
            <p className="sub-main-heading pr-heading-main">
              Handpicked Properties for you
            </p>
            <p className="sub-heading pr-heading-sub">
              Featured commercial & co-working properties across India
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="properties">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="properties-image-land"
                />
              </div>
              <div className="price-section d-flex justify-content-between mx-4">
                <div>
                  <p className="price">765654</p>
                </div>
                <div className="d-flex">
                  <p>1</p>
                  <p>2</p>
                  <p>2</p>
                </div>
              </div>
              <div className="properties-description-card mx-2 my-3">
                <p className="property-name-heading">
                  Co-working offices space-pune
                </p>
                <p className="property-location-card">
                  Elite premio, Balewadi, Baner, Pune, 411045
                </p>
                <div className="button-space d-flex justify-content-between">
                  <p>co-working</p>
                  <button className="btn-search-herosection">Detail</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="properties">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="properties-image-land"
                />
              </div>
              <div className="properties-description-card mx-2 my-3">
                <p className="property-name-heading">
                  Co-working offices space-pune
                </p>
                <p className="property-location-card">
                  Elite premio, Balewadi, Baner, Pune, 411045
                </p>
                <div className="button-space d-flex justify-content-between">
                  <p>co-working</p>
                  <button className="btn-search-herosection">Detail</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="properties">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="properties-image-land"
                />
              </div>
              <div className="properties-description-card mx-2 my-3">
                <p className="property-name-heading">
                  Co-working offices space-pune
                </p>
                <p className="property-location-card">
                  Elite premio, Balewadi, Baner, Pune, 411045
                </p>
                <div className="button-space d-flex justify-content-between">
                  <p>co-working</p>
                  <button className="btn-search-herosection">Detail</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="properties">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="properties-image-land"
                />
              </div>
              <div className="properties-description-card mx-2 my-3">
                <p className="property-name-heading">
                  Co-working offices space-pune
                </p>
                <p className="property-location-card">
                  Elite premio, Balewadi, Baner, Pune, 411045
                </p>
                <div className="button-space d-flex justify-content-between">
                  <p>co-working</p>
                  <button className="btn-search-herosection">Detail</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="properties">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="properties-image-land"
                />
              </div>

              <div className="properties-description-card mx-2 my-3">
                <p className="property-name-heading">
                  Co-working offices space-pune
                </p>
                <p className="property-location-card">
                  Elite premio, Balewadi, Baner, Pune, 411045
                </p>
                <div className="button-space d-flex justify-content-between">
                  <p>co-working</p>
                  <button className="btn-search-herosection">Detail</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="properties">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="properties-image-land"
                />
              </div>
              <div className="properties-description-card mx-2 my-3">
                <p className="property-name-heading">
                  Co-working offices space-pune
                </p>
                <p className="property-location-card">
                  Elite premio, Balewadi, Baner, Pune, 411045
                </p>
                <div className="button-space d-flex justify-content-between">
                  <p>co-working</p>
                  <button className="btn-search-herosection">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySection;
