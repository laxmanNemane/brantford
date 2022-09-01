import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HocComponent from "../../Components/HocComponent";
import SpacesModal from "./ModelPropertyOwner/SpacesModal";


const BaseUrl = "http://bantford.prometteur.in";

const Spaces = () => {
    const [showStatus, setshowStatus] = useState(false)
    const [spacesDisplay, setSpacesDisplay] = useState({});

    const showSpacesAdmin = () =>{
        axios.get(`${BaseUrl}/adminDashboard/all-properties`,{headers:{
            Authorization : localStorage.getItem("admin_token")
        }})
        .then((res)=> {
            console.log(res.data)
            console.log(res.data.spaces)
            console.log(res.data.spaces[0].id)
            setSpacesDisplay(res.data.spaces)
        })
        .catch((err)=> {
            
            console.log(err)
        
        })
    }

    const showSpacesPropertyOwner = () =>{
        axios.get(`${BaseUrl}/propertyOwner/all-venues`,{headers:{
            Authorization : localStorage.getItem("property_owner_token")
        }})
        .then((res)=> {
            console.log(res.data)
            console.log(res.data)
            setSpacesDisplay(res.data.spaces)
        })
        .catch((err)=> {
            
            console.log(err)
        
        })
    } 

    
    useEffect(()=>{
        // showSpacesAdmin();
        showSpacesPropertyOwner();
    },[setshowStatus])

    return (
        <div className="mx-5">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    <h5>All Spaces</h5>
                    <button onClick={() => setshowStatus(true)} className="btn-for-all-landpage">Add Space</button>
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

                    {Object.keys(spacesDisplay).map((item,index)=>{ return(
                            <tr key={index}>
                                <td>{spacesDisplay[item].id}</td>
                                <td>{spacesDisplay[item].space}</td>
                                <td>{spacesDisplay[item].address}</td>
                                <td>View</td>
                                <td > <button className="btn-success" style={{ color: "white", padding: "6px 12px", borderRadius: "12px", border: "none" }}>{spacesDisplay[item].approve_status}
                                </button></td>
                            </tr> )
                            })}
                            {/* <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>View</td>
                                <td> <button className="btn-danger" style={{ color: "white", padding: "6px 12px", borderRadius: "12px", border: "none" }}>Rejected
                                </button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>View</td>
                                <td> <button className="btn-warning" style={{ color: "white", padding: "6px 12px", borderRadius: "12px", border: "none" }}>Pending
                                </button></td>
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
                <SpacesModal setshowStatus={setshowStatus} showStatus={showStatus} />
            </div>
        </div >
    );
};

export default HocComponent(Spaces);
