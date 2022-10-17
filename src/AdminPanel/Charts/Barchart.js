import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Barchart = () => {

   

    const this_week = 
    {
        options: {
          bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: "10%",
            barHeight: "10%",
            width: "10%",
          },
          dataLabels: {
            enabled: false,
          },
          chart: {
            width: "20%",
            // type: 'Line',
            id: "apexchart-example",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            show: false,
    
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: [],
            },
          },
          legend: {
            show: false,
            // position: '',
            // width: 400,
            // position: 'top',
          },
        },
        series: [
          {
            name: "Distance Traveled",
            type: "column",
            data: [440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160],
          },
          {
            name: "Time Traveled",
            type: "line",
            data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16],
          },
        ],
      }

      const last_week = 
      {
          options: {
            bar: {
              horizontal: false,
              borderRadius: 0,
              columnWidth: "10%",
              barHeight: "10%",
              width: "10%",
            },
            dataLabels: {
              enabled: false,
            },
            chart: {
              width: "50%",
              // type: 'Line',
              id: "apexchart-example",
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              show: false,
      
              categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: [],
              },
            },
            legend: {
              show: false,
              // position: '',
              // width: 400,
              // position: 'top',
            },
          },
          series: [
            {
              name: "Distance Traveled",
              type: "column",
              data: [140, 105, 414, 371, 127, 113, 401, 152, 152, 120, 157, 160],
            },
            {
              name: "Time Traveled",
              type: "line",
              data: [13, 12, 45, 27, 13, 12, 27, 11, 12, 12, 12, 16],
            },
          ],
        }

        const last_month = 
      {
          options: {
            bar: {
              horizontal: false,
              borderRadius: 0,
              columnWidth: "10%",
              barHeight: "10%",
              width: "10%",
            },
            dataLabels: {
              enabled: false,
            },
            chart: {
              width: "20%",
              // type: 'Line',
              id: "apexchart-example",
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              show: false,
      
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: [],
              },
            },
            legend: {
              show: false,
              // position: '',
              // width: 400,
              // position: 'top',
            },
          },
          series: [
            {
              name: "Distance Traveled",
              type: "column",
              data: [440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160],
            },
            {
              name: "Time Traveled",
              type: "line",
              data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16],
            },
          ],
        }

        const [data , setData] = useState(this_week);
        const changeData = (value) => {
            setData(value);
            console.log(value);
        }
      const [chartData, setChartData] = useState(data);

      useEffect(()=>{
       setData(this_week);
       changeData();
      },[])
  return (
    <div className="brant-card">
      <div className="brant-card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h6>Revenue</h6>
          </div>
          <div className="week-btn d-flex justify-content-between">
            <button className="brant-label active" onClick={()=>changeData(this_week)}>This Week</button>
            <button className="brant-label ms-3" onClick={()=>changeData(last_week)}>Last Week</button>
            <button className="brant-label ms-3" onClick={()=>changeData(last_month)}>Last Month</button>
          </div>
        </div>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={380}
        />
      </div>
    </div>
  );
};

export default Barchart;
