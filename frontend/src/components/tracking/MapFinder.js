import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../styles/home/map/Mapdesc";

// context
import { contextProvider } from "../../../Context";

const MapFinder = () => {
  const {
    contact: [, setConPopup],
    map: {
      tracking: [data],
    },
  } = useContext(contextProvider);

  return (
    <View
      style={[
        styles.container,
        {
          width: "90%",
          position: "absolute",
          bottom: 30,
        },
      ]}
    >
      <Text style={styles.distance}>Distance : {data?.distance}</Text>
      <View style={styles.btns}>
        <Pressable>
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

export default MapFinder;
