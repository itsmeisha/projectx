import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  marker: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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
    position: "relative",
  },
});
