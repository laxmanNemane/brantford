import React, { useState } from "react";

import { Field, Form, Formik } from "formik";
import { Modal } from "antd";
import axios from "axios";

const BaseUrl = "http://bantford.prometteur.in";

const AddLocation = ({ addlocationShow, setAddLocationShow }) => {
  const handleSubmit = (values) => {
    console.log(values);

    const id = 3;

    axios
      .post(`${BaseUrl}/admin/add-location?spaceId=${id}}`, values, {
        headers: {
          Authorization: localStorage.getItem("property_owner_token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));


    setAddLocationShow(false);
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
        title="Add Location Detail"
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
            spaceId: 1,
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
                      Add New Location
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
