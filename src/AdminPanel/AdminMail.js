import React from "react";
import AdminFooter from "./AdminFooter";
import HocComponent from "../Components/HocComponent";
import { Link, NavLink } from "react-router-dom";
import { BsInbox } from "react-icons/bs";
import { BiStar } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

const AdminMail = () => {
  return (
    <div>
      <div
        className="main-section"
        style={{
          background: "rgb(244, 240, 242)",
        }}
      >
        <div className="">
          <div className="top-banner">
            <div className="dashboard-title">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">Mail</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Mail</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div className="brant-card">
                      <div className="brant-card-body">
                        <div className="brant-title">
                          <div>
                            <button className="Buttons_dashbord w-100">
                              Compose
                            </button>
                          </div>
                        </div>

                        <ul className="adminCharList">
                          <li className="mt-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <BsInbox />
                              <span className="ms-3">Primary(31)</span>
                            </div>
                          </li>
                          <li className="mt-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <BsInbox />
                              <span className="ms-3">Social(17)</span>
                            </div>
                          </li>
                          <li className="mt-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <BsInbox />
                              <span className="ms-3">Promotions(53)</span>
                            </div>
                          </li>
                          <li className="mt-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <BsInbox />
                              <span className="ms-3">Started</span>
                            </div>
                          </li>
                          <li className="mt-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <BsInbox />
                              <span className="ms-3">Sent Mails</span>
                            </div>
                          </li>

                          <li className="mt-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <BsInbox />
                              <span className="ms-3">Drafts</span>
                            </div>
                          </li>
                          <li className="mt-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <BsInbox />
                              <span className="ms-3">Span</span>
                            </div>
                          </li>

                          <li className="mt-4">
                            <div className="d-flex justify-content-start align-items-center">
                              <BsInbox />
                              <span className="ms-3">Trash</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="brant-card">
                      <div className="brant-card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>Andrew Symn</h6>
                          <div className="w-50">
                            <input type="text" className="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="brant-card">
                      <div className="brant-card-body">
                        <table className="w-100">
                          <thead>
                            <tr>
                              <th>
                                <input type="radio" name="" id="" />
                              </th>
                              <th>Name</th>
                              <th>Status</th>
                              <th>Details</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>

                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  type="radio"
                                  name=""
                                  id=""
                                /> <BiStar />{" "}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "" }}
                                  />
                                  <p className="ms-2">
                                    Mark <br /> Wiyns
                                  </p>
                                </div>
                              </td>
                              <td>Money Receipt</td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipsicing elit, se...
                              </td>
                              <td> 12:22 PM</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="d-flex align-items-center justify-content-between">
                          <p>Showing 1 to 10 of 10 entries</p>
                          <div>
                            <BiLeftArrow />
                            <span className="Buttons_dashbord mx-3">1</span>
                            <BiRightArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default HocComponent(AdminMail);
