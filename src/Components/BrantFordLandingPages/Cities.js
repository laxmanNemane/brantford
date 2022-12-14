import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { usersContext } from "../../Context/UserContext";

const BaseUrl = "http://bantford.prometteur.in";

const Cities = () => {
  const { cityName, setCityName } = useContext(usersContext);
  const [city, setCity] = useState([]);
  const navigate = useNavigate();
  const [cityDistinct, setCityDistinct] = useState([]);
  const [Distinct, setDistinct] = useState([]);

  const getAllCities = () => {
    axios.get(`${BaseUrl}/endUser/all-cities-listing`).then((res) => {
      console.log("all city list", res.data);
      // setCityDistinct(res.data.trim());
      setCity(res.data);
    });
  };

  // console.log("city data", cityDistinct.trim());
  // cityDistinct.map((value) => setDistinct(value));
  // {
  //   cityDistinct.map((value) => {
  //     return setDistinct([...new set()]);
  //   });
  // }

  console.log("distinct value ", Distinct);

  const getCitiwiseData = (data) => {
    console.log(data);
    setCityName(data);
    navigate(`/city/${data}`);
  };

  useEffect(() => {
    getAllCities();
  }, []);

  return (
    <div className="cities-section  pt-3 pb-2">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 col-sm-12 s-l-md-12 property-section-headings ">
            <p className="sub-heading pr-heading-sub fw-bold ">TOP CITIES</p>
            <p className="sub-main-heading pr-heading-main">
              Explore Offices in Popular Indian Cities
            </p>
          </div>
        </div>
        <div className="row my-4 all-cities">
          {Object.keys(city)
            .slice(0, 8)
            .map((item, index) => {
              return (
                // <NavLink to="/office-detail" key={index}>
                <div
                  className="col-lg-3 col-md-3 col-sm-6 d-flex my-2"
                  key={index}
                >
                  <div className="city-section d-flex py-3">
                    <div className="image-cities ps-1">
                      <img
                        src="https://images.unsplash.com/photo-1568626231555-03e303627953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                        width={100}
                        height={100}
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <div
                      className="mx-4"
                      style={{ lineHeight: "0.5", marginTop: "20px" }}
                      onClick={() => getCitiwiseData(city[item])}
                    >
                      <p className="name" style={{lineHeight:"20px"}}>{city[item]}</p>
                      {/* <p className="profile">{city[item]} properties</p> */}
                    </div>
                  </div>
                </div>
                // </NavLink>
              );
            })}
          {/* <div className="col-lg-3 col-md-3 col-sm-6 d-flex my-2">
            <div className=" d-flex py-3">
              <div className="  image-cities ps-1 ">
                <img
                  src="https://images.unsplash.com/photo-1568626231555-03e303627953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                  width={100}
                  height={100}
                  className="cities-images-according"
                />
              </div>
              <div
                className="mx-4"
                style={{ lineHeight: "0.5", marginTop: "20px" }}
              >
                <p className="name">Lahor</p>
                <p className="profile">!000+ properties</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex my-2">
            <div className=" d-flex py-3">
              <div className="image-cities ps-1">
                <img
                  src="https://images.unsplash.com/photo-1568626231555-03e303627953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div
                className="mx-4"
                style={{ lineHeight: "0.5", marginTop: "20px" }}
              >
                <p className="name">Lahor</p>
                <p className="profile">!000+ properties</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex my-2">
            <div className=" d-flex py-3">
              <div className="image-cities ps-1">
                <img
                  src="https://images.unsplash.com/photo-1568626231555-03e303627953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div
                className="mx-4"
                style={{ lineHeight: "0.5", marginTop: "20px" }}
              >
                <p className="name">Lahor</p>
                <p className="profile">!000+ properties</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex my-2">
            <div className=" d-flex py-3">
              <div className="image-cities ps-1">
                <img
                  src="https://images.unsplash.com/photo-1568626231555-03e303627953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div
                className="mx-4"
                style={{ lineHeight: "0.5", marginTop: "20px" }}
              >
                <p className="name">Lahor</p>
                <p className="profile">!000+ properties</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 d-flex my-2">
            <div className=" d-flex py-3">
              <div
                className="image-cities ps-1"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1568626231555-03e303627953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                  width={100}
                  height={100}
                  className="cities-images-according"
                  // style={{
                  //   borderRadius: "10px",
                  //   animationName: "gracefulimage",
                  //   animationDuration: "0.3s",
                  //   animationIterationCount: "1",
                  //   animationTimingFunction: "ease-in",
                  // }}
                />
              </div>
              <div
                className="mx-4"
                style={{ lineHeight: "0.5", marginTop: "20px" }}
              >
                <p className="name">Lahor</p>
                <p className="profile">!000+ properties</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cities;
