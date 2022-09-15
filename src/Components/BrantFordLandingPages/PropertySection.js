import axios from "axios";

import React, { useState, useEffect, useContext } from "react";

import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { usersContext } from "../../Context/UserContext";
import PropertyOverview from "../../EndUserPanel/PropertyOverview";

const BaseUrl = "http://bantford.prometteur.in";

const PropertySection = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [categaries, setCategories] = useState([]);
  const [singleCategory, setSinglecategory] = useState([]);

  const { endUserSpace, setEndUserSpace } = useContext(usersContext);

  const setCategary = (categaryId, data) => {
    console.log(categaryId);

    // localStorage.setItem("singlecategaryId", categaryId);
    setEndUserSpace(data);
    navigate(`/office-detail/${data.space.split(" ").join("-")}`);
  };

  const getallCategaries = () => {
    axios
      .get(`${BaseUrl}/endUser/all-categaries`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const singleCategary = (id) => {
    console.log(id);
    axios
      .get(`${BaseUrl}/endUser/get-categary?id=${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setSinglecategory(res.data);
      })
      .catch((err) => {
        console.log(err);
        setSinglecategory("");
      });
  };

  useEffect(() => {
    getallCategaries();
  }, []);

  return (
    <div>
      <div className="categary-list">
        <ul className="">
          {categaries.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => singleCategary(item.id)}
                className="category-name"
              >
                {item.categary}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="property-page-section">
        <div className="container property-section">
          <div className="heading-property">
            <div className="row">
              <div className="col-lg-12 col-sm-12 s-l-md-12 property-section-headings ">
                <p className="sub-main-heading pr-heading-main">
                  Handpicked Properties for you
                </p>
                <p className="sub-heading pr-heading-sub ">
                  Featured commercial & co-working properties across India
                </p>
              </div>
            </div>

            <div className="row">
              {singleCategory ? (
                singleCategory.map((item, index) => {
                  if (singleCategory === "") {
                    console.log(singleCategary);
                    return <p>No records</p>;
                  } else {
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-sm-12 my-3"
                        key={index}
                      >
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
                              <p onClick={() => setIsModalVisible(true)}>
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
                            <p className="property-name-heading name">
                              {item.space}
                            </p>
                            <p className="property-location-card description-why-page">
                              {item.address}
                            </p>
                            <div className="button-space d-flex justify-content-between btn-area">
                              <p className=" fw-bold">{item.description}</p>
                              <button
                                className="btn-first"
                                onClick={() => setCategary(item.id, item)}
                              >
                                Detail
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <div className="empty-records">
                  <p>This Category does not added spaces into it.</p>
                </div>
              )}
            </div>
          </div>
          <PropertyOverview
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertySection;
