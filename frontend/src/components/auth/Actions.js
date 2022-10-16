import { View, Text, Pressable } from "react-native";
import React from "react";

// styles
import styles from "../../styles/auth/Actions.js";

const Actions = () => {
  const login = () => {
    console.log("already have an account");
  };
  const register = () => {
    console.log("new user");
  };

  return (
    <View style={styles.container}>
      {/* This is the register btn */}
      <Pressable onPress={register}>
        <Text style={[styles.btn, styles.getStarted]}>Get Started</Text>
      </Pressable>

      {/* This is the login btn */}
      <Pressable onPress={login}>
        <Text style={[styles.btn, styles.reg]}>Already have an account</Text>
      </Pressable>
    </View>
  );
};

export default Actions;
