import { View, Text } from "react-native";
import React from "react";
import Actualmap from "./Actualmap";
import Mapdesc from "./Mapdesc";
const Map = () => {
  return (
    <View>
      <Text>Available Ambulance</Text>

      {/* the container that holds the actual map and the map description  */}
      <View>
        {/* actual map  */}
        <Actualmap />
        {/* the container that contains the map desc including distance and the action buttons */}
        <Mapdesc />
      </View>
    </View>
  );
};

export default Map;
