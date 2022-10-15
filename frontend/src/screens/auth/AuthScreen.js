import { View, Text } from "react-native";
import React from "react";
import styles from "../../styles/auth/AuthScreen.js";
import Greeting from "../../components/auth/Greeting.js";

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Greeting />
    </View>
  );
};

export default AuthScreen;
