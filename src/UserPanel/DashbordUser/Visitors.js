import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HocComponent from "../../Components/HocComponent";
import { FetchAllVisitors } from "../../Redux/PropertyOwnerSlices/allVisitors";

const Visitors = () => {
  const dispatch = useDispatch()
  const visitors = useSelector(state => state.allvisitors)
  console.log(visitors)
  const handleSubmit = (values) => {
    console.log(values.filter);
    dispatch(FetchAllVisitors(values.filter));
  };

  useEffect(() => {
    dispatch(FetchAllVisitors());
  }, [])

  return (
    <div className="mx-5">
      <div className="row">
        <div className="col-12 ">
          <h5>All Visitors</h5>

        </div>
      </div>
      <div className="col-12">

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
                              <option value="yesterday">yesterday</option>

                              <option value="7 days">week</option>

                              <option value="30 days">Month</option>

                            </Field>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </th>
                <th>
                  <p>Visitors : <span className="name">{visitors.length}</span></p>
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
  );
};

export default HocComponent(Visitors);
