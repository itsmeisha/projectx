import { View, Text, Pressable } from "react-native";
import React from "react";

// styles
import styles from "../../styles/global/Header.js";

// icons
import BackArrow from "../../../assets/svg/backArrow.svg";

const Header = ({ navigator, heading }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigator.goBack()}>
        <BackArrow />
      </Pressable>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};

export default Header;
