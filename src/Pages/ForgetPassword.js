import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";

const ForgetPassword = () => {
  const handleSubmit = (values) => console.log(values);
  return (
    <div>
      <div className="container mt-5">
        <NavLink to="/" className="btn border fw-bold ms-3">
          &#8592; Back to Home Page
        </NavLink>

        <div className=" mt-3 mx-auto d-flex  ">
          <div className="card-body " style={{margin:"80px 0 0 0 "}}>
            <h1>
              Forget your <br />
              Password "
            </h1>

            <Formik
              initialValues={{ email: "" }}
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
                    className="form-control w-50  my-3"
                  />
                  <p className="ps-2  text-danger">
                    <ErrorMessage name="email" />
                  </p>

                  <button
                    type="submit"
                    className="btn border-none  mx-auto  w-50  px-5 "
                    style={{ background: "#FDC886" }}
                  >
                    Login
                  </button>

                  <p className=" pt-5 w-50 text-center ">
                    &ndash;&ndash; &nbsp; or &nbsp; &ndash;&ndash;
                  </p>

                  <NavLink to="/login" className="btn border  w-50  form-control">
                    Login with Google
                  </NavLink>
                </Form>
              )}
            </Formik>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1010.jpg?w=740&t=st=1659615009~exp=1659615609~hmac=9108d6b393c6b06dfb1800a87e9a52a520ae9e1ba53648028f593937fbe5bf6b"
              alt=""
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
