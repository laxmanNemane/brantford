import React, { createContext, useState } from "react";

export const usersContext = createContext();

const UseContext = (props) => {
  const [spaceIdsingle, setSpcesId] = useState();
  const [spaceDetail, setSpaceDetail] = useState([]);
  const [endUserSpace, setEndUserSpace] = useState([]);

  const [cityName, setCityName] = useState();

  const [selectedProperty, setSelectedProperty] = useState([]);

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
        selectedProperty,
        setSelectedProperty,
      }}
    >
      {props.children}
    </usersContext.Provider>
  );
};

export default UseContext;
