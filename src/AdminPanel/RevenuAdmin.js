import React, { useEffect, useState } from "react";
import HocComponent from "../Components/HocComponent";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import AdminFooter from "./AdminFooter";
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

const RevenuAdmin = () => {
  const [revenue, setRevenue] = useState([]);
  const getAdminRevnue = () => {
    axios
      .get(
        "http://bantford.prometteur.in/adminDashboard/get-revenue?revenue=yearly",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setRevenue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
          { value: revenue.total_revenue, name: "Yearly" },
          { value: 735, name: "Monthly" },
          { value: 580, name: "Daily" },
        ],
      },
    ],
  };

  useEffect(() => {
    getAdminRevnue();
  }, []);

  console.log(revenue);
  return (
    <div>
    <div
      style={{
        background: "rgb(244, 240, 242)",
        paddingLeft: "270px",
        height: "100vh",
      }}
    >
       <div className="top-banner">
        <div className="dashboard-title">
      <div className="row  mx-3 ">
        <div className="col-12 my-2  ">
          <h5 className="Analytic_heading">Revenu (Profit)</h5>
          {/* <div className=" card ms-2" style={{ width: "99%" }}>
            <ReactEcharts option={{ ...option }} />
            {/* <ReactEcharts option={{ ...option3 }} /> */}
          {/* </div>  */}
        </div>
        <div className="d-flex w-100 mt-4">
          <div className="card mx-2" style={{ width: "33.30%" }}>
            <div
              className="d-flex align-items-center "
              style={{ height: "280px" }}
            >
              <div className="w-50 ms-3">
                <h3 className="text-center Heading-revnu-cards">
                  Total Revenue
                </h3>
                <p className="ms-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="w-50">
                <ReactEcharts option={{ ...option3 }} />
              </div>
            </div>
          </div>
          {/* <div className="card mx-2" style={{ width: "33.30%" }}>
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
          </div> */}
          {/* <div className="card mx-2" style={{ width: "33.30%" }}>
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
          </div> */}
        </div>
      </div>
      </div>
      </div>
    </div>
      <AdminFooter/>
    </div>
  );
};

export default HocComponent(RevenuAdmin);
