import { View, Text, Image } from "react-native";
import React from "react";

// styles
import styles from "../../../styles/home/map/Actualmap.js";

const Actualmap = () => {
  return (
    <View style={styles.container}>
      {/* During UI development Image is added for reference */}
      <Image
        style={styles.map}
        source={require("../../../../assets/imgs/temp/mapMini.png")}
      ></Image>
    </View>
  );
};

export default Actualmap;
