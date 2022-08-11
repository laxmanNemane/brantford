import React from "react";
import HocComponent from "../Components/HocComponent";
import { IoIosAirplane } from "react-icons/io";
import { FcRating, FcPlus } from "react-icons/fc";
import { AiOutlineLaptop } from "react-icons/ai";
import { Divider } from "antd";

const DasbordPage = () => {
  return (
    <div className="container-fluid mx-3 mt-4 " >
      <div
        className="row  me-2  my-5 align-items-center"
        style={{ height: "120px" }}
      >
        <div className="col-lg-1 text-center ">
          <IoIosAirplane style={{ fontSize: "40px" }} />
        </div>
        <div className="col-lg-8">
          <h5>Analytic Dashbord</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            blanditiis nihil odit!
          </p>
        </div>
        <div className="col-lg-3 text-center">
          <FcRating style={{ fontSize: "30px" }} />
          <button className="ms-3 btn border btn-outline-primary">
            {" "}
            <FcPlus style={{ fontSize: "20px" }} /> &nbsp;Create one
          </button>
        </div>
      </div>

      <div className="row  me-2  align-items-center">
        <div className="col-12  ">
          <div className="card pt-2">
            <div className="mx-3 d-flex pb-3">
              <h6 className="pt-3 me-auto">Performance</h6>
              <button className="btn border btn-outline-primary mt-2">
                View All
              </button>
            </div>
            <Divider style={{ margin: "0", padding: "0" }} />
            <div className="row py-4 px-3">
              <div className="col-4 d-flex ">
                <div className="col-left">
                  <AiOutlineLaptop
                    style={{ fontSize: "80px", color: "pink" }}
                    className="mt-2"
                  />
                </div>
                <div className="col-right ms-3">
                  <span>Total Users</span>
                  <br />
                  <span style={{ fontSize: "40px" }}>3K</span>
                  <br />
                  <span>hello</span>
                </div>
              </div>
              <div className="col-4 d-flex algn-items-center">
                <div className="col-left ">
                  <AiOutlineLaptop
                    style={{ fontSize: "80px", color: "pink" }}
                    className="mt-2"
                  />
                </div>
                <div className="col-right ms-3">
                  <span>Todal revenu</span>
                  <br />
                  <span style={{ fontSize: "40px" }}>3K</span>
                  <br />
                  <span>hello</span>
                </div>
              </div>
              <div className="col-4 d-flex">
                <div className="col-left">
                  <AiOutlineLaptop
                    style={{ fontSize: "80px", color: "pink" }}
                    className="mt-2"
                  />
                </div>
                <div className="col-right ms-3">
                  <span>reviews</span>
                  <br />
                  <span style={{ fontSize: "40px" }}>3K</span>
                  <br />
                  <span>hello</span>
                </div>
              </div>
            </div>
            <Divider style={{ margin: "0", padding: "0" }} />
            <div className="row text-center">
              <div className="col-12 py-2">
                <button
                  className="btn rounded-3 btn-outline-primary border px-5 "
                  style={{ borderRadius: "50px" }}
                >
                  click me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row  me-2  my-5 align-items-center"
        style={{ height: "120px" }}
      >
        <div className="col-lg-1 text-center ">
          <IoIosAirplane style={{ fontSize: "40px" }} />
        </div>
        <div className="col-lg-8">
          <h5>Analytic Dashbord</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            blanditiis nihil odit!
          </p>
        </div>
        <div className="col-lg-3 text-center">
          <FcRating style={{ fontSize: "30px" }} />
          <button className="ms-3 btn border btn-outline-primary">
            {" "}
            <FcPlus style={{ fontSize: "20px" }} /> &nbsp;Create one
          </button>
        </div>
      </div>

      <div className="row  me-2  align-items-center">
        <div className="col-12  ">
          <div className="card pt-2">
            <div className="mx-3 d-flex pb-3">
              <h6 className="pt-3 me-auto">Performance</h6>
              <button className="btn border btn-outline-primary mt-2">
                View All
              </button>
            </div>
            <Divider style={{ margin: "0", padding: "0" }} />
            <div className="row py-4 px-3">
              <div className="col-4 d-flex ">
                <div className="col-left">
                  <AiOutlineLaptop
                    style={{ fontSize: "80px", color: "pink" }}
                    className="mt-2"
                  />
                </div>
                <div className="col-right ms-3">
                  <span>Total Users</span>
                  <br />
                  <span style={{ fontSize: "40px" }}>3K</span>
                  <br />
                  <span>hello</span>
                </div>
              </div>
              <div className="col-4 d-flex algn-items-center">
                <div className="col-left ">
                  <AiOutlineLaptop
                    style={{ fontSize: "80px", color: "pink" }}
                    className="mt-2"
                  />
                </div>
                <div className="col-right ms-3">
                  <span>Todal revenu</span>
                  <br />
                  <span style={{ fontSize: "40px" }}>3K</span>
                  <br />
                  <span>hello</span>
                </div>
              </div>
              <div className="col-4 d-flex">
                <div className="col-left">
                  <AiOutlineLaptop
                    style={{ fontSize: "80px", color: "pink" }}
                    className="mt-2"
                  />
                </div>
                <div className="col-right ms-3">
                  <span>reviews</span>
                  <br />
                  <span style={{ fontSize: "40px" }}>3K</span>
                  <br />
                  <span>hello</span>
                </div>
              </div>
            </div>
            <Divider style={{ margin: "0", padding: "0" }} />
            <div className="row text-center">
              <div className="col-12 py-2">
                <button
                  className="btn rounded-3 btn-outline-primary border px-5 "
                  style={{ borderRadius: "50px" }}
                >
                  click me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HocComponent(DasbordPage);
