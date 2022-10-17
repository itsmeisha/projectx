import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -60,
    left: 0,
    width: "100%",
    height: 450,
    backgroundColor: "#E9F3FF",
    paddingHorizontal: 50,
    paddingVertical: 50,
    borderRadius: 50,
  },
  titleCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "poppins-m",
  },
});
