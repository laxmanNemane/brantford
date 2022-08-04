import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/loginpage.css";

const Login = () => {
  const handleSubmit = (values) => console.log(values);

  return (
    <Fragment>
      <div className="container d-flex justify-content-center mt-5 ">
        <div className="card login_Card shadow">
          <div className="card-body">
            <h4 className="text-center me-2 fw-bold body">Login</h4>
            <h6 className="text-center my-3 body-1">
              Hey , Enter your details to get sign in <br />
              to your account
            </h6>
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
                    <p className="ms-5 ps-2">
                      <NavLink to="/forgetpassword" className="text-dark text-decoration-none ">
                        Forget Password
                      </NavLink>
                    </p>
                    <button
                      type="submit"
                      className="form-control border-none w-75 mx-auto my-5 "
                      style={{ background: "#FDC886" }}
                    >
                      Login
                    </button>
                    <p className="text-center py-2">
                      &ndash;&ndash; &nbsp; or sign in with &nbsp;
                      &ndash;&ndash;
                    </p>

                    <div>
                      <ul>
                        <li className="btn border rounded-2  ms-4 me-4">
                          Google
                        </li>
                        <li className="btn border rounded-2 me-4">facebook</li>
                        <li className="btn border rounded-2 ">Instagram</li>
                      </ul>
                    </div>
                    <p className="text-center mt-2">
                      don't have account? <a href="#">Request Now</a>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
