import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import HocComponent from "../../Components/HocComponent";
import SpacesModal from "./ModelPropertyOwner/SpacesModal";

const BaseUrl = "http://bantford.prometteur.in";

const Spaces = () => {
  const [showStatus, setshowStatus] = useState(false);
  const [spacesDisplay, setSpacesDisplay] = useState([]);

  const deletespace = (id) => {
    console.log(id);
    axios
      .delete(`${BaseUrl}/admin/delete-space?id=${id}`, {
        headers: {
          Authorization: localStorage.getItem("property_owner_token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        showSpacesPropertyOwner();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const showSpacesAdmin = () =>{
  //     axios.get(`${BaseUrl}/adminDashboard/all-properties`,{headers:{
  //         Authorization : localStorage.getItem("admin_token")
  //     }})
  //     .then((res)=> {
  //         console.log(res.data)
  //         console.log(res.data.spaces)
  //         console.log(res.data.spaces[0].id)
  //         setSpacesDisplay(res.data.spaces)
  //     })
  //     .catch((err)=> {

  //         console.log(err)

  //     })
  // }

  const showSpacesPropertyOwner = () => {
    axios
      .get(`${BaseUrl}/propertyOwner/all-venues`, {
        headers: {
          Authorization: localStorage.getItem("property_owner_token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
        setSpacesDisplay(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("stete ", spacesDisplay);

  useEffect(() => {
    // showSpacesAdmin();
    deletespace();
    showSpacesPropertyOwner();
  }, [showStatus, deletespace]);

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
              {spacesDisplay.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.space}</td>
                    <td>{item.address}</td>
                    <td>View</td>
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
                        {item.approve_status}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deletespace(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
=======
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
>>>>>>> 1d9e988b755b1df17b99cd4f1a66ddfd0932d41b
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
<<<<<<< HEAD
                                <td> <button className="btn-warning" style={{ color: "white", padding: "6px 12px", borderRadius: "12px", border: "none" }}>Pending
                                </button></td>
                            </tr> */}
            </tbody>
          </Table>
        </div>
        <SpacesModal
          setshowStatus={setshowStatus}
          showStatus={showStatus}
          showSpacesPropertyOwner={showSpacesPropertyOwner}
        />
      </div>
    </div>
  );
};

export default HocComponent(Spaces);
