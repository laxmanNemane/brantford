import React, { createContext, useState } from "react";

export const usersContext = createContext();

const UseContext = (props) => {
  const [spaceIdsingle, setSpcesId] = useState();
  const [spaceDetail, setSpaceDetail] = useState([]);
  const [endUserSpace, setEndUserSpace] = useState([]);

  const [cityName, setCityName] = useState();

  const [searchArray, setSearchArray] = useState();
  const [filterRange, setFilterRange] = useState();

  return (
    <usersContext.Provider
      value={{
        spaceIdsingle,
        setSpcesId,
        setSpaceDetail,
        spaceDetail,
        endUserSpace,
        setEndUserSpace,
        cityName,
        setCityName,
        searchArray,
        setSearchArray,
        filterRange,
        setFilterRange,
      }}
    >
      {props.children}
    </usersContext.Provider>
  );
};

export default UseContext;
