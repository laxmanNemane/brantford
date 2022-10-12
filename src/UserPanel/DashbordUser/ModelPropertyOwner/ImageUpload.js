import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";

const BaseUrl = "http://bantford.prometteur.in";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const [subtype, setSubtype] = useState([]);
  const [subTypeValue, setSubTypeValue] = useState();
  const [mainTypeValue, setMainTypeValue] = useState();
  // const { register, handleSubmit } = useForm();

  // const onSubmit = async (data) => {
  //   const formData = new FormData();
  //   console.log(text);
  //   console.log(image);
  //   formData.append("main_type", "floor-plans");
  //   formData.append("sub_type", "floor_plans_photos");
  //   formData.append("spaceId", props.id);
  //   formData.append("image", data.file[0]);

  //   // axios.post(`${BaseUrl}/admin/add-image`,formData ,{headers:{
  //   //   Authorization:localStorage.getItem("token")
  //   // }})
  //   // .then(res=> {console.log(res.data)})
  //   // .catch(err => {console.log(err)})
  // };

  const handleSelect = (data) => {
    console.log(data);
    setMainTypeValue(data);
    const photos = [
      { value: "photos_images", name: "photos images" },
      { value: "photos_outdoor", name: "photos outdoor" },
      { value: "photos_indoor", name: "photos indoor" },
      { value: "photos_video", name: "photos video" },
      { value: "photos_cover", name: "photos cover" },
    ];

    const floor_plan = [
      { value: "floor_plans_photos", name: "floor plans photos" },
      { value: "floor_plans_introdocument", name: "floor plans introdocument" },
      { value: "floor_plans_videolink", name: "floor plans videolink" },
    ];

    if (data == "photos") {
      setSubtype(photos);
    } else if (data == "floor-plans") {
      setSubtype(floor_plan);
    } else {
      setSubtype([]);
    }
    
  };

  console.log(subtype);

  const handleSubSelect = (data) => {
    console.log(data);
    setSubTypeValue(data);
  };

  const handleSubmitform = (e) => {
    e.preventDefault();
    console.log(image);
    console.log(subTypeValue);
    console.log(mainTypeValue);

    const formData = new FormData();
    formData.append("main_type", mainTypeValue);
    formData.append("sub_type", subTypeValue);
    formData.append("spaceId", props.id);
    formData.append("image", image[0]);

    axios
      .post(`${BaseUrl}/admin/add-image`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formSubmitHandler = () => {
    console.log(image);
    console.log(text);
  };

  useEffect(() => {}, [subtype]);

  return (
    <div className="my-3 w-50">
      <form onSubmit={formSubmitHandler}>
        <div className="row">

        <div className="col-md-6">
        <select
          className=" form-control my-select w-100"
          component="select"
          id="main_type"
          name="main_type"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="">Select Main Type</option>
          <option value="photos">Photos</option>
          <option value="floor-plans">Floor Plans</option>
        </select>

</div>
<div className="col-md-6">
        <select
          className=" form-control my-select w-100"
          component="select"
          id="sub_type"
          name="sub_type"
          onChange={(e) => handleSubSelect(e.target.value)}
        >
          <option value="">select Sub Type</option>

          {subtype &&
            subtype.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
        </select>
        </div>
            
            <div className="col-md-6 mt-4">

            
        <input type="file" onChange={(e) => setImage(e.target.files)} />
        </div>

        <div className="">
        <button className="btn-first pt-2 my-3" type="submit" onClick={(e) => handleSubmitform(e)}>
          Submit
        </button>
        </div>

        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
