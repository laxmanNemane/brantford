import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDoubleRight, GoLocation } from "react-icons/ai";
import "./StyleTabs/BookingProperty.css";
import { FaLocationArrow } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const BaseUrl = "http://bantford.prometteur.in";
// const admin_token = localStorage.getItem("token");

const PropertyBookings = () => {
  const [bookedProperties, setBookedProperties] = useState([]);

  const acceptHandler = (bookedProp) => {
    const value = { approve_status: "approved" };
    console.log("Aproved");
    console.log(bookedProp);
    console.log(bookedProp[0].admininfoId);
    console.log(value);

    axios
      .patch(
        `${BaseUrl}/adminDashboard/approveOrreject-property?id=${bookedProp[0].admininfoId}`,
        value,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // setBookedProperties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const declineHandler = () => {
    const value = { approve_status: "Reject" };

    console.log(value);
  };

  useEffect(() => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-booked-properties`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("all bookings", res.data);
        setBookedProperties(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  console.log(bookedProperties);

  // console.log(bookedProperties);
  // {bookedProperties.map((item, index)=>{
  //   console.log(item);
  // })}

  // {
  //   Object.keys(bookedProperties).map((key, index) => {
  //     console.log(key, index);
  //   });
  // }

  return (
    <div className=" my-2  ">
      <div className="row">
        {bookedProperties.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="brant-card ">
                <div className="mx-1 brant-card-body">
                  <h4 className="headinofBookingNotificatonTab mb-4">
                    {" "}
                    Name : {item.propertyOwner_details.name}
                  </h4>
                  <p className="status_office-notificaton">
                    {" "}
                    <span className="status_office"> Amount :{item.booking.amount} </span>
                    {/* <span
                      className={
                         "approved"
                        === "approved"
                          ? "brant-label btn-delivered"
                          : "brant-label btn-pending"
                      }
                    >
                      
                    </span> */}
                    
                  </p>

                  <p className="location_booking-notification">
                    <HiLocationMarker style={{ fontSize: "25px" }} />
                    <span className=""> Location : {item.space.address}</span>
                  </p>

                  <hr />

                  <p className="status_office-notificaton">
                    <span className="status_office"> Property name :  </span>
                  </p>

                  <p>{item.space.space}</p>

                  {/* <div className="mb-2 text-">
                  <button
                    className="btn px-3 ms-3  border  brant-label"
                    onClick={() => acceptHandler(bookedProperties)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn mx-3 "
                    style={{ fontSize: "16px" }}
                    onClick={declineHandler}
                  >
                    Decline
                  </button>
                </div> */}
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
