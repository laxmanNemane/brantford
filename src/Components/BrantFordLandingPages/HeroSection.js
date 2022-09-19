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
const { Option } = AutoComplete;

const BaseUrl = "http://bantford.prometteur.in";

const HeroSection = () => {
  const [searchData, setSearchData] = useState();
  const [searchKey, setSearchKey] = useState("");
  const [city, setCity] = useState();
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if (!value) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }

    setResult(res);
  };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    let matches = [];

    // if(text.length>0){
    //   matches = city.filter(city=>{
    //     const regx = new RegExp(`${text}`, "hin");
    //     return city.city.match(regx)
    //   })
    // }
    // console.log('matches',matches);
    // setSuggestion(matches)
    // setText(text)
    // setSearchData(e.target.value)
  };

  const searchHandler = (event) => {
    event.preventDefault();
    console.log(text);
    setCity(text);
    console.log(searchKey);

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
      });
    setText("");
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

  useEffect(() => {
    loadCity()
  }, []);

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
              <div className="search-section d-flex align-items-center">

                <div className="input_search">
                  <div className="input1">
                    <form onSubmit={searchHandler}>
                      <input
                        type="text"
                        placeholder="Search By Location"
                        className="input-serchboox"
                        value={text}
                        // onChange={(e) => setSearchKey(e.target.value)}
                        onChange={(e) => onChangeHandler(e)}
                      />
                      {suggestion &&
                        suggestion.map((item, i) => {
                          <div>{suggestion}</div>;
                        })}


                      {/* <AiOutlineSearch className="fs-3" /> */}
                      {/* </div> */}
                    </form>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-magnifying-glass fs-4"  ></i>
                </div>
              </div>

              {/* <AutoComplete
                style={{
                  width: 200,
                }}
                onSearch={handleSearch}
                placeholder="input here"
              >
                {result.map((email) => (
                  <Option key={email} value={email}>
                    {email}
                  </Option>
                ))}
              </AutoComplete> */}

              <div className="top-banner-serach position-relative" style={{ width: "530px" }}>
                <div id="houzez-auto-complete-banner position-absolute" className="auto-complete" style={{ top: "370.4px" }}>
                  {
                    // city.map((e, index) => {
                    //   return (
                    //     <ul key={index}>
                    //       <li>{e}</li>
                    //     </ul>
                    //   )
                    // })
                  }
                  <ul className="list-group">

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{ backgroundColor: "#ffff", display: "flex", padding: "30px" }}
      >
        {/* <div className="container">
              <p>{city && `results for ${city}`}</p>
            </div> */}

        {/* <div className="row">
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
                      </div>
                    </div>
                  </div>
                </div> */}
        {/* );
            })
          ) : (
            <div style={{ paddingTop: "30px" }}>
              <p>no records available</p>
            </div>
          )} */}
        {/* </div> */}
      </div>
    </>
  );
};

export default HeroSection;
