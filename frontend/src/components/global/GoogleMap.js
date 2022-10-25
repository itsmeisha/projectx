import React, { useContext, useEffect, useState } from "react";

// styles
import styles from "../../styles/tracking/GoogleMap.js";
import { customMapStyles } from "../../styles/tracking/customMapStyles.js";

//components
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { contextProvider } from "../../../Context.js";

// utilities

const GoogleMap = ({ customStyles }) => {
  const {
    map: {
      location: [mapLoadLoc],
    },
  } = useContext(contextProvider);

  return (
    <MapView
      initialRegion={mapLoadLoc}
      style={[
        styles.map,
        { height: customStyles?.height, width: customStyles?.width },
      ]}
      customMapStyle={customMapStyles}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      mapPadding={{
        top: 125,
        right: 10,
      }}
      showsMyLocationButton={true}
    ></MapView>
  );
};

export default GoogleMap;
