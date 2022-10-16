import { View, Text, Pressable, Image } from "react-native";
import React from "react";

// styles
import styles from "../../styles/auth/socialBtns.js";

const Facebook = ({ popupMode }) => {
  const facebookAuth = () => {
    if (popupMode === "registeration") {
      registerWithFacebook();
      return;
    }
    loginWithFacebook();
  };

  function registerWithFacebook() {}
  function loginWithFacebook() {}

  return (
    <Pressable onPress={facebookAuth}>
      <View style={[styles.btn, { marginTop: 20 }]}>
        {/* Facebook icon */}
        <Image
          source={require("../../../assets/imgs/auth/facebookIcon.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Continue with Facebook</Text>
      </View>
    </Pressable>
  );
};

export default Facebook;
