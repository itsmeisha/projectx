import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 25,
    fontFamily: "poppins-b",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontFamily: "poppins-r",
  },
  goHome: {
    alignItems: "center",
    marginTop: 50,
  },
  btnTxt: {
    backgroundColor: "#609FE7",
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: "#fff",
    fontFamily: "poppins-m",
    borderRadius: 10,
  },
});
