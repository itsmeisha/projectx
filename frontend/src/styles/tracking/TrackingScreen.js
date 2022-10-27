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
    left: 0,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  searchBox: {
    flex: 1,
  },
  currentLocation: {
    marginLeft: 10,
  },
});
