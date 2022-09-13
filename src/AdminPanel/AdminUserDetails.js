import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BaseUrl = "http://bantford.prometteur.in"

function AdminUserDetails() {
    const [userDetails, setUserDetails] = useState({})
    console.log(localStorage.getItem("singleUser"))
    

    const getSingleUserDetail = () =>{
        axios.get(`${BaseUrl}/adminDashboard/single-enduser?id=${localStorage.getItem("singleUser")}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=> {
            console.log(res.data)
            setUserDetails(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=> {
        getSingleUserDetail()
    },[])

    
  return (
    <div>
        {
          Object.keys(userDetails).map((item,index)=>{
                return(
                    <div key={index} className='container'>
                        <p>{userDetails[item].id}</p>
                        <p>{userDetails[item].name}</p>
                        <p>{userDetails[item].email}</p>
                        <p>{userDetails[item].contact}</p>
                        <p>{userDetails[item].address}</p>
                        <p>{userDetails[item].createdAt}</p>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default AdminUserDetails
