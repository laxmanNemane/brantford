import { Tabs } from "antd";
import axios from "axios";
<<<<<<< HEAD
import { useEffect, useState } from "react";
// import "../../Styles/LandingPage/HeroSection.css";
// import videoBg from "../../Assets/video/pexels-alena-darmel-7646596.mp4";
import { Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import FindsProperty from "./FindsProperty";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AutoComplete } from 'antd';
const { Option } = AutoComplete;
=======
import React, { useContext, useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usersContext } from "../../Context/UserContext";
import { fetchAllSpaces } from "../../Redux/enduserSlices/enduserSlice";

// import "../../Styles/LandingPage/HeroSection.css";
// import videoBg from "../../Assets/video/pexels-alena-darmel-7646596.mp4";
>>>>>>> 70d13f3af14d2caa13abea1541d35e8e2044017b

const BaseUrl = "http://bantford.prometteur.in";

const HeroSection = () => {
<<<<<<< HEAD
  const [searchData, setSearchData] = useState();
  const [searchKey, setSearchKey] = useState("");
  const [city, setCity] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [result , setResult] = useState([]);


  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {

      res = city.map((domain) => `${domain}`);
    }

    setResult(res);
  };


  const setCategary = (categaryId) => {
    console.log(categaryId);
    localStorage.setItem("singlecategaryId", categaryId);
  };
=======
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
>>>>>>> 70d13f3af14d2caa13abea1541d35e8e2044017b

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
<<<<<<< HEAD
    setText(e.target.value);
    const text = e.target.value;

    let matches = city.map((item)=>{
      if(item.includes(text)){
        setCity(text)
      }
      
    });
    console.log(city)


    if(text.length>0){
      matches = city.includes(city=>{
        const regx = new RegExp(`${text}`, "hin");
        return city.city.match(regx)
      })
    }
    // console.log('matches',matches);
    setSuggestion(matches)
    // setText(text)
    // setSearchData(e.target.value)
  };

  const searchHandler = (event) => {
    event.preventDefault();
    console.log(text);
    loadCity()
    setCity(text);
    console.log(searchKey);
    // const searchData = {'city': searchKey}

    axios
      .get(`${BaseUrl}/endUser/get-spacesbycity?city=${text}`)
      .then((res) => {
        console.log(res);
        setSearchData(res.data);
        setSearchKey("");
        // swal({
        //   title: "Submited ",
        //   text: "Your requirement added",
        //   icon: "success",
        // });
      })
      .catch((err) => {
        console.log(err);
        setSearchData("");
        setSearchKey("");
=======
  };

  const onchangeHandlear = (e) => {
    if (e.target.value === "") {
      setItem("");
    } else {
      const nes = e.target.value;
      const filterdItem = data.filter((value) => {
        return value.city.toLowerCase().includes(nes);
>>>>>>> 70d13f3af14d2caa13abea1541d35e8e2044017b
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

<<<<<<< HEAD
  useEffect(() => {
    loadCity()
    
=======
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
>>>>>>> 70d13f3af14d2caa13abea1541d35e8e2044017b
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
              <div>


              {/* <AutoComplete
                  style={{
                    width: 200,
                  }}
                  onSearch={handleSearch}
                  placeholder="input here"
                >
                  { result.map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))}
              </AutoComplete> */}

              </div>
              {/* <p className="expant-paragraph">Expand. Renew. Relocate</p> */}
<<<<<<< HEAD
              <div className="search-section">
                {/* <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="drop-btn"
                  
                >
                  Select City
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">pune</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Mumbai</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Banglore</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
                <div className="input_search">
                  <div className="input1">
                    <form onSubmit={searchHandler}> 
=======
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
>>>>>>> 70d13f3af14d2caa13abea1541d35e8e2044017b
                      <input
                        type="text"
                        placeholder="Search By Location"
                        className="input-serchboox"
<<<<<<< HEAD
                        value={text}
                        // onChange={(e) => setSearchKey(e.target.value)}
                        onChange={(e) => onChangeHandler(e)}
                      />
                      {suggestion &&
                        suggestion.map((item, i) => {
                          <div>{suggestion}</div>;
                        })}
                      <input
                        type="submit"
                        className="serch-icon "
                        style={{ cursor: "pointer" }}
=======
                        onChange={(e) => onchangeHandlear(e)}
>>>>>>> 70d13f3af14d2caa13abea1541d35e8e2044017b
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
<<<<<<< HEAD

                
              </div>
=======
              </Collapse>
>>>>>>> 70d13f3af14d2caa13abea1541d35e8e2044017b
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <div
        className=""
        style={{ backgroundColor: "#ffff", display: "flex", padding: "30px" }}
      >
        
          
            {/* <div className="container">
              <p>{city && `results for ${city}`}</p>
            </div> */}
       
        <div className="row">
          {searchData ? (
            searchData.map((item, index) => {
              return (
                // console.log(item.id);

                // <p key={index}>{item.id}</p>
                <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={index}>
                  <div className="properties">
                    <div className="img">
                      <img
                        src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="properties-image-land"
                      />
                    </div>
                    <div className="price-section d-flex justify-content-between mx-4">
                      <div className="w-75 ">
                        <p className="price">765654/sqr</p>
                      </div>
                      <div className="d-flex justify-content-between w-25 gx-2 icon-group">
                        <p>
                          <AiOutlineArrowsAlt className="icons-recomanded-property  text-white" />
                        </p>
                        <p>
                          <BsHeart className="icons-recomanded-property text-white" />
                        </p>
                        <p>
                          <BsPlusCircle className="icons-recomanded-property text-white" />
                        </p>
                      </div>
                    </div>
                    <div className="properties-description-card mx-2 my-3">
                      <p className="property-name-heading name">{item.space}</p>
                      <p className="property-location-card description-why-page">
                        {item.address}
                      </p>
                     
                      <div className="button-space d-flex justify-content-between btn-area">
                              <p className=" fw-bold">{item.description}</p>
                              <NavLink to={`/office-detail/${item.id}`}>
                                <button
                                  className="btn-first"
                                  onClick={() => setCategary(item.id)}
                                >
                                  Detail
                                </button>
                              </NavLink>
                            </div>


                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ paddingTop: "30px" }}>
              {/* <p>no records available</p> */}
            </div>
          )}
        </div>
      </div>
=======
>>>>>>> 70d13f3af14d2caa13abea1541d35e8e2044017b
    </>
  );
};

export default HeroSection;
