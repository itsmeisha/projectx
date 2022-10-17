import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../styles/auth/Actions.js";
import { contextProvider } from "../../../Context.js";

const Actions = () => {
  // auth popup status

  const {
    auth: {
      popup: [, setStatus],
    },
  } = useContext(contextProvider);

  const login = () => {
    setStatus("login");
  };
  const register = () => {
    setStatus("registeration");
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
