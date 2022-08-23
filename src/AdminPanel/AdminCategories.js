import React, { useState } from "react";
import HocComponent from "../Components/HocComponent";
import { AiOutlineMore, AiFillPlusCircle } from "react-icons/ai";
import AddCategoryModel from "./Modals/AddCategoryModel";

const AdminCategories = () => {
  const [showStatus, setshowStatus] = useState(false);

  return (
    <div
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        height: "100vh",
      }}
    >
      <div className="row  mx-3  ">
        <div className="col-12  mx-2 d-flex justify-content-between my-3 mb-5">
          <h5 className="Analytic_heading ">Categories : </h5>
          <butto className="btn btn-privacy-policy me-3 mb-3">
            {" "}
            <AiFillPlusCircle className="mx-2 fs-5" />
            Add Category
          </butto>
        </div>

        <div
          className="table table- me-auto ms-2"
          style={{ width: "99%", margin: "0 20px 0 0" }}
        >
          <table
            id="dtDynamicVerticalScrollExample"
            className="table  table-bordered table-sm"
            cellSpacing="0"
            width="90%"
            // style={{ overflowY: "auto", height: "400px" }}
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="table-td px-2 mx-3" style={{ width: "10%" }}>
                  1
                </td>
                <td className="table-td " style={{ width: "80%" }}>
                  Co-working Office
                </td>
                {/* <td className="table-td w-25" style={{ width: "10%" }}> */}
                {/* <AiOutlineMore onClick={() => setshowStatus(true)} /> */}
                {/* <AiOutlineMore className="fs-4" />
                </td> */}
                <td>
                  <div className="action-div dropdown">
                    <button
                      className="table-td px-2 mx-3"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ border: "none" }}
                    >
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li
                        className="my-2 mx-2"
                        // onClick={() => OnupdateMessage(message._id, message)}
                      >
                        <i className="fas fa-pencil-alt mx-2"></i> Update
                      </li>
                      <li
                        className="my-2 mx-2"
                        // onClick={() => onDelete(message._id)}
                      >
                        <i className="fas fa-trash-alt mx-2"></i> Delete
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AddCategoryModel showStatus={showStatus} setshowStatus={setshowStatus} />
    </div>
  );
};

export default HocComponent(AdminCategories);