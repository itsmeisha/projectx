import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  closer: {
    height: Dimensions.get("screen").height,
    width: "100%",
    backgroundColor: "#333",
    opacity: 0.4,
    zIndex: 20,
    position: "absolute",
  },
  container: {
    backgroundColor: "white",
    padding: 35,
    borderRadius: 20,
    zIndex: 20,
  },
  btns: {
    flexDirection: "row",
    marginTop: 10,
    height: 50,
    width: 250,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    width: 110,
    height: 40,
    lineHeight: 40,
    textAlign: "center",
    marginTop: 35,
    borderRadius: 15,
    color: "#fff",
  },
  save: {
    backgroundColor: "#52BF9B",
  },
  cancel: {
    backgroundColor: "#D45151",
  },
});
