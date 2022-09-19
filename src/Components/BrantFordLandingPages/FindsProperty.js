import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "../../../src/Assets/CSS/brantFord.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import PropertyOverview from "../../EndUserPanel/PropertyOverview";
import { usersContext } from "../../Context/UserContext";

// import "../../Styles/LandingPage/FindsProperty.css";

const BaseUrl = "http://bantford.prometteur.in";

const FindsProperty = () => {
  // const [allProperties, setAllProperties] = useState();

  // const navigate = useNavigate();
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const [categaries, setCategories] = useState([]);
  // const [singleCategory, setSinglecategory] = useState([]);
  // const [detailId, setDetailId] = useState(null);

  // const { endUserSpace, setEndUserSpace } = useContext(usersContext);

  // const setCategary = (categaryId, data) => {
  //   console.log(categaryId);
  //   localStorage.setItem("singlecategaryId", categaryId);
  //   console.log(data);
  //   setEndUserSpace(data);
  //   navigate(`/office-detail/${data.space.split(" ").join("-")}`);
  // };
  // // /office-detail/:space-name

  // const modalToDetailPage = (data) => {
  //   console.log(data);
  //   setEndUserSpace(data);
  //   setIsModalVisible(true);
  // };

  // const singleCategary = (id) => {
  //   console.log(id);
  //   axios
  //     .get(`${BaseUrl}/endUser/get-categary?id=${id}`, {
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setSinglecategory(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setSinglecategory("");
  //     });
  // };

  // const getAllProperties = () => {
  //   axios
  //     .get(`${BaseUrl}/endUser/get-all-spces-wr`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setAllProperties(res.data);
  //       setSinglecategory(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getAllProperties();
  // }, []);
  return (
    <div>
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
            <div className="col-lg-6 col-md-6 col-sm-12 ">
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
