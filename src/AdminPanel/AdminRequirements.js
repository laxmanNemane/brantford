import React, { useEffect, useState } from "react";
import HocComponent from "../Components/HocComponent";
import tenantsUser from "../Assets/Images/tenates.svg";
import Users from "../Assets/Images/user.svg";
import ResquestUser from "../Assets/Images/request.svg";
import "../Styles/Admintenants.css";
import AdminUserTable from "./AdminSubUserstable";
import { AiOutlineUserSwitch, AiOutlineTeam } from "react-icons/ai";
import { BsArrowDownLeftCircle } from "react-icons/bs";
import axios from "axios";


const BaseUrl = "http://bantford.prometteur.in";

function AdminRequirements() {
    const [post, setPost] = useState([]);
    const [userCount, setUserCount] = useState()


    useEffect(() => {

        axios.get(`${BaseUrl}/adminDashboard/all-requirements`,{headers:{
          Authorization: localStorage.getItem("admin_token")
        }}).then((res) => {
          console.log(res.data);
          setPost(res.data);
          setUserCount(res.data.length)
          // setPaginatePosts(_(res.data).slice(0).take(pageSize).value());
        });
      }, []);



  return (
    <div
      style={{
        background: "rgb(244, 240, 242)",
        padding: "0",
        height: "100vh",
      }}
    >
      <div className="row  mx-3  d-flex">
        <div className="col-12 my-2">
          <h5 className="Analytic_heading">All requirements</h5>
        </div>

        <div className="mt-4 ms-2">
          <div
            className="table table-responsive me-auto ms-2"
            style={{ width: "99%", margin: "0 20px 0 0" }}
          >
            {/* <div className="card">
                <p>categary_of_workspace:private office</p>
                <p>city_of_workspace:Mumbai</p>
                <p>contact no: 787878887</p>
                <p>email id: use1@gmial.com</p>
                <p>message: i want working office as soon as possible</p>
                <p>name: user 1</p>
                <p>no of person: 50</p>
            </div> */}
            <table
              id="dtDynamicVerticalScrollExample"
              className="table  table-bordered table-sm"
              cellSpacing="0"
              width="90%"
              style={{ overflowY: "auto", height: "400px" }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Category of workSpace</th>
                  <th>City of workSpace</th>
                  <th>No of Person</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {post.map((ele, index) => (
                  <tr className="" key={index}>
                    <td className="table-td">{ele.id}</td>
                    <td className="table-td">{ele.name}</td>
                    <td className="table-td">{ele.email_id}</td>
                    <td className="table-td">{ele.contact_number}</td>
                    <td className="table-td">{ele.categary_of_workspace}</td>
                    <td className="table-td">{ele.city_of_workspace}</td>
                    <td className="table-td">{ele.number_of_persons}</td>
                    <td className="table-td">{ele.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HocComponent(AdminRequirements);
