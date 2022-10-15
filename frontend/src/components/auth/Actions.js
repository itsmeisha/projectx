import { View, Text, Pressable } from "react-native";
import React from "react";

const Actions = () => {
  const login = () => {};
  const register = () => {};

  return (
    <View>
      {/* This is the register btn */}
      <Pressable onPress={register}>
        <Text>Get Started</Text>
      </Pressable>

      {/* This is the login btn */}
      <Pressable onPress={login}>
        <Text>Already have an account</Text>
      </Pressable>
    </View>
  );
};

export default Actions;
