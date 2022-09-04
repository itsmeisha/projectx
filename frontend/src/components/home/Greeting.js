import { View, Text } from "react-native";
import React from "react";
import greet from "../../styles/home/greet";

const Greeting = () => {
  const username = "New User";
  return (
    <View>
      <Text style={greet.FirstText}>Welcome</Text>
      <Text style={greet.username}>{username}</Text>
    </View>
  );
};

export default Greeting;
