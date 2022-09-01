import { Field, Form, Formik } from "formik";
import React from "react";

const AddImages = () => {

    const handleSubmit = (values) => {
        console.log(values)
    }


    return (
        <div>
            <div className="">
                <Formik
                    initialValues={{ main_type: 'red', sub_type: 'red' }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {(values) => (
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
                                <option value="floor_plans_introdocument">floor_plans_introdocument</option>
                                <option value="floor_plans_videolink">floor_plans_videolink</option>

                            </Field>




                            <button type="submit" onSubmit={handleSubmit}>Submit</button>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    )
};

export default AddImages;
