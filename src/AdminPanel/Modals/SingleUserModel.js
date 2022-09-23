import { Modal } from "antd";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";

const SingleUserModel = ({ show, setShow, userDetails }) => {
  console.log(show);
  console.log(userDetails);

  return (
    <Modal
      visible={show}
      footer={false}
      onCancel={() => setShow(false)}
      onOk={() => setShow(false)}
    >
      {/* <p>{userDetails.name}</p> */}
      <p className="name">Name: {userDetails.name}</p>
      {/* <p>Id: {userDetails.id}</p> */}
      <p>
        {" "}
        <MdEmail /> Email: <span className="user-details ms-3">{userDetails.email}</span>{" "}
      </p>
      <p>
        {" "}
        <FaAddressBook/> Address: <span className="user-details ms-3">{userDetails.address}</span>
      </p>
      <p>
      <AiOutlineProfile/> Profile: <span className="user-details ms-3">{userDetails.profile}</span>
      </p>
      <p>
      <BsCalendarDate/>  Crerated : <span className="user-details ms-3">{userDetails.createdAt}</span>
      </p>
    </Modal>
  );
};

export default SingleUserModel;
