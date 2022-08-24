import React from "react";
import "../../Styles/LandingPage/FindsProperty.css";

const FindsProperty = () => {
  return (
    <div className="container py-5">
      <div className="heading-section-findsection text-center">
        <p className="sub-heading">All property Needs one portal</p>
        <h1 className="main-heading">
          Find Better Places to Live,
          <br /> Work and Wonder...
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="image-section w-100">
            <img
              src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="image-find-section"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="discription-findpage  my-5  ">
            <p className="sub-heading ">Buy A Office</p>
            <h4 className="sub-main-heading">
              Find, Buy & Own Your <br /> Dream Office
            </h4>
            <p className="description-find-page">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus enim excepturi facere.
            </p>
            <button className="btn-for-all-landpage">Explore Buying</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindsProperty;
