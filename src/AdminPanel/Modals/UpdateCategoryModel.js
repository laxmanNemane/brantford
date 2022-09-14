import { Modal } from "antd";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./categoryModal.css";

const BaseUrl = "http://bantford.prometteur.in";

const UpdateCategoryModel = ({
  isModalVisible,
  setIsModalVisible,
  id,
  categary,
}) => {
  const [updateCategary, setUpdateCategary] = useState("");

  console.log(updateCategary);

  console.log(id);
  console.log(categary);

  const handleSubmit = (values) => {
    setIsModalVisible(true);
    setUpdateCategary(values);

    axios
      .patch(`${BaseUrl}/admin/update-categary?id=${id}`, values, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setIsModalVisible(false);
        toast.success("category Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("please try again");
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
            initialValues={{ categary: categary }}
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
