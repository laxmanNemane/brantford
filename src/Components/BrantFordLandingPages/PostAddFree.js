import React from "react";

const PostAddFree = () => {
  return (
    <div className="property-owner-section">
      <div className="container mb-3 py-5">
        <div className="heading-section-findsection text-center mb-5">
          <p className="sub-heading text-uppercase">Are you property owner?</p>
          <h1 className="main-heading">
            Sell or Rent your property faster
            <br /> with Brantford
          </h1>
        </div>
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="image-section w-100">
              <img
                src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="image-find-section"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="discription-findpage  my-5  ">
              <p className="sub-heading text-uppercase">Post you property</p>
              <h4 className="sub-main-heading">
                Property owners get free <br />
                posting when they <br />
                register
              </h4>
              <p className="description-find-page">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus enim excepturi facere.
              </p>
              <button className="btn-second">
                Post Your Property for FREE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAddFree;
