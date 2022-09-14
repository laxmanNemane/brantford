import axios from "axios";
import HocLandingPage from "../Components/HocLandingPage";
import React, { useEffect, useState } from "react";

const BaseUrl = "http://bantford.prometteur.in";

const TermsCondition = () => {
  const [terms, setTerms] = useState();
  const getTerms = () => {
    axios

      .get(`${BaseUrl}/endUser/terms-conditions`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setTerms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTerms();
  }, []);

  return (
    <div className="terms-conditions-section">
      <div className="container">
        <div className="row py-5">
          <h5 className="name ">Terms and Conditions &nbsp;:</h5>
          <div className="col-12 ">
            <div className="descriptive-term-conditions py-5">

              {terms.map((item, index) => {
                return (
                  <div>
                    <p className="fw-bold">{item.title}</p>
                    <p>{item.description}</p>
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
