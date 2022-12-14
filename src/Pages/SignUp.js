import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import React, { useState } from "react";
import ForgetPassword from "../Components/ForgetPassword";
// import "../Styles/loginpage.css";
import loginPage_image from "../Assets/Images/login.jpg";
import Navbar from "../Layout/Navbar";
// import LoginWithGoogle from "./LoginWithGoogle";
// import LogoutFromGoogle from "./LogoutFromGoogle";
import { Link, useNavigate } from "react-router-dom";

const BaseUrl = "http://bantford.prometteur.in";

function SignUp() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const loginWithGoogle = () => {
    axios.get(`http://bantford.prometteur.in/auth`)
    .then((res)=> {
      console.log(res.data)
      navigate("/")
    })
    .catch((err)=> {console.log(err)})
  }

  const handleSubmit = (values, resetForm) => {
    console.log(values);
    axios
      .post("http://bantford.prometteur.in/admin/create-admin", values)
      .then((res) => {
        // if (res.status === "200") {
        console.log(res.data);
        alert("Registered Successfully");
        // }
      })
      .catch((err) => console.log(err));
    resetForm();
  };


  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center mt-3 ">
        <div className="login_Card  w-100 py-3 ">
          <div className="d-flex">
            <div className="login-image-section">
              <div className="text-center ">
                <img src={loginPage_image} alt="" width={650} />
              </div>
            </div>
            <div className="shadow py-3 login_form_section">
              {/* <div className=""> */}
              <h4 className="text-center me-2 mt-3 fw-bold body login-text">
                SignUp
              </h4>
              <p className="text-center my-3 body-1 sign-in">
                Hey, Enter your details to get sign in <br />
                to your account
              </p>
              <div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    contact: "",
                    profile: "",
                    address: "",
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
                    }else if(!/^[A-Za-z ]*$/i.test(
                      values.name
                      )){
                        errors.name = "Enter a valid name";
                      }

                    if (!values.contact) {
                      errors.contact = "required*";
                    }else if (values.contact.length < 9) {
                      errors.contact = "Please Enter valid mobile number";
                    }
                    
                    else if (!/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
                      values.contact
                      )
                      ) {
                      errors.contact = "Enter valid number";
                    }
                    
                    const passwordRegex = /(?=.*[0-9])/;
                    if (!values.password) {
                      errors.password = "required*";
                    }else if (values.password.length < 8) {
                      errors.password = "Password must be 8 characters long.";
                    } else if (!passwordRegex.test(values.password)) {
                      errors.password = "Invalid password. Must contain one number.";
                    }


                    if (!values.profile) {
                      errors.profile = "required*";
                    }
                    if (!values.address) {
                      errors.address = "required*";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { resetForm }) => {
                    handleSubmit(values, resetForm);
                  }}
                  className="mt-4"
                >
                  {({ values, errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="mt-5">
                      <Field
                        type="name"
                        name="name"
                        placeholder="Name"
                        className="form-control w-75 mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="name" />
                      </p>
                      <Field
                        type="name"
                        name="contact"
                        placeholder="Contact"
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
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control w-75 mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="password" />
                      </p>

                      <Field
                        as="select"
                        className="login-profile-dropdown form-control w-75 mx-auto mb-3"
                        component="select"
                        id="workspace"
                        name="profile"
                      >
                        <option value="" className="py-3">
                          select profile
                        </option>

                        <option value="property-owner" className="py-3">
                          property-owner
                        </option>

                        <option value="endUser" className="py-3">
                          end-user
                        </option>
                      </Field>
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="profile" />
                      </p>

                      <Field
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="form-control w-75 mx-auto my-3"
                      />
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="address" />
                      </p>

                      <div className="d-flex mx-auto justify-content-between w-75">
                        {/* <label className="  mb-2">
                          <Field type="checkbox" name="remember me" />
                          &nbsp; Remember me
                        </label> */}
                        {/* <p 
                        style={{cursor:"pointer"}}
                          className="ps-3 forget_password_line"
                          onClick={() => setIsModalVisible(true)}
                        >
                          Forgot Password?
                        </p> */}
                      </div>
                      <button
                        type="submit"
                        className="form-control border-none w-75 mx-auto my-5 fw-bold SignIn_btn "
                      >
                        Sign Up
                      </button>
                      <p className="text-center py-2 fs-5">
                        &ndash;&ndash; or sign in with &ndash;&ndash;
                      </p>


                      <button className="form-control w-75  mx-auto" onClick={loginWithGoogle}>
                        <i className="fab fa-google fa-x mx-5"></i> Continue
                        with Google
                      </button>

                      {/* <LoginWithGoogle /> */}

                      {/* <LogoutFromGoogle/> */}
                      {/* <li className="btn border rounded-2 me-4">
                            <i className="fab fa-facebook-f"></i> facebook
                            </li>
                            <li className="btn border rounded-2 ">
                            <i className="fab fa-instagram"></i>Instagram</li> */}

                      <p className="text-center mt-4 fs-5">
                        Already have an Account?{" "}
                        <Link to="/login" className="ms-2 text-dark">
                          Sign in
                        </Link>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <ForgetPassword
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
}

export default SignUp;
