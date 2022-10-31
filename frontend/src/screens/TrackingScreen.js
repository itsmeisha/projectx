import { View, Pressable, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import Header from "../components/global/Header";

//styles
import styles from "../styles/tracking/TrackingScreen.js";

//components
import GoogleMap from "../components/global/GoogleMap.js";
import MapTracker from "../components/tracking/MapTracker.js";
import MapFinder from "../components/tracking/MapFinder.js";
import ContactPopup from "../components/home/ContactPopup.js";
import Searchbox from "../components/home/Searchbox";

// icon
import CurrentLocation from "../../assets/imgs/maps/currentLocation.svg";
import { contextProvider } from "../../Context";

const TrackingScreen = ({ route, navigation }) => {
  // mode is passed while routing and decides what the popup below the map should look like
  const [mode] = useState(route?.params?.mode);

  const {
    map: {
      userLoc: [currentLocation],
      location: [, setMapLoadLoc],
      ambulance: [selectedAmbul],
    },
  } = useContext(contextProvider);

  return (
    <View style={styles.mainContainer}>
      <Header
        navigator={navigation}
        heading={mode === "finding" ? "Ambulance Finding" : "Live Tracking"}
      />
      <GoogleMap />
      <View style={styles.searchCon}>
        <View style={styles.searchBox}>
          <Searchbox />
        </View>
        <Pressable
          style={styles.currentLocation}
          onPress={() => {
            setMapLoadLoc((previousLocation) => {
              return { ...previousLocation, ...currentLocation };
            });
          }}
        >
          <CurrentLocation />
        </Pressable>
      </View>

      <View
        style={[
          styles.bottomPopup,
          selectedAmbul?.userId ? { bottom: 0 } : { bottom: -200 },
        ]}
      >
        {mode === "finding" ? <MapFinder /> : <MapTracker />}
      </View>

      <ContactPopup />
    </View>
  );
};

export default TrackingScreen;
