import { View, Text } from "react-native";
import React from "react";

// components
import NotificationLogo from "./NotificationLogo.js";
// styles
import styles from "../../styles/notification/IndividualNotif.js";
const IndividualNotif = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* gets the logo according to the notification type */}
      <NotificationLogo type={data?.type} />

      <View style={styles.textCon}>
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.description}>{data?.message}</Text>
      </View>
    </View>
  );
};

export default IndividualNotif;
