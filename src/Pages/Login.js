import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import ForgetPassword from "../Components/ForgetPassword";
import "../Styles/loginpage.css";
import loginPage_image from "../Assets/Images/login.jpg";
import Navbar from "../Layout/Navbar";
import { adminLogin } from "../AdminPanel/AdminApi/Index";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleSubmit = (values) => {
    try {
      adminLogin(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-5">
      {/* <Navbar /> */}
      <div className="container d-flex justify-content-center mt-3 py-5 ">
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
                Login
              </h4>
              <p className="text-center my-3 body-1 sign-in">
                Hey, Enter your details to get sign in <br />
                to your account
              </p>
              <div>
                <Formik
                  initialValues={{ email: "", password: "" }}
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
                    <Form onSubmit={handleSubmit} className="mt-5">
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
                      <div className="d-flex mx-auto justify-content-between w-75">
                        <label className="  mb-2">
                          <Field type="checkbox" />
                          &nbsp; Remember me
                        </label>
                        <p
                          className="ps-3 forget_password_line"
                          onClick={() => setIsModalVisible(true)}
                        >
                          Forgot Password?
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="form-control border-none w-75 mx-auto my-5 fw-bold SignIn_btn "
                      >
                        Sign in
                      </button>
                      <p className="text-center py-2 fs-5">
                        &ndash;&ndash; or sign in with &ndash;&ndash;
                      </p>

                      <p className="form-control w-75  mx-auto  ">
                        <i className="fab fa-google fa-x mx-5"></i> Continue
                        with Google
                      </p>
                      {/* <li className="btn border rounded-2 me-4">
                            <i className="fab fa-facebook-f"></i> facebook
                            </li>
                            <li className="btn border rounded-2 ">
                            <i className="fab fa-instagram"></i>Instagram</li> */}

                      <p className="text-center mt-4 fs-5">
                        Don't have account?{" "}
                        <a href="#" className="ms-2 text-dark">
                          Click here
                        </a>
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
};

export default Login;
