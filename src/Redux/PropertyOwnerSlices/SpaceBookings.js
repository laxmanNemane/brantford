import React, { useEffect, useState } from "react";
import AdminFooter from "../../AdminPanel/AdminFooter";
import HocComponent from "../../Components/HocComponent";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

const BaseUrl = "http://bantford.prometteur.in";

const SpaceBookings = () => {
  const [bookings, setBookings] = useState([]);

  const getAllBookings = () => {
    axios.get(`${BaseUrl}/propertyOwner/total-bookings`, {headers:{
        Authorization: localStorage.getItem("token")
    }})
    .then((res)=>{
         console.log(res.data)
         setBookings(res.data);
        })
    .catch((err)=> {console.log(err)})
  }

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    <div>
      <div
        className="main-section"
        style={{
          background: "rgb(244, 240, 242)",
        }}
      >
        <div className="mb-5">
          <div className="top-banner">
            <div className="dashboard-title ">
              <div className="row align-items-center ">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">Space Bookings </h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a >Home</a>
                      </li>
                      <li className="breadcrumb-item active">Space Bookings</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container mx-4">
              <div className="container">
                {/* <div className="brant-card">
                  <div className="brant-card-body">
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="Buttons_dashbord mx-3">Buy</button>
                      <button className="Buttons_dashbord mx-3">Rent</button>
                    </div>
                  </div>
                </div> */}

                <div className="market-table">
                  <div className="brant-card">
                   <div className="brant-card-body">
                        <table className="w-100 text-center">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Space</th>
                                    <th>Amount</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((item, index)=> {
                                    return(
                                        <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.user_details.name}</td>
                                        <td>{item.user_details.email}</td>
                                        <td>{item.user_details.contact}</td>
                                        <td>{item.space.space}</td>
                                        <td>{item.booking.amount}</td>
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

export default HocComponent(SpaceBookings);
