import { View, Text, Image, Pressable } from "react-native";
import React from "react";

// styles
import styles from "../../../styles/home/map/Actualmap.js";
import GoogleMap from "../../global/GoogleMap.js";

const Actualmap = ({ navigator }) => {
  return (
    <View style={styles.container}>
      {/* During UI development Image is added for reference */}
      <Pressable
        onPress={() => {
          navigator.navigate("TrackingScreen", {
            mode: "finding",
          });
        }}
      >
        <GoogleMap customStyles={{ height: 200, width: 300 }} />
      </Pressable>
    </View>
  );
};

export default Actualmap;
