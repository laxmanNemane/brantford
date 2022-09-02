import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const AddImages = () => {
    const [img, setImg] = useState({
        selected: null,
    });

    const fileSelectedHandler = (e) => {
        setImg({ selected: e.target.files[0] });
        console.log("hello", e.target.files[0]);
    };

    // console.log(img);

    const handleSubmit = (values) => {
        console.log(values);
        console.log("image ", img)

    };

    return (
        <div>
            <div className="">
                <Formik
                    initialValues={{ main_type: "Select type", sub_type: "Select type" }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {(values, setFieldValue) => (
                        <Form>
                            <Field as="select" name="main_type">
                                <option value="photos">photos</option>
                                <option value="floor plans">floor plans</option>
                            </Field>

                            <Field as="select" name="sub_type">
                                <option value="photos_images">photos_images</option>
                                <option value="photos_outdoor">photos_outdoor</option>
                                <option value="photos_indoor">photos_indoor</option>
                                <option value="photos_video">photos_video</option>
                                <option value="photos_cover">photos_cover</option>
                                <option value="floor_plan_photos">floor_plan_photos</option>
                                <option value="floor_plans_introdocument">
                                    floor_plans_introdocument
                                </option>
                                <option value="floor_plans_videolink">
                                    floor_plans_videolink
                                </option>
                            </Field>

                            <label htmlFor="file">File upload</label>
                            <input type="file" onChange={fileSelectedHandler} />
                            {/* <Thumb file={values.file} /> */}

                            <button type="submit" onSubmit={handleSubmit}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddImages;
