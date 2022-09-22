import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import HocComponent from "../Components/HocComponent";
import AdminFooter from "./AdminFooter";
// import interaction
import { DayGridView } from "@fullcalendar/daygrid";
import { Interaction } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useState } from "react";

const AdminCalendar = () => {
    const [events, setEvents] = useState([]);

    const handleDateClick = (arg) => {
        console.log(arg);
        console.log(arg.dateStr);
        setEvents([
            {
              title: `event ${arg.dateStr}`,
              date: arg.dateStr,
              description: 'Lecture',
              extendedProps: {
                department: 'BioChemistry'
              },
            }
          ])
    }


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
            <div className="dashboard-title">
              <div className="row align-items-center ">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">Calendar</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Calendar</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container">
              <div className="container">
                <div className="brant-card">
                  <div className="brant-card-body">
                    <div>
                      <FullCalendar
                         plugins={[ dayGridPlugin, interactionPlugin ]}
                        initialView="dayGridMonth"
                        weekends={false}
                        dateClick={handleDateClick}
                        events={events}
                      />
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

export default HocComponent(AdminCalendar);
