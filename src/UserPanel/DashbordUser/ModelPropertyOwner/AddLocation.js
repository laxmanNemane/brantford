import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Field, Form, Formik } from "formik";
import { Modal } from "antd";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AddLocation = ({ addlocationShow,
  setAddLocationShow }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleOk = () => {
    setAddLocationShow(false);
  };

  const handleCancel = () => {
    setAddLocationShow(false);
  };
  return (
    <>
      <Modal
        title="Add Amenity"
        visible={addlocationShow}
        onOk={handleOk}
        // width={650}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
      >
        <Formik
          initialValues={{
            latitude: 123345,
            longitude: 433411,
            spaceId: 1
          }}
          validate={(values) => {
            let errors = {};

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="">
              <div className="formGroup">
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="Space Name" className="label">
                      Lattitude :{" "}
                    </label>
                    <Field
                      type="text"
                      name="latitude"
                      placeholder="latitude"
                      className="form-control  mb-3   "
                    />
                    <label htmlFor="manager_email" className="label">
                      Longitude:{" "}
                    </label>
                    <Field
                      type="text"
                      name="longitude"
                      placeholder="longitude"
                      className="form-control  mb-3 m "
                    />
                    <label htmlFor="Seating capacity " className="label">
                      Space Id :{" "}
                    </label>

                    <Field
                      type="text"
                      name="spaceId"
                      placeholder="spaceId"
                      className="form-control  mb-3  m"
                    />

                    <button
                      type="submit "
                      className="btn-first pt-2 my-3"
                      onClick={handleSubmit}
                    >
                      Add New Ammenity
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );

};

export default AddLocation;
