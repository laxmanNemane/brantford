import React, { useContext, useEffect, useState } from "react";
import HocLandingPage from "../HocLandingPage";
import { MdSort } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllSpaces } from "../../Redux/enduserSlices/enduserSlice";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { Dropdown, Menu, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../Context/UserContext";
import FilterForm from "./allfilteredPages/FilterForm";

const FilterdPage = () => {
  const data = useSelector((state) => state.enduser.AllSpacesEndUser);
  const [price, setPrice] = useState();
  const [sortedItems, setSortedItems] = useState(data);

  // filtering
  const [propertyType, setpPropetrtyType] = useState([]);
  const { endUserSpace, setEndUserSpace } = useContext(usersContext);
  const [spin, setSpin] = useState(false);

  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  const spaceManagement = (data) => {
    setEndUserSpace(data);
    navigate(`/office-detail/${data.space.split(" ").join("-")}`);
  };

  console.log(sortedItems);

  console.log(data);
  console.log(price);

  let datafilter = data.filter((val) => {
    return propertyType?.some((item) => {
      return val.categaryId === item.id;
    });
  });

  datafilter.filter((value) => {
    return value.price <= price;
  });

  console.log(" sorted items ", sortedItems);
  console.log("data filter ", datafilter);

  //   ========================asc and des order of price=========================================
  //   console.log(
  //     books.sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? -1 : 1))
  //   );

  const dispatch = useDispatch();

  const onChangeAscending = () => {
    setSpin(true);
    {
      datafilter.length !== 0
        ? setTimeout(() => {
            setSortedItems(
              datafilter
                .slice()
                .sort((a, b) =>
                  parseInt(a.price) > parseInt(b.price) ? 1 : -1
                )
            );
            setSpin(false);
          }, 500)
        : setTimeout(() => {
            setSortedItems(
              data
                .slice()
                .sort((a, b) =>
                  parseInt(a.price) > parseInt(b.price) ? 1 : -1
                )
            );
            setSpin(false);
          }, 500);
    }
  };
  const onChangeDescending = () => {
    setSpin(true);
    {
      datafilter.length !== 0
        ? setTimeout(() => {
            setSortedItems(
              datafilter
                .slice()
                .sort((a, b) =>
                  parseInt(a.price) > parseInt(b.price) ? -1 : 1
                )
            );
            setSpin(false);
          }, 500)
        : setTimeout(() => {
            setSortedItems(
              data
                .slice()
                .sort((a, b) =>
                  parseInt(a.price) > parseInt(b.price) ? -1 : 1
                )
            );
            setSpin(false);
          }, 500);
    }
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p onClick={onChangeAscending}>Low to High</p>,
        },
        {
          key: "2",
          label: <p onClick={onChangeDescending}>High to Low</p>,
        },
      ]}
    />
  );
  useEffect(() => {
    dispatch(fetchAllSpaces());
    setRender(true);
  }, [render]);
  console.log("in filterpage ", propertyType);

  return (
    <div className="container ">
      <div className="row py-5">
        <div className="col-lg-4 col-md-3  position-relative">
          <div className="heading">
            <p className="fs-5">Filter</p>
          </div>

          <div className="filterd-card  w-100 ">
            <div
              className="aplied-filter-section px-4 py-4  card shadow  fixed  "
              style={{ width: "400px", marginBottom: "20px" }}
            >
              <div className="budget position-sticky">
                <div className="d-flex align-items-center justify-content-between">
                  {/* <p className="fw-bold fs-5">Budget</p> */}
                </div>
                <div id="example-collapse-text ">
                  <div className="px-3 ">
                    <FilterForm
                      propertyType={propertyType}
                      setpPropetrtyType={setpPropetrtyType}
                      price={price}
                      setPrice={setPrice}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-9 col-sm-12 position-relative">
          <div className="heading-properties mx-2 d-flex  align-items-center justify-content-between">
            <p className="fs-5">
              Properties (
              {datafilter.length !== 0
                ? datafilter.length
                : sortedItems !== 0
                ? data.length
                : sortedItems.length}
              )
            </p>
            <Dropdown overlay={menu} placement="bottomLeft">
              <p className="fs-5">
                <MdSort className="me-2 fw-bold" />
                Sort
              </p>
            </Dropdown>
          </div>

          {spin && (
            <div
              className="w-100 text-center"
              style={{ position: "absolute", top: "10%" }}
            >
              <Spin style={{ color: "pink" }} />
            </div>
          )}
          {/* <div className="filterd-card  w-100 shadow px-4 py-4">helo</div> */}

          {datafilter.length !== 0
            ? datafilter.map((element, index) => {
                return (
                  <div className="similar-offices" key={index}>
                    <div className="officess mt-3">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="image-office-sction py-1  mx-2">
                            <img
                              src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt="office image"
                              width="100%"
                              height={230}
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12   ">
                          <div className="similar-office-description position-relative mx-2">
                            <div className="price-tag-section d-flex justify-content-between pt-2">
                              <p
                                className=""
                                style={{
                                  background: "#91a7ff",
                                  color: "white",
                                  padding: "5px 16px",
                                  fontWeight: "600",
                                }}
                              >
                                For Rent
                              </p>
                              <p className="name me-3">
                                $<span className="price1">{element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                month/seats
                              </p>
                            </div>
                            <div className="ofice-name-type">
                              <p className="offices-similar-heading">
                                {element.space}
                              </p>
                              <p className="sub-heading">
                                <HiOutlineLocationMarker className="me-2" />{" "}
                                {element.address}
                              </p>

                              <p className="name">
                                Space type:{" "}
                                {1
                                  ? "Update value"
                                  : 2
                                  ? "Co working Space"
                                  : 3
                                  ? "flexy desk"
                                  : 4
                                  ? "Private space"
                                  : ""}
                              </p>
                            </div>

                            <div className="row">
                              <div className="col-3 mt-3">
                                <p className="last-update">
                                  <BiUser className="m2-2" />
                                  Brantford Team
                                </p>
                              </div>
                              <div className="col-3 mt-3">
                                <p className="last-update">
                                  <GrAttachment className="me-2" />3 weeks Ago
                                </p>
                              </div>
                              <div className="col-1"></div>
                              <div className="col-3 ">
                                <button
                                  className="btn-for-all-landpage px-4"
                                  onClick={() => spaceManagement(element)}
                                >
                                  Detail
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : data.map((element, index) => {
                return (
                  <div className="similar-offices" key={index}>
                    <div className="officess mt-3">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="image-office-sction py-1  mx-2">
                            <img
                              src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt="office image"
                              width="100%"
                              height={230}
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12   ">
                          <div className="similar-office-description position-relative mx-2">
                            <div className="price-tag-section d-flex justify-content-between pt-2">
                              <p
                                className=""
                                style={{
                                  background: "#91a7ff",
                                  color: "white",
                                  padding: "5px 16px",
                                  fontWeight: "600",
                                }}
                              >
                                For Rent
                              </p>
                              <p className="name me-3">
                                $<span className="price1">{element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                month/seats
                              </p>
                            </div>
                            <div className="ofice-name-type">
                              <p className="offices-similar-heading">
                                {element.space}
                              </p>
                              <p className="sub-heading">
                                <HiOutlineLocationMarker className="me-2" />{" "}
                                {element.address}
                              </p>

                              <p className="name">
                                Space type:{" "}
                                {1
                                  ? "Update value"
                                  : 2
                                  ? "Co working Space"
                                  : 3
                                  ? "flexy desk"
                                  : 4
                                  ? "Private space"
                                  : ""}
                              </p>
                            </div>

                            <div className="row">
                              <div className="col-3 mt-3">
                                <p className="last-update">
                                  <BiUser className="m2-2" />
                                  Brantford Team
                                </p>
                              </div>
                              <div className="col-3 mt-3">
                                <p className="last-update">
                                  <GrAttachment className="me-2" />3 weeks Ago
                                </p>
                              </div>
                              <div className="col-1"></div>
                              <div className="col-3 ">
                                <button
                                  className="btn-for-all-landpage px-4"
                                  onClick={() => spaceManagement(element)}
                                >
                                  Detail
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default HocLandingPage(FilterdPage);
