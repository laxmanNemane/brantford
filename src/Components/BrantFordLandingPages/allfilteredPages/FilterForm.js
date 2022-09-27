import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCategory } from "../../../Redux/enduserSlices/enduserSlice";

const FilterForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.enduser.categoryEndUser);
  console.log("filtr form", data);
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);
  return <div></div>;
};

export default FilterForm;
