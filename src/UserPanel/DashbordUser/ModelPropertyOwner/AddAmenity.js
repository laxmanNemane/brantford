import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";

const AddAmenity = ({ showStatus, setshowStatus }) => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    const handleOk = () => {
        setshowStatus(false);
    };

    const handleCancel = () => {
        setshowStatus(false);
    };
    return (
        <>
            <Modal
                title="Add Amenity"
                visible={showStatus}
                onOk={handleOk}
                // width={650}
                onCancel={handleCancel}
                footer={false}
                destroyOnClose
            >
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
                                    <div className="col-12">
                                        <label htmlFor="Space Name" className="label">
                                            amenities_type :{" "}
                                        </label>
                                        <Field
                                            type="text"
                                            name="amenities_type"
                                            placeholder="amenities_type"
                                            className="form-control  mb-3   "
                                        />
                                        <label htmlFor="manager_email" className="label">
                                            Internet_Speed :{" "}
                                        </label>
                                        <Field
                                            type="text"
                                            name="Internet_Speed"
                                            placeholder="Internet_Speed"
                                            className="form-control  mb-3 m "
                                        />
                                        <label htmlFor="Seating capacity " className="label">
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

export default AddAmenity;
