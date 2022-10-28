import React, { createContext, useState, useEffect } from "react";
import { Animated } from "react-native";

import * as Location from "expo-location";
import axios from "axios";
// creating the context
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
    // name: "kapil Tripathi",
    // doj: "sep 23rd",
    // contact: "person@gmail.com",
    // achievements: ["New", "Helper", "Tracker"],
    // ambulance: {},
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

  //
  //
  // *****************Contact popup *****************
  //
  //

  const [conPopup, setConPopup] = useState(false);

  //
  //
  // *****************selected ambulance *****************
  //
  //

  const [selectedAmbul, setSelectedAmbul] = useState({
    name: "Lumbini Ambulance",
    number: "+977 9867100588",
  });

  // Map data

  const [data, setData] = useState({
    lat: "13.45",
    lon: "-24.43522",
    distance: "20km",
    time: "5 Min",
  });

  // selected location || current location
  const [mapLoadLoc, setMapLoadLoc] = useState({
    latitude: 27.685344030241538,
    longitude: 83.45944723114371,

    latitudeDelta: 0.0021,
    longitudeDelta: 0.0021,
  });

  // map marker animation
  const [rippleAnimation] = useState({
    circleOne: {
      size: new Animated.Value(80),
      opacity: new Animated.Value(0.75),
    },
    circleTwo: {
      size: new Animated.Value(115),
      opacity: new Animated.Value(0.3),
    },
  });

  // loading all the ambulances
  const [ambulances, setAmbulances] = useState([
    // {
    //   name: "",
    //   dName: "",
    //   pNumber: "",
    //   location: {
    //     lat: "",
    //     lng: "",
    //   },
    //   owner: "",
    //   status: "",
    //   selected: true,
    // },
    {
      name: "Hamro ambulance",
      dName: "Isha pun",
      pNumber: "9860712345",
      location: {
        latitude: 27.685344030241538,
        longitude: 83.45944723114371,
      },
      owner: "Mutu hospital",
      status: true,
      selected: false,
    },
  ]);

  // current location
  const [currentLocation, setCurrentLocation] = useState({});

  // component did mount function
  useEffect(() => {
    (async () => {
      // getting the permission
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") return;

      // getting and setting  the current location
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
      });
    })();
  }, []);

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
        contact: [conPopup, setConPopup],
        map: {
          ambulance: [selectedAmbul, setSelectedAmbul],
          tracking: [data, setData],
          location: [mapLoadLoc, setMapLoadLoc],
          animation: [rippleAnimation],
          userLoc: [currentLocation, setCurrentLocation],
        },
        ambulances: [ambulances, setAmbulances],
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
