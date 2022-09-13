import React, { createContext, useState } from "react";

export const usersContext = createContext();

const UseContext = (props) => {
  const [spaceIdsingle, setSpcesId] = useState();
  const [spaceDetail, setSpaceDetail] = useState([]);

  return (
    <usersContext.Provider
      value={{ spaceIdsingle, setSpcesId, setSpaceDetail, spaceDetail }}
    >
      {props.children}
    </usersContext.Provider>
  );
};

export default UseContext;
