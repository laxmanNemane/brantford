import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

function ContactForm() {
  const handleSubmit = (values) => {
    console.log(values);
    values.resetForm();

  };
  const resetForm = () =>{
    
  }
  setTimeout(resetForm,2000);
 

  return (
    <div className="contact-bg">
      <div className="contact-header">
        <h3 className="text-light">Contact</h3>
      </div>
      <div className="contact-container">
        <div className="row">
          <div className="col-md-6">
            <div className="container w-75 pt-3">
              <h5 style={{ textAlign: "center", paddingTop: "20px" }}>
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
                {({ values, errors, handleSubmit,resetForm }) => (
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
                      as="textarea"
                      rows="6"
                      type="textarea"
                      name="textarea"
                      placeholder="Enter your message"
                      className="form-control w-75 mx-auto my-3"
                    />
                    <p className="ms-5 ps-2 text-danger">
                      <ErrorMessage name="textarea" />
                    </p>

                    <button
                    onClick={resetForm}
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
          <div className="col-md-6">
            <div className="" style={{ width: "500px" }}>
              <div className="card p-3 mt-4 contact_card">
                <h3>corporate headquarters</h3>
                <p>
                  9th Floor, VB Capitol, Range Hill Rd, Bhoslenagar,
                  Shivajinagar, Pune, Maharashtra 411007
                </p>
                <p>info@brantfordindia.com</p>
                <p>startup@brantfordindia.com</p>
              </div>
            </div>
            <div style={{ width: "500px" }}>
              <div className="card p-3 mt-4 contact_card">
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

export default ContactForm;
