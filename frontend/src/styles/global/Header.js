import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    paddingTop: 30,
    top: 0,
    left: 0,
    backgroundColor: "white",
    height: 96,
    paddingHorizontal: 50,
    zIndex: 10,
    elevation: 5,
  },
  text: {
    fontFamily: "poppins-r",
    fontSize: 18,
    marginLeft: 30,
  },
});
