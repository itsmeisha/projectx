import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

//styles
import styles from "../../../styles/home/map/Mapdesc.js";

// context
import { contextProvider } from "../../../../Context.js";

const Mapdesc = () => {
  const {
    contact: [, setConPopup],
  } = useContext(contextProvider);
  const distance = "20 km";
  return (
    <View style={styles.container}>
      <Text style={styles.distance}>Distance : {distance}</Text>
      <View style={styles.btns}>
        <Pressable onPress={() => {}}>
          <Text style={[styles.track, styles.btn]}>Track</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("clicked contact");
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
