import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#fff",
    paddingHorizontal: 33,
    paddingVertical: 60,
    borderRadius: 28,
    zIndex: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  closer: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "#333",
    opacity: 0.4,
    zIndex: 20,
    position: "absolute",
  },
  number: {
    fontFamily: "poppins-m",
    fontSize: 30,
    color: "#737373",
  },
  name: {
    fontFamily: "poppins-r",
    fontSize: 16,
    color: "#737373",
  },
  callNow: {
    alignItems: "center",
    justifyContent: "center",
    width: 211,
    height: 37,
    borderRadius: 15,
    marginTop: 70,
    backgroundColor: "#32CC5E",
    flexDirection: "row",
  },
  text: {
    fontFamily: "poppins-m",
    color: "#fff",
  },
  icon: {
    marginLeft: 15,
  },
});
