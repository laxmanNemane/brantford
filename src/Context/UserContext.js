import React, { createContext } from "react";

export const usersContext = createContext();

const UseContext = (props) => {
  const users = localStorage.getItem("state");
  console.log(users);

  return (
    <usersContext.Provider value={{ users }}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UseContext;
