import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import HocComponent from "../../../Components/HocComponent";

const AllProperties = () => {
  return (
    <div className="mx-5">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <h5>All Properties</h5>
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
                <td>item.id</td>
                <td>item.space</td>
                <td>item.addres</td>
                <td>
                  <Link to="/detail">View </Link>{" "}
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
                    {/* {item.approve_status} */}
                  </button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default HocComponent(AllProperties);
