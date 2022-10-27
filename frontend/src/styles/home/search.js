import { StyleSheet } from "react-native";

export default StyleSheet.create({
  action: {
    position: "absolute",
    top: 0,
    right: 0,
    // backgroundColor: "#333",
    height: 45,
    display: "flex",
    justifyContent: "center",
    width: 60,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  googleSearchBox: {
    container: {
      height: 45,
      width: "100%",
      maxHeight: 45,
      zIndex: 25,
      position: "relative",
    },
    textInput: {
      elevation: 5,
      borderRadius: 30,
      paddingHorizontal: 20,
      paddingRight: 60,
      paddingTop: 8,
      fontFamily: "poppins-r",
      color: "#999999",
    },
    listView: {
      elevation: 5,
      position: "absolute",
      marginTop: 55,
    },
  },
});
