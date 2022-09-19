import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../Context/UserContext";

const BaseUrl = "http://bantford.prometteur.in";

const Cities = () => {
  const { cityName, setCityName } = useContext(usersContext);
  const [city, setCity] = useState([]);
  const navigate = useNavigate();

  const getAllCities = () => {
    axios
      .get(`${BaseUrl}/endUser/all-cities-listing`)
      .then((res) => {
        console.log(res.data);

        const unique = (value, index, self) => {
          return self.indexOf(value) === index;
        };

        const ages = res.data;
        const uniqueAges = ages.filter(unique);
        console.log(uniqueAges);
        // setCity(uniqueAges);

        //property count according to city
        const arr = res.data;

        const count = {};

        for (const element of arr) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }

        console.log(count);
        setCity(count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          {Object.keys(city).map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-3 col-sm-6 d-flex my-2"
                key={index}
              >
                <div className="city-section d-flex py-3">
                  {/* <div className="image-cities ps-1">
                    <img
                      src="https://images.unsplash.com/photo-1568626231555-03e303627953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div> */}
                  <div
                    className="mx-4"
                    style={{ lineHeight: "0.5", marginTop: "20px" }}
                    onClick={() => getCitiwiseData(item)}
                  >
                    <p className="name">{item}</p>
                    <p className="profile">{city[item]} properties</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="col-lg-3 col-md-3 col-sm-6 d-flex my-2">
            <div className="city-section d-flex py-3">
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
            <div className="city-section d-flex py-3">
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
            <div className="city-section d-flex py-3">
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
            <div className="city-section d-flex py-3">
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
            <div className="city-section d-flex py-3">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cities;
