import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./StyleTabs/BookingProperty.css";

const BaseUrl = "http://bantford.prometteur.in";
const admin_token = localStorage.getItem("admin_token");

const PropertyBookings = () => {
  const [bookedProperties, setBookedProperties] = useState({});

  useEffect(() => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-booked-properties`, {
        headers: {
          Authorization: admin_token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setBookedProperties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(bookedProperties);
  // {bookedProperties.map((item, index)=>{
  //   console.log(item);
  // })}

  {
    Object.keys(bookedProperties).map((key, index) => {
      console.log(key, index);
    });
  }

  return (
    <div className=" my-2  ">
      <div className="row">
        {Object.keys(bookedProperties).map((key, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card booking_card_notification shadow">
                <div className="mx-1 card-booking">
                  <h4 className="headinofBookingNotificatonTab">
                    {bookedProperties[index].manager_name}
                  </h4>
                  <p className="status_office-notificaton">
                    {" "}
                    <span className="status_office"> Status : </span>
                    {bookedProperties[index].approve_status}
                  </p>
                  <p className="location_booking-notification">
                    Location : {bookedProperties[index].address}
                  </p>
                </div>
                <hr />
                <div className="mb-2 text-">
                  <button className="btn px-3 ms-3  border  accept_booking ">
                    Accept <AiOutlineDoubleRight />
                  </button>
                  <button className="btn mx-3 " style={{ fontSize: "16px" }}>
                    Decline
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyBookings;
