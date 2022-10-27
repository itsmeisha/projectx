import React, { useContext, useEffect, useRef, useState } from "react";

// styles
import styles from "../../styles/tracking/GoogleMap.js";
import { customMapStyles } from "../../styles/tracking/customMapStyles.js";

//components
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { contextProvider } from "../../../Context.js";

// utilities

// for getting the location permission
import * as Location from "expo-location";
import { Text } from "react-native";

const GoogleMap = ({ customStyles }) => {
  const {
    map: {
      location: [mapLoadLoc],
    },
    ambulances: [ambulances, setAmbulances],
  } = useContext(contextProvider);

  return (
    <MapView
      initialRegion={mapLoadLoc}
      style={[
        styles.map,
        customStyles && {
          height: customStyles?.height,
          width: customStyles?.width,
        },
      ]}
      customMapStyle={customMapStyles}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      mapPadding={{
        top: 125,
        right: 10,
      }}
      showsMyLocationButton={true}
      region={mapLoadLoc}
    >
      {ambulances?.map((ambulance, index) => {
        return (
          <Marker
            title={ambulance?.name}
            identifier={"first marker"}
            coordinate={{
              latitude: ambulance?.location?.lat,
              longitude: ambulance?.location?.lng,
            }}
          >
            <Text style={styles.text}>hamro marker ramro marker</Text>
          </Marker>
        );
      })}
    </MapView>
  );
};

export default GoogleMap;
