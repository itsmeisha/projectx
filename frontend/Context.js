import React, { createContext } from "react";

export const contextProvider = createContext();

const Context = ({ children }) => {
  return (
    <contextProvider.Provider value={"Context"}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
