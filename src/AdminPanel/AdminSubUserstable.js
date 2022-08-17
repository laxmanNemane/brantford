import React from "react";
import _ from "lodash";
import axios from "axios";
import "../Styles/Admintenants.css";
import { useEffect, useState } from "react";

const AdminUserTable = () => {
  const pageSize = 13;
  const [post, setPost] = useState("");
  const [paginatePosts, setPaginatePosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      // console.log(res.data);
      setPost(res.data);
      setPaginatePosts(_(res.data).slice(0).take(pageSize).value());
    });
  }, []);

  const pageCount = post ? Math.ceil(post.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const paginate = (pageNo) => {
    setCurrentPage(pageNo);
    const startindex = (pageNo - 1) * pageSize;
    // console.log(startindex);
    const paginatePosts = _(post).slice(startindex).take(pageSize).value();
    setPaginatePosts(paginatePosts);
  };

  return (
    <div className="mt-4 ms-2">
      <h4>Users</h4>
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
              <th>ID</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {paginatePosts &&
              paginatePosts.map((ele, index) => (
                <tr key={index}>
                  <td>{ele.id}</td>
                  <td className="User_Name_table">{ele.title}</td>
                  <td>{ele.userId}</td>
                </tr>
              ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <nav className="text-dark d-flex " style={{ margin: "0 0 0 64%" }}>
        <ul className="pagination ">
          {/* {console.log(pages)} */}
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p className="page-link" onClick={() => paginate(page)}>
                {" "}
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminUserTable;
