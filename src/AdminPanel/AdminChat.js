import React from "react";
import AdminFooter from "./AdminFooter";
import HocComponent from "../Components/HocComponent";
import { Link, NavLink } from "react-router-dom";

const AdminChat = () => {
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
                    <h3 className="">Chat</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Chat</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-md-5">
                    <div className="brant-card">
                      <div className="brant-card-body">
                        <div className="brant-title">
                          <h6>Chat List</h6>
                        </div>
                        <div className="input-field ">
                          <input
                            type="text"
                            className="w-100"
                            placeholder="Search Content here..."
                          />
                        </div>
                        <ul className="adminCharList">
                          <li className="mt-4">
                            <NavLink
                              to="/"
                              className="d-flex justify-content-between"
                            >
                              <div className="msg_description d-flex">
                                <div className="msg-photo me-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "50%" }}
                                  />
                                </div>
                                <div className="msg-info">
                                  <h4>Travor james</h4>
                                  <p>i know you are doing great</p>
                                </div>
                              </div>
                              <div className="msg_time">
                                <span>28th Nov</span>
                              </div>
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/"
                              className="d-flex align-items-center justify-content-between"
                            >
                              <div className="msg_description d-flex">
                                <div className="msg-photo me-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "50%" }}
                                  />
                                </div>
                                <div className="msg-info">
                                  <h4>Travor james</h4>
                                  <p>i know you are doing great</p>
                                </div>
                              </div>
                              <div className="msg_time">
                                <span>28th Nov</span>
                              </div>
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/"
                              className="d-flex align-items-center justify-content-between"
                            >
                              <div className="msg_description d-flex">
                                <div className="msg-photo me-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "50%" }}
                                  />
                                </div>
                                <div className="msg-info">
                                  <h4>Travor james</h4>
                                  <p>i know you are doing great</p>
                                </div>
                              </div>
                              <div className="msg_time">
                                <span>28th Nov</span>
                              </div>
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/"
                              className="d-flex align-items-center justify-content-between"
                            >
                              <div className="msg_description d-flex">
                                <div className="msg-photo me-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "50%" }}
                                  />
                                </div>
                                <div className="msg-info">
                                  <h4>Travor james</h4>
                                  <p>i know you are doing great</p>
                                </div>
                              </div>
                              <div className="msg_time">
                                <span>28th Nov</span>
                              </div>
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/"
                              className="d-flex align-items-center justify-content-between"
                            >
                              <div className="msg_description d-flex">
                                <div className="msg-photo me-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className="mb"
                                    style={{ borderRadius: "50%" }}
                                  />
                                </div>
                                <div className="msg-info">
                                  <h4>Travor james</h4>
                                  <p>i know you are doing great</p>
                                </div>
                              </div>
                              <div className="msg_time">
                                <span>28th Nov</span>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="brant-card">
                      <div className="brant-card-body">
                        <div className=" msg-sender align-items-center justify-content-between">
                          <div className="msg_description d-flex mb-3">
                            <div className="msg-photo  me-4">
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                alt=""
                                width="40"
                                height="40"
                                className="mb"
                                style={{ borderRadius: "" }}
                              />
                            </div>
                            <div className="msg-info">
                              <h4>Travor james</h4>
                              <p> Yesterday at 6.33 pm </p>
                            </div>
                          </div>

                          <div className="sender-message">
                            <div className="message-content">
                              <p>
                                Dear KK, <br />
                                Thank you for your update. <br />
                                We do not sell or share your details without
                                your permission. Find out more in our Privacy
                                Policy. Your username, email and password can be
                                updated via your Codepixar Account settings.{" "}
                                <br />
                                Regards,
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="msg-reciever align-items-center  mt-4">
                          <div className="msg_description d-flex justify-content-end mb-3">
                            <div className="msg-photo  me-4">
                              <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                                alt=""
                                width="40"
                                height="40"
                                className="mb"
                                style={{ borderRadius: "" }}
                              />
                            </div>
                            <div className="msg-info">
                              <h4>Agatha Kristy</h4>
                              <p>Yesterday at 6.33 pm </p>
                            </div>
                          </div>

                          <div className="reciever-message">
                            <div className="rec-message-content">
                              <p>
                                Dear KK, <br />
                                Thank you for your update. <br />
                                We do not sell or share your details without
                                your permission. Find out more in our Privacy
                                Policy. Your username, email and password can be
                                updated via your Codepixar Account settings.{" "}
                                <br />
                                Regards,
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="chat-input w-100 mt-4">
                          <form
                            action=""
                            className="d-flex align-items-center w-100"
                          >
                            <input
                              type="text"
                              placeholder="write your message"
                              className="w-100"
                            />
                            <button className="btn btn-primary btn-lg px-3">
                              Send
                            </button>
                          </form>
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

export default HocComponent(AdminChat);
