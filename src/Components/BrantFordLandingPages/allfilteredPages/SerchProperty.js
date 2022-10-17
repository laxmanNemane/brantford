import { Dropdown, Menu } from "antd";
import React, { useContext } from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdSort } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../../Context/UserContext";
import HocLandingPage from "../../HocLandingPage";

const SerchProperty = () => {
  const {
    searchArray,
    setSearchArray,
    endUserSpace,
    setEndUserSpace,
    filterRange,
    setFilterRange,
  } = useContext(usersContext);
  console.log(searchArray);
  const [items, setItems] = useState(searchArray);
  console.log("search values", items);

  const navigate = useNavigate();

  const spaceManagement = (data) => {
    setEndUserSpace(data);
    navigate(`/office-detail/${data.space.split(" ").join("-")}`);
  };

  const onChangeAscending = () => {
    setItems(
      items
        .slice()
        .sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? 1 : -1))
    );
  };
  const onChangeDescending = () => {
    console.log("hellooo");

    setItems(
      items
        .slice()
        .sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? -1 : 1))
    );
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p onClick={onChangeAscending}>Low to Haigh</p>,
        },
        {
          key: "2",
          label: <p onClick={onChangeDescending}>Haigh to Low</p>,
        },
      ]}
    />
  );

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-4 col-md-3 ">
          <div className="heading">
            <p className="fs-5 mx-2 mt-3 fw-bold">Filter</p>
          </div>

          <div
            className="filterd-card card w-100 shadow px-4 py-4 "
            // style={{ margin: "32px 0 0 0" }}
          >
            <div className="aplied-filter-section ">
              <p className="fw-bold fs-5">Applied Filter</p>
              <ul
                className="tags list-unstyled d-flex "
                style={{ gap: "10px" }}
              >
                <li
                  className="tag my-2 d-flex align-items-center justify-content-between"
                  style={{ borderRadius: "100px" }}
                >
                  Home &nbsp;&nbsp;<i className="fa-solid fa-xmark"></i>
                </li>
                <li
                  className="tag my-2 d-flex align-items-center justify-content-between"
                  style={{ borderRadius: "100px" }}
                >
                  soft &nbsp;&nbsp;<i className="fa-solid fa-xmark"></i>
                </li>
                <li
                  className="tag my-2 d-flex align-items-center justify-content-between"
                  style={{ borderRadius: "100px" }}
                >
                  git &nbsp;&nbsp;<i className="fa-solid fa-xmark"></i>
                </li>
              </ul>
            </div>
            <div className="budget ">
              <div className="d-flex align-items-center justify-content-between">
                <p className="fw-bold fs-5">Budget</p>
              </div>
              <div id="example-collapse-text ">
                <div className="px-3 ">
                  <form>
                    <div className="d-flex align-items-center fs-5">
                      <input type="checkbox" />
                      <label htmlFor="pune" className="ms-3 ">
                        Pune
                      </label>
                    </div>
                    <div className="d-flex align-items-center fs-5">
                      <input type="checkbox" />
                      <label htmlFor="pune" className="ms-3">
                        Ahmedabad
                      </label>
                    </div>
                    <div className="d-flex align-items-center fs-5">
                      <input type="checkbox" />
                      <label htmlFor="pune" className="ms-3">
                        Mumbai
                      </label>
                    </div>
                    <div className="d-flex align-items-center fs-5">
                      <input type="checkbox" />
                      <label htmlFor="pune" className="ms-3">
                        Hydrabad
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-9">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="name">
              {" "}
              <span className="fs-5"> {items.length}</span> results{" "}
            </h5>
            <Dropdown overlay={menu} placement="bottomLeft">
              <p className="fs-5">
                <MdSort className="me-2 fw-bold" />
                Sort
              </p>
            </Dropdown>
          </div>
          {items.map((element, index) => {
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
                            $<span className="price1">{element.price}</span>
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

export default HocLandingPage(SerchProperty);
