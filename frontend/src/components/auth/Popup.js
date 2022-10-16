import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";

// styling
import styles from "../../styles/auth/Popup.js";

// social auth provider
import Facebook from "./Facebook.js";
import Google from "./Google.js";
const Popup = ({ popupMode }) => {
  // the value of the popupMode prop can be either registeration or login

  const [status, setStatus] = useState(true);

  return (
    <>
      {status ? (
        <View style={styles.container}>
          {/* this contains the title and the close btn */}
          <View style={styles.titleCon}>
            {/* conditionally rendered title */}
            <Text style={styles.title}>
              {popupMode === "registeration"
                ? "Register account using,"
                : "Continue login with,"}
            </Text>

            <Pressable
              onPress={() => {
                setStatus(false);
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
            <Google popupMode />

            {/* this contains signin with facebook and signup with facebook */}
            <Facebook popupMode />
          </View>
        </View>
      ) : null}
    </>
  );
};

export default Popup;
