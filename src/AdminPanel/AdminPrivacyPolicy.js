import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import HocComponent from "../Components/HocComponent";
import { MdNoteAdd } from "react-icons/md";

const AdminPrivacyPolicy = () => {
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setShowForm((prev) => !prev);
  };

  const handleSubmit = (values, resetForm) => {
    console.log(values);

    resetForm();
  };

  return (
    <div
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        height: "100vh",
      }}
    >
      <div className="row justify-content-center py-5 ">
        <div className="col-8  card px-5 py-5 privacy-policy-section-card shadow">
          <div className="privacy-section">
            <h6 className="heading-add-newpolicy ">Add New privacy Policy</h6>
            <p className="privacy-section-description ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              fuga omnis nulla tempore qui iste, possimus architecto dolores,
              dolorum totam eum libero? Minus.
            </p>
            {showForm ? (
              <div>
                <Formik
                  initialValues={{
                    heading: "PRIVACY_POLICY",
                    title: "",
                    description: "",
                  }}
                  validate={(values) => {
                    let errors = {};

                    if (!values.title) {
                      errors.title = "required*";
                    }

                    if (!values.description) {
                      errors.description = "Please enter some description";
                    }
                    return errors;
                  }}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    errors,
                    handleSubmit,
                    defaultValue,
                    resetForm,
                  }) => (
                    <Form className="mt-5">
                      <div className="formGroup mt-5">
                        <Field
                          type="heading"
                          name="heading"
                          placeholder="heading"
                          className="form-control  my-3"
                          defaultValue={values.heading}
                          disabled
                        />
                        <p className=" ps-2 text-danger">
                          <ErrorMessage name="email" />
                        </p>

                        <label htmlFor="title" className="mb-2  label-user">
                          Title :
                        </label>
                        <Field
                          type="text"
                          name="title"
                          placeholder="Title"
                          className="form-control  "
                        />
                        <p className=" ps-2 text-danger">
                          <ErrorMessage name="title" />
                        </p>

                        <label
                          htmlFor="description"
                          className=" mb-2 label-user"
                        >
                          Description :
                        </label>
                        <Field
                          type="description"
                          as="textarea"
                          rows={4}
                          name="description"
                          placeholder="Description here...."
                          className="form-control  "
                        />
                        <p className=" ps-2 text-danger">
                          <ErrorMessage name="description" />
                        </p>
                        <button
                          type="submit"
                          className="btn   btn-privacy-policy "
                          onClick={resetForm}
                        >
                          Create Privacy Policy
                        </button>
                        <button
                          className="btn mx-2 cancel-btn "
                          onClick={() => setShowForm(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            ) : (
              <button
                className="btn  btn btn-privacy-policy"
                onClick={handleChange}
              >
                {" "}
                <MdNoteAdd className="mx-2" />
                Create New Privacy Policy
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HocComponent(AdminPrivacyPolicy);
