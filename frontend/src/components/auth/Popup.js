import { View, Text, Pressable, Image, Animated } from "react-native";
import React, { useContext, useState } from "react";

// styling
import styles from "../../styles/auth/Popup.js";

// social auth provider
import Facebook from "./Facebook.js";
import Google from "./Google.js";

// context
import { contextProvider } from "../../../Context.js";

// animation
import { animation } from "../../animations/auth.js";

const Popup = () => {
  // importing the global context that indicates the popup status
  const {
    auth: {
      popup: [status, setStatus],
      animation: [logoAnim, popupAnim],
    },
  } = useContext(contextProvider);

  return (
    <>
      {status ? (
        <Animated.View style={[styles.container, { bottom: popupAnim }]}>
          {/* this contains the title and the close btn */}
          <View style={styles.titleCon}>
            {/* conditionally rendered title */}
            <Text style={styles.title}>
              {status === "registeration"
                ? "Register account using,"
                : "Continue login with,"}
            </Text>

            <Pressable
              onPress={() => {
                let animationTime = 500;
                animation(-1000, popupAnim, animationTime);
                animation(0, logoAnim, animationTime);

                setTimeout(() => {
                  setStatus(false);
                }, animationTime);
              }}
            >
              {/* Btn logo */}
              <Image
                source={require("../../../assets/imgs/auth/closeBtn.png")}
                style={styles.closeBtn}
              ></Image>
            </Pressable>
          </View>

          {/* this is the continue with socials container */}
          <View style={styles.btnContainer}>
            {/* this contains signin with google and signup with google */}
            <Google />

            {/* this contains signin with facebook and signup with facebook */}
            <Facebook />
          </View>
        </Animated.View>
      ) : null}
    </>
  );
};

export default Popup;
