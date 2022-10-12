import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const BaseUrl = "http://bantford.prometteur.in";


const GetImage = (props) => {
const [image, setImage] = useState([]);


const getImage = () => {

    axios.get(`${BaseUrl}/admin/get-images?spaceId=${props.id}`)
    .then((res)=>{
        console.log(res.data)
        setImage(res.data);

        let result = (res && res.data && res.data[0].file) || [];
        // setImage(res.data[0].data)

        let path = res.data[0].data
        console.log(typeof path)

        axios.get(`${BaseUrl}/admin/get-image`,{"path":`"${path}"`})
        .then((res)=> console.log(res.data))
        .catch((err)=> {console.log(err)})

    })
    .catch((err)=> {console.log(err)})
}

console.log(image);

const getSingleImage = (image) => {
    const values = {"path":`${image}`}

    axios.get(`${BaseUrl}/admin/get-image`,values)
    .then((res)=> console.log(res.data))
    .catch((err)=> {console.log(err)})

}
useEffect(()=>{
  getImage()
},[setImage])

  return (
    <div>
       <div className=" mt-4">
        <h3 className='fw-bold'>Image Gallary</h3>
         <div className='image-contaner row'>
        {image && image.map((item,index)=>
        <div key={index} className='col-md-3'>
          <img className='img-fluid border' key={index} src={item.data} alt="" />
          </div>
          )}
          </div>
      {/* <button onClick={getImage}>getdata</button> */}
    </div>
    </div>
  )
}

export default GetImage
