import { StyleSheet } from "react-native";

export default StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    borderRadius: 30,
    overflow: "hidden",
    height: 45,
    backgroundColor: "#fff",
    elevation: 5,
  },

  searchIcon: {
    paddingHorizontal: 15,
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 12,
    backfaceVisibility: "hidden",
    paddingVertical: 12,
  },
});
