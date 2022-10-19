import { View, Text } from "react-native";
import React from "react";

//style
import styles from "../../styles/Log/Logdetail.js";

// icons
import AmbulanceIcon from "../../../assets/svg/notification/Arrival.svg";

const IndivLog = ({ data }) => {
  return (
    <View style={styles.con}>
      <AmbulanceIcon />
      <View style={styles.leftItem}>
        <Text style={styles.mainTxt}>{data.name}</Text>
        <Text style={styles.txt}>
          Tracked {data.distance} for {data.duration}
        </Text>
      </View>
      <Text style={styles.rightTxt}>{data.date}</Text>
    </View>
  );
};

export default IndivLog;
