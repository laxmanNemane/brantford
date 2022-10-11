import { Select } from "antd";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import HocComponent from "../../../Components/HocComponent";
import { usersContext } from "../../../Context/UserContext";
import GetImage from "./GetImage";
import ImageUpload from "./ImageUpload";
import MapInput from "./MapInput";
import MapUpdate from "./MapUpdate";

const UpdateProperty = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [basic, setBasic] = useState(false);
  const [Recreational_Zone, setRecreational_Zone] = useState(false);
  const [Community, setCommunity] = useState(false);
  const [Breakout_Zone, setBreakout_Zone] = useState(false);
  const [Cafetarea, setCafetarea] = useState(false);
  const [Compliances, setCompliances] = useState(false);
  const [days, setDays] = useState(false);
  const [demand, setDemand] = useState(false);
  const [telicom, setTelicom_service] = useState(false);
  const [other, setOther] = useState(false);
  const { spaceIdsingle, setSpcesId } = useContext(usersContext);

  const handleSubmit = (values, resetForm) => {
    axios
      .post(
        `http://bantford.prometteur.in/admin/add-amenity?spaceId=${spaceIdsingle}`,
        values,
        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("values");
    console.log(values);
    resetForm();
    setBasic(false);
    setRecreational_Zone(false);
    setCommunity(false);
    setBreakout_Zone(false);
    setCafetarea(false);
    setCompliances(false);
    setDays(false);
    setTelicom_service(false);
    setOther(false);
  };

  const addLocationSubmit = (values, resetForm) => {
    axios
      .post(`http://bantford.prometteur.in/admin/add-location`, values, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(values);
    resetForm();
  };

  return (
    <>
      <div
        className="mx-3 mt-4"
        style={{ paddingLeft: "270px", backgroundColor: "#E7E5E5" }}
      >
        <div className="row mx-3">
          <div className="col-12 bg-light px-3 py-4 my-2 ">
            <h3 className="fw-bold">Amenities</h3>
            <br />

            <div id="example-collapse-text">
              <p className="px-3 h5" style={{ color: "#343a40" }}>
                Add Your Ameneity type-wise click on type
              </p>
              <div className="row">
                <div className="col-6">
                  {/* ==============Basics===================== */}
                  <button
                    className="btn btn-outline-none"
                    onClick={() => setBasic(!basic)}
                    aria-controls="example-collapse-text"
                    aria-expanded={basic}
                  >
                    Basic <span className="text-danger ms-1">*</span>
                  </button>{" "}
                  <br />
                  <Collapse in={basic}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
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
                                        <label className="">
                                          &nbsp; Air_Conditioning
                                        </label>
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
                                        <label className="">
                                          &nbsp; CCTV Surveillance
                                        </label>
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
                                        <label className="">
                                          &nbsp;Conference Room
                                        </label>
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
                                        <label className="">
                                          &nbsp; Cubicles
                                        </label>
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
                                        <label className="">
                                          &nbsp; Drinking Water
                                        </label>
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
                                        <label className="">
                                          &nbsp; Managed Reception
                                        </label>
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
                                        <label className="">
                                          &nbsp; Passenger Lift
                                        </label>
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
                                        <label className="">
                                          &nbsp; Reception
                                        </label>
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
                                        <label className="">
                                          &nbsp; Support Staff
                                        </label>
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
                                        <label className="">
                                          &nbsp; Window Coverings
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    type="submit "
                                    className="btn-unique w-25"
                                  >
                                    Add <i className="fa-solid fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>
                  {/* ===============================Recreational_Zone =========================== */}
                  <button
                    className="btn"
                    onClick={() => setRecreational_Zone(!Recreational_Zone)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Recreational_Zone}
                  >
                    Recreational_Zone<span className="text-danger ms-1">*</span>
                  </button>
                  <br />
                  <Collapse in={Recreational_Zone}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "recreationalZone",
                            Recreational_Zone: "",
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
                                    <label
                                      htmlFor="Message"
                                      className="messgge py-2"
                                    >
                                      Message :
                                    </label>
                                    <Field
                                      type="text"
                                      name="Recreational_Zone"
                                      placeholder="Message"
                                      className="form-control  mb-3 m "
                                    />

                                    <button
                                      type="submit "
                                      className="btn-unique"
                                    >
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>
                  {/* ===============================Community =========================== */}
                  <button
                    className="btn"
                    onClick={() => setCommunity(!Community)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Community}
                  >
                    Community
                  </button>
                  <br />
                  <Collapse in={Community}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "community",
                            Community: "",
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
                                    <label
                                      htmlFor="Community"
                                      className="label"
                                    >
                                      Message :
                                    </label>
                                    <Field
                                      type="text"
                                      name="Community"
                                      placeholder="Community message"
                                      className="form-control  mb-3 m "
                                    />

                                    <button
                                      type="submit"
                                      className="btn-first pt-2 my-3"
                                    >
                                      ADDD
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
                      </div>
                    </div>
                  </Collapse>
                  {/* ===============================telicom_service =========================== */}
                  <button
                    className="btn"
                    onClick={() => setTelicom_service(!telicom)}
                    aria-controls="example-collapse-text"
                    aria-expanded={telicom}
                  >
                    telicom_service<span className="text-danger ms-1">*</span>
                  </button>
                  <br />
                  <Collapse in={telicom}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "telicomServices",
                            telicom_service: "",
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
                                    <label
                                      htmlFor="manager_email"
                                      className="label"
                                    >
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
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>
                  {/* ===============================Other =========================== */}
                  <button
                    className="btn"
                    onClick={() => setOther(!other)}
                    aria-controls="example-collapse-text"
                    aria-expanded={other}
                  >
                    Other
                  </button>
                  <Collapse in={other}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "other",
                            Internet_Speed: "",
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
                                  <div className="col-12 w-50 py-4">
                                    <label
                                      htmlFor="manager_email"
                                      className="label"
                                    >
                                      Internet_Speed :{" "}
                                    </label>
                                    <Field
                                      type="text"
                                      name="Internet_Speed"
                                      placeholder="Internet_Speed"
                                      className="form-control  mb-3 m "
                                    />
                                    <label
                                      htmlFor="Seating capacity "
                                      className="label"
                                    >
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
                                      className="btn-first pt-2 my-3"
                                      onClick={handleSubmit}
                                    >
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="col-6">
                  {/* ===============================Breakout_Zone =========================== */}
                  <button
                    className="btn"
                    onClick={() => setBreakout_Zone(!Breakout_Zone)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Breakout_Zone}
                  >
                    Breakout_Zone
                  </button>
                  <br />
                  <Collapse in={Breakout_Zone}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "breakOutZone",
                            Breakout_Zone: "",
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
                                    <label
                                      htmlFor="Breakout_Zone"
                                      className="label"
                                    >
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
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>

                  {/* ===============================Cafetarea =========================== */}
                  <button
                    className="btn"
                    onClick={() => setCafetarea(!Cafetarea)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Cafetarea}
                  >
                    Cafetarea
                  </button>
                  <br />
                  <Collapse in={Cafetarea}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "cafeteria",
                            Cafetarea: "",
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
                                  <div className="col-12 w-50 py-4 ">
                                    <label
                                      htmlFor="manager_email"
                                      className="label my-2"
                                    >
                                      Cafeteria Message :{" "}
                                    </label>
                                    <Field
                                      type="text"
                                      name="Cafetarea"
                                      placeholder="leave message "
                                      className="form-control  mb-3  "
                                    />

                                    <button
                                      type="submit "
                                      className="btn-first pt-2 my-3"
                                      onClick={handleSubmit}
                                    >
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>

                  {/* ===============================Compliances =========================== */}
                  <button
                    className="btn"
                    onClick={() => setCompliances(!Compliances)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Compliances}
                  >
                    Compliances
                  </button>
                  <br />
                  <Collapse in={Compliances}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "compliances",
                            Compliances: "",
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
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>

                  {/* ===============================days =========================== */}
                  <button
                    className="btn"
                    onClick={() => setDays(!days)}
                    aria-controls="example-collapse-text"
                    aria-expanded={days}
                  >
                    days
                  </button>
                  <br />
                  <Collapse in={days}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "days",
                            days: "",
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
                                <div className="row">
                                  <div className="col-12 w-50 py-4">
                                    <label
                                      htmlFor="manager_email"
                                      className="label"
                                    >
                                      Days message :{" "}
                                    </label>
                                    <Field
                                      type="text"
                                      name="days"
                                      placeholder="leave message"
                                      className="form-control  mb-3 m "
                                    />

                                    <button
                                      type="submit "
                                      className="btn-first pt-2 my-3"
                                    >
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>

                  {/* ===============================on demannd service =========================== */}
                  <button
                    className="btn"
                    onClick={() => setDemand(!demand)}
                    aria-controls="example-collapse-text"
                    aria-expanded={demand}
                  >
                    On Demand message
                  </button>
                  <br />
                  <Collapse in={demand}>
                    <div id="example-collapse-text ">
                      <div className="px-3 ">
                        <Formik
                          initialValues={{
                            amenities_type: "ondemandServices",
                            ondemand_service: "",
                          }}
                          validate={(values) => {
                            let errors = {};

                            return errors;
                          }}
                          onSubmit={handleSubmit}
                          className=""
                        >
                          {({ values, errors, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} className="">
                              <div className="formGroup">
                                <div className="row">
                                  <div className="col-12 w-50 py-4">
                                    <label
                                      htmlFor="manager_email"
                                      className="label"
                                    >
                                      ondemand_service :{" "}
                                    </label>
                                    <Field
                                      type="text"
                                      name="ondemand_service"
                                      placeholder="ondemand service message"
                                      className="form-control  mb-3 m "
                                    />

                                    <button
                                      type="submit "
                                      className="btn-first pt-2 my-3"
                                      onClick={handleSubmit}
                                    >
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 bg-light px-3 py-4  my-2">
            <h3 className="fw-bold">Images</h3>
            <ImageUpload id={spaceIdsingle} />
            <GetImage id={spaceIdsingle} />
          </div>
          


          <MapUpdate id={spaceIdsingle}/>
        </div>
      </div>
    </>
  );
};

export default HocComponent(UpdateProperty);
