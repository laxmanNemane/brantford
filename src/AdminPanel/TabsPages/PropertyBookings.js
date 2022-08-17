import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./StyleTabs/BookingProperty.css";

const PropertyBookings = () => {
  return (
    <div className="container-fluid my-2  ">
      <div className="row">
        <div className="col-3">
          <div className="card booking_card_notification">
            <div className="mx-1 card-booking">
              <h4 className="headinofBookingNotificatonTab">Lakhan Nemane</h4>
              <p className="status_office-notificaton">
                {" "}
                <span className="status_office"> Status : </span>Office for Rent{" "}
              </p>
              <p className="location_booking-notification">
                Location : Balewadi Baner, Pune 411045
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
      </div>
    </div>
  );
};

export default PropertyBookings;
