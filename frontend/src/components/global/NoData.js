import { View, Text, Pressable } from "react-native";
import React from "react";

// styles
import styles from "../../styles/global/NoData.js";

const NoData = ({ type, navigator }) => {
  // to redirect to the home screen
  const goHome = () => {
    navigator.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.textCon}>
        <Text style={styles.title}>
          {type === "notification" ? "No notification found" : "No logs found"}
        </Text>
        <Text style={styles.description}>
          {type === "notification"
            ? "No notification for this users were found"
            : "Looks like you haven't tracked any ambulances yet 😅"}
        </Text>

        <Pressable style={styles.goHome} onPress={goHome}>
          <Text style={styles.btnTxt}>Go Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NoData;
