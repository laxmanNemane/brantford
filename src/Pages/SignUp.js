import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import React, { useState } from "react";
import ForgetPassword from "../Components/ForgetPassword";
// import "../Styles/loginpage.css";
import loginPage_image from "../Assets/Images/login.jpg";
import Navbar from "../Layout/Navbar";
// import LoginWithGoogle from "./LoginWithGoogle";
// import LogoutFromGoogle from "./LogoutFromGoogle";
import { Link } from "react-router-dom";

const BaseUrl = "http://bantford.prometteur.in";

function SignUp() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (values, resetForm) => {
    console.log(values);
    axios
      .post("http://bantford.prometteur.in/admin/create-admin", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    resetForm();
  };

  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center mt-3 ">
        <div className="login_Card  w-100 py-3 ">
          <div className="d-flex">
            <div className="login-image-section">
              <div className="text-center ">
                <img src={loginPage_image} alt="" width={650} />
              </div>
            </div>
            <div className="shadow py-3 login_form_section">
              {/* <div className=""> */}
              <h4 className="text-center me-2 mt-3 fw-bold body login-text">
                SignUp
              </h4>
              <p className="text-center my-3 body-1 sign-in">
                Hey, Enter your details to get sign in <br />
                to your account
              </p>
              <div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    contact: "",
                    address: "",
                    profile: "",
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
                    if (!values.name) {
                      errors.name = "required*";
                    }
                    if (!values.contact) {
                      errors.contact = "required*";
                    }
                    if (!values.password) {
                      errors.password = "required*";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { resetForm }) => {
                    handleSubmit(values, resetForm);
                  }}
                  className="mt-4"
                >
                  {({ values, errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="mt-5">
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
                        name="contact"
                        placeholder="contact"
                        className="form-control w-75 mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="contact" />
                      </p>

                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control w-75 mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="email" />
                      </p>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control w-75 mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="password" />
                      </p>

                      <Field
                        as="select"
                        className=" form-control w-75 mx-auto mb-3 "
                        component="select"
                        id="workspace"
                        name="profile"
                      >
                        <option value="select profile " className="py-3">
                          select profile
                        </option>

                        <option value="property-owner" className="py-3">
                          property-owner
                        </option>

                        <option value="end-user" className="py-3">
                          end-user
                        </option>
                      </Field>

                      <Field
                        type="text"
                        name="address"
                        placeholder="address"
                        className="form-control w-75 mx-auto my-3"
                      />
                      <div className="d-flex mx-auto justify-content-between w-75">
                        {/* <label className="  mb-2">
                          <Field type="checkbox" name="remember me" />
                          &nbsp; Remember me
                        </label> */}
                        {/* <p 
                        style={{cursor:"pointer"}}
                          className="ps-3 forget_password_line"
                          onClick={() => setIsModalVisible(true)}
                        >
                          Forgot Password?
                        </p> */}
                      </div>
                      <button
                        type="submit"
                        className="form-control border-none w-75 mx-auto my-5 fw-bold SignIn_btn "
                      >
                        Sign Up
                      </button>
                      <p className="text-center py-2 fs-5">
                        &ndash;&ndash; or sign in with &ndash;&ndash;
                      </p>

                      {/* <p className="form-control w-75  mx-auto  ">
                        <i className="fab fa-google fa-x mx-5"></i> Continue
                        with Google
                      </p> */}
                      {/* <LoginWithGoogle /> */}

                      {/* <LogoutFromGoogle/> */}
                      {/* <li className="btn border rounded-2 me-4">
                            <i className="fab fa-facebook-f"></i> facebook
                            </li>
                            <li className="btn border rounded-2 ">
                            <i className="fab fa-instagram"></i>Instagram</li> */}

                      <p className="text-center mt-4 fs-5">
                        Don't have account?{" "}
                        <Link to="/signup" className="ms-2 text-dark">
                          Click here
                        </Link>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <ForgetPassword
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
}

export default SignUp;
