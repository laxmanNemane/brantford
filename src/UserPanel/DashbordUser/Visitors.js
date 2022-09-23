import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HocComponent from "../../Components/HocComponent";
import { FetchAllVisitors } from "../../Redux/PropertyOwnerSlices/allVisitors";

const Visitors = () => {
  const dispatch = useDispatch();
  const visitors = useSelector((state) => state.allvisitors);
  console.log(visitors);
  const handleSubmit = (values) => {
    console.log(values.filter);
    dispatch(FetchAllVisitors(values.filter));
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
        <div className="user-dashbord mx-5  pb-5 ">
          <div className="row py-5">
            <div className="col-12 mb-5">
              <div className="dashbord-section-content d-flex justify-content-between align-items-center   px-4 py-2   rounded">
                <div className="heading-section-dashbord ">
                  <h1 className="heading-second mb-1"> All Visitors</h1>
                </div>
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
                            <div className="filtering ms-auto d-flex ">
                              Filter By:
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
                                          yesterday
                                        </option>

                                        <option value="7 days">week</option>

                                        <option value="30 days">Month</option>
                                      </Field>
                                    </div>
                                  </Form>
                                )}
                              </Formik>
                            </div>
                          </th>
                          <th colSpan="3">
                            <p>
                              Visitors :{" "}
                              <span className="name">{visitors.length}</span>
                            </p>
                          </th>
                        </tr>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Contact Number</th>
                          <th>location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Laxman</td>
                          <td>+91 7947329747</td>
                          <td>Pune</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Kunal</td>
                          <td>+91 7947329747</td>
                          <td>Pune</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HocComponent(Visitors);
