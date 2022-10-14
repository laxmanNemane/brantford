import axios from "axios";

import React, { useState, useEffect, useContext } from "react";

import { AiOutlineArrowsAlt } from "react-icons/ai";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usersContext } from "../../Context/UserContext";
import PropertyOverview from "../../EndUserPanel/PropertyOverview";
import {
  fetchAllCategory,
  fetchAllSpaces,
} from "../../Redux/enduserSlices/enduserSlice";
import CompareSidebar from "./CompareSidebar";

const BaseUrl = "http://bantford.prometteur.in";
const defaultImageUrl = "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const PropertySection = ({ slide, setSlide }) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [allspaces, setAllSpaces] = useState([]);

  const [categaries, setCategories] = useState([]);
  const [singleCategory, setSinglecategory] = useState([]);
  const [ss, SetSs] = useState();
  const [imagepath, setImagepath] = useState([]);

  const {
    endUserSpace,
    setEndUserSpace,
    selectedProperty,
    setSelectedProperty,
  } = useContext(usersContext);

  console.log("values idbfg", selectedProperty);

  const data = useSelector((state) => state.enduser.AllSpacesEndUser);
  const categorydata = useSelector((state) => state.enduser.categoryEndUser);
  console.log(data);
  console.log("category data ", categorydata);

  const [dataCompare, setDatacompare] = useState([]);
  // dispatch(fetchAllSpaces());

  const dispatch = useDispatch();

  const setCategary = (categaryId, data, ele) => {
    console.log(categaryId);

    // localStorage.setItem("singlecategaryId", categaryId);
    setEndUserSpace(ele);
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
    dispatch(fetchAllCategory());
  }, [show, isModalVisible]);

  const setProerties = (data) => {
    let c = selectedProperty.findIndex((element) => element.id === data.id);
    if (c >= 0) {
      toast.warning("this property already added");
    } else {
      setShow(true);
      if (selectedProperty.length < 4) {
        setSelectedProperty([...selectedProperty, data]);
      } else {
        // alert("you can add only 4 proprty")
        toast.warning("Minimun 4 items you can compare ");
        setSelectedProperty([...selectedProperty]);
      }
    }
    setShow(true);
  };
  console.log("hsgdt", dataCompare);
  console.log("enduser space data  ", data);
  console.log(imagepath);


  return (
    <div>
      <div className="property-page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12   property-section-headings">
              <div className="container property-section">
                <div className="heading-property">
                  <p className="sub-main-heading pr-heading-main">
                    Handpicked properties for you
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
                              {/* <h3>{ele.id}</h3> */}


                            {/* {ele.images>0 && ele.images.map((item, index)=> {if(item.main_type =="photos" && item.sub_type =="photos_cover"){return (<img key={index} src={item.data[0]} alt="" className="image-find-section"/>)}   else{<img key={index} src={defaultImageUrl} alt="" className="image-find-section"/>}  })} */}

                              {
                              ele.images.length > 0 && 
                              // (ele.images.filter(item => {if(item.main_type =="photos" && item.sub_type =="photos_cover") {console.log(item.data); console.log(item.data.indexOf(item.data)); console.log(item.length);  return true}}) ) 
                              // (ele.main_type =="photos" && ele.sub_type =="photos_cover")



                              // ele.images.filter(item => {if(item.main_type =="photos" && item.sub_type =="photos_cover"){ return true; }})


                              (ele.images.map(function (ele){

                                if( ele.main_type =="photos" &&
                                 ele.sub_type =="photos_cover"){

                                   console.log(ele.data)
                                   return true;
                                   
                                 }else{
                                  return false;
                                 }
                                
                                }))

                               ?
                               ele.images.map(item2 => {if(item2.main_type =="photos" && item2.sub_type =="photos_cover") {  return (<img  src={item2.data} alt="" className="image-find-section"/>)}}) 


                               : 
                               (
                                <img  src={defaultImageUrl} alt="" className="image-find-section"/>
                              ) 
                               }




                              {/* <img
                                src={ele.images.length>0 
                                       
                                   ? 
                                  //  ele.images.filter(item =>{ if(item.main_type =="photos" && item.sub_type =="photos_cover")  return item.data})


                                    ele.images.filter(function (ele){

                                   if( ele.main_type =="photos" &&
                                    ele.sub_type =="photos_cover"){

                                      console.log(ele.data)
                                      return ele.data[0].toString()
                                    }

                                   })
                                 
                                    : defaultImageUrl
                                  
                                  }


                                alt=""
                                className="image-find-section"
                              /> */}


                            </div>
                          </div>
                          <div className="price-section d-flex justify-content-between mx-4">
                            <div className="w-75 ">
                              <p className="price">{ele.space.price}/sqr</p>
                            </div>
                            <div className="d-flex justify-content-between w-25 gx-2 icon-group">
                              <p onClick={() => modalToDetailPage(ele.space)}>
                                <AiOutlineArrowsAlt className="icons-recomanded-property text-white" />
                              </p>
                              <p>
                                <BsHeart className="icons-recomanded-property text-white" />
                              </p>
                              <p onClick={() => setProerties(ele.space)}>
                                <BsPlusCircle className="icons-recomanded-property text-white" />
                              </p>
                            </div>
                          </div>
                          <div className="properties-description-card mx-2 my-3">
                            <p className="property-name-heading name">
                              {ele.space.space}
                            </p>
                            <p className="property-location-card description-why-page">
                              {ele.space.address}
                            </p>
                            <div className="button-space d-flex justify-content-between btn-area">
                              <p className=" fw-bold">
                                {ele.space.description}
                              </p>
                              {/* <NavLink to={`/office-detail/${item.id}`}> */}
                              <button
                                className="btn-first"
                                onClick={() =>
                                  setCategary(ele.space.id, ele.space, ele)
                                }
                              >
                                Details
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
                      <i className="fa-solid fa-arrow-right"></i>
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
