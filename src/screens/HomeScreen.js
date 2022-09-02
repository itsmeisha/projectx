import { View, Text, Image } from "react-native";
import React from "react";
import UpperNav from "../components/home/UpperNav";
import home from "../styles/home";
 import Searchbox from "../components/home/Searchbox";
import Map from "../components/home/maps/Map";
const HomeScreen = () => {
  return (
    <View style={home.container}>
      <Image
        source={require("../../assets/imgs/background.png")}
        style={home.backImg}
      />

      <View style={home.box}></View>
      {/* the upper navigation that contains the notification and the user and the menu */}
      <UpperNav />

      {/* containes the user name and a welcome message */}
      <Greeting />

      {/* search bar */}
      <Searchbox />
      {/* the map container */}
      <Map />

      {/* bottom navigation main navigation bar */}
    </View>
  );
};

export default HomeScreen;
