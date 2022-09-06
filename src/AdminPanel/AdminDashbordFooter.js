import React from "react";
import { FcAdvertising, FcGlobe } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const AdminDashbordFooter = () => {
  return (
    <div className="row dashbord_footer ms-1  ">
      <div className="col-9  d-flex">
        <span className="text-center ">
          <span className="nav-item mt  dropdown-3" style={{ border: "none" }}>
            <Link
              className="nav-link dropdown-toggle text-dark text-decoration-none"
              to="/"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FcAdvertising className="fs-4" />
            </Link>
            <span
              className="dropdown-menu "
              aria-labelledby="navbarDropdown"
              style={{ width: "450px", height: "400px", border: "none" }}
            >
              <div
                className=" text-white py-2 "
                style={{ borderRadius: "6px 6px 0 0", background: "#D782CD" }}
              >
                <h5 className="text-center text-white fw-bold">
                  Notifications
                </h5>
                <p className="text-center">You have 20 messages</p>
              </div>
              {/* <NavLink to="/"> */}
              <button className="btn btn-outline-primary  ms-4 mx-2    mt-3">
                Pending &nbsp; <Badge>0</Badge>
              </button>
              <button className="btn btn-outline-primary mx-2  mt-3">
                Approved &nbsp; <Badge>0</Badge>
              </button>
              <button className="btn btn-outline-primary mx-2  mt-3">
                Success &nbsp; <Badge>0</Badge>
              </button>
              {/* </NavLink> */}
            </span>
          </span>
        </span>
        {/* langauge */}
        <span>
          <span className="nav-item mt  dropdown-3" style={{ border: "none" }}>
            <Link
              className="nav-link dropdown-toggle text-dark text-decoration-none"
              to="/"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FcGlobe className="fs-4" />
            </Link>
            <span
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{ width: "250px", height: "350px", border: "none" }}
            >
              <div
                className=" text-white py-2 "
                style={{ borderRadius: "6px 6px 0 0", background: "#D782CD" }}
              >
                <p className="text-center fw-bold mt-2">choose langauge</p>
              </div>
              <ul className="list-unstyled mt-3">
                <li className="my-2">
                  <span className="px-3 me-3">
                    <img
                      src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                      alt=""
                      width={25}
                      height={25}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                  USA
                </li>
                <li className="my-2">
                  <span className="px-3 me-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg"
                      alt=""
                      width={25}
                      height={25}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                  Switzerland
                </li>
                <li className="my-2">
                  <span className="px-3 me-3">
                    <img
                      src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                      alt=""
                      width={25}
                      height={25}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                  France
                </li>
                <li className="my-2">
                  <span className="px-3 me-3">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg=="
                      alt=""
                      width={25}
                      height={25}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                  India
                </li>
                <span>&nbsp; other -</span>
                <li className="my-2">
                  <span className="px-3 me-3">
                    <img
                      src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                      alt=""
                      width={25}
                      height={25}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                  France
                </li>
                <li className="my-2">
                  <span className="px-3 me-3">
                    <img
                      src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                      alt=""
                      width={25}
                      height={25}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                  India
                </li>
              </ul>
            </span>
          </span>
        </span>
      </div>
      <div className="col-3 text-center">
        <span>
          <span className="nav-item mt  dropdown-3" style={{ border: "none" }}>
            <Link
              className="nav-link dropdown-toggle footer_menu_option text-decoration-none "
              to="/"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Privacy Policy
            </Link>
            <span
              className="dropdown-menu px-3 my-2"
              aria-labelledby="navbarDropdown"
            >
              Add Terms&Conditions
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default AdminDashbordFooter;
