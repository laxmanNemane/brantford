import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import HocLandingPage from "../Components/HocLandingPage";

const TermsCondition = () => {
  const [terms, setTerms] = useState([]);

  const getTermsAndConditions = () => {
    axios
      .get("http://bantford.prometteur.in/endUser/terms-conditions", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setTerms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTermsAndConditions();
  }, []);
  return (
    <div className="terms-conditions-section">
      <div className="container">
        <div className="row py-5">
          <h5 className="name ">Terms and Conditions &nbsp;:</h5>
          <div className="col-12 ">
            <div className="descriptive-term-conditions py-5">
              {terms &&
                terms.map((ele, index) => {
                  return (
                    <div key={index}>
                      <p className="little-description-brantford">
                        <span className="fw-bold fs-5 mb-3">
                          {index + 1}. {ele.title}
                        </span>{" "}
                        :
                        <br />
                        {ele.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HocLandingPage(TermsCondition);
