import { View, Text } from "react-native";
import React from "react";

// styles
import styles from "../../styles/auth/Greeting.js";

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey ! Welcome</Text>
      <Text style={styles.description}>
        lets Make some connections. continue with us with your socials and help
        yourself and others.
      </Text>
    </View>
  );
};

export default Greeting;
