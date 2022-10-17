import React, { useEffect, useState } from "react";
import AdminFooter from "./AdminFooter";
import HocComponent from "../Components/HocComponent";
import { Link, NavLink } from "react-router-dom";
import { BsInbox } from "react-icons/bs";
import { BiStar } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import axios from "axios";

const BaseUrl = "http://bantford.prometteur.in";


const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointmentDetail = () => {
    axios.get(`${BaseUrl}/adminDashboard/all-appointments`,{headers:{
      Authorization: localStorage.getItem("token")
    }})
    .then((res)=>{
      
      console.log(res.data)
      setAppointments(res.data)
      
    
    })
    .catch((err)=> {console.log(err)})
  }

  const removePropertyOwner = (id) => {
    console.log(id)
    const newid= "null";
    axios.delete(`${BaseUrl}/adminDashboard/delete-propertyOwner?id=${newid}`,{headers:{
      Authorization: localStorage.getItem("token")
    }})
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=> {console.log(err)})
    getAppointmentDetail();
  }

  useEffect(()=>{
    getAppointmentDetail();
  },[])

  return (
    <div>
      <div
        className="main-section"
        style={{
          background: "rgb(244, 240, 242)",
          paddingLeft: "270px"
        }}
      >
        <div className="">
          <div className="top-banner">
            <div className="dashboard-title">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">Appointments</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a >Home</a>
                      </li>
                      <li className="breadcrumb-item active">Appointments</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container mx-4">
              <div className="container">
                <div className="row mb-5">
                  <div className="brant-card">
                    <div className="brant-card-body">
                        <table className="w-100">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Property Owner name</th>
                                    <th>Total Appointment</th>
                                    <th>Attended</th>
                                    <th>Not attended</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              {appointments.map((item, index)=>{
                                return(
                                  <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{item.propertyOwner_details.name}</td>
                                  <td>{item.total_appointments}</td>
                                  <td>{item.attended_appointments}</td>
                                  <td>{item.not_attended_appointments}</td>
                                  <td>
                                      <button className="brant-btn-red" onClick={()=>removePropertyOwner(item.propertyOwner_details.id)}>Remove</button>
                                  </td>
                              </tr>

                                )
                              })}
                               
                            </tbody>
                        </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default HocComponent(AdminAppointments);
