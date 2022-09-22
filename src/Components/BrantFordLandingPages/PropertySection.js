import axios from "axios";

import React, { useState, useEffect, useContext } from "react";

import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usersContext } from "../../Context/UserContext";
import PropertyOverview from "../../EndUserPanel/PropertyOverview";
import { fetchAllSpaces } from "../../Redux/enduserSlices/enduserSlice";
import CompareSidebar from "./CompareSidebar";

const BaseUrl = "http://bantford.prometteur.in";

const PropertySection = ({ slide, setSlide }) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [allspaces, setAllSpaces] = useState([]);

  const [categaries, setCategories] = useState([]);
  const [singleCategory, setSinglecategory] = useState([]);
  const [ss, SetSs] = useState();

  const {
    endUserSpace,
    setEndUserSpace,
    selectedProperty,
    setSelectedProperty,
  } = useContext(usersContext);

  console.log("values idbfg", selectedProperty);

  const data = useSelector((state) => state.enduser.AllSpacesEndUser);
  console.log(data);

  const [dataCompare, setDatacompare] = useState([]);
  // dispatch(fetchAllSpaces());

  const dispatch = useDispatch();

  const setCategary = (categaryId, data) => {
    console.log(categaryId);

    // localStorage.setItem("singlecategaryId", categaryId);
    setEndUserSpace(data);
    navigate(`/office-detail/${data.space.split(" ").join("-")}`);
  };

  const modalToDetailPage = (data) => {
    setIsModalVisible(true);
    setEndUserSpace(data);
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
    dispatch(fetchAllSpaces());
  }, [show, isModalVisible]);

  const setProerties = (data) => {


    let c = selectedProperty.findIndex(
      element => element.id === data.id
    );
    if (c >= 0) {
      toast.warning("this property already added")
    } else {
      setShow(true)
      if (selectedProperty.length < 4) {
        setSelectedProperty([...selectedProperty, data]);
      } else {
        // alert("you can add only 4 proprty")
        toast.warning("Minimun 4 items you can compare ")
        setSelectedProperty([...selectedProperty]);


      }

    }
    setShow(true)




  };
  console.log("hsgdt", dataCompare);


  return (
    <div>

      <div className="property-page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12   property-section-headings">
              <div className="container property-section">
                <div className="heading-property">
                  <p className="sub-main-heading pr-heading-main">
                    Handpicked Properties for you
                  </p>
                  <p className="sub-heading pr-heading-sub ">
                    Featured commercial & co-working properties across India
                  </p>
                </div>
              </div>

              <div className="row">
                {data &&
                  data.slice(0, 6).map((ele, index) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-sm-12 " key={index}>
                        <div className="properties">
                          <div className="image-section1 w-100 position-relative">
                            <div className="property-image-in-section">

                              <img
                                src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                className="image-find-section"
                              />
                            </div>
                          </div>
                          <div className="price-section d-flex justify-content-between mx-4">
                            <div className="w-75 ">
                              <p className="price">{ele.price}/sqr</p>
                            </div>
                            <div className="d-flex justify-content-between w-25 gx-2 icon-group">
                              <p onClick={() => modalToDetailPage(ele)}>
                                <AiOutlineArrowsAlt className="icons-recomanded-property text-white" />
                              </p>
                              <p>
                                <BsHeart className="icons-recomanded-property text-white" />
                              </p>
                              <p onClick={() => setProerties(ele)}>
                                <BsPlusCircle className="icons-recomanded-property text-white" />
                              </p>
                            </div>
                          </div>
                          <div className="properties-description-card mx-2 my-3">
                            <p className="property-name-heading name">
                              {ele.space}
                            </p>
                            <p className="property-location-card description-why-page">
                              {ele.address}
                            </p>
                            <div className="button-space d-flex justify-content-between btn-area">
                              <p className=" fw-bold">{ele.description}</p>
                              {/* <NavLink to={`/office-detail/${item.id}`}> */}
                              <button
                                className="btn-first"
                                onClick={() => setCategary(ele.id, ele)}
                              >
                                Detail
                              </button>
                              {/* </NavLink> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div>
                <Link to="/allSpaces">
                  <p className="btn-view-all position-relative">
                    View All{" "}
                    <span className="tr-icon position-relative">
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <PropertyOverview
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          </div>
        </div>
      </div>
      <CompareSidebar show={show} setShow={setShow} dataCompare={dataCompare} />
    </div>
  );
};

export default PropertySection;
