import { View, Text, Pressable } from "react-native";
import React from "react";

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
      {/* Facebook svg */}
      <Text>Continue with Facebook</Text>
    </Pressable>
  );
};

export default Facebook;
