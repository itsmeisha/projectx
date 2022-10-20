import { View, Text } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../styles/home/map/Mapdesc";
import tracker from "../../styles/tracking/MapTracker.js";

// context
import { contextProvider } from "../../../Context";

const MapTracker = () => {
  const {
    map: {
      ambulance: [selectedAmbul],
      tracking: [data, setData],
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
      <Text style={tracker.name}>{selectedAmbul.name}</Text>
      <View style={tracker.dataContainer}>
        {/* left side that shows the latitude and the longitued of the tracked ambulance */}
        <View style={tracker.left}>
          <Text style={tracker.key}>
            lat: <Text style={tracker.value}>{data.lat}</Text>
          </Text>
          <Text style={tracker.key}>
            lon: <Text style={tracker.value}>{data.lon}</Text>
          </Text>
        </View>

        {/* right side that shows the distance and time left for the ambulance to arrive */}
        <View style={tracker.left}>
          <Text style={tracker.key}>
            Approx. Distance: <Text style={tracker.value}>{data.distance}</Text>
          </Text>
          <Text style={tracker.key}>
            Approx. time: <Text style={tracker.value}>{data.time}</Text>
          </Text>
        </View>
      </View>

      <Text style={[tracker.key, tracker.note]}>Note:</Text>
      <Text style={tracker.value}>Data might not be 100% accurate.</Text>
      <Text style={tracker.value}>Data updates every 5 seconds.</Text>
    </View>
  );
};

export default MapTracker;
