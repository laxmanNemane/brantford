import { use } from "echarts";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchAllCategory } from "../../../Redux/enduserSlices/enduserSlice";

const FilterForm = ({ propertyType, setpPropetrtyType, price, setPrice }) => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const data = useSelector((state) => state.enduser.categoryEndUser);
  console.log("filtr form", data);
  const [appliedFilter, setAppliedFilter] = useState([]);

  const toggleClass = (id, typedate) => {
    // setActive(id ? !isActive : "");
    let c = appliedFilter.findIndex((element) => element.id === typedate.id);
    if (c >= 0) {
      toast.warning("this property already added");
    } else {
      // setShow(true);
      if (appliedFilter.length < 4) {
        setAppliedFilter([...appliedFilter, typedate]);
        toast.success("successfully added this property");
      } else {
        // alert("you can add only 4 proprty")
        toast.warning("Minimun 4 items you can compare ");
        setAppliedFilter([...appliedFilter]);
      }
    }
    // setpPropetrtyType(id);
    setpPropetrtyType([...appliedFilter, typedate]);
  };
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);

  const onTypeFilter = (id, typedate) => {};

  const onDeleteAppliedFilter = (id) => {
    console.log("ondelete id", id);
    const newList = appliedFilter.filter((val) => {
      return val.id === id;
    });
    setAppliedFilter(newList);
  };

  const onPriceFilter = (price1) => {
    console.log("price click", price1);
    setPrice(price1);
  };

  const onLocationFilter = (val) => {
    console.log("Location", val);
  };

  console.log("applied filetre data ", appliedFilter);
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-12">
            <div className="col-12">
              <p className="name">Applied Filter</p>
              <ul className="list-unstyled">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <ul></ul>
                    {appliedFilter.length !== 0
                      ? appliedFilter.map((val, index) => {
                          return (
                            <li key={index} className="appliedtag my-2">
                              {val.categary}{" "}
                              <i
                                class="fa-sharp fa-solid fa-xmark"
                                onClick={() => onDeleteAppliedFilter(val.id)}
                              ></i>
                            </li>
                          );
                        })
                      : "No filter records"}
                  </div>
                  {/* <div className="col-6 my-2">

                    <li >applied tag <span className="ms-5"><i class="fa-sharp fa-solid fa-xmark"></i></span></li>
                  </div>
                  <div className="col-6 my-2">

                    <li className="appliedtag ">applied tag <span className="ms-5"><i class="fa-sharp fa-solid fa-xmark"></i></span></li>
                  </div>*/}
                </div>
              </ul>
            </div>

            <p className="name">Property Type</p>
            {data.map((val, index) => {
              return (
                <ul key={index} className="list-unstyled">
                  <li
                    // onClick={() => onTypeFilter(val.id, val)}
                    style={{ cursor: "pointer", fontSize: "16px" }}
                    // className={isActive ? "text-dark" : "text-danger"}
                    onClick={() => toggleClass(val.id, val)}
                  >
                    {val.categary}
                  </li>
                </ul>
              );
            })}

            <p className="name">Price</p>
            <ul className="list-unstyled">
              <li className="my-2" onClick={() => onPriceFilter(6000)}>
                {" "}
                below 6000
              </li>
              <li className="my-2" onClick={() => onPriceFilter(10000)}>
                6000 to 10000
              </li>
              <li className="my-2" onClick={() => onPriceFilter(18000)}>
                10000 to 180000
              </li>
              <li className="my-2" onClick={() => onPriceFilter(240000)}>
                above 240000
              </li>
            </ul>

            <p className="name">Pune</p>
            <ul className="list-unstyled">
              <li className="my-2" onClick={() => onLocationFilter("Pune")}>
                {" "}
                Pune
              </li>
              <li className="my-2" onClick={() => onLocationFilter("Mumbai")}>
                Mumbai
              </li>
              <li
                className="my-2"
                onClick={() => onLocationFilter("Aurangbad")}
              >
                Aurangbad
              </li>
              <li className="my-2" onClick={() => onLocationFilter("Nashik")}>
                Nashik
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
