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

  const [user, setUser] = useState({
    name: "kapil Tripathi",
    doj: "sep 23rd",
    contact: "person@gmail.com",
    achievements: ["New", "Helper", "Tracker"],
    ambulance: {},
  });

  const [logs, setLogs] = useState([
    {
      name: "Lumbini Ambulance",
      duration: "5 min",
      distance: "20 km",
      date: "8 jun",
    },
    {
      name: "Mutu Ambulance",
      duration: "2 min",
      distance: "2 km",
      date: "5 jun",
    },
    {
      name: "GBC Ambulance",
      duration: "50 min",
      distance: "200 km",
      date: "18 jun",
    },
  ]);

  //
  //
  // *****************Add ambulance popup *****************
  //
  //
  // its value can be false , edit mode , add mode
  const [ambPopup, setAmbPopup] = useState(false);
  //ambulance data
  const [ambulData, SetAmbData] = useState({});

  return (
    <contextProvider.Provider
      value={{
        auth: { popup: [status, setStatus], animation: [logoAnim, popupAnim] },
        notif: [notification, setNotification],
        usr: [user, setUser],
        profile: {
          popup: [ambPopup, setAmbPopup],
          ambul: [ambulData, SetAmbData],
        },
        history: [logs, setLogs],
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
