import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { usersContext } from "../../Context/UserContext";
import HocLandingPage from "../HocLandingPage";

const ComparisonProperty = () => {
  const { selectedProperty, setSelectedProperty } = useContext(usersContext);
  console.log("setselctehdg", selectedProperty);
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p className="fs-5 fw-bold">Compare Properties</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {selectedProperty.map((e, index) => {
              return (
                <tr key={index}>
                  <td>space name</td>
                  <td>{e.space}</td>
                </tr>
              );
            })} */}
              {/* space name */}
              <tr>
                <td>space name</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.space}</td>;
                })}
              </tr>
              {/* categaryId */}
              <tr>
                <td>categaryId</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.categaryId}</td>;
                })}
              </tr>
              {/* price */}
              <tr>
                <td>price</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.price}</td>;
                })}
              </tr>
              {/* city */}
              <tr>
                <td>city</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.city}</td>;
                })}
              </tr>
              {/* approve_status */}
              <tr>
                <td>approve_status</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.approve_status}</td>;
                })}
              </tr>
              {/* cabin_capacity */}
              <tr>
                <td>cabin_capacity</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.cabin_capacity}</td>;
                })}
              </tr>

              {/* manager_name */}
              <tr>
                <td>manager_name</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.manager_name}</td>;
                })}
              </tr>
              {/* manager_email */}

              <tr>
                <td>manager_email</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.manager_email}</td>;
                })}
              </tr>

              {/* property_status */}
              <tr>
                <td>property_status</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.property_status}</td>;
                })}
              </tr>
              {/* seating_capacity */}
              <tr>
                <td>seating_capacity</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.seating_capacity}</td>;
                })}
              </tr>
              {/* working_days */}
              <tr>
                <td>working_days</td>
                {selectedProperty.map((e, index) => {
                  return <td key={index}>{e.working_days}</td>;
                })}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

// address
// :
// "pune maharashtra 411109"
// admininfoId
// :
// 1
// approve_status
// :
// "approved"
// cabin_capacity
// :
// 10
// categaryId
// :
// 3
// city
// :
// "Pune "
// createdAt
// :
// "2022-09-08T09:28:44.000Z"
// description
// :
// "coworking space for Rent"
// id
// :
// 21
// manager_contactNumber
// :
// 8967452356
// manager_email
// :
// "lakhsn@gmail.com"
// manager_name
// :
// "laxaman"
// price
// :
// "6000"
// property_id
// :
// 2134
// property_status
// :
// "rent"
// seating_capacity
// :
// 30
// space
// :
// "co-sapce in  Pune (luxuery)"
// total_desks
// :
// 50
// updatedAt
// :
// "2022-09-14T12:00:23.000Z"
// working_days
// :
// "mondayToFriday"

export default HocLandingPage(ComparisonProperty);
