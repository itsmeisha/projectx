import { View, Image, SafeAreaView, Platform, ScrollView } from "react-native";
import React from "react";

// components
import UpperNav from "../components/home/UpperNav";
import home from "../styles/home/home";
import Searchbox from "../components/home/Searchbox";
import Map from "../components/home/maps/Map";
import Greeting from "../components/home/Greeting.js";
import Nav from "../components/global/Nav";
import ContactPopup from "../components/home/ContactPopup.js";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 30 : 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/imgs/background.png")}
        style={[home.backImg, {}]}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={home.container}>
          {/* the upper navigation that contains the notification and the user and the menu */}
          <UpperNav navigator={navigation} />

          {/* containes the user name and a welcome message */}
          <Greeting />

          {/* search bar */}
          <Searchbox />

          {/* the map container */}
          <Map navigator={navigation} />
        </View>
        {/* this is to provide extra scroll space */}
        <View
          style={{
            height: 110,
            width: "100%",
          }}
        ></View>
      </ScrollView>

      <ContactPopup />
      <Nav navigator={navigation} active={"HomeScreen"} />
    </SafeAreaView>
  );
};

export default HomeScreen;
