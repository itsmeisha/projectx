import { View, Text, Pressable } from "react-native";
import React from "react";

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
      {/* google svg */}
      <Text>Continue with google</Text>
    </Pressable>
  );
};

export default Google;
