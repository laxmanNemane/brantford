import React, { useState } from "react";
import HocLandingPage from "../HocLandingPage";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { Field, Form, Formik } from "formik";
import { Collapse } from "react-bootstrap";

const FilterdPage = () => {
    const [Recreational_Zone, setRecreational_Zone] = useState(false);
    const handleSubmit = (values) => { console.log(values) };

    const onChange = () => { };
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-4 col-md-3 col-sm-12">
                    <div className="filterd-card card w-100 shadow px-4 py-4">
                        <div className="aplied-filter-section">
                            <p className="fw-bold fs-5">Applied Filter</p>
                            <ul
                                className="tags list-unstyled d-flex "
                                style={{ gap: "10px" }}
                            >
                                <li
                                    className="tag my-2 d-flex align-items-center justify-content-between"
                                    style={{ borderRadius: "100px" }}
                                >
                                    Home &nbsp;&nbsp;<i class="fa-solid fa-xmark"></i>
                                </li>
                                <li
                                    className="tag my-2 d-flex align-items-center justify-content-between"
                                    style={{ borderRadius: "100px" }}
                                >
                                    soft &nbsp;&nbsp;<i class="fa-solid fa-xmark"></i>
                                </li>
                                <li
                                    className="tag my-2 d-flex align-items-center justify-content-between"
                                    style={{ borderRadius: "100px" }}
                                >
                                    git &nbsp;&nbsp;<i class="fa-solid fa-xmark"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="budget ">
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="fw-bold fs-5">Budget</p>
                                <button
                                    className="btn"
                                    onClick={() => setRecreational_Zone(!Recreational_Zone)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={Recreational_Zone}
                                >
                                    Clear<span className="text-danger ms-1">*</span>
                                </button>
                            </div>

                            <Collapse in={Recreational_Zone}>
                                <div id="example-collapse-text ">
                                    <div className="px-3 ">
                                        <Formik
                                            initialValues={{
                                                min_value: "",
                                                max_value: "",
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
                                                <Form >
                                                    <div className="formGroup">
                                                        <div className="row">
                                                            <div className="col-12 w-50 py-4 text-start">
                                                                <Field
                                                                    as="select"
                                                                    className=" form-control w-75 mx-auto mb-3 "
                                                                    component="select"
                                                                    id="min_value"
                                                                    name="min_value"
                                                                    onSubmit={handleSubmit}
                                                                >
                                                                    <option
                                                                        value="select profile "
                                                                        className="py-3"
                                                                    >
                                                                        Min value
                                                                    </option>

                                                                    <option
                                                                        value="2500"
                                                                        className="py-3"
                                                                    >
                                                                        2500
                                                                    </option>

                                                                    <option
                                                                        value="5000"
                                                                        className="py-3"
                                                                    >
                                                                        5000
                                                                    </option>

                                                                    <option
                                                                        value="6000"
                                                                        className="py-3"
                                                                    >
                                                                        6000
                                                                    </option>
                                                                    <option
                                                                        value="7000"
                                                                        className="py-3"
                                                                    >
                                                                        7000
                                                                    </option>
                                                                    <option
                                                                        value="8000"
                                                                        className="py-3"
                                                                    >
                                                                        8000
                                                                    </option>

                                                                </Field>
                                                            </div>
                                                            <div className="col-12 w-50 py-4 text-end">
                                                                <Field
                                                                    as="select"
                                                                    className=" form-control w-75 mx-auto mb-3 "
                                                                    component="select"
                                                                    id="max_value"
                                                                    name="max_value"
                                                                    onSubmit={handleSubmit}
                                                                >
                                                                    <option
                                                                        value="select profile "
                                                                        className="py-3"
                                                                    >
                                                                        Max value
                                                                    </option>

                                                                    <option
                                                                        value={25000}
                                                                        className="py-3"
                                                                    >
                                                                        25000
                                                                    </option>

                                                                    <option
                                                                        value="50000"
                                                                        className="py-3"
                                                                    >
                                                                        50000
                                                                    </option>

                                                                    <option
                                                                        value="60000"
                                                                        className="py-3"
                                                                    >
                                                                        60000
                                                                    </option>
                                                                    <option
                                                                        value="70000"
                                                                        className="py-3"
                                                                    >
                                                                        70000
                                                                    </option>
                                                                    <option
                                                                        value="80000"
                                                                        className="py-3"

                                                                    >
                                                                        80000
                                                                    </option>

                                                                </Field>
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
                <div className="col-lg-8 col-md-9 col-sm-12">
                    <div className="filterd-card  w-100 shadow px-4 py-4">helo</div>
                </div>
            </div>
        </div>
    );
};

export default HocLandingPage(FilterdPage);
