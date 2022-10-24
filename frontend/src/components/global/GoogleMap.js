import React, { useContext, useEffect, useState } from "react";

// styles
import styles from "../../styles/tracking/GoogleMap.js";
import { customMapStyles } from "../../styles/tracking/customMapStyles.js";

//components
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { contextProvider } from "../../../Context.js";

// utilities
// import Geolocation from "@react-native-community/geolocation";

const GoogleMap = () => {
  const {
    map: {
      location: [mapLoadLoc, setMapLoadLoc],
    },
  } = useContext(contextProvider);

  console.log(mapLoadLoc);
  useEffect(() => {
    // granted &&
    //   Geolocation?.getCurrentPosition((pos) => {
    //     console.log(pos);
    //     // setInitialLocation({
    //     //   latitude: crd?.latitude,
    //     //   longitude: crd?.longitude,
    //     //   latitudeDelta: 0.0421,
    //     //   longitudeDelta: 0.0421,
    //     // });
    //   }).catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <MapView
      initialRegion={mapLoadLoc}
      style={styles.map}
      customMapStyle={customMapStyles}
      provider={PROVIDER_GOOGLE}
    ></MapView>
  );
};

export default GoogleMap;
