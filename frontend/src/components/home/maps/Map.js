import { View, Text } from "react-native";
import React from "react";

//components
import Actualmap from "./Actualmap";
import Mapdesc from "./Mapdesc";

// styles
import styles from "../../../styles/home/map/Map.js";

const Map = ({ navigator }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Ambulance</Text>

      {/* the container that holds the actual map and the map description  */}
      <View style={styles.mapContainer}>
        {/* actual map  */}
        <Actualmap navigator={navigator} />
        {/* the container that contains the map desc including distance and the action buttons */}
        <Mapdesc navigator={navigator} />
      </View>
    </View>
  );
};

export default Map;
