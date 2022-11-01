import { StyleSheet } from "react-native";

export default StyleSheet.create({
  rippleCircle: {
    height: 115,
    width: 115,
    backgroundColor: "#F6703D",
    position: "absolute",
    borderRadius: 115 / 2,
    opacity: 0.5,
  },
  container: {
    position: "absolute",
    top: 30,
    left: 0,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
  },
});
