import React from "react";
import AdminFooter from "./AdminFooter";
import HocComponent from "../Components/HocComponent";
import { Link, NavLink } from "react-router-dom";
import { BsInbox } from "react-icons/bs";
import { BiStar } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminMarket = () => {
  return (
    <div>
      <div
        className="main-section"
        style={{
          background: "rgb(244, 240, 242)",
        }}
      >
        <div className="mb-5">
          <div className="top-banner">
            <div className="dashboard-title">
              <div className="row align-items-center ">
                <div className="col-lg-8">
                  <div className="brant-title">
                    <h3 className="">Market</h3>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a>Home</a>
                      </li>
                      <li className="breadcrumb-item active">Market</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4 text-end"></div>
              </div>
            </div>

            <div className="adminChat-container mx-4">
              <div className="container">
                <div className="brant-card">
                  <div className="brant-card-body">
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="Buttons_dashbord mx-3">Buy</button>
                      <button className="Buttons_dashbord mx-3">Rent</button>
                    </div>
                  </div>
                </div>

                <div className="market-table">
                  <div className="brant-card">
                    <div className="brant-card-body">
                      <div className="market-table">
                        <table className="w-100">
                          <thead>
                            <tr>
                              <th>City Name</th>
                              <th colSpan="2">Rates</th>
                            </tr>
                            <tr>
                              <th></th>
                              <th>Price Range (Rs./Sq-ft)</th>
                              <th>Average Price (Rs./Sq-ft)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Pune</td>
                              <td>8,653-10,572</td>
                              <td>9,612</td>
                            </tr>
                            <tr>
                              <td>Mumbai</td>
                              <td>19,246-31,430 </td>
                              <td>25,338 </td>
                            </tr>
                            <tr>
                              <td>Bangalore</td>
                              <td>4,780-7,767 </td>
                              <td>6,273 </td>
                            </tr>
                            <tr>
                              <td>New Delhi</td>
                              <td>8,653-10,572</td>
                              <td>9,612</td>
                            </tr>
                            <tr>
                              <td>Hydrabad</td>
                              <td>5,653-10,572</td>
                              <td>1,612</td>
                            </tr>
                            <tr>
                              <td>Pune</td>
                              <td>8,653-10,572</td>
                              <td>9,612</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <Editor
                          // editorState={state.editorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          wrapperStyle={{
                            width: 800,
                            border: "1px solid black",
                          }}
                        />
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

export default HocComponent(AdminMarket);
