import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { number } from "echarts";
import swal from 'sweetalert';


const BaseUrl = "http://bantford.prometteur.in";
// const token = localStorage.getItem("endUser_token");

// --------fs-3----

const OfficesDetailPage = () => {
  // console.log(localStorage.getItem("endUser_token"));

  // getSingleProperty()

  const [alreadyBooked, setAlreadyBooked] = useState(true)

  const pageid = useParams();
  console.log(pageid);
  const id = Number(pageid.id);
  console.log(id);

  const [categaryDetails, setCategaryDetails] = useState({});

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


  const propertyBooking = (id, price) => {
    console.log(id, price);
    const propertyPrice = Number(price)
    const amount = {
      "amount": propertyPrice
    }

    console.log(amount)

    axios.post(`${BaseUrl}/endUser/book-space?id=${id}`,amount, {headers:{
      Authorization:localStorage.getItem("token")
    }})
    .then((res)=> {
      
      console.log(res)
      swal("Space Booked", "Thank you for booking sapce", "success");
    })
    .catch((err)=> {
      console.log(err)
      console.log(err.response.data.error)
      if(err.response.data.error==="space aleready booked"){

        setAlreadyBooked(false)
      }
      swal({
        title: "Already Booked",
        text: "You already booked this space",
        icon: "error",
      });
    
    })

  }
  // setTimeout(() => {

  // }, 3000);

  useEffect(() => {
    showdetails();
  }, []);

 

  // const handleReset = (values) => {};

  const resetForm = (values) => {
    
  }
  

  const handleSubmit = (values, resetForm) => {
    // console.log("hello lakhan ");
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

  

  // useEffect(()=>{
  //   handleSubmit();
  // },[])

  console.log(categaryDetails.space);

  return (
    
    <div className="office-detail-section hj py-5 position-relative">
      {/* {Object.keys(categaryDetails).map((item, index) => {

        console.log(categaryDetails[item].space)
        return ( */}
          <div className="container ">
            <div className="row position-relative">
              <div className="col-lg-8 mb-4">
                <div className="office-detail">
                  <p className="fs-3 fw-bold">{categaryDetails.space}</p>
                  <p className="tag pb-2 rounded-2">{categaryDetails.property_status}</p>
                  <p className="sub-heading">
                    <HiOutlineLocationMarker className="me-2" /> {categaryDetails.address}
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
                    ₹<span className="price1">{categaryDetails.price}</span>/Seat/Month
                  </p>
                  <button onClick={()=> propertyBooking(categaryDetails.id,categaryDetails.price)} 
                  className = {alreadyBooked ? 'disable-btn' : 'show-btn'}
                  // disabled={alreadyBooked}
                  >Book Property</button>
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
                        <img
                          src={canteenOffice}
                          alt=""
                          className="main-image"
                        />
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
                    <p>{categaryDetails.description}</p>
                    <p>
                      The community here ranges from freelance consultants to
                      growing SMEs and enterprise businesses across a variety of
                      industries. The space provides networking opportunities
                      and business services relevant to their needs.
                    </p>
                    <p>
                      Here, a community is formed where a business can grow with
                      fellow peers, share and brainstorm ideas with the members,
                      and exchange services from each other. This is a new,
                      unique and better way of working, growing, and expanding.
                    </p>
                  </div>
                </div>
                <div className="detail-property-owner">
                  <div className="heading-detail-property-owner d-flex justify-content-between">
                    <h5 className="office-sub-heading">Detail </h5>
                    <p>
                      {" "}
                      <BiCalendar className="fs-5 me-2 icon-featured" />
                      Updated on {categaryDetails.updatedAt}
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
                            <p className="property-details-value">
                              {categaryDetails.property_id}
                            </p>
                          </div>

                          <div className="d-flex  one my-3">
                            <p className="heading-proprty-detail fw-bold">
                              Price :
                            </p>
                            <p className="property-details-value">
                              {categaryDetails.price}
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
                            <p className="property-details-value">
                              Co-working{" "}
                            </p>
                          </div>

                          <div className="d-flex one my-3">
                            <p className="heading-proprty-detail fw-bold">
                              Property Status :
                            </p>
                            <p className="property-details-value">
                              {categaryDetails.property_status}
                            </p>
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
                              Cabin Capacity :
                            </p>
                            <p className="property-details-value">
                              {categaryDetails.cabin_capacity}
                            </p>
                          </div>

                          <div className="d-flex  one my-3">
                            <p className="heading-proprty-detail fw-bold">
                              seating Capacity :
                            </p>
                            <p className="property-details-value">
                              :{categaryDetails.seating_capacity}
                            </p>
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
                              Total Desk :
                            </p>
                            <p className="property-details-value">
                              {categaryDetails.total_desks}{" "}
                            </p>
                          </div>

                          <div className="d-flex  one my-3">
                            <p className="heading-proprty-detail fw-bold">
                              working Days :
                            </p>
                            <p className="property-details-value">
                              {categaryDetails.working_days}
                            </p>
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
                              alt="office image"
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
                                $<span className="price1">663.2</span>
                                month/seats
                              </p>
                            </div>
                            <div className="ofice-name-type">
                              <p className="offices-similar-heading">
                                Co-working office in Baner balewadi 411045
                              </p>
                              <p className="sub-heading">
                                <HiOutlineLocationMarker className="me-2" />{" "}
                                Elite premio, Balewadi, Baner, Pune, 411045
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
                            <p className="view-listing fw-bold ">
                              View Listing
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
                              }
                              if (!values.contact_number) {
                                errors.contact_number = "required*";
                              }

                              if (!values.number_of_persons) {
                                errors.number_of_persons = "required*";
                              }


                              // if (!values.company) {
                              //   errors.company = "required*";
                              // }

                              if (!values.city_of_workspace) {
                                errors.city_of_workspace = "required*";
                              }
                              if (!values.company) {
                                errors.company = "required*";
                              }

                              if (!values.start_date) {
                                errors.start_date = "required*";
                              }


                              if (!values.message) {
                                errors.message = "required*";
                              }
                              return errors;
                            }}
                            onSubmit={(values, {resetForm})=>(
                              handleSubmit(values , resetForm)
                                  )}
                            // onReset={resetForm}
                            className="mt-4"
                          >
                            {({ values, errors, handleSubmit }) => (

                             
                              
                              <Form onSubmit={handleSubmit}  className="mt-5">
                                <Field
                                  type="name"
                                  name="name"
                                  placeholder="name"
                                  className="form-control w-75 mx-auto my-3"
                                />
                                <p className="ms-5 ps-2 text-danger">
                                  <ErrorMessage name="name" />
                                </p>
                                <Field
                                  type="number"
                                  name="contact_number"
                                  placeholder="contact"
                                  className="form-control w-75 mx-auto my-3"
                                />
                                <p className="ms-5 ps-2 text-danger">
                                  <ErrorMessage name="contact" />
                                </p>

                                <Field
                                  type="email"
                                  name="email_id"
                                  placeholder="Email"
                                  className="form-control w-75 mx-auto my-3"
                                />
                                <p className="ms-5 ps-2 text-danger">
                                  <ErrorMessage name="email_id" />
                                </p>

                                <Field
                                  type="number"
                                  name="number_of_persons"
                                  placeholder="number_of_persons"
                                  className="form-control w-75 mx-auto my-3"
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
                                  className="form-control w-75 mx-auto my-3"
                                />
                                <p className="ms-5 ps-2 text-danger">
                                  <ErrorMessage name="city_of_workspace" />
                                </p>

                                <Field
                                  type="name"
                                  name="company"
                                  placeholder="company"
                                  className="form-control w-75 mx-auto my-3"
                                />
                                <p className="ms-5 ps-2 text-danger">
                                  <ErrorMessage name="company" />
                                </p>

                                <Field
                              as="select"
                              className="my-select w-100"
                              component="select"
                              id="workspace"
                              name="categary_of_workspace"
                            >
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

                            <Field
                                  type="date"
                                  name="start_date"
                                  placeholder="start_date"
                                  className="form-control w-75 mx-auto my-3"
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
                                  className="form-control w-75 mx-auto my-3"
                                />
                                <p className="ms-5 ps-2 text-danger">
                                  <ErrorMessage name="message" />
                                </p>

                                <button
                                  type="submit"
                                  className="form-control border-none w-75 mx-auto my-5 fw-bold contact_btn "
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
          </div>
        {/* );
      })} */}
    </div>
  );
};

export default OfficesDetailPage;
