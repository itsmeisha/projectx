import { View, Text, Pressable, Image } from "react-native";
import React from "react";

// styles
import styles from "../../styles/auth/socialBtns.js";

const Google = ({ popupMode }) => {
  const googleAuth = () => {
    if (popupMode === "registeration") {
      registerWithGoogle();
      return;
    }
    loginWithGoogle();
  };

  function registerWithGoogle() {}
  function loginWithGoogle() {}

  return (
    <Pressable onPress={googleAuth}>
      <View style={styles.btn}>
        {/* google icon */}
        <Image
          source={require("../../../assets/imgs/auth/googleIcon.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Continue with Google</Text>
      </View>
    </Pressable>
  );
};

export default Google;
