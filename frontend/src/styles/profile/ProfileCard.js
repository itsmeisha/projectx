import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    marginTop: 106,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 40,
    alignItems: "center",
    borderRadius: 35,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  contents: {
    marginLeft: 15,
  },
  name: {
    fontFamily: "poppins-m",
    fontSize: 20,
  },
  secondaryText: {
    fontFamily: "poppins-r",
    fontSize: 12,
    color: "#6D6D6D",
  },
  joined: {
    marginTop: 20,
  },
  achievements: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 210,
    alignItems: "center",
    marginTop: 20,
  },
  achievement: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: "#d9d9d9",
    marginLeft: 4,
    borderRadius: 15,
    marginTop: 4,
    fontFamily: "poppins-r",
  },
});
