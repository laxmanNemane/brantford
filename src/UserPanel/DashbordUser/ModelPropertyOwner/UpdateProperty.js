import { Select } from "antd";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import HocComponent from "../../../Components/HocComponent";
import { usersContext } from "../../../Context/UserContext";

const UpdateProperty = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [basic, setBasic] = useState(false)
  const [Recreational_Zone, setRecreational_Zone] = useState(false);
  const [Community, setCommunity] = useState(false);
  const [Breakout_Zone, setBreakout_Zone] = useState(false);
  const [Cafetarea, setCafetarea] = useState(false);
  const [Compliances, setCompliances] = useState(false);
  const [days, setDays] = useState(false);
  const [demand, setDemand] = useState(false)
  const [telicom, setTelicom_service] = useState(false)
  const [other, setOther] = useState(false)
  const { spaceIdsingle, setSpcesId } = useContext(usersContext);



  const handleSubmit = (values) => {

    axios.post(`http://bantford.prometteur.in/admin/add-amenity?spaceId=${spaceIdsingle}`, values, { headers: { Authorization: localStorage.getItem('token') } }).then((res) => console.log(res)).catch((err) => console.log(err))
    console.log(values);
    setBasic(false)
    setRecreational_Zone(false)
    setCommunity(false)
  };

  return (
    <>
      <div className="mx-3 mt-4">
        <div className="row mx-3">
          <div className="col-12 bg-light px-3 py-4 ">
            <button
              className="btn"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Amenities
            </button>
            <br />
            <Collapse in={open}>
              <div id="example-collapse-text">
                {/* ==============Basics===================== */}
                <button
                  className="btn"
                  onClick={() => setBasic(!basic)}
                  aria-controls="example-collapse-text"
                  aria-expanded={basic}
                >
                  Basic
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
                        onSubmit={handleSubmit}
                        className=""
                      >
                        {({ values, errors, handleSubmit }) => (
                          <Form onSubmit={handleSubmit} className="">
                            <div className="formGroup">
                              <div className="row">
                                <div className="col-12 w-50 py-4">
                                  {/* <label htmlFor="Space Name" className="label">
                                    amenities_type :{" "}
                                  </label>
                                  <Field
                                    type="text"
                                    name="amenities_type"
                                    placeholder="amenities_type"
                                    className="form-control  mb-3 m "
                                    disabled
                                  /> */}

                                  <div
                                    role="group"
                                    aria-labelledby="checkbox-group"
                                  >
                                    <label>
                                      <Field
                                        type="checkbox"
                                        name="Drinking_Water"
                                        value="Drinking_Water"
                                      />
                                      Drinking_Water
                                    </label>
                                  </div>

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
                                    Update
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
                {/* ===============================Recreational_Zone =========================== */}
                <button
                  className="btn"
                  onClick={() => setRecreational_Zone(!Recreational_Zone)}
                  aria-controls="example-collapse-text"
                  aria-expanded={Recreational_Zone}
                >
                  Recreational_Zone
                </button>
                <br />
                <Collapse in={Recreational_Zone}>
                  <div id="example-collapse-text ">
                    <div className="px-3 ">
                      <Formik
                        initialValues={{
                          amenities_type: "Recreational_Zone",
                          Recreational_Zone: "",
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
                          amenities_type: "Community",
                          Community: "",
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
                    </div>
                  </div>
                </Collapse>
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
                          amenities_type: "Breakout_Zone",
                          Breakout_Zone: "",
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
                                    update
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
                          amenities_type: "Cafetarea",
                          Cafetarea: "",
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
                                    Internet_Speed :{" "}
                                  </label>
                                  <Field
                                    type="text"
                                    name="Cafetarea"
                                    placeholder="leave message "
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
                          amenities_type: "Compliances",
                          Compliances: "",
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
                                    htmlFor="Message"
                                    className="label"
                                  >
                                    Message :{" "}
                                  </label>
                                  <Field
                                    type="text"
                                    name="Internet_Speed"
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
                                    Days message :{" "}
                                  </label>
                                  <Field
                                    type="text"
                                    name="Internet_Speed"
                                    placeholder="leave message"
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
                  days
                </button>
                <br />
                <Collapse in={demand}>
                  <div id="example-collapse-text ">
                    <div className="px-3 ">
                      <Formik
                        initialValues={{
                          amenities_type: "ondemand_service",
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
                                    update
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
                {/* ===============================telicom_service =========================== */}
                <button
                  className="btn"
                  onClick={() => setTelicom_service(!telicom)}
                  aria-controls="example-collapse-text"
                  aria-expanded={telicom}
                >
                  telicom_service
                </button>
                <br />
                <Collapse in={telicom}>
                  <div id="example-collapse-text ">
                    <div className="px-3 ">
                      <Formik
                        initialValues={{
                          amenities_type: "telicom_service",
                          telicom_service: "",
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
                          Internet_Speed: "2mbps",
                          Parking_available: "available",
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
                                    update
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
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default HocComponent(UpdateProperty);
