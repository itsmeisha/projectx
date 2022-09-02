import { View, Text, TextInput } from "react-native";
import React from "react";
import Search from "../../../assets/svg/search.svg";

const Searchbox = () => {
  return (
    <View>
      <Search />
      <TextInput placeholder="Find ambulance" />
    </View>
  );
};

export default Searchbox;
