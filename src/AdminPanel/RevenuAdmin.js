import React from "react";
import HocComponent from "../Components/HocComponent";
import ReactEcharts from "echarts-for-react";
// import AdminSubUserstable from "./AdminSubUserstable";

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  label: {
    show: false,
    position: "center",
  },
  emphasis: {
    label: {
      show: true,
      fontSize: "30",
      fontWeight: "bold",
    },
  },
  series: [
    {
      data: [82, 93, 90, 93, 129, 133, 132],
      type: "bar",
      smooth: false,
    },
  ],
};

const option3 = {
  tooltip: {
    trigger: "item",
  },
  //   legend: {
  //     bottom: "1%",
  //     fontSize:"10px"
  //     // left: "center",
  //   },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["30%", "60%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "30",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "All Properties" },
        { value: 735, name: "Booked Properties" },
        { value: 580, name: "New Listed propertis" },
      ],
    },
  ],
};

const RevenuAdmin = () => {
  return (
    <div
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        height: "100vh",
      }}
    >
      <div className="row  mx-3 ">
        <div className="col-12 my-2  ">
          <h5 className="Analytic_heading">Revenu (Profit)</h5>
          <div className=" card ms-2" style={{ width: "99%" }}>
            <ReactEcharts option={{ ...option }} />
            {/* <ReactEcharts option={{ ...option3 }} /> */}
          </div>
        </div>
        <div className="d-flex w-100 mt-4">
          <div className="card mx-2" style={{ width: "33.30%" }}>
            <div
              className="d-flex align-items-center "
              style={{ height: "280px" }}
            >
              <div className="w-50 ms-3">
                <h3 className="text-center Heading-revnu-cards">Yearly</h3>
                <p className="text-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="w-50">
                <ReactEcharts option={{ ...option3 }} />
              </div>
            </div>
          </div>
          <div className="card mx-2" style={{ width: "33.30%" }}>
            <div
              className="d-flex align-items-center"
              style={{ height: "280px" }}
            >
              <div className="w-50 ms-3">
                <h3 className="text-center Heading-revnu-cards">Monthly</h3>
                <p className="text-end ">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="w-50">
                <ReactEcharts option={{ ...option3 }} />
              </div>
            </div>
          </div>
          <div className="card mx-2" style={{ width: "33.30%" }}>
            <div
              className="d-flex align-items-center"
              style={{ height: "280px" }}
            >
              <div className="w-50 ms-3">
                <h3 className="text-center Heading-revnu-cards">Daily</h3>
                <p className="text-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="w-50">
                <ReactEcharts option={{ ...option3 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HocComponent(RevenuAdmin);
