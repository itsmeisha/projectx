import { View, Text } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../styles/global/Ripple.js";

// context
import { contextProvider } from "../../../Context.js";

const Ripple = (type) => {
  const {
    map: {
      animation: [rippleAnimation],
    },
  } = useContext("contextProvider");
  return (
    <View style={styles.rippleContainer}>
      <View
        style={[styles.rippleCircle, type === "user" ? styles.userRipple : {}]}
      ></View>
      <View
        style={[styles.rippleCircle, type === "user" ? styles.userRipple : {}]}
      ></View>
    </View>
  );
};

export default Ripple;
