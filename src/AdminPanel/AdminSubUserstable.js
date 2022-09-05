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

  const [currentPage, setCurrentPage] = useState(1);
  const [userCount, setUserCount] = useState()

 

  useEffect(() => {

    axios.get(`${BaseUrl}/adminDashboard/all-users`,{headers:{
      Authorization: localStorage.getItem("admin_token")
    }}).then((res) => {
      console.log(res.data);
      setPost(res.data);
      setUserCount(res.data.length)
      // setPaginatePosts(_(res.data).slice(0).take(pageSize).value());
    });
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
    <div className="mt-4 ms-2">
      <h5 className="Analytic_heading"> Users</h5>
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

            {
             post.map((ele, index) => (
                <tr className=""  key={index}>
                  <td  className="table-td" >{ele.id}</td>
                  <td className="table-td">{ele.name}</td>
                  <td className="table-td">{ele.email}</td>
                  {/* <td className="table-td">{ele.profile}</td> */}
                 
                  
                </tr>
              ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserTable;
