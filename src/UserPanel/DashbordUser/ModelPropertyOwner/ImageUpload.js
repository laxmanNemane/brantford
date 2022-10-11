import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from 'axios';

const BaseUrl = "http://bantford.prometteur.in";


const ImageUpload = (props) => {
    const [file, setFile] = useState();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('main_type', 'floor-plans');
        formData.append('sub_type', 'floor_plans_photos');
        formData.append('spaceId', props.id);
        formData.append("image", data.file[0]);
    
        axios.post(`${BaseUrl}/admin/add-image`,formData ,{headers:{
          Authorization:localStorage.getItem("token")
        }})
        .then(res=> {console.log(res.data)})
        .catch(err => {console.log(err)})
      
    };





  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("file")} />
                <input type="submit" />
            </form>
    </div>
  )
}

export default ImageUpload
