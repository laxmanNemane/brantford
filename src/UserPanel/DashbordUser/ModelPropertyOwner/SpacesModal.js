import { Modal } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllCategories } from "../../../Redux/PropertyOwnerSlices/allcategoriesSlice";

const BaseUrl = "http://bantford.prometteur.in";

console.log(parseInt("2"));

const SpacesModal = ({ showStatus, setshowStatus, spaceId, element, cid }) => {
  const categories = useSelector(
    (state) => state.POCategories.AllPropertyOwnerCategories
  );
  console.log(categories);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values.categaryId);
    if (spaceId) {
      // UpdateSpace
      console.log(values);
      axios
        .patch(`${BaseUrl}/admin/update-space?id=${spaceId}`, values, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log(res.data.spaces);
          toast.success("Space updated successfully");
          // showSpacesPropertyOwner();
          setshowStatus(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error("space is not updated!");
        });
      console.log(values);
    } else {
      // Addspace
      console.log(values);
      axios
        .post(
          `${BaseUrl}/admin/add-space?categaryId=${parseInt(
            values.categaryId
          )}`,
          values,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          console.log(res.data.spaces);
          toast.success("Space added successfully");
          // showSpacesPropertyOwner();
          setshowStatus(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Space not added");
        });
    }
  };

  useEffect(() => {
    dispatch(FetchAllCategories());
  }, []);

  const handleOk = () => {
    setshowStatus(false);
  };

  const handleCancel = () => {
    setshowStatus(false);
  };
  return (
    <>
      <Modal
        title="New Category"
        open={showStatus}
        onOk={handleOk}
        width={650}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
      >
        <div className="row">
          {spaceId ? (
            <>
              <Formik
                enableReinitialize
                initialValues={{
                  space: element.space,
                  manager_name: element.manager_name,
                  manager_email: element.manager_email,
                  manager_contactNumber: element.manager_contactNumber,
                  seating_capacity: element.seating_capacity,
                  cabin_capacity: element.cabin_capacity,
                  total_desks: element.total_desks,
                  address: element.address,
                  city: element.city,
                  price: element.price,
                  property_status: element.property_status,
                  description: element.description,
                  working_days: element.working_days,
                  // property_id: element.property_id,
                  categaryId: element.categaryId,
                }}
                validate={(values) => {
                  
                  let errors = {};

                  return errors;
                }}
                onSubmit={handleSubmit}
              >
                {({ values, errors, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="formGroup">
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="Space Name" className="label-user">
                            Space Name:{" "}
                          </label>
                          <Field
                            type="text"
                            name="space"
                            placeholder="space"
                            className="form-control  mb-3   "
                          />
                          <label htmlFor="manager_email" className="label-user">
                            Manager Email:{" "}
                          </label>
                          <Field
                            type="text"
                            name="manager_email"
                            placeholder="manager_email"
                            className="form-control  mb-3 m"
                          />
                          <label
                            htmlFor="Seating capacity "
                            className="label-user"
                          >
                            Seating Capacity:{" "}
                          </label>

                          <Field
                            type="number"
                            name="seating_capacity"
                            placeholder="seating_capacity"
                            className="form-control  mb-3  m"
                          />
                          <label htmlFor="Cabins" className="label-user">
                            Cabin:{" "}
                          </label>

                          <Field
                            type="text"
                            name="cabin_capacity"
                            placeholder="cabin_capacity"
                            className="form-control  mb-3  m"
                          />
                          <label htmlFor="desk" className="label-user">
                            Total Desk:{" "}
                          </label>

                          <Field
                            type="text"
                            name="total_desks"
                            placeholder="total_desks"
                            className="form-control  mb-3  m"
                          />

                          {/* <label htmlFor="Property-id" className="label-user">
                            Property id:{" "}
                          </label>

                          <Field
                            type="text"
                            name="property_id"
                            placeholder="property_id"
                            className="form-control  mb-3  m"
                          /> */}

                          <label htmlFor="city" className="label-user">
                            City:{" "}
                          </label>

                          {/* <Field
                            type="text"
                            name="city"
                            placeholder="city"
                            className="form-control  mb-3  m"
                          /> */}


                          <Field
                          as="select"
                          component="select"
                          id="city"
                            type="text"
                            name="city"
                            placeholder="city"
                            className="form-control  mb-3  m"
                            >
                           <option value="city">
                                select an option
                              </option>
                              <option value="pune">
                                Pune
                              </option>
                              <option value="mumbai">Mumbai</option>
                              <option value="bangolore">Bangolore</option>
                              <option value="delhi">Delhi</option>
                              <option value="surat">Surat</option>
                              <option value="hydrabad">Hydrabad</option>
                            </Field>

                        </div>
                        <div className="col-6">
                          <label htmlFor="manager_name" className="label-user">
                            Category{" "}
                          </label>
                          <Field
                            as="select"
                            className=" form-control "
                            component="select"
                            id="workspace"
                            name="categaryId"
                          >
                            {categories.map((ele, index) => (
                              <option key={index} value={ele.id}>
                                {ele.categary}
                              </option>
                            ))}
                          </Field>
                          <label htmlFor="manager_name" className="label-user">
                            Manager Name:{" "}
                          </label>
                          <Field
                            type="text"
                            name="manager_name"
                            placeholder="manager_name"
                            className="form-control  mb-3  m"
                          />
                          <label
                            htmlFor="manager_contactNumber"
                            className="label-user"
                          >
                            Manager Contact:{" "}
                          </label>
                          <Field
                            type="text"
                            name="manager_contactNumber"
                            placeholder="manager_contactNumber"
                            className="form-control  mb-3  m"
                          />
                          <label htmlFor="price" className="label-user">
                            Price :
                          </label>
                          <Field
                            type="text"
                            name="price"
                            placeholder="price"
                            className="form-control  mb-3  m"
                          />

                          <label htmlFor="manager_name" className="label-user">
                            Propert Status:{" "}
                          </label>
                          <Field
                            as="select"
                            className=" form-control "
                            component="select"
                            id="workspace"
                            name="property_status"
                          >
                            <option value="Rent">Rent</option>

                            <option value="Sale">Sale</option>
                          </Field>

                          <label htmlFor="Working Days" className="label-user">
                            Working Days:
                          </label>
                          <Field
                            as="select"
                            className=" form-control "
                            component="select"
                            id="working_days"
                            name="working_days"
                            value={values.working_days}
                          >
                            <option value="Monday-Friday">Monday-Friday</option>
                            <option value="Hybrid">Hybrid</option>

                            <option value="Saturday-Sunday">
                              Saturday-Sunday
                            </option>
                          </Field>
                        </div>

                        <div className="col-12">
                          <label htmlFor="Address" className="label-user">
                            Address
                          </label>
                          <Field
                            type="text"
                            name="address"
                            placeholder="address"
                            className="form-control  mb-3  m"
                          />
                        </div>

                        <div className="col-12">
                          <label htmlFor="description" className="label-user">
                            Description
                          </label>
                          <Field
                            type="text"
                            as="textarea"
                            row={4}
                            name="description"
                            placeholder="description"
                            className="form-control mt-3 mb-3  m"
                          />
                        </div>
                      </div>

                      <div className="d-flex  mt-3">
                        <button
                          className="btn btn-first"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Update Space
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          ) : (
            <>
              <Formik
                initialValues={{
                  space: "",
                  manager_name: "",
                  manager_email: "",
                  manager_contactNumber: "",
                  seating_capacity: "",
                  cabin_capacity: "",
                  total_desks: "",
                  address: "",
                  city: "",
                  price: "",
                  property_status: "",
                  description: "",
                  working_days: "",
                  categaryId: "",
                }}
                validate={(values) => {
                  let errors = {};
                  if (!values.categaryId) {
                    errors.categaryId = "required!";
                  }
                  if (!values.property_status) {
                    errors.property_status = "required!";
                  }
                  if (!values.working_days) {
                    errors.working_days = "requires!";
                  }
                  if (!values.space) {
                    errors.space = "required!";
                  }else if(!/^[A-Za-z ]*$/i.test(
                    values.space
                    )){
                      errors.space = "Enter a valid value";
                    }

                  if (!values.manager_email) {
                    errors.manager_email = "required!";
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.manager_email
                    )
                  ){
                    errors.manager_email = "Enter a valid email";
                  }
                  if (!values.seating_capacity) {
                    errors.seating_capacity = "required!";
                  }else if(values.seating_capacity<0){
                    errors.seating_capacity = "Enter a Positive value";
                  }

                  if (!values.cabin_capacity) {
                    errors.cabin_capacity = "required!";
                  }else if(values.cabin_capacity<0){
                    errors.cabin_capacity = "Enter a Positive value";
                  }

                  if (!values.total_desks) {
                    errors.total_desks = "required!";
                  }else if(values.total_desks<0){
                    errors.total_desks = "Enter a Positive value";
                  }

                  if (!values.city) {
                    errors.city = "required!";
                  }
                  if (!values.manager_name) {
                    errors.manager_name = "required!";
                  }else if(!/^[A-Za-z ]*$/i.test(
                    values.manager_name
                    )){
                      errors.manager_name = "Enter a valid value";
                    }

                  if (!values.manager_contactNumber) {
                    errors.manager_contactNumber = "required!";
                  }else if (values.manager_contactNumber.length < 9) {
                    errors.manager_contactNumber = "Please Enter valid mobile number";
                  }
                  
                  else if (!/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
                    values.manager_contactNumber
                    )
                    ) {
                    errors.manager_contactNumber = "Enter valid number";
                  }

                  if (!values.price) {
                    errors.price = "required!";
                  }else if(values.price<0){
                    errors.price = "Enter a Positive value";
                  }

                  if (!values.property_status) {
                    errors.property_status = "required!";
                  }
                  if (!values.working_days) {
                    errors.working_days = "required!";
                  }
                  if (!values.address) {
                    errors.address = "required!";
                  }
                  if (!values.description) {
                    errors.description = "required!";
                  }

                  return errors;
                }}
                onSubmit={handleSubmit}
              >
                {({ values, errors, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="formGroup">
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="Space Name" className="label-user">
                            Space Name:{" "}
                          </label>
                          <Field
                            type="text"
                            name="space"
                            placeholder="space"
                            className="form-control  mb-3   "
                          />
                          <span className="text-danger">
                            <ErrorMessage name="space" />
                          </span>
                          <br/>

                          <label htmlFor="manager_email" className="label-user">
                            Manager Email:{" "}
                          </label>
                          <Field
                            type="text"
                            name="manager_email"
                            placeholder="manager_email"
                            className="form-control  mb-3 m "
                          />
                          <span className="text-danger">
                            <ErrorMessage name="manager_email" />
                          </span>
                          <br/>

                          <label
                            htmlFor="Seating capacity "
                            className="label-user"
                          >
                            Seating Capacity:{" "}
                          </label>

                          <Field
                            type="text"
                            name="seating_capacity"
                            placeholder="seating_capacity"
                            className="form-control  mb-3  m"
                          />
                          <span className="text-danger">
                            <ErrorMessage name="seating_capacity" />
                          </span>
                          <br/>

                          <label htmlFor="Cabins" className="label-user">
                            Cabin:{" "}
                          </label>

                          <Field
                            type="text"
                            name="cabin_capacity"
                            placeholder="cabin_capacity"
                            className="form-control  mb-3  m"
                          />
                           <span className="text-danger">
                            <ErrorMessage name="cabin_capacity" />
                          </span>
                          <br/>

                          <label htmlFor="desk" className="label-user">
                            Total Desk:{" "}
                          </label>

                          <Field
                            type="text"
                            name="total_desks"
                            placeholder="total_desks"
                            className="form-control  mb-3  m"
                          />
                         <span className="text-danger">
                            <ErrorMessage name="total_desks" />
                          </span>
                          <br/>
                         
                          <label htmlFor="city" className="label-user">
                            City:{" "}
                          </label>

                          <Field
                          as="select"
                          component="select"
                          id="city"
                            type="text"
                            name="city"
                            placeholder="city"
                            className="form-control  mb-3  m"
                          >
                          <option value="">
                                Select City Name
                              </option>
                              <option value="pune">
                                Pune
                              </option>
                              <option value="mumbai">Mumbai</option>
                              <option value="bangolore">Bangolore</option>
                              <option value="delhi">Delhi</option>
                              <option value="surat">Surat</option>
                              <option value="hydrabad">Hydrabad</option>
                            </Field>
                            <span className="text-danger">
                            <ErrorMessage name="city" />
                          </span>
                          <br/>


                        </div>
                        <div className="col-6">
                          <label htmlFor="manager_name" className="label-user">
                            category :{" "}
                          </label>
                          <Field
                            as="select"
                            className=" form-control "
                            component="select"
                            id="categaryId"
                            name="categaryId"
                          >
                            <option value="">Pick a category</option>
                            {categories.map((ele, index) => (
                              <option key={index} value={ele.id}>
                                {ele.categary}
                              </option>
                            ))}{" "}
                          </Field>
                          <span className="text-danger">
                            <ErrorMessage name="categaryId" />
                          </span>
                          <br />

                          <label htmlFor="manager_name" className="label-user">
                            manager name:{" "}
                          </label>
                          <Field
                            type="text"
                            name="manager_name"
                            placeholder="manager_name"
                            className="form-control  mb-3  m"
                          />
                          <span className="text-danger">
                            <ErrorMessage name="manager_name" />
                          </span>
                          <br/>

                          <label
                            htmlFor="manager_contactNumber"
                            className="label-user"
                          >
                            Manager Contact:{" "}
                          </label>
                          <Field
                            type="text"
                            name="manager_contactNumber"
                            placeholder="manager_contactNumber"
                            className="form-control  mb-3  m"
                          />
                          <span className="text-danger">
                            <ErrorMessage name="manager_contactNumber" />
                          </span>
                          <br/>

                          <label htmlFor="price" className="label-user">
                            Price :
                          </label>
                          <Field
                            className=" form-control "
                            id="workspace"
                            name="price"
                          ></Field>
                           <span className="text-danger">
                            <ErrorMessage name="price" />
                          </span>
                          <br/>

                          <label htmlFor="price" className="label-user  mt-2">
                            property status :
                          </label>
                          <Field
                            as="select"
                            className=" form-control mb-2 "
                            component="select"
                            id="workspace"
                            name="property_status"
                          >
                            <option value="">Pick a Property Status...</option>
                            <option value="Rent">Rent</option>

                            <option value="Sale">Sale</option>
                          </Field>
                          <span className="text-danger">
                            <ErrorMessage name="property_status" />
                          </span>{" "}
                          <br />
                          <label
                            htmlFor="Working Days"
                            className="label-user mt-2"
                          >
                            Working Days:
                          </label>
                          <Field
                            as="select"
                            className=" form-control  mb-2"
                            component="select"
                            id="workspace"
                            name="working_days"
                          >
                            <option value="">Pick a Working Day..</option>
                            <option value="Monday-Friday">Monday-Friday</option>
                            <option value="Sat">Sat</option>

                            <option value="Sun">Sun</option>
                          </Field>
                          <span className="text-danger">
                            <ErrorMessage name="working_days" />
                          </span>
                        </div>

                        <div className="col-12">
                          <label htmlFor="Address" className="label-user">
                            Address
                          </label>
                          <Field
                            type="text"
                            name="address"
                            placeholder="address"
                            className="form-control  mb-3  m"
                          />
                           <span className="text-danger">
                            <ErrorMessage name="working_days" />
                          </span>
                        </div>


                        <div className="col-12">
                          <label htmlFor="description" className="label-user">
                            Description
                          </label>
                          <Field
                            type="text"
                            as="textarea"
                            row={4}
                            name="description"
                            placeholder="description"
                            className="form-control mt-3 mb-3  m"
                          />
                          <span className="text-danger">
                            <ErrorMessage name="description" />
                          </span>
                          <br/>
                        </div>
                      </div>

                      <div className="d-flex  mt-3">
                        <button
                          className="btn btn-first"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Add New Space
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default SpacesModal;

// space: "coworking space in Pune",
// manager_name: "laxaman",
// manager_email: "lakhsn@gmail.com",
// manager_contactNumber: 8967452356,
// seating_capacity: 30,
// cabin_capacity: 10,
// total_desks: 50,
// address: "pume maharashtra 411109",
// city: "hinjewadi",
// price: "6000",
// property_status: "Rent",
// description: "coworking space for Rent",
// working_days: "mondayToFriday",
// property_id: 2134,
