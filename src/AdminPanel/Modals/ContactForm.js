import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";


function ContactForm() {

    const handleSubmit = (values) => {
        console.log(values);
    }
  return (
    <div>
        <h3 style={{textAlign:'center', paddingTop:'20px'}}>Contact us</h3>
      <Formik
        initialValues={{ name: "", contact: "", email: "", password: "" }}
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = "required*";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
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
        onSubmit={handleSubmit}
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
            <div className="d-flex mx-auto justify-content-between w-75">
              <label className="  mb-2">
                <Field type="checkbox" name="remember me" />
                &nbsp; Remember me
              </label>
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

            
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
