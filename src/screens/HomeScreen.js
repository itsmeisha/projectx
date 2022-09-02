import { View, Text, Image } from "react-native";
import React from "react";
import UpperNav from "../components/home/UpperNav";
import home from "../styles/home";
const HomeScreen = () => {
  return (
    <View style={home.container}>
      <Image
        source={require("../../assets/imgs/background.png")}
        style={home.backImg}
      />

      <View style={home.box}></View>
      <UpperNav />
      <Greeting/>
    </View>
  );
};

export default HomeScreen;
