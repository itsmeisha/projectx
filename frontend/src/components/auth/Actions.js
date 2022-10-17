import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../styles/auth/Actions.js";
import { contextProvider } from "../../../Context.js";

// animation function
import { animation } from "../../animations/auth.js";

const Actions = () => {
  // auth popup status

  const {
    auth: {
      popup: [, setStatus],
      animation: [logoAnim, popupAnim],
    },
  } = useContext(contextProvider);

  const animationTime = 500;

  const login = () => {
    setStatus("login");
    // for the auth logo and popup animation
    animation(-60, popupAnim, animationTime);
    animation(1000, logoAnim, animationTime);
  };
  const register = () => {
    setStatus("registeration");
    // for the auth logo and popup animation
    animation(-60, popupAnim, animationTime);
    animation(1000, logoAnim, animationTime);
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
