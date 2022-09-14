import { Modal } from "antd";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./categoryModal.css";

const BaseUrl = "http://bantford.prometteur.in";

const AddCategoryModel = ({ showStatus, setshowStatus, values }) => {
  const [categary, setCategary] = useState("");
  console.log("category", categary);

  const handleSubmit = (values) => {
    setshowStatus(true);
    setCategary(values);

    axios
      .post(`${BaseUrl}/admin/add-categary`, values, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res);
        setshowStatus(false);
        toast.success("categories added Successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong! try again");
      });
  };

  const handleOk = () => {
    setshowStatus(false);
  };

  const handleCancel = () => {
    setshowStatus(false);
  };
  return (
    <>
      <Modal
        title="New Category"
        visible={showStatus}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
      >
        <div className="row">
          <Formik
            initialValues={{ categary: "" }}
            validate={(values) => {
              let errors = {};

              if (!values.categary) {
                errors.categary = "required*";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
            className=""
          >
            {({ values, errors, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="">
                <div className="formGroup">
                  <label htmlFor="category" className=" mb-2 label-user">
                    Category :
                  </label>
                  <Field
                    type="text"
                    name="categary"
                    placeholder="categary"
                    className="form-control  mx-auto"
                    onFocus={(e) => console.log("clicked")}
                  />
                  <p className="error-message">
                    <ErrorMessage name="category" />
                  </p>

                  <div className="d-flex  mt-3">
                    <button
                      className="btn btn-privacy-policy"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Create New
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default AddCategoryModel;
