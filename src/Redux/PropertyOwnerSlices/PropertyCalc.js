import React, { useEffect, useState } from "react";
import AdminFooter from "../../AdminPanel/AdminFooter";
import HocComponent from "../../Components/HocComponent";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

const PropertyCals = () => {
  const [calculation, setcalculation] = useState();

  const handleSubmit = (values, resetForm) => {
    console.log(values);

    const rent_or_buy = values.sell_rent;
    const age = values.age;
    const area = values.area;
    const cabin = values.cabin;
    const city = values.city;
    const desk = values.desk;
    const Property_type = values.property_type;
    const seating = values.seating;

    const predictioin = age * cabin* area +  desk * seating;
    setcalculation(predictioin);

    resetForm();
  };

  useEffect(() => {
    // getMarketPrices();
  }, []);

  return (
    <div>
      <div
        className="main-section"
        style={{
          background: "rgb(244, 240, 242)",
        }}
      >
        <div className="mb-5">
          <div className="top-banner">
            <div className="dashboard-title ">
              <div className="row align-items-center ">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">Calculator</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Calculator</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container mx-4">
              <div className="container">
                {/* <div className="brant-card">
                  <div className="brant-card-body">
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="Buttons_dashbord mx-3">Buy</button>
                      <button className="Buttons_dashbord mx-3">Rent</button>
                    </div>
                  </div>
                </div> */}

                <div className="market-table">
                  <div className="brant-card">
                    <div className="brant-card-body">
                      <h5>Calculate Property</h5>

                      <div className="calc-form mx-5">
                        <Formik
                          enableReinitialize
                          initialValues={{
                            sell_rent: "",
                            city: "",
                            desk: "",
                            property_type: "",
                            cabin: "",
                            seating: "",
                            area: "",
                            age: "",
                          }}
                          validate={(values) => {
                            let errors = {};

                            if (!values.city) {
                              errors.city = "required*";
                            }
                            if (!values.desk) {
                              errors.desk = "required*";
                            }

                            if (!values.area) {
                              errors.area = "required*";
                            }

                            if (!values.cabin) {
                              errors.cabin = "required*";
                            }

                            if (!values.age) {
                              errors.age = "required*";
                            }

                            // if (!values.company) {
                            //   errors.company = "required*";
                            // }

                            if (!values.seating) {
                              errors.seating = "required*";
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
                              <div className="mx-5">
                                <div className="mt-5">
                                  <h6>Property Looking for</h6>
                                  <Field
                                    as="select"
                                    className=" form-control my-select w-100"
                                    component="select"
                                    id="sell_rent"
                                    name="sell_rent"
                                  >
                                    <option value="sell">Chose option</option>
                                    <option value="sell_buy">
                                      Sell or Buy
                                    </option>
                                    <option value="rent">rent</option>
                                  </Field>
                                </div>

                                <div className="mt-5">
                                  <h6>Select city</h6>
                                  <Field
                                    type="name"
                                    name="city"
                                    placeholder="city"
                                    className="form-control  mx-auto my-3"
                                  />
                                  <p className="ms-5 ps-2 text-danger">
                                    <ErrorMessage name="city" />
                                  </p>
                                </div>

                                <div className="mt-5">
                                  <h6>Select Property Type</h6>
                                  <Field
                                    as="select"
                                    className=" form-control my-select w-100"
                                    component="select"
                                    id="property_type"
                                    name="property_type"
                                  >
                                    <option value="co-working">
                                      select Property type
                                    </option>
                                    <option value="co-working">
                                      Co working
                                    </option>
                                    <option value="private_offices">
                                      Private Offices
                                    </option>
                                    <option value="flexi_desk">
                                      Flexi Desk{" "}
                                    </option>
                                  </Field>
                                </div>

                                <div className="mt-5">
                                  <h6>Select Property age in years</h6>
                                  <Field
                                    type="number"
                                    name="age"
                                    placeholder="age"
                                    className="form-control  mx-auto my-3"
                                  />
                                  <p className="ms-5 ps-2 text-danger">
                                    <ErrorMessage name="age" />
                                  </p>
                                </div>

                                <div className="mt-5">
                                  <h6>Area(sq.ft)</h6>
                                  <Field
                                    type="number"
                                    name="area"
                                    placeholder="area"
                                    className="form-control  mx-auto my-3"
                                  />
                                  <p className="ms-5 ps-2 text-danger">
                                    <ErrorMessage name="area" />
                                  </p>
                                </div>

                                <div className="row mt-3">
                                  <div className="col-md-4">
                                    <h6>Desks</h6>
                                    <Field
                                      type="number"
                                      name="desk"
                                      placeholder="desk"
                                      className="form-control  mx-auto my-3"
                                    />
                                    <p className="ms-5 ps-2 text-danger">
                                      <ErrorMessage name="desk" />
                                    </p>
                                  </div>

                                  <div className="col-md-4">
                                    <h6>Cabin</h6>
                                    <Field
                                      type="number"
                                      name="cabin"
                                      placeholder="cabin"
                                      className="form-control  mx-auto my-3"
                                    />
                                    <p className="ms-5 ps-2 text-danger">
                                      <ErrorMessage name="cabin" />
                                    </p>
                                  </div>

                                  <div className="col-md-4">
                                    <h6>Seating Capacity</h6>
                                    <Field
                                      type="number"
                                      name="seating"
                                      placeholder="seating"
                                      className="form-control  mx-auto my-3"
                                    />
                                    <p className="ms-5 ps-2 text-danger">
                                      <ErrorMessage name="seating" />
                                    </p>
                                  </div>
                                </div>

                                <button
                                  type="submit"
                                  className="form-control border-none  mx-auto my-5 fw-bold contact_btn "
                                >
                                  Calculate
                                </button>
                              </div>
                            </Form>
                          )}
                        </Formik>

                        <div className="text-center p-4">
                          <h6>Your Property Esimation Worth is </h6>
                          <h3 className="">{calculation}</h3>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default HocComponent(PropertyCals);
