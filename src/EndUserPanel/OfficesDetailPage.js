import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import office1 from "../Assets/Images/office.avif";
import office2 from "../Assets/Images/office1.avif";
import office3 from "../Assets/Images/office2.avif";
import meetingRoom from "../Assets/Images/meeting.avif";
import canteenOffice from "../Assets/Images/canteen.avif";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import "../Styles/EndUser/officesPage.css";
import "../Assets/CSS/brantFord.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { BiCalendar, BiUser } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import HocLandingPage from "../Components/HocLandingPage";
import { usersContext } from "../Context/UserContext";
import swal from "sweetalert";
import AppointmentModel from "./AppointmentModel";
import MapInput from "../UserPanel/DashbordUser/ModelPropertyOwner/MapInput";

const BaseUrl = "http://bantford.prometteur.in";
// const token = localStorage.getItem("endUser_token");

// --------fs-3----

const OfficesDetailPage = () => {
  const [alreadyBooked, setAlreadyBooked] = useState(true);
  const [allspace, setAllSpace] = useState([]);
  const [showStatus, setshowStatus] = useState(false);
  const [spaceId, setSpaceId] = useState();
  const [countVisitor, setCountVisitor] = useState();
  const [images, setImages] = useState([]);

  const { endUserSpace, setEndUserSpace } = useContext(usersContext);

  const [categaryDetails, setCategaryDetails] = useState({});

  const navigate = useNavigate();

  // setImages(endUserSpace.images);

  const showdetails = (id) => {
    console.log(id);
    axios
      .get(
        `${BaseUrl}/endUser/get-space?id=${localStorage.getItem(
          "singlecategaryId"
        )}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setCategaryDetails(res.data.space);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addvisitor = () => {
    console.log(endUserSpace.id);

    const visitorcnt = { spaceId: endUserSpace.id };
    axios
      .post(`${BaseUrl}/endUser/insert-visitor`, visitorcnt, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const propertyBooking = (id, price) => {
    console.log(id, price);
    const propertyPrice = Number(price);
    const amount = {
      amount: propertyPrice,
    };

    console.log(amount);

    axios
      .post(`${BaseUrl}/endUser/book-space?id=${id}`, amount, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);

        swal("Space Booked", "Thank you for booking sapce", "success");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.error);
        if (err.response.data.error === "space aleready booked") {
          setAlreadyBooked(false);

          swal({
            title: "Already Booked",
            text: "You already booked this space",
            icon: "error",
          });
        } else {
          swal({
            title: "Please login",
            text: "you doesn't have access",
            icon: "error",
          });
        }
      });
  };
  // setTimeout(() => {

  // }, 3000);

  const onBookAppointment = (id) => {
    setshowStatus(true);
    setSpaceId(id);
  };

  useEffect(() => {
    showdetails();
    addvisitor();
    window.scrollTo(0, 0);
  }, [endUserSpace]);

  const handleSubmit = (values, resetForm) => {
    console.log(values);

    axios
      .post(`${BaseUrl}/endUser/send-requirement`, values, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        swal({
          title: "Submited ",
          text: "Your requirement added",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
    resetForm();
  };
  const spaceManagement = (data) => {
    // document.body.scrollTop = 0;
    console.log(data);
    setEndUserSpace(data);
    navigate(`/office-detail/${data.space.split(" ").join("-")}`);
  };

  const AllSpacesProperties = () => {
    axios
      .get(`${BaseUrl}/endUser/get-all-spces-wr`)
      .then((res) => {
        console.log(res.data);
        setAllSpace(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filteredSlideImages = endUserSpace.images.filter((item) => {
    return item.main_type == "photos" && item.sub_type == "photos_images";
  });

  console.log(filteredSlideImages);

  useEffect(() => {
    AllSpacesProperties();
  }, []);

  console.log(categaryDetails.space);
  console.log(endUserSpace);

  return (
    <div className="office-detail-section hj py-5 position-relative">
      <div className="container ">
        <div className="row position-relative">
          <div className="col-lg-8 col-md-8 col-sm-12 mb-4">
            <div className="office-detail">
              {/* {setCountVisitor(endUserSpace.id)} */}
              <p className="fs-3 fw-bold">{endUserSpace.space.space}</p>
              <p className="tag pb-2 rounded-2">
                {endUserSpace.space.property_status}
              </p>
              <p className="sub-heading">
                <HiOutlineLocationMarker className="me-2" />{" "}
                {endUserSpace.space.address}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="offices-icons w-25 ms-auto    ">
              {/* <ul className="list-unstyled  text-end d-flex justify-content-between">
                <li className="icon-offices fw-bold">
                  <AiOutlineArrowsAlt />
                </li>
                <li className="icon-offices fw-bold">
                  <BsHeart />
                </li>
                <li className="icon-offices fw-bold">
                  <BsPlusCircle />
                </li>
              </ul> */}
            </div>
            <div className="w-75 ">
              <p className="actual-price fs-3 fw-bold">
                ₹<span className="price1">{endUserSpace.space.price} </span>
                /Seat/Month
              </p>
              <div className="d-flex">
                <button
                  onClick={() =>
                    propertyBooking(
                      endUserSpace.space.id,
                      endUserSpace.space.price
                    )
                  }
                  className={alreadyBooked ? "disable-btn" : "show-btn"}
                >
                  Book Property
                </button>

                <button
                  className="disable-btn ms-3"
                  onClick={() => onBookAppointment(endUserSpace.space.id)}
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 my-3">
            <div className="office-view-named-carousel">
              <div className="carousel-group">
                <Carousel>

                  {filteredSlideImages.length > 0 ? (
                    filteredSlideImages.map((item, index) => (
                      <div key={index}>
                        <img
                          src={item.data || office1}
                          alt=""
                          className="main-image"
                        />
                        <p className="legend">Office </p>
                      </div>
                    ))
                  ) : (
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
                        <img
                          src={canteenOffice}
                          alt=""
                          className="main-image"
                        />
                        <p className="legend">Canteen </p>
                      </div>
                    </Carousel>
                  )}


                  {/* <div>
                    <img src={endUserSpace.images.length > 0 ? endUserSpace.images[0].data : office1} alt="" className="main-image" />
                    <p className="legend">Office </p>
                  </div>
                  <div>
                    <img src={endUserSpace.images.length > 0 ? endUserSpace.images[1].data : office2} alt="" className="main-image" />
                    <p className="legend">Office </p>
                  </div>
                  <div>
                    <img src={endUserSpace.images.length > 0 ? endUserSpace.images[2].data : office3} alt="" className="main-image" />
                    <p className="legend">Office </p>
                  </div>
                  <div>
                    <img src={endUserSpace.images.length > 0 ? endUserSpace.images[3].data : meetingRoom} alt="" className="main-image" />
                    <p className="legend">Meeting Room </p>
                  </div>
                  <div>
                    <img src={endUserSpace.images.length > 0 ? endUserSpace.images[4].data : canteenOffice} alt="" className="main-image" />
                    <p className="legend">Canteen </p>
                  </div> */}
                </Carousel>
              </div>
            </div>
            <div className="description-offices">
              <div className="heading-description">
                <h5 className="office-sub-heading">Description</h5>
              </div>
              <hr />
              <div className="decription-paragraph">
                <p>{endUserSpace.space.description}</p>
              </div>
            </div>
            <div className="detail-property-owner">
              <div className="heading-detail-property-owner d-flex justify-content-between">
                <h5 className="office-sub-heading me-4">Details </h5>

                <p>
                  {" "}
                  <BiCalendar className="fs-5 me-2 icon-featured" />
                  Updated on {endUserSpace.space.updatedAt}
                </p>
              </div>
              <hr />
              <div className="property-owner-detail">
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="">
                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold fw-bold">
                          Working Days :
                        </p>
                        <p className="property-details-value">
                          {endUserSpace.space.working_days}
                        </p>
                      </div>

                      <div className="d-flex  one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          Price :
                        </p>
                        <p className="property-details-value">
                          {endUserSpace.space.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="">
                      <div className="d-flex one my-3">
                        <p className="heading-proprty-detail fw-bold">
                          Property Status :
                        </p>
                        <p className="property-details-value">
                          {endUserSpace.space.property_status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="additional-detail-property-owner mt-5 ">
                <h5 className="office-sub-heading">Additional Details</h5>
              </div>
              <hr />
              <div className="additional-property-owner-detail">
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <div className="">
                      <div className="d-flex  one my-2">
                        <p className="heading-proprty-detail fw-bold">
                          Cabin Capacity :
                        </p>
                        <p className="property-details-value">
                          {endUserSpace.space.cabin_capacity}
                        </p>
                      </div>

                      <div className="d-flex  one my-2">
                        <p className="heading-proprty-detail fw-bold">
                          seating Capacity :
                        </p>
                        <p className="property-details-value">
                          :{endUserSpace.space.seating_capacity}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div>
                      <div className="d-flex  one my-2">
                        <p className="heading-proprty-detail fw-bold">
                          Total Desk :
                        </p>
                        <p className="property-details-value">
                          {endUserSpace.space.total_desks}{" "}
                        </p>
                      </div>

                      <div className="d-flex  one my-2">
                        <p className="heading-proprty-detail fw-bold">
                          working Days :
                        </p>
                        <p className="property-details-value">
                          {endUserSpace.space.working_days}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-setion-offices">
              <div className="heading-features-offices">
                <h5 className="office-sub-heading">Manager Details</h5>
              </div>
              <hr />
              <div className="features-group">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-one">
                      <p>
                        <span className="fw-bold">Name : </span>{" "}
                        {endUserSpace.space.manager_name}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-one">
                      <p>
                        <span className="fw-bold">Email : </span>{" "}
                        {endUserSpace.space.manager_email}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-one">
                      <p>
                        <span className="fw-bold">Contact No : </span>{" "}
                        {endUserSpace.space.manager_contactNumber}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-one">
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <MapInput
                  id={endUserSpace.space.id}
                  data={endUserSpace.space.space}
                />
              </div>
            </div>

            <div className="similarties-section mt-5">
              <div className="similarties-heading">
                <h5 className="office-sub-heading">Similar Listing</h5>
              </div>
              <hr />
              {allspace.map(
                (element, index) => {
                  if (
                    element.space.categaryId === endUserSpace.space.categaryId
                  ) {
                    return (
                      <div className="similar-offices" key={index}>
                        <div className="officess mt-3">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="image-office-sction py-1  mx-2">
                                <img
                                  src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  alt="office image"
                                  width="100%"
                                  height={230}
                                />
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12   ">
                              <div className="similar-office-description position-relative mx-2">
                                <div className="price-tag-section d-flex justify-content-between pt-2">
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
                                  <p className="name me-3">
                                    $
                                    <span className="price1">
                                      {element.space.price}
                                    </span>
                                    month/seats
                                  </p>
                                </div>
                                <div className="ofice-name-type">
                                  <p className="offices-similar-heading">
                                    {element.space.space}
                                  </p>
                                  <p className="sub-heading">
                                    <HiOutlineLocationMarker className="me-2" />{" "}
                                    {element.space.address}
                                  </p>

                                  <p className="name">
                                    Space type:{" "}
                                    {1
                                      ? "Update value"
                                      : 2
                                      ? "Co working Space"
                                      : 3
                                      ? "flexy desk"
                                      : 4
                                      ? "Private space"
                                      : ""}
                                  </p>
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
                                      <GrAttachment className="me-2" />3 weeks
                                      Ago
                                    </p>
                                  </div>
                                  <div className="col-1"></div>
                                  <div className="col-3 text-end">
                                    <button
                                      className="btn-for-all-landpage px-4"
                                      onClick={() => spaceManagement(element)}
                                    >
                                      Detail
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
                // return <h2 key={index}>X</h2>;
              )}
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-12 my-3 ">
            <div className="end-user-requirement-setion  ">
              <div className="end-user ">
                <div className="requirement-card py-4 px-5 ">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="avtar-section">
                        <p className="mt-2">
                          <FaUserAlt />{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-6">
                      <div className="brantford-team">
                        <p className="team fs-5">Requirement</p>
                        <p className="view-listing fw-bold ">
                          Send your requirement
                        </p>
                      </div>
                    </div>

                    <div className="form-end-user">
                      <Formik
                        enableReinitialize
                        initialValues={{
                          name: "",
                          contact_number: "",
                          email_id: "",
                          number_of_persons: "",
                          city_of_workspace: "",
                          categary_of_workspace: "",
                          company: "",
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
                          } else if (!/^[A-Za-z ]*$/i.test(values.name)) {
                            errors.name = "Enter a valid name";
                          }

                          if (!values.contact_number) {
                            errors.contact_number = "required*";
                          } else if (values.contact_number.length < 9) {
                            errors.contact_number =
                              "Please Enter valid mobile number";
                          } else if (
                            !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
                              values.contact_number
                            )
                          ) {
                            errors.contact_number = "Enter valid number";
                          }

                          if (!values.number_of_persons) {
                            errors.number_of_persons = "required*";
                          } else if (values.number_of_persons < 0) {
                            errors.number_of_persons = "Enter a Positive value";
                          }

                          // if (!values.company) {
                          //   errors.company = "required*";
                          // }

                          if (!values.city_of_workspace) {
                            errors.city_of_workspace = "required*";
                          } else if (
                            !/^[A-Za-z ]*$/i.test(values.city_of_workspace)
                          ) {
                            errors.city_of_workspace =
                              "Enter a valid City name";
                          }

                          if (!values.company) {
                            errors.company = "required*";
                          }

                          if (!values.start_date) {
                            errors.start_date = "required*";
                          } else if (values.start_date > new Date().getDate()) {
                            errors.start_date = "Enter a valid date.";
                          }

                          if (!values.categary_of_workspace) {
                            errors.categary_of_workspace = "required*";
                          }

                          if (!values.message) {
                            errors.message = "required*";
                          }
                          return errors;
                        }}
                        onSubmit={(values, { resetForm }) =>
                          handleSubmit(values, resetForm)
                        }
                        // onReset={resetForm}
                        className="mt-4"
                      >
                        {({ values, errors, handleSubmit }) => (
                          <Form onSubmit={handleSubmit} className="mt-5">
                            <Field
                              type="name"
                              name="name"
                              placeholder="name"
                              className="form-control  mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="name" />
                            </p>
                            <Field
                              type="name"
                              name="contact_number"
                              placeholder="contact"
                              className="form-control  mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="contact_number" />
                            </p>

                            <Field
                              type="email"
                              name="email_id"
                              placeholder="Email"
                              className="form-control  mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="email_id" />
                            </p>

                            <Field
                              type="number"
                              name="number_of_persons"
                              placeholder="number_of_persons"
                              className="form-control  mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="number_of_persons" />
                            </p>

                            {/* <Field
                                  type="name"
                                  name="comapny"
                                  placeholder="comapny"
                                  className="form-control w-75 mx-auto my-3"
                                />
                                <p className="ms-5 ps-2 text-danger">
                                  <ErrorMessage name="comapny" />
                                </p> */}

                            <Field
                              type="name"
                              name="city_of_workspace"
                              placeholder="city_of_workspace"
                              className="form-control  mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="city_of_workspace" />
                            </p>

                            <Field
                              type="name"
                              name="company"
                              placeholder="company"
                              className="form-control  mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="company" />
                            </p>

                            <Field
                              as="select"
                              className=" form-control my-select w-100"
                              component="select"
                              id="workspace"
                              name="categary_of_workspace"
                            >
                              <option value="">Select Space Category</option>
                              <option value="working spaces">
                                Co working spaces
                              </option>
                              <option value="private office">
                                private office
                              </option>
                              <option value="flexi desk">Flexi Desk</option>
                              <option value="free spaces">Free space</option>
                              <option value="others">Other</option>
                            </Field>
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="categary_of_workspace" />
                            </p>

                            <Field
                              type="date"
                              min="2022/02/02"
                              name="start_date"
                              placeholder="start_date"
                              className="form-control  mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="start_date" />
                            </p>

                            <Field
                              as="textarea"
                              rows="6"
                              type="textarea"
                              name="message"
                              placeholder="Enter your message"
                              className="form-control  mx-auto my-3"
                            />
                            <p className="ms-5 ps-2 text-danger">
                              <ErrorMessage name="message" />
                            </p>

                            <button
                              type="submit"
                              className="form-control border-none  mx-auto my-5 fw-bold contact_btn "
                            >
                              Submit
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
        <AppointmentModel
          setshowStatus={setshowStatus}
          showStatus={showStatus}
          spaceId={endUserSpace.space.id}
          element={endUserSpace.space}
        />
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default HocLandingPage(OfficesDetailPage);
