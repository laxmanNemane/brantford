import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { NavLink } from "react-router-dom";
import HocComponent from "../../Components/HocComponent";
import { usersContext } from "../../Context/UserContext";
import { FetchAllSpaces } from "../../Redux/PropertyOwnerSlices/allvenuSlice";
import SpacesModal from "./ModelPropertyOwner/SpacesModal";

const BaseUrl = "http://bantford.prometteur.in";

const Spaces = () => {
  const [showStatus, setshowStatus] = useState(false);
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();
  const [spaceId, setSpaceId] = useState();
  const [element, setElement] = useState();
  const { spaceIdsingle, setSpcesId, setSpaceDetail } =
    useContext(usersContext);
  const navigate = useNavigate();
  // console.log("this user form contxt", user);

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
        toast.success("space deleted Successfully!");
        setRender(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong space  not deleted!");
      });
  }, []);

  const onUpdateValues = (data, id) => {
    setshowStatus(true);
    setElement(data);
    setSpaceId(id);
  };

  const onseeDetail = (id, data) => {
    console.log(id);
    setSpcesId(id);
    setSpaceDetail(data);
    navigate("/property");
  };

  // console.log("element.is", element);

  const OnAddSpacess = () => {
    setshowStatus(true);
    setSpaceId("");
  };

  useEffect(() => {
    dispatch(FetchAllSpaces());
  }, [render, showStatus]);

  return (
    <>
      <div
        className="position-relative property-owner h-100"
        style={{ paddingLeft: "270px" }}
      >
        <div className="user-dashbord mx-5  pb-5 ">
          <div className="row py-5">
            <div className="col-12 mb-5">
              <div className="dashbord-section-content d-flex justify-content-between align-items-center   px-4 py-2   rounded">
                <div className="heading-section-dashbord ">
                  <h1 className="heading-second mb-1"> Spaces</h1>
                  
                </div>
                <div><button className="btn-first" onClick={OnAddSpacess}>add space</button></div>
              </div>
            </div>

            <div className="col-12">
              <div className="brant-card">
                <div className="brant-card-body">
                  <div className="table-spaces mt-5">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Space Name</th>
                          <th>Property Location</th>
                          <th>Detail</th>
                          <th>Status</th>
                          <th colSpan="2">Action</th>
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
                                <td onClick={() => onseeDetail(item.id, item)}>
                                  view
                                </td>
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
                                      onUpdateValues(
                                        item,
                                        item.id,
                                        item.categaryId
                                      )
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
                </div>
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
        </div>
      </div>
    </>
  );
};

export default HocComponent(Spaces);
