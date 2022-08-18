import React from "react";
import HocComponent from "../Components/HocComponent";
import ".././Styles/PropertyDetail.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import office1 from "../Assets/Images/office.avif";
import office2 from "../Assets/Images/office1.avif";
import office3 from "../Assets/Images/office2.avif";
import meetingRoom from "../Assets/Images/meeting.avif";
import canteenOffice from "../Assets/Images/canteen.avif";
import { Badge } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";

const PropertyDetailPage = () => {
  return (
    <div
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        // height: "100vh",
      }}
    >
      <div className="row mx-3">
        <div className="col-8">
          <div className="card"></div>
          <div className="mx-2 py-2">
            <h3 className="property-name-detailpage">
              Co-working Space In Baner , pune-123456
            </h3>
            <Badge
              className="property-status-badge bg-outline-primary"
              bg="success"
            >
              for rent
            </Badge>
            <p className="location-detailPage">
              <HiOutlineLocationMarker className="me-2" />
              Elite premio, Balewadi, Baner, Pune, 411045
            </p>
          </div>
          <Carousel >
            <div>
              <img src={office1} alt="" className="main-image" />
              <p className="legend">Office </p>
            </div>
            <div>
              <img src={office2} alt="" className="main-image" />
              <p className="legend">Office </p>
            </div>
            <div>
              <img src={office3} alt="" className="main-image" />
              <p className="legend">Office </p>
            </div>
            <div>
              <img src={meetingRoom} alt="" className="main-image" />
              <p className="legend">Meeting Room </p>
            </div>
            <div>
              <img src={canteenOffice} alt="" className="main-image" />
              <p className="legend">Canteen </p>
            </div>
          </Carousel>

          <div className="card py-4 px-5 shadow">
            <div>
              <h4>Details</h4>
            </div>
            <hr />
            <div className="border-detail-page">
              <div className="row mt-3">
                <div className="col-6 ">
                  <div className="">
                    <div className="d-flex justify-content-between one my-3">
                      <p className="heading-proprty-detail">PropertyId</p>
                      <p className="property-details-value">@23243</p>
                    </div>

                    <div className="d-flex justify-content-between one my-3">
                      <p className="heading-proprty-detail">Price</p>
                      <p className="property-details-value">
                        $64.99/Seats/Month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <div className="d-flex justify-content-between one my-3">
                      <p className="heading-proprty-detail">Property Type</p>
                      <p className="property-details-value">Co-working </p>
                    </div>

                    <div className="d-flex justify-content-between one my-3">
                      <p className="heading-proprty-detail">Property Status</p>
                      <p className="property-details-value">For Rent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <h3 className="property-price-detailPage">$64.99/Seats/Month</h3>
          <div className="card featurs-card  shadow">
            <div className="mx-3 py-2">
              <div>
                <h4>Features</h4>
              </div>
              <hr />
              <div className="row ">
                <div className="col-6">
                  <p className="featurs-detail">
                    <FiCheckCircle className="me-2 featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="col-6">
                  <p className="featurs-detail ">
                    <FiCheckCircle className="me-2  featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="col-6">
                  <p className="featurs-detail">
                    <FiCheckCircle className="me-2  featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="col-6">
                  <p className="featurs-detail ">
                    <FiCheckCircle className="me-2  featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="col-6">
                  <p className="featurs-detail">
                    <FiCheckCircle className="me-2  featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="col-6">
                  <p className="featurs-detail">
                    <FiCheckCircle className="me-2  featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="col-6">
                  <p className="featurs-detail">
                    <FiCheckCircle className="me-2  featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="col-6">
                  <p className="featurs-detail">
                    <FiCheckCircle className="me-2  featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>

                <div className="col-6">
                  <p className="featurs-detail">
                    <FiCheckCircle className="me-2  featues-icons" />
                    Office facilty Lorem, ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4 shadow">
            <div className="mx-3 py-2">
              <div>
                <h4>Description</h4>
              </div>
              <hr />
              <div>
                <p className="description-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam pariatur fugiat, a recusandae voluptas fuga
                  mollitia, voluptatum distinctio explicabo beatae nisi nobis
                  laborum est ipsa nulla dolorem veritatis architecto alias
                  natus repellat quis? Fugit voluptates cumque incidunt odit
                  nemo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HocComponent(PropertyDetailPage);
