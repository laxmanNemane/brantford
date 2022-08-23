import { Modal } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import "./categoryModal.css";

const AddCategoryModel = ({ showStatus, setshowStatus }) => {
  const handleSubmit = (values) => {
    // setshowStatus(true);
    console.log(values);
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
                    className="form-control  mx-auto "
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
