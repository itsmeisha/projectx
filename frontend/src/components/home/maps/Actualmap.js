import { View, Text, Image, Pressable } from "react-native";
import React from "react";

// styles
import styles from "../../../styles/home/map/Actualmap.js";

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
        <Image
          style={styles.map}
          source={require("../../../../assets/imgs/temp/mapMini.png")}
        />
      </Pressable>
    </View>
  );
};

export default Actualmap;
