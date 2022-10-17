import React, { createContext, useState } from "react";
import { Animated } from "react-native";
import { useFonts } from "expo-font";
export const contextProvider = createContext();

const Context = ({ children }) => {
  //
  //
  //
  // *****************Auth section*****************
  //
  //

  // // this is the auth popup status whose value can be :
  // registeration
  // login
  // false
  const [status, setStatus] = useState(false);
  // the auth animation states
  const popupAnim = useState(new Animated.Value(-1000))[0];
  const logoAnim = useState(new Animated.Value(-1000))[0];

  //
  //
  // *****************testing data*****************
  //
  //
  const [notification, setNotification] = useState([
    {
      title: "New! Achievement",
      type: "achievement",
      message: "Congrats now you got a helper batch for adding a ambulance",
    },
    {
      title: "Alert",
      type: "locationAlert",
      message:
        "Your ambulance is in active mode, and your location can be now tracked.",
    },
    {
      title: "Tracking",
      type: "trackingAlert",
      message: "Lumbini ambulance is currently being tracked.",
    },
    {
      title: "Arrival",
      type: "arrival",
      message: "Ambulance is about to arrive be ready.",
    },
    {
      title: "Sos Signal",
      type: "emmergency",
      message: "SoS signal reveived click to open the live tracker.",
    },
  ]);

  return (
    <contextProvider.Provider
      value={{
        auth: { popup: [status, setStatus], animation: [logoAnim, popupAnim] },
        notif: [notification, setNotification],
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
