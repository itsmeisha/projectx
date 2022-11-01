import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    height: 100,
    width: 100,
    // overflow: "visible",
    // display: "flex",
    borderRadius: 50,
  },
  marker: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // backgroundColor: "red",
  },
  icon: {
    height: 67.5,
    width: 60,
  },
  userProfile: {
    height: 54,
    width: 54,
    position: "absolute",
    marginTop: 3,
    marginLeft: 3,
    borderRadius: 27,
  },

  userMarker: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
});
