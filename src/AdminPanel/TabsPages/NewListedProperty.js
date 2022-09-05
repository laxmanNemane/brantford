import React, { useEffect, useState } from "react";
import "./StyleTabs/NewListed.css";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";
import PropertyDetailPage from "../PropertyDetailPage";

const BaseUrl = "http://bantford.prometteur.in";
const Admin_token = localStorage.getItem("admin_token");

const NewListedProperty = () => {
  const [newListed, setNewListed] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-newlistedpropertirs`, {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      })
      .then((res) => {
        setNewListed(res.data.spaces);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //  console.log(props);
  //  console.log(props.item.space);

  return (
    <div className="row">
      {newListed.map((item) => {
        return (
          <div className="col-3 text-center" key={item.id}>
            <div className="card new_listed_cardtabs shadow">
              <div>
                <img
                  src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-441948,resizemode-1,msid-78487988/industry/services/property-/-cstruction/india-office-property-market-shows-resilience-q3-absorption-up-64-on-quarter.jpg"
                  alt=""
                  className="property_imageTabs img-fluid"
                />
                <div className="NewListed_propert-description">
                  <h4 className="office_name-newListed">{item.city}</h4>
                  <p className="description_new_listedtabs">
                    {item.description}
                  </p>
                  <div className="w-75 d-flex justify-content-between">
                    <p className="price_newListedtabs">Price : {item.price}</p>
                    <p className="viewIcon">
                      <NavLink to="/detail" className="text-dark" >
                        
                        <AiOutlineFolderOpen />
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewListedProperty;
