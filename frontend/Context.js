import React, { createContext, useState, useEffect } from "react";
import { Animated } from "react-native";

// for getting the current location
import * as Location from "expo-location";

// creating the context
export const contextProvider = createContext();

// for getting the correct server uri in development
import Constants from "expo-constants";

// for getting the correct server uri in production
import { SERVER_URI } from "@env";
import axios from "axios";

const { manifest } = Constants;
const serverUri =
  SERVER_URI || `http://${manifest.debuggerHost.split(":").shift()}:3000`;

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
  const [notification, setNotification] = useState([]);

  const [user, setUser] = useState({
    // name: "kapil Tripathi",
    // doj: "sep 23rd",
    // contact: "person@gmail.com",
    // achievements: ["New", "Helper", "Tracker"],
    // ambulance: {},
  });

  const [logs, setLogs] = useState([
    // {
    //   name: "Lumbini Ambulance",
    //   duration: "5 min",
    //   distance: "20 km",
    //   date: "8 jun",
    // },
    // {
    //   name: "Mutu Ambulance",
    //   duration: "2 min",
    //   distance: "2 km",
    //   date: "5 jun",
    // },
    // {
    //   name: "GBC Ambulance",
    //   duration: "50 min",
    //   distance: "200 km",
    //   date: "18 jun",
    // },
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

  const [selectedAmbul, setSelectedAmbul] = useState({});

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
    // {
    //   name: "Hamro ambulance",
    //   dName: "Isha pun",
    //   pNumber: "9860712345",
    //   location: {
    //     latitude: 27.685344030241538,
    //     longitude: 83.45944723114371,
    //   },
    //   owner: "Mutu hospital",
    //   status: true,
    //   selected: false,
    // },
  ]);

  // My ambulance to show in the profile
  const [myAmbulance, setMyAmbulnace] = useState({});

  // current location
  const [currentLocation, setCurrentLocation] = useState({});

  // api data fetcher

  const fetchAmbulanceData = () => {
    // fetching all the ambulances and setting them
    axios
      .get(`${serverUri}/api/v1/ambulance/`)
      .then((res) => {
        const ambulances = res.data?.ambulances;

        if (ambulances?.length > 0) setAmbulances(ambulances);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getApiData = () => {
    // gets the ambulance info from the server
    fetchAmbulanceData();

    // fetching my ambulance to put in the profile
    if (user && Object.keys(user).length !== 0) {
      // checking if the ambulances exists or not
      axios
        .post(`${serverUri}/api/v1/ambulance/`, {
          id: user?.id,
        })
        .then((res) => {
          const ambulance = res?.data?.ambulance;
          if (!ambulance) return;
          setMyAmbulnace(ambulance);
        })
        .catch((e) => {
          if (e?.res?.status === 404) setMyAmbulnace({});
        });
    }
  };

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

    // fetches data form the api and sets to the state
    getApiData();
  }, []);

  useEffect(() => {
    getApiData();
  }, [user]);

  // refetching the ambulance data every 5 seconds
  const fetchDelay = 5; // delay in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAmbulanceData();
    }, fetchDelay * 1000);

    // clearing the interval to avoid the memory leaks
    return () => {
      clearInterval(interval);
    };
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
          ambulance: [myAmbulance, setMyAmbulnace],
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
        config: {
          api: serverUri,
        },
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
