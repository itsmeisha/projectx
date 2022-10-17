import React, { createContext, useState } from "react";
import { Animated } from "react-native";
import { useFonts } from "expo-font";
export const contextProvider = createContext();

const Context = ({ children }) => {
  // -----------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------
  // Auth section  -------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------
  // // this is the auth popup status whose value can be :
  // registeration
  // login
  // false
  const [status, setStatus] = useState(false);
  // the auth animation states
  const popupAnim = useState(new Animated.Value(-1000))[0];
  const logoAnim = useState(new Animated.Value(-1000))[0];

  return (
    <contextProvider.Provider
      value={{
        auth: { popup: [status, setStatus], animation: [logoAnim, popupAnim] },
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
