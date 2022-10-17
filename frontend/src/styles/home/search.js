import { StyleSheet } from "react-native";

export default StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    width: 330,
    paddingHorizontal: 15,
    alignSelf: "center",
    overflow: "hidden",
    height: 45,
    backgroundColor: "#fff",
    elevation: 5,
  },

  searchIcon: {
    // paddingHorizontal: 15,
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 12,
    backfaceVisibility: "hidden",
    // paddingVertical: ,
    fontFamily: "poppins-m",
    fontSize: 16,
    height: 45,
    lineHeight: 45,
    paddingLeft: 10,
  },
});
