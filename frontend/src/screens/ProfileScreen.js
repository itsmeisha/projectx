import { View, Text, SafeAreaView, Platform, Pressable } from "react-native";
import React from "react";

// components
import Nav from "../components/global/Nav";
import Header from "../components/global/Header";
import ProfileCard from "../components/profile/ProfileCard.js";
import AmbulanceCard from "../components/profile/AmbulanceCard.js";

// styles
import styles from "../styles/profile/ProfileScreen.js";

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: "kapil Tripathi",
    doj: "sep 23rd",
    contact: "person@gmail.com",
    achievements: ["New", "Helper", "Tracker"],
    Ambulance: {
      name: "Lumbini ambulance",
      vehicleNumber: "L142134/23412",
      phoneNumber: "+977 9867100588",
      state: true,
    },
  };
  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 30 : 0,
          height: "100%",
        }}
      >
        <Header navigator={navigation} heading={user.name} />
        <View style={styles.container}>
          <ProfileCard data={user} />
          {user?.Ambulance ? (
            <>
              <Text style={styles.ownedAmb}>Ambulances owned</Text>
              <AmbulanceCard data={user?.Ambulance} />
            </>
          ) : (
            <Pressable>
              <Text style={styles.addAmbulance}>Add Ambulance</Text>
            </Pressable>
          )}
        </View>
        <Nav active={"ProfileScreen"} navigator={navigation} />
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
