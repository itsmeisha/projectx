import { View, Text } from "react-native";
import React, { useState } from "react";
import Header from "../components/global/Header";

//styles
import styles from "../styles/tracking/TrackingScreen.js";

//components
import GoogleMap from "../components/global/GoogleMap.js";
import MapTracker from "../components/tracking/MapTracker.js";
import MapFinder from "../components/tracking/MapFinder.js";
import ContactPopup from "../components/home/ContactPopup.js";

const TrackingScreen = ({ route, navigation }) => {
  const [mode, setmode] = useState(route?.params?.mode);

  return (
    <View style={styles.mainContainer}>
      <Header
        navigator={navigation}
        heading={mode === "finding" ? "Ambulance Finding" : "Live Tracking"}
      />
      <GoogleMap />

      {mode === "finding" ? <MapFinder /> : <MapTracker />}

      <ContactPopup />
    </View>
  );
};

export default TrackingScreen;
