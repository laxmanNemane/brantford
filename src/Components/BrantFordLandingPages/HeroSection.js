import axios from "axios";
import React, { useEffect, useState } from "react";

// import "../../Styles/LandingPage/HeroSection.css";
// import videoBg from "../../Assets/video/pexels-alena-darmel-7646596.mp4";
import { Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import FindsProperty from "./FindsProperty";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { AutoComplete } from "antd";
import { Field, Form, Formik } from "formik";
const { Option } = AutoComplete;

const data = ["pune", "nashik", "Aurangbad", "jalgaon"];

const BaseUrl = "http://bantford.prometteur.in";

const HeroSection = () => {
  const [city, setCity] = useState();
  const [text, setText] = useState("");
  const [serchResult, setSerchResult] = useState([]);
  const [serchItem, setSerchItem] = useState("");
  const [item, setItem] = useState([]);


  const onchangeHandlear = (e) => {
    if (e.target.value === "") {
      setItem("");
    } else {
      const nes = e.target.value;
      const filterdItem = serchResult.filter((value) => {
        return value.includes(nes);
      });
      setItem(filterdItem);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(serchItem)
    // axios
    //   .get(
    //     `http://bantford.prometteur.in/endUser/get-spacesbycity?city=${text}`
    //   )
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
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
              <div className="search-section align-items-center d-flex">
                <div className="input_search">
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
                </div>

                <div
                  className="top-banner-serach position-relative"
                  style={{ width: "100%", borderRadius: "10px" }}
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
                                    {val}
                                  </div>

                                  <div className="auto-complete-content-wrap ml-3">
                                    <button className="btn-first py-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
