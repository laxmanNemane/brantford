import React, { createContext, useState } from "react";

export const usersContext = createContext();

const UseContext = (props) => {
  const [spaceIdsingle, setSpcesId] = useState();

  return (
    <usersContext.Provider value={{ spaceIdsingle, setSpcesId }}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UseContext;
