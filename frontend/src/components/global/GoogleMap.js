import { View, Text, Image } from "react-native";
import React from "react";

import styles from "../../styles/tracking/GoogleMap.js";

const GoogleMap = () => {
  return (
    <View style={styles.mapContainer}>
      <Image source={require("../../../assets/imgs/temp/fullMap.png")} />
    </View>
  );
};

export default GoogleMap;
