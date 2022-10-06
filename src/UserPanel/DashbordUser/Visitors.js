import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DropdownButton, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HocComponent from "../../Components/HocComponent";
import { FetchAllVisitors } from "../../Redux/PropertyOwnerSlices/allVisitors";
import AdminFooter from "../../AdminPanel/AdminFooter";
import { Dropdown } from "antd";

const BaseUrl = "http://bantford.prometteur.in";

const Visitors = () => {
  const [totalVisitors, setTotalVisitors] = useState([]);

  const dispatch = useDispatch();
  const visitors = useSelector((state) => state.allvisitors);
  console.log(visitors.AllVisitors);
  // setTotalVisitors(visitors.AllVisitors);

  const handleSubmit = (values) => {
    console.log(values.filter);
    getAllVisitors(values.filter);
    console.log("selected value", values);
    console.log(values.filter);
    dispatch(FetchAllVisitors(values.filter));
  };

  const getAllVisitors = (value) => {
    axios
      .get(`${BaseUrl}/propertyOwner/all-visitors?visits=${value}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setTotalVisitors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(FetchAllVisitors());
  }, []);

  return (
    <>
      <div
        className="position-relative property-owner h-100"
        style={{ paddingLeft: "270px" }}
      >
           <div className="top-banner">
        <div className="user-dashbord mx-5  pb-5 ">
          <div className="row ">
       
          <div className="dashboard-title ">
              <div className="row align-items-center ">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">All Visitors</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a>Home</a>
                      </li>
                      <li className="breadcrumb-item active">Visitors</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="col-12">
              <div className="brant-card">
                <div className="brant-card-body">
                  <div className="table-spaces mt-5">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>
                            <div className="filtering ms-auto d-flex  align-items-center justify-content-start">
                              <span className="me-3">Filter By:</span>
                              <Formik
                                initialValues={{
                                  filter: "yesterday",
                                }}
                                validate={(values) => {
                                  let errors = {};

                                  return errors;
                                }}
                                onSubmit={(values, { resetForm }) => {
                                  handleSubmit(values, resetForm);
                                }}
                                className=""
                              >
                                {({ values, errors, handleSubmit }) => (
                                  <Form className="">
                                    <div className="formGroup">
                                      <Field
                                        as="select"
                                        className=" form-control "
                                        component="select"
                                        id="workspace"
                                        name="filter"
                                        onClick={handleSubmit}
                                        style={{ width: "200px" }}
                                      >
                                        <option value="today">Today</option>
                                        <option value="yesterday">
                                          Yesterday
                                        </option>

                                        <option value="7 days">Week</option>

                                        <option value="30 days">Month</option>
                                      </Field>

                                    </div>
                                  </Form>
                                )}
                              </Formik>
                            </div>
                          </th>
                          <th colSpan="4">
                            <p>
                              Visitors :{" "}
                              <span className="name">{visitors.length}</span>
                            </p>
                          </th>
                        </tr>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Visited Space</th>
                          <th>Contact Number</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {totalVisitors.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.user_details.name}</td>
                              <td>{item.space.space}</td>
                              <td>{item.user_details.contact}</td>
                              <td>{item.user_details.address}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <AdminFooter />
      </div>
    </>
  );
};

export default HocComponent(Visitors);
