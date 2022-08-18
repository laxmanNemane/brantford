import React from "react";
import { ProgressBar } from "react-bootstrap";
import HocComponent from "../Components/HocComponent";
import ".././Styles/AdminProfile.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { ErrorMessage, Field, Form, Formik } from "formik";

const AdminProfilePage = () => {
  const handleSubmit = () => {};
  return (
    <div
      className=""
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        height: "100vh",
      }}
    >
      <div className="heading-page-profile">
        <p className="overview-user-profile_page">Overview</p>
        <h4 className="user-profile-page-heading">User Profile</h4>
      </div>
      <div className="row mx-3  ">
        <div className="col-4 gx-5 ">
          <div className="card user-detail-overview px-3">
            <div className="profile-image-name">
              <div className="user-image">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/960x0.jpg?format=jpg&width=960"
                  alt=""
                  className="profile-image"
                />
              </div>
              <p className="user-name">Lakhan Nemane</p>
              <p className="user-position">Project Manager</p>
              <button className="btn follow-btn">
                {" "}
                <AiOutlineUserAdd className="mx-2 follow-user-icon" />
                Follow
              </button>
            </div>
            <hr />
            <div className="user-workflow">
              <h4 className="Description_heading-user">workflow</h4>
              <div className="progress-bar-user">
                <ProgressBar animated now={65} />
              </div>
            </div>
            <hr />
            <div className="user-description">
              <p className="Description_heading-user">Description</p>
              <p className="description_paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                accusamus incidunt doloribus beatae vitae odio autem ut commodi
                consequuntur culpa?
              </p>
            </div>
          </div>
        </div>
        <div className="col-8  gx-5 account-card-deatil ">
          <div className="account-deatil card px-5 py-3">
            <div className="div">
              <p className="account-deatil-heading">Account Detail</p>
              <hr />
              <div>
                <Formik
                  initialValues={{
                    firstName: "Lakhan ",
                    lastName: "Nemane",
                    email: "lakhan@gmail.com",
                    password: "******",
                    address: "baner balewadi",
                    city: "pune",
                    state: "maharastra",
                    zip: "411045",
                    description: "",
                  }}
                  validate={(values) => {
                    let errors = {};
                    if (!values.email) {
                      errors.email = "required*";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                      errors.password = "required*";
                    }
                    return errors;
                  }}
                  onSubmit={handleSubmit}
                  className="mt-4"
                >
                  {({ values, errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="">
                      <div className="formGroup">
                        <div className="row">
                          <div className="col-6">
                            <label htmlFor="First Name" className="label-user">
                              First Name
                            </label>
                            <Field
                              type="text"
                              name="firstName"
                              placeholder="firstName"
                              className="form-control"
                              defaultvalue={values.firstName}
                            />

                            <label htmlFor="Email " className="label-user">
                              Email{" "}
                            </label>
                            <Field
                              type="email"
                              name="email"
                              placeholder="email"
                              className="form-control"
                              defaultvalue={values.email}
                            />
                          </div>
                          <div className="col-6">
                            <label htmlFor="Last Name" className="label-user">
                              Last Name
                            </label>
                            <Field
                              type="lastName"
                              name="lastName"
                              placeholder="lastName"
                              className="form-control"
                              defaultvalue={values.lastName}
                            />

                            <label htmlFor="Password " className="label-user">
                              Password{" "}
                            </label>
                            <Field
                              type="password"
                              name="password"
                              placeholder="password"
                              className="form-control "
                              defaultvalue={values.password}
                            />
                          </div>
                          <div className="col-12">
                            <label htmlFor="Address " className="label-user">
                              Address{" "}
                            </label>
                            <Field
                              type="text"
                              name="address"
                              placeholder="address"
                              className="form-control "
                              defaultvalue={values.address}
                            />
                          </div>

                          <div className="col-6">
                            <label htmlFor="City " className="label-user">
                              City{" "}
                            </label>
                            <Field
                              type="text"
                              name="city"
                              placeholder="city"
                              className="form-control "
                              defaultvalue={values.city}
                            />
                          </div>
                          <div className="col-3">
                            <label htmlFor="State " className="label-user">
                              State{" "}
                            </label>
                            <Field
                              type="text"
                              name="state"
                              placeholder="state"
                              className="form-control "
                            />
                          </div>
                          <div className="col-3">
                            <label htmlFor="Zip " className="label-user">
                              Zip{" "}
                            </label>
                            <Field
                              type="number"
                              name="zip"
                              placeholder="zip"
                              className="form-control "
                            />
                          </div>

                          <div className="col-12">
                            <label htmlFor="Zip " className="label-user">
                              Description{" "}
                            </label>
                            <Field
                              as="textarea"
                              rows="7"
                              name="description"
                              placeholder="description"
                              className="form-control "
                            />
                          </div>
                        </div>
                        <div>
                          <button className="btn update-account-btn">
                            Update Account
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HocComponent(AdminProfilePage);
