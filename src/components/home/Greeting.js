import { View, Text } from "react-native";
import React from "react";
import greet from "../../styles/greet";
const Greeting = () => {
  const username = "New User";
  return (
    <View>
      <Text style={greet.firstText}>Welcome</Text>
      <Text style={greet.secondText}>{username}</Text>
    </View>
  );
};

export default Greeting;
