import { Modal } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "../Styles/forgetmodal.css";
import ficon from "../Assets/Icons/forgetIcon.svg"

const ForgetPassword = ({ isModalVisible, setIsModalVisible }) => {
  const handleSubmit = (values) => console.log(values);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
      >
        <div className="text-center mt-4">
          <h4 className="fw-bold">Forget Your Password?</h4>
          <p className="forget_password_description">
            Enter your registerd email below to recive <br />
            password reset instruction
          </p>
          <img
            src={ficon}
            alt=""
            width={230}
            className="py-3"
          />
        </div>
        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
              errors.email = "required*";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="mt-5">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="form-control w-75 mx-auto  my-3"
              />
              <p className="ps-2 ms-5  text-danger">
                <ErrorMessage name="email" />
              </p>
              <label className="ms-5 ps-3 mb-2">
                <Field type="checkbox" name="remember me" />
                &nbsp; Remember me
              </label>

              <button
                type="submit"
                className="btn send_email_btn border-none w-75 px-5 my-3 "
              >
                Send Reset Link
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ForgetPassword;
