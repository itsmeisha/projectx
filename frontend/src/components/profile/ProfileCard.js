import { View, Text, Image } from "react-native";
import React from "react";

// styles
import styles from "../../styles/profile/ProfileCard.js";
const ProfileCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data?.photo }} style={styles.logo} />
      <View style={styles.contents}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={[styles.joined, styles.secondaryText]}>
          <Text>Joined : </Text>
          {data?.doj}
        </Text>
        <Text style={[styles.contact, styles.secondaryText]}>
          <Text>contact : </Text>
          {data?.contact}
        </Text>
        <View style={styles.achievements}>
          {data?.achievements?.map((achievement, index) => {
            return (
              <Text style={styles.achievement} key={index}>
                {achievement}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
