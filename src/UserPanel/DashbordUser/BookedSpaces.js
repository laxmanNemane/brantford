import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HocComponent from "../../Components/HocComponent";
import { FetchAllPendingProperties } from "../../Redux/PropertyOwnerSlices/AllpendingSlice";
import { fetchTotalBooking } from "../../Redux/PropertyOwnerSlices/totalBookingslice";
import AdminFooter from "../../AdminPanel/AdminFooter";

const BookedSpaces = () => {
    const booking = useSelector((state) => state.POPendingProperty.PendingPropertiesOwner);
    console.log(booking);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchAllPendingProperties());
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
            <div className="dashboard-title">
              <div className="row align-items-center ">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">Pending Space</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a >Home</a>
                      </li>
                      <li className="breadcrumb-item active">Pending Space</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container">
              <div className="container">
                <div className="brant-card">
                <div className="col-12 py-3">
                    <h5 className="Analytic_heading  ps-3">All Pending Spaces</h5>
                </div>
                </div>

                <div className="market-table">
                  <div className="brant-card">
                    <div className="brant-card-body">
                    <table
                        id="dtDynamicVerticalScrollExample"
                        className="table  table-bordered table-sm w-100"
                        cellSpacing="0"
                        width="90%"
                    // style={{ overflowY: "auto", height: "400px" }}
                    >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                {/* <th>Role</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map((e, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{e.space}</td>
                                            <td>{e.address}</td>
                                            {/* <td>{e.space}</td>
                                            <td>{e.space}</td>
                                            <td>{e.space}</td> */}
                                        </tr>
                                    )
                                })
                            }

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

export default HocComponent(BookedSpaces);
