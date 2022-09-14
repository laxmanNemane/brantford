import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import HocComponent from "../../Components/HocComponent";
import { usersContext } from "../../Context/UserContext";
import AddAmenity from "./ModelPropertyOwner/AddAmenity";
import AddLocation from "./ModelPropertyOwner/AddLocation";
import AddOrUpdateAmenity from "./ModelPropertyOwner/AddOrUpdateAmenity";

const PropertyOwnerPropertyDetail = () => {
  const [showStatus, setshowStatus] = useState(false);
  const [addlocationShow, setAddLocationShow] = useState(false);
  const [amenityPost, setAmenityPost] = useState([]);
  const [render, setRender] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [id, setId] = useState();

  const { spaceIdsingle, spaceDetail } = useContext(usersContext);
  console.log(spaceDetail);

  const getAmenitis = () => {
    axios
      .get(
        `http://bantford.prometteur.in/admin/get-amenitys?spaceId=${spaceIdsingle}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => setAmenityPost(res.data))
      .catch((err) => console.log(err));
  };

  console.log(amenityPost);

  useEffect(() => {
    getAmenitis();
  }, [render, isModalOpen]);

  const onAddAmenity = () => {
    setshowStatus(true);
  };

  const onDeleteAmenity = (id) => {
    console.log(id);
    axios
      .delete(`http://bantford.prometteur.in/admin/delete-amenity?id=${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("deleted successfully!");
        // showSpacesPropertyOwner();
        setRender(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("deleted successfully!");
      });
  };

  const onupdatefield = (id, data) => {
    setId(id);
    setItems(data);
    console.log("inside update data fixed", data);
    console.log("inside update id fixed", id);
    setIsModalOpen(true);
  };

  return (
    <div className="property-Detail-property-owner">
      <div className="row mx-3 mt-3">
        <div className="col-12">
          <div className="dashbord-section-content d-flex justify-content-between align-items-center bg-light  px-4 py-4 mt-3  rounded">
            <div className="heading-section-dashbord ">
              <h1 className="heading-second mb-1">Property Details</h1>

              <p className="paragraph">
                <span className="text-" style={{ color: "#c2255c" }}>
                  Property / &nbsp;
                </span>
                {spaceDetail.city}
              </p>
            </div>
            <div className="heading-buttons-dashbord">
              <button className="btn-third mx-4">
                <Link to="/updatePage" className="text-dark">
                  Add detail /update
                </Link>
              </button>
              <button className="btn-first mx-4">Refresh</button>
              <button className="btn-second">
                <i className="fa-solid fa-gear"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col-3 mt-4 text-center ">
          <div
            className="sale-price  px-3 py-4 rounded"
            style={{ backgroundColor: "#1971c2" }}
          >
            <h1 className="primary-number mt-2 text-uppercase text-white fw-bold ">
              {spaceDetail.property_status}
            </h1>
            <p className="heading-fourth text-white">${spaceDetail.price}</p>
          </div>
          <div className="manager-profile-card bg-light px-4 py-5 mt-4 ">
            <div className="image-profile position-relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPdOMiDME7KuZvwmgHfUh55XjsUOMtylHDA&usqp=CAU"
                alt=""
                width={180}
                className="rounded"
              />
              <div className="setting-icon">
                <i
                  className="fa-solid fa-gear fs-2 text-white "
                  style={{
                    position: "absolute",
                    right: "17%",
                    top: "80%",
                    backgroundColor: "#1971c2",
                    padding: "5px 5px",
                    borderRadius: "50%",
                  }}
                ></i>
              </div>
            </div>
            <div className="my-4 py-3">
              <h4 className="heading-ternary position-relative mt-4">
                {spaceDetail.manager_name}
              </h4>
              <p className="paragraph my-3">Agent</p>
              <p className="paragraph my-1">
                <i className="fa-regular fa-circle-user me-2"></i> Lorem, ipsum
                dolor.
              </p>
              <p className="paragraph">Lorem, ipsum.</p>
            </div>
            <div className="social-icons my-4 ">
              <button className="btn-first rounded-circle py-2 fs-5 mx-2 ">
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button className="btn-first rounded-circle py-2 fs-5 mx-2">
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button className="btn-first rounded-circle py-2 fs-5 mx-2">
                <i className="fa-brands fa-facebook-f"></i>{" "}
              </button>
            </div>
          </div>

          <div className="add-location-card position-relative bg-light mt-4 px-3 py-5">
            <button
              className="btn-first"
              onClick={() => setAddLocationShow(true)}
            >
              Add Location
            </button>
          </div>
        </div>
        <div className="col-9 mt-4">
          <div className="image-section-view bg-light px-5 py-5 mb-5 rounded">
            <div className="property-image-property-owner px-2 ">
              <img
                src="https://images.pexels.com/photos/7750095/pexels-photo-7750095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width="100%"
                className="rounded"
              />
            </div>
            <button className="btn-second mx-2 mt-3">Type Co-Working</button>
            <div className="row px-2 my-5">
              <div className="col-6">
                <div className="heading-location">
                  <h4 className="heading-second">{spaceDetail.space}</h4>
                  <p className="paragraph">{spaceDetail.address}</p>
                </div>
              </div>
              <div className="col-6 text-end">
                <div className="price-range">
                  <p className="mb-2">price range</p>
                  <h5 className="heading-fourth" style={{ color: "#c2255c" }}>
                    ${spaceDetail.price}
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <div className="buttons-amenity btn-first">Wi-fi Facility</div>
              </div>
              <div className="col-2">
                <div className="buttons-amenity btn-first">Wi-fi Facility</div>
              </div>
              <div className="col-2">
                <div className="buttons-amenity btn-first">Wi-fi Facility</div>
              </div>
            </div>
            <div className="description-owner my-4 ">
              <h4 className="heading-fourth mt-4">Description</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="row mt-4">
              <div className="heading-amenities-btn d-flex align-items-center justify-content-between ">
                <h4 className="mt-4">Amenities</h4>
                <button className="btn-second ">
                  <NavLink to="/updatePage">Add Ammenity</NavLink>
                </button>
              </div>
              <div className="amenities   py-3 rounded">
                <div className="col-12 ">
                  <div className="Amenities">
                    <div>
                      {amenityPost &&
                        amenityPost.map((listItem, index) => {
                          return (
                            <ul key={index} className="list-unstyled ">
                              <li className="fw-bold">
                                {listItem.amenities_type ? (
                                  <>
                                    {listItem.amenities_type}
                                    <i
                                      className="fa-solid fa-pen-to-square ms-1 "
                                      onClick={() =>
                                        onupdatefield(listItem.id, listItem)
                                      }
                                    ></i>{" "}
                                    <i
                                      className="fa-solid fa-trash-can ms-1"
                                      onClick={() =>
                                        onDeleteAmenity(listItem.id)
                                      }
                                    ></i>
                                  </>
                                ) : (
                                  ""
                                )}
                              </li>
                              <li>
                                {listItem.Internet_Speed ? (
                                  <>
                                    {" "}
                                    <i>internet Speed</i> :
                                    {listItem.Internet_Speed}{" "}
                                  </>
                                ) : (
                                  ""
                                )}
                              </li>
                              <li>
                                {listItem.Parking_available
                                  ? listItem.Parking_available
                                  : ""}
                              </li>
                              <li>
                                {listItem.Cafetarea ? listItem.Cafetarea : ""}
                              </li>
                              <li>
                                {listItem.Community ? listItem.Community : ""}
                              </li>
                              <li>
                                {listItem.Compliances
                                  ? listItem.Compliances
                                  : ""}
                              </li>
                              <li>
                                {listItem.Equipment ? listItem.Equipment : ""}
                              </li>
                              <li>
                                {listItem.Recreational_Zone
                                  ? listItem.Recreational_Zone
                                  : ""}
                              </li>
                              <li>
                                {listItem.Breakout_Zone
                                  ? listItem.Breakout_Zone
                                  : ""}
                              </li>
                              <li>
                                {listItem.telicom_service ? (
                                  <>{listItem.telicom_service} </>
                                ) : (
                                  ""
                                )}
                              </li>
                              <li>
                                {listItem.ondemand_service ? (
                                  <>{listItem.ondemand_service} </>
                                ) : (
                                  ""
                                )}
                              </li>
                            </ul>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className="btn-second mt-5" onClick={() => onAddAmenity()}>
              Add Ammenity
            </button> */}
          </div>
          <div className="property-featurs mt-4 px-5 py-5  bg-light  rounded">
            <h4 className="heading-fourth px-2">Featurs</h4>
            <hr />
            <button className="btn-second ">Add Features</button>
          </div>
        </div>
      </div>
      {/* <AddAmenity showStatus={showStatus} setshowStatus={setshowStatus} />
      <AddLocation
        addlocationShow={addlocationShow}
        setAddLocationShow={setAddLocationShow}
      /> */}
      <AddOrUpdateAmenity
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        items={items}
        id={id}
      />
    </div>
  );
};

export default HocComponent(PropertyOwnerPropertyDetail);
