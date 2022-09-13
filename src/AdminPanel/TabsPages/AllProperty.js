import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import swal from "sweetalert";

const BaseUrl = "http://bantford.prometteur.in";

const AllProperty = () => {
  const [properties, setProperties] = useState([]);

  const getAllProperties = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-properties`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setProperties(res.data.spaces);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectProperty = (id) => {
    console.log(id);

    axios
      .patch(
        `${BaseUrl}/adminDashboard/approveOrreject-property?id=${id}`,
        { approve_status: "rejected" },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        getAllProperties();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const approveProperty = (id) => {
    console.log(id);

    // swal({
    //     buttons: {
    //       cancel: true,
    //       Approve: "approved",
    //       reject: "rejected",
    //     },
    //   });

    axios
      .patch(
        `${BaseUrl}/adminDashboard/approveOrreject-property?id=${id}`,
        { approve_status: "approved" },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        getAllProperties();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProperties();
  }, []);

  console.log(properties);
  return (
    <div className=" my-2 ms-2" style={{ width: "99%" }}>
      <div className=" py-2">
        <table className="table-border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Space</th>
              <th>Manager Name</th>
              <th>price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.space}</td>
                  <td>{item.manager_name}</td>
                  <td>{item.price}</td>
                  <td>{item.approve_status}</td>
                  <td>
                    <button
                      onClick={() => approveProperty(item.id)}
                      //   disabled={item.approve_status==="approved"}
                    >
                      {item.approve_status === "approved"
                        ? "Already Approved"
                        : "Approve"}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => rejectProperty(item.id)}
                      //   disabled={item.approve_status==="approved"}
                    >
                      reject
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProperty;
