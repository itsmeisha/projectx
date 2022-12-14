import { View, Text, Pressable } from "react-native";
import React from "react";

// styles
import styles from "../../styles/global/Nav";

// icons
import HomeIcon from "../../../assets/svg/nav/home.svg";
import HistoryIcon from "../../../assets/svg/nav/history.svg";
import UserIcon from "../../../assets/svg/nav/user.svg";
import HomeIconBlue from "../../../assets/svg/nav/homeb.svg";
import HistoryIconBlue from "../../../assets/svg/nav/historyb.svg";
import UserIconBlue from "../../../assets/svg/nav/userb.svg";

const Nav = ({ navigator, active }) => {
  return (
    <View style={styles.container}>
      {/* home */}
      <Pressable
        onPress={() => {
          navigator.navigate("HomeScreen");
        }}
      >
        <View style={styles.navItem}>
          {active === "HomeScreen" ? (
            <HomeIconBlue style={styles.activeIcon} />
          ) : (
            <HomeIcon />
          )}
          {active === "HomeScreen" ? (
            <Text style={styles.activeText}>Home</Text>
          ) : null}
          {/* name  if active*/}
        </View>
      </Pressable>

      {/* Profile */}
      <Pressable
        onPress={() => {
          navigator.navigate("ProfileScreen");
        }}
      >
        <View style={styles.navItem}>
          {active === "ProfileScreen" ? (
            <UserIconBlue style={styles.activeIcon} />
          ) : (
            <UserIcon />
          )}
          {active === "ProfileScreen" ? (
            <Text style={styles.activeText}>Profile</Text>
          ) : null}
          {/* name  if active*/}
        </View>
      </Pressable>
      {/* log */}
      <Pressable
        onPress={() => {
          navigator.navigate("LogScreen");
        }}
      >
        <View style={styles.navItem}>
          {active === "LogScreen" ? (
            <HistoryIconBlue style={styles.activeIcon} />
          ) : (
            <HistoryIcon />
          )}
          {active === "LogScreen" ? (
            <Text style={styles.activeText}>Log</Text>
          ) : null}
          {/* name  if active*/}
        </View>
      </Pressable>
    </View>
  );
};

export default Nav;
