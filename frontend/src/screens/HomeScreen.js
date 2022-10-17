import { View, Image, SafeAreaView, Platform } from "react-native";
import React from "react";

// components
import UpperNav from "../components/home/UpperNav";
import home from "../styles/home/home";
import Searchbox from "../components/home/Searchbox";
import Map from "../components/home/maps/Map";
import Greeting from "../components/home/Greeting.js";
import Nav from "../components/global/Nav";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
      <View style={home.container}>
        <Image
          source={require("../../assets/imgs/background.png")}
          style={home.backImg}
        />

        {/* the upper navigation that contains the notification and the user and the menu */}
        <UpperNav navigator={navigation} />

        {/* containes the user name and a welcome message */}
        <Greeting />

        {/* search bar */}
        <Searchbox />

        {/* the map container */}
        <Map />

        {/* bottom navigation main navigation bar */}
        <Nav navigator={navigation} active={"HomeScreen"} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
