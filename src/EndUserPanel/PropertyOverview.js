import { Modal } from "antd";
import React, { useContext } from "react";
import office1 from "../Assets/Images/office.avif";
import office2 from "../Assets/Images/office1.avif";
import office3 from "../Assets/Images/office2.avif";
import meetingRoom from "../Assets/Images/meeting.avif";
import canteenOffice from "../Assets/Images/canteen.avif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../Context/UserContext";

const PropertyOverview = ({ isModalVisible, setIsModalVisible }) => {
  const navigate = useNavigate();

  const { setEndUserSpace, endUserSpace } = useContext(usersContext);
  console.log(endUserSpace);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const setNewSpace = () => {
    navigate("/office-detail");
  };
  return (
    <>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
        width={900}
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <div className="carousel-description">
                <Carousel>
                  <div>
                    <img src={office1} alt="ofice1" className="main-image" />
                    <p className="legend">Office </p>
                  </div>
                  <div>
                    <img
                      src={office2}
                      alt="office-image2"
                      className="main-image"
                    />
                    <p className="legend">Office </p>
                  </div>
                  <div>
                    <img
                      src={office3}
                      alt="office-image3"
                      className="main-image"
                    />
                    <p className="legend">Office </p>
                  </div>
                  <div>
                    <img
                      src={meetingRoom}
                      alt="office-image4"
                      className="main-image"
                    />
                    <p className="legend">Meeting Room </p>
                  </div>
                  <div>
                    <img src={canteenOffice} alt="" className="main-image" />
                    <p className="legend">Canteen </p>
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="col-6">
              <div className="carousel-description">
                <div className="property-description-lannding-modal">
                  {/* <h5 className="name">{endUserSpace.space}</h5> */}
                  {/* <p className="sub-heading pb-2">{endUserSpace.address}</p> */}
                  <hr />
                  <h5 className="name fs-4 py-2">
                    {/* ₹<span className="fw-bold mx-1">{endUserSpace.price}</span> */}
                    /Seat/Month
                  </h5>
                  <hr />
                  <p className="sub-heading pb-3" style={{ lineHeight: "1.7" }}>
                    This elegant office space design is a super-premium office
                    space. It gives a 360-degree view of Noida and creates a
                    fourth-generation ambiance...
                  </p>
                  <div className="button text-end mt-5">
                    <button
                      className="btn-for-all-landpage mt-5  "
                      onClick={() => setNewSpace()}
                    >
                      <BsArrowRight className="ms-2" />
                      Detail
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PropertyOverview;
