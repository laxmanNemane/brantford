import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Input, Select } from "antd";
import axios from "axios";



const BaseUrl = 'http://bantford.prometteur.in'

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
        console.log(values.selected_file.name);

                // var data = new FormData(values);
                // data.append('main_type', 'floor-plans');
                // data.append('sub_type', 'floor_plans_photos');
                // data.append('spaceId', '2');
                // data.append('image', fs.createReadStream('/home/prometteur/Pictures/red-zeppelin-AYkJ0-uFq60-unsplash.jpg'));
                
                // var config = {
                // method: 'post',
                // url: 'bantford.prometteur.in/admin/add-image',
                // headers: { 
                //     'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heG1lbGFAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQcm9AODA4NyIsInByb2ZpbGUiOiJwcm9wZXJ0eS1vd25lciIsImlkIjo0LCJpYXQiOjE2NjI0NTQ5NjQsImV4cCI6MTY2MjQ2MjE2NH0.1wiRtAO3W3zsp7V0COdHXQv4WJIhRWhkkPFZ63_HKEk', 
                //     ...data.getHeaders()
                // },
                // data : data
                // };
                
                // axios(config)
                // .then(function (response) {
                // console.log(JSON.stringify(response.data));
                // })
                // .catch(function (error) {
                // console.log(error);
                // });
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
