import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";

// components
import Nav from "../components/global/Nav";
import Header from "../components/global/Header";
import ProfileCard from "../components/profile/ProfileCard.js";
import AmbulanceCard from "../components/profile/AmbulanceCard.js";
import AmbulancePopup from "../components/profile/AmbulancePopup";

// styles
import styles from "../styles/profile/ProfileScreen.js";

// Context
import { contextProvider } from "../../Context";

const ProfileScreen = ({ navigation }) => {
  const {
    usr: [user],
    profile: {
      popup: [, setAmbPopup],
      ambulance: [myAmbulance],
    },
  } = useContext(contextProvider);

  if (!user || Object.keys(user).length === 0 || !user?.id) {
    navigation.navigate("AuthScreen");
  }
  console.log(myAmbulance);

  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 30 : 0,
          height: "100%",
        }}
      >
        <Header navigator={navigation} heading={user?.name} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <ProfileCard data={user} />
            {myAmbulance && Object.keys(myAmbulance).length > 0 ? (
              <>
                <Text style={styles.ownedAmb}>Ambulances owned</Text>
                <AmbulanceCard data={user?.ambulance} />
              </>
            ) : (
              <Pressable onPress={() => setAmbPopup("add")}>
                <Text style={styles.addAmbulance}>Add Ambulance</Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
        <AmbulancePopup />
        <Nav active={"ProfileScreen"} navigator={navigation} />
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
