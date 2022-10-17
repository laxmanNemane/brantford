import React from "react";

const Featurs = () => {
  return (
    <section className="firstsection" id="feature">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col">
            <div className="featureheading">
              <h5>Features</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-4 col-12 ">
            <div className="feature-box mb-5 text-center">
              <div className="square"></div>
              <div className="feature-content">
                <h5>Digital Profile</h5>
                <p>Feature Description</p>
              </div>
              <div className="feature-icon">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="feature-box mb-5 text-center">
              <div className="square"></div>
              <div className="feature-content">
                <h5>Location History</h5>
                <p>Feature Description</p>
              </div>
              <div className="feature-icon">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-12">
            <div className="featureimg">
              <img src="assets/images/appimg.png" className="img-fluid" />
            </div>
          </div>
          <div className="col col-md-4 col-12">
            <div className="feature-box mb-5 text-center">
              <div className="rsquare"></div>
              <div className="feature-content text-center">
                <h5>Pet's Medical History</h5>
                <p>Feature Description</p>
              </div>
              <div className="feature-ricon">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="feature-box mb-5 text-center">
              <div className="rsquare"></div>
              <div className="feature-content text-center">
                <h5>Activity Status</h5>
                <p>Feature Description</p>
              </div>
              <div className="feature-ricon">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <!-- <div className="col "> --> */}
          <div className="feature-box text-center">
            <div className="rsquare"></div>
            <div className="feature-content text-center">
              <h5>Social Atmosphere for Pet's</h5>
              <p>Feature Description</p>
            </div>
            <div className="feature-ricon">
              <i className="fas fa-user"></i>
            </div>
          </div>
          {/* <!-- </div> --> */}
        </div>
      </div>
    </section>
  );
};

export default Featurs;
