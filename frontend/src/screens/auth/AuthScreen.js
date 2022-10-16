import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../../styles/auth/AuthScreen.js";
import Greeting from "../../components/auth/Greeting.js";
import Actions from "../../components/auth/Actions.js";
import Popup from "../../components/auth/Popup";
const AuthScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../../../assets/imgs/logo.png")}
        style={styles.logo}
      /> */}
      <View style={styles.logo}></View>
      <Greeting />
      <Actions />
      <Popup />
    </View>
  );
};

export default AuthScreen;
