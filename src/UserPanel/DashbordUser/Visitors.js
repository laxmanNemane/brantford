import React from "react";
import { Table } from "react-bootstrap";
import HocComponent from "../../Components/HocComponent";

const Visitors = () => {
  return (
    <div className="mx-5">
      <div className="row">
        <div className="col-12">
          <h5>All Visitors</h5>
        </div>
      </div>
      <div className="col-12">
        <div className="table-spaces mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Laxman</td>
                <td>+91 7947329747</td>
                <td>Pune</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Kunal</td>
                <td>+91 7947329747</td>
                <td>Pune</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default HocComponent(Visitors);
