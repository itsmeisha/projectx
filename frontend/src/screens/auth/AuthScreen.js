import { View, Animated, Image } from "react-native";
import React, { useContext, useEffect } from "react";

// stylings
import styles from "../../styles/auth/AuthScreen.js";

// components
import Greeting from "../../components/auth/Greeting.js";
import Actions from "../../components/auth/Actions.js";
import Popup from "../../components/auth/Popup";

// animations
import { animation } from "../../animations/auth.js";
import { contextProvider } from "../../../Context.js";

const AuthScreen = ({ navigation }) => {
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
      <Animated.View style={[styles.logo, { marginLeft: logoAnim }]}>
        <Image
          source={require("../../../assets/imgs/logo.png")}
          style={styles.logoImage}
        />
      </Animated.View>
      <Greeting />
      <Actions />
      <Popup navigator={navigation} />
    </View>
  );
};

export default AuthScreen;
