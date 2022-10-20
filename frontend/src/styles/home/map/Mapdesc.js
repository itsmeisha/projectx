import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#e8e8e8",
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    // elevation: 5,
    borderRadius: 20,
  },
  distance: {
    fontFamily: "poppins-r",
    fontSize: 12,
  },

  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#3979FF",
    color: "white",
    height: 40,
    width: 120,
    lineHeight: 40,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
  },
  contact: {
    backgroundColor: "#f0f0f0",
    color: "#333",
  },
});
