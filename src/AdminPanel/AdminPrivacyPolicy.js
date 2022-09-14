import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import HocComponent from "../Components/HocComponent";
import { MdNoteAdd } from "react-icons/md";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminPrivacyPolicy = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setShowForm((prev) => !prev);
  };

  const handleSubmit = (values, resetForm) => {
    console.log(values);

    axios
      .post(
        "http://bantford.prometteur.in/adminDashboard/add-privecyPolicys_termsConditions",
        values,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        toast.success("successfully added!");
      })
      .catch((err) => {
        console.log(err);
        localStorage.clear();
        toast.error("please add again");
        navigate("/login");
      });

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
                    heading: "",
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
                  onSubmit={(values, { resetForm }) => {
                    handleSubmit(values, resetForm);
                  }}
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
                        <label htmlFor="title" className="mb-2  label-user">
                          Select Heading :
                        </label>
                        <Field
                          as="select"
                          className=" form-control  mx-auto mb-3 "
                          component="select"
                          id="workspace"
                          name="heading"
                        >
                          <option className="py-3">select heading</option>

                          <option value="TERMS_CONDITIONS" className="my-3">
                            TERMS_CONDITIONS
                          </option>

                          <option value="PRIVACY_POLICY" className="my-3">
                            PRIVACY_POLICY
                          </option>
                        </Field>

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
