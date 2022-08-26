import React from "react";

const Featurs = () => {
  return (
    <section class="firstsection" id="feature">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col">
            <div class="featureheading">
              <h5>Features</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-4 col-12 ">
            <div class="feature-box mb-5 text-center">
              <div class="square"></div>
              <div class="feature-content">
                <h5>Digital Profile</h5>
                <p>Feature Description</p>
              </div>
              <div class="feature-icon">
                <i class="fas fa-user"></i>
              </div>
            </div>
            <div class="feature-box mb-5 text-center">
              <div class="square"></div>
              <div class="feature-content">
                <h5>Location History</h5>
                <p>Feature Description</p>
              </div>
              <div class="feature-icon">
                <i class="fas fa-user"></i>
              </div>
            </div>
          </div>
          <div class="col col-md-4 col-12">
            <div class="featureimg">
              <img src="assets/images/appimg.png" class="img-fluid" />
            </div>
          </div>
          <div class="col col-md-4 col-12">
            <div class="feature-box mb-5 text-center">
              <div class="rsquare"></div>
              <div class="feature-content text-center">
                <h5>Pet's Medical History</h5>
                <p>Feature Description</p>
              </div>
              <div class="feature-ricon">
                <i class="fas fa-user"></i>
              </div>
            </div>
            <div class="feature-box mb-5 text-center">
              <div class="rsquare"></div>
              <div class="feature-content text-center">
                <h5>Activity Status</h5>
                <p>Feature Description</p>
              </div>
              <div class="feature-ricon">
                <i class="fas fa-user"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          {/* <!-- <div class="col "> --> */}
          <div class="feature-box text-center">
            <div class="rsquare"></div>
            <div class="feature-content text-center">
              <h5>Social Atmosphere for Pet's</h5>
              <p>Feature Description</p>
            </div>
            <div class="feature-ricon">
              <i class="fas fa-user"></i>
            </div>
          </div>
          {/* <!-- </div> --> */}
        </div>
      </div>
    </section>
  );
};

export default Featurs;
