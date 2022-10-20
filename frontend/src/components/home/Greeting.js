import { View, Text } from "react-native";
import React, { useContext } from "react";

//styles
import greet from "../../styles/home/greet";

// context
import { contextProvider } from "../../../Context";

const Greeting = () => {
  const {
    usr: [user],
  } = useContext(contextProvider);
  return (
    <View>
      <Text style={greet.FirstText}>Welcome</Text>
      <Text style={greet.username}>{user?.name || "New User"}</Text>
    </View>
  );
};

export default Greeting;
