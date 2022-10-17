import React, { createContext, useState } from "react";

export const contextProvider = createContext();

const Context = ({ children }) => {
  // ------------------------------------------------------------------------------------
  // this is the auth popup status whose value can be :
  // registeration
  // login
  // false
  const [status, setStatus] = useState(false);

  return (
    <contextProvider.Provider value={{ auth: { popup: [status, setStatus] } }}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
