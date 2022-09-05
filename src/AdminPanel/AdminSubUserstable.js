import React from "react";
import _ from "lodash";
import axios from "axios";
import "../Styles/Admintenants.css";
import { useEffect, useState } from "react";

const BaseUrl = "http://bantford.prometteur.in";
const AdminUserTable = () => {
  // const pageSize = 13;
  const [post, setPost] = useState([]);
  // const [paginatePosts, setPaginatePosts] = useState();
  const [endUser, SetEndUser] = useState([]);
  const [propertyOwner ,SetPropertyOwner] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [userCount, setUserCount] = useState();

  const viewUser = (id) =>{
    axios.get(`${BaseUrl}/adminDashboard/single-propertyOwner?id=${id}`, {headers: {
      Authorization: localStorage.getItem("admin_token")

    }}).then((res)=>{console.log(res)})
    .catch((err)=> {console.log(err)})
  }


  const propertyOwners = () => {

    axios
      .get(`${BaseUrl}/adminDashboard/all-propertyOwners`, {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        SetPropertyOwner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const endusers = () => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-endusers`, {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        SetEndUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    axios
      .get(`${BaseUrl}/adminDashboard/all-users`, {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        setUserCount(res.data.length);
        // setPaginatePosts(_(res.data).slice(0).take(pageSize).value());
      })
      .catch((err) => {
        console.log(err);
      });

      endusers();
      propertyOwners();
  }, []);

  // const pageCount = post ? Math.ceil(post.length / pageSize) : 0;
  // if (pageCount === 1) return null;
  // const pages = _.range(1, pageCount + 1);

  // const paginate = (pageNo) => {
  //   setCurrentPage(pageNo);
  //   const startindex = (pageNo - 1) * pageSize;
  //   // console.log(startindex);
  //   const paginatePosts = _(post).slice(startindex).take(pageSize).value();
  //   setPaginatePosts(paginatePosts);
  // };

  return (
    <div>
      
      <div className="mt-4 ms-2">
        <h5 className="Analytic_heading">All Users</h5>
        <div
          className="table table-responsive me-auto ms-2"
          style={{ width: "99%", margin: "0 20px 0 0" }}
        >
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
                {/* <th>Role</th> */}
              </tr>
            </thead>
            <tbody>
              {post.map((ele, index) => (
                <tr className="" key={index}>
                  <td className="table-td">{ele.id}</td>
                  <td className="table-td">{ele.name}</td>
                  <td className="table-td">{ele.email}</td>
                  {/* <td className="table-td">{ele.profile}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* End User   */}
      <div className="mt-4 ms-2">
        <h5 className="Analytic_heading">End Users</h5>
        <div
          className="table table-responsive me-auto ms-2"
          style={{ width: "99%", margin: "0 20px 0 0" }}
        >
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
                {/* <th>Role</th> */}
              </tr>
            </thead>
            <tbody>
              {endUser.map((ele, index) => (
                <tr className="" key={index}>
                  <td className="table-td">{ele.id}</td>
                  <td className="table-td">{ele.name}</td>
                  <td className="table-td">{ele.email}</td>
                  {/* <td className="table-td">{ele.profile}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="mt-4 ms-2">
        <h5 className="Analytic_heading">Property Owners</h5>
        <div
          className="table table-responsive me-auto ms-2"
          style={{ width: "99%", margin: "0 20px 0 0" }}
        >
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
                {/* <th>Role</th> */}
              </tr>
            </thead>
            <tbody>
              {propertyOwner.map((ele, index) => (
                <tr className="" key={index}>
                  <td className="table-td">{ele.id}</td>
                  <td className="table-td">{ele.name}</td>
                  <td className="table-td">{ele.email}</td>
                  <td><button className="" onClick={()=>viewUser(ele.id)}>view</button></td>
                  {/* <td className="table-td">{ele.profile}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AdminUserTable;
