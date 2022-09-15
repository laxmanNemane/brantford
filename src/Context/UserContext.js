import React, { createContext, useState } from "react";

export const usersContext = createContext();

const UseContext = (props) => {
  const [spaceIdsingle, setSpcesId] = useState();
  const [spaceDetail, setSpaceDetail] = useState([]);
  const [endUserSpace, setEndUserSpace] = useState([]);

  return (
    <usersContext.Provider
      value={{
        spaceIdsingle,
        setSpcesId,
        setSpaceDetail,
        spaceDetail,
        endUserSpace,
        setEndUserSpace,
      }}
    >
      {props.children}
    </usersContext.Provider>
  );
};

export default UseContext;
