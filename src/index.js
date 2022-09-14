import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Assets/CSS/Admin.css";
import "./Assets/CSS/brantFord.css";
import App from "./App";
import "antd/dist/antd.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import UserContext from "./Context/UserContext";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <ToastContainer position="top-right" size="20px" autoClose={2000} />
    <UserContext>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContext>
  </Fragment>
);
