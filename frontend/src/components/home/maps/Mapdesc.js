import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

//styles
import styles from "../../../styles/home/map/Mapdesc.js";

// context
import { contextProvider } from "../../../../Context.js";

const Mapdesc = ({ navigator }) => {
  const {
    contact: [, setConPopup],
  } = useContext(contextProvider);
  const distance = "20 km";
  return (
    <View style={styles.container}>
      <Text style={styles.distance}>Distance : {distance}</Text>
      <View style={styles.btns}>
        <Pressable
          onPress={() => {
            navigator.navigate("TrackingScreen", {
              mode: "tracking",
            });
          }}
        >
          <Text style={[styles.track, styles.btn]}>Track</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setConPopup(true);
          }}
        >
          <Text style={[styles.btn, styles.contact]}>Contact</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Mapdesc;
