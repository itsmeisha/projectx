import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";

// components
import Nav from "../components/global/Nav";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingTop: Platform.OS === "android" ? 30 : 0, height: "100%" }}
    >
      <View style={{ flex: 1 }}>
        <Text>ProfileScreen</Text>
        <Nav active={"ProfileScreen"} navigator={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
