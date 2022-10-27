import { View, Text, Image } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../styles/global/CustomMarker.js";

// icons
import EmptyMarker from "../../../assets/svg/maps/marker.svg";
import AmbulanceMarker from "../../../assets/svg/maps/ambulanceMarker.svg";

import { contextProvider } from "../../../Context.js";

const CustomMarker = ({ type, selected }) => {
  const {
    usr: [user],
  } = useContext(contextProvider);
  return (
    <View style={styles.container}>
      <View style={styles.marker}>
        {type === "ambulance" ? (
          <AmbulanceMarker />
        ) : (
          <>
            <EmptyMarker />
            <Image source={{ uri: user?.photo }} />
          </>
        )}
      </View>
      <View
        style={[styles.rippleCircle, type === "user" ? styles.userRipple : {}]}
      ></View>
      <View
        style={[styles.rippleCircle, type === "user" ? styles.userRipple : {}]}
      ></View>
    </View>
  );
};

export default CustomMarker;
