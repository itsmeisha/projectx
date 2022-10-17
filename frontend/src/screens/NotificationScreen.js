import { View, Text, SafeAreaView, Platform } from "react-native";
import React, { useContext } from "react";

// components
import Header from "../components/global/Header.js";
import IndividualNotif from "../components/notifications/IndividualNotif.js";

// styles
import styles from "../styles/notification/NotificationScreen.js";

// context
import { contextProvider } from "../../Context.js";

const NotificationScreen = ({ navigation }) => {
  const {
    notif: [notification],
  } = useContext(contextProvider);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <Header navigator={navigation} heading={"Notifications"} />
      <View style={[styles.container]}>
        {notification.map((element, index) => {
          return <IndividualNotif data={element} key={index} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
