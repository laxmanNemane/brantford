import { Divider } from "antd";
import React from "react";
import HocComponent from "../Components/HocComponent";

const Properties = () => {
  return (
    <div className="row  mx-3  mt-4 ">
      <div className="col-12 my-2">
        <h4>Properties</h4>
      </div>

      <div className="col-12 card shadow my-2">
        <h4 className="pt-2">Property Report </h4>
        <Divider style={{ margin: "0", padding: "0" }} />
        <div className="row">
          <div className="col-8">cscs</div>
          <div className="col-1">
            <Divider style={{ margin: "0", padding: "0" }} />
          </div>
          <div className="col-3">profit</div>
        </div>
      </div>

      <div className="col-8 card shadow my-2">
        <div className="d-flex py-2">
          <h4 className="pt-2 me-auto">New Listed </h4>
          <button className="btn border px-4 ">View all</button>
        </div>
        <Divider style={{ margin: "0", padding: "0" }} />
        <div className="row my-4">
          <div className="col-4  ">
            <div
              className="card shodow"
              style={{
                width: "280px",
                height: "350px",
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 0 10px 5px rgba(0,0,0,0.4)",
              }}
            >
              <img
                class="card-img-top "
                src="https://mb.cision.com/Public/197/2987870/883e1676b8a71a23_800x800ar.jpg"
                alt="Card image cap"
                style={{
                  borderRadius: "20px",
                  width: "260px",
                  margin: "10px auto",
                  height: "280px",
                }}
              />
              <div class="card-body">
                <h5 className="fw-bold">Gargoru Office Area</h5>
                <p>Lorem ipsum dolor sit.</p>
                <strong>$24.89</strong>
              </div>
            </div>
          </div>

          <div className="col-4 my-2 ">
            <div
              className="card shodow"
              style={{
                width: "280px",
                height: "350px",
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 0 10px 5px rgba(0,0,0,0.4)",
              }}
            >
              <img
                class="card-img-top "
                src="https://mb.cision.com/Public/197/2987870/883e1676b8a71a23_800x800ar.jpg"
                alt="Card image cap"
                style={{
                  borderRadius: "20px",
                  width: "260px",
                  margin: "10px auto",
                  height: "280px",
                }}
              />
              <div class="card-body">
                <h5 className="fw-bold">Gargoru Office Area</h5>
                <p>Lorem ipsum dolor sit.</p>
                <strong>$24.89</strong>
              </div>
            </div>
          </div>
          <div className="col-4 my-2 ">
            <div
              className="card shodow"
              style={{
                width: "280px",
                height: "350px",
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 0 10px 5px rgba(0,0,0,0.4)",
              }}
            >
              <img
                class="card-img-top "
                src="https://mb.cision.com/Public/197/2987870/883e1676b8a71a23_800x800ar.jpg"
                alt="Card image cap"
                style={{
                  borderRadius: "20px",
                  width: "260px",
                  margin: "10px auto",
                  height: "280px",
                }}
              />
              <div class="card-body">
                <h5 className="fw-bold">Gargoru Office Area</h5>
                <p>Lorem ipsum dolor sit.</p>
                <strong>$24.89</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HocComponent(Properties);