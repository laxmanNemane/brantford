import axios from "axios";
import React, { useEffect, useState, useNavigate } from "react";
import "../../../src/Assets/CSS/brantFord.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PropertyOverview from "../../EndUserPanel/PropertyOverview";




// import "../../Styles/LandingPage/FindsProperty.css";

const BaseUrl = "http://bantford.prometteur.in"

const FindsProperty = () => {

  const [allProperties, setAllProperties] = useState();

  // const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [categaries, setCategories] = useState([]);
  const [singleCategory, setSinglecategory] = useState([]);
  const [detailId, setDetailId] = useState(null);

  const setCategary = (categaryId) => {
    console.log(categaryId);
    localStorage.setItem("singlecategaryId", categaryId);
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





  const getAllProperties = () => {
    axios.get(`${BaseUrl}/endUser/get-all-spces-wr`)
    .then((res)=> {
      console.log(res.data)
      setAllProperties(res.data)
      setSinglecategory(res.data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }

useEffect(()=>{
  
  getAllProperties();
},[])  
  return (
    <div>
{/* //////////////////////////////// */}



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
              {allProperties &&
                allProperties.map((item, index) => {
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
               }
            </div>
          </div>
          <PropertyOverview
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            // id={item.id}

          />
        </div>
      </div>
    </div>
 
{/* ///////////////////////////////// */}
 
    
    <div className="find-property-section land-page py-3">
      <div className="container py-5">
        <div className="heading-section-findsection text-center">
          <p className="sub-heading">All property Needs one portal</p>
          <h1 className="main-heading">
            Find Better Places to Live,
            <br /> Work and Wonder...
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="image-section w-100">
              <img
                src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="image-find-section"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="discription-findpage  my-5  ">
              <p className="sub-heading text-uppercase">Buy A Office</p>
              <h4 className="sub-main-heading  ">
                Find, Buy & Own Your <br /> Dream Office
              </h4>
              <p className="description-find-page">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus enim excepturi facere.
              </p>
              <button className="btn-second">Explore Buying</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default FindsProperty;
