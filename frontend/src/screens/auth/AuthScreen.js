import { View, Text, Image, Animated } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// stylings
import styles from "../../styles/auth/AuthScreen.js";

// components
import Greeting from "../../components/auth/Greeting.js";
import Actions from "../../components/auth/Actions.js";
import Popup from "../../components/auth/Popup";

// animations
import { animation } from "../../animations/auth.js";
import { contextProvider } from "../../../Context.js";

const AuthScreen = () => {
  // setting the animation value for the logo
  const {
    auth: {
      animation: [logoAnim],
    },
  } = useContext(contextProvider);
  useEffect(() => {
    animation(0, logoAnim, 500);
  }, []);
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../../../assets/imgs/logo.png")}
        style={styles.logo}
      /> */}
      <Animated.View
        style={[styles.logo, { marginLeft: logoAnim }]}
      ></Animated.View>
      <Greeting />
      <Actions />
      <Popup />
    </View>
  );
};

export default AuthScreen;
