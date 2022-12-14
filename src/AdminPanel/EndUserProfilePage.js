import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import HocComponent from "../Components/HocComponent";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const BaseUrl = "http://bantford.prometteur.in";

const EndUserProfilePage = () => {
  const [profileDetail, setProfileDetail] = useState([]);
  const [initialValues, setIntialvalue] = useState();
  console.log("values", initialValues);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // console.log(values);

    axios
      .patch(`${BaseUrl}/admin/update-profile`, values, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
       
        setProfileDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getadminProfile = () => {
    axios
      .get(`${BaseUrl}/admin/admin-profile`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
        // console.log(res.data.)
       
        setProfileDetail(res.data);
        setIntialvalue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const logoutHandler = () => {
      axios.post(`${BaseUrl}/admin/admin-logout`, {headers: {
        Authorization: localStorage.getItem("token")
      }})
      .then((res)=> {
        
        console.log(res.data)
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/")
      })
      .catch((err)=>{console.log(err)})
  }

  useEffect(() => {
    getadminProfile();
  }, []);

  console.log(profileDetail);

  // Object.keys(profileDetail).map((key,index)=>{
  //   console.log(profileDetail[key])
  //   const profileData = profileDetail[key];
  // })

  const setinitialValues = {
    firstName: profileDetail.name,
    lastName: profileDetail.name,
    email: profileDetail.email,
    password: profileDetail.password,
    address: profileDetail.address,
    city: profileDetail.address,
    state: profileDetail.address,
    zip: profileDetail.contact,
    description: profileDetail.email,
  };

  // console.log(setinitialValues);
  // console.log(setinitialValues.firstName);
  console.log(profileDetail.name);

  return (
    <div
      className="mb-5"
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        height: "100%",
      }}
    >
      <div className="enduser-profile-heading">
      <div className="heading-page-profile">
        <p className="overview-user-profile_page">Overview</p>
        <h5 className="Analytic_heading">Your Profile</h5>
      </div>
      </div>

      <div className="row mx-3  ">
        <div className="col-4 gx-5 ">
          <div className="card user-detail-overview px-3">
            <div className="profile-image-name">
              <div className="user-image">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                  className="profile-image"
                />
              </div>
              <p className="user-name">{profileDetail.name}</p>
              <p className="user-position">{profileDetail.profile}</p>
              
            </div>
            <hr />
            <div className="user-workflow">
              <h4 className="Description_heading-user">workflow</h4>
              <div className="progress-bar-user">
                <ProgressBar animated now={65} />
              </div>
            </div>
            <hr />
            <div className="user-description">
              <p className="Description_heading-user">Description</p>
              <p className="description_paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                accusamus incidunt doloribus beatae vitae odio autem ut commodi
                consequuntur culpa?
              </p>
            </div>
          </div>
        </div>
        <div className="col-8  gx-5 account-card-deatil ">
          <div className="account-deatil card px-5 py-3">
            <div className="div">
              <p className="account-deatil-heading">Account Detail</p>
              <hr />
              <div>
                {console.log(setinitialValues.firstName)}
                <Formik
                  enableReinitialize
                  initialValues={{
                    name: `${profileDetail.name}`,
                    lastName: `${profileDetail.name}`,
                    email: `${setinitialValues.email}`,
                    contact: `${profileDetail.contact}`,
                   
                    
                    description: `${profileDetail.description}`,
                    address: `${profileDetail.address}`,
                    state: `${setinitialValues.state}`,
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
                   
                    if (!values.contact) {
                      errors.contact = "required*";
                    }else if(values.contact<0){
                      errors.contact = "Enter a positive value"
                    }
                    return errors;
                  }}
                  onSubmit={handleSubmit}
                  className="mt-4"
                >
                  {({ values, errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="">
                      <div className="formGroup">
                        <div className="row">
                          <div className="col-6">
                            <label htmlFor="First Name" className="label-user">
                              First Name
                            </label>
                            <Field
                              type="text"
                              name="name"
                              placeholder="name"
                              className="form-control"
                              defautvalue={values.firstName}
                            />

                            <label htmlFor="Email " className="label-user">
                              Email{" "}
                            </label>
                            <Field
                              type="email"
                              name="email"
                              placeholder="email"
                              className="form-control"
                            />

                            <label htmlFor="Contact " className="label-user">
                              Contact{" "}
                            </label>
                            <Field
                              type="text"
                              name="contact"
                              placeholder="contact"
                              className="form-control"
                            />
                          </div>
                          
                          <div className="col-12">
                            <label htmlFor="Address " className="label-user">
                              Address{" "}
                            </label>
                            <Field
                              type="text"
                              name="address"
                              placeholder="address"
                              className="form-control "
                            />
                          </div>

                          <div className="col-12">
                            <label htmlFor="Zip " className="label-user">
                              Description{" "}
                            </label>
                            <Field
                              as="textarea"
                              rows="7"
                              name="description"
                              placeholder="description"
                              className="form-control "
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <button
                            className="btn update-account-btn mt-5"
                            type="submit"
                          >
                            Update Account
                          </button>
                          <button onClick={logoutHandler} className="btn-second">Logout</button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndUserProfilePage;

