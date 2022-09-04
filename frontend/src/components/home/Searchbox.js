import { View, Text, TextInput } from "react-native";
import React from "react";
import Search from "../../../assets/svg/search.svg";
import styles from "./../../styles/search.js";

const Searchbox = () => {
  return (
    <View style={styles.searchContainer}>
      <Search style={styles.searchIcon} />
      <TextInput
        placeholder="Find ambulance"
        style={styles.textInput}
        placeholderTextColor={"#999999"}
      />
    </View>
  );
};

export default Searchbox;
