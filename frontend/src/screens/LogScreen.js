import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";

// components
import Nav from "../components/global/Nav";

const LogScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingTop: Platform.OS === "android" ? 30 : 0, height: "100%" }}
    >
      <View style={{ flex: 1 }}>
        <Text>LogScreen</Text>

        <Nav active={"LogScreen"} navigator={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default LogScreen;
