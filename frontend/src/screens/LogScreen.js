import { View, Text, SafeAreaView, Platform, Pressable } from "react-native";
import React from "react";

// components
import Nav from "../components/global/Nav";
import Back from "./../../assets/svg/backArrow.svg";
import Go from "./../../assets/svg/golo.svg";

import Topnav from "../styles/Log/Topnav";
import Logdetail from "../styles/Log/Logdetail";
const LogScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingTop: Platform.OS === "android" ? 30 : 0, height: "100%" }}
    >
      <View style={{ flex: 1, backgroundColor: "#C7CAE9" }}>
        <View style={Topnav.NavContainer}>
          <Pressable onPress={() => {}}>
            <Back />
          </Pressable>
          <Text style={Topnav.Text}>Tracking Logs </Text>
        </View>
        <View style={Logdetail.Con}>
          <View style={Logdetail.LeftItem}>
            <Go />
            <View>
              <Text style={Logdetail.Maintxt}>Lumbini Ambulance</Text>
              <Text style={Logdetail.txt}>Tracked 20 km for 5min</Text>
            </View>
          </View>
          <View style={Logdetail.RightItem}>
            <Text style={Logdetail.righttxt}>8 jun</Text>
          </View>
        </View>

        <Nav active={"LogScreen"} navigator={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default LogScreen;
