import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  map: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("window").width,
  },
});
