import { Modal } from "antd";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "./categoryModal.css";

const BaseUrl = "localhost:3000";

const AddCategoryModel = ({ showStatus, setshowStatus, values }) => {
  
  const [categary, setCategary] = useState("");
  
  const handleSubmit = (values) => {
    // setshowStatus(true);
    setCategary(values);
    console.log(values);
    console.log(categary);

    axios.post(`${BaseUrl}admin/add-categary`,values)
    .then((res)=> {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })

  };

  // console.log('categories', categary);

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
            initialValues={{ category: "" }}
            validate={(values) => {
              let errors = {};

              if (!values.category) {
                errors.category = "required*";
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
                    name="category"
                    placeholder="category"
                    className="form-control  mx-auto"
                    onFocus = {(e)=> console.log('clicked')}
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
