import {
  View,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
  Dimensions,
  RefreshControl,
} from "react-native";
import React, { useRef, useState } from "react";

// components
import UpperNav from "../components/home/UpperNav";
import home from "../styles/home/home";
import Searchbox from "../components/home/Searchbox";
import Map from "../components/home/maps/Map";
import Greeting from "../components/home/Greeting.js";
import Nav from "../components/global/Nav";
import ContactPopup from "../components/home/ContactPopup.js";
// importing the toast

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshsing] = useState(false);

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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={["#979dac", "#5c677d", "#0353a4", "#001233"]}
            onRefresh={() => {
              setRefreshsing(true);
              setTimeout(() => {
                setRefreshsing(false);
              }, 4000);
            }}
          />
        }
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
      <View
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContactPopup />
      </View>

      <Nav navigator={navigation} active={"HomeScreen"} />
    </SafeAreaView>
  );
};

export default HomeScreen;
