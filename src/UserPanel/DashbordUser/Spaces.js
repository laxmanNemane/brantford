import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import HocComponent from "../../Components/HocComponent";
import { FetchAllSpaces } from "../../Redux/PropertyOwnerSlices/allvenuSlice";
import SpacesModal from "./ModelPropertyOwner/SpacesModal";

const BaseUrl = "http://bantford.prometteur.in";

const Spaces = () => {
  const [showStatus, setshowStatus] = useState(false);
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();
  const [spaceId, setSpaceId] = useState();
  const [element, setElement] = useState();

  const spaces = useSelector((state) => state.Allvenue.AllSpaces);
  console.log(spaces);
  // const [spacesDisplay, setSpacesDisplay] = useState([]);

  const onDeleteSpace = useCallback((id) => {
    // console.log(id);
    axios
      .delete(`${BaseUrl}/admin/delete-space?id=${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        // showSpacesPropertyOwner();
        setRender(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onUpdateValues = ({ data, id }) => {
    setshowStatus(true);
    setElement(data);
    setSpaceId(id);
  };

  const OnAddSpacess = () => {
    setshowStatus(true);
    setSpaceId("");
  };

  useEffect(() => {
    dispatch(FetchAllSpaces());
  }, [render, showStatus]);

  return (
    <div className="mx-5">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <h5>All Spaces</h5>
          <button onClick={() => OnAddSpacess()} className="btn-first">
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
              {spaces &&
                spaces.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.space}</td>
                      <td>{item.address}</td>
                      <td>View</td>
                      <td>
                        {item.approve_status === "approved" ? (
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
                        ) : (
                          <button
                            className="btn-warning"
                            style={{
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "12px",
                              border: "none",
                            }}
                          >
                            {item.approve_status}
                          </button>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn-second"
                          onClick={() =>
                            onUpdateValues(item, item.id, item.categaryId)
                          }
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-first"
                          onClick={() => onDeleteSpace(item.id)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        <SpacesModal
          setshowStatus={setshowStatus}
          showStatus={showStatus}
          spaceId={spaceId}
          element={element}
          // showSpacesPropertyOwner={showSpacesPropertyOwner}
        />
      </div>
    </div>
  );
};

export default HocComponent(Spaces);
