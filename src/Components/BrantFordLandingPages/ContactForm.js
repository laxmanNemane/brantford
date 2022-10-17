import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import HocLandingPage from "../HocLandingPage";

function ContactForm() {
  const handleSubmit = (values) => {
    console.log(values);
    Formik.resetForm();
  };
  const resetForm = () => {};
  setTimeout(resetForm, 2000);

  return (
    <div className="contact-bg">
      <div className="contact-header position-relative">
        <div className=" container">
          <h3
            className="text-light position-absolute fw-bold"
            style={{ bottom: "0px" }}
          >
            Contact
          </h3>
        </div>
      </div>
      <div className="contact-container container pb-5">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="container w-75 pt-3 card contact_card shadow mt-4 w-100">
              <div className="">
                <h5>
                  Fill in your details and we’ll get back to you as soon as
                  possible
                </h5>
                <Formik
                  enableReinitialize
                  initialValues={{
                    name: "",
                    contact: "",
                    email: "",
                    textarea: "",
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
                    if (!values.textarea) {
                      errors.textarea = "required*";
                    }
                    return errors;
                  }}
                  onSubmit={handleSubmit}
                  onReset={resetForm}
                  className="mt-4"
                >
                  {({ values, errors, handleSubmit, resetForm }) => (
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
                        type="number"
                        name="contact"
                        placeholder="contact"
                        className="form-control  mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="contact" />
                      </p>

                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control  mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="email" />
                      </p>
                      <Field
                        as="textarea"
                        rows="3"
                        type="textarea"
                        name="textarea"
                        placeholder="Enter your message"
                        className="form-control  mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="textarea" />
                      </p>

                      <button
                        onClick={resetForm}
                        type="submit"
                        className="form-control btn-second border-none mx-auto my-5 fw-bold  "
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8 col-sm-12 ">
            <div className="w-100">
              <div className="card p-3 mt-4 contact_card shadow ">
                <h3>corporate headquarters</h3>
                <p>
                  9th Floor, VB Capitol, Range Hill Rd, Bhoslenagar,
                  Shivajinagar, Pune, Maharashtra 411007
                </p>
                <p>info@brantfordindia.com</p>
                <p>startup@brantfordindia.com</p>
              </div>
            </div>
            <div>
              <div className="card p-3 mt-4 contact_card shadow">
                <p>
                  I, hereby authorize Brantford India, to contact me. It will
                  override my registry on the NCPR.
                </p>
                <p>
                  By providing your contact details you have expressly
                  authorized MDPL to contact you in future through calls /SMS /
                  E-mails and inform you about our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HocLandingPage(ContactForm);
