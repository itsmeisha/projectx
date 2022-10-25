import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  searchCon: {
    position: "absolute",
    top: 110,
    left: 20,
    width: Dimensions.get("window").width - 90,
  },
});
