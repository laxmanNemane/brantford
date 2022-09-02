import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HocComponent from "../../Components/HocComponent";
import SpacesModal from "./ModelPropertyOwner/SpacesModal";

const Spaces = () => {
    const [showStatus, setshowStatus] = useState(false);
    return (
        <div className="mx-5">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    <h5>All Spaces</h5>
                    <button onClick={() => setshowStatus(true)} className="btn-first">
                        Add Space
                    </button>
                </div>
            </div>
            <div className="col-12">
                <div className="table-spaces mt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Space Name</th>
                                <th>Property Location</th>
                                <th>Detail</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>
                                    <NavLink to="/property">View</NavLink>
                                </td>
                                <td>
                                    {" "}
                                    <button
                                        className="btn-success"
                                        style={{
                                            color: "white",
                                            padding: "6px 12px",
                                            borderRadius: "12px",
                                            border: "none",
                                        }}
                                    >
                                        Approved
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>View</td>
                                <td>
                                    {" "}
                                    <button
                                        className="btn-danger"
                                        style={{
                                            color: "white",
                                            padding: "6px 12px",
                                            borderRadius: "12px",
                                            border: "none",
                                        }}
                                    >
                                        Rejected
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>View</td>
                                <td>
                                    {" "}
                                    <button
                                        className="btn-warning"
                                        style={{
                                            color: "white",
                                            padding: "6px 12px",
                                            borderRadius: "12px",
                                            border: "none",
                                        }}
                                    >
                                        Pending
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <SpacesModal setshowStatus={setshowStatus} showStatus={showStatus} />
            </div>
        </div>
    );
};

export default HocComponent(Spaces);
