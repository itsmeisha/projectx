import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export default StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -20,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    backgroundColor: "white",
    height: 106,
    alignItems: "center",
    borderRadius: 27,
    elevation: 5,
    paddingBottom: 20,
  },

  navItem: {
    alignItems: "center",
  },
  activeText: {
    marginTop: 10,
    lineHeight: 15,
    color: "#3979ff",
    fontFamily: "poppins-m",
  },
  activeIcon: {
    marginTop: 25,
  },
});
