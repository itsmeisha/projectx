import { StyleSheet } from "react-native";
import { Platform } from "react-native";
// this is the default padding of the screen
const defaultPaddingHorzontal = 42;
export default StyleSheet.create({
  navCon: {
    flexDirection: "row",
    justifyContent: "space-between",

    height: 80,
    alignItems: "center",
  },
  rightNavItems: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: defaultPaddingHorzontal,
  },
  navItem: {
    height: 50,
    width: 50,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 20,
  },
  home: {
    justifyContent: "center",
    alignItems: "center",
  },
  backImg: {
    position: "absolute",
    marginTop: Platform.OS === "android" ? -25 : 0,
  },
  profile: {
    position: "relative",
    marginLeft: 15,
    height: "100%",
    width: 60,
  },

  profileItem: {
    position: "absolute",
    top: 10,
    left: 5,
  },
});