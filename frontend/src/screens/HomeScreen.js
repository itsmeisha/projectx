import {
  View,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";

// components
import UpperNav from "../components/home/UpperNav";
import home from "../styles/home/home";
import Searchbox from "../components/home/Searchbox";
import Map from "../components/home/maps/Map";
import Greeting from "../components/home/Greeting.js";
import Nav from "../components/global/Nav";
import ContactPopup from "../components/home/ContactPopup.js";
// for sending the request
import Constants from "expo-constants";

const { manifest } = Constants;
console.log(manifest.debuggerHost);
const uri = `http://${manifest.debuggerHost.split(":").shift()}:3000`;
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const tracker = useRef(null);

  const handleScrollChange = (e) => {
    if (!tracker || !tracker?.current) return;
    const newPosition = e.nativeEvent.contentOffset.y;

    tracker.current.setNativeProps({
      style: {
        top: 260 - newPosition,
      },
    });
  };

  // testing
  useEffect(() => {
    console.log("sending request");
    axios
      .post(`${uri}/api/v1/auth/checkexistance`, {
        contact: "ramesh@gmail.com",
      })
      .then((res) => {
        console.log("got a response");
        console.log(res);
      })
      .catch((e) => {
        console.log("got a error");
        console.log(e);
      });
  }, []);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <Image
        source={require("../../assets/imgs/background.png")}
        style={[home.backImg, {}]}
      />

      <View
        style={{
          position: "relative",
          paddingHorizontal: 28,
          width: Dimensions.get("window").width,
          top: 260,
          left: 0,
        }}
        ref={tracker}
      >
        {/* search bar */}
        <Searchbox />
        <View style={home.clearBtn}></View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScrollChange}
      >
        <View style={home.container}>
          {/* the upper navigation that contains the notification and the user and the menu */}
          <UpperNav navigator={navigation} />
          {/* containes the user name and a welcome message */}
          <Greeting />
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
