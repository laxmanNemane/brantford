import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import office1 from "../Assets/Images/office.avif";
import office2 from "../Assets/Images/office1.avif";
import office3 from "../Assets/Images/office2.avif";
import meetingRoom from "../Assets/Images/meeting.avif";
import canteenOffice from "../Assets/Images/canteen.avif";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "../Styles/EndUser/officesPage.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { BiCalendar, BiUser } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import axios from "axios";

const BaseUrl = "http://bantford.prometteur.in";
// const token = localStorage.getItem("endUser_token");

// --------fs-3----

const OfficesDetailPage = () => {
  // console.log(localStorage.getItem("endUser_token"));

  const handleReset = (values) => {};

  const handleSubmit = (values) => {
    // console.log("hello lakhan ");
    console.log(values);

    axios
      .post(`${BaseUrl}/endUser/send-requirement`, values, {
        headers: {
          Authorization: localStorage.getItem("endUser_token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(()=>{
  //   handleSubmit();
  // },[])

  return (
    <div className="office-detail-section hj py-5 position-relative">
      <div className="container ">
        <div className="row position-relative">
          <div className="col-lg-8 mb-4">
            <div className="office-detail">
              <p className="fs-3 fw-bold">Co-working Space</p>
              <p className="tag pb-2 rounded-2">For Rent</p>
              <p className="sub-heading">
                <HiOutlineLocationMarker className="me-2" /> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Beatae commodi aperiam
                quae!
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="offices-icons w-25 ms-auto    ">
              <ul className="list-unstyled  text-end d-flex justify-content-between">
                <li className="icon-offices fw-bold">
                  <AiOutlineArrowsAlt />
                </li>
                <li className="icon-offices fw-bold">
                  <BsHeart />
                </li>
                <li className="icon-offices fw-bold">
                  <BsPlusCircle />
                </li>
              </ul>
            </div>
            <div className="w-50 ms-auto">
              <p className="actual-price fs-3 fw-bold">
                ₹<span className="price1">9,500</span>/Seat/Month
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="office-view-named-carousel">
              <div className="carousel-group">
                <Carousel>
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
              </div>
            </div>
            <div className="description-offices">
              <div className="heading-description">
                <h5 className="office-sub-heading">Description</h5>
              </div>
              <hr />
              <div className="decription-paragraph">
                <p>
                  This co-working space is located in one of the prime locations
                  of Ahmedabad. It offers comprehensive business solutions to
                  all its clients.
                </p>
                <p>
                  The community here ranges from freelance consultants to
                  growing SMEs and enterprise businesses across a variety of
                  industries. The space provides networking opportunities and
                  business services relevant to their needs.
                </p>
                <p>
                  Here, a community is formed where a business can grow with
                  fellow peers, share and brainstorm ideas with the members, and
                  exchange services from each other. This is a new, unique and
                  better way of working, growing, and expanding.
                </p>
              </div>
            </div>
            <div className="detail-property-owner">
              <div className="heading-detail-property-owner d-flex justify-content-between">
                <h5 className="office-sub-heading">Detail </h5>
                <p>
                  {" "}
                  <BiCalendar className="fs-5 me-2 icon-featured" />
                  Updated on August 18, 2022 at 11:31 am
                </p>
              </div>
              <hr />
              <div className="property-owner-detail">
                <div className="row mt-3">
                  <div className="col-6 ">
                    <div className="">
                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold fw-bold">
                          PropertyId :
                        </p>
                        <p className="property-details-value">@23243</p>
                      </div>

                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          Price :
                        </p>
                        <p className="property-details-value">
                          $64.99/Seats/Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="">
                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          Property Type :
                        </p>
                        <p className="property-details-value">Co-working </p>
                      </div>

                      <div className="d-flex one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          Property Status :
                        </p>
                        <p className="property-details-value">For Rent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="additional-detail-property-owner mt-5 ">
                <h5 className="office-sub-heading">Additional Detail</h5>
              </div>
              <hr />
              <div className="additional-property-owner-detail">
                <div className="row mt-3">
                  <div className="col-6 ">
                    <div className="">
                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          PropertyId:
                        </p>
                        <p className="property-details-value">@23243</p>
                      </div>

                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          PropertyId :
                        </p>
                        <p className="property-details-value">:@23243</p>
                      </div>

                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          Price :
                        </p>
                        <p className="property-details-value">
                          $64.99/Seats/Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          Property Type :
                        </p>
                        <p className="property-details-value">Co-working </p>
                      </div>

                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          Property Status :
                        </p>
                        <p className="property-details-value">For Rent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-setion-offices">
              <div className="heading-features-offices">
                <h5 className="office-sub-heading">Features</h5>
              </div>
              <hr />
              <div className="features-group">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-one">
                      <p>
                        <FiCheckCircle className="fs-5 mx-2 icon-featured" />{" "}
                        24/7 Office Access
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-one">
                      <p>
                        {" "}
                        <FiCheckCircle className="fs-5 mx-2 icon-featured" />
                        24/7 Office Access
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-one">
                      <p>
                        <FiCheckCircle className="fs-5 mx-2 icon-featured" />
                        24/7 Office Access
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-one">
                      <p>
                        <FiCheckCircle className="fs-5 mx-2 icon-featured" />
                        24/7 Office Access
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="similarties-section mt-5">
              <div className="similarties-heading">
                <h5 className="office-sub-heading">Similar Listing</h5>
              </div>
              <hr />
              <div className="similar-offices">
                <div className="officess mt-5">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="image-office-sction py-1 ps-1">
                        <img
                          src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="office-image"
                          width="100%"
                          height={230}
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-12 pe-4 my-3">
                      <div className="similar-office-description position-relative">
                        <div className="price-tag-section d-flex justify-content-between">
                          <p
                            className=""
                            style={{
                              background: "#91a7ff",
                              color: "white",
                              padding: "5px 16px",
                              fontWeight: "600",
                            }}
                          >
                            For Rent
                          </p>
                          <p className="name">
                            $<span className="price1">663.2</span>month/seats
                          </p>
                        </div>
                        <div className="ofice-name-type">
                          <p className="offices-similar-heading">
                            Co-working office in Baner balewadi 411045
                          </p>
                          <p className="sub-heading">
                            <HiOutlineLocationMarker className="me-2" /> Elite
                            premio, Balewadi, Baner, Pune, 411045
                          </p>
                          <p className="name">Co-working space</p>
                        </div>

                        <div className="row">
                          <div className="col-3 mt-3">
                            <p className="last-update">
                              <BiUser className="m2-2" />
                              Brantford Team
                            </p>
                          </div>
                          <div className="col-3 mt-3">
                            <p className="last-update">
                              <GrAttachment className="me-2" />3 weeks Ago
                            </p>
                          </div>
                          <div className="col-3"></div>
                          <div className="col-3 ">
                            <button className="btn-for-all-landpage px-4">
                              Detail
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="end-user-requirement-setion  ">
              <div className="end-user ">
                <div className="requirement-card py-4 px-5 ">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="avtar-section">
                        <p className="mt-2">
                          <FaUserAlt />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="brantford-team">
                        <p className="team fs-5">BrantFord Team</p>
                        <p className="view-listing fw-bold ">View Listing</p>
                      </div>
                    </div>

                    <div className="form-end-user">
                      <Formik
                        onReset={handleReset}
                        initialValues={{
                          name: "",
                          contact_number: "",
                          email_id: "",
                          number_of_persons: "",
                          company: "",
                          city_of_workspace: "",
                          categary_of_workspace: "",
                          start_date: "",
                          message: "",
                        }}
                        validate={(values) => {
                          let errors = {};
                          if (!values.email_id) {
                            errors.email_id = "required*";
                          } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                              values.email_id
                            )
                          ) {
                            errors.email_id = "Invalid email address";
                          }
                          if (!values.name) {
                            errors.name = "required*";
                          }
                          if (!values.contact_number) {
                            errors.contact_number = "required*";
                          }
                          if (!values.number_of_persons) {
                            errors.number_of_persons = "required*";
                          }
                          if (!values.categary_of_workspace) {
                            errors.categary_of_workspace = "required*";
                          }
                          if (!values.city_of_workspace) {
                            errors.city_of_workspace = "required*";
                          }
                          if (!values.start_date) {
                            errors.start_date = "required*";
                          }
                          if (!values.company) {
                            errors.company = "required*";
                          }
                          if (!values.message) {
                            errors.message = "required*";
                          }
                          return errors;
                        }}
                        onSubmit={handleSubmit}
                        className="mt-4"
                      >
                        {({ values, errors, handleSubmit }) => (
                          <Form onSubmit={handleSubmit} className="mt-5">
                            <Field
                              type="name"
                              name="name"
                              placeholder="name"
                              className="form-control w-100 mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="name" />
                            </p>
                            <Field
                              type="number"
                              name="contact_number"
                              placeholder="contact"
                              className="form-control w-100 mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="contact_number" />
                            </p>

                            <Field
                              type="email"
                              name="email_id"
                              placeholder="Email"
                              className="form-control w-100 mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="email_id" />
                            </p>

                            <Field
                              type="number"
                              name="number_of_persons"
                              placeholder="no of persons"
                              className="form-control w-100 mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="number_of_persons" />
                            </p>

                            <Field
                              type="name"
                              name="company"
                              placeholder="comapny name"
                              className="form-control w-100 mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="company" />
                            </p>

                            <Field
                              type="name"
                              name="city_of_workspace"
                              placeholder="city name"
                              className="form-control w-100 mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="city_of_workspace" />
                            </p>

                            {/* <Field
                              type="categary"
                              name="categary_of_workspace"
                              placeholder="categary name"
                              className="form-control w-100 mx-auto my-3"
                            /> */}
                            

                            <Field
                              as="select"
                              className="my-select w-100"
                              component="select"
                              id="workspace"
                              name="categary_of_workspace"
                            >
                              <option value="working spaces">Co working spaces</option>
                              <option value="private office">private office</option>
                              <option value="flexi desk">Flexi Desk</option>
                              <option value="free spaces">Free space</option>
                              <option value="others">Other</option>
                            </Field>

                            <Field
                              type="date"
                              name="start_date"
                              placeholder="start date"
                              className="form-control w-100 mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="start_date" />
                            </p>

                            <Field
                              type="name"
                              name="message"
                              placeholder="message"
                              className="form-control w-100 mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="message" />
                            </p>

                           

                            <button
                              onClick={handleReset}
                              type="submit"
                              className="form-control border-none w-75 mx-auto my-5 fw-bold SignIn_btn "
                            >
                              Send Email
                            </button>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficesDetailPage;
