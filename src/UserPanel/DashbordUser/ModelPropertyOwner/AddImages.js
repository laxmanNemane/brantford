import React, { useState } from "react";

import { Formik, Form, Field } from "formik";

import { Input, Select } from "antd";

const AddImages = () => {
    const [img, setImg] = useState({
        selected: null,
    });

    const { Option } = Select;

    const fileSelectedHandler = (e, setFieldValue) => {
        setImg({ selected: e.target.files[0] });

        setFieldValue("selected_file", e.target.files[0]);
    };

    const hanglechangetype = (e, setFieldValue) => {
        console.log(e);

        setFieldValue("selected_type", e);
    };

    // console.log(img);

    const handleSubmit = (values) => {
        console.log(values);

        console.log("image ", img);
    };

    return (
        <div>
            <Formik
                initialValues={{
                    selected_type: "",
                    selected_file: "",
                }}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => {
                    return (
                        <>
                            <Form>
                                <Select
                                    placeholder="select type"
                                    id="selected_ type"
                                    onChange={(e) => hanglechangetype(e, setFieldValue)}
                                >
                                    <Option value="photos">photos</Option>
                                    <Option value="floor plans">floor plans</Option>
                                </Select>

                                <label htmlFor="file">File upload</label>

                                <Input
                                    type="file"
                                    id="selected_file"
                                    value={""}
                                    onChange={(e) => fileSelectedHandler(e, setFieldValue)}
                                />

                                {/* <Thumb file={values.file} /> */}

                                <button type="submit" onSubmit={handleSubmit}>
                                    Submit
                                </button>
                            </Form>
                        </>
                    );
                }}
            </Formik>
        </div>
    );
};

export default AddImages;
