import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "../../Styles/LandingPage/testimonials.css";
import { BsArrowRight } from "react-icons/bs";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 824 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialSection = () => {
  return (
    <div className="testimonials-section ">
      <div className="container">
        <div className="section-intro">
          <p className="testimonials">Testimonials</p>
          <h2 className="main-heading">
            What our customers <br />
            are Saying about Brantfort!
          </h2>
          <p className="user-brification">
            Hear from our satisfied buyers, tenants, owners and dealers
          </p>
        </div>
        <Carousel responsive={responsive} ssr={true}>
          <div className="card single-user ">
            <div className="user-profile-land-page">
              <div className="testimonial-user-profile d-flex ">
                <div>
                  <img
                    src="https://images.pexels.com/photos/1582920/pexels-photo-1582920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="user-testimonial"
                  />
                </div>
                <div className="profile-name-location align-items-center">
                  <p className="name">lakhan Nemane</p>
                  <p className="profile fw-light">owners, Pune</p>
                </div>
              </div>
              <div className="user-reviews">
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum" .
                </p>
              </div>
            </div>
          </div>
          <div className="card single-user">
            <div className="user-profile-land-page">
              <div className="testimonial-user-profile d-flex ">
                <div>
                  <img
                    src="https://images.pexels.com/photos/1582920/pexels-photo-1582920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="user-testimonial"
                  />
                </div>
                <div className="profile-name-location align-items-center">
                  <p className="name">lakhan Nemane</p>
                  <p className="profile fw-light">owners , Pune</p>
                </div>
              </div>
              <div className="user-reviews">
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum" .
                </p>
              </div>
            </div>
          </div>
          <div className="card single-user">
            <div className="user-profile-land-page">
              <div className="testimonial-user-profile d-flex ">
                <div>
                  <img
                    src="https://images.pexels.com/photos/1582920/pexels-photo-1582920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="user-testimonial"
                  />
                </div>
                <div className="profile-name-location align-items-center">
                  <p className="name">lakhan Nemane</p>
                  <p className="profile fw-light">owners , Pune</p>
                </div>
              </div>
              <div className="user-reviews">
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum" .
                </p>
              </div>
            </div>
          </div>
          <div className="card single-user">
            <div className="user-profile-land-page">
              <div className="testimonial-user-profile d-flex ">
                <div>
                  <img
                    src="https://images.pexels.com/photos/1582920/pexels-photo-1582920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="user-testimonial"
                  />
                </div>
                <div className="profile-name-location align-items-center">
                  <p className="name">lakhan Nemane</p>
                  <p className="profile">owners , Pune</p>
                </div>
              </div>
              <div className="user-reviews">
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum" .
                </p>
              </div>
            </div>
          </div>
        </Carousel>

        <div>
          <button className="btn btn-view-all">
            View all testimonial
            <BsArrowRight className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
