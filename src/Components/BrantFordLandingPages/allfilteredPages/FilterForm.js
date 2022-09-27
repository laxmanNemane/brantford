import { use } from "echarts";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategory } from "../../../Redux/enduserSlices/enduserSlice";

const FilterForm = ({ propertyType, setpPropetrtyType }) => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const data = useSelector((state) => state.enduser.categoryEndUser);
  console.log("filtr form", data);
  const [appliedFilter, setAppliedFilter] = useState([]);

  const toggleClass = (id, typedate) => {
    // setActive(id ? !isActive : "");
    setpPropetrtyType(id);
    setAppliedFilter([...appliedFilter, typedate]);
  };
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, [appliedFilter]);

  const onTypeFilter = (id, typedate) => {};

  const onDeleteAppliedFilter = (id) => {
    setpPropetrtyType("");
    setAppliedFilter("");
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
                  {/* <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                    {appliedFilter.length !== 0 ? (
                      <li className="appliedtag ">
                        {" "}
                        {appliedFilter.categary}
                        <span className="ms-5">
                          <i
                            className="fa-sharp fa-solid fa-xmark"
                            onClick={() =>
                              onDeleteAppliedFilter(appliedFilter.id)
                            }
                          ></i>
                        </span>
                      </li>
                    ) : (
                      "No applied filter"
                    )}
                  </div> */}
                  {/* <div className="col-6 my-2">

                    <li className="appliedtag ">applied tag <span className="ms-5"><i class="fa-sharp fa-solid fa-xmark"></i></span></li>
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
              <li className="my-2"> below 6000</li>
              <li className="my-2">6000 to 10000</li>
              <li className="my-2">10000 to 180000</li>
              <li className="my-2"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
