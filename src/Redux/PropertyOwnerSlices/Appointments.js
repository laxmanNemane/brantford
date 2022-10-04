import React, { useEffect, useState } from "react";
import AdminFooter from "../../AdminPanel/AdminFooter";
import HocComponent from "../../Components/HocComponent";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import axios from "axios";


const BaseUrl = "http://bantford.prometteur.in";

const Appointments = () => {
  const [events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState([]);

  const getAllAppointments = () => {
  axios
    .get(`${BaseUrl}/propertyOwner/all-appointments`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data);
      console.log(res.data.appointmentobject);
      console.log(res.data.appointmentobject);
      setTotalEvents(res.data.appointmentobject);
      
    })
    .catch((err) => console.log(err));
  }

  // const handleDateClick = (arg) => {
  //     console.log(arg);
  //     console.log(arg.dateStr);
  //     setEvents([...events,
  //         {
  //           title: `event ${arg.dateStr}`,
  //           date: arg.dateStr,
  //           description: 'Lecture',
  //         }
  //       ])
  // }

  const confirmAppointment = (id) => {
 const data = {"id":id,"appointment_status": "confirmed"}
 appointmentAction(data)
  }

  const rejectAppointment = (id) => {
    const data = {"id":id,"appointment_status": "rejected"}
    appointmentAction(data)
  }

  const appointmentAction = (data) => {
    axios.put(`${BaseUrl}/propertyOwner/confirmORreject-appointment`,data, {headers:{
      Authorization: localStorage.getItem('token')
    }})
    .then((res)=> {
      console.log(res.data)
      getAllAppointments();
    })
    .catch((err)=> {console.log(err)})
  }
  console.log(totalEvents)

  useEffect(()=>{
    getAllAppointments();
  },[]);

  return (
    <div>
      <div
        className="main-section"
        style={{
          background: "rgb(244, 240, 242)",
          paddingLeft: "270px",
        }}
      >
        <div className="mb-5">
          <div className="top-banner">
            <div className="dashboard-title">
              <div className="row align-items-center ">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">Appointments</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Appopintments</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container">
              <div className="container">
                <div className="brant-card mx-4">
                  <div className="brant-card-body">
                    <div>
                      <table className="w-100">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Date</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>User Name</th>
                            <th>Contact</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {totalEvents.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ 
                                (new Date(item.appointment.appointment_date)).toLocaleDateString()
                                
                                
                                }</td>
                                <td>{item.appointment.message}</td>
                                <td>{item.appointment.appointment_status}</td>
                                <td>{item.user_details.name}</td>
                                <td>{item.user_details.contact}</td>
                                <td>
                                  <button onClick={()=>confirmAppointment(item.appointment.id)} className="brant-btn-blue" disabled = {item.appointment.appointment_status==='confirmed' ? true : false}>Confirm</button>
                                  <button onClick={()=>rejectAppointment(item.appointment.id)} className="brant-btn-red ms-2" disabled = {item.appointment.appointment_status==='rejected' ? true : false}>Reject</button>
                                </td>
                              </tr>
                            )
                          }
                          )}
                        </tbody>
                      </table>
                    </div>
                    {/* <div>
                      <FullCalendar
                         plugins={[ dayGridPlugin, interactionPlugin ]}
                        initialView="dayGridMonth"
                        weekends={false}
                        dateClick={handleDateClick}
                        events={events}
                      />
                    </div> */}
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

export default HocComponent(Appointments);
