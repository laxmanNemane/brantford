import { Modal } from "antd";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import swal from "sweetalert";
// import "../Styles/forgetmodal.css";
import ficon from "../Assets/Icons/forgetIcon.svg";

const BaseUrl = "http://bantford.prometteur.in";
// let token = localStorage.getItem("token");

const ForgetPassword = ({ isModalVisible, setIsModalVisible }) => {
  const handleSubmit = (values) => {
    axios
      .post(`${BaseUrl}/admin/forgot-password`, values)
      .then((res) => {
        console.log(res);
        // if(res.statusText==="OK"){
        //   console.log("success status");
        //   axios.patch(`${BaseUrl}/reset-password/${token}`)
        //   .then((res)=> {console.log(res)})
        //   .catch((err) => {console.log(err)})

        // }
        setIsModalVisible(false)
        swal("Check Your mail", "Link has been sended to your mail","success")
      })
      .catch((err) => {
        console.log(err);
        setIsModalVisible(false)
        swal("Email not registered", "Enter valid mail","warning")
      });
    console.log(values);
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
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
      >
        <div className="text-center mt-4">
          <h4 className="fw-bold">Forgot your Password?</h4>
          <p className="forget_password_description">
            Enter your registered email below to recieve <br />
            password reset instruction
          </p>
          <img src={ficon} alt="" width={230} className="py-3" />
        </div>
        <Formik
          initialValues={{ email: ""}}
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
