import { Tabs } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usersContext } from "../../Context/UserContext";
import { fetchAllSpaces } from "../../Redux/enduserSlices/enduserSlice";

// import "../../Styles/LandingPage/HeroSection.css";
// import videoBg from "../../Assets/video/pexels-alena-darmel-7646596.mp4";

const BaseUrl = "http://bantford.prometteur.in";

const HeroSection = () => {
  const [city, setCity] = useState();
  const [serchResult, setSerchResult] = useState([]);
  const [serchItem, setSerchItem] = useState("");
  const [item, setItem] = useState([]);
  const [serchName, setSerchName] = useState();
  const [Recreational_Zone, setRecreational_Zone] = useState(false);
  const navigate = useNavigate();
  const [price, setPrice] = useState({
    minValue: "",
    maxValue: "",
  });

  const {
    searchArray,
    setSearchArray,
    endUserSpace,
    setEndUserSpace,
    filterRange,
    setFilterRange,
  } = useContext(usersContext);
  const data = useSelector((state) => state.enduser.AllSpacesEndUser);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllSpaces());
  }, []);

  const onchangehandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const onchangeHandlear = (e) => {
    if (e.target.value === "") {
      setItem("");
    } else {
      const nes = e.target.value;
      const filterdItem = data.filter((value) => {
        return value.city.toLowerCase().includes(nes);
      });
      setItem(filterdItem);
      // setSearchArray(filterdItem);
    }
    setSerchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(price);

    // if (
    //   (price.minValue.length !== 0 && price.maxValue.length !== 0) ||
    //   serchName !== 0
    // ) {
    //   // price and serchname
    const filterdItem = data.filter((value) => {
      return (
        (parseInt(value.price) > price.minValue &&
          parseInt(value.price) < price.maxValue) ||
        value.city.trim().toLowerCase() === serchName
      );
    });
    console.log("inside logic", filterdItem);
    setSearchArray(filterdItem);
    navigate("/searchproperties");
    console.log("inside other loop", filterdItem);
    // console.log(
    //     "======================================third================================"
    //   );
    // } else if (
    //   price.minValue.length !== 0 &&
    //   price.maxValue.length !== 0 &&
    //   serchName
    // ) {
    //   // price and serchname
    //   const filterdItem = data.filter((value) => {
    //     return (
    //       (parseInt(value.price) > price.minValue &&
    //         parseInt(value.price) < price.maxValue) ||
    //       value.city.trim().toLowerCase() === serchName
    //     );
    //   });
    //   setSearchArray(filterdItem);
    //   console.log("inside second loop", filterdItem);
    //   navigate("/searchproperties");
    //   console.log(
    //     "======================================second================================"
    //   );
    // }
    // if (serchName) {
    //   const filterdItem = data.filter((value) => {
    //     return value.city.trim().toLowerCase() === serchName;
    //   });
    //   console.log("inside logic", filterdItem);
    //   setSearchArray(filterdItem);
    //   console.log("inside other loop", filterdItem);
    //   console.log(
    //     "======================================first================================"
    //   );
    //   navigate("/searchproperties");
    // } else {
    //   toast.warning("please enter location");
    // }

    // console.log(item);
    // console.log("serach name", serchName);

    // console.log("item value", filterdItem);

    setRecreational_Zone(false);
  };

  // console.log(searchData);

  const loadCity = () => {
    axios
      .get(`${BaseUrl}/endUser/all-cities-listing`)
      .then((res) => {
        console.log(res);
        setCity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllCities = () => {
    axios
      .get(`${BaseUrl}/endUser/all-cities-listing`)
      .then((res) => {
        console.log(res.data);
        setSerchResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setCategory = (data) => {
    setEndUserSpace(data);
    navigate(`/office-detail/${data.space.split(" ").join("-")}`);
  };
  // const handleSubmit=()=>{

  // }

  useEffect(() => {
    loadCity();
    getAllCities();
  }, []);

  console.log(serchItem);

  return (
    <>
      <div className="hero-section d-flex align-items-center justify-content-center flex-column">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-xl-8 col-md-10 col-12">
              <div className="title-landPage">
                <h2 className="title">Let's Find your office!</h2>
              </div>
              {/* <p className="expant-paragraph">Expand. Renew. Relocate</p> */}
              <div
                className="search-section align-items-center d-flex "
                style={{ boxShadow: "0px 2px 8px rgb(0,0,0,0.78)" }}
              >
                <div className="w-100  px-2">
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Buy" key="1">
                      <div className=" d-flex align-items-center justfy-content-center w-100">
                        <div className="w-25">
                          <p
                            className="btn  fw-bold"
                            onClick={() =>
                              setRecreational_Zone(!Recreational_Zone)
                            }
                            aria-controls="example-collapse-text"
                            aria-expanded={Recreational_Zone}
                            style={{ padding: "10px 0 0 28px" }}
                          >
                            Budget{" "}
                            <i
                              className="fa-solid fa-filter-circle-dollar "
                              style={{
                                color: "#c2255c",
                                margin: "10px 20px",
                                backdropColor: "#f9e9ef",
                              }}
                            ></i>
                          </p>
                          <br />
                        </div>
                        <div className="w-75">
                          <div className="input1  ">
                            <form
                              onSubmit={handleSubmit}
                              className="d-flex align-items-center justify-content-between"
                            >
                              <i
                                className="fa-solid fa-magnifying-glass fs-5 ms-2 "
                                style={{ color: "grey" }}
                              ></i>
                              <input
                                type="text"
                                placeholder="Search By Location"
                                className="input-serchboox"
                                onChange={(e) => onchangeHandlear(e)}
                              />

                              <button
                                type="submit"
                                className="btn ms-4 btn-second"
                              >
                                search
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Rent" key="2">
                      <div className=" d-flex align-items-center justfy-content-center w-100">
                        <div className="w-25">
                          <p
                            className="btn  fw-bold"
                            onClick={() =>
                              setRecreational_Zone(!Recreational_Zone)
                            }
                            aria-controls="example-collapse-text"
                            aria-expanded={Recreational_Zone}
                            style={{ padding: "10px 0 0 28px" }}
                          >
                            Budget
                          </p>
                          <br />
                        </div>
                        <div className="w-75">
                          <div className="input1  ">
                            <form
                              onSubmit={handleSubmit}
                              className="d-flex align-items-center justify-content-between"
                            >
                              <i
                                className="fa-solid fa-magnifying-glass fs-5 ms-2 "
                                style={{ color: "grey" }}
                              ></i>
                              <input
                                type="text"
                                placeholder="Search By Location"
                                className="input-serchboox"
                                onChange={(e) => onchangeHandlear(e)}
                              />

                              <button
                                type="submit"
                                className="btn ms-4 btn-second"
                              >
                                search
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Commercial" key="3">
                      <div className=" d-flex align-items-center justfy-content-center w-100">
                        <div className="w-25">
                          <p
                            className="btn  fw-bold"
                            onClick={() =>
                              setRecreational_Zone(!Recreational_Zone)
                            }
                            aria-controls="example-collapse-text"
                            aria-expanded={Recreational_Zone}
                            style={{ padding: "10px 0 0 28px" }}
                          >
                            Budget
                          </p>
                          <br />
                        </div>
                        <div className="w-75">
                          <div className="input1  ">
                            <form
                              onSubmit={handleSubmit}
                              className="d-flex align-items-center justify-content-between"
                            >
                              <i
                                className="fa-solid fa-magnifying-glass fs-5 ms-2 "
                                style={{ color: "grey" }}
                              ></i>
                              <input
                                type="text"
                                placeholder="Search By Location"
                                className="input-serchboox"
                                onChange={(e) => onchangeHandlear(e)}
                              />

                              <button
                                type="submit"
                                className="btn ms-4 btn-second"
                              >
                                search
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Coworking" key="4">
                      <div className=" d-flex align-items-center justfy-content-center w-100">
                        <div className="w-25">
                          <p
                            className="btn  fw-bold"
                            onClick={() =>
                              setRecreational_Zone(!Recreational_Zone)
                            }
                            aria-controls="example-collapse-text"
                            aria-expanded={Recreational_Zone}
                            style={{ padding: "10px 0 0 28px" }}
                          >
                            Budget
                          </p>
                          <br />
                        </div>
                        <div className="w-75">
                          <div className="input1  ">
                            <form
                              onSubmit={handleSubmit}
                              className="d-flex align-items-center justify-content-between"
                            >
                              <i
                                className="fa-solid fa-magnifying-glass fs-5 ms-2 "
                                style={{ color: "grey" }}
                              ></i>
                              <input
                                type="text"
                                placeholder="Search By Location"
                                className="input-serchboox"
                                onChange={(e) => onchangeHandlear(e)}
                              />

                              <button
                                type="submit"
                                className="btn ms-4 btn-second"
                              >
                                search
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Tabs.TabPane>
                  </Tabs>
                </div>
                {/* <div className="input_search">
                  <div className="input1 ">
                    <form
                      onSubmit={handleSubmit}
                      className="d-flex align-items-center justify-content-between"
                    >
                      <i
                        className="fa-solid fa-magnifying-glass fs-5 ms-2 "
                        style={{ color: "grey" }}
                      ></i>
                      <input
                        type="text"
                        placeholder="Search By Location"
                        className="input-serchboox"
                        onChange={(e) => onchangeHandlear(e)}
                      />

                      <button type="submit" className="btn ms-4 btn-second">
                        search
                      </button>
                    </form>
                  </div>
                </div> */}
              </div>
              {!Recreational_Zone && (
                <div
                  className="top-banner-serach position-relative"
                  style={{ width: "60%", borderRadius: "0px", left: "28%" }}
                >
                  <div
                    id="houzez-auto-complete-banner position-absolute"
                    className="auto-complete"
                    style={{
                      top: "370.4px",
                      display: "block",
                      background: "white",
                      // padding: "10px",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    <ul className="list-group">
                      {item
                        ? item.map((val, index) => {
                            return (
                              <li
                                key={index}
                                className="list-group-item"
                                data-text="Pune"
                                style={{ margin: "2px 0" }}
                              >
                                <div className="d-flex align-items-center">
                                  <div className="auto-complete-image-wrap">
                                    {/* <a href="https://brantfordindia.com/city/pune-archives-brantfordindia-com/"> */}
                                    <img
                                      width="40"
                                      height="40"
                                      src="https://brantfordindia.com/wp-content/uploads/2021/08/Pune-150x150.png"
                                      className="attachment-40x40 size-40x40"
                                      alt=""
                                      loading="lazy"
                                      srcSet="https://brantfordindia.com/wp-content/uploads/2021/08/Pune-150x150.png 150w, https://brantfordindia.com/wp-content/uploads/2021/08/Pune-300x300.png 300w, https://brantfordindia.com/wp-content/uploads/2021/08/Pune-600x600.png 600w, https://brantfordindia.com/wp-content/uploads/2021/08/Pune-496x496.png 496w, https://brantfordindia.com/wp-content/uploads/2021/08/Pune.png 700w"
                                      sizes="(max-width: 40px) 100vw, 40px"
                                    />
                                  </div>
                                  <div className="auto-complete-content-wrap flex-fill ml-3 d-flex justify-content-around align-items-center">
                                    <div className="auto-complete-title ms-3 fs-5">
                                      {val.city}
                                    </div>

                                    <div className="auto-complete-content-wrap ml-3">
                                      <button
                                        className="btn-first py-3"
                                        onClick={() => setCategory(val)}
                                      >
                                        View Listing
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })
                        : "no records"}
                    </ul>
                  </div>
                </div>
              )}
              <Collapse
                className="px-3 py-4 "
                in={Recreational_Zone}
                style={{
                  background: "white",
                  lineHeight: "1.3",
                  borderRadius: " 5px 5px 10px 10px",
                }}
              >
                <div id="example-collapse-text ">
                  <p className="fs-5 fw-bold">select price</p>
                  <div className="price text-dark">
                    <form action="filtering price" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <label
                            htmlFor="min-value"
                            style={{ fontWeight: "500", fontSize: "16px" }}
                          >
                            Min Value :{" "}
                          </label>
                          &nbsp;{" "}
                          <input
                            type="text"
                            name="minValue"
                            value={price.minValue}
                            onChange={(e) =>
                              setPrice({
                                ...price,
                                [e.target.name]: e.target.value,
                              })
                            }
                            style={{ border: "1px solid black" }}
                          />
                          &nbsp; &nbsp;
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <label
                            htmlFor="max-value"
                            style={{ fontWeight: "500", fontSize: "16px" }}
                          >
                            Max Value :{" "}
                          </label>
                          &nbsp;
                          <input
                            type="text"
                            name="maxValue"
                            value={price.maxValue}
                            onChange={(e) =>
                              setPrice({
                                ...price,
                                [e.target.name]: e.target.value,
                              })
                            }
                            style={{ border: "1px solid black" }}
                          />
                        </div>
                      </div>
                      {/* <label htmlFor="min-value" style={{ fontWeight: "500", fontSize: "16px" }}>Min Value : </label>
                      &nbsp; <input type="text" name="minValue" value={price.minValue} onChange={(e) => setPrice({ ...price, [e.target.name]: e.target.value })} />
                      &nbsp; &nbsp;
                      <label htmlFor="max-value" style={{ fontWeight: "500", fontSize: "16px" }}>Max Value : </label>

                      &nbsp;<input type="text" name="maxValue" value={price.maxValue} onChange={(e) => setPrice({ ...price, [e.target.name]: e.target.value })} /> */}
                    </form>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
