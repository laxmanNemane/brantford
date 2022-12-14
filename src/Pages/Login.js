import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import React, { useState } from "react";
import ForgetPassword from "../Components/ForgetPassword";
// import "../Styles/loginpage.css";
import loginPage_image from "../Assets/Images/login.jpg";
// import Navbar from "../Layout/Navbar";

// import LoginWithGoogle from "./LoginWithGoogle";
// import LogoutFromGoogle from "./LogoutFromGoogle";
// import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import HocLandingPage from "../Components/HocLandingPage";
import { toast } from "react-toastify";
import { gapi } from "gapi-script";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { useEffect } from "react";

const clientId =
  "1080370152932-oaiv7jc9ql83iiqd0grfl0h1vmc3vsp2.apps.googleusercontent.com";

const BaseUrl = "http://bantford.prometteur.in";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const loginWithGoogle = (email, name) => {

    const loginvalue = {
      "displayName":name,
      "email":email,
    }
    axios
      .post(`${BaseUrl}/auth/callback/success`,loginvalue)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const onSuccessLogout = () => {
    
  }
  const handleSubmit = (values) => {
    // console.log(values);

    //login u

    // if (values.password.length < 8) {
    //   toast.error("password should be 8 digit");
    //   // alert("shoule be8 diisgit");
    // }

    axios
      .post(`${BaseUrl}/admin/admin-login`, values)
      .then((res) => {
        // console.log(res);
        // console.log(res.data.admin.profile);
        console.log("token", res.data.token);
        console.log(res.data);
        console.log(res.data.admin.profile);
        toast.success("successfully logged in ");
        localStorage.setItem("user", JSON.stringify(res.data));
        if (res.data.admin.profile === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/userDashbord");
        }
        localStorage.setItem("token", res.data.token);

        // console.log("token-length", res.data.token.length);
      })
      .catch((err) => {
        // console.log(err);
        // console.log("Enter Valid Details");
        setError("Enter Valid Details");
        toast.error("please check detail");
      });
  };

  const onSuccess = (res) => {
    console.log("success:", res);
    // navigate("/");
    console.log(res.profileObj.email);
    console.log(res.profileObj.name);
    loginWithGoogle(res.profileObj.email, res.profileObj.name);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-center my-3 py-4 ">
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
                Login
              </h4>
              <p className="text-center my-3 body-1 sign-in">
                Hey, Enter your details to get sign in <br />
                to your account
              </p>
              <div>
                <Formik
                  initialValues={{ email: "", password: "" }}
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
                    if (!values.password) {
                      errors.password = "required*";
                    } else if (values.password.length < 7) {
                      errors.password = "enter valid password";
                      // console.log("enter valid password");
                    }
                    return errors;
                  }}
                  onSubmit={handleSubmit}
                  className="mt-4"
                >
                  {({ values, errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="mt-5">
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
                      {
                        <p style={{ color: "red", paddingLeft: "50px" }}>
                          {error}
                        </p>
                      }
                      <p className="ms-5 ps-2 text-danger">
                        <ErrorMessage name="password" />
                      </p>
                      <div className="d-flex mx-auto justify-content-between w-75">
                        <label className="  mb-2">
                          <Field type="checkbox" />
                          &nbsp; Remember me
                        </label>
                        <p
                          style={{ cursor: "pointer" }}
                          className="ps-3 forget_password_line"
                          onClick={() => setIsModalVisible(true)}
                        >
                          Forgot Password?
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="form-control border-none w-75 mx-auto my-5 fw-bold SignIn_btn "
                      >
                        Sign in
                      </button>
                      <p className="text-center py-2 fs-5">
                        &ndash;&ndash; or sign in with &ndash;&ndash;
                      </p>

                      <div className="d-flex">
                        <GoogleLogin
                          clientId={clientId}
                          buttonText="Sign in with Google"
                          onSuccess={onSuccess}
                          onFailure={onFailure}
                          cookiePolicy={"single_host_origin"}
                          isSignedIn={true}
                        />
                        <div>
                          <GoogleLogout
                          clientId={clientInformation}
                          buttonText="Logout"
                          onLogoutSuccess={onSuccessLogout}
                          >

                          </GoogleLogout>
                        </div>
                      </div>


                      {/* <button className="form-control w-75  mx-auto" onClick={loginWithGoogle}>
                        <i className="fab fa-google fa-x mx-5"></i> Continue
                        with Google
                      </button> */}
                      {/* <LoginWithGoogle /> */}

                      {/* <LogoutFromGoogle/> */}
                      {/* <li className="btn border rounded-2 me-4">
                            <i className="fab fa-facebook-f"></i> facebook
                            </li>
                            <li className="btn border rounded-2 ">
                            <i className="fab fa-instagram"></i>Instagram</li> */}

                      <p className="text-center mt-4 fs-5">
                        Don't have account?{" "}
                        <Link to="/signup" className="ms-2 text-dark">
                          Click here
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
};

export default HocLandingPage(Login);
