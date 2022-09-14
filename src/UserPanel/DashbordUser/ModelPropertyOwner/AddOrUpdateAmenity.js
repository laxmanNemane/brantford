import React, { useState } from "react";
import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import Item from "antd/lib/list/Item";

const AddOrUpdateAmenity = ({ isModalOpen, setIsModalOpen, id, items }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(id);
  const handleSubmit = (values, resetForm) => {
    console.log(values);
    // onUpdateHandler(values);
    if (id) {
      axios
        .patch(
          `http://bantford.prometteur.in/admin/update-amenity?id=${id}`,
          values,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          console.log("hello");
        })
        .catch((err) => {
          console.log(err);
        });
      setIsModalOpen(false);
    } else {
      axios
        .post(`bantford.prometteur.in/admin/add-amenity?spaceId=2`, values, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log("hello");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    resetForm();
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose
      footer={false}
    >
      {items.amenities_type === "other" ? (
        <>
          <Formik
            initialValues={{
              amenities_type: "other",
              Internet_Speed: items.Internet_Speed,
              Parking_available: "",
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
              <Form onSubmit={handleSubmit} className="">
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12  py-4">
                      <label htmlFor="manager_email" className="label my-1">
                        Internet_Speed :{" "}
                      </label>
                      <Field
                        type="text"
                        name="Internet_Speed"
                        placeholder="Internet_Speed"
                        className="form-control mb-3"
                      />
                      <label htmlFor="Seating capacity " className="label my-1">
                        Parking_available :{" "}
                      </label>

                      <Field
                        type="text"
                        name="Parking_available"
                        placeholder="Parking_available"
                        className="form-control  mb-3  m"
                      />

                      <button
                        type="submit "
                        className="btn-first btn pt-2 my-3 border"
                        onClick={handleSubmit}
                      >
                        update
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "breakOutZone" ? (
        <>
          {" "}
          <Formik
            initialValues={{
              amenities_type: "breakOutZone",
              Breakout_Zone: items.Breakout_Zone,
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
              <Form onSubmit={handleSubmit} className="">
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12 w-50 py-4">
                      <label htmlFor="Breakout_Zone" className="label">
                        Message :{" "}
                      </label>
                      <Field
                        type="text"
                        name="Breakout_Zone"
                        placeholder="Message"
                        className="form-control  mb-3 m "
                      />

                      <button
                        type="submit "
                        className="btn-first pt-2 my-3"
                        onClick={handleSubmit}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "telicomServices" ? (
        <>
          <Formik
            initialValues={{
              amenities_type: "telicomServices",
              telicom_service: items.telicom_service,
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
              <Form onSubmit={handleSubmit} className="">
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12 w-50 py-4">
                      <label htmlFor="manager_email" className="label">
                        Message :{" "}
                      </label>
                      <Field
                        type="text"
                        name="telicom_service"
                        placeholder="telicom service message"
                        className="form-control  mb-3 m "
                      />

                      <button
                        type="submit "
                        className="btn-first pt-2 my-3"
                        onClick={handleSubmit}
                      >
                        update
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "compliances" ? (
        <>
          <Formik
            initialValues={{
              amenities_type: "compliances",
              Compliances: items.Compliances,
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
              <Form onSubmit={handleSubmit} className="">
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12 w-50 py-4">
                      <label htmlFor="Message" className="label">
                        Message :{" "}
                      </label>
                      <Field
                        type="text"
                        name="Compliances"
                        placeholder="Message"
                        className="form-control  mb-3 m "
                      />

                      <button
                        type="submit "
                        className="btn-first pt-2 my-3"
                        onClick={handleSubmit}
                      >
                        update
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "community" ? (
        <>
          {" "}
          <Formik
            initialValues={{
              amenities_type: "community",
              Community: items.Community,
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
            {({ values, errors }) => (
              <Form className="">
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12 w-50 py-4">
                      <label htmlFor="Community" className="label">
                        Message :
                      </label>
                      <Field
                        type="text"
                        name="Community"
                        placeholder="Community message"
                        className="form-control  mb-3 m "
                      />

                      <button type="submit" className="btn-first pt-2 my-3">
                        update
                      </button>
                      {/* <button
                  type="submit "
                  className="btn-first pt-2 my-3"
                  onClick={() => { handleSubmit(); resetForm(); }}
                >
                  Add
                </button> */}
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "recreationalZone" ? (
        <>
          {" "}
          <Formik
            initialValues={{
              amenities_type: "recreationalZone",
              Recreational_Zone: items.Recreational_Zone,
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
            {({ values, errors }) => (
              <Form>
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12 w-50 py-4">
                      <label htmlFor="Message" className="messgge py-2">
                        Message :
                      </label>
                      <Field
                        type="text"
                        name="Recreational_Zone"
                        placeholder="Message"
                        className="form-control  mb-3 m "
                      />

                      <button type="submit " className="btn-unique">
                        update
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "besic" ? (
        <>
          <Formik
            initialValues={{
              // officeAccess  ->under officeaccess ('24/7_ofiice_access','only_day_access','only_weakend_access'),
              // security  ->under security  ('24/7_security','only_day_security','only_night_security'),
              amenities_type: "besic",
              Air_Conditioning: false,
              CCTV_Surveillance: false,
              Conference_Room: false,
              Cubicles: false,
              Drinking_Water: false,
              Electricity_Power_Backup: false,
              Managed_Reception: false,
              Managing_Director_Cabin: false,
              Meeting_Conference_Rooms: false,
              Passenger_Lift: false,
              Reception: false,
              Support_Staff: false,
              Window_Coverings: false,
              picked: "",
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
            {({ values, errors }) => (
              <Form className="">
                <div className="formGroup">
                  <div className="row">
                    <div className="col-6">
                      <div
                        role="group"
                        aria-labelledby="checkbox-group"
                        className="my-4"
                      >
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Air_Conditioning"
                            className="fs-5"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; Air_Conditioning</label>
                        </div>

                        {/* cctv servilliance */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="CCTV_Surveillance"
                            id="check"
                            label="CCTV Surveillance"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; CCTV Surveillance</label>
                        </div>

                        {/* Conference_Room */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Conference_Room"
                            id="check"
                            label="Conference Room"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp;Conference Room</label>
                        </div>
                        {/*  Cubicle */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Cubicles"
                            id="check"
                            label="Cubicles"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; Cubicles</label>
                        </div>
                        {/* Drinking_Water */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Drinking_Water"
                            id="check"
                            label="Drinking_Water"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; Drinking Water</label>
                        </div>
                        {/* Electricity_Power_Backup */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Electricity_Power_Backup"
                            id="check"
                            label=" Electricity_Power_Backup"
                            style={{ width: "18px" }}
                          />
                          <label className="">
                            &nbsp; Electricity Power Backup
                          </label>
                        </div>
                        {/* Managed_Reception */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Managed_Reception"
                            id="check"
                            label="Managed_Reception"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; Managed Reception</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        role="group"
                        aria-labelledby="checkbox-group"
                        className="my-4"
                      >
                        {/* Managing_Director_Cabin */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Managing_Director_Cabin"
                            id="check"
                            label="Managing_Director_Cabin"
                            style={{ width: "18px" }}
                          />
                          <label className="">
                            &nbsp; Managing Director Cabin
                          </label>
                        </div>
                        {/* Meeting_Conference_Rooms */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Meeting_Conference_Rooms"
                            id="check"
                            label=" Meeting_Conference_Rooms"
                            style={{ width: "18px" }}
                          />
                          <label className="">
                            &nbsp; Meeting Conference Rooms
                          </label>
                        </div>
                        {/* Passenger_Lift */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Passenger_Lift"
                            id="check"
                            label="Passenger_Lift"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; Passenger Lift</label>
                        </div>
                        {/* Reception */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Reception"
                            id="check"
                            label="Reception"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; Reception</label>
                        </div>
                        {/* Support_Staff */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Support_Staff"
                            id="check"
                            label="Support_Staff"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; Support Staff</label>
                        </div>
                        {/* Window_Coverings */}
                        <div className="d-flex my-2">
                          <Field
                            type="checkbox"
                            name="Window_Coverings"
                            id="check"
                            label="Window_Coverings"
                            style={{ width: "18px" }}
                          />
                          <label className="">&nbsp; Window Coverings</label>
                        </div>
                      </div>
                    </div>
                    <button type="submit " className="btn-unique w-25">
                      update
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "equipment" ? (
        <>
          <Formik
            initialValues={{
              amenities_type: "equipment",
              Equipment: items.Equipment,
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
            {({ values, errors }) => (
              <Form>
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12 w-50 py-4">
                      <label htmlFor="Message" className="messgge py-2">
                        Message :
                      </label>
                      <Field
                        type="text"
                        name="Equipment"
                        placeholder="Equipments "
                        className="form-control  mb-3 m "
                      />

                      <button type="submit " className="btn-unique">
                        update
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "cafeteria" ? (
        <>
          <Formik
            initialValues={{
              amenities_type: "cafeteria",
              Cafetarea: items.Cafetarea,
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
            {({ values, errors }) => (
              <Form>
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12 w-50 py-4">
                      <label htmlFor="Message" className="messgge py-2">
                        Message :
                      </label>
                      <Field
                        type="text"
                        name="Cafetarea"
                        placeholder="Cafetarea message "
                        className="form-control  mb-3 m "
                      />

                      <button type="submit " className="btn-unique">
                        update
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : items.amenities_type === "ondemandServices" ? (
        <>
          <Formik
            initialValues={{
              amenities_type: "ondemandServices",
              ondemand_service: items.ondemand_service,
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
            {({ values, errors }) => (
              <Form>
                <div className="formGroup">
                  <div className="row">
                    <div className="col-12 w-50 py-4">
                      <label htmlFor="Message" className="messgge py-2">
                        Message :
                      </label>
                      <Field
                        type="text"
                        name="ondemand_service"
                        placeholder="Cafetarea message "
                        className="form-control  mb-3 m "
                      />

                      <button type="submit " className="btn-unique">
                        update
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        ""
      )}
    </Modal>
  );
};

export default AddOrUpdateAmenity;
