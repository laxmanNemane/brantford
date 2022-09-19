import React, { useState } from "react";
import HocComponent from "../Components/HocComponent";
import { AiFillPlusCircle } from "react-icons/ai";
import AddCategoryModel from "./Modals/AddCategoryModel";
import UpdateCategoryModel from "./Modals/UpdateCategoryModel";
import axios from "axios";
import { useEffect } from "react";

const BaseUrl = "http://bantford.prometteur.in";

const AdminCategories = () => {
  const [showStatus, setshowStatus] = useState(false);
  const [categaries, setCategaries] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false, 0);
  const [updateId, setUpdateId] = useState();
  const [updatecategary, setUpdatecategary] = useState();

  //update category
  const OnupdateMessage = (id, categary) => {
    // console.log("update", id, categary);

    const categary_update = "update value";
    setUpdateId(id);
    setUpdatecategary(categary);
    const updatedValue = { categary: `${categary_update}` };
    axios.patch(`${BaseUrl}/admin/update-categary?id=${id}`, updatedValue, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    adminCategory();
  };

  //delete category
  const onDelete = (id) => {
    axios
      .delete(`${BaseUrl}/admin/delete-categary?id=${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        adminCategory();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  //Admin category
  const adminCategory = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-categaries`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCategaries(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    adminCategory();
  }, [isModalVisible]);

  return (
    <div
      style={{
        background: "rgb(244, 240, 242)",
        paddingLeft: "270px",
        height: "100vh",
      }}
    >
      <div className="row mx-3">
        <div className="col-12  mx-2 d-flex justify-content-between my-3 mb-5">
          <h5 className="Analytic_heading ">Categories : </h5>
          <button
            className="btn btn-privacy-policy me-3 mb-3"
            onClick={() => setshowStatus(true)}
          >
            {" "}
            <AiFillPlusCircle className="mx-2 fs-5" />
            Add Category
          </button>
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
              {categaries.map((item) => {
                return (
                  <tr className="" key={item.id}>
                    <td
                      className="table-td px-2 mx-3"
                      style={{ width: "10%" }}
                      key={item.id}
                    >
                      {item.id}
                    </td>
                    <td className="table-td " style={{ width: "80%" }}>
                      {item.categary}
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
                            style={{ cursor: "pointer" }}
                            className="my-2 mx-2"
                            onClick={function (event) {
                              OnupdateMessage(item.id, item.categary);
                              setIsModalVisible(true);
                            }}
                          >
                            <i className="fas fa-pencil-alt mx-2"></i> Update
                          </li>
                          <li
                            className="my-2 mx-2"
                            onClick={() => onDelete(item.id)}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fas fa-trash-alt mx-2"></i> Delete
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <AddCategoryModel showStatus={showStatus} setshowStatus={setshowStatus} />
      <UpdateCategoryModel
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        id={updateId}
        categary={updatecategary}
      />
    </div>
  );
};

export default HocComponent(AdminCategories);
