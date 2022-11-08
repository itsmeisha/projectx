import { View, Text, SafeAreaView, Platform } from "react-native";
import React, { useContext } from "react";

// components
import Header from "../components/global/Header.js";
import IndividualNotif from "../components/notifications/IndividualNotif.js";
import NoData from "../components/global/NoData.js";

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
        {/* printing notification if they exists and no data if not */}
        {notification.length > 0 && notification ? (
          notification.map((element, index) => {
            return <IndividualNotif data={element} key={index} />;
          })
        ) : (
          <NoData type="notification" navigator={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
