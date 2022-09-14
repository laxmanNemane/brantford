import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HocComponent from "../../Components/HocComponent";
import { fetchTotalBooking } from "../../Redux/PropertyOwnerSlices/totalBookingslice";

const BookedSpaces = () => {
    const booking = useSelector((state) => state.POBookings.ApprovepropertiesPO);
    console.log(booking);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTotalBooking());
    }, []);

    return (
        <div
            style={{
                background: "rgb(244, 240, 242)",
                padding: "0",
                height: "100vh",
            }}
        >
            <div className="mx-5 mt-2">
                <div className="col-12 py-3">
                    <h5 className="Analytic_heading ">All booked Space</h5>
                </div>
                <div className="col-12">
                    <table
                        id="dtDynamicVerticalScrollExample"
                        className="table  table-bordered table-sm"
                        cellSpacing="0"
                        width="90%"
                    // style={{ overflowY: "auto", height: "400px" }}
                    >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                {/* <th>Role</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map((e, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{e.spaceId}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HocComponent(BookedSpaces);
