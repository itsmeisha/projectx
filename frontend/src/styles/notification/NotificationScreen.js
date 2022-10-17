import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export default StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height - 96,
    position: "relative",
    top: 96,
  },
});
