import { Modal } from "antd";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "./categoryModal.css";

const BaseUrl = "http://bantford.prometteur.in";

const UpdateCategoryModel = ({ isModalVisible, setIsModalVisible, id, adminCategory }) => {
  const [updateCategary, setUpdateCategary] = useState("");

  console.log(id);

  const handleSubmit = (values) => {
    setIsModalVisible(true);
    setUpdateCategary(values);
    console.log(values);
    // console.log(categary);

    console.log(localStorage.getItem("admin_token"));

    const admin_token = localStorage.getItem("admin_token");
    const property_owner_token = localStorage.getItem("property_owner_token");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heG1lbGFuc2hzZkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IlByb0A4MDg3IiwicmVtZW1iZXIgbWUiOnRydWUsInByb2ZpbGUiOiJhZG1pbiIsImlkIjo0LCJpYXQiOjE2NjE3NzU4NjksImV4cCI6MTY2MTc4MzA2OX0.GJYucWfhvoASU-R9m0TQJERZGBPdnkQW5Tixz8KdyFc";
    // console.log(auth_token);

    axios
      .patch(`${BaseUrl}/admin/update-categary?id=${id}`, values, {
        headers: {
          Authorization: admin_token,
        },
      })
      .then((res) => {
        console.log(res);
        setIsModalVisible(false)
        
      })
      .catch((err) => {
        console.log(err);

      });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        title="New Category"
        visible={isModalVisible}
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
                      update Category
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

export default UpdateCategoryModel;
