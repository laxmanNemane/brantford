import { Modal } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllCategories } from "../Redux/PropertyOwnerSlices/allcategoriesSlice";
import { TimePicker } from "antd";
import moment from "moment";
// import type { Moment } from 'moment';
import { DatePicker, Space } from "antd";
import { DatePickerProps } from "antd/es/date-picker";
import { RangePickerProps } from "antd/es/date-picker";

const BaseUrl = "http://bantford.prometteur.in";

console.log(parseInt("2"));

const AppointmentModel = ({
  showStatus,
  setshowStatus,
  spaceId,
  element,
  cid,
}) => {

    const [title, setTitle] = useState("");
    const [dateTime, setDateTime] = useState();

  const categories = useSelector(
    (state) => state.POCategories.AllPropertyOwnerCategories
  );
//   console.log(categories);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values.categaryId);
    if (spaceId) {
      // UpdateSpace
      console.log(values);
      axios
        .patch(`${BaseUrl}/admin/update-space?id=${spaceId}`, values, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log(res.data.spaces);
          toast.success("Space updated successfully");
          // showSpacesPropertyOwner();
          setshowStatus(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error("space is not updated!");
        });
      console.log(values);
    } else {
      // Addspace
      console.log(values);
      axios
        .post(
          `${BaseUrl}/admin/add-space?categaryId=${parseInt(
            values.categaryId
          )}`,
          values,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          console.log(res.data.spaces);
          toast.success("Space added successfully");
          // showSpacesPropertyOwner();
          setshowStatus(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Space not added");
        });
    }
  };

  const submitAppointment = (e ) => {
    e.preventDefault();
        console.log(title, dateTime);
        console.log(element)
        const userdetail = localStorage.getItem("user")
        console.log(userdetail);
        // console.log(userdetail.name);
        // console.log(userdetail.email);
        setshowStatus(false)

  }

  const onChange = (value) => {
    console.log(value);
    console.log(value._d);
    setDateTime(value._d)

  };
  const onOk = (values) => {
    console.log("onOk: ", values);
  };

  useEffect(() => {
    dispatch(FetchAllCategories());
  }, []);

  const handleOk = () => {
    setshowStatus(false);
  };

  const handleCancel = () => {
    setshowStatus(false);
  };
  return (
    <>
      <Modal
        title="Book an Appointment"
        open={showStatus}
        onOk={handleOk}
        width={650}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
      >
        <div className="container text-center">
            <form onSubmit={(e)=>submitAppointment(e)}>
        <div className="p-2 mb-3 w-100">
            <label className=" me-3">Enter a title:</label>
            <input type="text" className="w-50" onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        
        <Space direction="vertical" size={12}>
          <DatePicker showTime onChange={onChange} onOk={onOk} />
        </Space>
        <button type="submit"  className="ms-3 brant-btn-blue">Confirm appointment</button>
        </form>
        </div>

      </Modal>
    </>
  );
};

export default AppointmentModel;

// space: "coworking space in Pune",
// manager_name: "laxaman",
// manager_email: "lakhsn@gmail.com",
// manager_contactNumber: 8967452356,
// seating_capacity: 30,
// cabin_capacity: 10,
// total_desks: 50,
// address: "pume maharashtra 411109",
// city: "hinjewadi",
// price: "6000",
// property_status: "Rent",
// description: "coworking space for Rent",
// working_days: "mondayToFriday",
// property_id: 2134,
